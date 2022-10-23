import React from "react";

const PostItem = ({post =
{"profile":"/images/newyork.png", "userName":"New York Post","handle":"nypost", "time":"23h" , "comments":"965", "retweets":"2.4k", "likes":"4k", "image":"/images/readingmarx.jpg", "tweet":"Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx@Gfaq","title":""}
}) => {
    return (
        <>
    <div className="list-group-item center">
        <div className="row pt-2">
            <div className="col-1">
                <img src={post.profile} className="img-fluid rounded-circle"/>
            </div>
            <div className="col-11">
                <div className="d-flex  position-relative">
                    <div className="font-color-white fw-bold">{post.userName} <i className="fas fa-check-circle"></i></div>
                    <div className="text-secondary ps-1">@{post.handle} · {post.time} </div>
                </div>
                <div className="font-color-white width-limit pb-2">
                    {post.tweet}
                </div>
                <div className="list-group center">
                    <div className="list-group-item overflow-auto p-0">
                        <img src={post.image} className="img-fluid"/>
                    </div>
                   
                    <div className={`list-group-item ${post.content ?  '': 'd-none'}`}><div className="font-color-white font-bold">{post.title}</div><div className="text-secondary">{post.content}</div></div>
                    
                </div>
                
                <div className="row text-secondary pt-3 pb-2">
                <div className="col-3">
                <i className='far fa-comment'></i><span className="p-3">{post.comments}</span>
                </div>
                <div className="col-3">
                <i className='fas fa-retweet'></i><span className="p-3">{post.retweets}</span>
                </div>
                <div className="col-3">
                <i className='far fa-heart'></i><span className="p-3">{post.likes}</span>
                </div>
                 <div className="col-3">
                 <i className='fas fa-share'></i>
                </div>
               
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default PostItem;