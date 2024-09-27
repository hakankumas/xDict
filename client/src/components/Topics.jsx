import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTopics } from "../redux/features/topic/topicSlice";
import TopicItem from "./TopicItem";
import ModalTopic from "./ModalTopic";
function Topics() {
    // console.log("rerendered");
    const { sessionData } = useSelector((state) => state.auth);
    const { topics } = useSelector((state) => state.topic);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
    }, []);

    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <div className="topics">
            <h1
                className={sessionData ? "new-topic" : null}
                title={sessionData ? "Create a New Topic" : null}
                onClick={sessionData ? handleToggle : null}
            >
                Topics
            </h1>
            <hr />
            {show ? <ModalTopic show={show} setShow={setShow} /> : null}
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
