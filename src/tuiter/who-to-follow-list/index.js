import React from "react";
// import who from "../data/who.json";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return(
        <ul className="list-group">
            {
                who.map(who=> {
                    return(
                        <WhoToFollowListItem who={who}/>);
                })
            }
        </ul>
    );

}
export default WhoToFollowList;