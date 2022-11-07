import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
<>
    <div className="row text-secondary pt-3 pb-2">
        <div className="col-3">
            <i className='far fa-comment'></i><span className="p-3">{tuit.stats.comments}</span>
        </div>
        <div className="col-3">
            <i className='fas fa-retweet'></i><span className="p-3">{tuit.stats.retuits}</span>
        </div>
        <div className="col-3">
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>
        </div>
        <div className="col-3">
            <i className='fas fa-share'></i>
        </div>
    </div>

</>
);
}
export default TuitStats;

