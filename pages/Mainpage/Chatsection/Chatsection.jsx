import { StrictMode } from "react"
import Sidebar from "./Sidebar"
import Chatlist from "./Chatlist"
import Chatbox from "./Chatbox"
import "../../../src/Css/Mainpage/Chatsection/Chatsection.css"

// Chatsection is the main component that renders the chat interface, including the sidebar, chat list, and chatbox.
function Chatsection(){
    return(
        <>
           <div className="Chat-section">
              <Sidebar/>
              <Chatlist/>
              <Chatbox/>
           </div>
        </>
    );
}

export default Chatsection;