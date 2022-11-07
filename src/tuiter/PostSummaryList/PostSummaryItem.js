import React from "react";

const PostSummaryItem = ({post = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "/images/reactjs.png"
}
}) => {
    return(
        <>
                <div className="list-group-item override-list list-group-item-action">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7">
                            <div className="font-color-gray font-small">
                                {post.topic}
                            </div>
                            <div className="d-inline">
                                <span className="font-middle fw-bold override-text">{post.userName}</span><i className="fas fa-check-circle p-1 override-text"></i><span className="font-color-gray font-small">- {post.time}</span>
                            </div>
                            <div className="font-middle fw-bold override-text">
                                {post.title}
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <img className="rounded-corners-all-around img-fluid " src={post.image} />
                        </div>
                    </div>
                </div>
        </>
);
}

export default PostSummaryItem;