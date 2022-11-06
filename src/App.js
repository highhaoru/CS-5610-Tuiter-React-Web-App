import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from './labs/a6/hello-world';
import Labs from "./labs";
import HomeScreen from "./tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./tuiter/ExploreScreen";
import EditProfile from "./tuiter/edit-profile";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Labs/>}/>
                    <Route path="/hello" element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                    <Route path="/tuiter/profile" element={<EditProfile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
