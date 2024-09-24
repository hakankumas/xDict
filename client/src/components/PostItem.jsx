import React from "react";

function PostItem({ post }) {
    // console.log(post);
    const { topic, content, user, createdAt, updatedAt } = post;
    return (
        <div className="card">
            <h3>{topic.topic_name}</h3>
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

export default PostItem;
