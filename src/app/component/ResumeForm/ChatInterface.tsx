"use client";

import { useEffect, useRef, useState } from 'react';

const ChatInterface = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages((prev) => [...prev, inputValue.trim()]);
            setInputValue('');
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="relative bottom-0 left-0 right-0 w-full border rounded-lg p-5 bg-white mt-5">
            <div className="flex flex-col-reverse h-60 mb-3 overflow-y-auto border p-3 rounded-lg">
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500">No messages yet</div>
                ) : (
                    messages.map((message, index) => (
                        <div key={index} className="mb-2 p-2 bg-gray-100 rounded-lg">
                            {message}
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border rounded-lg p-2 flex-grow"
                    placeholder="Type your message..."
                />
                <button
                    onClick={handleSendMessage}
                    className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInterface;
