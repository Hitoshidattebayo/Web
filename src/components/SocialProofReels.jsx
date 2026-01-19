import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialProofReels = () => {
    const reels = [
        { id: 1, title: 'Америкт сурах миний түүх', author: 'Б. Болд', views: '12.5K' },
        { id: 2, title: 'IELTS-д 8.0 авсан арга барил', author: 'Г. Сарнай', views: '8.2K' },
        { id: 3, title: 'Япон улсын тэтгэлэгт хөтөлбөр', author: 'Э. Тэмүүлэн', views: '15K' },
        { id: 4, title: 'Визний ярилцлагад бэлдэх нь', author: 'М. Хулан', views: '10K' },
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
                <button style={{
                    position: 'absolute',
                    left: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '60px',
                    height: '60px',
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
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '2rem',
                    padding: '0 1rem'
                }}>
                    {reels.map((reel) => (
                        <div key={reel.id} style={{
                            position: 'relative',
                            aspectRatio: '9/16',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            backgroundColor: '#2c3e50',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            className="reel-card"
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
                            </div>

                            {/* Overlay Info */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1.5rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                                    {reel.title}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', opacity: 0.9 }}>
                                    <span>@{reel.author}</span>
                                    <span>{reel.views} үзсэн</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button style={{
                    position: 'absolute',
                    right: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '60px',
                    height: '60px',
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
            </div>
        </section>
    );
};

export default SocialProofReels;
