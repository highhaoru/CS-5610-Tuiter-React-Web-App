import React from "react";
// import posts from "./posts.json";
// import PostItem from "./post-item";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;