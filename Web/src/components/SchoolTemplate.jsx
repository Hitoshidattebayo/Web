import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CampusMap from './CampusMap';
import DormitoryFeatures from './DormitoryFeatures';
import History from './History';
import Curriculum from './Curriculum';
import StudentImprovement from './StudentImprovement';
import Calculator from './Calculator';
import FaqSection from './FaqSection';
import life1 from '../assets/life-1.jpg';
import life2 from '../assets/life-2.jpg';
import life3 from '../assets/life-3.jpg';
import life4 from '../assets/life-4.jpg';
import life5 from '../assets/life-5.jpg';
import { Dumbbell, Languages, Building2, Play, Calendar, Star } from 'lucide-react';
import { urlFor } from '../sanity/client';
import useParticleAnimation from '../hooks/useParticleAnimation';
import Loading from './Loading';

// School Intro Video Component (9:16 Mock)
const SchoolIntroVideo = ({ videoUrl, videoFileUrl }) => {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px', // Restrict width to mimic phone size
            aspectRatio: '9/16',
            backgroundColor: '#000',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '8px solid white' // Optional: mimic phone bezel
        }}>
            {/* Render Video if available */}
            {videoFileUrl || videoUrl ? (
                <video
                    src={videoFileUrl || videoUrl}
                    controls
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            ) : (
                <>
                    {/* Play Button Mockup */}
                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        border: '2px solid rgba(255, 255, 255, 0.4)'
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                        <Play size={40} fill="white" color="white" style={{ marginLeft: '4px' }} />
                    </div>

                    {/* Background Suggestion (Optional Gradient) */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d)',
                        opacity: 0.8,
                        zIndex: 1
                    }} />

                    {/* Mock Text Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '20px',
                        right: '20px',
                        zIndex: 10,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Сургуультай танилцах</h4>
                        <p style={{ margin: '5px 0 0', fontSize: '0.9rem', opacity: 0.8 }}>Бичлэг үзэх</p>
                    </div>
                </>
            )}
        </div>
    );
};

// Campus Life Gallery Component
const CampusLifeGallery = ({ galleryData }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Process nested data from Sanity into flat format for internal logic
    // Input: categories: [{ categoryName: 'Gym', images: [...] }, ...]
    // Output: Flat list of { category: 'Gym', url: '...' } for 'All' view, and specific category logic

    let processedImages = [];
    let availableCategories = ['All'];

    if (galleryData && galleryData.length > 0) {
        // If data comes from new nested structure (categories array)
        if (galleryData[0].categoryName) {
            const categoriesSet = new Set(['All']);
            galleryData.forEach(cat => {
                if (cat.categoryName) {
                    categoriesSet.add(cat.categoryName);
                    if (cat.images) {
                        cat.images.forEach(img => {
                            if (img.asset) {
                                processedImages.push({
                                    category: cat.categoryName,
                                    url: urlFor(img).width(800).auto('format').quality(75).url() // Optimized image
                                });
                            }
                        });
                    }
                }
            });
            availableCategories = Array.from(categoriesSet);
        }
        // Fallback for old flat structure (if any data remains or during migration)
        else if (galleryData[0].category) {
            availableCategories = ['All', ...new Set(galleryData.map(item => item.category).filter(Boolean))];
            processedImages = galleryData.map(item => ({
                category: item.category,
                url: item.asset ? urlFor(item.asset).width(800).auto('format').quality(75).url() : null // Optimized fallback
            })).filter(item => item.url);
        }
    }

    const sanityCategories = availableCategories;

    const defaultCategories = [
        'All',
        'C Mart',
        'Cafe',
        'CIA Outside',
        'Class Room',
        'Conference Room',
        'Dining Hall',
        'Gym',
        'Hallway',
        'IDP Testing Center',
        'Karaoke',
        'Library',
        'Recreation',
        'Room',
        'Swimming Pool',
        'Teachers Lounge',
        'Yoga, Pilates Room'
    ];

    const displayCategories = galleryData && galleryData.length > 0 ? sanityCategories : defaultCategories;

    // Placeholder images mapping (using existing assets for now)
    const allImages = [life1, life2, life3, life4, life5];

    // In a real scenario, map specific images to categories
    const categoryImages = {
        'All': allImages,
        'C Mart': [life1, life2],
        'Cafe': [life3, life4],
        'CIA Outside': [life5, life1],
        'Class Room': [life2, life3],
        'Conference Room': [life4, life5],
        'Dining Hall': [life1, life3],
        'Gym': [life2, life4, life5], // Assuming gym-like images might be here
        'Hallway': [life1, life2],
        'IDP Testing Center': [life3, life4],
        'Karaoke': [life5, life1],
        'Library': [life2, life3],
        'Recreation': [life4, life5],
        'Room': [life1, life2],
        'Swimming Pool': [life3, life4, life5],
        'Teachers Lounge': [life1, life3],
        'Yoga, Pilates Room': [life2, life4]
    };

    let currentImages = [];

    if (galleryData && galleryData.length > 0) {
        if (activeCategory === 'All') {
            currentImages = processedImages.map(item => item.url);
        } else {
            currentImages = processedImages
                .filter(item => item.category === activeCategory)
                .map(item => item.url);
        }
    } else {
        currentImages = categoryImages[activeCategory] || allImages;
    }

    // Reset index when category changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeCategory]);

    // Auto-slide effect
    useEffect(() => {
        if (currentImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % currentImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentImages.length, activeCategory]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div style={{ width: '100%' }}>
            {/* Category Filter Buttons */}
            <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '12px',
                    padding: '10px 4px',
                    marginBottom: '20px',
                    scrollbarWidth: 'none', // Hide scrollbar for Firefox
                    msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
                    WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none' // Prevent text selection while dragging
                }} className="no-scrollbar">
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                {displayCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            if (!isDragging) setActiveCategory(category);
                        }}
                        style={{
                            padding: '8px 20px',
                            borderRadius: '50px',
                            border: '1px solid',
                            borderColor: activeCategory === category ? 'var(--color-primary)' : '#e2e8f0',
                            backgroundColor: activeCategory === category ? 'var(--color-primary)' : 'white',
                            color: activeCategory === category ? 'white' : '#64748b',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            boxShadow: activeCategory === category ? '0 4px 6px rgba(37, 99, 235, 0.2)' : 'none'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery Container */}
            <div style={{ position: 'relative', width: '100%' }}>
                {/* Main Image */}
                <div style={{
                    width: '100%',
                    height: 'clamp(320px, 60vw, 500px)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#f1f5f9' // Loading placeholder color
                }}>
                    <img
                        key={`${activeCategory}-${currentIndex}`} // Force re-render on change
                        src={currentImages[currentIndex]}
                        alt={`${activeCategory} ${currentIndex + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            animation: 'fadeIn 0.5s ease-in-out'
                        }}
                    />
                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                    `}</style>

                    {/* Navigation Arrows */}
                    {currentImages.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    transition: 'background 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    transition: 'background 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'white'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </>
                    )}

                    {/* Dots Indicator */}
                    {currentImages.length > 1 && (
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            {currentImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: currentIndex === idx ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s'
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Category Label (Optional Context) */}
                <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                    Showing: {activeCategory}
                </div>
            </div>
        </div>
    );
};

