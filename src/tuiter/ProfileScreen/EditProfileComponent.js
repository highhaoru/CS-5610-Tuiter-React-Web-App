import React,{useState} from "react";
import {useDispatch} from "react-redux";

const EditProfileComponent = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const [preProfile, EditProfile] = useState(profile);
    const profileChangeHandler = (newProfile) => {
        EditProfile(newProfile);
    }
    const saveProfile = () => {
        const action = {
            type: "save-profile",
            profile: preProfile
        };
        dispatch(action);
        setEditProfile(false);
    }

    return (
        <>
            <div className="row text-white align-items-center ">
                <div className="col-1" onClick={() => setEditProfile(false)}>
                    <i className="fas fa-times"/>
                </div>
                <div className="col-9 ps-0 fw-bold fs-5">
                    Edit Profile
                </div>
                <button onClick={saveProfile} className="col-2 btn border-secondary bg-white text-black fw-bold rounded-pill ">
                    Save
                </button>
            </div>
            <div className="row position-relative mt-2">
                <img src={profile.bannerPicture} className="img-fluid" style={{height:"300px"}}/>
                <img src={profile.profilePicture} className="img-fluid col-lg-3 col-sm-4 ms-4 rounded-circle position-absolute" style={{bottom:"-50px"}}/>
                <div className="col-8"></div>
            </div>
            <div className="row pt-5 mt-2"/>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="first-name" className="form-label text-secondary">First Name:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...preProfile, firstName: event.target.value})
                }} id="first-name" type="text" className="form-control bg-black text-white" value={preProfile.firstName}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="last-name" className="form-label text-secondary">Last Name:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...preProfile, lastName: event.target.value})
                }} id="last-name" type="text" className="form-control bg-black text-white" value={preProfile.lastName}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="bio" className="form-label text-secondary">Bio:</label>
                <textarea onChange={(event) => {
                    profileChangeHandler({...preProfile, bio: event.target.value})
                }} id="bio" className="form-control bg-black text-white" value={preProfile.bio}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="location" className="form-label text-secondary">Location:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...preProfile, location: event.target.value})
                }} id="location" type="text" className="form-control bg-black text-white" value={preProfile.location}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="website" className=" text-secondary">Website:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...preProfile, website: event.target.value})
                }} id="website" type="text" className="form-control bg-black text-white" value={preProfile.website}/>
            </div>
            <div className="row mt-2 p-2 border border-light rounded">
                <label htmlFor="date-of-birth" className="form-label text-secondary">Date of Birth:</label>
                <input onChange={(event) => {
                    profileChangeHandler({...preProfile, dateOfBirth: event.target.value})
                }} id="date-of-birth" type="date" className="form-control bg-black text-white"
                       value={preProfile.dateOfBirth}/>
            </div>
        </>
    )
};

export default EditProfileComponent;