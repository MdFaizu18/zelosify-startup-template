'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login attempt with:', { email, password })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0F0720] to-[#0A051A] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl text-white font-serif italic">𝓩</span>
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Sign up to your account
                </h2>
                <p className="mt-2 text-center text-sm text-purple-200">
                    Or{' '}
                    <Link href="/register" className="font-medium text-purple-400 hover:text-purple-300">
                        start your 14-day free trial
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-[#1A1033]/30 py-8 px-4 shadow sm:rounded-lg sm:px-10 backdrop-blur-sm relative">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-purple-500/20 to-transparent -m-[1px]" />

                    <form className="space-y-6 relative" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                               User Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    autoComplete="text"
                                    required
                                    value={userName}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-purple-900/50 rounded-md shadow-sm placeholder-purple-300/30 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-[#1A1033]/50 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                                Mobile Number
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="number"
                                    autoComplete="number"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-purple-900/50 rounded-md shadow-sm placeholder-purple-300/30 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-[#1A1033]/50 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                   
                   
                   
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-purple-200">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-purple-900/50 rounded-md shadow-sm placeholder-purple-300/30 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-[#1A1033]/50 text-white"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-purple-200">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-purple-900/50 rounded-md shadow-sm placeholder-purple-300/30 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-[#1A1033]/50 text-white"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 text-center">
                                    Already have an account?
                                </Link>
                            </div>

                          
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-purple-900/30"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#1A1033] text-purple-200">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            {['facebook', 'twitter', 'github'].map((provider) => (
                                <div key={provider}>
                                    <a
                                        href="#"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-purple-900/30 rounded-md shadow-sm bg-[#1A1033]/50 text-sm font-medium text-purple-200 hover:bg-[#1A1033] transition-colors duration-300"
                                    >
                                        <span className="sr-only">Sign in with {provider}</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

