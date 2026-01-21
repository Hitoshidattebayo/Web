import React from 'react';

const CebuLife = () => {
    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-primary)' }}>Cebu дэх Амьдрал (Life in Cebu)</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Cebu Beach"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                        />
                    </div>
                    <div>
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Халуун орны диваажин</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Себу бол Филиппиний аялал жуулчлалын төв бөгөөд үзэсгэлэнт далай, түүхэн дурсгалт газруудаараа алдартай.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Амралтын өдрүүдээр оюутнууд арлуудаар аялж, усанд сэлж, мартагдашгүй дурсамжийг бүтээдэг.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', direction: 'rtl' }}>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Campus Life"
                            style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                        />
                    </div>
                    <div style={{ direction: 'ltr' }}>
                        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Аюулгүй, Тав тухтай Кампус</h2>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                            Манай кампус нь 24 цагийн харуул хамгаалалттай, оюутны байр, хоолны газар, усан бассейн зэрэг бүхий л хэрэгцээт зүйлсийг багтаасан.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Оюутнууд хичээлдээ бүрэн төвлөрөх боломжтой тайван орчин.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CebuLife;
