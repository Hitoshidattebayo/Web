import React from 'react';

const About = () => {
    return (
        <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(2rem, 4vw, 4rem)', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 'min(100%, 280px)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Students studying"
                        style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                    />
                </div>
                <div style={{ flex: 1, minWidth: 'min(100%, 280px)' }}>
                    <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                        Yeungnam University College
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Yeungnam University College (YNC) нь Өмнөд Солонгосын тэргүүлэх коллежуудын нэг бөгөөд олон улсын оюутнуудад чанартай боловсрол олгох зорилготой.
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Манай Филиппин дэх Англи хэлний кампус нь оюутнуудад англи хэлийг бодит орчинд сурахын зэрэгцээ Солонгосын их дээд сургуульд элсэх бэлтгэлээ хангах ховор боломжийг олгодог.
                    </p>
                    <ul style={{ marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-secondary)' }}>✓</span> Солонгос багш нарын заах арга барил
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-secondary)' }}>✓</span> Олон улсын орчин
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--color-secondary)' }}>✓</span> Тэтгэлэгт хөтөлбөрүүд
                        </li>
                    </ul>
                    <button className="btn btn-primary">Илүү ихийг мэдэх (Read More)</button>
                </div>
            </div>
        </section>
    );
};

export default About;
