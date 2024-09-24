import React from "react";

function PostTopicItem({ post }) {
    // console.log(post);
    const { topic, content, user, createdAt, updatedAt } = post;
    return (
        <div className="card">
            <p>{content}</p>
            <p style={{ textAlign: "right" }}>{user.username}</p>
            <p style={{ textAlign: "right" }}>
                {createdAt === updatedAt
                    ? `Created: ${createdAt}`
                    : `Updated: ${updatedAt}`}
            </p>
        </div>
    );
}

export default PostTopicItem;
