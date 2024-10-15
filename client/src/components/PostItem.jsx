import React from "react";
import useDateReturn from "../hooks/useDateReturn";
import { Link } from "react-router-dom";

function PostItem({ post }) {
    const { topic, content, user, createdAt, updatedAt } = post;
    const { new_createdAt, new_updatedAt } = useDateReturn({
        createdAt,
        updatedAt,
    });

    return (
        <div className="card">
            <h3>{topic.topic_name}</h3>
            <p>{content}</p>
            <p style={{ textAlign: "right" }}>
                <Link
                    to={`/user/${user.username}`}
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    {user.username}
                </Link>
            </p>
            <small style={{ display: "block", textAlign: "right" }}>
                {new_createdAt === new_updatedAt
                    ? `${new_createdAt}`
                    : `Edited: ${new_updatedAt}`}
            </small>
        </div>
    );
}

export default PostItem;
