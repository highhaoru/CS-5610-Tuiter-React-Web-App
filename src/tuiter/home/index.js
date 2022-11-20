import React from "react";
// import posts from "./posts.json";
// import PostItem from "./post-item";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            {/*<h4>Home</h4>*/}
            <WhatsHappening/>
            <TuitsList/>
        </>
        // <ul className="list-group">
        //     {posts.map(post => <PostItem post={post}/> )}
        // </ul>
    );
};
export default HomeComponent;