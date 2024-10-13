import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/features/post/postSlice";
import PostItem from "./PostItem";

function Posts() {
    const { posts } = useSelector((state) => state.post);
    const randomizePosts = [...posts].sort(() => Math.random() - 0.5);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
    }, []);
    return (
        <div className="posts">
            <h1 className="title">Posts</h1>
            <hr />
            <div className="list">
                <ul>
                    {randomizePosts &&
                        randomizePosts.map((post) => (
                            <PostItem key={post._id} post={post} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Posts;
