import '../../../src/Css/Mainpage/Chatsection/Chatbox.css'
import { IoMdSend } from "react-icons/io"

function Chatbox(){
  return(
    <>
    <div className="Chatbox-content">
     <div className="Chatbox-header">
        <p><b>Group name</b></p> {/*Pass nalang dito value nung chat*/}
      </div>

     <div className="Chatbox-body">
          <div className="Chat-content">  {/*Dito yung div na paglalagyan ng message*/}
             
          </div>
      </div>

      <div className="Chatbox-input">
        <input type="text" />
       <IoMdSend className='send-logo'/>
      </div>
     </div>
    </>
  )
}

export default Chatbox;