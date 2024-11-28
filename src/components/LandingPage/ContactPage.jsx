'use client'

import { useState, useEffect } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    })

    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    // Calculate form completion progress
    useEffect(() => {
        const fields = Object.values(formData)
        const filledFields = fields.filter(field => field.trim() !== '').length
        const newProgress = (filledFields / fields.length) * 100
        setProgress(newProgress)
    }, [formData])

    // Scroll to top visibility
    if (typeof window !== 'undefined') {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setIsVisible(true)
            else setIsVisible(false)
        }
        window.addEventListener('scroll', toggleVisibility)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0F0720] to-[#0A051A] py-20 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full mix-blend-screen animate-float"
                        style={{
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 20}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-3xl mx-auto relative ">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* <div className="inline-flex items-center bg-purple-900/30 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-purple-300 mr-2" />
                        <span className="text-purple-200 font-medium">Book a Demo</span>
                    </div> */}

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                            Let's Book a demo
                        </span>
                    </h2>

                    <p className="text-purple-200/80 max-w-2xl mx-auto text-lg">
                        See how our AI Tool can help achieve your business goals
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#1A1033] backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-purple-900/30">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                    placeholder="First name"
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                                >
                                    First name*
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                    placeholder="Last name"
                                />
                                <label
                                    htmlFor="lastName"
                                    className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                                >
                                    Last name*
                                </label>
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                placeholder="Business email"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                            >
                                Business email*
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                placeholder="Phone number"
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                            >
                                Phone number*
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                placeholder="Company name"
                            />
                            <label
                                htmlFor="company"
                                className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                            >
                                Company name*
                            </label>
                        </div>

                        <div className="relative group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300 resize-none"
                                placeholder="Your message"
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                            >
                                Your message*
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${progress === 100 ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
                            disabled={progress !== 100}
                        >
                            Reach Us Out
                        </button>

                        <div className="text-center">
                            <p className="text-purple-200/60 text-sm">
                                By submitting this form, you agree to our{' '}
                                <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                                    Terms & Conditions
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Scroll to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-110 animate-fade-in z-50"
                >
                    <ArrowUp className="w-6 h-6 text-white" />
                </button>
            )}
        </div>
    )
}

