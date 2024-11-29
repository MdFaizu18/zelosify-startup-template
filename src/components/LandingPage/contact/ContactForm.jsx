import React, { useEffect, useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyEmail: '',
        phone: '',
        companyName: '',
        primaryLocation: '',
        heardAbout: '', // Dropdown field
    })

    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    // Calculate form completion progress
    useEffect(() => {
        const fields = Object.values(formData)
        const filledFields = fields.filter(field => field.trim() !== '').length
        const newProgress = (filledFields / fields.length) * 100
        setProgress(newProgress)
    }, [formData])

    // Scroll to top visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setIsVisible(true)
            else setIsVisible(false)
        }
        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
  return (
    <div>
          {/* Form Card */}
          <div className="bg-[#1A1033] backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-900/30">
                  <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                  />
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="relative group">
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                          placeholder="Name*"
                      />
                      <label
                          htmlFor="name"
                          className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-350 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                      >
                          Name*
                      </label>
                  </div>

                  <div className="relative group">
                      <input
                          type="email"
                          name="companyEmail"
                          value={formData.companyEmail}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                          placeholder="Company Email*"
                      />
                      <label
                          htmlFor="companyEmail"
                          className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-350 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                      >
                          Company Email*
                      </label>
                  </div>

                  <div className="relative group">
                      <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                          placeholder="Phone Number*"
                      />
                      <label
                          htmlFor="phone"
                          className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-350 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                      >
                          Phone Number*
                      </label>
                  </div>

                  <div className="relative group">
                      <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                          placeholder="Company Name*"
                      />
                      <label
                          htmlFor="companyName"
                          className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-350 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                      >
                          Company Name*
                      </label>
                  </div>

                  <div className="relative group">
                      <input
                          type="text"
                          name="primaryLocation"
                          value={formData.primaryLocation}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                          placeholder="Primary Location*"
                      />
                      <label
                          htmlFor="primaryLocation"
                          className="absolute left-4 -top-6 text-sm text-purple-200/80 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-350 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-200"
                      >
                          Primary Location*
                      </label>
                  </div>

                  <div className="relative group">
                      <select
                          name="heardAbout"
                          value={formData.heardAbout}
                          onChange={handleInputChange}
                          className="peer w-full px-4 py-3 rounded-lg bg-[#1A1033]/50 border border-purple-900/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-transparent transition-all duration-300"
                      >
                          <option value="" disabled>
                              How did you hear about us?*
                          </option>
                          <option value="Word of Mouth">Word of Mouth</option>
                          <option value="Search Engine">Search Engine</option>
                          <option value="News">News</option>
                          <option value="LinkedIn">LinkedIn</option>
                      </select>
                  </div>

                  <button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${progress === 100 ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
                          }`}
                      disabled={progress !== 100}
                  >
                      Reach Us Out
                  </button>
              </form>
          </div>
      </div >
 
  )
}

export default ContactForm