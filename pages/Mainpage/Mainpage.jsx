import { StrictMode } from "react"
import Sidebar from "./Chatsection/Sidebar"
import Chatlist from "./Chatsection/Chatlist"
import Chatbox from "./Chatsection/Chatbox"
import "../../src/Css/Mainpage/Mainchat/Mainchat.css"

function Mainpage(){
    return(
        <>
           <div className="Main-content">
              <Sidebar/>
              <Chatlist/>
              <Chatbox/>
           </div>
        </>
    );
}

export default Mainpage;