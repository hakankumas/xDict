import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTopics } from "../redux/features/topic/topicSlice";
import TopicItem from "./TopicItem";
function Topics() {
    // console.log("rerendered");
    const { topics } = useSelector((state) => state.topic);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
    }, []);

    // console.log(topics);

    return (
        <div className="topics">
            <h1>Topics</h1>
            <hr />
            <div className="list">
                <ul>
                    {topics &&
                        topics.map((topic) => (
                            <TopicItem key={topic._id} topic={topic} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Topics;
