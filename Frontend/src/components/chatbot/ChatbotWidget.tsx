import React, { useState, useRef, useEffect } from "react";

interface Props {
  onClose: () => void;
}

interface Message {
  from: "user" | "bot";
  text: string;
}

const ChatbotWidget: React.FC<Props> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000"; // 🔹 Backend URL

  // Ref for messages container
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();
      const botMessage: Message = {
        from: "bot",
        text: data.reply || "⚠️ No response",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Server error, please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    // z- ensures the chatbot stays above all other elements, including navbars
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col z-">
      {/* Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-2xl flex justify-between items-center">
        <h2 className="text-lg font-semibold">💬 Ideovent Chatbot</h2>
        <button onClick={onClose} className="text-white font-bold">✕</button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 h-72">
        {messages.map((msg, i) => (
          <div
            key={i}
        
            className={`p-2 rounded-lg max-w-[75%] ${
              msg.from === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-300 text-gray-700 px-3 py-2 rounded-lg w-fit">
            Typing...
          </div>
        )}
        {/* Dummy ref for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;
