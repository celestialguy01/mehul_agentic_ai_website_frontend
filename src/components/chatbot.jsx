import React from "react";
import ChatUI from "./ChatUI";
import useChatLogic from "./useChatLogic";

export default function Chatbot({
  strokeWidth = 17,
  radius = 24,
  strokeColor = "#000000",
}) {
  const {
    messages,
    input,
    setInput,
    sendMessage,
    loading,
  } = useChatLogic();

  return (
    <div className="flex flex-col items-center px-3 w-full sm:px-4">

      <div
        className="
          w-full 
          max-w-[420px] sm:max-w-md md:max-w-lg
          flex flex-col overflow-hidden
        "
        style={{
          border: `${window.innerWidth < 640 ? strokeWidth * 0.6 : strokeWidth}px solid ${strokeColor}`,
          borderRadius: `${radius}px`,
          aspectRatio: window.innerWidth < 640 ? "5 / 7" : "5 / 6",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Better inner spacing */}
        <div className="flex overflow-hidden flex-col flex-1 p-2 sm:p-3 md:p-4">
          <ChatUI
            messages={messages}
            input={input}
            setInput={setInput}
            onSend={sendMessage}
            loading={loading}
          />
        </div>
      </div>

    </div>
  );
}