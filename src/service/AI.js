import OpenAI from "openai";
import systemPrompt from "../service/prompt.md?raw";

// Vite only exposes env vars prefixed with VITE_, and they're read via import.meta.env
const token = import.meta.env.VITE_GITHUB_LLM_API_KEY;

const client = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: token,
  dangerouslyAllowBrowser: true, // required by the SDK for client-side calls — see note below
});

export async function sendMessage(history) {
  const response = await client.chat.completions.create({
    messages: [{ role: "system", content: systemPrompt }, ...history],
    model: "openai/gpt-4o",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
  });

  return response.choices[0].message.content;
}