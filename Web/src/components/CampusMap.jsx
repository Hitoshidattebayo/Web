import React, { useState, useRef } from 'react';
import { Map } from 'lucide-react';
import campusMapImg from '../assets/cia-campus-map.jpg';
import campus2 from '../assets/campus-2.jpg';
import campus3 from '../assets/campus-3.jpg';
import campus4 from '../assets/campus-4.jpg';
import campus5 from '../assets/campus-5.jpg';

const CampusMap = ({ mapImage, galleryImages: propGalleryImages, blocks }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const galleryRef = useRef(null);

    const defaultGalleryImages = [campus2, campus3, campus4, campus5];
    const galleryImages = propGalleryImages || defaultGalleryImages;
    const activeMapImage = mapImage || campusMapImg;

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const scrollGallery = (direction) => {
        if (galleryRef.current) {
            const scrollAmount = 300;
            galleryRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
            <div className="container">
                <h2 className="section-title">КАМПУСЫН ЗУРАГ</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                    gap: 'var(--spacing-xl)',
                    alignItems: 'start',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    {/* Left Side - Sticky Campus Map + Gallery */}
                    <div className="campus-map-sticky" style={{
                        position: 'sticky',
                        top: '90px',
                        height: 'fit-content',
                        alignSelf: 'start'
                    }}>
                        {/* Campus Map Image */}
                        <img
                            src={activeMapImage}
                            alt="CIA Campus Map"
                            style={{
                                width: '100%',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-lg)',
                                marginBottom: 'var(--spacing-lg)',
                                backgroundColor: '#ffffff'
                            }}
                        />

                        {/* Gallery with Arrow Navigation */}
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => scrollGallery('left')}
                                style={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    background: 'white',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '35px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    color: 'var(--color-primary)'
                                }}
                            >
                                ❮
                            </button>

                            <div
                                ref={galleryRef}
                                style={{
                                    display: 'flex',
                                    gap: 'var(--spacing-sm)',
                                    overflowX: 'auto',
                                    scrollSnapType: 'x mandatory',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none',
                                    padding: 'var(--spacing-sm) 0'
                                }}
                            >
                                {galleryImages.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => openLightbox(index)}
                                        style={{
                                            minWidth: '200px',
                                            height: '150px',
                                            cursor: 'pointer',
                                            scrollSnapAlign: 'start',
                                            borderRadius: 'var(--radius-md)',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-md)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <img
                                            src={img}
                                            alt={`Campus photo ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => scrollGallery('right')}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    background: 'white',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '35px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    color: 'var(--color-primary)'
                                }}
                            >
                                ❯
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Scrolling Text Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                        {(blocks || [
                            {
                                title: "№1 БЛОК",
                                items: ["РЕСЕПШИН & ХҮЛЭЭЛГИЙН ӨРӨӨ", "ШАЛГАЛТЫН ӨРӨӨ", "АЯЛЛЫН АГЕНТЛАГ", "СҮПЕР МАРКЕТ"]
                            },
                            {
                                title: "№2 БЛОК",
                                items: ["УУЛЗАЛТЫН ӨРӨӨ", "ХУРЛЫН ӨРӨӨ", "ОНЛАЙН ХИЧЭЭЛИЙН ТАНХИМ", "ГРҮПП ХИЧЭЭЛИЙН ТАНХИМ", "АМРАЛТЫН ӨРӨӨ", "ЗООГИЙН ГАЗАР", "ҮЗВЭРИЙН ТАНХИМ", "НОМЫН САН", "ДУУНЫ ӨРӨӨ", "ЭМНЭЛЭГ", "ФИТНЕСС / GYM / ИОГА"]
                            },
                            {
                                title: "№3 БЛОК",
                                items: ["БАГШ НАРЫН ӨРӨӨ", "СУРАГЧ НАРЫН ДОТУУР БАЙР", "ЗӨВӨЛГӨӨНИЙ ӨРӨӨ", "ГАДНАХ УСАН САН", "САГСНЫ ТАЛБАЙ"]
                            }
                        ]).map((block, index) => (
                            <div key={index} className="card">
                                <h3 style={{
                                    color: 'var(--color-primary)',
                                    marginBottom: 'var(--spacing-md)',
                                    fontSize: '1.5rem',
                                    fontWeight: '700'
                                }}>
                                    {block.title}
                                </h3>
                                <ul style={{ lineHeight: '2' }}>
                                    {block.items.map((item, idx) => (
                                        <li key={idx}>· {item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3D Virtual Map Button - Below Everything */}
                <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
                    <a
                        href="https://www.720yun.com/vr/ac9j5puysw4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            fontSize: '1.1rem',
                            padding: '1rem 2.5rem',
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-md)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
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

                {/* Lightbox Modal */}
                {lightboxOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255,255,255,0.95)',
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
                                src={galleryImages[currentImageIndex]}
                                alt={`Campus photo ${currentImageIndex + 1}`}
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
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>
                )}

                {/* CSS for responsive sticky behavior */}
                <style>{`
                    /* On mobile, disable sticky to allow normal scroll */
                    @media screen and (max-width: 768px) {
                        .campus-map-sticky {
                            position: relative !important;
                            top: auto !important;
                        }
                    }
                    
                    /* On desktop, ensure proper sticky behavior */
                    @media screen and (min-width: 769px) {
                        .campus-map-sticky {
                            max-height: calc(100vh - 120px);
                            overflow-y: auto;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default CampusMap;
