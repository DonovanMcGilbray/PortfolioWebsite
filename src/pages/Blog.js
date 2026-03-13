import { Link } from "react-router-dom";
import posts from "../data/posts";

function Blog() {
    return (
        <div style = {{ maxWidth: "800px", margin: "50px auto" }}>
            <h1>Blog</h1>
            {posts.map((post) => (
                <div key = {post.id} style = {{ marginBottom: "30px" }}>
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
    );
}

export default Blog;