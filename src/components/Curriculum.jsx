import React, { useState } from 'react';
import { MessageCircle, FileText, GraduationCap, Briefcase, Star, Users } from 'lucide-react';
import training1 from '../assets/training-1.png';
import training2 from '../assets/training-2.png';
import training3 from '../assets/training-3.png';
import training4 from '../assets/training-4.png';
import training5 from '../assets/training-5.png';

const Curriculum = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const curriculumData = [
        {
            id: 'esl',
            title: 'CAMBRIDGE ESL',
            icon: <MessageCircle size={40} />,
            description: 'Cambridge-ийн албан ёсны магадлан итгэмжлэлтэй хөтөлбөр.',
            details: [
                {
                    type: 'Хөтөлбөрийн тухай',
                    items: [
                        { name: 'Cambridge Standard', desc: 'CIA нь Cambridge-ийн албан ёсны магадлан итгэмжлэлтэй, бүрэн хүлээн зөвшөөрөгдсөн тул бид эдгээр шалгалтыг заах чадвар бүхий, туршлагатай мэргэжлийн багш нартай. Бид суралцагчдадаа Cambridge-ийн стандартад нийцсэн, Англи хэлний мэдлэг, ур чадварыг үр дүнтэй эзэмшихийг бүрэн баталгаажуулдаг.' }
                    ]
                },
                {
                    type: '4 Түвшний Бэлтгэл',
                    items: [
                        { name: 'Түвшингүүд', desc: 'FRIST (FCE), ADVANCED (CAE), KEY (KET), PRELIMINARY (PET)' },
                        { name: 'Шалгалтын бүтэц', desc: 'Унших болон Хэлний хэрэглээ, Сонсгол, Ярих, Бичих (Нийт 3–4 цаг)' }
                    ]
                }
            ]
        },
        {
            id: 'toeic',
            title: 'TOEIC PREPARATION',
            icon: <FileText size={40} />,
            description: 'Бизнес болон академик зорилгоор Англи хэлийг ашиглах чадвар.',
            details: [
                {
                    type: 'Курсүүд',
                    items: [
                        { name: 'PRE TOEIC', desc: 'Хамгийн бага хугацаа: 1 долоо хоног. Бүртгүүлэхэд шаардлагагүй. Энэ нь TOEIC-ийн Regular болон Guarantee курст бэлтгэх зориулалттай суурь бэлтгэл хөтөлбөр юм.' },
                        { name: 'REGULAR TOEIC', desc: 'Хамгийн бага хугацаа: 4 долоо хоног. TOEIC 380+ эсвэл IELTS 3.0+ түвшинтэй байх шаардлагатай. Жишээ шалгалтын материал дээр суурилсан, өдөр тутмын ажил, оффисын нөхцөл байдалтай уялдуулсан хөтөлбөр.' },
                        { name: 'Guarantee TOEIC', desc: 'Хамгийн бага хугацаа: 12 долоо хоног. Зорилтот оноондоо хүрэхийг баталгаажуулдаг системтэй бэлтгэл.' }
                    ]
                },
                {
                    type: 'Зорилтот оноо & Шаардлага',
                    items: [
                        { name: '600 оноо', desc: 'Эхлэх түвшин: TOEIC 400 / IELTS 3.0' },
                        { name: '700 оноо', desc: 'Эхлэх түвшин: TOEIC 600 / IELTS 4.0' },
                        { name: '800 оноо', desc: 'Эхлэх түвшин: TOEIC 650 / IELTS 5.0' },
                        { name: '900 оноо', desc: 'Эхлэх түвшин: TOEIC 790 / IELTS 6.0' }
                    ]
                }
            ]
        },
        {
            id: 'ielts',
            title: 'IELTS PREPARATION',
            icon: <GraduationCap size={40} />,
            description: 'Гадаадад сурах, ажиллах, амьдрах хүсэлтэй хүмүүст зориулсан.',
            details: [
                {
                    type: 'Курсүүд',
                    items: [
                        { name: 'PRE IELTS', desc: 'Хамгийн бага хугацаа: 1 долоо хоног. Бүртгүүлэхэд шаардлагагүй. IELTS + ESL хосолсон хичээлүүдээр дараагийн шатанд бэлтгэнэ.' },
                        { name: 'REGULAR IELTS', desc: 'Хамгийн бага хугацаа: 4 долоо хоног. IELTS 3.5+ эсвэл TOEIC 480+ шаардлагатай. Бүх модулиудад (унших, бичих, ярих, сонсох) уян хатан хугацаанд бэлтгэнэ.' },
                        { name: 'Guarantee IELTS', desc: 'Хамгийн бага хугацаа: 12 долоо хоног. Зорилтот Band Score-доо хүрэхийг баталгаажуулна.' }
                    ]
                },
                {
                    type: 'Зорилтот оноо & Шаардлага',
                    items: [
                        { name: '5.5 оноо', desc: 'Эхлэх түвшин: IELTS 3.5 / TOEIC 480' },
                        { name: '6.0 оноо', desc: 'Эхлэх түвшин: IELTS 5.0 / TOEIC 680' },
                        { name: '6.5 оноо', desc: 'Эхлэх түвшин: IELTS 6.0 / TOEIC 790' },
                        { name: '7.0 оноо', desc: 'Эхлэх түвшин: IELTS 6.5 / TOEIC 850' }
                    ]
                }
            ]
        },
        {
            id: 'business',
            title: 'BUSINESS ENGLISH',
            icon: <Briefcase size={40} />,
            description: 'Бизнесийн орчинд шаардлагатай мэргэжлийн Англи хэл.',
            details: [
                {
                    type: 'Зорилго & Ур чадвар',
                    items: [
                        { name: 'Үндсэн чадварууд', desc: 'Англиар презентаци бэлтгэх, хурал уулзалт удирдах/оролцох, хэлэлцээр хийх, албан бичиг баримт боловсруулах.' }
                    ]
                },
                {
                    type: 'Түвшингийн шаардлага',
                    items: [
                        { name: 'Beginner', desc: 'IELTS 3.5+ / TOEIC 380+ түвшинтэй байх шаардлагатай' },
                        { name: 'Intermediate', desc: 'IELTS 5.0+ / TOEIC 580+ түвшинтэй байх шаардлагатай' }
                    ]
                }
            ]
        },
        {
            id: 'working_holiday',
            title: 'WORKING HOLIDAY',
            icon: <Star size={40} />,
            description: 'Австрали, Канадын виз болон ажилд бэлтгэх хөтөлбөр.',
            details: [
                {
                    type: 'Хөтөлбөрийн онцлог',
                    items: [
                        { name: 'Виз & Ажил', desc: 'Working Holiday Program (WHP) виз авах, Австрали/Шинэ Зеландын аялга, амьдралын хэв маягтай танилцах.' },
                        { name: 'Эзэмших чадварууд', desc: 'Ярилцлагын чадвар, мэргэжлийн ярианы ур чадвар, сонирхол татахуйц Resume/CV бэлтгэх.' }
                    ]
                }
            ]
        },
        {
            id: 'family_junior',
            title: 'FAMILY & JUNIOR',
            icon: <Users size={40} />,
            description: 'Гэр бүл, хүүхэд залуусд зориулсан зун/өвлийн кэмп.',
            details: [
                {
                    type: 'Кэмпийн тухай',
                    items: [
                        { name: 'Зорилго', desc: 'Англи хэлээ хөгжилтэй, идэвхтэй орчинд хөгжүүлэхийг хүсдэг гэр бүлүүдэд зориулсан. Тав тухтай байр, чөлөөт цагийн үйл ажиллагааг хослуулсан.' }
                    ]
                }
            ]
        }
    ];

    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background-alt)' }}>
            <div className="container">
                <h2 className="section-title">СУРГАЛТЫН ХӨТӨЛБӨР</h2>
            </div>

            {/* Course Display - Responsive: Horizontal scroll on mobile, Grid on desktop */}
            <div
                className="curriculum-cards-container"
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
                            e.currentTarget.style.borderColor = '#3498db';
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
                            backgroundColor: '#3498db',
                            marginBottom: 'var(--spacing-md)',
                            color: 'white'
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
                {/* Training Systems Auto-Scrolling Gallery */}
                <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                    <h3 style={{
                        textAlign: 'center',
                        color: 'var(--color-text-main)',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        marginBottom: 'var(--spacing-lg)'
                    }}>
                        Сургалтын системүүд
                    </h3>

                    <div style={{
                        overflow: 'hidden',
                        position: 'relative',
                        padding: 'var(--spacing-lg) 0',
                        backgroundColor: 'white',
                        borderRadius: 'var(--radius-lg)'
                    }}>
                        <div
                            style={{
                                display: 'flex',
                                gap: 'var(--spacing-xl)',
                                animation: 'scroll-left 30s linear infinite'
                            }}
                        >
                            {/* Duplicate images for seamless loop */}
                            {[training1, training2, training3, training4, training5, training1, training2, training3, training4, training5].map((img, index) => (
                                <div
                                    key={index}
                                    style={{
                                        minWidth: '200px',
                                        height: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 'var(--spacing-md)'
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Training system ${(index % 5) + 1}`}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CSS Animation and Responsive Styles */}
                <style>{`
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    

                    /* Base styles (Mobile First) - previously inline */
                    .curriculum-cards-container {
                        display: flex;
                        gap: var(--spacing-md);
                        overflow-x: auto;
                        overflow-y: hidden;
                        scroll-snap-type: x mandatory;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                        padding: var(--spacing-md) var(--spacing-lg);
                    }

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
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: var(--spacing-lg);
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            justify-items: center;
                            overflow-x: visible; /* Override mobile style */
                            overflow-y: visible; /* Override mobile style */
                            padding: 0; /* Override mobile padding if needed, or keep it */
                        }
                        
                        .curriculum-card {
                            width: 100%;
                            max-width: none;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        /* Push the description to the bottom if needed or ensure consistent height */
                        .curriculum-card > div:first-child {
                            align-self: center;
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
                                        backgroundColor: '#3498db',
                                        marginBottom: 'var(--spacing-md)',
                                        color: 'white'
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


export default Curriculum;
