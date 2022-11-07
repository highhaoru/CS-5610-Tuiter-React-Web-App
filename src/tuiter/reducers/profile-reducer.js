// import profile from "../data/profile.json"

const profile = {
    "firstName": "Hao",
    "lastName": "Jin",
    "handle": "jin",
    "profilePicture": "/images/hao.jpg",
    "bannerPicture": "/images/banner.jpg",
    "bio": "Graduate student in MSCS @ NEU",
    "website": "https://www.google.com",
    "location": "Boston, MA",
    "dateOfBirth": "1996-05-04",
    "dateJoined": "1/2022",
    "followingCount": 12,
    "followersCount": 568,
    "tuitCounts": 5196
}

const profileReducer = (state = profile, action) =>{
    switch (action.type){
        case "save-profile":
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;