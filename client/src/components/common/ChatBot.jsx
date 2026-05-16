import { useState } from "react";

import {
  HiOutlineChatAlt2,
  HiOutlineX,
  HiOutlinePaperAirplane,
} from "react-icons/hi";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi there! 👋 I'm the GrowthGarage assistant. How can I help you today?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    let botReply = "Thank you for contacting GrowthGarage 🚀";

    const lowerText = input.toLowerCase();

    if (lowerText.includes("service") || lowerText.includes("services")) {
      botReply =
        "We provide Web Development, AI Automation, UI/UX Design, SEO, Branding and Digital Marketing.";
    } else if (lowerText.includes("price") || lowerText.includes("pricing")) {
      botReply =
        "Our pricing depends on your project requirements. We offer affordable startup-friendly plans 💰";
    } else if (lowerText.includes("contact") || lowerText.includes("phone")) {
      botReply =
        "You can contact us at +91 9876543210 or hello@growthgarage.com 📞";
    } else if (lowerText.includes("hello") || lowerText.includes("hi")) {
      botReply = "Hello 👋 Welcome to GrowthGarage. How can we help you today?";
    } else if (lowerText.includes("website")) {
      botReply =
        "Yes 🚀 We create premium modern websites for startups and businesses.";
    } else if (lowerText.includes("seo")) {
      botReply =
        "We provide complete SEO optimization and Google ranking services 📈";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: botReply,
          sender: "bot",
        },
      ]);
    }, 700);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999]">
      {/* CHAT WINDOW */}
      {open && (
        <div className="absolute bottom-24 right-0 w-[95vw] sm:w-[380px] h-[80vh] sm:h-[550px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
          {/* HEADER */}
          <div className="bg-[#1E2B5B] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                G
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  GrowthGarage Assistant
                </h3>

                <p className="text-sm text-gray-300">Online • Ready to help</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <HiOutlineX className="text-2xl" />
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 bg-[#F8FAFC] p-5 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[260px] px-5 py-4 rounded-3xl shadow text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-white text-gray-700 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* QUICK BUTTONS */}
          <div className="px-4 py-3 border-t border-gray-200 flex items-center gap-2">
            <button
              onClick={() => setInput("Tell me about services")}
              className="
      flex-1
      px-3
      py-2
      rounded-full
      bg-[#EEF2FF]
      text-sm
      hover:bg-primary
      hover:text-white
      transition
      text-center
      whitespace-nowrap
    "
            >
              💼 Services
            </button>

            <button
              onClick={() => setInput("Tell me pricing")}
              className="
      flex-1
      px-3
      py-2
      rounded-full
      bg-[#EEF2FF]
      text-sm
      hover:bg-primary
      hover:text-white
      transition
      text-center
      whitespace-nowrap
    "
            >
              💰 Pricing
            </button>

            <button
              onClick={() => setInput("Contact information")}
              className="
      flex-1
      px-3
      py-2
      rounded-full
      bg-[#EEF2FF]
      text-sm
      hover:bg-primary
      hover:text-white
      transition
      text-center
      whitespace-nowrap
    "
            >
              📞 Contact
            </button>
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-gray-200 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 h-14 px-5 rounded-full border border-gray-300 outline-none focus:border-primary"
            />

            <button
              onClick={sendMessage}
              className="w-14 h-14 rounded-full bg-[#1E2B5B] text-white flex items-center justify-center text-2xl hover:scale-105 transition"
            >
              <HiOutlinePaperAirplane />
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-16 h-16
          rounded-full
          bg-gradient-to-r
          from-primary
          to-accent
          text-white
          flex
          items-center
          justify-center
          text-3xl
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        {open ? <HiOutlineX /> : <HiOutlineChatAlt2 />}
      </button>
    </div>
  );
};

export default ChatBot;
