import React, { useState } from 'react';
import { Heart, Cpu, FlaskConical, Users, Palette } from 'lucide-react';

const YeungnamCurriculum = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const curriculumData = [
        {
            id: 'health',
            title: 'Эрүүл мэндийн сургууль',
            icon: <Heart size={40} />,
            description: 'Эрүүл мэнд, сувилахуй, физик эмчилгээ',
            details: [
                {
                    type: '4 жилийн хөтөлбөр',
                    items: [
                        { name: 'Сувилахуйн тэнхим', desc: '4 жилийн бакалаврын хөтөлбөр' }
                    ]
                },
                {
                    type: '3 жилийн хөтөлбөр',
                    items: [
                        { name: 'Физик эмчилгээний тэнхим', desc: '3 жилийн мэргэжлийн хөтөлбөр' },
                        { name: 'Шүдний эрүүл ахуйн тэнхим', desc: '3 жилийн мэргэжлийн хөтөлбөр' },
                        { name: 'Эрүүл мэндийн удирдлагын тэнхим', desc: '3 жилийн мэргэжлийн хөтөлбөр' }
                    ]
                }
            ]
        },
        {
            id: 'engineering',
            title: 'Инженерчлэл ба Технологи',
            icon: <Cpu size={40} />,
            description: 'Програм хангамж, кибер аюулгүй байдал, механик инженерчлэл',
            details: [
                {
                    type: '3 жилийн хөтөлбөр',
                    items: [
                        { name: 'Програм хангамжийн контентын тэнхим', desc: '3 жилийн мэргэжлийн хөтөлбөр' },
                        { name: 'Кибер аюулгүй байдлын тэнхим', desc: '3 жилийн мэргэжлийн хөтөлбөр' }
                    ]
                },
                {
                    type: 'Инженерийн технологи',
                    items: [
                        { name: 'Механик инженерийн технологийн тэнхим', desc: 'Механик инженерийн үндэс болон практик хэрэглээ' },
                        { name: 'ICT Хагас дамжуулагч ба электроникийн тэнхим', desc: 'Мэдээллийн технологи, хагас дамжуулагч болон электроникийн хөгжүүлэлт' },
                        { name: 'Автомат цахилгааны инженерийн технологийн тэнхим', desc: 'Автомат цахилгааны систем ба хяналтын технологи' },
                        { name: 'Смарт e-автомашины тэнхим', desc: 'Цахилгаан болон ухаалаг автомашины технологи' },
                        { name: 'Хөдөлгөөнт технологийн тэнхим (Mobility)', desc: 'Ирээдүйн тээврийн хэрэгслийн технологи' },
                        { name: 'Химийн аж үйлдвэрийн технологийн тэнхим', desc: 'Химийн процесс болон аж үйлдвэрийн хэрэглээ' },
                        { name: 'Барилгын архитектурын тэнхим', desc: 'Барилгын дизайн болон архитектурын зураг төсөл' },
                        { name: 'Иргэний инженерийн тэнхим', desc: 'Дэд бүтцийн төлөвлөлт болон барилга угсралт' }
                    ]
                }
            ]
        },
        {
            id: 'natural',
            title: 'Байгалийн шинжлэх ухаан',
            icon: <FlaskConical size={40} />,
            description: 'Хоол, загвар, гоо сайхан, тэжээвэр амьтад',
            details: [
                {
                    type: 'Хоол ба урлаг',
                    items: [
                        { name: 'Олон улсын хоолны урлагийн тэнхим (Global Culinary Arts)', desc: 'Дэлхийн хоолны соёл болон мэргэжлийн чанарын хоол үйлдвэрлэл' },
                        { name: 'Олон улсын нарийн боовны тэнхим (Global Bakery)', desc: 'Мэргэжлийн нарийн боов ба жигнэмэгийн чадвар' }
                    ]
                },
                {
                    type: 'Гоо сайхан ба загвар',
                    items: [
                        { name: 'Пак Сын Чоль үсний загварын тэнхим (Park Seung Chol Hair)', desc: 'Мэргэжлийн үс засалт болон загварын арга техник' },
                        { name: 'Загвар дизайны маркетингийн тэнхим (Fashion Design Marketing)', desc: 'Загварын дизайн болон зах зээлийн стратеги' },
                        { name: 'K-Beauty тэнхим', desc: 'Солонгосын гоо сайхны үйлчилгээ болон арьс арчилгаа' }
                    ]
                },
                {
                    type: 'Тэжээвэр амьтад',
                    items: [
                        { name: 'Тэжээвэр амьтны эрүүл мэндийн тэнхим (Companion Animal Health)', desc: 'Тэжээвэр амьтдын эрүүл мэнд болон асаргаа' },
                        { name: 'Тэжээвэр амьтны стилистийн тэнхим (Companion Animal Stylist)', desc: 'Тэжээвэр амьтдын загвар болон арчилгаа' }
                    ]
                }
            ]
        },
        {
            id: 'humanities',
            title: 'Хүмүүнлэг ба Нийгмийн шинжлэх ухаан',
            icon: <Users size={40} />,
            description: 'Нийгмийн халамж, бизнес, аялал жуулчлал',
            details: [
                {
                    type: 'Нийгмийн халамж',
                    items: [
                        { name: 'Нийгмийн халамжийн үйлчилгээний тэнхим (Social Welfare Service)', desc: 'Нийгмийн халамжийн үйлчилгээ болон дэмжлэг' },
                        { name: 'Нийгмийн халамж ба хүүхдийн асрамжийн тэнхим (Social Welfare and Child Care)', desc: 'Хүүхдийн хөгжил болон асаргаа' },
                        { name: 'Залуучуудын халамж, зөвлөгөөний тэнхим (Youth Welfare Counseling)', desc: 'Залуучуудын сэтгэл зүйн дэмжлэг болон зөвлөгөө' }
                    ]
                },
                {
                    type: 'Бизнес ба Аялал жуулчлал',
                    items: [
                        { name: 'Бизнес ба нягтлан бодох бүртгэлийн тэнхим (Business and Accounting)', desc: 'Бизнесийн удирдлага болон санхүүгийн бүртгэл' },
                        { name: 'Агаарын тээвэр–Зочид буудал–Казино тэнхим (Airline·Hotel·Casino)', desc: 'Зочлох үйлчилгээний салбарын мэргэжил' },
                        { name: 'Аялал жуулчлал–Агаарын тээврийн мастерийн тэнхим (Travel·Airline Master)', desc: 'Аялал жуулчлал болон агаарын тээврийн мэргэжлийн түвшин' }
                    ]
                }
            ]
        },
        {
            id: 'arts',
            title: 'Урлаг ба Биеийн тамир',
            icon: <Palette size={40} />,
            description: 'Спорт, дизайн, анимаци, интерьер',
            details: [
                {
                    type: 'Спорт ба бие бялдар',
                    items: [
                        { name: 'Цэргийн мэргэжлийн офицеруудын тэнхим (Military NCOs)', desc: 'Цэргийн манлайлал болон бие бялдрын сургалт' },
                        { name: 'Спорт нөхөн сэргээх тэнхим (Sport Rehabilitation)', desc: 'Спортын гэмтэл, нөхөн сэргээлт болон физик эмчилгээ' }
                    ]
                },
                {
                    type: 'Дижитал урлаг ба дизайн',
                    items: [
                        { name: 'Вэбтүүн (Webtoon) тэнхим', desc: 'Дижитал комик болон график зураг' },
                        { name: 'Метаверс тоглоомын анимацийн тэнхим (Metaverse Game Animation)', desc: 'Тоглоомын анимаци болон виртуал ертөнцийн дизайн' },
                        { name: 'Моделтайнерийн тэнхим (Modeltainer)', desc: 'Загвар болон үзвэр үйлчилгээний хослол' },
                        { name: 'Дүрс бичлэгийн дизайны тэнхим (Visual Video Design)', desc: 'Видео контент болон визуал дизайн' },
                        { name: 'Интерьер дизайны тэнхим (Interior Design)', desc: 'Дотоод засал болон орон зайн төлөвлөлт' },
                        { name: 'Олон улсын чөлөөт үйлчилгээний тэнхим (Global Leisure Service)', desc: 'Олон улсын зугаа цэнгэлийн үйлчилгээ болон менежмент' }
                    ]
                }
            ]
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <h2 className="section-title">САНАЛ БОЛГОЖ БУЙ МЭРГЭЖЛҮҮД</h2>
            </div>

            {/* Course Display - Responsive: Horizontal scroll on mobile, Grid on desktop */}
            <div
                className="curriculum-cards-container"
                style={{
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    padding: 'var(--spacing-md) var(--spacing-lg)'
                }}
            >
                {curriculumData.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="card curriculum-card"
                        style={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            textAlign: 'center',
                            padding: 'var(--spacing-lg) var(--spacing-md)',
                            border: '1px solid transparent',
                            minWidth: '250px',
                            maxWidth: '280px',
                            flex: '0 0 auto',
                            scrollSnapAlign: 'start',
                            borderRadius: 'var(--radius-md)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = '#27ae60';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(39, 174, 96, 0.1)',
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--color-primary)'
                        }}>
                            {item.icon}
                        </div>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: '1.25rem',
                            fontWeight: '700'
                        }}>
                            {item.title}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="container">
                {/* CSS Animation and Responsive Styles */}
                <style>{`
                    /* Hide scrollbar but keep functionality */
                    .curriculum-cards-container::-webkit-scrollbar {
                        display: none;
                    }
                    
                    /* Mobile: Horizontal scroll with snap */
                    @media screen and (max-width: 768px) {
                        .curriculum-cards-container {
                            gap: var(--spacing-sm) !important;
                            width: 100%;
                            padding-left: var(--spacing-md);
                            padding-right: var(--spacing-md);
                        }
                        
                        .curriculum-card {
                            width: 260px !important;
                            min-width: 260px !important;
                            scroll-snap-align: center !important;
                            flex-shrink: 0;
                        }
                    }
                    
                    /* Desktop/Tablet: Single row, NO scroll (769px+) */
                    @media screen and (min-width: 769px) {
                        .curriculum-cards-container {
                            justify-content: center;
                            flex-wrap: wrap;
                            width: 100%;
                            max-width: 1600px;
                            margin: 0 auto;
                        }
                        
                        .curriculum-card {
                            flex: 0 1 auto;
                        }
                    }
                    
                    /* Custom scrollbar for other scrollable areas */
                    div::-webkit-scrollbar {
                        height: 8px;
                    }
                    
                    div::-webkit-scrollbar-track {
                        background: var(--color-background-alt);
                        border-radius: 4px;
                    }
                    
                    div::-webkit-scrollbar-thumb {
                        background: var(--color-primary);
                        border-radius: 4px;
                    }

                    div::-webkit-scrollbar-thumb:hover {
                        background: var(--color-primary-dark);
                        border-radius: 4px;
                    }
                `}</style>

                {/* Modal */}
                {selectedItem && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1100,
                        padding: '1rem',
                        backdropFilter: 'blur(5px)'
                    }} onClick={() => setSelectedItem(null)}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            maxWidth: '800px',
                            width: '100%',
                            maxHeight: '90vh',
                            position: 'relative',
                            boxShadow: 'var(--shadow-lg)',
                            overflow: 'hidden'
                        }} onClick={e => e.stopPropagation()}>
                            {/* Fixed Header */}
                            <div style={{
                                padding: 'var(--spacing-md) var(--spacing-md) 0',
                                backgroundColor: 'white',
                                flexShrink: 0
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--spacing-sm)' }}>
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer',
                                            color: 'var(--color-text-muted)',
                                            padding: '0.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div style={{
                                overflowY: 'auto',
                                padding: '0 var(--spacing-md) var(--spacing-lg)',
                                flex: 1
                            }}>
                                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                                    <div style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                                        marginBottom: 'var(--spacing-md)',
                                        color: 'var(--color-primary)'
                                    }}>
                                        {selectedItem.icon}
                                    </div>
                                    <h3 style={{
                                        color: 'var(--color-primary)',
                                        fontSize: '1.75rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        lineHeight: '1.2'
                                    }}>
                                        {selectedItem.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '1rem',
                                        lineHeight: '1.6',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    }}>{selectedItem.description}</p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                                    {selectedItem.details.map((group, index) => (
                                        <div key={index} style={{
                                            backgroundColor: 'var(--color-background-alt)',
                                            padding: '1.5rem',
                                            borderRadius: 'var(--radius-md)'
                                        }}>
                                            <h4 style={{
                                                color: '#2c3e50',
                                                marginBottom: '1.25rem',
                                                borderBottom: '2px solid var(--color-primary)',
                                                paddingBottom: '0.5rem',
                                                display: 'inline-block',
                                                fontSize: '1.1rem',
                                                lineHeight: '1.4'
                                            }}>
                                                {group.type}
                                            </h4>
                                            <ul style={{ listStyle: 'none' }}>
                                                {group.items.map((item, i) => (
                                                    <li key={i} style={{ marginBottom: '1.5rem' }}>
                                                        <strong style={{
                                                            color: 'var(--color-primary)',
                                                            fontSize: '1.05rem',
                                                            display: 'block',
                                                            marginBottom: '0.4rem',
                                                            lineHeight: '1.3'
                                                        }}>{item.name}</strong>
                                                        <p style={{
                                                            color: 'var(--color-text-muted)',
                                                            marginTop: '0',
                                                            lineHeight: '1.7',
                                                            fontSize: '0.95rem'
                                                        }}>
                                                            {item.desc}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default YeungnamCurriculum;
