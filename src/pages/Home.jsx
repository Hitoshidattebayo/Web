import React, { useRef } from 'react';
import Hero from '../components/Hero';
import { BookOpen, Users, Globe, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import useParticleAnimation from '../hooks/useParticleAnimation';

const Home = () => {
    const ctaCanvasRef = useRef(null);
    useParticleAnimation(ctaCanvasRef);

    return (
        <div>
            <Hero />

            {/* Stats Section - Floating Banner Effect */}
            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)',
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>1:1</div>
                        <div style={{ color: 'var(--color-text-muted)', fontWeight: '600', marginTop: '0.5rem' }}>Ганцаарчилсан зөвлөгөө</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>100%</div>
                        <div style={{ color: 'var(--color-text-muted)', fontWeight: '600', marginTop: '0.5rem' }}>Найдвартай үйлчилгээ</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>2</div>
                        <div style={{ color: 'var(--color-text-muted)', fontWeight: '600', marginTop: '0.5rem' }}>Хамтрагч сургууль</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>24/7</div>
                        <div style={{ color: 'var(--color-text-muted)', fontWeight: '600', marginTop: '0.5rem' }}>Байнгын дэмжлэг</div>
                    </div>
                </div>
            </div>

            {/* Welcome Section */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            backgroundColor: 'rgba(39, 174, 96, 0.1)',
                            color: 'var(--color-primary)',
                            borderRadius: '2rem',
                            fontWeight: '600',
                            marginBottom: '1rem',
                            fontSize: '0.9rem',
                            letterSpacing: '1px'
                        }}>
                            БИДНИЙ ТУХАЙ
                        </span>
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)',
                            color: 'var(--color-text-main)',
                            fontWeight: '800'
                        }}>
                            MU EDUCATION-Д ТАВТАЙ МОРИЛНО УУ
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '4px',
                            backgroundColor: 'var(--color-primary)',
                            margin: '0 auto 1.5rem',
                            borderRadius: '2px'
                        }} />
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1.2rem',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: '1.8'
                        }}>
                            Бид хувь хүний онцлогт тохирсон зөвлөгөө, найдвартай түншлэлүүд болон дэлхийн боломжийн үүдийг нээх нэгдсэн
                            сургалтын хөтөлбөрүүдээр дамжуулан оюутан бүрийн хөгжлийн замналыг дэмждэг.
                        </p>
                    </div>

                    {/* Features Grid (Why Choose Us) */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 'clamp(1rem, 3vw, 2rem)',
                        marginBottom: 'clamp(3rem, 5vw, 6rem)'
                    }}>
                        {[
                            { icon: <Award size={32} />, title: 'Мэргэжлийн зөвлөгөө', desc: 'Туршлагатай зөвлөхүүд танд хамгийн зөв чиглэлийг санал болгоно.' },
                            { icon: <Globe size={32} />, title: 'Олон улсын сүлжээ', desc: 'Азийн шилдэг их дээд сургуулиудтай шууд хамтран ажилладаг.' },
                            { icon: <Briefcase size={32} />, title: 'Ажлын байр', desc: 'Төгсөлтийн дараах ажлын байрны зуучлал, дэмжлэг үзүүлнэ.' },
                            { icon: <CheckCircle size={32} />, title: 'Найдвартай байдал', desc: 'Бүх үйл явц хуулийн дагуу, ил тод, найдвартай явагдана.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="card" style={{
                                padding: '2rem',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                                    color: 'var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Vision & Mission Section - Horizontal Feature Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: 'clamp(1.5rem, 3vw, 2rem)',
                        marginBottom: 'var(--spacing-3xl)'
                    }}>
                        {/* Vision Card */}
                        <div className="card" style={{
                            padding: '2.5rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1.5rem',
                            textAlign: 'left',
                            background: 'white',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                        >
                            <div style={{
                                flexShrink: 0,
                                width: '70px',
                                height: '70px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem'
                            }}>
                                👁️
                            </div>
                            <div>
                                <h3 style={{
                                    color: 'var(--color-primary)',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Бидний Алсын Хараа
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.7',
                                    fontSize: '1.05rem',
                                    margin: 0
                                }}>
                                    “Ази даяарх суралцагчдыг дэлхийн түвшний хэлний боловсрол, ажил мэргэжилд шаардлагатай ур чадвараар хүчирхэгжүүлж, олон улсын боломжуудтай холбох.”
                                </p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="card" style={{
                            padding: '2.5rem',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1.5rem',
                            textAlign: 'left',
                            background: 'white',
                            border: '1px solid rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                        >
                            <div style={{
                                flexShrink: 0,
                                width: '70px',
                                height: '70px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                                color: '#2e7d32',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem'
                            }}>
                                🎯
                            </div>
                            <div>
                                <h3 style={{
                                    color: 'var(--color-primary)',
                                    marginBottom: '1rem',
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}>
                                    Эрхэм Зорилго
                                </h3>
                                <p style={{
                                    color: 'var(--color-text-muted)',
                                    lineHeight: '1.7',
                                    fontSize: '1.05rem',
                                    margin: 0
                                }}>
                                    “Өндөр чанартай хэлний сургалт, практик ур чадварын бэлтгэл болон ажилд бэлтгэх хөтөлбөрөөр дамжуулан оюутнуудыг дэлхийн амжилт руу чиглүүлэн дэмжих.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Programs Grid */}
                    <div style={{ marginTop: '6rem' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-text-main)' }}>Санал болгож буй хөтөлбөрүүд</h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: 'var(--spacing-xl)'
                        }}>
                            {/* CIA Card */}
                            <div className="card" style={{
                                textAlign: 'center',
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    height: '200px',
                                    backgroundColor: '#3498db',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    <div style={{ fontSize: '5rem' }}>🇵🇭</div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-main)', fontSize: '1.5rem', fontWeight: '700' }}>
                                        CEBU INTERNATIONAL ACADEMY
                                    </h3>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', flex: 1 }}>
                                        Филиппин улсын Себу хотод байрлах Англи хэлний сургалтын кампус. Олон улсын орчинд англи хэлийг эрчимтэй сурах боломж.
                                    </p>
                                    <a href="/cia" className="btn" style={{
                                        alignSelf: 'center',
                                        backgroundColor: '#3498db',
                                        color: 'white',
                                        border: 'none',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '2rem',
                                        transition: 'background-color 0.3s'
                                    }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
                                    >ДЭЛГЭРЭНГҮЙ</a>
                                </div>
                            </div>

                            {/* Yeungnam Card */}
                            <div className="card" style={{
                                textAlign: 'center',
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    height: '200px',
                                    backgroundColor: '#27ae60', // Changed to Green
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    <div style={{ fontSize: '5rem' }}>🇰🇷</div>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-main)', fontSize: '1.5rem', fontWeight: '700' }}>
                                        YEUNGNAM UNIVERSITY COLLEGE
                                    </h3>
                                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', flex: 1 }}>
                                        Өргөн хүрээний мэргэжлийн хөтөлбөрүүдийг санал болгодог нэр хүндтэй их сургууль. Ирээдүйн карьераа бидэнтэй хамт эхлүүлээрэй.
                                    </p>
                                    <a href="/yeungnam" className="btn" style={{
                                        alignSelf: 'center',
                                        backgroundColor: '#27ae60',
                                        color: 'white',
                                        border: 'none',
                                        padding: '0.75rem 2rem',
                                        borderRadius: '2rem',
                                        transition: 'background-color 0.3s'
                                    }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#219150'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#27ae60'}
                                    >ДЭЛГЭРЭНГҮЙ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Interactive Background */}
            <section style={{
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                padding: 'var(--spacing-2xl) 0'
            }}>
                {/* Interactive Canvas Background */}
                <canvas
                    ref={ctaCanvasRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                />

                <div className="container" style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center'
                }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: 'var(--spacing-xl)',
                        background: 'white',
                        borderRadius: 'var(--radius-xl)',
                        boxShadow: 'var(--shadow-lg)'
                    }}>
                        <h3 style={{
                            marginBottom: 'var(--spacing-md)',
                            fontSize: '2rem',
                            color: 'var(--color-text-main)'
                        }}>
                            Бид таны ирээдүйн гүүр болох болно
                        </h3>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: '1.1rem',
                            marginBottom: 'var(--spacing-lg)',
                            lineHeight: '1.8'
                        }}>
                            Mu Education нь таныг эдгээр сургуулиудад элсэхэд шаардлагатай бүх зөвлөгөө, тусламжийг үзүүлж, амжилттай суралцахад тань туслах болно.
                        </p>
                        <a href="/apply" className="btn btn-primary" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem'
                        }}>
                            ХОЛБОО БАРИХ
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
