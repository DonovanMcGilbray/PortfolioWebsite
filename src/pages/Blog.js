import { Link } from "react-router-dom";
import { posts } from "../data/portfolioData";
import "./Blog.css";

function Blog() {
    return (
        <div className="blog-container">
            <span className="eyebrow">Writing</span>
            <h1>Blog</h1>
            <p className="blog-intro">Notes and lessons from projects I have worked on.</p>

            <div className="blog-grid">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="blog-card glass-card"
                    >
                        <img src={post.coverImage} alt={post.title} />
                        <div className="blog-card-body">
                            <h2>{post.title}</h2>
                            <p className="blog-card-date">{post.date}</p>
                            <p className="blog-card-excerpt">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Blog;
