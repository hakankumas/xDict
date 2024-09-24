import React from "react";
import { useNavigate } from "react-router-dom";

function TopicItem({ topic }) {
    const { topic_name, slug } = topic;
    const navigate = useNavigate();
    return (
        <div>
            <li>
                <a onClick={() => navigate(`/topic/${slug}`)}>{topic_name}</a>
            </li>
        </div>
    );
}

export default TopicItem;
