/**
 * Mainpage component serves as the main container for the application.
 * It includes the Chatsection component, which handles the chat functionality.
 *
 * @component
 * @returns {JSX.Element} The rendered Mainpage component.
 */
import { StrictMode } from "react"
import Chatsection from './Chatsection/Chatsection'

function Mainpage(){
    return(
        <>
           <div className="Main-content">
                <Chatsection/>
           </div>
        </>
    );
}

export default Mainpage;