'use client'
import amazonImg from '../../assets/logos/amazon.png'
import facebookImg from '../../assets/logos/facebook.png'
import duoImg from '../../assets/logos/duo.png'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ContactForm() {
    const [isVisible, setIsVisible] = useState(false)

    // Show button when page is scrolled up to given distance
    if (typeof window !== 'undefined') {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // Company logos data
    const companies = [
        { name: 'Amazon', logo: facebookImg },
        { name: 'Facebook', logo: facebookImg },
        { name: 'Tinder', logo: facebookImg },
        { name: 'Airbnb', logo: facebookImg },
        { name: 'Cadbury', logo: facebookImg },
        { name: 'Canon', logo: facebookImg },

    ]

    return (
        <div className="relative">
            {/* Company logos */}
            <div className="bg-[#0F0720] py-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center gap-8 opacity-50">
                        {companies.map((company, index) => (
                            <img
                                key={index}
                                src={company.logo}
                                alt={company.name}
                                className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact" className="bg-gradient-to-b from-[#0F0720] to-[#0A051A] min-h-screen py-20 px-4 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

                <div className="max-w-3xl mx-auto relative">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-purple-900/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                            <span className="mr-2">✨</span>
                            <span className="text-purple-200 text-sm">Need Any Help?</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            Contact With Us
                        </h2>

                        <p className="text-purple-200/80 max-w-2xl mx-auto text-lg">
                            Our AI writing tool is designed to empower you with exceptional writing capabilities, making
                            the writing process more efficient, accurate, and enjoyable.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-[#1A1033]/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
                        {/* Gradient border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/20 to-transparent -m-[1px]" />

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm text-left">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your Name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 backdrop-blur-sm border border-purple-900/50 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm text-left">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        className="w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 backdrop-blur-sm border border-purple-900/50 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white/80 mb-2 text-sm text-left">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 backdrop-blur-sm border border-purple-900/50 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300 resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
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
        </div>
    )
}

