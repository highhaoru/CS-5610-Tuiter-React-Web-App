import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./ProfileComponent"
import EditProfileComponent from "./EditProfileComponent";

const ProfileScreen = () => {
    const profile = useSelector((state) => state.profile);
    const [editProfile, setEditProfile] = useState(false);
    return(
        <>
            {!editProfile && <ProfileComponent profile={profile} setEditProfile={setEditProfile}/>}
            {editProfile && <EditProfileComponent profile={profile} setEditProfile={setEditProfile}/>}
        </>
    )
}

export default ProfileScreen;