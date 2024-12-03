'use client'

import React, { useState, useEffect } from "react"

const MacbookSearchBar = () => {
    const texts = [
        "What is SLA performance of vendors for IT support?",
        "How can I reduce the cost of contracts with ABC vendor?",
        "Which clauses in app support contracts cut costs?",
    ]

    const typingSpeed = 30
    const pauseDuration = 1000
    const backspaceSpeed = 30

    const [currentText, setCurrentText] = useState("")
    const [index, setIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && charIndex < texts[index].length) {
                setCurrentText((prev) => prev + texts[index][charIndex])
                setCharIndex((prev) => prev + 1)
            } else if (isDeleting && charIndex > 0) {
                setCurrentText((prev) => prev.slice(0, -1))
                setCharIndex((prev) => prev - 1)
            } else if (!isDeleting && charIndex === texts[index].length) {
                setTimeout(() => setIsDeleting(true), pauseDuration)
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false)
                setIndex((prev) => (prev + 1) % texts.length)
            }
        }

        const timer = setTimeout(
            handleTyping,
            isDeleting ? backspaceSpeed : typingSpeed
        )

        return () => clearTimeout(timer)
    }, [charIndex, isDeleting, index, texts])

    return (
        <div className="w-full mt-24 sm:mt-12 flex items-center justify-center p-2 sm:p-4">
            <div className="w-full max-w-3xl mx-auto bg-[#171031] rounded-xl shadow-2xl overflow-hidden">
                {/* MacBook-like top bar */}
                <div className="bg-[#25104B] sm:px-4 sm:py-2 px-2 py-2 flex items-center">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* Search bar */}
                <div className="sm:p-6 p-0">
                    <div className="relative flex items-center w-full sm:bg-[#0F071F] bg-[#200d46] sm:rounded-2xl rounded-0">
                        {/* Search Icon - Visible only on desktop */}
                        <svg
                            className="absolute left-3 w-5 h-5 text-purple-300/70 hidden sm:block"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>

                        <div className="absolute left-0 right-0 whitespace-nowrap overflow-hidden">
                            <span className="inline-block text-purple-100 text-[12px] sm:text-lg">
                                {currentText}
                            </span>
                            <span className="inline-block w-[2px] h-5 bg-purple-400 ml-1 animate-pulse"></span>
                        </div>

                        <input
                            type="text"
                            className="w-full h-10 bg-transparent text-purple-100 pl-10 pr-10 focus:outline-none placeholder-purple-300/50 text-sm"
                            disabled
                        />

                        {/* Send Icon - Visible only on desktop */}
                        <button
                            className="absolute right-3 p-1 rounded-full hover:bg-purple-500/10 transition-colors duration-200 hidden sm:block"
                            aria-label="Send message"
                        >
                            <svg
                                className="w-5 h-5 text-purple-300/70"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MacbookSearchBar

