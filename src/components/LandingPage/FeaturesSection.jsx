export default function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Intelligent Writing Assistance",
            description: "Our AI writing tool analyzes your content, suggests improvements,"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "Grammar and Spell Check",
            description: "Say goodbye to embarrassing typos and grammar mistakes"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Plagiarism Detection",
            description: "Originality is key, and our AI writing tool helps you maintain it"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            title: "Voice to Text Conversion",
            description: "Transform your spoken words into written text easily & effortlessly"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            title: "Style and Tone Adaptation",
            description: "Whether you need a professional, or positive tone it has everyone"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            ),
            title: "Content Generation",
            description: "Need inspiration or assistance with generating content?"
        }
    ]

    return (
        <section className="bg-[#0F0720] py-20 px-4 sm:px-32" id="features">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-8">
                        <span className="mr-2">✨</span>
                        <span className="text-purple-200">Some of Main Features</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Key Features of Our Tool
                    </h2>

                    <p className="text-purple-200 max-w-3xl mx-auto text-lg">
                        Our AI writing tool is designed to empower you with exceptional writing capabilities, making
                        the writing process more efficient, accurate, and enjoyable.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1033]/50 rounded-xl p-8 hover:bg-[#1A1033] transition-colors duration-300 flex flex-col items-center text-center"
                        >
                            <div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-purple-200">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll to top button */}
            <button className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </section>
    )

}

