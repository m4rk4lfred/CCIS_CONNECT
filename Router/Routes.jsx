import { Routes , Route } from "react-router-dom";
import MainChat from '../pages/Mainpage/MainChat'
import Landingpage from "../pages/Landingpage/Landingpage";

function Router(){
return(

    <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/MainChat" element={<MainChat />}></Route>
    </Routes>

)
}

export default Router;