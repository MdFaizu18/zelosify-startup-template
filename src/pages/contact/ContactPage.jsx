import React from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../../components/LandingPage/PageBanner';
import LandingNavbar from '../../components/LandingPage/LandingNavbar';
import FooterSection from '../../components/LandingPage/FooterSection';

export default function ContactPage() {
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
            <div>
                <PageBanner
                    title="Contact Page"
                    subtitle="Discover Our Powerful Tools"
                />
            </div>
            <div className="bg-[#0F0720] min-h-screen py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-8">
                            <span className="mr-2">✉️</span>
                            <span className="text-purple-200">Get in Touch</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Contact Us
                        </h2>

                        <p className="text-purple-200 max-w-2xl mx-auto">
                            Have questions about our AI Tool? We're here to help. Reach out to us and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-[#1A1033] rounded-xl p-8">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg bg-[#12071A] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg bg-[#12071A] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-[#12071A] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-purple-200">123 AI Street, Tech City, TC 12345</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-purple-200">contact@aitool.com</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-purple-200">+1 (555) 123-4567</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 17.176c-.42.097-.863.15-1.32.15-2.63 0-4.76-2.13-4.76-4.76 0-.457.053-.9.15-1.32.41.19.87.3 1.35.3 1.77 0 3.21-1.44 3.21-3.21 0-.48-.11-.94-.3-1.35.42-.097.863-.15 1.32-.15 2.63 0 4.76 2.13 4.76 4.76 0 .457-.053.9-.15 1.32-.41-.19-.87-.3-1.35-.3-1.77 0-3.21 1.44-3.21 3.21 0 .48.11.94.3 1.35zM12 14.04c-1.13 0-2.04-.91-2.04-2.04 0-1.13.91-2.04 2.04-2.04 1.13 0 2.04.91 2.04 2.04 0 1.13-.91 2.04-2.04 2.04zm0-8.08c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterSection/>
                </div>
            </div>
        </>

    );
}

