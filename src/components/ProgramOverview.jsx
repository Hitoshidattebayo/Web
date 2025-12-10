import React from 'react';

const ProgramOverview = () => {
    const programs = [
        {
            title: 'Англи хэлний эрчимжүүлсэн сургалт (Intensive English)',
            description: 'Мэргэжлийн багш нартай 1:1 болон бүлгийн хичээлүүд.',
            icon: '🗣️'
        },
        {
            title: 'Солонгос хэл & Соёл (Korean Language & Culture)',
            description: 'Солонгос хэлний анхан шатны мэдлэг болон соёлын хичээлүүд.',
            icon: '🇰🇷'
        },
        {
            title: 'Мэргэжлийн хичээлүүд (Major Courses)',
            description: 'IT, Аялал жуулчлал, Хоол үйлдвэрлэл зэрэг мэргэжлээр танилцах.',
            icon: '🎓'
        }
    ];

    return (
        <section style={{ padding: '4rem 0', backgroundColor: 'var(--color-background)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem' }}>Хөтөлбөрийн онцлог (Program Highlights)</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                        Бид танд зөвхөн хэл сурах биш, ирээдүйн мэргэжлээ сонгоход туслах цогц хөтөлбөрийг санал болгож байна.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {programs.map((program, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{program.icon}</div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{program.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{program.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramOverview;
