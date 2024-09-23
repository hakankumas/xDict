import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTopics } from "../redux/features/topic/topicSlice";
import TopicItem from "./TopicItem";
function Topics() {
    // console.log("rerendered");
    const { topic } = useSelector((state) => state.topic);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
    }, []);

    console.log(topic);

    return (
        <div className="topics">
            <h1>Topics</h1>
            <hr />
            <div className="list">
                <ul>
                    {topic &&
                        topic.map((item) => (
                            <TopicItem
                                key={item._id}
                                topic_name={item.topic_name}
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Topics;
