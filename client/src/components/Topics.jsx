import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTopics } from "../redux/features/topic/topicSlice";
import TopicItem from "./TopicItem";
import ModalTopic from "./ModalTopic";
function Topics() {
    // console.log("rerendered");
    const { sessionData } = useSelector((state) => state.auth);
    const { topics } = useSelector((state) => state.topic);
    const { posts } = useSelector((state) => state.post);
    const [filteredTopics, setFilteredTopics] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
    }, []);

    useEffect(() => {
        const posts_newSet = new Set(posts.map((post) => post.topic._id)); // Post'ların topic._id değerlerini Set'e al
        const topicsFilter = topics.filter((topic) =>
            posts_newSet.has(topic._id)
        ); // Topics içindeki _id'leri post'ların topic'lerine göre filtrele
        setFilteredTopics(topicsFilter);
    }, [posts]);

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
                    {filteredTopics &&
                        filteredTopics.map((topic) => (
                            <TopicItem key={topic._id} topic={topic} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Topics;
