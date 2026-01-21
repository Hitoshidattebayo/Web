import React from 'react';
import { ClipboardCheck, UserCheck } from 'lucide-react';

const AdmissionInfo = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-xl)'
                }}>
                    {/* Admission Schedule - 4x2 Grid */}
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
                                <ClipboardCheck size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Элсэлтийн хуваарь
                            </h3>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1.5rem'
                        }}>
                            {[
                                "Элсэлт болон хөтөлбөр сонголт",
                                "Шаардлагатай бичиг баримт ирүүлэх",
                                "Баримт бичгийн үнэлгээ",
                                "Элсэлтийн дүнг зарлах",
                                "Элсэлтийн гэрчилгээ олгох",
                                "БНСУ-ын виз мэдүүлэх",
                                "Сургалтын төлбөр төлөх",
                                "Бүртгэл ба хичээл сонголт"
                            ].map((step, index) => (
                                <div key={index} style={{
                                    backgroundColor: 'white',
                                    padding: '1.5rem',
                                    borderRadius: 'var(--radius-lg)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    flex: '0 0 calc(25% - 1.125rem)', // Fit 4 items exactly with gap
                                    minWidth: '200px'
                                }}>
                                    {/* Number Watermark */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        fontSize: '4rem',
                                        fontWeight: '900',
                                        color: 'rgba(39, 174, 96, 0.05)',
                                        zIndex: 0
                                    }}>
                                        {index + 1}
                                    </div>

                                    {/* Number Badge */}
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        marginBottom: '1rem',
                                        zIndex: 1,
                                        boxShadow: '0 2px 4px rgba(39, 174, 96, 0.3)'
                                    }}>
                                        {index + 1}
                                    </div>

                                    <p style={{
                                        margin: 0,
                                        color: '#34495e',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        lineHeight: '1.4',
                                        zIndex: 1
                                    }}>
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eligibility for Application - Full Width Below */}
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
                                <UserCheck size={24} />
                            </div>
                            <h3 style={{
                                color: 'var(--color-primary)',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                margin: 0
                            }}>
                                Элсэлтийн эрх
                            </h3>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 'var(--spacing-lg)'
                        }}>
                            <p style={{
                                margin: 0,
                                padding: '1.5rem',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid #f1c40f',
                                boxShadow: 'var(--shadow-sm)',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.8'
                            }}>
                                Элсэх хүсэлт гаргагч болон түүний эцэг эх хоёулаа <strong>солонгос бус иргэншилтэй</strong> байх ёстой.
                            </p>
                            <p style={{
                                margin: 0,
                                padding: '1.5rem',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid #27ae60',
                                boxShadow: 'var(--shadow-sm)',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.8'
                            }}>
                                Мөн Солонгос болон гадаадад <strong>ахлах сургуулийг төгссөн</strong> (эсвэл төгсөх гэж буй) байх шаардлагатай.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionInfo;
