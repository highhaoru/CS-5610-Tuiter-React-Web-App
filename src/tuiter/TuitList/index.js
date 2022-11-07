import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    return (
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitListItem tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;

