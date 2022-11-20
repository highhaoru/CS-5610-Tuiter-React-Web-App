import React from "react";
const PostSummaryItem = ({tuit}) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuit.username} - {tuit.time}</div>
                    <div className="fw-bolder">{tuit.title}</div>
                    <div>{tuit.tuit}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/image/${tuit.image}`} alt={"post img"}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;