import tuits from "../data/tuits.json";

const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "/images/hao.jpg",
};

const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
};

const tuitsReducer = (state = tuits,action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
            // break;
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                "logo-image": "/images/banner.jpg",
                "avatar-image": "/images/hao.jpg",
                postedBy: {
                    "username": "ReactJS"
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];
            // break;
        default:
            return tuits
    }
}

export default tuitsReducer;

// import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../data/tuits.json';
// const currentUser = {
//     userName: "NASA",
//     handle: "@nasa",
//     image: "/images/nasa.jpeg",
// };
//
// const templateTuit = {
//     ...currentUser,
//     topic: "Space",
//     time: "2h",
//     liked: false,
//     replies: 0,
//     retuits: 0,
//     likes: 0,
// };
//
// const tuitsSlice = createSlice({
//                                    name: 'tuits',
//                                    initialState: tuits,
//                                    reducers: {
//                                        deleteTuit(state, action) {
//                                            const index = state.findIndex((tuit) => tuit._id === action.payload);
//                                            state.splice(index, 1);
//                                        },
//                                        createTuit(state, action) {
//                                            state.unshift({
//                                                              ...action.payload,
//                                                              ...templateTuit,
//                                                              _id: new Date().getTime(),
//                                                          });
//                                        },
//                                    }
//                                });
// export const { createTuit, deleteTuit } = tuitsSlice.actions;
// export default tuitsSlice.reducer;