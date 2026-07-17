import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import Avatar from "../Images/Avatar.png";
import Yuji from "../Images/Yuji.png";
import { sendMessage } from "../service/AI";
import MarkdownMessage from "../service/MarkdownMessage";

export default function ChatBot() {
  const [showChat, setShowChat] = useState(false);
  const [mounted, setMounted] = useState(false); // controls actual DOM presence
  const [animateIn, setAnimateIn] = useState(false); // controls transition classes

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Ayooo what's good! 👋 I'm **Jhon Llyod's AI twin** — same brain, way faster, never sleeps, and *lowkey* a lil more lit ngl 😤\n\nAsk me about his **projects**, his **stack**, or how to **hire him** — I'm locked in and ready to talk." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Handle mount/unmount + animation timing
  useEffect(() => {
    let timeout;
    if (showChat) {
      setMounted(true);
      // wait a tick so the browser registers the "closed" state first,
      // then flip to "open" so the transition actually plays
      timeout = requestAnimationFrame(() => setAnimateIn(true));
    } else {
      setAnimateIn(false);
      timeout = setTimeout(() => setMounted(false), 250); // match transition duration
    }
    return () => {
      cancelAnimationFrame?.(timeout);
      clearTimeout(timeout);
    };
  }, [showChat]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "My bad, something broke on my end. Try again?" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Floating avatar toggle */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          aria-label="Open chat"
          className="fixed bottom-5 right-5 z-20 animate-bounce"
        >
          <img
            src={Avatar}
            alt="Jhon Llyod's Avatar"
            width={56}
            height={56}
            loading="lazy"
            className="w-14 h-14 object-contain p-2 rounded-full backdrop-blur-xs bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
          />
        </button>
      )}

      {/* Modal */}
      {mounted && (
        <div
          className={`fixed inset-0 z-30 flex items-center justify-center p-4 transition-opacity duration-250 ease-out ${
            animateIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={() => setShowChat(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
          />

          {/* Panel */}
          <div
            className={`relative flex backdrop-blur-xs  flex-col w-full max-w-2xl h-[85vh] sm:h-[600px] rounded-2xl overflow-hidden bg-[rgba(11,11,11,.6)] border border-white/10 transition-all duration-250 ease-out ${
              animateIn ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[rgba(255,255,255,0.02)] border border-white/10">
              <div className="flex items-center gap-2">
                <img src={Avatar} alt="" className="w-8 h-8 rounded-full object-contain" />
                <span className="font-bold text-sm">Jhon Llyod</span>
              </div>
              <button
                onClick={() => setShowChat(false)}
                aria-label="Close chat"
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (

                <div className={`flex flex-col gap-2 
                ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div className={`flex ${m.role === "user" ? "flex-row-reverse" : ""} items-center gap-2  font-bold`}>
                    <img src={m.role === "user" ? Yuji : Avatar} alt="Profile pic" className="w-8 h-8 rounded-full object-contain border border-white/10" />
                    <span className="text-xs">{m.role === "user" ? "The Chosen One" : "Jhon Llyod"}</span>
                  </div>
                  <div
                    key={i}
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm bg-[rgba(255,255,255,0.02)] border border-white/10 ${
                      m.role === "user"
                        ? "ml-auto  text-white rounded-br-sm"
                        : "mr-auto  text-white rounded-bl-sm"
                    }`}
                  >
                    <MarkdownMessage content={m.content} />
                  </div>
                </div>

              ))}
              {loading && (
                <div className="mr-auto w-fit flex items-center gap-2 px-3 py-2 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-white/10 text-sm text-gray-500">
                  <Loader2 size={14} className="animate-spin" />
                  typing...
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex items-end gap-2 px-3 py-3 bg-[rgba(255,255,255,0.02)] border border-white/10">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask me anything..."
                className="flex-1 resize-none bg-[rgba(255,255,255,0.02)] border border-white/10 rounded-xl px-3 py-2 text-sm outline-none max-h-24"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="px-4 py-2 flex-center rounded-full text-white disabled:opacity-40 hover:bg-white/20  transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}