import React from "react";
import {useSelector} from "react-redux";// import useSelector hook
                                        // from react-redux
const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);// extract 'Hello World' from reducer
    return(
        <h3>{message}</h3>// render <h1>Hello World</h1>
    );
};

export default HelloReduxExampleComponent;








