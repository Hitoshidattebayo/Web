import React, { useRef } from 'react';

const History = ({ data }) => {
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

    const defaultHistoryData = [
        {
            year: '2023',
            events: [
                'CIA Mactan кампусын 7, 8-р давхар нээгдэв',
                'Cebu Normal University (CNU)-тай хамтын ажиллагаа эхлүүлэв'
            ]
        },
        {
            year: '2022',
            events: [
                'Цар тахлын дараах нээлт (6 сарын 3)',
                'CIA Монгол сурагчдад Зуны/Өвлийн кемпдээ хүлээн авч эхлэв',
                'CIA Agency Services (CAS) байгуулагдсан'
            ]
        },
        {
            year: '2019',
            events: [
                'USPF - CIA OJT хөтөлбөрийн гарын үсэг зурах ёслол',
                'IELTS/OET-ийн албан ёсны шалгалтын төв болсон',
                'CIAnTalk Online үйл ажиллагаа эхлэв'
            ]
        },
        {
            year: '2018',
            events: [
                'Хятад/Ойрхи Дорнодын сурагчдад зориулсан Англи хэлний Жуниор кемп нээгдэв',
                'San Carlos Talamban их сургуультай хамтын ажиллагаа',
                'Америк сурагчдад зориулсан Англи хэлний Жуниор кемп нээгдэв'
            ]
        },
        {
            year: '2017',
            events: [
                'Шинэ Mactan кампусын барилгын ажил эхлэв',
                'Шинэ Mactan кампусын шав тавих ёслол',
                'Вьетнам сурагчдад зориулсан Англи хэлний Жуниор кемп нээгдэв'
            ]
        },
        {
            year: '2016',
            events: [
                'Тайвань сурагчдад зориулсан Англи хэлний Жуниор кемп нээгдэв',
                'Өргөтгөл хийх зорилгоор Mactan-д газар худалдаж авав'
            ]
        },
        {
            year: '2015',
            events: [
                'Филиппиний хэлний сургалтын семинарт оролцов',
                'Benedicto коллежийн сургуулийн өмнөх боловсролын хөтөлбөртэй нэгдэв',
                'Midori Premium Residences өргөтгөл'
            ]
        },
        {
            year: '2014',
            events: [
                'Кембрижийн шалгалтын бэлтгэл төвөөр батлагдсан (UK)',
                'IDP Resource Center зөвшөөрөл авсан (Australia)'
            ]
        },
        {
            year: '2013',
            events: [
                'CIA Online English (SSIATALK) эхлүүлэв',
                'Орчуулгын үйлчилгээний гэрчилгээ авсан',
                'Япон сурагчдад зориулсан Англи хэлний Жуниор кемп нээгдэв'
            ]
        },
        {
            year: '2012',
            events: [
                'CIA кампусын Semi Sparta нээлт',
                'IELTS, TOEIC, BUSINESS ENGLISH хөтөлбөрүүд нэмэгдсэн',
                'TESOL олгох эрх авсан'
            ]
        },
        {
            year: '2009',
            events: [
                'ISO9001 (Чанарын удирдлагын тогтолцоо) гэрчилгээ авсан',
                'Шинэ SEMI SPARTA CIA кампус руу нүүв'
            ]
        },
        {
            year: '2003',
            events: [
                'CIA-ийн төв кампусын нээлт',
                'Японы Окинавад салбар оффис байгуулагдсан',
                'SEC болон TESDA-аар батлагдсан'
            ]
        }
    ];

    const historyData = data || defaultHistoryData;

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">ТҮҮХ</h2>

                <style>{`
                    .history-arrow {
                        display: flex;
                    }
                    @media (max-width: 768px) {
                        .history-arrow {
                            display: none !important;
                        }
                    }
                `}</style>
                <div style={{ position: 'relative', padding: '0 clamp(1rem, 3vw, 3rem)' }}>
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="history-arrow"
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%',
                            width: 'clamp(32px, 5vw, 40px)',
                            height: 'clamp(32px, 5vw, 40px)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--color-primary)',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)'
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
                                    minWidth: 'clamp(260px, 80vw, 300px)',
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
                        className="history-arrow"
                        style={{
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'white',
                            border: '1px solid var(--color-border)',
                            borderRadius: '50%',
                            width: 'clamp(32px, 5vw, 40px)',
                            height: 'clamp(32px, 5vw, 40px)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            color: 'var(--color-primary)',
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)'
                        }}
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
};

export default History;
