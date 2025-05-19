import { Routes , Route } from "react-router-dom";
import Mainpage from '../pages/Mainpage/Mainpage'
import Landingpage from "../pages/Landingpage/Landingpage";
import ChatSection from '../pages/Mainpage/Chatsection/Chatsection'
import UploadSection from '../pages/Mainpage/Uploadsection/Uploadsection'


function Router(){
return(

    <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/Chatsection" element={<ChatSection />}></Route>
        <Route path="/Uploadsection" element={<UploadSection />}></Route>

    </Routes>

)
}

export default Router;