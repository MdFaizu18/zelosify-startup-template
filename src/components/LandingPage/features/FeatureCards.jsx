export default function FeatureCards() {
    return (
        <div className="bg-[#0F0720]  p-4 md:p-8 md:px-40 mt-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Main Feature Card */}
                <div className="relative bg-[#1A1033] rounded-3xl p-8 overflow-hidden">
                    {/* Content */}
                    <div className="relative z-10 max-w-xl">
                        <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-6">
                            <span className="mr-2">✨</span>
                            <span className="text-purple-200">The new era of vendor relationship is here</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Simplify Contract Management
                        </h2>

                        <p className="text-purple-200 mb-8">
                            Easily handle large volumes of contracts with centralized organization and advanced analytics.
                        </p>

                        <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors duration-300">
                            Join now
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute right-80 top-1/2 -translate-y-1/2 mr-32">
                        <div className="relative">
                            <div className="w-[800px] h-[800px] rounded-full bg-purple-600/20 absolute animate-pulse"></div>
                            <div className="w-[600px] h-[600px] rounded-full bg-purple-600/30 absolute top-4 left-4"></div>
                            <div className="w-[400px] h-[400px] rounded-full bg-purple-600/40 absolute top-8 left-8 flex items-center justify-center">
                                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-xl text-white">••</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Feature Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Writing Excellence Card */}
                    <div className="bg-[#1A1033] rounded-3xl p-8 hover:bg-[#1A1033]/80 transition-colors duration-300">
                        <div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            Recover Hidden Value
                        </h3>

                        <p className="text-purple-200">
                            Spot and recover missed opportunities buried in complex vendor agreements...
                        </p>
                    </div>

                    {/* Grammar Check Card */}
                    <div className="bg-[#1A1033] rounded-3xl p-8 hover:bg-[#1A1033]/80 transition-colors duration-300">
                        <div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            Make Smarter Decisions
                        </h3>

                        <p className="text-purple-200">
                            Gain instant insights to optimize vendor performance and contract term
                        </p>
                    </div>
                </div>

                {/* Scroll to top button */}
                <button className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

