import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Labs from "./labs";
import Assignment7 from "./labs/a7";
import Tuiter from "./tuiter";
// import HomeScreen from "./tuiter/HomeScreen";
// import ExploreScreen from "./tuiter/ExploreScreen";
// import ProfileScreen from "./tuiter/ProfileScreen";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs/>}/>
                        <Route path="/a7" element={<Assignment7 />} />
                        <Route path="/tuiter/*" element={<Tuiter/>}/>
                        {/*<Route path="/tuiter/home" element={<HomeScreen/>}/>*/}
                        {/*<Route path="/tuiter/explore" element={<ExploreScreen/>}/>*/}
                        {/*<Route path="/tuiter/profile" element={<ProfileScreen/>}/>*/}
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
