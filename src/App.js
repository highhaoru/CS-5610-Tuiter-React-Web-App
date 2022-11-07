import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
// import HelloWorld from './labs/a6/hello-world';
import Labs from "./labs";
import Assignment7 from "./labs/a7";
// import HomeScreen from "./tuiter/HomeScreen/HomeScreen";
// import ExploreScreen from "./tuiter/ExploreScreen";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/a7" element={<Assignment7 />} />
                    {/*<Route path="/hello" element={<HelloWorld/>}/>*/}
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    {/*<Route path="/tuiter/home" element={<HomeScreen/>}/>*/}
                    {/*<Route path="/tuiter/explore" element={<ExploreScreen/>}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
