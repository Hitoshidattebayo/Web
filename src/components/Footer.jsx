import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import footerLogo from '../assets/mu-logo-footer.png';

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

    return (
        <footer style={{
            position: 'relative', // Added position
            zIndex: 10,           // Added z-index to stay above fixed backgrounds
            backgroundColor: getFooterColor(),
            color: 'white',
            padding: '4rem 0 2rem',
            transition: 'background-color 0.3s ease'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 3rem)',
                    marginBottom: 'clamp(2rem, 4vw, 3rem)'
                }}>
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img
                                src={footerLogo}
                                alt="MU Education"
                                style={{
                                    width: '100%',
                                    maxWidth: '220px', // Added max-width constraint
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </div>
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
