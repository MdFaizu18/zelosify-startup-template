'use client'

import { useEffect, useState } from 'react'

export default function PricingSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const features = [
        "Subscription with levels",
        "Advanced features included",
        "Shared workspaces & tools",
        "Premium versions functionality",
        "Customizing the outputs",
        "Priority customer support"
    ]

    const plans = [
        {
            name: "Starter",
            price: "10",
            icon: (
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            name: "Medium",
            price: "59",
            icon: (
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: "Business",
            price: "289",
            icon: (
                <svg className="w-6 h-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ]

    return (
        <div id="pricing" className="bg-gradient-to-b from-[#0F0720] to-[#0A051A] min-h-screen py-20 px-4 relative overflow-hidden">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center bg-purple-900/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                        <span className="mr-2">✨</span>
                        <span className="text-purple-200 text-sm">Get access</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent">
                        Our Pricing Plan
                    </h2>

                    <p className="text-purple-200/80 max-w-2xl mx-auto text-lg">
                        Our AI writing tool is designed to empower you with exceptional writing capabilities, making
                        the writing process more efficient, accurate, and enjoyable.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="group bg-[#1A1033] rounded-3xl p-8 hover:bg-[#1A1033]/80 transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
                        >
                            {/* Gradient border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/20 to-transparent -m-[1px]" />

                            <div className="relative">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                    <div className="bg-purple-900/30 w-12 h-10 rounded-lg flex items-center justify-center text-purple-200 backdrop-blur-sm">
                                        {plan.icon}
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-3xl font-bold text-white">$</span>
                                        <span className="text-5xl font-bold text-white ml-1">{plan.price}</span>
                                    </div>
                                    <p className="text-purple-300/70 text-sm mt-2">/month (billed annually)</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-purple-200/80">
                                            <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <p style={{textAlign:'left'}}> {feature}</p>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full bg-purple-600/10 hover:bg-purple-600/20 text-purple-300 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        Get the plan
                                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </button>

                                <p className="text-center text-purple-400/60 text-sm mt-4">
                                    No extra hidden charge
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 animate-fade-in z-50"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            )}
        </div>
    )
}

