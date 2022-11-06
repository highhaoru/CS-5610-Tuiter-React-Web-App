import React from "react";
// import posts from "./posts.json";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                   <PostSummaryItem
                       key={post._id}
                       post={post}
                   />
                )
            }
        </ul>
    );
};
export default PostSummaryList;

