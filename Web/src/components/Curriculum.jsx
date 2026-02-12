import React, { useState } from 'react';
import { MessageCircle, FileText, GraduationCap, Briefcase, Star, Users } from 'lucide-react';
import { urlFor } from '../sanity/client';
import training1 from '../assets/training-1.png';
import training2 from '../assets/training-2.png';
import training3 from '../assets/training-3.png';
import training4 from '../assets/training-4.png';
import training5 from '../assets/training-5.png';

const Curriculum = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // Use passed data or fallback to empty array (or initial hardcoded data if we want to keep it as fallback)
    // For now, let's assume if data is passed, we use it. If not, we use the hardcoded default (which I will keep for now to avoid breaking while migrating).
    // Actually, to make it clean, I should just use `data || defaultData`.
    // But since I am editing the file, I can just replace the definition.

    // Default hardcoded data (moved from inside component to outside or kept as fallback)
    const defaultData = [
        {
            id: 'regular_esl',
            title: 'REGULAR ESL',
            icon: <MessageCircle size={40} />,
            description: 'Ерөнхий англи хэл – суурь, жигд ахиц.',
            details: [
                {
                    type: 'Хэнд тохирох вэ?',
                    items: [
                        { name: 'Анхан–дунд шат', desc: 'Англи хэлээ анхан–дунд түвшнээс эхлүүлэх гэж байгаа.' },
                        { name: 'Ярихаас айдаг', desc: 'Ярихаас айдаг, сандардаг хүмүүст.' },
                        { name: 'Тайван орчин', desc: 'Тайван орчинд, ачаалал багатай сурахыг хүсдэг хүнд.' }
                    ]
                },
                {
                    type: 'Юу сурна вэ?',
                    items: [
                        { name: '🗣 Өдөр тутмын яриа', desc: '' },
                        { name: '👂 Сонсоод ойлгох чадвар', desc: '' },
                        { name: '📖 Унших чадвар', desc: '' },
                        { name: '✍️ Бичих чадвар', desc: '' },
                        { name: '🧠 Дүрэм, үгс', desc: '' }
                    ]
                },
                {
                    type: 'Ямар давуу талтай вэ?',
                    items: [
                        { name: 'Ачаалал багатай', desc: '' },
                        { name: 'Ая тухтай, стресс багатай', desc: '' }
                    ]
                }
            ]
        },
        {
            id: 'ielts_toeic',
            title: 'IELTS / TOEIC',
            icon: <GraduationCap size={40} />,
            description: 'Шалгалтанд зориулсан тусгай бэлтгэл.',
            details: [
                {
                    type: 'Хэнд тохирох вэ?',
                    items: [
                        { name: 'Зорилготой', desc: 'IELTS / TOEIC оноо авах зорилготой.' },
                        { name: 'Суурьтай', desc: 'Аль хэдийн суурьтай хүмүүст.' }
                    ]
                },
                {
                    type: 'Юу сурах вэ?',
                    items: [
                        { name: '📊 Шалгалтын бүтэц, стратеги', desc: '' },
                        { name: '✍️ Бичих чадвар', desc: 'Шалгалтын бичих чадваруудад таныг бүрэн бэлдэнэ.' },
                        { name: '🗣 Ярианы шалгалт', desc: 'Ярианы шалгалтыг тань төвөггүй болгох.' },
                        { name: '📈 Оноо өсгөх техник', desc: '' }
                    ]
                },
                {
                    type: 'Ямар давуу талтай вэ?',
                    items: [
                        { name: 'Бодит оноо', desc: 'Танд шалгалтын бодит оноог тань харуулах.' },
                        { name: 'Туршлагатай багш нар', desc: 'Багш нар нь шалгалтын туршлага өндөр.' },
                        { name: 'Урьдчилсан шалгалт', desc: 'IELTS, TOEIC-ийн урьдчилсан шалгалт өгдөг.' }
                    ]
                }
            ]
        },
        {
            id: 'business',
            title: 'BUSINESS ENGLISH',
            icon: <Briefcase size={40} />,
            description: 'Ажил, бизнесийн англи хэл.',
            details: [
                {
                    type: 'Хэнд тохирох вэ?',
                    items: [
                        { name: 'Ажил хэрэгч', desc: 'Ажил дээрээ англи хэрэглэх шаардлагатай.' },
                        { name: 'Харилцаа', desc: 'Гадаад харилцагч нартай харьцах.' },
                        { name: 'Карьер', desc: 'Карьерээ ахиулах зорилготой.' }
                    ]
                },
                {
                    type: 'Юу сурах вэ?',
                    items: [
                        { name: '📧 Имэйл бичих', desc: '' },
                        { name: '🗣 Уулзалт, танилцуулга бэлдэх', desc: '' },
                        { name: '🤝 Хэлэлцээр', desc: 'Англи хэл дээр тохиролцоо хийхэд.' },
                        { name: '🧠 Мэргэжлийн үг хэллэг', desc: '' }
                    ]
                },
                {
                    type: 'Ямар давуу талтай вэ?',
                    items: [
                        { name: 'Ажлын орчин', desc: 'Ажлын орчинд хэрэглэгдэх англи хэл.' },
                        { name: 'Formal + confident яриа', desc: '' },
                        { name: 'Өсөх боломж', desc: 'Цалин, боломж өсөх суурь.' }
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

    const curriculumData = data && data.length > 0 ? data.map(item => {
        // Find matching default item to fallback for 'details' if missing - Case insensitive match
        const defaultItem = defaultData.find(d => d.title.toLowerCase() === (item.title || '').toLowerCase());

        return {
            ...item,
            // Map string icons to components if necessary, or just use if passed as node
            icon: item.icon === 'MessageCircle' ? <MessageCircle size={40} /> :
                item.icon === 'GraduationCap' ? <GraduationCap size={40} /> :
                    item.icon === 'Briefcase' ? <Briefcase size={40} /> :
                        item.icon === 'Star' ? <Star size={40} /> :
                            item.icon === 'Users' ? <Users size={40} /> :
                                // If it's already a component (default data)
                                item.icon || defaultItem?.icon || <MessageCircle size={40} />,
            // Fallback for details if missing in Sanity data
            details: item.details || defaultItem?.details || []
        };
    }) : defaultData;

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
                            /* Widths handled by CSS for responsiveness */
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
                            {/* Use Sanity data or fallback to local images */}
                            {(data && data.trainingSystems && data.trainingSystems.length > 0
                                ? [...data.trainingSystems, ...data.trainingSystems] // Duplicate for loop
                                : [training1, training2, training3, training4, training5, training1, training2, training3, training4, training5]
                            ).map((img, index) => (
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
                                        src={typeof img === 'string' ? img : urlFor(img).width(300).auto('format').url()}
                                        alt={`Training system`}
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
                            /* Default to 3 columns on tablet/small laptop */
                            grid-template-columns: repeat(3, 1fr);
                            gap: var(--spacing-lg);
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            justify-items: center;
                            overflow-x: visible;
                            overflow-y: visible;
                            padding: 0;
                        }
                        
                        .curriculum-card {
                            width: 100%;
                            max-width: 350px; /* Allow wider cards on tablet */
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                        }
                        
                        .curriculum-card > div:first-child {
                            align-self: center;
                        }
                    }

                    /* Large Screens: 5 Columns to match screenshot */
                    @media screen and (min-width: 1100px) {
                        .curriculum-cards-container {
                            grid-template-columns: repeat(5, 1fr);
                            max-width: 1400px; /* Allow more width for 5 columns */
                        }

                        .curriculum-card {
                            min-width: 0; /* Allow shrinking */
                            max-width: none; /* Let grid control width */
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
                                                        {item.desc && (
                                                            <p style={{
                                                                color: 'var(--color-text-muted)',
                                                                marginTop: '0',
                                                                lineHeight: '1.7',
                                                                fontSize: '0.95rem'
                                                            }}>
                                                                {item.desc}
                                                            </p>
                                                        )}
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
        </section >
    );
};


export default Curriculum;
