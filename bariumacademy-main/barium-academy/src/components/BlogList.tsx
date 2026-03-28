import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts, categories } from "../data/blogData";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

export default function BlogList() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const filteredPosts = activeCategory === "all"
        ? blogPosts
        : blogPosts.filter((p) => p.categorySlug === activeCategory);

    return (
        <>
            <SEO
                title="Blog — Study Tips, SAT, AP & Programming Guides"
                description="Expert articles on SAT prep, AP exam strategies, international curricula, study tips, and programming for students. Free guides from Barium Academy tutors."
                keywords="SAT study guide, AP exam tips, student blog, study tips, programming for students, IB A-Level guide, barium academy blog"
                canonical="/blog"
            />
            <Header />

            {/* Hero */}
            <section className="blog-hero">
                <div className="container">
                    <span className="section-tag">Barium Academy Blog</span>
                    <h1 className="blog-hero-title">Expert Guides for Students &amp; Parents</h1>
                    <p className="blog-hero-subtitle">
                        Free study strategies, exam prep tips, and learning resources — written by our expert tutors.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <div className="blog-categories-bar">
                <div className="container">
                    <div className="blog-categories">
                        <button
                            className={`blog-cat-btn ${activeCategory === "all" ? "blog-cat-active" : ""}`}
                            onClick={() => setActiveCategory("all")}
                        >
                            All Posts
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                className={`blog-cat-btn ${activeCategory === cat.slug ? "blog-cat-active" : ""}`}
                                onClick={() => setActiveCategory(cat.slug)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            <section className="blog-section">
                <div className="container">
                    {filteredPosts.length === 0 ? (
                        <div className="blog-empty">
                            <p>No posts found in this category yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="blog-card"
                                    onClick={() => navigate(`/blog/${post.slug}`)}
                                >
                                    <div className="blog-card-img-wrap">
                                        <img src={post.coverImage} alt={post.title} loading="eager" decoding="sync" />
                                        <span className="blog-card-category">{post.category}</span>
                                    </div>
                                    <div className="blog-card-body">
                                        <div className="blog-card-meta">
                                            <span>📅 {post.date}</span>
                                            <span>⏱ {post.readTime}</span>
                                        </div>
                                        <h2 className="blog-card-title">{post.title}</h2>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <button className="blog-card-link">
                                            Read Article →
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="blog-cta">
                <div className="container">
                    <div className="blog-cta-inner">
                        <div>
                            <h2>Want Personalised Help?</h2>
                            <p>Our expert tutors provide one-on-one coaching for every subject mentioned in our blog.</p>
                        </div>
                        <button
                            className="btn btn-accent btn-lg"
                            onClick={() => navigate("/registration")}
                        >
                            📅 Book a Free Demo
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
