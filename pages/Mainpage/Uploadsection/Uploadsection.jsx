/**
 * Uploadsection Component
 * 
 * This component represents the upload section of the application. It includes
 * a sidebar and an upload area, and applies specific styles from the associated
 * CSS file.
 * 
 * @component
 * @returns {JSX.Element} The rendered Uploadsection component.
 * 
 * @example
 * // Usage
 * import Uploadsection from './Uploadsection';
 * 
 * function App() {
 *   return (
 *     <Uploadsection />
 *   );
 * }
 */


import Sidebar from "../Chatsection/Sidebar";
import Uploadarea from './UploadArea'
import "../../../src/Css/Mainpage/Uploadsection/Uploadsection.css"
function Uploadsection(){
   return(
    <>
      <div className="Uploadsection-content">
        <Sidebar/>
        <Uploadarea/>
      </div>
     
    </>
   );
}
export default Uploadsection;