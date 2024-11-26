import { useEffect, useRef } from 'react';

export default function CTASection() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.speed = 0.5 + Math.random() * 0.5;
                this.size = 1 + Math.random() * 2;
                this.opacity = 0.1 + Math.random() * 0.3;
            }

            update() {
                this.y -= this.speed;
                if (this.y < -10) {
                    this.y = canvas.height + 10;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147, 112, 219, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="bg-[#1A1033] rounded-3xl p-12 text-center relative overflow-hidden">
                {/* Grid Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to bottom, rgba(120,119,198,0.1) 1px, transparent 1px),
              linear-gradient(to right, rgba(120,119,198,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 100%)',
                    }}
                />

                {/* Animated Particles */}
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

                <div className="relative z-10">
                    <div className="inline-flex items-center bg-purple-900/30 px-4 py-2 rounded-full mb-8">
                        <span className="mr-2">✨</span>
                        <span className="text-purple-200">Try our tool for Free</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What are you waiting for?
                    </h2>

                    <p className="text-purple-200 max-w-2xl mx-auto mb-8">
                        Our AI writing tool is designed to empower you with exceptional writing capabilities, making
                        the writing process more efficient, accurate, and enjoyable.
                    </p>

                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors duration-300">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </div>
    );
}

