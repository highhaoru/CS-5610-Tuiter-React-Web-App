import React from "react";

const TuitsStats = (
    {post = {
        "_id": 1,
        "topic": "Space",
        "avatar": "avatar.jpg",
        "userName": "SpaceX",
        "handle": "spacex",
        "time": "2h",
        "abstract": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about.",
        "content": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars.",
        "liked": true,
        "comments": "4.2K",
        "retuit": "3.5K",
        "likes": "37.5K"}
    }
) => {
    return(
        <div className="row mt-2">
            <div className="col-3">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary"> {post.comments}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-repeat text-secondary"></i>
                <span className="text-secondary"> {post.retuit}</span>
            </div>
            <div className="col-3">
                {post.liked? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart text-secondary"></i>}
                <span className="text-secondary"> {post.likes}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
};
export default TuitsStats;