import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function useChatLogic() {
  // 🔹 Chat messages
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "I'm an AI assistant. You can ask about exhibits, timings, or how this system is built, and share details about its creator.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Send message
  const sendMessage = async (query) => {
    if (!query.trim()) return;

    setLoading(true);

    // Add user + placeholder assistant message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: query },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      // 🔴 Rate limit handling
      if (response.status === 429) {
        throw new Error("Too many requests. Please slow down.");
      }

      const data = await response.json();

      const botText = data.answer;
      
      // Update assistant message
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: botText,
        };
        return updated;
      });

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error.message || "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    loading,
  };
}
