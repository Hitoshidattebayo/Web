import React, { useState, useEffect, useRef } from 'react';
import CampusMap from '../components/CampusMap';
import DormitoryFeatures from '../components/DormitoryFeatures';
import History from '../components/History';
import Curriculum from '../components/Curriculum';
import StudentImprovement from '../components/StudentImprovement';
import Calculator from '../components/Calculator';
import ciaGallery1 from '../assets/cia-gallery-1.png';
import ciaIntro from '../assets/cia-intro.jpg';
import campus2 from '../assets/campus-2.jpg';
import campus3 from '../assets/campus-3.jpg';
import life1 from '../assets/life-1.jpg';
import life2 from '../assets/life-2.jpg';
import life3 from '../assets/life-3.jpg';
import life4 from '../assets/life-4.jpg';
import life5 from '../assets/life-5.jpg';
import { Dumbbell, Languages, Building2 } from 'lucide-react';

// Auto-Sliding Gallery Component
const AutoSlidingGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryImages = [ciaGallery1, ciaIntro, campus2, campus3];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [galleryImages.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Main Image */}
            <div style={{
                width: '100%',
                height: 'clamp(280px, 50vw, 400px)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative'
            }}>
                <img
                    src={galleryImages[currentIndex]}
                    alt={`CIA Campus ${currentIndex + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    color: 'var(--color-primary)',
                    fontSize: '1.5rem',
                    zIndex: 10
                }}
            >
                ❮
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    color: 'var(--color-primary)',
                    fontSize: '1.5rem',
                    zIndex: 10
                }}
            >
                ❯
            </button>

            {/* Indicator Dots */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px',
                zIndex: 10
            }}>
                {galleryImages.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: currentIndex === index ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.6)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

// Campus Life Gallery Component
const CampusLifeGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lifeImages = [life1, life2, life3, life4, life5];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % lifeImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [lifeImages.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % lifeImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + lifeImages.length) % lifeImages.length);
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {/* Main Image */}
            <div style={{
                width: '100%',
                height: 'clamp(320px, 60vw, 500px)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <img
                    src={lifeImages[currentIndex]}
                    alt={`Campus Life ${currentIndex + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-lg)',
                    color: 'var(--color-primary)',
                    fontSize: '1.8rem',
                    zIndex: 10
                }}
            >
                ❮
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-lg)',
                    color: 'var(--color-primary)',
                    fontSize: '1.8rem',
                    zIndex: 10
                }}
            >
                ❯
            </button>

            {/* Indicator Dots */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '10px',
                zIndex: 10
            }}>
                {lifeImages.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: currentIndex === index ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: currentIndex === index ? '2px solid white' : 'none'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

import useParticleAnimation from '../hooks/useParticleAnimation';

const CIA = () => {
    const canvasRef = useRef(null);
    const ctaCanvasRef = useRef(null);

    // Use shared particle animation hook
    useParticleAnimation(canvasRef);
    useParticleAnimation(ctaCanvasRef);



    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '300px',
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
                        CEBU INTERNATIONAL ACADEMY
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
                        alignItems: 'center'
                    }}>
                        {/* Left Side - Auto-Sliding Gallery */}
                        <AutoSlidingGallery />

                        {/* Right Side - Text */}
                        <div>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--color-text-muted)',
                                marginBottom: 'var(--spacing-lg)'
                            }}>
                                Филиппиний аялал жуулчлалын диваажин Себү хотын зүрхэнд орших <strong>Cebu International Academy (CIA)</strong> нь 2003 оноос хойш Азийн хамгийн чанартай, олон улсын түвшний англи хэлний сургуулиудын нэгээр танигдсан.
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: '1.9',
                                color: 'var(--color-text-muted)'
                            }}>
                                "Оюутан бүр дэлхийн хаана ч өөртөө итгэлтэй харилцах чадвартай болох ёстой" гэсэн зорилготой CIA нь 20 гаруй жилийн турш чанартай боловсрол, туршлагатай үйлчилгээ & олон улсын орчин гэсэн зарчмаар тасралтгүй хөгжсөөр ирсэн.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Life Gallery */}
            <section className="section">
                <div className="container">
                    <CampusLifeGallery />
                </div>
            </section>

            {/* Campus Map Component */}
            <CampusMap />

            {/* History Section */}
            <History />

            {/* Curriculum Section */}
            <Curriculum />

            {/* Student Improvement Section */}
            <StudentImprovement />

            {/* Dormitory Features Component */}
            <DormitoryFeatures />

            {/* Features Highlight */}
            <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="container">
                    <h2 className="section-title">ОНЦЛОГ</h2>
                    <div className="feature-grid">
                        <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-primary)'
                            }}>
                                <Dumbbell size={40} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                Semi-Spartan Систем
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Хичээл болон чөлөөт цагийн тэнцвэрийг хадгалсан үр дүнтэй сургалтын систем
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-primary)'
                            }}>
                                <Languages size={40} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                English Only Дүрэм
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Кампус дотор зөвхөн англиар ярих дүрэмтэй, англи хэлний орчин
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-primary)'
                            }}>
                                <Building2 size={40} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                Орчин үеийн тохижилт
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                Усан бассейн, фитнесс, номын сан зэрэг орчин үеийн тохилог орчин
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <Calculator />

            {/* CTA Section with Interactive Background */}
            <section style={{
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                padding: 'var(--spacing-2xl) 0'
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
                            Mu Education нь таныг CIA-д элсэхэд шаар длагатай бүх зөвлөгөө, тусламжийг үзүүлэх болно.
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
        </div >
    );
};


export default CIA;
