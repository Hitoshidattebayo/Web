import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/mu-logo.png';
import logoGreen from '../assets/mu-logo-green.png';
import logoBlue from '../assets/mu-logo-blue.png';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle theme switching based on route
    useEffect(() => {
        const root = document.documentElement;
        if (location.pathname.includes('yeungnam')) {
            root.style.setProperty('--color-primary', '#27ae60'); // Green for Yeungnam
            root.style.setProperty('--color-primary-dark', '#1e8449'); // Darker green for hover
        } else if (location.pathname.includes('cia')) {
            root.style.setProperty('--color-primary', '#3498db'); // Blue for CIA
            root.style.setProperty('--color-primary-dark', '#2471a3'); // Darker blue for hover
        } else {
            root.style.setProperty('--color-primary', '#e74c3c'); // Default Red
            root.style.setProperty('--color-primary-dark', '#c0392b'); // Darker red for hover
        }
    }, [location]);

    // Determine which logo to display
    const currentLogo = location.pathname === '/yeungnam' ? logoGreen :
        location.pathname === '/cia' ? logoBlue :
            logo;

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'transparent',
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1rem, 3vw, 2rem)',
                zIndex: 1000
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2.5rem)',
                    borderRadius: 'clamp(25px, 5vw, 50px)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={currentLogo}
                            alt="MU Education Logo"
                            style={{
                                height: 'clamp(32px, 5vw, 45px)',
                                width: 'auto'
                            }}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="desktop-nav">
                        <li>
                            <Link to="/" className="nav-link">ЭХЛЭЛ</Link>
                        </li>
                        <li>
                            <Link to="/cia" className="nav-link">CEBU ACADEMY</Link>
                        </li>
                        <li>
                            <Link to="/yeungnam" className="nav-link">YEUNGNAM UNIVERSITY</Link>
                        </li>
                    </ul>

                    {/* Desktop Apply Button */}
                    <Link to="/apply" className="nav-button desktop-apply">БҮРТГҮҮЛЭХ</Link>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mobile-hamburger"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ?
                            <X size={28} color={location.pathname.includes('yeungnam') ? '#27ae60' : location.pathname.includes('cia') ? '#3498db' : '#e74c3c'} /> :
                            <Menu size={28} color={location.pathname.includes('yeungnam') ? '#27ae60' : location.pathname.includes('cia') ? '#3498db' : '#e74c3c'} />
                        }
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        zIndex: 999,
                        paddingTop: '100px'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        padding: '2rem',
                        listStyle: 'none',
                        textAlign: 'center'
                    }}>
                        <li>
                            <Link
                                to="/"
                                className="nav-link"
                                style={{ fontSize: '1.2rem' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                ЭХЛЭЛ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cia"
                                className="nav-link"
                                style={{ fontSize: '1.2rem' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CEBU ACADEMY
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/yeungnam"
                                className="nav-link"
                                style={{ fontSize: '1.2rem' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                YEUNGNAM UNIVERSITY
                            </Link>
                        </li>
                        <li style={{ marginTop: '1rem' }}>
                            <Link
                                to="/apply"
                                className="nav-button"
                                style={{
                                    display: 'inline-block',
                                    fontSize: '1.1rem'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                БҮРТГҮҮЛЭХ
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
