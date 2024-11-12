import { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const ChatInterface = () => {
    const [messages, setMessages] = useState<{ sender: 'human' | 'ai'; text: string }[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const messagesContainerRef = useRef<HTMLDivElement | null>(null);
    const maxLength = 50;

    const handleSendMessage = () => {
        if (inputValue.trim() && !loading) {
            setMessages((prev) => [...prev, { sender: 'human', text: inputValue.trim() }]);
            setInputValue('');
            setLoading(true);

            setTimeout(() => {
                setMessages((prev) => [...prev, { sender: 'ai', text: "This is an AI response." }]);
                setLoading(false);
            }, 1000);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= maxLength) {
            setInputValue(e.target.value);
        }
    };

    // Auto-scroll logic
    useEffect(() => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="fixed sm:mt-0 mt-2 bottom-50 sm:bottom-50 sm:bottom-4 right-6 w-[calc(100%-48px)] sm:w-[calc(100%-446px)] h-[calc(100vh-515px)] sm:h-[calc(100vh-430px)] border rounded-xl sm:p-5 p-2 bg-white flex flex-col">
            <div
                ref={messagesContainerRef}
                className="flex flex-col h-full mb-3 p-3 rounded-lg text-xl overflow-y-auto scrollbar-container"
            >
                {messages.length === 0 ? (
                    <div className="text-center text-gray-500 sm:text-xl text-sm">No messages yet</div>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex items-end gap-2 mb-2 ${
                                message.sender === 'human' ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            {message.sender === 'ai' && (
                                <div className="flex-shrink-0 sm:mr-2">
                                    <Image
                                        src="/icon/ai-chat.png"
                                        alt="AI avatar"
                                        height={50}
                                        width={50}
                                        className="rounded-full border-2 sm:border-4 h-6 w-6 sm:h-12 sm:w-12"
                                    />
                                </div>
                            )}
                            <div
                                className={`p-3 sm:p-4 sm:pl-6 sm:pr-6 sm:text-lg text-xs sm:max-w-2xl ${
                                    message.sender === 'human'
                                        ? 'bg-[#F5F3FF] text-black text-right rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl'
                                        : 'text-black text-left rounded-tl-3xl rounded-tr-3xl rounded-br-3xl'
                                }`}
                                style={
                                    message.sender === 'ai'
                                        ? { background: 'linear-gradient(180deg, #D2FFF8 0%, #D7EEFF 100%)' }
                                        : undefined
                                }
                            >
                                {message.text}
                            </div>
                            {message.sender === 'human' && (
                                <div className="flex-shrink-0 sm:ml-2">
                                    <Image
                                        src="/icon/human-chat.png"
                                        alt="Human avatar"
                                        height={50}
                                        width={50}
                                        className="rounded-full border-2 sm:border-4 h-6 w-6 sm:h-12 sm:w-12"
                                    />
                                </div>
                            )}
                        </div>
                    ))
                )}
                {/* This div is used to anchor the scroll */}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex mt-3 sm:gap-6 gap-2 relative">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={loading}
                        className={`text-xs sm:text-xl rounded-3xl p-3 sm:p-6 w-full bg-[#F5F5FF] pr-12 ${
                            loading ? 'opacity-50' : ''
                        }`}
                        placeholder={loading ? "Waiting for AI response..." : "Type your message..."}
                    />
                    <span className="absolute right-3 bottom-3 text-gray-500 text-xs sm:text-sm">
                        {maxLength - inputValue.length} / {maxLength}
                    </span>
                </div>
                <button
                    onClick={handleSendMessage}
                    disabled={loading || inputValue.length === 0 || inputValue.length > maxLength}
                    className={`w-[80px] sm:w-[200px] px-4 sm:px-6 bg-[#4929FF] text-white rounded-full flex flex-row items-center ${
                        loading || inputValue.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <svg className="h-6 sm:h-7 w-6 sm:w-7" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11ZM10.6999 5.55971C10.6061 5.59848 10.5207 5.65505 10.4484 5.72629L10.4437 5.731L6.51514 9.65957C6.44219 9.73262 6.38435 9.81933 6.34491 9.91474C6.30547 10.0101 6.2852 10.1124 6.28528 10.2156C6.28535 10.3189 6.30576 10.4211 6.34533 10.5164C6.38491 10.6118 6.44288 10.6984 6.51593 10.7714C6.58898 10.8443 6.67569 10.9022 6.77109 10.9416C6.8665 10.981 6.96874 11.0013 7.07198 11.0012C7.17522 11.0012 7.27744 10.9807 7.37279 10.9412C7.46814 10.9016 7.55476 10.8436 7.62771 10.7706L10.2143 8.18243V15.7143C10.2143 15.9227 10.2971 16.1225 10.4444 16.2699C10.5918 16.4172 10.7916 16.5 11 16.5C11.2084 16.5 11.4082 16.4172 11.5556 16.2699C11.7029 16.1225 11.7857 15.9227 11.7857 15.7143V8.18243L14.3723 10.7706C14.5198 10.9181 14.7199 11.001 14.9286 11.001C15.1372 11.001 15.3373 10.9181 15.4849 10.7706C15.6324 10.623 15.7153 10.4229 15.7153 10.2143C15.7153 10.0056 15.6324 9.80554 15.4849 9.658L11.5563 5.72943L11.5516 5.72629C11.4417 5.61794 11.3023 5.54436 11.1508 5.51474C10.9993 5.48512 10.8425 5.50076 10.6999 5.55971Z" fill="white"/>
                    </svg>
                    <p className="ml-1 sm:ml-2 text-xs sm:text-xl">Ask Now</p>
                </button>
            </div>

            <style jsx>{`
                .scrollbar-container::-webkit-scrollbar {
                    width: 8px;
                }

                .scrollbar-container::-webkit-scrollbar-track {
                    background: transparent;
                }

                .scrollbar-container::-webkit-scrollbar-thumb {
                    background: #cccccc;
                    border-radius: 4px;
                }

                /* Tailwind CSS media query to change scrollbar width on smaller screens */
                @media (max-width: 767px) {
                    .scrollbar-container::-webkit-scrollbar {
                        width: 2px;
                    }
                }
            `}</style>

        </div>
    );
};

export default ChatInterface;
