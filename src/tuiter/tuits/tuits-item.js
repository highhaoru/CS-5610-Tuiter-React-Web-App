import React from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitsStats from "./tuits-stats";

const TuitsItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {dispatch(deleteTuitThunk(id));}    // dispatch(deleteTuit(id));

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/image/${tuit.image}`} className="rounded-circle mt-3 w-100" alt={"avatar"}/>
                </div>
                <div className="col-10 p-2">
                    <b>{tuit.username}</b><i className="bi bi-patch-check-fill text-primary ps-1"></i>
                    <span className="text-secondary"> {tuit.handle} - {tuit.time}</span>
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>

                    <div className="mt-2">{tuit.tuit}</div>
                    <TuitsStats key={tuit._id} tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitsItem;