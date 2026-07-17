// Escapes raw HTML so nothing in the AI's output can inject real tags/scripts.
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Converts a markdown string into a safe HTML string.
 * Supports: headers, bold, italic, inline code, code blocks,
 * links, unordered/ordered lists, and paragraphs.
 */
export function formatMarkdown(markdown = "") {
  if (!markdown) return "";

  // 1. Pull out code blocks first and stash them, so nothing inside
  //    a code block gets mangled by the other regex passes.
  const codeBlocks = [];
  let text = markdown.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = escapeHtml(code.trim());
    const html = `<pre class="bg-black/80 text-green-200 text-xs rounded-lg p-3 overflow-x-auto my-3"><code>${escaped}</code></pre>`;
    codeBlocks.push(html);
    return `%%CODEBLOCK_${codeBlocks.length - 1}%%`;
  });

  // 2. Escape everything else so raw HTML in the text can't execute.
  text = escapeHtml(text);

  // 3. Inline code
  text = text.replace(
    /`([^`]+)`/g,
    '<code class="bg-black/10 rounded px-1 py-0.5 text-[0.85em]">$1</code>'
  );

  // 4. Headers (###, ##, #)
  text = text.replace(/^### (.*)$/gm, '<h3 class="font-semibold text-base mt-2 mb-1">$1</h3>');
  text = text.replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg mt-2 mb-1">$1</h2>');
  text = text.replace(/^# (.*)$/gm, '<h1 class="font-bold text-xl mt-2 mb-1">$1</h1>');

  // 5. Bold and italic
  text = text.replace(/\*\*(.+?)\*\*/g, "<strong class='text-gradient-2'>$1</strong>");
  text = text.replace(/(?<!\*)\*(?!\*)(.+?)\*(?!\*)/g, "<em>$1</em>");
  text = text.replace(/(?<!_)_(?!_)(.+?)_(?!_)/g, "<em>$1</em>");

  // 6. Links [text](url)
  text = text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-blue-600 hover:text-blue-800">$1</a>'
  );

  // 7. Lists — group consecutive list lines into <ul>/<ol>
  text = text.replace(/(^|\n)((?:[-*] .*\n?)+)/g, (match, lead, block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^[-*]\s+/, "")}</li>`)
      .join("");
    return `${lead}<ul class="list-disc list-inside space-y-0.5 my-1">${items}</ul>`;
  });

  text = text.replace(/(^|\n)((?:\d+\. .*\n?)+)/g, (match, lead, block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`)
      .join("");
    return `${lead}<ol class="list-decimal list-inside space-y-0.5 my-1">${items}</ol>`;
  });

  // 8. Paragraph breaks — turn remaining blank-line-separated chunks into <p>,
  //    but skip lines that are already block-level HTML we generated above.
  text = text
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<(h1|h2|h3|ul|ol|pre)/.test(trimmed)) return trimmed;
      return `<p class="mb-1 last:mb-0">${trimmed.replace(/\n/g, "<br/>")}</p>`;
    })
    .join("");

  // 9. Restore code blocks
  text = text.replace(/%%CODEBLOCK_(\d+)%%/g, (_, i) => codeBlocks[Number(i)]);

  return text;
}

export default function MarkdownMessage({ content }) {
  return (
    <div
      className="prose-sm max-w-none [&_a]:break-words"
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
    />
  );
}