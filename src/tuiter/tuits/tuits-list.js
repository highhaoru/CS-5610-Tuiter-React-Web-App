import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {postsArray.map(post => <TuitsItem post={post}/> )}
        </ul>
    );
};
export default TuitsList;