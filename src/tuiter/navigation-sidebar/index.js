import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="/tuiter" className="list-group-item">Tuiter</Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house float-start pe-2"></i><span className="d-none d-xl-block">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash float-start pe-2"></i><span className="d-none d-xl-block">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk float-start pe-2"></i><span className="d-none d-xl-block">Labs</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell float-start pe-2"></i><span className="d-none d-xl-block">Notifications</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope float-start pe-2"></i><span className="d-none d-xl-block">Messages</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark float-start pe-2"></i><span className="d-none d-xl-block">Bookmarks</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list float-start pe-2"></i><span className="d-none d-xl-block">Lists</span>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' || active === 'edit-profile'?'active':''}`}>
                <i className="bi bi-person float-start pe-2"></i><span className="d-none d-xl-block">Profile</span>
            </Link>
            <Link to="/tuiter" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots float-start pe-2"></i><span className="d-none d-xl-block">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;