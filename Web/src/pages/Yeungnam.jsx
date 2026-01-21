import React, { useEffect, useRef } from 'react';
import { Map } from 'lucide-react';
import YeungnamHistory from '../components/YeungnamHistory';
import YeungnamCurriculum from '../components/YeungnamCurriculum';
import KoreanLanguageInstitute from '../components/KoreanLanguageInstitute';
import AdmissionInfo from '../components/AdmissionInfo';
import ScholarshipInfo from '../components/ScholarshipInfo';
import WhyChooseYeungnam from '../components/WhyChooseYeungnam';
import YeungnamGallery from '../components/YeungnamGallery';
import yeungnamCampus from '../assets/yeungnam-campus-clean.jpg';

const Yeungnam = () => {
    const canvasRef = useRef(null);
    const ctaCanvasRef = useRef(null);

    // Particle animation effect
    const useParticleAnimation = (canvasRef) => {
        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let animationFrameId;
            let particles = [];
            let mouse = { x: null, y: null };

            const resizeCanvas = () => {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            };

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            const handleMouseMove = (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            };

            const handleMouseOut = () => {
                mouse.x = null;
                mouse.y = null;
            };

            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseout', handleMouseOut);

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.size = Math.random() * 2 + 1;
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                    if (mouse.x != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 150) {
                            const forceDirectionX = dx / distance;
                            const forceDirectionY = dy / distance;
                            const force = (150 - distance) / 150;
                            this.x -= forceDirectionX * force * 0.5;
                            this.y -= forceDirectionY * force * 0.5;
                        }
                    }
                }

                draw(color) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = color || '#e74c3c';
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
                const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();

                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw(primaryColor);

                    for (let j = i; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 120) {
                            ctx.beginPath();
                            const color = primaryColor === '#27ae60' ? '39, 174, 96' : '231, 76, 60';
                            ctx.strokeStyle = `rgba(${color}, ${1 - distance / 120})`;
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
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('mouseout', handleMouseOut);
                cancelAnimationFrame(animationFrameId);
            };
        }, [canvasRef]);
    };

    useParticleAnimation(canvasRef);
    useParticleAnimation(ctaCanvasRef);

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '300px',
                display: ' flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                overflow: 'hidden'
            }}>
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

                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    maxWidth: '1000px',
                    padding: '2rem'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1rem',
                        fontWeight: '800',
                        color: 'var(--color-primary)'
                    }}>
                        YEUNGNAM UNIVERSITY COLLEGE
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'var(--spacing-xl)',
                        alignItems: 'center',
                        marginBottom: 'var(--spacing-lg)',
                        paddingTop: 'var(--spacing-lg)'
                    }}>
                        <div>
                            <img
                                src={yeungnamCampus}
                                alt="Yeungnam University Campus"
                                style={{
                                    width: '100%',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-lg)'
                                }}
                            />
                            <p style={{
                                marginTop: '1rem',
                                fontSize: '0.9rem',
                                color: 'var(--color-text-muted)',
                                fontStyle: 'italic',
                                textAlign: 'center'
                            }}>
                                Ённам Техникийн Коллеж нь нийт 88,145 м² талбай бүхий 18 барилга байгууламжтай бөгөөд
                                Ённам Их Сургуулийн Эмнэлгийн Төвтэй хамт байрладаг.
                            </p>
                        </div>

                        <div>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--color-text-muted)',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                Тэргүүлэх мэргэжлийн сургууль болохын хувьд Ённам Техникийн Коллеж нь оюутнуудын өрсөлдөх чадварыг хөгжүүлэх дэлхий дахины мэргэжлийн боловсролын загварыг бий болгож ирсэн. Мөн бид төгсөгчдөө олон улсын нийгэмд хувь нэмэр оруулах чадвартай болгохын тулд дэлхий даяар хөтөлбөрөө түгээх зорилготой.
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--color-text-muted)',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                Манай сургуулийн тэргүүлэх зорилт бол оюутан, аж үйлдвэр хоорондын ойр харилцаанд тулгуурлан дэлхийн түвшний мэргэжлийн боловсролыг олгож, БНСУ-ыг дэлхийтэй холбох юм.
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--color-text-muted)'
                            }}>
                                Одоогийн байдлаар Ённам Техникийн Коллеж нь өөрийн үнэт зүйл, хүсэл тэмүүллийг хуваалцан, дэлхийн эрин үеийн боловсролын байгууллага болон хөгжихөөр бэлтгэж байна.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Gallery */}
            <YeungnamGallery />

            {/* 3D Virtual Map Button */}
            <div style={{ textAlign: 'center', marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
                <a
                    href="https://exam.ync.ac.kr/VR/index.html?fbclid=IwY2xjawOnBrJleHRuA2FlbQIxMABicmlkETFDNEZ6ZlFOTDdBSWd6U29Hc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpkYF3Ws4StOuCgx7fyBQ4zcEoU4StC2xwbJ0qUeMhd4rsss2mvxDxfg0MDB_aem_yZo_UeNX7ULoSNiYuliNcg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        padding: '1rem 2.5rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: '600',
                        boxShadow: 'var(--shadow-md)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    }}
                >
                    <Map size={20} style={{ marginRight: '10px' }} /> 3D CAMPUS MAP
                </a>
            </div>

            {/* History Section */}
            <YeungnamHistory />

            {/* Korean Language Institute Section */}
            <KoreanLanguageInstitute />

            {/* Majors/Curriculum Section */}
            <YeungnamCurriculum />

            {/* Admission Information Section */}
            <AdmissionInfo />

            {/* Scholarship and Benefits Section */}
            <ScholarshipInfo />

            {/* Why Choose Yeungnam Section */}
            <WhyChooseYeungnam />

            {/* CTA Section with Interactive Background */}
            <section style={{
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                padding: 'var(--spacing-xl) 0'
            }}>
                <canvas
                    ref={ctaCanvasRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                />

                <div className="container" style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: 'var(--spacing-xl)',
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <h3 style={{
                            marginBottom: 'var(--spacing-md)',
                            fontSize: '2rem',
                            color: 'var(--color-text-main)'
                        }}>
                            Бид таны гүүр болох болно
                        </h3>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1.1rem',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: '1.8'
                        }}>
                            Mu Education нь таныг Yeungnam University College-д элсэхэд шаардлагатай бүх зөвлөгөө, тусламжийг үзүүлэх болно.
                        </p>
                        <a href="/apply" className="btn btn-primary" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem'
                        }}>
                            ХОЛБОО БАРИХ
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Yeungnam;
