import { useParams, Link } from "react-router-dom";
import { posts } from "../data/portfolioData";
import "./detail.css";

function BlogDetail() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="detail-not-found">
                <h2>Post not found</h2>
                <Link to="/blog" className="btn">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <div className="detail-container">
            <Link to="/blog" className="detail-back">
                ← Back to Blog
            </Link>

            <h1>{post.title}</h1>
            <p className="detail-date">{post.date}</p>

            <img src={post.coverImage} alt={post.title} className="detail-image" />

            {/* content is an array of paragraphs, so each renders separately. */}
            {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

export default BlogDetail;
