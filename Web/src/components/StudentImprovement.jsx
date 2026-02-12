import React, { useState, useRef, useEffect } from 'react';
import improvement1 from '../assets/improvement-1.png';
import improvement2 from '../assets/improvement-2.png';
import improvement3 from '../assets/improvement-3.jpg';
import improvement4 from '../assets/improvement-4.jpg';
import improvement5 from '../assets/improvement-5.jpg';

const StudentImprovement = ({ data }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const scrollRef = useRef(null);

    const images = [
        improvement1,
        improvement2,
        improvement3,
        improvement4,
        improvement5
    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Helper to render description blocks
    const renderDescription = () => {
        if (!data || !data.description) {
            return (
                <>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-muted)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        Манай оюутнууд эрчимжүүлсэн сургалтын хөтөлбөр, чадварлаг багш нарын ачаар оноогоо тогтмол, гайхалтайгаар ахиулж чаддаг.
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-muted)'
                    }}>
                        IELTS, TOEIC гээд бүх төрлийн шалгалтанд бид оюутан бүрийн ахиц дэвшлийг нарийн хянаж, зорьсон оноондоо хүрэхэд нь тусалдаг.
                    </p>
                </>
            );
        }

        return data.description.map((block, index) => (
            <p key={index} style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-md)'
            }}>
                {block.children.map(c => c.text).join('')}
            </p>
        ));
    };

    return (
        <section className="section">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'center'
                }}>
                    {/* Left Side - Text Content */}
                    <div>
                        <h2 style={{
                            color: 'var(--color-primary)',
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)',
                            fontWeight: '700'
                        }}>
                            {data ? data.title : 'СУРАГЧДЫН АХИЦ ДЭВШИЛ'}
                        </h2>
                        {renderDescription()}
                    </div>

                    {/* Right Side - Large Auto-Sliding Gallery */}
                    <div style={{ position: 'relative' }}>
                        {/* Main Image */}
                        <div style={{
                            width: '100%',
                            height: 'clamp(300px, 50vw, 420px)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-lg)',
                            position: 'relative'
                        }}>
                            <img
                                src={images[currentImageIndex]}
                                alt={`Student improvement ${currentImageIndex + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
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
                            {images.map((_, index) => (
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
                                src={images[currentImageIndex]}
                                alt={`Student improvement ${currentImageIndex + 1}`}
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
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StudentImprovement;
