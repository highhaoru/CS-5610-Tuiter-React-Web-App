const WhoToFollowListItem = (who) => {
    return(`
<div class="list-group-item override-bg-gray list-group-item-action">
                <div class="row">
                    <div class="col-xl-2 col-lg-2">
                        <img src=${who.avatarIcon} alt="" class="rounded-circle img-size">
                    </div>

                    <div class="col-xl-7 col-lg-6">
                        <div class="text-nowrap override-text">
                            <Span class="font-middle fw-bold">${who.userName}</Span><i class="fas fa-check-circle p-1 "></i>
                        </div>
                        <div class="font-color-gray font-small">
                            @${who.handle}
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 my-auto">
                        <a class="btn btn-primary rounded-pill override-bt">Follow</a>
                    </div>
                </div>
    </div>
`);
}
export default  WhoToFollowListItem;