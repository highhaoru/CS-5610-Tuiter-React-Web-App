import React from "react";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducers = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducers);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div className="row">
                <div>
                    <Outlet/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;