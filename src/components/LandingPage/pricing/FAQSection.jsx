
import { useState } from 'react'

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What Is AI Tool Content Writing Tool?",
            answer: "Our AI Tool is an advanced content writing assistant that helps you create high-quality content efficiently. It uses state-of-the-art AI technology to help you generate, edit, and optimize your writing."
        },
        {
            question: "Is there a limit on how much content I can generate?",
            answer: "The content generation limits depend on your subscription plan. Free users get a specific number of credits monthly, while premium users enjoy higher or unlimited generation capabilities."
        },
        {
            question: "Is it helpful for Digital Marketer or Content Writer?",
            answer: "Yes, our AI Tool is specifically designed to assist both digital marketers and content writers. It helps with creating marketing copy, blog posts, social media content, and more while maintaining your brand's voice."
        },
        {
            question: "What Languages does it support?",
            answer: "Our AI Tool supports multiple languages including English, Spanish, French, German, Italian, Portuguese, and many more. We're constantly adding support for new languages."
        },
        {
            question: "What is SEO Writing AI and how do I use it?",
            answer: "SEO Writing AI is our specialized tool that helps you create search engine optimized content. It provides keyword suggestions, readability analysis, and optimization tips while you write."
        }
    ]

    return (
        <div className="min-h-screen bg-[#0F0720] py-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-8">
                        <span className="mr-2">✨</span>
                        <span className="text-purple-200">Questions About our AI Tool?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-purple-200 max-w-2xl mx-auto">
                        Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and
                        pre-built examples, making it easier to quickly kickstart your AI startup.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-purple-900/50 rounded-lg overflow-hidden bg-[#1A1033]/50 hover:bg-[#1A1033] transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className="ml-6 flex-shrink-0">
                                    <svg
                                        className={`w-6 h-6 text-purple-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 pb-4 text-purple-200">
                                    {faq.answer}
                                </div>
                            </div>
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
        </div>
    )
}

