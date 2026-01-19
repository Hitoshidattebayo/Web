import React, { useEffect, useRef } from 'react';
import logo from '../assets/mu-logo.png';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseColor = '#e74c3c'; // Brand color for particles
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (150 - distance) / 150;
                        const directionX = forceDirectionX * force * 0.5;
                        const directionY = forceDirectionY * force * 0.5;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.baseColor;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(231, 76, 60, ${1 - distance / 120})`; // Fade out line
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            overflow: 'hidden'
        }}>
            {/* Interactive Canvas Background */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                padding: 'clamp(1rem, 3vw, 2rem)',
                maxWidth: '1200px', // Increased width to fit slogan
                margin: '0 auto'
            }}>
                <img
                    src={logo}
                    alt="MU Education"
                    style={{
                        height: 'clamp(70px, 15vw, 120px)',
                        width: 'auto',
                        margin: '0 auto clamp(1rem, 3vw, 2rem)',
                        display: 'block'
                    }}
                />

                <h1 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', // Adjusted for better fit
                    fontWeight: '900',
                    color: '#2c3e50',
                    marginBottom: '1rem',
                    lineHeight: '1.1',
                    letterSpacing: '-1px',
                    textTransform: 'uppercase' // Added uppercase
                }}>
                    Дэлхийн боловсролын боломж.<br />
                    <span style={{ color: '#e74c3c' }}>Тодорхой чиглэл. Бодит үр дүн</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    color: '#7f8c8d',
                    marginBottom: 'clamp(2rem, 4vw, 3rem)',
                    maxWidth: '600px',
                    margin: '0 auto clamp(2rem, 4vw, 3rem)'
                }}>
                    Бид таны зөв сонголт, бэлтгэл, амжилт бүрт тань цуг
                </p>

                <a href="/apply" className="btn btn-primary" style={{
                    padding: 'clamp(0.875rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3.5rem)',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    borderRadius: '50px',
                    boxShadow: '0 10px 30px rgba(231, 76, 60, 0.3)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '700'
                }}>
                    Үнэгүй зөвлөгөөнд хамрагдах
                </a>
            </div>
        </section>
    );
};

export default Hero;
