import { Helmet } from "react-helmet";
import AnimatedDashboardPreview from "../../components/LandingPage/AnimatedDashboardPreview";
import BlogSection from "../../components/LandingPage/BlogSection";
import ContactForm from "../../components/LandingPage/ContactPage";
import FeatureCards from "../../components/LandingPage/features/FeatureCards";
import FeaturesSectionTwo from "../../components/LandingPage/features/FeaturesSection";

import FooterSection from "../../components/LandingPage/FooterSection";
import LandingNavbar from "../../components/LandingPage/LandingNavbar";
import PricingSection from "../../components/LandingPage/pricing/PricingSection";
import TestimonialsSection from "../../components/LandingPage/TestimonialsSection";

export default function LandingPage() {
    return (
        <>
            <div>
                <Helmet>
                    <title>Zelosify - Empowering Innovation, One Step at a Time</title>
                </Helmet>
            </div>
            <div className="min-h-screen bg-[#0F0720] text-white">
                {/* Navigation */}
                <LandingNavbar />
                

                {/* Hero Section */}
                <main id="home" className="container mx-auto px-4 pt-40 pb-32 text-center">
                    <h1
                        className="text-3xl md:text-6xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto
                        bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 bg-clip-text text-transparent"
                        style={{ lineHeight: '1.2' }}
                    >
                        Elevate Your Content with Our AI-Powered Writing Tool
                    </h1>
                    <p className="text-gray-400 text-lg md:text-lg max-w-3xl mx-auto mb-12">
                        Highly customizable Tailwind CSS template for AI - Tool, Startup, Software, App and Product Sites.
                        Comes with everything you need - pages, features, sections, components and more that you can easily customize.
                    </p>

                    <button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-2 rounded-lg font-medium">
                        Book Your Demo
                    </button>
                    {/* Dashboard Preview */}
                    <AnimatedDashboardPreview />
                </main>

                    <FeaturesSectionTwo />
                    <FeatureCards />
                    <PricingSection />
                    {/* <TestimonialsSection /> */}
                    <ContactForm />
                    {/* <BlogSection /> */}
                    <FooterSection />

                {/* Scroll to top button */}
                <button className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </>
    )
}

