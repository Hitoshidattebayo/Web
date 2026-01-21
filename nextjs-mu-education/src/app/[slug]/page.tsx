import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
    const postImageUrl = post.image
        ? urlFor(post.image)?.width(1200).height(600).url()
        : null;

    return (
        <main style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)',
            paddingTop: '2rem',
            paddingBottom: '4rem'
        }}>
            {/* Navigation */}
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '0 2rem 2rem'
            }}>
                <Link
                    href="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#e74c3c',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '1rem';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '0.5rem';
                    }}
                >
                    <span>←</span>
                    Буцах
                </Link>
            </div>

            {/* Featured Image */}
            {postImageUrl && (
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto 3rem',
                    padding: '0 2rem'
                }}>
                    <div style={{
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                        aspectRatio: '2/1',
                        position: 'relative'
                    }}>
                        <img
                            src={postImageUrl}
                            alt={post.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Content */}
            <article style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '0 2rem'
            }}>
                {/* Date */}
                <p style={{
                    fontSize: '0.95rem',
                    color: '#e74c3c',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '1rem'
                }}>
                    {new Date(post.publishedAt).toLocaleDateString('mn-MN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>

                {/* Title */}
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '900',
                    color: '#2c3e50',
                    marginBottom: '2rem',
                    lineHeight: '1.2',
                    letterSpacing: '-1px'
                }}>
                    {post.title}
                </h1>

                {/* Body Content */}
                <div style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.8',
                    color: '#2c3e50'
                }} className="prose prose-lg max-w-none">
                    {Array.isArray(post.body) && <PortableText value={post.body} />}
                </div>
            </article>

            {/* Back Button */}
            <div style={{
                maxWidth: '800px',
                margin: '4rem auto 0',
                padding: '0 2rem',
                textAlign: 'center'
            }}>
                <Link
                    href="/"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '1rem',
                        boxShadow: '0 10px 30px rgba(231, 76, 60, 0.3)',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(231, 76, 60, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(231, 76, 60, 0.3)';
                    }}
                >
                    Бусад нийтлэл үзэх
                </Link>
            </div>
        </main>
    );
}
