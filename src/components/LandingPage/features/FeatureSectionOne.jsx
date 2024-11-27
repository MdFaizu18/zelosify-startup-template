


export default function FeatureSectionOne() {
    return (
        <div className="min-h-screen  bg-[#0F0720] pt-12">
            {/* Header Section */}
            {/* Main Content */}
            <div className="w-full px-4 py-12 md:py-2  sm:py-0">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 px-8">
                            <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full">
                                <span className="text-purple-300">About Our App</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                10,000+ Writers, Marketers, & Business owners Love AI Tool.
                            </h2>

                            <p className="text-lg text-purple-200">
                                Build SaaS AI applications using OpenAI and Next.js, this kit comes with
                                pre-configured and pre-built examples, making it easier to quickly
                                kickstart your AI startup.
                            </p>

                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors duration-300">
                                Start Writing - It's Free
                            </button>
                        </div>

                        {/* Right UI Mockup */}
                        <div className="bg-[#1A1033] rounded-xl p-6">
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-1 space-y-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="h-8 bg-purple-900/30 rounded"></div>
                                    ))}
                                </div>
                                <div className="col-span-2 space-y-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-4 bg-purple-900/30 rounded w-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full px-4 py-12 md:py-20 bg-[#1A1033]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                        See AI Tool in Action
                    </h3>

                    <div className="relative aspect-video rounded-xl overflow-hidden bg-[#12071A]">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster="/placeholder.svg?height=480&width=854"
                        >
                            <source src="/demo-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Button Overlay */}
                        <button className="absolute inset-0 flex items-center justify-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-purple-600/90 group-hover:bg-purple-600 transition-colors duration-300">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <p className="mt-6 text-purple-200">
                        Watch how AI Tool can transform your writing process and boost your productivity.
                    </p>
                </div>
            </div>
        </div>
    )
}

