import CTASection from "./CTASection"
import Logo from '../../assets/logos/main-logo.png'
import { Link } from "react-router-dom"


export default function FooterSection() {
    const footerLinks = {
        Products: [
            { name: 'Features', href: '#features' },
            { name: 'Integrations', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Changelog', href: '#' },
        ],
        Company: [
            { name: 'About us', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Use', href: '#' }
        ],
        SocialMedia: [
            { name: 'LinkedIn', href: '#' },
            { name: 'X / Twitter', href: '#' },
            { name: 'Instagram', href: '#' }
        ]
    }

    return (
        <footer className="bg-[#0F0720]">
            {/* CTA Section */}
            <CTASection />

            {/* Newsletter Section */}
            {/* <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">News & Update</h3>
                        <p className="text-purple-200">Keep up to date with everything about our tool</p>
                    </div>

                    <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="flex-1 px-4 py-3 rounded-lg bg-[#1A1033] border border-purple-900/50 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg whitespace-nowrap transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div> */}

            {/* Footer Links */}
            <div className="border-t border-purple-900/50 mt-12">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="lg:flex  justify-around">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-12"> */}
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <Link to="/" className="flex items-center justify-center space-x-2 h-full ">
                                    <img src={Logo} alt="Zelosify Logo" className="h-8 w-auto sm:h-10" />
                                </Link>
                            </div>

                            <p className="text-purple-200 mb-6">
                                Zelosify, LLC. All rights reserved.
                            </p>

                            {/* <div className="flex space-x-4">
                                <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-purple-200 hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div> */}
                        </div>

                        {/* Footer Links Columns */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-semibold text-white mb-6">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-purple-200 hover:text-white transition-colors duration-300"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

          
                </div>
            </div>


        </footer>

    )
}

