import React from "react";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import HomeScreen from "./HomeScreen";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ProfileScreen from "./ProfileScreen";

const reducers = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducers);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeScreen/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;