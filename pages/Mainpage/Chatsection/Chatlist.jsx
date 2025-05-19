import '../../../src/Css/Mainpage/Chatsection/Chatlist.css'
import { FaCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import Recentchatcontainer from "../../Component/Recentchatcontainer"
/**
 * Chatlist Component
 * 
 * This component renders a chat interface with the following features:
 * - A profile section displaying a user's profile picture, name, and status.
 * - A dropdown menu to select the user's status (Online, Busy, Offline).
 * - A search bar to search for chats.
 * - A section displaying recent chats.
 * 
 * State:
 * - `Dropdown` (boolean): Tracks whether the status dropdown menu is visible.
 * - `Status` (object): Contains the current status label and color.
 * 
 * Functions:
 * - `toggleDropdown`: Toggles the visibility of the status dropdown menu.
 * - `handleStatus`: Updates the user's status and hides the dropdown menu.
 * 
 * Dependencies:
 * - `FaCircle` (from react-icons): Used to display status indicators.
 * - `Recentchatcontainer`: A child component used to render individual recent chats.
 * 
 * 
 */
function Chatlist(){
    const [Dropdown, setDropdown ] = useState(false);
    const [Status, setStatus] = useState({label: "Status", color: "gray"});

    function toggleDropdown(){
        setDropdown(!Dropdown);
    }

    function handleStatus(label, color){
        setStatus({label , color});
        setDropdown(false);
    }

    return(
       <>
        
        <div className="Chatlist-container">
           <div className="Chatlist-header">
              <h1>Chat</h1>
           </div>
           <hr/>

           <div className="Chatlist-profile-section">
                <div className="profile-placeholder">
                    <img src="https://c4.wallpaperflare.com/wallpaper/399/722/332/one-punch-man-saitama-hd-wallpaper-preview.jpg" alt="profile.jpg" className='profile-image' />
                </div>
                <h3>Saitama</h3> 
                <div className="Chatlist-name-section">
                    
                     <div className="dropdown-select">
                        <div className="dropdown-choose" onClick={toggleDropdown}>
                        <p className="online-text" style={{ color: 'black' }}>{Status.label}</p>
                            <FaCircle size="8px" color={Status.color} />
                        </div>
                        
                        <div className={`dropdown-items-container ${ Dropdown ? 'visible' : 'hidden'}`}>
                                <div className="dropdown-items" onClick={() => {handleStatus("Online" , "green")}}>
                                    <FaCircle size="8px" color="blue" />
                                    <p className="online-text">Online</p>
                                </div>
                                <div className="dropdown-items" onClick={() => {handleStatus("Busy" , "orange")}}>
                                    <FaCircle size="8px" color="orange" />
                                    <p className="online-text">Busy</p>
                                </div>
                                <div className="dropdown-items" onClick={() => {handleStatus("Offline" , "red")}}>
                                    <FaCircle size="8px" color="red" />
                                    <p className="online-text">Offline</p>
                                </div>
                            </div>
  
                     </div>
                </div> 
            </div>

          <div className="Chatlist-search-section">
            <input type="text" placeholder='Search'/>
          </div>

          <div className="Chatlist-recent-section">
            <p>Last Chats</p>
            <div className="Chatlist-lastchat-container">
               <Recentchatcontainer/>
               <Recentchatcontainer/>
               <Recentchatcontainer/>
               <Recentchatcontainer/>
            </div>
          </div>
         
        </div>
       </>
    );
}
export default Chatlist;