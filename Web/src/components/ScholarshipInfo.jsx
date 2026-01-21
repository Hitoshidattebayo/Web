import React from 'react';
import { Award, Briefcase, Home } from 'lucide-react';

const ScholarshipInfo = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white', padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>
                    Тэтгэлэг ба бусад
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)',
                    marginTop: 'var(--spacing-xl)'
                }}>
                    {/* Scholarship Section */}
                    <div className="card" style={{
                        borderTop: '4px solid var(--color-primary)',
                        padding: 'var(--spacing-lg)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-primary)'
                            }}>
                                <Award size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Коллежийн сургалтын тэтгэлэг
                            </h3>
                        </div>

                        <p style={{
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            color: 'var(--color-text-muted)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            Scholarship for College Course
                        </p>

                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.8'
                        }}>
                            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                                <strong>Эхний улирал:</strong> TOPIK 3 болон түүнээс дээш түвшинтэй гадаад оюутанд сургалтын төлбөрийн <strong style={{ color: 'var(--color-primary)' }}>50%</strong> тэтгэлэг олгоно.
                            </li>
                            <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                                <strong>Хоёрдугаар улирлаас эхлэн:</strong> Голч оноо (G.P.A.) 65~100 хооронд байвал сургалтын төлбөрийн <strong style={{ color: 'var(--color-primary)' }}>30% ~ 100%</strong> хүртэл өөр өөр хэмжээний тэтгэлэг олгоно.
                            </li>
                        </ul>
                    </div>

                    {/* Advantages Section */}
                    <div className="card" style={{
                        borderTop: '4px solid var(--color-primary)',
                        padding: 'var(--spacing-lg)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-primary)'
                            }}>
                                <Briefcase size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Гадаад оюутны давуу тал
                            </h3>
                        </div>

                        <p style={{
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                            color: 'var(--color-text-muted)',
                            marginBottom: 'var(--spacing-md)'
                        }}>
                            Advantage of Foreign Students
                        </p>

                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.8'
                        }}>
                            <li style={{
                                marginBottom: '1.5rem',
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'rgba(39, 174, 96, 0.05)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '3px solid var(--color-primary)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <Briefcase size={20} style={{ color: 'var(--color-primary)', marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                                            Сургууль дотор хагас цагаар ажиллах давуу эрхтэй
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                                            Part-time work opportunity on campus
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li style={{
                                padding: 'var(--spacing-md)',
                                backgroundColor: 'rgba(39, 174, 96, 0.05)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '3px solid var(--color-primary)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <Home size={20} style={{ color: 'var(--color-primary)', marginTop: '0.25rem', flexShrink: 0 }} />
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                                            Дотуур байранд өрөө авахад давуу эрхтэй
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                                            Priority for dormitory accommodation
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipInfo;
