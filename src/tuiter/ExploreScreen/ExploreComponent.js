import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="d-flex override-bar position-relative align-items-center">
                    <i className="fas fa-search position-absolute ps-4">
                    </i>
                    <input className="rounded-pill ps-5 form-control override-bar pe-auto" placeholder="Search Tuiter"/>
                        <a href="explore-settings.html" className="ps-5 pe-2"><i className="fas fa-cog fa-2x"></i></a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs mt-2 override-bd">
                    <li className="nav-item">
                        <a className="nav-link active override-bt" href="for-you.html">
                            For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bt" href="trending.html">
                            Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bt" href="news.html">
                            News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bt" href="sports.html">
                            Sports</a>
                    </li>
                    <li className="nav-item nav-end d-none d-sm-none d-md-block ">
                        <a className="nav-link override-bt" href="entertainment.html">
                            Entertainment</a>
                    </li>
            </ul>
            <div className="pt-1">
                <div className="position-relative d-flex">
                    <img src="/images/space.jpg" alt="" className="mt-2 w-100"/>
                        <span className="fa-2x fw-bold bottom-0 position-absolute">SpaceX's Starship</span>
                </div>
            </div>
            {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;

