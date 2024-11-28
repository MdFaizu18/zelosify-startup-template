'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function FeaturesSectionTwo() {
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isInView) {
            controls.start('visible')
        }
    }, [isInView, controls])

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const features = [
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>, title: "Intelligent Writing Assistance", description: "Our AI writing tool analyzes your content, suggests improvements," },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>, title: "Grammar and Spell Check", description: "Say goodbye to embarrassing typos and grammar mistakes" },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Plagiarism Detection", description: "Originality is key, and our AI writing tool helps you maintain it" },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>, title: "Voice to Text Conversion", description: "Transform your spoken words into written text easily & effortlessly" },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>, title: "Style and Tone Adaptation", description: "Whether you need a professional, or positive tone it has everyone" },
        { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>, title: "Content Generation", description: "Need inspiration or assistance with generating content?" },
    ]

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
    }

    return (
        <section className="bg-gradient-to-b from-[#1A1033] to-[#0F071F] py-20 px-4 sm:px-32 relative overflow-hidden" id="features">
            <div className="max-w-6xl mx-auto relative">
                <motion.div className="text-center mb-20">
                
                    <motion.h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                           Key Features of our Tool
                        </span>
                    </motion.h2>
                    <motion.p className="text-purple-200/80 max-w-3xl mx-auto text-lg">
                        Our AI writing tool is designed to empower you with exceptional writing capabilities.
                    </motion.p>
                </motion.div>
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            <div className="bg-[#0F071F]/80 backdrop-blur-sm rounded-xl p-8 hover:bg-[#090413]/90 transition-all duration-500 relative h-full border border-purple-900/20 group-hover:border-purple-500/30">
                                <motion.div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                                        {feature.icon}
                                    </div>
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-purple-200/70 group-hover:text-purple-200 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {isVisible && (
                <motion.button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110 z-50">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </section>
    )
}
