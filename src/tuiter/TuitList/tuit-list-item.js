import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return (
        <>
            <div className="list-group-item center">
                <div className="row pt-2">
                    <div className="col-1">
                        <img src={tuit["avatar-image"]} className="img-fluid rounded-circle"/>
                    </div>
                    <div className="col-11">
                        <div className="">
                            <span className="font-color-white fw-bold">{tuit.postedBy.username} </span>
                            <span className="text-secondary ps-1">@{tuit.handle} </span>
                            <i onClick={() => deleteTuit(tuit)} className="fas fa-times fa-pull-right"></i>
                        </div>
                        <div className="font-color-white width-limit pb-2">
                            {tuit.tuit}
                        </div>
                        <div className="list-group center">
                            <div className="list-group-item overflow-auto p-0">
                                <img src={tuit["logo-image"]} className="img-fluid"/>
                            </div>

                            <div className={`list-group-item ${tuit.content ?  '': 'd-none'}`}><div className="font-color-white font-bold">{tuit.title}</div><div className="text-secondary">{tuit.content}</div></div>

                        </div>
                    </div>

                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </>
    );
}

export default TuitListItem;