import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Testimonials = ({ data }) => {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);

    // Use Sanity data or fallback
    const testimonials = data?.list || [
        {
            _key: 1, // Changed to _key to match Sanity
            color: '#6ab04c', // Green
            quote: "The level of efficiency is unmatched, I am so grateful to come across this beautiful team of people who take what they do with all manner of seriousness. Thank you IDP for the amount of work you put in to this.",
            name: "Anujin B.",
        },
        {
            _key: 2,
            color: '#2980b9', // Blue
            quote: "Felt very supported, all inquiries and last minute requests were accommodated/resolved with promptness especially by my education counsellor.",
            name: "Khuslen T.",
        },
        {
            _key: 3,
            color: '#f39c12',
            quote: "I am soo happy I have got my Unconditional letter on time - my Counsellor really helped me. I am hoping my next step goes smooth. It would've been overwhelming to do it alone with her support things went well.",
            name: "Bat-Erdene G.",
        }
    ];

    return (
        <section style={{
            paddingBottom: '0',
            marginBottom: '4rem',
            position: 'relative',
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
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = '#2c3e50';
                        e.currentTarget.style.color = '#2c3e50';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                        e.currentTarget.style.color = 'inherit';
                    }}
                >
                    <ChevronLeft size={24} color="#666" />
                </button>

                <div className="mobile-scroll-container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    {testimonials.map((item) => (
                        <div key={item._key || item.id} className="mobile-scroll-item" style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.03)',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                            height: '100%'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            onClick={() => setSelectedTestimonial(item)}
                        >
                            {/* Quote Icon Box */}
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: item.color,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                borderBottomRightRadius: '2px' // Slight style nuance
                            }}>
                                <Quote size={24} color="white" fill="white" />
                            </div>

                            {/* Text */}
                            <p style={{
                                color: '#555',
                                lineHeight: '1.8',
                                fontSize: '1rem',
                                fontStyle: 'italic',
                                flex: 1 // Allow text to take available space
                            }}>
                                "{item.quote.length > 150 ? item.quote.substring(0, 150) + '...' : item.quote}"
                            </p>

                            {/* Read More Button */}
                            {item.quote.length > 150 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedTestimonial(item);
                                    }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: item.color,
                                        fontWeight: '600',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        padding: '0.5rem 0',
                                        marginTop: '0.5rem',
                                        transition: 'opacity 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Цааш унших →
                                </button>
                            )}

                            {/* Author Name */}
                            <div style={{
                                marginTop: '1.5rem',
                                borderTop: '1px solid #eee',
                                paddingTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <div style={{
                                    width: '30px',
                                    height: '2px',
                                    backgroundColor: item.color,
                                    borderRadius: '2px'
                                }}></div>
                                <span style={{
                                    fontWeight: '600',
                                    color: '#2c3e50',
                                    fontSize: '0.95rem',
                                    letterSpacing: '0.5px'
                                }}>
                                    {item.name}
                                </span>
                            </div>
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
                            min-width: 300px; /* Force width */
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
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = '#2c3e50';
                        e.currentTarget.style.color = '#2c3e50';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)';
                        e.currentTarget.style.color = 'inherit';
                    }}
                >
                    <ChevronRight size={24} color="#666" />
                </button>
                <style>{`
                    @media (max-width: 992px) {
                        .desktop-only-btn {
                            display: none !important;
                        }
                    }
                `}</style>
            </div>

            {/* Testimonial Popup Modal */}
            {selectedTestimonial && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    padding: '1rem'
                }}
                    onClick={() => setSelectedTestimonial(null)}
                >
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '3rem',
                        maxWidth: '600px',
                        width: '100%',
                        position: 'relative',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                        animation: 'fadeIn 0.3s ease'
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '5px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s'
                        }}
                            onClick={() => setSelectedTestimonial(null)}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <X size={24} color="#666" />
                        </button>

                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: selectedTestimonial.color,
                            borderRadius: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem'
                        }}>
                            <Quote size={30} color="white" fill="white" />
                        </div>

                        <p style={{
                            color: '#333',
                            lineHeight: '1.8',
                            fontSize: '1.1rem',
                            fontStyle: 'italic',
                            marginBottom: '2rem'
                        }}>
                            "{selectedTestimonial.quote}"
                        </p>

                        <div style={{
                            borderTop: '1px solid #eee',
                            paddingTop: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '3px',
                                backgroundColor: selectedTestimonial.color,
                                borderRadius: '2px'
                            }}></div>
                            <span style={{
                                fontWeight: '700',
                                color: '#2c3e50',
                                fontSize: '1.1rem',
                                letterSpacing: '0.5px'
                            }}>
                                {selectedTestimonial.name}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
