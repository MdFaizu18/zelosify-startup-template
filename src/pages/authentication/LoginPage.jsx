'use client'
import { Helmet } from "react-helmet";
import FooterSection from "../../components/LandingPage/FooterSection";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div>
                <Helmet>
                    <title>Sign in | zelosify </title>
                </Helmet>
            </div>
            <div>
                <LandingNavbar />
            </div>

            <div className="min-h-screen bg-[#0F0720] flex items-center justify-center p-4 pt-12">
                <div className="bg-[#1A1033] rounded-3xl p-8 md:p-12 w-full max-w-5xl grid md:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="space-y-6 ">
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Unlock the Power of Writing Tool
                        </h1>

                        {/* UI Mockup */}
                        <div className="bg-[#12071A] rounded-xl p-6 ">
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-4 bg-purple-900/30 rounded w-1/4"></div>
                                <div className="h-4 bg-purple-900/30 rounded w-3/4"></div>
                                <div className="h-4 bg-purple-900/30 rounded w-3/4"></div>
                                <div className="h-4 bg-purple-900/30 rounded w-1/2"></div>
                                <div className="h-4 bg-purple-900/30 rounded w-2/3"></div>
                                <div className="h-4 bg-purple-900/30 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Sign In Form */}
                    <div className="space-y-6">
                        {/* Social Sign In Buttons */}
                        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span>Sign in with Google</span>
                        </button>

                        {/* <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span>Sign in with Github</span>
                        </button> */}

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-purple-900/50"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#1A1033] text-purple-200">Or sign in with email</span>
                            </div>
                        </div>

                        {/* Email Sign In Form */}
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg bg-[#12071A] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                                    />
                                    <svg className="w-5 h-5 text-purple-300/50 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-3 rounded-lg bg-[#12071A] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                                    />
                                    <svg className="w-5 h-5 text-purple-300/50 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="w-4 h-4 rounded border-purple-900/50 bg-[#12071A] text-purple-600 focus:ring-purple-600" />
                                    <span className="text-purple-200">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-purple-500 hover:text-purple-400">Forgot Password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-3 rounded-lg transition-colors duration-300"
                            >
                                Sign in with AI Tool
                            </button>
                        </form>

                        <p className="text-center text-purple-200">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-purple-500 hover:text-purple-400">Sign Up for Free</Link>
                        </p>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    )
}

