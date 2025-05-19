import '../../../src/Css/Mainpage/Chatsection/Chatbox.css'
import { IoMdSend } from "react-icons/io"

function Chatbox(){
  return(
    <>
    <div className="Chatbox-content">
     <div className="Chatbox-header">
        <p><b>Group name</b></p> {/*Pass the chat value here*/}
      </div>

     <div className="Chatbox-body">
          <div className="Chat-content">  {/*This is the div where messages will be placed*/}
             
          </div>
      </div>

      <div className="Chatbox-input">
        <input type="text" placeholder="Type a message..." />
       <IoMdSend className='send-logo'/>
      </div>
     </div>
    </>
  )
}

export default Chatbox;