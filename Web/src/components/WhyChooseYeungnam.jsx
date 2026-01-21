import React, { useState } from 'react';
import { Award, Globe, Briefcase, Users, ThumbsUp, Star } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? 'var(--color-primary)' : 'white',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--radius-md)',
                boxShadow: isHovered ? 'var(--shadow-xl)' : 'var(--shadow-md)',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Background decorative element */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(39, 174, 96, 0.05)',
                transition: 'all 0.3s ease'
            }} />

            <div style={{
                marginBottom: 'var(--spacing-md)',
                margin: '0 auto var(--spacing-md)',
                backgroundColor: isHovered ? 'white' : 'rgba(39, 174, 96, 0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isHovered ? 'var(--color-primary)' : 'var(--color-primary)',
                transition: 'all 0.3s ease'
            }}>
                <Icon size={30} />
            </div>

            <h3 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                fontWeight: 'bold',
                color: isHovered ? 'white' : 'var(--color-text-main)',
                transition: 'color 0.3s ease'
            }}>
                {title}
            </h3>

            <p style={{
                color: isHovered ? 'rgba(255,255,255,0.9)' : 'var(--color-text-muted)',
                lineHeight: '1.6',
                flex: 1,
                fontSize: '0.95rem',
                marginBottom: '0',
                transition: 'color 0.3s ease'
            }}>
                {description}
            </p>
        </div>
    );
};

const WhyChooseYeungnam = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-background-alt)', padding: 'var(--spacing-xl) 0', marginBottom: '0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{
                        color: 'var(--color-primary)',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                    }}>
                        Яагаад Ённам Техникийн Коллеж гэж?
                    </h2>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        marginTop: '0',
                        maxWidth: '700px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Дэлхийн түвшний боловсрол, шилдэг орчин, өндөр ажлын байр
                    </p>
                </div>

                <div className="features-container">
                    <FeatureCard
                        className="feature-card-item"
                        icon={ThumbsUp}
                        title="NCSI 1-р байр"
                        description="13 жил дараалан үндэсний хэрэглэгчийн сэтгэл ханамжийн индексээр 1-р байранд шалгарсан."
                        index={0}
                    />
                    <FeatureCard
                        className="feature-card-item"
                        icon={Globe}
                        title="World Class College"
                        description="8 жил дараалан WCC-ээр шалгарсан дэлхийн түвшний мэргэжлийн боловсролын байгууллага."
                        index={1}
                    />
                    <FeatureCard
                        className="feature-card-item"
                        icon={Briefcase}
                        title="Өндөр ажлын байр"
                        description="Аж үйлдвэртэй нягт хамтран ажиллах замаар төгсөгчдийн ажил эрхлэлтийг дээд зэргээр хангадаг."
                        index={2}
                    />
                    <FeatureCard
                        className="feature-card-item"
                        icon={Award}
                        title="Өргөн хүрээний тэтгэлэг"
                        description="Гадаад оюутнуудад зориулсан тусгай тэтгэлэг болон сурлагын амжилтын урамшуулалтай."
                        index={3}
                    />
                </div>

                <style>{`
                    .features-container {
                        display: flex;
                        gap: var(--spacing-lg);
                        overflow-x: auto;
                        padding-bottom: 1rem;
                        scroll-snap-type: x mandatory;
                    }
                    .feature-card-item {
                        min-width: 280px;
                        flex: 0 0 auto;
                        scroll-snap-align: start;
                    }
                    /* Hide scrollbar */
                    .features-container::-webkit-scrollbar { display: none; }

                    @media screen and (min-width: 769px) {
                        .features-container {
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            overflow-x: visible;
                            padding-bottom: 0;
                        }
                        .feature-card-item {
                            min-width: 0;
                            width: auto;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default WhyChooseYeungnam;
