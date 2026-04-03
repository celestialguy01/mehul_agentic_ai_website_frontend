import React, { useRef, useEffect } from "react";

export default function ChatUI({
  messages,
  input,
  setInput,
  onSend,
  loading,
}) {
  const bottomRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);
  
  return (
    <div className="flex overflow-hidden flex-col w-full h-full bg-white rounded-lg">

      {/* 🔹 Header */}
      <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900 sm:text-base">
        AI Assistant- CSMVS Museum, Mumbai  
        </p>
      </div>

      {/* 🔹 Messages */}
      <div 
        ref= {messagesRef}
        className=" 
          flex-1 overflow-y-auto
          px-2 sm:px-3 md:px-4
          py-3 sm:py-4
          bg-gray-50
          space-y-2.5 sm:space-y-3.5
        "
      >

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "user" ? (
              <div className="
                max-w-[88%] sm:max-w-[75%] md:max-w-[70%]
                bg-gray-800 text-white
                px-3 py-2
                sm:px-4 sm:py-2.5
                rounded-lg sm:rounded-xl
                text-[13px] sm:text-[14px]
                leading-[1.45] sm:leading-relaxed
                break-words
              ">
                {msg.content}
              </div>
            ) : (
              <div className="
                max-w-[88%] sm:max-w-[75%] md:max-w-[70%]
                text-gray-800
                text-[13px] sm:text-[14px]
                leading-[1.5] sm:leading-relaxed
                break-words
                whitespace-pre-line
              ">
                {msg.content}
              </div>
            )}
          </div>
        ))}

        {/* Typing */}
        {loading && (
          <div className="flex justify-start">
            <div className="text-sm tracking-widest text-gray-500 animate-pulse">
              • • •
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* 🔹 Input */}
      <div className="
        flex items-center gap-2
        px-2 sm:px-3 md:px-4
        py-2.5 sm:py-3
        border-t border-gray-200
        bg-white
      ">
        <input
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              onSend(input);
            }
          }}
          className="
            flex-1
            h-[42px] sm:h-[44px]
            px-3
            text-[13px] sm:text-[14px]
            border border-gray-300
            rounded-md sm:rounded-lg
            outline-none
            focus:border-indigo-500
            focus:ring-2 focus:ring-indigo-200
          "
        />

        <button
          onClick={() => input.trim() && onSend(input)}
          className="
            px-3 sm:px-4
            h-[42px] sm:h-[44px]
            text-[13px] sm:text-[14px]
            font-medium
            text-indigo-600
            hover:opacity-70
            transition
            shrink-0
          "
        >
          Send
        </button>
      </div>

      {/* 🔹 Disclaimer */}
      <div className="
        px-2 sm:px-3 md:px-4
        pb-2 sm:pb-3
        text-[9px] sm:text-[12px]
        text-gray-400
        text-left
        leading-tight sm:leading-relaxed
      ">
        This is a demo AI system for demonstration purposes and is not associated with the actual museum.
      </div>
    </div>
  );
}
