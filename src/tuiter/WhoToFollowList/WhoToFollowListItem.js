import React from "react";

const WhoToFollowListItem = ({who = {
    avatarIcon: '/images/nasa.png',
    userName: 'NASA',
    handle: 'NASA',
}
                             }) => {
return(
    <>
    <div className="list-group-item override-bg-gray list-group-item-action">
                <div className="row">
                    <div className="col-xl-2 col-lg-2">
                        <img src={who.avatarIcon} alt="" width="48" className="rounded-circle float-start"/>
                    </div>

                    <div className="col-xl-7 col-lg-6">
                        <div className="text-nowrap override-text">
                            <span className="font-middle fw-bold">{who.userName}</span><i className="fas fa-check-circle p-1 "></i>
                        </div>
                        <div className="font-color-gray font-small">
                            @{who.handle}
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 my-auto">
                        <a className="btn btn-primary rounded-pill override-bt">Follow</a>
                    </div>
                </div>
    </div>
    </>
);
}
export default  WhoToFollowListItem;