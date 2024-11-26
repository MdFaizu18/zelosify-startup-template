'use client'

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles = []
        const particleCount = 100
        const colors = ['#9C27B0', '#673AB7', '#E91E63', '#3F51B5']

        // in jsx we need to add constructor 
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 5 + 1
                this.speedX = Math.random() * 3 - 1.5
                this.speedY = Math.random() * 3 - 1.5
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                // Remove the size reduction line so the particles stay visible indefinitely
                // If you want them to shrink slowly, you can modify the condition here.
                // if (this.size > 0.2) this.size -= 0.1

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }


        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()
            }
            requestAnimationFrame(animate)
        }

        init()
        animate()

        const handleResize = () => {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0F0720] to-[#0A051A] flex flex-col items-center justify-center relative overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            <div className="z-10 text-center">
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-glitch">
                    404
                </h1>
                <div className="mt-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 blur-lg opacity-50"></div>
                    <p className="text-2xl text-purple-200 relative z-10">
                        Oops! Page not found
                    </p>
                </div>
                <div className="mt-8 relative">
                    <div className="w-64 h-64 mx-auto">
                        <div className="astronaut-container">
                            <div className="astronaut">
                                <div className="astronaut-helmet"></div>
                                <div className="astronaut-body"></div>
                                <div className="astronaut-backpack"></div>
                                <div className="astronaut-leg left"></div>
                                <div className="astronaut-leg right"></div>
                                <div className="astronaut-arm left"></div>
                                <div className="astronaut-arm right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 inline-flex items-center group"
                    >
                        Back to Home
                        <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                @keyframes glitch {
                    0% {
                        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    14% {
                        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                            -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                            -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    15% {
                        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    49% {
                        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                            0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                            -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    50% {
                        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                            0.05em 0 0 rgba(0, 255, 0, 0.75),
                            0 -0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    99% {
                        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                            0.05em 0 0 rgba(0, 255, 0, 0.75),
                            0 -0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                    100% {
                        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                            -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                            -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
                    }
                }

                .animate-glitch {
                    animation: glitch 500ms infinite;
                }

                .astronaut-container {
                    width: 100%;
                    height: 100%;
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0% {
                        transform: translatey(0px);
                    }
                    50% {
                        transform: translatey(-20px);
                    }
                    100% {
                        transform: translatey(0px);
                    }
                }

                .astronaut {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .astronaut-helmet {
                    position: absolute;
                    top: 15%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40%;
                    height: 40%;
                    background-color: #fff;
                    border-radius: 50%;
                    border: 4px solid #6B46C1;
                }

                .astronaut-body {
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60%;
                    height: 40%;
                    background-color: #6B46C1;
                    border-radius: 40% 40% 20% 20%;
                }

                .astronaut-backpack {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40%;
                    height: 25%;
                    background-color: #6B46C1;
                    border-radius: 10%;
                }

                .astronaut-leg {
                    position: absolute;
                    bottom: 0;
                    width: 15%;
                    height: 35%;
                    background-color: #6B46C1;
                }

                .astronaut-leg.left {
                    left: 25%;
                }

                .astronaut-leg.right {
                    right: 25%;
                }

                .astronaut-arm {
                    position: absolute;
                    top: 50%;
                    width: 15%;
                    height: 30%;
                    background-color: #6B46C1;
                }

                .astronaut-arm.left {
                    left: 0;
                }

                .astronaut-arm.right {
                    right: 0;
                }
            `}</style>
        </div>
    )
}

export default NotFound
