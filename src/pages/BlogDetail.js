import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

function BlogDetail() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    if(!post) {
        return <h2>Post not found</h2>;
    }
    return (
        <div style = {{ maxWidth: "800px", margin: "50px auto" }}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <img
                src = {post.coverImage}
                alt = {post.title}
                style = {{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
            />
            <p style = {{ marginTop: "20px" }}>
                {post.content}
            </p>
            <br/>
            <Link to = "/blog">Back to Blog</Link>
        </div>
    );
}

export default BlogDetail;