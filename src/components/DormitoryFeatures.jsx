import React, { useState, useRef, useEffect } from 'react';
import dorm1 from '../assets/dorm-1.jpg';
import dorm2 from '../assets/dorm-2.jpg';
import dorm3 from '../assets/dorm-3.jpg';
import dorm4 from '../assets/dorm-4.jpg';
import { Bed, Wifi, Lock, Wind, FileText, ShowerHead, Snowflake, Archive, Key } from 'lucide-react';

const DormitoryFeatures = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollRef = useRef(null);

    const dormImages = [dorm1, dorm2, dorm3, dorm4];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % dormImages.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [dormImages.length]);

    const amenities = [
        { icon: <Bed size={24} />, title: 'Ор дэвсгэр' },
        { icon: <Archive size={24} />, title: 'Угаагуур' },
        { icon: <Wifi size={24} />, title: 'Wi-Fi' },
        { icon: <Key size={24} />, title: 'Түлхүүртэй хувцасны шүүгээ' },
        { icon: <Lock size={24} />, title: 'Аюулгүй байдлын сейф' },
        { icon: <Wind size={24} />, title: 'Агааржуулагч' },
        { icon: <FileText size={24} />, title: 'Ширээ' },
        { icon: <ShowerHead size={24} />, title: 'Халуун усны шүршүүр' },
        { icon: <Snowflake size={24} />, title: 'Хөргөгч' },
        { icon: <Archive size={24} />, title: 'Ариун цэврийн өрөө (WC)' }
    ];

    const roomTypes = [
        { type: '1 хүний өрөө', icon: <Bed size={20} /> },
        { type: '2 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /></div> },
        { type: '3 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /><Bed size={20} /></div> },
        { type: '4 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /><Bed size={20} /><Bed size={20} /></div> }
    ];

    // Auto-scroll animation
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 1; // pixels per frame

        const autoScroll = () => {
            scrollPosition += scrollSpeed;

            // Reset scroll when reaching the end
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
        };

        const intervalId = setInterval(autoScroll, 30);

        return () => clearInterval(intervalId);
    }, []);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % dormImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + dormImages.length) % dormImages.length);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section">
            <div className="container">
                {/* Responsive Layout: Stacks on mobile, side-by-side on desktop */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: 'clamp(1.5rem, 3vw, var(--spacing-xl))',
                    alignItems: 'start',
                    marginBottom: 'var(--spacing-2xl)'
                }}>
                    {/* Left Side - Title and Gallery */}
                    <div>
                        {/* Title */}
                        <h2 style={{
                            color: 'var(--color-primary)',
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-lg)',
                            fontWeight: '700'
                        }}>
                            ДОТУУР БАЙР
                        </h2>
                        {/* Left Side - Large Auto-Sliding Gallery */}
                        <div style={{ position: 'relative' }}>
                            {/* Main Image */}
                            <div style={{
                                width: '100%',
                                height: 'clamp(320px, 60vw, 500px)',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-lg)',
                                position: 'relative'
                            }}>
                                <img
                                    src={dormImages[currentImageIndex]}
                                    alt={`Dormitory room ${currentImageIndex + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'opacity 0.5s ease-in-out',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => openLightbox(currentImageIndex)}
                                />
                            </div>

                            {/* Left Arrow */}
                            <button
                                onClick={prevImage}
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
                                onClick={nextImage}
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
                                {dormImages.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            background: currentImageIndex === index ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            border: currentImageIndex === index ? '2px solid white' : 'none'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Room Options */}
                    <div style={{
                        marginTop: '0'
                    }}>
                        <h3 style={{
                            color: 'var(--color-text-main)',
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                            fontWeight: '600',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            Өрөөний сонголтууд
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--spacing-sm)'
                        }}>
                            {roomTypes.map((room, index) => (
                                <div
                                    key={index}
                                    className="card"
                                    style={{
                                        padding: 'var(--spacing-md)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-sm)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(5px)';
                                        e.currentTarget.style.borderLeft = '4px solid var(--color-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.borderLeft = 'none';
                                    }}
                                >
                                    <span style={{
                                        color: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>{room.icon}</span>
                                    <span style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'var(--color-text-main)'
                                    }}>
                                        {room.type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Auto-Scrolling Amenity Icons - Manual Swipe + Auto Scroll */}
                <div style={{
                    overflow: 'hidden',
                    position: 'relative',
                    padding: 'var(--spacing-sm) 0',
                    backgroundColor: 'var(--color-background-alt)',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: 'var(--spacing-xl)'
                }}>
                    <div
                        className="amenities-scroll"
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-xl)',
                            animation: 'scroll-left 30s linear infinite',
                            overflowX: 'auto',
                            scrollSnapType: 'x proximity',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            cursor: 'grab'
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.cursor = 'grabbing';
                            e.currentTarget.style.animationPlayState = 'paused';
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.cursor = 'grab';
                            e.currentTarget.style.animationPlayState = 'running';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.cursor = 'grab';
                            e.currentTarget.style.animationPlayState = 'running';
                        }}
                        onTouchStart={(e) => {
                            e.currentTarget.style.animationPlayState = 'paused';
                        }}
                        onTouchEnd={(e) => {
                            setTimeout(() => {
                                e.currentTarget.style.animationPlayState = 'running';
                            }, 2000);
                        }}
                    >
                        {/* Duplicate amenities for seamless loop */}
                        {[...amenities, ...amenities].map((amenity, index) => (
                            <div
                                key={index}
                                style={{
                                    minWidth: '100px',
                                    textAlign: 'center',
                                    padding: '0 var(--spacing-sm)'
                                }}
                            >
                                <div style={{
                                    marginBottom: '0.1rem',
                                    color: 'var(--color-primary)',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    {amenity.icon}
                                </div>
                                <div style={{
                                    fontWeight: '600',
                                    color: 'var(--color-text-main)',
                                    fontSize: '0.9rem'
                                }}>
                                    {amenity.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {lightboxOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                            padding: '2rem'
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                zIndex: 2001,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ✕
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                zIndex: 2001,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ❮
                        </button>

                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90%',
                                maxHeight: '90%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={dormImages[currentImageIndex]}
                                alt={`Dormitory room ${currentImageIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                    borderRadius: 'var(--radius-md)'
                                }}
                            />
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                zIndex: 2001,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            ❯
                        </button>

                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontSize: '1rem',
                            zIndex: 2001
                        }}>
                            {currentImageIndex + 1} / {dormImages.length}
                        </div>
                    </div>
                )}

                {/* CSS Animation for auto-scroll */}
                <style>{`
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    
                    /* Hide scrollbar for amenities section */
                    .amenities-scroll::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default DormitoryFeatures;
