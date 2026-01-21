import React from 'react';

const Majors = () => {
    const majors = [
        {
            title: 'Global Business',
            description: 'Олон улсын бизнесийн удирдлага, маркетинг, санхүүгийн чиглэлээр мэргэших.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Hotel & Tourism Management',
            description: 'Зочид буудал, аялал жуулчлалын менежмент, үйлчилгээний соёл.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Culinary Arts',
            description: 'Солонгос болон олон улсын хоол үйлдвэрлэл, нарийн боов.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Computer Software',
            description: 'Програм хангамж хөгжүүлэлт, вэб дизайн, мэдээллийн технологи.',
            image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Nursing',
            description: 'Сувилахуйн ухаан, эрүүл мэндийн үйлчилгээ.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        },
        {
            title: 'Beauty Art',
            description: 'Гоо сайхан, нүүр будалт, үс засалт.',
            image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        }
    ];

    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Санал болгож буй Мэргэжлүүд (Majors)</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {majors.map((major, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={major.image} alt={major.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{major.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>{major.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Majors;
