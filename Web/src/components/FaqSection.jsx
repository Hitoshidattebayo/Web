import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { client } from '../sanity/client';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [faqData, setFaqData] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await client.fetch(`*[_type == "faq"][0]`);
                if (data) setFaqData(data);
            } catch (error) {
                console.error("Failed to fetch FAQs:", error);
            }
        };
        fetchFaqs();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const defaultFaqs = [
        {
            question: "Бүртгэл хэрхэн явагдах вэ?",
            answer: "Бүртгэл онлайнаар болон манай оффис дээр биечлэн ирж хийгдэх боломжтой. Та эхлээд зөвлөхтэй уулзаж өөрт тохирсон хөтөлбөрөө сонгосны дараа шаардлагатай бичиг баримтыг бүрдүүлэн бүртгэлээ баталгаажуулна."
        },
        {
            question: "Ямар бичиг баримт бүрдүүлэх вэ?",
            answer: "Ихэнх хөтөлбөрт гадаад паспорт, цээж зураг, өмнөх боловсролын гэрчилгээ/диплом, дүнгийн жагсаалт шаардлагатай байдаг. Тухайн сургууль болон улсаас хамааран нэмэлт санхүүгийн баталгаа болон бусад баримт бичиг шаардагдаж болно."
        },
        {
            question: "Төлбөрийн нөхцөл ямар байдаг вэ?",
            answer: "Төлбөрийг хөтөлбөрөөс хамааран хувааж төлөх боломжтой байдаг. Бид танд сургуулийн албан ёсны нэхэмжлэх дээрх дүнгээр, илүү зардалгүйгээр төлбөрөө төлөхөд зуучлан тусалдаг."
        },
        {
            question: "Тэтгэлэгт хамрагдах боломжтой юу?",
            answer: "Тийм ээ, боломжтой. Сурлагын дүн, хэлний мэдлэг (IELTS/TOPIK) болон бусад амжилтаас хамааран 30%-100% хүртэлх тэтгэлэг авах боломжтой сургуулиудыг бид санал болгодог."
        },
        {
            question: "Виз гарахад хэр удах вэ?",
            answer: "Визний хугацаа улс бүрт харилцан адилгүй байдаг. Жишээ нь: Солонгос улсын виз 14-21 хоног, Филиппин улс руу визгүй (30 хоног хүртэл) зорчих боломжтой байдаг. Бид визний материал бүрдүүлэлтэд бүрэн зөвлөгөө өгч ажилладаг."
        }
    ];

    const faqs = faqData?.faqs || defaultFaqs;
    const sectionTitle = faqData?.title || "Түгээмэл Асуултууд";

    return (
        <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        color: '#3498db',
                        borderRadius: '2rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                        letterSpacing: '1px'
                    }}>
                        FAQ
                    </span>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#2c3e50',
                        marginBottom: '1rem'
                    }}>
                        {sectionTitle}
                    </h2>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: '#3498db',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{
                            marginBottom: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                            overflow: 'hidden',
                            border: activeIndex === index ? '1px solid #3498db' : '1px solid transparent',
                            transition: 'all 0.3s ease'
                        }}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem 2rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <HelpCircle size={20} color={activeIndex === index ? '#3498db' : '#95a5a6'} />
                                    <span style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        color: activeIndex === index ? '#3498db' : '#2c3e50'
                                    }}>
                                        {faq.question}
                                    </span>
                                </div>
                                {activeIndex === index ? (
                                    <ChevronUp size={20} color="#3498db" />
                                ) : (
                                    <ChevronDown size={20} color="#95a5a6" />
                                )}
                            </button>

                            <div style={{
                                maxHeight: activeIndex === index ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                opacity: activeIndex === index ? 1 : 0
                            }}>
                                <div style={{
                                    padding: '0 2rem 1.5rem 3.5rem', // Indented to align with text
                                    color: '#555',
                                    lineHeight: '1.6',
                                    whiteSpace: 'pre-line' // Preserves line breaks from Sanity
                                }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
