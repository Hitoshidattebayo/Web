import React, { useState } from 'react';
import { GraduationCap, Users, Briefcase, HelpCircle, Compass, Target, Shield, TrendingUp, Award } from 'lucide-react';

const TargetAudience = () => {
    const [activeTab, setActiveTab] = useState('students');

    const tabs = [
        { id: 'students', label: 'СУРАГЧИД, ОЮУТНУУД', icon: <GraduationCap size={20} />, color: '#3498db', bg: '#EBF5FB' },
        { id: 'parents', label: 'ЭЦЭГ ЭХЧҮҮД', icon: <Users size={20} />, color: '#e74c3c', bg: '#FADBD8' },
        { id: 'professionals', label: 'ЗАЛУУ МЭРГЭЖИЛТЭНГҮҮД', icon: <Briefcase size={20} />, color: '#2ecc71', bg: '#EAFAF1' }
    ];

    const content = {
        students: {
            title: "🎓 Оюутан, сурагчид - Сурагчид, оюутнууд ирээдүйнхээ талаар бодож эхлэх үед:",
            sections: [
                {
                    title: "АСУУДАЛ",
                    icon: <HelpCircle size={24} color="#e74c3c" />,
                    items: [
                        "Яг юу сурмаар, ямар чиглэл тохирох вэ гэдгээ мэдэхгүй",
                        "Гадаадад сурах, тэтгэлэг, ур чадварын сургалтын талаар хэт их мэдээлэл дунд төөрөлддөг",
                        "Найз нөхөд, сошиал, сурталчилгаанаас ирэх ялгаатай, зөрүүтэй мэдээлэлд эргэлздэг",
                        "Буруу сонголт хийж цаг, боломжоо алдахаас айдаг",
                        "Өөртөө итгэлгүй, “би чадна” гэдэг мэдрэмж дутмаг байдаг"
                    ]
                },
                {
                    title: "ШИЙДЭЛ",
                    icon: <Compass size={24} color="#f1c40f" />,
                    items: [
                        "Өөрийгөө таньж мэдэх, сонирхол, чадвараа тодорхойлох чиглүүлсэн зөвлөгөө",
                        "Сурах чиглэл, улс орон, сургалтын хэлбэрийг ойлгомжтойгоор тайлбарласан замнал",
                        "Хэл, ур чадвар, бэлтгэлийг алхамчилсан төлөвлөгөөнд оруулж өгдөг",
                        "Зөвхөн заах бус, итгэл өгч, хамт явдаг зөвлөх байдлаар дэмждэг"
                    ]
                },
                {
                    title: "ҮР ДҮН",
                    icon: <Target size={24} color="#e74c3c" />,
                    items: [
                        "Сурагч ирээдүйнхээ талаар тодорхой ойлголттой болно",
                        "Өөрийн зорилгод нийцсэн бодит төлөвлөгөөтэй болно",
                        "Сурах, бэлтгэх үйл явц нь айдас биш итгэл болж хувирна",
                        "Гадаад эсвэл дотоодын сургалт, сургуульд бэлтгэлтэй, итгэлтэйгээр шилжинэ",
                        "Өөртөө итгэлтэй, зорилготой суралцагч болон төлөвшинө"
                    ]
                }
            ]
        },
        parents: {
            title: "👨👩👧 Эцэг эх, асран хамгаалагч нар - Хүүхэд, дүү нарынхаа ирээдүйд боловсролд санаа зовж буй хүмүүс",
            sections: [
                {
                    title: "АСУУДАЛ",
                    icon: <HelpCircle size={24} color="#e74c3c" />,
                    items: [
                        "Хаана, ямар боловсрол хүүхдэд нь үнэхээр тохирох вэ гэдгийг тодорхой мэдэхгүй",
                        "Гадаадад суралцах, хэлний сургалт, ур чадварын хөтөлбөрүүд салангид, эмх замбараагүй байдаг",
                        "Зуучлал, сургалтын байгууллагуудын найдвартай эсэхэд эргэлздэг",
                        "Буруу сонголт хийснээс цаг, мөнгө, боломж алдахаас айдаг"
                    ]
                },
                {
                    title: "ШИЙДЭЛ",
                    icon: <Shield size={24} color="#3498db" />,
                    items: [
                        "Хүүхдийн сонирхол, чадвар, ирээдүйн зорилгод тулгуурласан чиглүүлсэн зөвлөгөө",
                        "Зорилго тодорхойлохоос эхлээд бэлтгэл, сургалт, гадаад сургуульд хамруулах хүртэлх нэгдсэн, ойлгомжтой процесс",
                        "Зөвхөн зуучлах бус, урт хугацаанд хамт явдаг боловсролын хамтрагч",
                        "Эцэг эхэд зориулсан ил тод, тайлагналтай, итгэл даасан харилцаа"
                    ]
                },
                {
                    title: "ҮР ДҮН",
                    icon: <TrendingUp size={24} color="#2ecc71" />,
                    items: [
                        "Эцэг эх хүүхдийнхээ боловсролын шийдвэрийг итгэлтэй, ойлгомжтойгоор гаргана",
                        "Хүүхэд нь зорилгодоо нийцсэн чанартай сургалт, зөвлөгөөнд хамрагдана",
                        "Цаг, мөнгө, хүчин чармайлт зөв төлөвлөгөөнд төвлөрнө",
                        "Хүүхэд дотоодын эсвэл гадаадын сургалт, сургуульд амжилттай, бэлтгэлтэйгээр шилжинэ"
                    ]
                }
            ]
        },
        professionals: {
            title: "💼 Залуу мэргэжилтэн - Ажиллаж байгаа ч нэмж суралцахыг хүсч буй",
            sections: [
                {
                    title: "АСУУДАЛ",
                    icon: <HelpCircle size={24} color="#e74c3c" />,
                    items: [
                        "Яг ямар ур чадвар хэрэгтэйгээ тодорхой мэдэхгүй",
                        "Гадаад боловсрол, сертификат, сургалтын ямар нь бодит үнэ цэнтэй вэ гэдгийг ялгаж чаддаггүй",
                        "Ажил, амьдралынхаа хажуугаар эмх цэгцгүй, салангид сургалтуудад цаг, мөнгө зарцуулдаг",
                        "Сурсан зүйл нь ажил, карьер дээрээ шууд хэрэгждэггүй"
                    ]
                },
                {
                    title: "ШИЙДЭЛ",
                    icon: <Compass size={24} color="#9b59b6" />,
                    items: [
                        "Карьерын зорилгоо тодорхойлоход туслах чиглүүлсэн зөвлөгөө",
                        "Тухайн зорилгод нийцсэн ур чадвар + сургалтын замнал",
                        "Дотоод болон гадаад боловсролын боломжийг уялдуулсан, цогц шийдэл",
                        "Зөвхөн сурах биш, хэрэгжихэд чиглэсэн сургалт, зөвлөгөө санал болгодог"
                    ]
                },
                {
                    title: "ҮР ДҮН",
                    icon: <Award size={24} color="#f39c12" />,
                    items: [
                        "Залуу мэргэжилтэн карьерынхаа дараагийн алхмыг итгэлтэй тодорхойлно",
                        "Цаг, мөнгөө зөв сургалт, зөв боломжид зарцуулна",
                        "Ур чадвар нь ажлын байран дээр бодитоор нэмүү өртөг бий болгоно",
                        "Карьерын өсөлт, олон улсын боломжид бэлтгэгдсэн мэргэжилтэн болно"
                    ]
                }
            ]
        }
    };

    return (
        <section style={{ paddingBottom: '4rem', marginTop: '3rem', marginBottom: '8rem', position: 'relative', zIndex: 15 }}>
            <div className="container">
                {/* Tabs */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '0.5rem',
                    paddingLeft: '0', // Flush left alignment
                    marginBottom: '-1px' // Overlap border
                }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '1rem 2rem',
                                cursor: 'pointer',
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px',
                                backgroundColor: activeTab === tab.id ? tab.color : '#f8f9fa',
                                color: activeTab === tab.id ? 'white' : '#636e72',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                border: 'none',
                                position: 'relative',
                                top: activeTab === tab.id ? '2px' : '0', // Connect with content
                                zIndex: activeTab === tab.id ? 2 : 1,
                                boxShadow: activeTab === tab.id ? '0 -2px 10px rgba(0,0,0,0.05)' : 'none',
                                outline: 'none'
                            }}
                        >
                            {tab.icon}
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    borderTopLeftRadius: activeTab === 'students' ? '0' : '20px', // Square off active tab corner
                    borderTopRightRadius: '20px',
                    padding: '3rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    position: 'relative',
                    zIndex: 1,
                    border: `2px solid ${tabs.find(t => t.id === activeTab).color}`, // Colored border matching tab
                    background: `linear-gradient(to bottom right, white, ${tabs.find(t => t.id === activeTab).bg})`
                }}>
                    <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '800',
                        color: '#2c3e50',
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        borderBottom: '1px solid rgba(0,0,0,0.1)',
                        paddingBottom: '1rem'
                    }}>
                        {content[activeTab].title}
                    </h3>

                    <div className="content-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr', // 3 Columns
                        gap: '0', // Gap handled by padding/border
                        marginTop: '2rem'
                    }}>
                        {content[activeTab].sections.map((section, idx) => (
                            <div key={idx} className="content-column" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                padding: '0 2rem',
                                borderRight: idx !== 2 ? '1px solid rgba(0,0,0,0.1)' : 'none', // Divider line
                                position: 'relative'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                                    {section.icon}
                                    <h4 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '800',
                                        color: section.title === 'АСУУДАЛ' ? '#e74c3c' :
                                            section.title === 'ШИЙДЭЛ' ? '#f1c40f' : '#2ecc71',
                                        margin: 0
                                    }}>
                                        {section.title}
                                    </h4>
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.8rem'
                                }}>
                                    {section.items.map((item, i) => (
                                        <li key={i} style={{
                                            fontSize: '0.95rem',
                                            color: '#546e7a',
                                            lineHeight: '1.5',
                                            position: 'relative',
                                            paddingLeft: '1.2rem'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '0.5rem',
                                                width: '5px',
                                                height: '5px',
                                                borderRadius: '50%',
                                                backgroundColor: '#bdc3c7'
                                            }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <style>{`
                    @media (max-width: 900px) {
                        .content-grid {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }
                        .content-column {
                            border-right: none !important;
                            border-bottom: 1px solid rgba(0,0,0,0.1);
                            padding: 0 0 2rem 0 !important;
                        }
                        .content-column:last-child {
                            border-bottom: none;
                            padding-bottom: 0 !important;
                        }
                        .container > div:first-child { /* Tabs Container */
                            overflow-x: auto;
                            padding-bottom: 0.5rem;
                            margin-right: -1rem; /* Allow scroll off screen */
                        }
                        .container > div:first-child::-webkit-scrollbar {
                            display: none;
                        }
                        div[style*="padding: 3rem"] { /* Content Area */
                            padding: 1.5rem !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default TargetAudience;
