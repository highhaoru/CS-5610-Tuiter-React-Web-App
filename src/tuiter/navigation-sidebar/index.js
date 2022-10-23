import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ( {
                                active = 'explore'
                            }
) => {
    return(
        <>
            <div className="list-group">
                <Link to="/"
                      className="nav-link override-list list-group-item list-group-item-action"
                      href="/tuiter"><i className="fab fa-twitter"></i>
                </Link>

                <Link to="/tuiter/home"
                      className={`nav-link override-list list-group-item list-group-item-action 
                      ${active === 'home' ? 'active' : ''}`}
                      href="/tuiter/home">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Home
                    </span>
                </Link>

                <Link to="/tuiter/explore"
                      className={`nav-link override-list list-group-item list-group-item-action 
                      ${active === 'explore' ? 'active': ''}`}
                      href="/tuiter/explore">
                    <i className="fas fa-lg fa-hashtag"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Explore
                    </span>
                </Link>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'notifications' ? 'active' : ''}`}
                   href="/tuiter">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Notifications
                    </span>
                </a>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'messages' ? 'active' : ''}`}
                   href="/tuiter">
                    <i className="fas fa-envelope d-inline-block"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Messages
                    </span>
                </a>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'bookmarks' ? 'active' : ''}`}
                   href="/tuiter">
                    <i className="fas fa-bookmark d-inline-block"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Bookmarks
                    </span>
                </a>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'lists' ? 'active' : ''}`}
                   href="/tuiter">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Lists
                    </span>
                </a>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'profile' ? 'active' : ''}`}
                   href="profile.html">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        Profile
                    </span>
                </a>

                <a className={`nav-link override-list list-group-item list-group-item-action 
                ${active === 'more' ? 'active' : ''}`}
                   href="/tuiter">
                    <i className="fa-regular fa-circle-ellipsis"></i>
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline d-lg-none p-2">
                        More
                    </span>
                </a>
            </div>

            <div className="d-grid mt-2">
                <a href="tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    );
}
export default NavigationSidebar;