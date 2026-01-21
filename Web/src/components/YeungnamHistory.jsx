import React, { useRef } from 'react';

const YeungnamHistory = () => {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const historyData = [
        {
            year: '2013 – 2022',
            events: [
                'Үндэсний хэрэглэгчийн сэтгэл ханамжийн индекс (NCSI)-д дараалан 10 жил тэргүүлсэн'
            ]
        },
        {
            year: '2014',
            events: [
                '"Yeungnam University College" нэртэй болсон'
            ]
        },
        {
            year: '2013',
            events: [
                'Солонгосын Аж Үйлдвэрийн Технологийн Холбооноос боловсролын технологийн инновацийн төвөөр томилогдсон'
            ]
        },
        {
            year: '2012',
            events: [
                'Боловсрол, Шинжлэх Ухаан, Технологийн Яамнаас 2011 оны мэргэжлийн коллежийн үнэлгээгээр батламжлагдсан'
            ]
        },
        {
            year: '2011',
            events: [
                'Боловсрол, Шинжлэх Ухаан, Технологийн Яамнаас "World Class College" сургуулиар сонгогдсон',
                'Жижиг, дунд бизнесийн хөгжлийн төсөлд сонгогдсон'
            ]
        },
        {
            year: '2006',
            events: [
                'Боловсрол, Шинжлэх Ухаан, Технологийн Яам болон Хүний нөөцийн хөгжлийн яамнаас 2007–2008 оны мэргэжлийн дэмжлэгийн төсөлд хамрагдсан'
            ]
        },
        {
            year: '1998',
            events: [
                '"Yeungnam College of Science and Technology" нэртэй болсон'
            ]
        },
        {
            year: '1991',
            events: [
                '"Yeungnam College" нэртэй болсон'
            ]
        },
        {
            year: '1979',
            events: [
                'Боловсрол, Шинжлэх Ухаан, Технологийн Яамнаас 2 жилийн коллежийн зөвшөөрөл авч, "Yeungnam Industrial College" болгон нэрээ өөрчилсөн'
            ]
        },
        {
            year: '1973',
            events: [
                '"Yeungnam Community College" нэртэй болсон'
            ]
        },
        {
            year: '1970',
            events: [
                '"School of Industrial Technology of Yeungnam College" нэртэй болсон'
            ]
        },
        {
            year: '1968',
            events: [
                'Ённам коллежийн дэвшилтэт мэргэжлийн сургуулиар байгуулагдсан'
            ]
        }
    ];

    return (
        <section className="section" style={{ padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <h2 className="section-title">ТҮҮХ</h2>

                <div style={{ position: 'relative', padding: '0 3rem' }}>
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
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

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-lg)',
                            overflowX: 'auto',
                            padding: 'var(--spacing-md) 0',
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {historyData.map((item, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    minWidth: '300px',
                                    scrollSnapAlign: 'start',
                                    borderTop: '4px solid var(--color-primary)'
                                }}
                            >
                                <h3 style={{
                                    color: 'var(--color-primary)',
                                    fontSize: '2rem',
                                    marginBottom: 'var(--spacing-sm)'
                                }}>
                                    {item.year}
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    color: 'var(--color-text-muted)',
                                    fontSize: '0.95rem'
                                }}>
                                    {item.events.map((event, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1rem' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>•</span>
                                            {event}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
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
        </section>
    );
};

export default YeungnamHistory;
