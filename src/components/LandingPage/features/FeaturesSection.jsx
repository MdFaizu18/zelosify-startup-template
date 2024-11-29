'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import featuresImg from '../../../assets/images/features.webp'

const features = [
    {
        title: "Centralized Contract Intelligence",
        description: "Aggregate, organize, and access all your contract data in one unified platform, turning unstructured information into actionable insights instantly.",
        color: "#FF6B6B",
        image: featuresImg
    },
    {
        title: "Search with Confidence",
        description: "Get instant answers to your queries with highlighted citations, ensuring accuracy and reliability every time.",
        color: "#4ECDC4",
        image: featuresImg
    },
    {
        title: "Insights That Drive Action",
        description: "Uncover deep insights from contracts using advanced generative AI, empowering smarter and faster decisions.",
        color: "#FFB7D1",
        image: featuresImg
    },
    // {
    //     title: "Multilingual Support",
    //     description: "Break language barriers with instant translation and localization features, expanding your reach to a global audience.",
    //     color: "#F7B731"
    // },
    // {
    //     title: "SEO Optimization",
    //     description: "Boost your content's visibility with built-in SEO tools that help your writing rank higher in search results.",
    //     color: "#A55EEA"
    // }
]

const Planet = ({ feature, index, isActive, onClick }) => {
    return (
        <motion.div
            className="cursor-pointer flex items-center mb-12 last:mb-0"
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
        >
            <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-6 shrink-0"
                style={{ backgroundColor: feature.color }}
                animate={{ scale: isActive ? 1.2 : 1 }}
            >
                {index + 1}
            </motion.div>
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200/80">{feature.description}</p>
            </div>
        </motion.div>
    )
}

export default function FeaturesSectionTwo() {
    const [activeFeature, setActiveFeature] = useState(0)
    const containerRef = useRef(null)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [0, 300], [-5, 5])

    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect()
            mouseY.set(e.clientY - rect.top)
        }

        containerRef.current.addEventListener('mousemove', handleMouseMove)
        return () => {
            containerRef.current?.removeEventListener('mousemove', handleMouseMove)
        }
    }, [mouseY])

    return (
        <section className="bg-[#0F071F] min-h-screen flex items-center justify-center overflow-hidden relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                            Explore Our Universe of Features
                        </span>
                    </h2>
                    <p className="text-purple-200/80 max-w-3xl mx-auto text-lg">
                        Embark on a journey through our zelosify galaxy, where each feature is a world of possibilities.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                    <motion.div
                        ref={containerRef}
                        className="w-full md:w-1/2 perspective-1000 mb-12 md:mb-0"
                        style={{ rotateX }}
                    >
                        {/* Central "sun" representing the main product */}
                        <motion.div
                            className="w-32 h-32 rounded-full bg-yellow-500 mx-auto mb-12"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 animate-pulse" />
                        </motion.div>

                        {/* Vertical line connecting planets */}
                        <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-purple-500/20 transform -translate-x-1/2" />

                        {/* Planets representing features */}
                        {features.map((feature, index) => (
                            <Planet
                                key={index}
                                feature={feature}
                                index={index}
                                isActive={activeFeature === index}
                                onClick={() => setActiveFeature(index)}
                            />
                        ))}
                    </motion.div>

                    {/* Feature description */}
                    <motion.div
                        className="w-full md:w-1/2 md:pl-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">
                            {features[activeFeature].title}
                        </h3>
                        <p className="text-purple-200/80">
                            {features[activeFeature].description}
                        </p>
                        <div className='lg:px-14 sm:px-2'>
                            <img className='h-[400px] mt-12 rounded-lg'
                            src={features[activeFeature].image} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background stars */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-twinkle"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    )
}


