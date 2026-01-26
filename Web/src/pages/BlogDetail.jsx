import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../sanity/client';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { urlFor } from '../sanity/client';

const BlogDetail = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            try {
                const query = `*[_type == "post" && slug.current == $slug][0] {
                    title,
                    mainImage,
                    publishedAt,
                    body,
                    "name": author->name,
                }`;
                const data = await client.fetch(query, { slug });
                setPost(data);
            } catch (error) {
                console.error("Failed to fetch blog post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px'
            }}>
                <div className="spinner"></div>
                <style>{`
                    .spinner {
                        width: 40px;
                        height: 40px;
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #e74c3c;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container" style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '120px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '1rem', color: '#2c3e50' }}>Нийтлэл олдсонгүй</h2>
                <Link to="/" style={{
                    color: '#e74c3c',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}>
                    <ArrowLeft size={20} />
                    Нүүр хуудас руу буцах
                </Link>
            </div>
        );
    }

    // Portable Text Components
    const ptComponents = {
        types: {
            image: ({ value }) => {
                if (!value?.asset?._ref) {
                    return null;
                }
                return (
                    <img
                        src={urlFor(value).fit('max').auto('format').url()}
                        alt={value.alt || 'Blog Image'}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            margin: '2rem 0',
                            display: 'block'
                        }}
                    />
                );
            }
        },
        block: {
            h1: ({ children }) => <h1 style={{ fontSize: '2rem', margin: '2rem 0 1rem', color: '#2c3e50' }}>{children}</h1>,
            h2: ({ children }) => <h2 style={{ fontSize: '1.75rem', margin: '1.5rem 0 1rem', color: '#2c3e50' }}>{children}</h2>,
            h3: ({ children }) => <h3 style={{ fontSize: '1.5rem', margin: '1.5rem 0 1rem', color: '#2c3e50' }}>{children}</h3>,
            normal: ({ children }) => <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: '#4a5568' }}>{children}</p>,
            blockquote: ({ children }) => (
                <blockquote style={{
                    borderLeft: '4px solid #e74c3c',
                    paddingLeft: '1.5rem',
                    margin: '1.5rem 0',
                    fontStyle: 'italic',
                    color: '#718096'
                }}>
                    {children}
                </blockquote>
            ),
        },
        list: {
            bullet: ({ children }) => <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>{children}</ul>,
            number: ({ children }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '2rem', marginBottom: '1.5rem' }}>{children}</ol>,
        },
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#718096',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    transition: 'color 0.2s'
                }}>
                    <ArrowLeft size={20} />
                    Буцах
                </Link>

                <article>
                    {post.mainImage && (
                        <div style={{
                            width: '100%',
                            height: '400px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            marginBottom: '2.5rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            <img
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    )}

                    <header style={{ marginBottom: '2rem' }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            color: '#1a202c',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem'
                        }}>
                            {post.title}
                        </h1>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem',
                            color: '#718096',
                            fontSize: '0.95rem'
                        }}>
                            {post.publishedAt && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Calendar size={18} />
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </div>
                            )}
                            {post.name && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <User size={18} />
                                    {post.name}
                                </div>
                            )}
                        </div>
                    </header>

                    <div className="blog-content">
                        <PortableText value={post.body} components={ptComponents} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogDetail;
