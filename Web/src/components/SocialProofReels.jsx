import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialProofReels = ({ data }) => {
    const reels = data?.list || [
        { _key: 1 },
        { _key: 2 },
        { _key: 3 },
        { _key: 4 },
    ];

    return (
        <section style={{
            paddingBottom: '2rem',
            marginBottom: '4rem',
            position: 'relative',
            marginTop: '-2rem' // Pull closer to Testimonials
        }}>
            <div className="container" style={{ position: 'relative' }}>
                {/* Left Button */}
                <button className="desktop-only-btn" style={{
                    position: 'absolute',
                    left: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    zIndex: 100,
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                >
                    <ChevronLeft size={28} color="#2c3e50" />
                </button>

                {/* Reels Grid */}
                <div className="mobile-scroll-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '2rem',
                    padding: '0 1rem'
                }}>
                    {reels.map((reel) => (
                        <div key={reel._key || reel.id} style={{
                            position: 'relative',
                            aspectRatio: '9/16',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#2c3e50',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            className="reel-card mobile-scroll-item"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                        >
                            {/* Placeholder Video Background */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                {reel.videoUrl ? (
                                    <video
                                        src={reel.videoUrl}
                                        controls
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(5px)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(255,255,255,0.4)',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }}>
                                        <Play size={24} fill="white" color="white" style={{ marginLeft: '4px' }} />
                                    </div>
                                )}
                            </div>

                            {/* Overlay Info Removed */}
                        </div>
                    ))}
                </div>
                <style>{`
                    @media (max-width: 992px) {
                        .desktop-only-btn {
                            display: none !important;
                        }
                        .mobile-scroll-container {
                            display: flex !important;
                            grid-template-columns: none !important;
                            overflow-x: auto;
                            scroll-snap-type: x mandatory;
                            padding-bottom: 1rem !important; /* Space for scrollbar if visible/touch */
                            margin-right: -1rem; /* Bleed off screen */
                            padding-right: 1rem !important;
                            -webkit-overflow-scrolling: touch;
                            scrollbar-width: none; /* Firefox */
                        }
                        .mobile-scroll-container::-webkit-scrollbar {
                            display: none; /* Chrome/Safari */
                        }
                        .mobile-scroll-item {
                            min-width: 260px; /* Force width */
                            scroll-snap-align: center;
                            flex-shrink: 0;
                            margin-right: 1rem;
                        }
                    }
                `}</style>

                {/* Right Button */}
                <button className="desktop-only-btn" style={{
                    position: 'absolute',
                    right: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    zIndex: 100,
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                >
                    <ChevronRight size={28} color="#2c3e50" />
                </button>
                <style>{`
                    @media (max-width: 992px) {
                        .desktop-only-btn {
                            display: none !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default SocialProofReels;
