import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";
import Footer from "./Footer";

function UserPosts({ paramUsername }) {
    const { posts } = useSelector((state) => state.post);
    const filteredPosts = posts.filter(
        (post) => post.user.username === paramUsername
    );

    return (
        <div className="userPosts">
            <h1 className="title">Posts</h1>
            <hr />
            <div className="list">
                <ul style={{ height: "100%", minHeight: "100vh" }}>
                    {filteredPosts &&
                        filteredPosts.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                </ul>
                <div style={{ marginRight: "-10px" }}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default UserPosts;
