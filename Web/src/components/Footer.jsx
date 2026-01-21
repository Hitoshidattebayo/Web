import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import footerLogo from '../assets/mu-logo-white.png';

const Footer = () => {
    const location = useLocation();

    // Determine footer color based on current path
    const getFooterColor = () => {
        switch (location.pathname) {
            case '/':
                return '#e74c3c'; // Red for Home
            case '/cia':
                return '#154c79'; // Blue for CIA
            case '/yeungnam':
                return '#27ae60'; // Green for Yeungnam
            default:
                return 'var(--color-background-dark)'; // Default dark color
        }
    };

    const footerColor = getFooterColor();

    return (
        <footer style={{
            position: 'relative', // Added position
            zIndex: 10,           // Added z-index to stay above fixed backgrounds
            backgroundColor: footerColor,
            color: 'white',
            padding: '4rem 0 2rem',
            transition: 'background-color 0.3s ease'
        }}>
            <div className="container">
                {/* Newsletter Subscription Section */}
                <div style={{
                    backgroundColor: 'transparent', // Match footer color
                    padding: 'clamp(1.5rem, 3vw, 2rem) 0', // Removed horizontal padding since bg is gone
                    marginBottom: '3rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    color: 'white', // White text
                    borderBottom: '1px solid rgba(255,255,255,0.1)' // Added separator
                }}>
                    {/* Logo */}
                    <div style={{ flex: '0 0 auto' }}>
                        <img
                            src={footerLogo}
                            alt="MU Education"
                            style={{
                                height: '50px',
                                width: 'auto',
                                display: 'block'
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div style={{ flex: '1 1 300px' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.9)' }}>
                            Манай имэйл жагсаалтад бүртгүүлж сургталтуудын талаар шинэ содон сургалтууд болон сургуулиудын талаарх мэдээлэл, дотоод зөвлөгөө мэдээллүүдийг цаг алдалгүй аваарай..
                        </p>
                    </div>

                    {/* Form */}
                    <div style={{ flex: '1 1 300px' }}>
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.target;
                                const email = form.email.value;
                                const formId = 'mICjBFfyO'; // User provided ID
                                try {
                                    const response = await fetch(`https://submit-form.com/${formId}`, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json'
                                        },
                                        body: JSON.stringify({ email })
                                    });
                                    if (response.ok) {
                                        alert('Амжилттай бүртгэгдлээ!');
                                        form.reset();
                                    } else {
                                        alert('Алдаа гарлаа. Дахин оролдоно уу.');
                                    }
                                } catch (error) {
                                    alert('Сүлжээний алдаа гарлаа.');
                                }
                            }}
                            style={{ display: 'flex', gap: '10px' }}
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Имэйл хаягаа оруулна уу"
                                required
                                style={{
                                    flex: 1,
                                    padding: '0.75rem 1rem',
                                    borderRadius: 'var(--radius-sm)',
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '0.95rem',
                                    backgroundColor: 'white',
                                    color: footerColor
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'white',
                                    color: footerColor,
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Бүртгүүлэх
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    marginBottom: 'clamp(2rem, 4vw, 3rem)'
                }}>
                    <div>
                        {/* Logo removed as requested */}
                        <p style={{ opacity: 0.85, lineHeight: '1.7' }}>
                            Таны ирээдүйн боловсролын гүүр. Англи хэл, олон улсын орчин, мэргэжлийн боловсрол.
                        </p>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'white'
                        }}>
                            Хичээлийн хөтөлбөр
                        </h4>
                        <ul style={{ opacity: 0.85 }}>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/" style={{ transition: 'color 0.3s' }}>Нүүр хуудас</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/cia" style={{ transition: 'color 0.3s' }}>Cebu Academy</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/yeungnam" style={{ transition: 'color 0.3s' }}>Yeungnam University</Link>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <Link to="/apply" style={{ transition: 'color 0.3s' }}>Бүртгүүлэх</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1.5rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            color: 'white'
                        }}>
                            Холбоо барих
                        </h4>
                        <ul style={{ opacity: 0.85, lineHeight: '1.9' }}>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <div style={{ marginTop: '4px', flexShrink: 0, minWidth: '18px' }}><MapPin size={18} /></div>
                                <span>БАЯНГОЛ ДҮҮРЭГ, 2-Р  ХОРОО, GEM PALACE, 8 ДАВХАР, 806 ТООТ</span>
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ flexShrink: 0, minWidth: '18px', display: 'flex' }}><Mail size={18} /></div>
                                <span style={{ wordBreak: 'break-all' }}>MUEDUCATIONLLC@GMAIL.COM</span>
                            </li>
                            <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ flexShrink: 0, minWidth: '18px', display: 'flex' }}><Phone size={18} /></div>
                                <span>+976 9400-3766</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    opacity: 0.7
                }}>
                    <p>&copy; 2025 MU Education. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
