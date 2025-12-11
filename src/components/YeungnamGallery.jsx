import React, { useState, useEffect } from 'react';
import gallery1 from '../assets/yeungnam-gallery-1.jpg';
import gallery2 from '../assets/yeungnam-gallery-2.jpg';
import gallery3 from '../assets/yeungnam-gallery-3.jpg';
import gallery4 from '../assets/yeungnam-gallery-4.jpg';
import gallery5 from '../assets/yeungnam-gallery-5.jpg';

const YeungnamGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

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
        <section className="section" style={{ padding: 'var(--spacing-xl) 0 var(--spacing-md)' }}>
            <div className="container">
                <div style={{ position: 'relative', width: '100%' }}>
                    {/* Main Image */}
                    <div style={{
                        width: '100%',
                        height: '500px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <img
                            src={galleryImages[currentIndex]}
                            alt={`Yeungnam Campus Life ${currentIndex + 1}`}
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
                        {galleryImages.map((_, index) => (
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
            </div>
        </section>
    );
};

export default YeungnamGallery;