// Particle Canvas Component to handle hook lifecycle correctly
const ParticleCanvas = ({ style }) => {
    const canvasRef = useRef(null);
    useParticleAnimation(canvasRef);
    return <canvas ref={canvasRef} style={style} />;
};

const SchoolTemplate = ({ data, loading }) => {
    if (loading) {
        return <Loading />;
    }

    const {
        hero,
        intro,
        campusLife,
        dormitory,
        curriculum,
        faq,
        studentImprovement,
        map,
        history,
        freeServices,
        activities
    } = data || {};

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
                {/* Background Media (Video or Image) */}
                {hero?.videoUrl ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0
                        }}
                    >
                        <source src={hero.videoUrl} type="video/mp4" />
                    </video>
                ) : hero?.backgroundImage ? (
                    <img
                        src={typeof hero.backgroundImage === 'string' ? hero.backgroundImage : urlFor(hero.backgroundImage).width(1920).auto('format').quality(80).url()}
                        alt="Hero Background"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 0
                        }}
                    />
                ) : null}

                {/* Interactive Canvas Background (Overlay) */}
                <ParticleCanvas
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1
                    }}
                />

                <div style={{
                    position: 'relative',
                    zIndex: 2,
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
                        {hero?.title || 'SCHOOL NAME'}
                    </h1>
                    {hero?.tagline && (
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            color: 'var(--color-text-main)', // Or another suitable color
                            fontWeight: '500',
                            marginTop: '10px'
                        }}>
                            {hero.tagline}
                        </p>
                    )}
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
                        {/* Left Side - Video Intro */}
                        <SchoolIntroVideo videoUrl={intro?.videoUrl} videoFileUrl={intro?.videoFileUrl} />

                        {/* Right Side - Text */}
                        <div>
                            {intro?.description ? (
                                Array.isArray(intro.description) ? (
                                    // Handle Portable Text (Sanity)
                                    intro.description.map((block, index) => (
                                        <p key={index} style={{
                                            fontSize: '1.2rem',
                                            lineHeight: '1.9',
                                            color: 'var(--color-text-muted)',
                                            marginBottom: index === 0 ? 'var(--spacing-lg)' : '0'
                                        }}>
                                            {block.children ? block.children.map(c => c.text).join('') : block}
                                        </p>
                                    ))
                                ) : (
                                    // Handle simple string
                                    <p style={{
                                        fontSize: '1.2rem',
                                        lineHeight: '1.9',
                                        color: 'var(--color-text-muted)',
                                        marginBottom: 'var(--spacing-lg)'
                                    }}>
                                        {intro.description}
                                    </p>
                                )
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Life Gallery */}
            <section className="section">
                <div className="container">
                    <CampusLifeGallery galleryData={campusLife?.categories} />
                </div>
            </section>

            {/* Campus Map Component */}
            <CampusMap {...(map || {})} />

            {/* History Section */}
            <History data={history?.events} />

            {/* Curriculum Section */}
            <Curriculum data={curriculum?.courses} />

            {/* English Level Test CTA - Constant for now */}
            <section className="section" style={{ backgroundColor: '#f8fafc', textAlign: 'center', paddingTop: '0' }}>
                <div className="container">
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'white',
                        padding: '40px',
                        borderRadius: '24px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            color: '#1e293b',
                            marginBottom: '16px',
                            fontWeight: '700'
                        }}>
                            Та англи хэлний түвшингээ мэдэх үү?
                        </h3>
                        <p style={{
                            color: '#64748b',
                            marginBottom: '24px',
                            fontSize: '1.1rem'
                        }}>
                            Та одоогийн түвшингээ тодорхойлж, өөрт тохирсон хөтөлбөрөө сонгоорой.
                        </p>
                        <a href="/english-test" className="btn btn-primary" style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                            border: 'none',
                            padding: '12px 32px',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            Түвшин тогтоох <Languages size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Student Improvement Section */}
            <StudentImprovement data={studentImprovement} />

            {/* Dormitory Features Component */}
            <DormitoryFeatures data={dormitory} />

            {/* Features Highlight */}
            <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                <div className="container">
                    <h2 className="section-title">ОНЦЛОГ</h2>
                    <div className="feature-grid">
                        {intro?.features ? (
                            intro.features.map((feature, index) => {
                                const IconComponent = feature.icon === 'Dumbbell' ? Dumbbell :
                                    feature.icon === 'Languages' ? Languages :
                                        feature.icon === 'Building2' ? Building2 : Dumbbell;
                                return (
                                    <div key={index} className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
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
                                            <IconComponent size={40} />
                                        </div>
                                        <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                            {feature.title}
                                        </h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            // Fallback if no features provided? Or maybe just render nothing?
                            // Render nothing to be safe if no features.
                            null
                        )}
                    </div>
                </div>
            </section>

            {/* Free Services Section */}
            {freeServices && freeServices.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">ҮНЭГҮЙ ҮЙЛЧИЛГЭЭ</h2>
                        <div className="feature-grid">
                            {freeServices.map((service, index) => (
                                <div key={index} className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                        marginBottom: 'var(--spacing-md)',
                                        color: 'var(--color-primary)'
                                    }}>
                                        <Star size={32} />
                                    </div>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                        {service.name}
                                    </h3>
                                    {service.details && (
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {service.details}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Activities Section */}
            {activities && activities.length > 0 && (
                <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
                    <div className="container">
                        <h2 className="section-title">ХИЧЭЭЛЭЭС ГАДУУРХ ҮЙЛ АЖИЛЛАГАА</h2>
                        <div className="feature-grid">
                            {activities.map((activity, index) => (
                                <div key={index} className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl) var(--spacing-lg)' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                                        marginBottom: 'var(--spacing-md)',
                                        color: 'var(--color-primary)'
                                    }}>
                                        <Calendar size={32} />
                                    </div>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>
                                        {activity.name}
                                    </h3>
                                    {activity.details && (
                                        <p style={{ color: 'var(--color-text-muted)' }}>
                                            {activity.details}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Calculator Section */}
            <Calculator />

            {/* CTA Section */}
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
                <ParticleCanvas
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

                        <Link to="/apply" style={{
                            padding: '1.2rem 3rem',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 10px 20px rgba(52, 152, 219, 0.3)',
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(52, 152, 219, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(52, 152, 219, 0.3)';
                            }}
                        >
                            <Calendar size={24} />
                            Зөвлөхтэй уулзах цаг захиалах
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection customFaqs={faq?.faqs} title={faq?.title || "Түгээмэл Асуултууд"} />
        </div>
    );
};

export default SchoolTemplate;
