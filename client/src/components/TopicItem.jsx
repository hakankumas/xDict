import React from "react";

function TopicItem({ topic }) {
    const { topic_name, slug } = topic;
    return (
        <div>
            <a href={`/topic/${slug}`}>
                <li>{topic_name}</li>
            </a>
        </div>
    );
}

export default TopicItem;
