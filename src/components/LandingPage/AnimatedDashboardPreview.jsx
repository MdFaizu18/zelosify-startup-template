'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send } from 'lucide-react';

const MacWindow = ({ children }) => (
    <div className="w-full max-w-4xl mx-auto bg-[#1A1033]/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20">
        <div className="h-12 bg-[#2A1052]/80 border-b border-purple-500/20 flex items-center px-4 gap-2">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
        </div>
        <div className="p-6 sm:p-12">
            {children}
        </div>
    </div>
);

const TypingAnimation = () => {
    const texts = [
        "What is SLA performance of vendors for IT support?",
        "How can I reduce the cost of contracts with ABC vendor?",
        "Which clauses in app support contracts cut costs?",
        "Analyze vendor performance trends over the last quarter.",
        "Identify top-performing vendors based on SLA metrics.",
    ];

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 50;
    const pauseDuration = 2000;

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting && charIndex < texts[index].length) {
                setDisplayText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === texts[index].length) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <div className="relative w-full max-w-full mx-auto overflow-hidden">
            <div className="flex items-center bg-[#0F071F] rounded-full shadow-lg px-4 sm:px-6 py-3 border border-purple-500/30">
                <Search className="w-5 h-5 text-purple-300 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="flex-1 text-purple-100 font-medium truncate whitespace-nowrap">
                    {displayText}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-[2px] h-5 bg-purple-300 ml-1"
                    />
                </div>
                <Send className="w-5 h-5 text-purple-300 flex-shrink-0" />
            </div>
        </div>
    );
};

export default function AnimatedDashboardPreview() {
    return (
        <div className="relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F071F] via-[#0F071F] to-[#0F071F]" />

            {/* Content */}
            <div className="relative mt-24 flex items-center justify-center p-4">
                <MacWindow>
                    <TypingAnimation />
                </MacWindow>
            </div>
        </div>
    );
}

