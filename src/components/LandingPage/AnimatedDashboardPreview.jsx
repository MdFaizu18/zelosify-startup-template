'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedDashboardPreview() {
    const svgRef = useRef(null)

    useEffect(() => {
        const svg = svgRef.current
        if (!svg) return

        const animate = () => {
            const paths = svg.querySelectorAll('path')
            paths.forEach((path) => {
                const length = path.getTotalLength()
                path.style.strokeDasharray = `${length} ${length}`
                path.style.strokeDashoffset = `${length}`
                path.getBoundingClientRect()
                path.style.transition = 'stroke-dashoffset 3.5s ease-in-out'
                path.style.strokeDashoffset = '0'
            })
        }

        animate()
        const interval = setInterval(animate, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mt-20 relative px-4 md:px-16 lg:px-32 xl:px-64">
            <div className="bg-[#1A1033] rounded-lg p-6 shadow-2xl overflow-hidden">
                <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1 space-y-4">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-8 bg-purple-900/30 rounded overflow-hidden"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 4, delay: i * 2.5 }}
                            >
                                <motion.div
                                    className="h-full bg-purple-500/20"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 4,
                                        ease: 'linear',
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className="col-span-3 space-y-4">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-8 bg-purple-900/30 rounded w-full overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: i * 3 }}
                            >
                                <motion.div
                                    className="h-full w-full bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: 'linear',
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="mt-6 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <motion.div
                            className="relative w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-visible"
                            whileHover={{ scale: 10.5 }} // Scale up on hover
                            transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition
                        >
                            <span className="absolute top-[7px] text-white font-semibold text-xs opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Explore Us More
                            </span>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div>
    )
}
