const PostItem = (post) => {
    return (`
    <div class="list-group-item center">
        <div class="row pt-2">
            <div class="col-1">
                <img src=${post.profile} class="img-fluid rounded-circle">
            </div>
            <div class="col-11">
                <div class="d-flex  position-relative">
                    <div class="font-color-white fw-bold">${post.userName} <i class="fas fa-check-circle"></i></div>
                    <div class="text-secondary ps-1">@${post.handle} · ${post.time} </div>
                </div>
                <div class="font-color-white width-limit pb-2">
                    ${post.tweet}
                </div>
                <div class="list-group center">
                    <div class="list-group-item image ">
                        <img src=${post.image} class="img-fluid">
                    </div>
                   
                    ${post.content ?`<div class="list-group-item"><div class="font-color-white font-bold">${post.title}</div><div class="text-secondary">${post.content}</div></div>`: ''}
                    
                </div>
                
                <div class="row text-secondary pt-3 pb-2">
                <div class="col-3">
                <i class='far fa-comment'></i><span class="icon-space ">${post.comments}</span>
                </div>
                <div class="col-3">
                <i class='fas fa-retweet'></i><span class="icon-space">${post.retweets}</span>
                </div>
                <div class="col-3">
                <i class='far fa-heart'></i><span class="icon-space">${post.likes}</span>
                </div>
                 <div class="col-3">
                 <i class='fas fa-share'></i>
                </div>
               
                </div>
            </div>
        </div>
        </div>
    `);
}

export default PostItem;