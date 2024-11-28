import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LandingNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to top whenever the route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Function to close the mobile menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Helper to determine if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-[#1A1033]'} text-white`}
        >
            <div className="container mx-auto px-4 sm:px-16 lg:px-36">
                <div className="flex items-center justify-between sm:justify-between  h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-xl font-serif">𝓩</span>
                        </div>
                        <span className="text-xl font-semibold">Zelosify</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className={`${isActive('/') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} px-3 py-2 rounded-md text-sm font-medium`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className={`${isActive('/features') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} px-3 py-2 rounded-md text-sm font-medium`}
                            onClick={closeMenu}
                        >
                            Features
                        </Link>
                        <Link
                            to="/pricing"
                            className={`${isActive('/pricing') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} px-3 py-2 rounded-md text-sm font-medium`}
                            onClick={closeMenu}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/contact"
                            className={`${isActive('/contact') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} px-3 py-2 rounded-md text-sm font-medium`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/login"
                            className={`${isActive('/login') ? 'bg-purple-600' : 'hover:bg-purple-700'} px-4 py-2 rounded-md text-sm font-medium flex items-center`}
                            onClick={closeMenu}
                        >
                            Sign in
                            <svg
                                className="w-4 h-4 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </Link>
                    </div>

    
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden -mr-2">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-white hover:bg-purple-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A1033]">
                    <Link
                        to="/"
                        className={`${isActive('/') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/features"
                        className={`${isActive('/features') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={closeMenu}
                    >
                        Features
                    </Link>
                    <Link
                        to="/pricing"
                        className={`${isActive('/pricing') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={closeMenu}
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/contact"
                        className={`${isActive('/contact') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                    <div className="border-t border-purple-800 mt-4 pt-4">
                        <Link
                            to="/login"
                            className={`${isActive('/login') ? 'bg-purple-900/50' : 'hover:bg-purple-900/50'} block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={closeMenu}
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/register"
                            className={`${isActive('/register') ? 'bg-purple-600' : 'hover:bg-purple-700'} block px-4 py-2 rounded-md text-sm font-medium`}
                            onClick={closeMenu}
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default LandingNavbar;
