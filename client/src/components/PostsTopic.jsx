import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts, postsTopic } from "../redux/features/post/postSlice";
import PostTopicItem from "./PostTopicItem";

function PostsTopic() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { posts, filteredPosts } = useSelector((state) => state.post);

    const title = filteredPosts[0]?.topic?.topic_name;
    useEffect(() => {
        if (posts.length === 0) {
            dispatch(getAllPosts());
        }
        dispatch(postsTopic(slug));
    }, [posts, slug]);

    return (
        <div
            className="postsTopic"
            style={{ backgroundColor: title ? "#579fdd" : "#0D92F4" }}
        >
            <h1 className="title">{title ? title : "Post Not Found!"}</h1>
            {title && (
                <>
                    <hr />
                    <div className="list">
                        <ul>
                            {filteredPosts &&
                                filteredPosts.map((post) => (
                                    <PostTopicItem key={post._id} post={post} />
                                ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default PostsTopic;
