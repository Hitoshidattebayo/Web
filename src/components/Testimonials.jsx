import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    // Placeholder data based on the image style
    // You can replace this with real data later
    const testimonials = [
        {
            id: 1,
            color: '#6ab04c', // Green
            quote: "The level of efficiency is unmatched, I am so grateful to come across this beautiful team of people who take what they do with all manner of seriousness. Thank you IDP for the amount of work you put in to this.",
        },
        {
            id: 2,
            color: '#2980b9', // Blue
            quote: "Felt very supported, all inquiries and last minute requests were accommodated/resolved with promptness especially by my education counsellor.",
        },
        {
            id: 3,
            color: '#f39c12', // Orange
            quote: "I am soo happy I have got my Unconditional letter on time - my Counsellor really helped me. I am hoping my next step goes smooth. It would've been overwhelming to do it alone with her support things went well.",
        }
    ];

    return (
        <section style={{
            paddingBottom: '2rem',
            marginBottom: '2rem',
            position: 'relative',
        }}>
            <div className="container" style={{ position: 'relative' }}>
                {/* Left Button */}
                <button style={{
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

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    {testimonials.map((item) => (
                        <div key={item.id} style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            position: 'relative',
                            transition: 'transform 0.3s ease',
                            border: '1px solid rgba(0,0,0,0.03)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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
                                fontStyle: 'italic'
                            }}>
                                "{item.quote}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button style={{
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
            </div>
        </section>
    );
};

export default Testimonials;
