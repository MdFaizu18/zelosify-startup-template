'use client'

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LandingNavbar from '../../components/LandingPage/LandingNavbar';
import FooterSection from '../../components/LandingPage/FooterSection';
import { Sparkles, MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';


export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
    })

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const fields = Object.values(formData)
        const filledFields = fields.filter(field => field.trim() !== '').length
        const newProgress = (filledFields / fields.length) * 100
        setProgress(newProgress)
    }, [formData])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Contact Us | zelosify</title>
                </Helmet>
            </div>
            <div>
                <LandingNavbar />
            </div>

            <div className="min-h-screen bg-[#0F0720] pt-24 px-4 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-full">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full mix-blend-screen animate-float"
                                style={{
                                    width: `${Math.random() * 10 + 5}rem`,
                                    height: `${Math.random() * 10 + 5}rem`,
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${Math.random() * 10 + 10}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Header */}
                    <div className="text-center mb-12">

                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                               Contact Us
                            </span>
                        </h2>

                        <p className="text-purple-200/80 max-w-2xl mx-auto text-lg mb-12">
                            Have questions about our AI Tool? We're here to help. Reach out to us and we'll get back to you as soon as possible.
                        </p>
                          
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
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
                                            className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
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
                                            className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
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
                                        className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                                    >
                                        Email*
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Phone Number*"
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                                    >
                                        Phone Number*
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                                        placeholder="Company Name*"
                                    />
                                    <label
                                        htmlFor="companyName"
                                        className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-300/30 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                                    >
                                        Company Name*
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300 resize-none"
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
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8 md:pl-8">
                            <div className="bg-[#1A1033] backdrop-blur-sm rounded-3xl p-8 space-y-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                                        <span className="text-purple-200">123 AI Street, Tech City, TC 12345</span>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-purple-400 mt-1" />
                                        <span className="text-purple-200">contact@aitool.com</span>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-purple-400 mt-1" />
                                        <span className="text-purple-200">+1 (555) 123-4567</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="relative h-[300px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Contact illustration"
                                    fill
                                    className="object-cover"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}

