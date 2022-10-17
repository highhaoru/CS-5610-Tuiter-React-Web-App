const PostSummaryItem = (post) => {
    return(`
                <div class="list-group-item override-list list-group-item-action">
                    <div class="row">
                        <div class="col-xl-9 col-lg-9 col-md-8 col-sm-7">
                            <div class="font-color-gray font-small">
                                ${post.topic}
                            </div>
                            <div class="">
                                <Span class="font-middle fw-bold override-text">${post.userName}</Span><i class="fas fa-check-circle p-1 override-text"></i> <span class="font-color-gray font-small">- ${post.time}</span>
                            </div>
                            <div class="font-middle fw-bold override-text">
                                ${post.title}
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <img class="rounded-corners-all-around img-fluid " src=${post.image}>
                        </div>
                    </div>
                </div>
                    
`);
}

export default PostSummaryItem;