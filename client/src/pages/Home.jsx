import React from "react";
import Timeline from "../components/Timeline";

function Home() {
    const ls_username = localStorage?.getItem("username");
    return (
        <div>
            {ls_username && <div>Welcome {ls_username}!</div>}
            <Timeline />
        </div>
    );
}

export default Home;
