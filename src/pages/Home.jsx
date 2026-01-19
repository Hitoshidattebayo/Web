import React, { useRef } from 'react';
import Hero from '../components/Hero';
import { BookOpen, Users, Globe, Award, Briefcase, GraduationCap, CheckCircle, Compass, Map, HeartHandshake, ArrowRight, Calendar } from 'lucide-react';
import useParticleAnimation from '../hooks/useParticleAnimation';

import TargetAudience from '../components/TargetAudience';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

const Home = () => {
    const ctaCanvasRef = useRef(null);
    useParticleAnimation(ctaCanvasRef);

    return (
        <div>
            <Hero />

            {/* Who We Help Section - Floating Banner Effect */}
            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)', // Softer, more professional shadow
                    padding: 'clamp(0.8rem, 3.8vw, 1.8rem) clamp(0.8rem, 3.8vw, 1.8rem)', // More breathing room horizontally
                    minHeight: 'auto',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    gap: 'clamp(2rem, 4vw, 4rem)', // Generous gap betwen sections
                    flexWrap: 'wrap'
                }}>
                    {/* Decorative Question Mark */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '5%', // Positioned slightly more right
                        transform: 'translateY(-50%)',
                        fontSize: 'clamp(10rem, 15vw, 14rem)', // Large decorative size
                        fontWeight: '900',
                        color: '#E74C3C',
                        opacity: 0.08, // Very subtle fade
                        lineHeight: 1,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        zIndex: 0,
                        fontFamily: '"Cera Pro", sans-serif',
                        maskImage: 'linear-gradient(to right, black 20%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 100%)'
                    }}>?</div>

                    {/* Left Side: Title */}
                    <div style={{
                        flex: '0 1 auto',
                        zIndex: 1,
                        textAlign: 'left', // Changed to left alignment
                        paddingRight: '1rem',
                        minWidth: 'auto'
                    }}>
                        <h2 style={{
                            color: '#2c3e50',
                            lineHeight: '1.1', // Reduced line height significantly
                            margin: 0
                        }}>
                            <span style={{
                                display: 'block',
                                fontSize: 'clamp(1.5rem, 2vw, 1.8rem)',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: '#546E7A',
                                marginBottom: '-5px' // Negative margin to pull them closer
                            }}>
                                Бид хэнд
                            </span>
                            <div>
                                <span style={{
                                    fontSize: 'clamp(1.8rem, 3vw, 2.75rem)',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '-0.02em',
                                    color: '#2C3E50',
                                    marginRight: '0.5rem'
                                }}>
                                    хүрч ажилладаг
                                </span>
                                <span style={{
                                    fontSize: 'clamp(1.5rem, 2vw, 1.8rem)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: '#546E7A'
                                }}>
                                    вэ?
                                </span>
                            </div>
                        </h2>
                    </div>

                    {/* Center: Connector Lines (Desktop) */}
                    <div style={{
                        display: 'none',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '130px', // Matched to list height
                        width: '30px',
                        zIndex: 1,
                        opacity: 0.8
                    }} className="desktop-only-flex">
                        <svg width="30" height="100%" viewBox="0 0 30 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 65 H 15" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M15 15 V 115" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M15 15 H 30" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M15 65 H 30" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M15 115 H 30" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="0" cy="65" r="2.5" fill="#E74C3C" />
                            <circle cx="30" cy="15" r="2.5" fill="#E74C3C" />
                            <circle cx="30" cy="65" r="2.5" fill="#E74C3C" />
                            <circle cx="30" cy="115" r="2.5" fill="#E74C3C" />
                        </svg>
                    </div>

                    {/* Right Side: List Items */}
                    <div style={{
                        flex: '0 1 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem', // Clean standard gap
                        zIndex: 1,
                        alignItems: 'flex-start',
                        minWidth: 'auto'
                    }}>
                        {/* Students */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{
                                width: '45px', // Standard icon box size
                                height: '45px',
                                borderRadius: '12px',
                                backgroundColor: '#EBF5FB',
                                color: '#3498db',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <GraduationCap size={22} />
                            </div>
                            <span style={{
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                color: '#34495E',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em'
                            }}>
                                Сурагчид, Оюутнууд
                            </span>
                        </div>

                        {/* Parents */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '12px',
                                backgroundColor: '#FADBD8',
                                color: '#e74c3c',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Users size={22} />
                            </div>
                            <span style={{
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                color: '#34495E',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em'
                            }}>
                                Эцэг эхчүүд
                            </span>
                        </div>

                        {/* Professionals */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                            <div style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '12px',
                                backgroundColor: '#EAFAF1',
                                color: '#2ecc71',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <Briefcase size={22} />
                            </div>
                            <span style={{
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                color: '#34495E',
                                textTransform: 'uppercase',
                                letterSpacing: '0.02em'
                            }}>
                                Залуу мэргэжилтэнгүүд
                            </span>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (min-width: 768px) {
                        .desktop-only-flex { display: flex !important; }
                    }
                    @media (max-width: 767px) {
                        .container > div > div:nth-child(3) { text-align: center !important; padding-right: 0 !important; } /* Center title on mobile */
                        .container > div > div:nth-child(5) { align-items: center !important; } /* Center list items on mobile */
                    }
                `}</style>
            </div>

            {/* Target Audience Folder Tabs */}
            <TargetAudience />

            {/* Welcome Section */}
            <section className="section">
                <div className="container">
                    {/* Features Grid (Why Choose Us) */}
                    {/* Process Cycle (How It Works) */}
                    <div className="process-section" style={{
                        marginTop: '0',
                        marginBottom: '8rem',
                        position: 'relative'
                    }}>
                        <style>{`
                            .process-container {
                                position: relative;
                                max-width: 1000px;
                                margin: 0 auto;
                            }
                            
                            /* Mobile Layout (Default) */
                            .process-grid {
                                display: flex;
                                flex-direction: column;
                                gap: 2rem;
                            }
                            .process-center-title {
                                text-align: center;
                                margin-bottom: 3rem;
                            }
                            .process-item {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                z-index: 2;
                            }
                            .process-circle-bg {
                                display: none;
                            }

                            /* Desktop Layout */
                            @media (min-width: 992px) {
                                .process-section {
                                    min-height: 950px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }
                                .process-container {
                                    width: 100%;
                                    height: 950px;
                                }
                                .process-grid {
                                    display: block;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    pointer-events: none; /* Let clicks pass through to title if needed */
                                    z-index: 5;
                                }
                                
                                @keyframes orbit {
                                    from { transform: rotate(0deg) translateX(325px) rotate(0deg); }
                                    to { transform: rotate(360deg) translateX(325px) rotate(-360deg); }
                                }
                                
                                /* Central Title */
                                .process-center-title {
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    width: 400px;
                                    z-index: 10;
                                    margin: 0;
                                    pointer-events: auto;
                                }

                                /* The Big Dashed Circle */
                                .process-circle-bg {
                                    display: block;
                                    position: absolute;
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                    width: 650px;
                                    height: 650px;
                                    border: 2px dashed #e74c3c;
                                    border-radius: 50%;
                                    opacity: 0.3;
                                    z-index: 1;
                                }

                                /* Item Positioning */
                                .process-item {
                                    position: absolute;
                                    width: 280px;
                                    /* Center initially */
                                    top: 50%;
                                    left: 50%;
                                    margin-left: -140px;
                                    margin-top: -40px;
                                    
                                    pointer-events: auto; /* Re-enable clicks */
                                    transform-origin: 50% 40px; /* Pivot around the icon center */
                                    animation: orbit 180s linear infinite;
                                }

                                /* Force Icon Background to be opaque white */
                                .process-item > div {
                                    background-color: #ffffff !important;
                                    position: relative;
                                    z-index: 2;
                                }
                                
                                /* Pause animation on hover */
                                .process-grid:hover, .process-item:hover {
                                    animation-play-state: paused;
                                }

                                /* TOP (Step 1) - Starts at -90deg (270deg) -> Delay -135s (3/4 of 180s) */
                                .process-item-1 {
                                    animation-delay: -135s;
                                }
                                
                                /* RIGHT (Step 2) - Starts at 0deg -> Delay 0s */
                                .process-item-2 {
                                    animation-delay: -0s;
                                }

                                /* BOTTOM (Step 3) - Starts at 90deg -> Delay -45s (1/4 of 180s) */
                                .process-item-3 {
                                    animation-delay: -45s;
                                }

                                /* LEFT (Step 4) - Starts at 180deg -> Delay -90s (1/2 of 180s) */
                                .process-item-4 {
                                    animation-delay: -90s;
                                }
                            }
                        `}</style>

                        <div className="process-container">
                            {/* The Dashed Circle Background */}
                            <div className="process-circle-bg"></div>

                            {/* Center Title Group */}
                            <div className="process-center-title">
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1.2rem',
                                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                                    color: '#e74c3c',
                                    borderRadius: '2rem',
                                    fontWeight: '700',
                                    marginBottom: '1rem',
                                    fontSize: '0.8rem',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase'
                                }}>
                                    Процесс
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(1.2rem, 1.8vw, 1.8rem)',
                                    fontWeight: '800',
                                    color: 'var(--color-text-main)',
                                    textTransform: 'uppercase',
                                    lineHeight: '1.2'
                                }}>
                                    MU EDUCATION<br />ХЭРХЭН АЖИЛЛАДАГ ВЭ?
                                </h2>
                            </div>

                            {/* Process Items */}
                            <div className="process-grid">
                                {[
                                    { icon: <Compass size={32} />, title: 'UNDERSTAND YOUR GOALS', desc: 'Таны зорилго, хүсэл мөрөөдлийг тодорхойлж, хамгийн зөв чиглэлийг гаргана.', step: 1 },
                                    { icon: <Map size={32} />, title: 'BUILD A CLEAR EDUCATION PLAN', desc: 'Суралцах сургууль, мэргэжил, тэтгэлэг зэрэгт тохирсон нарийвчилсан төлөвлөгөө.', step: 2 },
                                    { icon: <GraduationCap size={32} />, title: 'PREPARE & APPLY WITH GUIDANCE', desc: 'Элсэлтийн материал, ярилцлага, визний бүрдүүлэлтэд мэргэжлийн туслалцаа.', step: 3 },
                                    { icon: <HeartHandshake size={32} />, title: 'SUPPORT UNTIL RESULTS', desc: 'Зөвхөн элсэлт биш, амжилттай суралцаж, төгсөх хүртэлх байнгын дэмжлэг.', step: 4 }
                                ].map((item, idx) => (
                                    <div key={idx} className={`process-item process-item-${idx + 1}`}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '1rem',
                                            color: '#e74c3c',
                                            position: 'relative'
                                        }}>
                                            {item.icon}
                                            <div style={{
                                                position: 'absolute',
                                                top: '-5px',
                                                right: '-5px',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                backgroundColor: '#e74c3c',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                fontSize: '0.8rem',
                                                border: '2px solid white'
                                            }}>
                                                {item.step}
                                            </div>
                                        </div>

                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem', color: '#2c3e50', textTransform: 'uppercase' }}>
                                            {item.title}
                                        </h3>
                                        <p style={{ color: '#7f8c8d', lineHeight: '1.5', fontSize: '0.9rem' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div style={{
                        marginBottom: '8rem'
                    }}>
                        {/* Section Header */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.4rem 1.2rem',
                                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                color: '#3498db',
                                borderRadius: '2rem',
                                fontWeight: '700',
                                marginBottom: '1rem',
                                fontSize: '0.8rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                🎯 Services
                            </span>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-text-main)' }}>БИДНИЙ ҮЙЛЧИЛГЭЭ</h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            {/* Service 1: Study Abroad */}
                            <div className="card" style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                background: 'white',
                                borderRadius: '20px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '20px',
                                    background: '#e3f2fd',
                                    color: '#3498db',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Globe size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2c3e50', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                                        Гадаадад суралцах цогц үйлчилгээ
                                    </h3>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#95a5a6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Мэдээлэлтэй танилцах &gt;&gt;&gt;
                                    </span>
                                </div>
                            </div>

                            {/* Service 2: Counseling */}
                            <div className="card" style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                background: 'white',
                                borderRadius: '20px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '20px',
                                    background: '#e8f5e9',
                                    color: '#2ecc71',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <BookOpen size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2c3e50', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                                        Боловсрол ба карьерийн зөвлөх үйлчилгээ
                                    </h3>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#95a5a6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Мэдээлэлтэй танилцах &gt;&gt;&gt;
                                    </span>
                                </div>
                            </div>

                            {/* Service 3: Training */}
                            <div className="card" style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                background: 'white',
                                borderRadius: '20px',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{
                                    flexShrink: 0,
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '20px',
                                    background: '#e8f5e9',
                                    color: '#2ecc71',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <GraduationCap size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2c3e50', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                                        Ур чадвар, карьер бэлтгэлийн сургалтууд
                                    </h3>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#95a5a6', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                        Мэдээлэлтэй танилцах &gt;&gt;&gt;
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{
                                padding: '1.2rem 3rem',
                                backgroundColor: '#e74c3c',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px rgba(231, 76, 60, 0.3)',
                                transition: 'all 0.3s ease',
                                width: 'min(100%, 600px)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(231, 76, 60, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(231, 76, 60, 0.3)';
                                }}
                            >
                                <Calendar size={24} />
                                Зөвлөхтэй уулзах цаг захиалах
                            </button>
                        </div>
                    </div>



                    {/* About Us Intro (Moved to Bottom) */}
                    <div style={{ textAlign: 'center', marginBottom: '8rem', marginTop: '0' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'rgba(39, 174, 96, 0.1)',
                            color: 'var(--color-primary)',
                            borderRadius: '2rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            fontSize: '0.9rem',
                            letterSpacing: '1px'
                        }}>
                            БИДНИЙ ТУХАЙ
                        </span>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--color-text-main)',
                            fontWeight: '800'
                        }}>
                            MU EDUCATION-Д ТАВТАЙ МОРИЛНО УУ
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: 'var(--color-primary)',
                            margin: '0 auto 1.5rem',
                            borderRadius: '2px'
                        }} />
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1.2rem',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: '1.8'
                        }}>
                            Бид хувь хүний онцлогт тохирсон зөвлөгөө, найдвартай түншлэлүүд болон дэлхийн боломжийн үүдийг нээх нэгдсэн
                            сургалтын хөтөлбөрүүдээр дамжуулан оюутан бүрийн хөгжлийн замналыг дэмждэг.
                        </p>
                    </div>

                    {/* Testimonials Section */}
                    <Testimonials />
                </div>
            </section>

            {/* CTA Section with Interactive Background */}
            <section style={{
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                padding: '8rem 0',
                marginBottom: '8rem'
            }}>
                {/* Interactive Canvas Background */}
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
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <h3 style={{
                            marginBottom: '2rem',
                            fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                            color: 'var(--color-text-main)',
                            fontWeight: '800',
                            lineHeight: '1.4'
                        }}>
                            Таны боловсролын шийдвэр чухал. Ганцаараа бүү гаргаарай
                        </h3>

                        <button style={{
                            padding: '1.2rem 3rem',
                            backgroundColor: '#e74c3c', // Maintain red brand color
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 10px 20px rgba(231, 76, 60, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(231, 76, 60, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(231, 76, 60, 0.3)';
                            }}
                        >
                            <Calendar size={24} />
                            Зөвлөхтэй уулзах цаг захиалах
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection />
        </div>
    );
};

export default Home;
