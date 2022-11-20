import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitsStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-2">
            <div className="col-3">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary"> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-repeat text-secondary"></i>
                <span className="text-secondary"> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                {/*<i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1}))}*/}
                {/*   className="bi bi-heart-fill me-2 text-danger"></i>*/}
                <i onClick={() => dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))}
                   className= {tuit.liked?
                       "bi bi-heart-fill me-2 text-danger" :
                       "bi bi-heart me-2 text-secondary"}></i>
                <span className="text-secondary"> {tuit.likes}</span>
            </div>
            <div className="col-2">
                <i onClick={() => dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))}
                   className= {tuit.disliked?
                       "bi bi-hand-thumbs-down-fill me-2 text-danger" :
                       "bi bi-hand-thumbs-down me-2 text-secondary"}></i>
                <span className="text-secondary"> {tuit.dislikes}</span>
            </div>
            <div className="col-1">
                <i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
};
export default TuitsStats;