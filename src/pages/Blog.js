import { Link } from "react-router-dom";
import posts from "../data/posts";
import "./Blog.css";

function Blog() {
    return (
        <div className = "blog-container">
            <h1>Blog</h1>
            <div className = "blog-grid">
                {posts.map((post) => (
                    <div key = {post.id} className = "blog-card">
                        <img src = {post.coverImage} alt = {post.title}/>
                        <h2>
                            <Link to = {`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p>{post.date}</p>
                        <p>{post.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;