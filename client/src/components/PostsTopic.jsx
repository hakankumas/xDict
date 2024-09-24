import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsTopic } from "../redux/features/post/postSlice";
import PostTopicItem from "./PostTopicItem";

function PostsTopic() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { filteredPosts } = useSelector((state) => state.post);

    const title = filteredPosts[0]?.topic?.topic_name;
    useEffect(() => {
        dispatch(postsTopic(slug));
        slug && console.log(slug);
        console.log(filteredPosts);
    }, [slug]);

    return (
        <div className="postsTopic">
            <h1 className="title">{title}</h1>
            <hr />
            <div className="list">
                <ul>
                    {filteredPosts &&
                        filteredPosts.map((post) => (
                            <PostTopicItem key={post._id} post={post} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default PostsTopic;
