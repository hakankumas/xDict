import React from "react";

function PostItem({ post }) {
    const { topic, content, user, createdAt, updatedAt } = post;
    const nfd_createdAt = new Date(createdAt);
    const new_createdAt = nfd_createdAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const nfd_updatedAt = new Date(updatedAt);
    const new_updatedAt = nfd_updatedAt.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <div className="card">
            <h3>{topic.topic_name}</h3>
            <p>{content}</p>
            <p style={{ textAlign: "right" }}>{user.username}</p>
            <small style={{ display: "block", textAlign: "right" }}>
                {new_createdAt === new_updatedAt
                    ? `${new_createdAt}`
                    : `Edited: ${new_updatedAt}`}
            </small>
        </div>
    );
}

export default PostItem;
