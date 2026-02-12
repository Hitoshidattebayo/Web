import React, { useState, useRef, useEffect } from 'react';
import { urlFor } from '../sanity/client';
import dorm1 from '../assets/dorm-1.jpg';
import dorm2 from '../assets/dorm-2.jpg';
import dorm3 from '../assets/dorm-3.jpg';
import dorm4 from '../assets/dorm-4.jpg';
import { Bed, Wifi, Lock, Wind, FileText, ShowerHead, Snowflake, Archive, Key } from 'lucide-react';

const DormitoryFeatures = ({ data }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeRoomType, setActiveRoomType] = useState('1 хүний өрөө');
    const scrollRef = useRef(null);

    // Helper for room icons
    const getRoomIcon = (count) => {
        const icons = [];
        for (let i = 0; i < count; i++) icons.push(<Bed size={20} key={i} />);
        return <div style={{ display: 'flex' }}>{icons}</div>;
    };

    // Default Room Types
    const defaultRoomTypes = [
        { type: '1 хүний өрөө', icon: <Bed size={20} /> },
        { type: '2 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /></div> },
        { type: '3 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /><Bed size={20} /></div> },
        { type: '4 хүний өрөө', icon: <div style={{ display: 'flex' }}><Bed size={20} /><Bed size={20} /><Bed size={20} /><Bed size={20} /></div> }
    ];

    // Process Room Types from Data
    const roomTypes = data?.roomTypes ? data.roomTypes.map(r => {
        const count = r.name.includes('1') ? 1 : r.name.includes('2') ? 2 : r.name.includes('3') ? 3 : r.name.includes('4') ? 4 : 1;

        // Process images
        const processedImages = r.images && r.images.length > 0
            ? r.images.map(img => img.asset ? urlFor(img).url() : null).filter(Boolean)
            : [];

        return {
            type: r.name,
            icon: count === 1 ? <Bed size={20} /> : getRoomIcon(count),
            images: processedImages
        };
    }) : defaultRoomTypes;

    // Placeholder mappings
    const roomImagesStub = {
        '1 хүний өрөө': [dorm1, dorm2],
        '2 хүний өрөө': [dorm3, dorm4],
        '3 хүний өрөө': [dorm1, dorm3, dorm4],
        '4 хүний өрөө': [dorm2, dorm4, dorm1],
    };

    // Determine current images
    const activeRoomData = roomTypes.find(r => r.type === activeRoomType);
    const sanityImages = activeRoomData?.images;

    // Fallback to roomImagesStub if no Sanity images for this room type
    const currentDormImages = (sanityImages && sanityImages.length > 0)
        ? sanityImages
        : (roomImagesStub[activeRoomType] || [dorm1, dorm2, dorm3, dorm4]);

    // Reset index when room type changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeRoomType]);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % currentDormImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentDormImages.length, activeRoomType]);

    // Default Amenities
    const defaultAmenities = [
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

    // Map string icons to components
    const iconMap = {
        'Bed': <Bed size={24} />,
        'Archive': <Archive size={24} />,
        'Wifi': <Wifi size={24} />,
        'Key': <Key size={24} />,
        'Lock': <Lock size={24} />,
        'Wind': <Wind size={24} />,
        'FileText': <FileText size={24} />,
        'ShowerHead': <ShowerHead size={24} />,
        'Snowflake': <Snowflake size={24} />,
    };

    const amenities = data?.amenities ? data.amenities.map(a => ({
        ...a,
        icon: iconMap[a.icon] || <Bed size={24} />
    })) : defaultAmenities;

    // Drag-to-scroll logic for Amenities
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
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
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % currentDormImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + currentDormImages.length) % currentDormImages.length);
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
                                position: 'relative',
                                transition: 'all 0.3s ease'
                            }}>
                                <img
                                    key={activeRoomType + currentImageIndex} // Force re-render for clean transition
                                    src={currentDormImages[currentImageIndex]}
                                    alt={`${activeRoomType} ${currentImageIndex + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'opacity 0.5s ease-in-out',
                                        cursor: 'pointer',
                                        animation: 'fadeIn 0.5s ease'
                                    }}
                                    onClick={() => openLightbox(currentImageIndex)}
                                />
                                <style>{`
                                    @keyframes fadeIn {
                                        from { opacity: 0; }
                                        to { opacity: 1; }
                                    }
                                `}</style>
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
                                {currentDormImages.map((_, index) => (
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
                        marginTop: '0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-lg)'
                    }}>
                        <div>
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
                                        onClick={() => setActiveRoomType(room.type)}
                                        style={{
                                            padding: 'var(--spacing-md)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 'var(--spacing-sm)',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            borderLeft: activeRoomType === room.type ? '4px solid var(--color-primary)' : '4px solid transparent',
                                            transform: activeRoomType === room.type ? 'translateX(5px)' : 'none',
                                            backgroundColor: activeRoomType === room.type ? '#f0f9ff' : 'white',
                                            boxShadow: activeRoomType === room.type ? '0 4px 6px rgba(0,0,0,0.1)' : 'var(--shadow-sm)'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeRoomType !== room.type) {
                                                e.currentTarget.style.transform = 'translateX(5px)';
                                                e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeRoomType !== room.type) {
                                                e.currentTarget.style.transform = 'translateX(0)';
                                                e.currentTarget.style.borderColor = 'transparent';
                                            }
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
                                            color: activeRoomType === room.type ? 'var(--color-primary)' : 'var(--color-text-main)'
                                        }}>
                                            {room.type}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mini Amenities Section - Matches Screenshot */}
                        <div style={{
                            backgroundColor: '#f8fafc', // Light gray background
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--spacing-md)',
                            display: 'flex',
                            gap: 'var(--spacing-lg)',
                            overflowX: 'auto',
                            alignItems: 'center',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            border: '1px solid #e2e8f0',
                            cursor: isDragging ? 'grabbing' : 'grab',
                            userSelect: 'none'
                        }}
                            ref={scrollRef} // Reuse scrollRef for this container if needed or create new one
                            className="amenities-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    style={{
                                        minWidth: '80px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{
                                        color: 'var(--color-primary)',
                                        background: 'white',
                                        padding: '8px',
                                        borderRadius: '50%',
                                        boxShadow: 'var(--shadow-sm)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {React.cloneElement(amenity.icon, { size: 18 })}
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        color: 'var(--color-text-light)',
                                        lineHeight: '1.2'
                                    }}>
                                        {amenity.title}
                                    </span>
                                </div>
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
                                src={currentDormImages[currentImageIndex]}
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
                            {currentImageIndex + 1} / {currentDormImages.length}
                        </div>
                    </div>
                )}

                {/* CSS Animation for auto-scroll */}
                <style>{`
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
