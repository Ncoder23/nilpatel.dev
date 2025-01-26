import React, { useState } from "react";

const ChatInterface = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { sender: "user", text: input }]);
        setInput("");
    };

    return (
        <div className="col-span-2 bg-black bg-opacity-50 h-screen w-full flex items-end mb-40">
            <div className="bg-red-700">
                <p>Hello</p>
            </div>
            {/* <div className="w-full max-w-md bg-primary rounded-lg shadow-lg flex flex-col">

                <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-2 rounded-lg ${message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                                }`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="p-4 border-t">
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                </div>
            </div> */}
            <button
                onClick={onClose}
                className="text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
                ← Go Back
            </button>
        </div>
    );
};

export default ChatInterface;
