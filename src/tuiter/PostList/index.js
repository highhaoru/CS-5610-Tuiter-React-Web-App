import React from "react";
import posts from "./posts.json"
import PostItem from "./PostItem";

const PostList = () => {
    return (
        <>
            {
                posts.map(post => {
                    return(<PostItem post = {post}/>);
                })
            }
        </>
    )
}

export default PostList;