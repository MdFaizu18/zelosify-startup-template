import React from 'react'
import { Helmet } from 'react-helmet'
import LandingNavbar from '../../components/LandingPage/LandingNavbar'
import PageBanner from '../../components/LandingPage/PageBanner'
import PricingSection from '../../components/LandingPage/pricing/PricingSection'
import FooterSection from '../../components/LandingPage/FooterSection'
import FAQSection from '../../components/LandingPage/pricing/FAQSection'
import BetaFeatureAnnouncement from '../../components/LandingPage/pricing/BetaFeatureAnnouncement'

const PricingPage = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Pricing | zelosify</title>
        </Helmet>
      </div>
      <div>
        <LandingNavbar />
      </div>
      {/* <div>
              <PageBanner
                  title="Pricing Page"
                  subtitle="Discover Our Powerful Tools"
              />
          </div> */}
      <div>
        {/* <PricingSection/> */}
        <BetaFeatureAnnouncement />
      </div>
      <div>
        <FAQSection />
      </div>
      <div>
        <FooterSection />
      </div>
      <div>
        <button
          className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-lg hover:bg-purple-700"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default PricingPage