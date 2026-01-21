import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)',
      padding: '4rem 2rem'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 4rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '900',
          color: '#2c3e50',
          marginBottom: '1rem',
          letterSpacing: '-1px'
        }}>
          MU EDUCATION
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#7f8c8d',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Боловсрол, карьер, амжилтын тухай мэдээ мэдээлэл
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {posts.map((post) => {
          const imageUrl = post.image
            ? urlFor(post.image)?.width(800).height(500).url()
            : null;

          return (
            <Link
              key={post._id}
              href={`/${post.slug.current}`}
              style={{
                textDecoration: 'none',
                display: 'block',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              {/* Image */}
              {imageUrl && (
                <div style={{
                  width: '100%',
                  height: '250px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#eee'
                }}>
                  <img
                    src={imageUrl}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)',
                    pointerEvents: 'none'
                  }} />
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#e74c3c',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '0.75rem'
                }}>
                  {new Date(post.publishedAt).toLocaleDateString('mn-MN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  {post.title}
                </h2>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#e74c3c',
                  fontSize: '0.95rem',
                  fontWeight: '600'
                }}>
                  Дэлгэрэнгүй унших
                  <span>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
