import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const post = blogPosts.find((p) => p.slug === slug);

    // Render body text: parse **bold** → <strong>, \n\n → paragraph breaks
    const renderBody = (text: string) => {
        return text.split("\n\n").map((para, pIdx) => {
            // Split on **bold** markers
            const parts = para.split(/(\*\*[^*]+\*\*)/g);
            return (
                <p key={pIdx} className="blog-para">
                    {parts.map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };



    if (!post) {
        return (
            <>
                <Header />
                <div style={{ padding: "8rem 2rem", textAlign: "center" }}>
                    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Article Not Found</h1>
                    <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                        The blog post you're looking for doesn't exist.
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate("/blog")}>
                        ← Back to Blog
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    // Related posts (same category, excluding current)
    const related = blogPosts
        .filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug)
        .slice(0, 2);

    return (
        <>
            <SEO
                title={post.metaTitle}
                description={post.metaDescription}
                keywords={post.keywords}
                canonical={`/blog/${post.slug}`}
                ogImage={post.coverImage}
            />
            <Header />

            {/* Post Hero */}
            <section className="blog-post-hero">
                <div className="container">
                    <button className="blog-back-btn" onClick={() => navigate("/blog")}>
                        ← Back to Blog
                    </button>
                    <span className="section-tag" style={{ marginBottom: "1rem" }}>
                        {post.category}
                    </span>
                    <h1 className="blog-post-title">{post.title}</h1>
                    <div className="blog-post-meta">
                        <span>✍️ {post.author}</span>
                        <span>📅 {post.date}</span>
                        <span>⏱ {post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Cover Image */}
            <div className="blog-cover-img-wrap">
                <div className="container">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="blog-cover-img"
                    />
                </div>
            </div>

            {/* Post Content */}
            <article className="blog-article">
                <div className="blog-article-inner">
                    {/* Excerpt (intro) */}
                    <p className="blog-intro">{post.excerpt}</p>

                    {/* Sections */}
                    {post.content.map((section, idx) => (
                        <div key={idx} className="blog-section-block">
                            {section.heading && (
                                <h2 className="blog-section-heading">{section.heading}</h2>
                            )}
                            {renderBody(section.body)}
                        </div>
                    ))}

                    {/* Tags */}
                    <div className="blog-tags">
                        {post.keywords.split(",").map((kw) => (
                            <span key={kw} className="blog-tag">
                                #{kw.trim().replace(/ /g, "")}
                            </span>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="blog-cta-box">
                        <div className="blog-cta-box-icon">🎓</div>
                        <h3>Need Personalised Guidance?</h3>
                        <p>
                            Our expert tutors at Barium Academy provide one-on-one coaching with
                            customised study plans. Book a free demo session — no commitment required.
                        </p>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate("/registration")}
                        >
                            📅 Book a Free Demo
                        </button>
                    </div>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                    <div className="blog-related">
                        <div className="container">
                            <h2 className="blog-related-heading">Related Articles</h2>
                            <div className="blog-related-grid">
                                {related.map((rp) => (
                                    <div
                                        key={rp.slug}
                                        className="blog-related-card"
                                        onClick={() => navigate(`/blog/${rp.slug}`)}
                                    >
                                        <img src={rp.coverImage} alt={rp.title} />
                                        <div className="blog-related-body">
                                            <span className="blog-related-cat">{rp.category}</span>
                                            <h3>{rp.title}</h3>
                                            <span className="blog-card-link">Read →</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </article>

            <Footer />
        </>
    );
}
