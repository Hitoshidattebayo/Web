import React from 'react';
import { Calendar, Clock, Users, Globe } from 'lucide-react';

const KoreanLanguageInstitute = () => {
    return (
        <section className="section" style={{ backgroundColor: 'white', padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>
                    Солонгос хэлний хүрээлэн
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-xl)',
                    marginTop: 'var(--spacing-xl)'
                }}>
                    {/* Schedule Section - Custom Redesign */}
                    <div className="card" style={{
                        borderTop: '4px solid var(--color-primary)',
                        padding: 'var(--spacing-lg)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-xl)'
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
                                <Calendar size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Хичээлийн хуваарь
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Row 1: Spring/Summer */}
                            <div className="schedule-row">
                                {/* Label Box */}
                                <div className="schedule-label" style={{
                                    border: '2px solid var(--color-primary)',
                                    borderRadius: '1.5rem',
                                    color: 'var(--color-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    lineHeight: '1.2',
                                    padding: '1.5rem',
                                    fontSize: '1.2rem'
                                }}>
                                    <div>ХАВАР</div>
                                    <div>ЗУН</div>
                                </div>
                                {/* Content Box */}
                                <div className="schedule-content" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '1.5rem',
                                    color: 'white',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    lineHeight: '1.5'
                                }}>
                                    3-Р САР БА 6-Р САРЫН ЭХНИЙ ДОЛОО ХОНОГТ ЭХЭЛНЭ, НИЙТ 10 ДОЛОО ХОНОГ
                                </div>
                            </div>

                            {/* Row 2: Autumn/Winter (HTML order matched to Label -> Content for mobile stacking, reverse on desktop) */}
                            <div className="schedule-row schedule-row-reverse">
                                {/* Label Box */}
                                <div className="schedule-label" style={{
                                    border: '2px solid var(--color-primary)',
                                    borderRadius: '1.5rem',
                                    color: 'var(--color-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    lineHeight: '1.2',
                                    padding: '1.5rem',
                                    fontSize: '1.2rem'
                                }}>
                                    <div>НАМАР</div>
                                    <div>ӨВӨЛ</div>
                                </div>
                                {/* Content Box */}
                                <div className="schedule-content" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '1.5rem',
                                    color: 'white',
                                    background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '1rem',
                                    lineHeight: '1.5'
                                }}>
                                    9-Р САР БА 12-Р САРЫН ЭХНИЙ ДОЛОО ХОНОГТ ЭХЭЛНЭ, НИЙТ 10 ДОЛОО ХОНОГ
                                </div>
                            </div>

                            {/* Additional Info (Time, Hours) */}
                            <div style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: 'rgba(236, 240, 241, 0.5)',
                                borderRadius: '1rem',
                                border: '1px dashed #bdc3c7'
                            }}>
                                <ul style={{
                                    margin: 0,
                                    paddingLeft: '1.5rem',
                                    color: '#7f8c8d',
                                    lineHeight: '1.6'
                                }}>
                                    <li style={{ marginBottom: '0.5rem' }}>
                                        <strong>Сургалтын хугацаа:</strong> Өдөрт 4 цаг (09:00 ~ 13:00)
                                    </li>
                                    <li>
                                        Долоо хоногт 5 өдөр (Даваа–Баасан), нийт 200 цаг/семестр
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Class Features Section */}
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
                                <Users size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Хичээлийн онцлог
                            </h3>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.8'
                        }}>
                            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>•</span>
                                <strong>Ангийн хэмжээ:</strong> 15 эсвэл түүнээс цөөн оюутан
                            </li>
                            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>•</span>
                                Энэхүү сургалт нь дүрэм, үгсийн сан, уншлага, сонсгол, яриаг онцлон заана
                            </li>
                            <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>•</span>
                                <strong>Соёлын аялал:</strong> Жилд 4 удаа соёлын аялал зохион байгуулж, Солонгосын соёлын өвийг үзэж, туршлагатай болно
                            </li>
                        </ul>
                    </div>
                </div>

                <style>{`
                    .schedule-row {
                        display: flex;
                        gap: 1rem;
                        align-items: stretch;
                        flex-direction: column; /* Mobile first: Stack */
                    }
                    .schedule-label {
                        width: 100%;
                        flex-shrink: 0;
                    }
                    .schedule-content {
                        flex: 1;
                        width: 100%;
                    }
                    
                    @media (min-width: 768px) {
                        .schedule-row {
                            flex-direction: row; /* Desktop: Row */
                        }
                        .schedule-row.schedule-row-reverse {
                            flex-direction: row-reverse; /* Desktop: Reverse Row */
                        }
                        .schedule-label {
                            width: auto;
                            min-width: 140px;
                        }
                        .schedule-content {
                            width: auto;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default KoreanLanguageInstitute;
