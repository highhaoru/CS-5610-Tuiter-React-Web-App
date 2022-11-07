import React, {useState} from "react";
import {useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ProfileComponent from "./ProfileComponent"
import EditProfileComponent from "./EditProfileComponent";

const ProfileScreen = () => {
    const profile = useSelector((state) => state.profile);
    const [editProfile, setEditProfile] = useState(false);
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {!editProfile && <ProfileComponent profile={profile} setEditProfile={setEditProfile}/>}
                {editProfile && <EditProfileComponent profile={profile} setEditProfile={setEditProfile}/>}
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default ProfileScreen;