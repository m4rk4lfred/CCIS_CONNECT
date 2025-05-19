import { useState } from 'react';
import '../../../src/Css/Mainpage/Uploadsection/Uploadarea.css'
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRef } from 'react';
/**
 * UploadArea Component
 * 
 * This component provides a user interface for uploading documents. It includes a modal for adding documents,
 * a drag-and-drop area for file uploads, and a search bar for filtering modules.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered UploadArea component.
 * 
 * @example
 * <UploadArea />
 * 
 * @state {boolean} uploadModal - Controls the visibility of the upload modal.
 * @state {boolean} dragState - Indicates whether a file is being dragged over the drop area.
 * 
 * @ref {React.RefObject} fileInputRef - A reference to the hidden file input element.
 * 
 * @function handleUploadClick - Triggers the file input click event to open the file picker.
 * @param {React.MouseEvent} e - The click event.
 * 
 * @function onFileDrop - Handles the file drop event and processes the dropped files.
 * @param {React.DragEvent} e - The drag event.
 * 
 * @function handleDrag - Handles the drag event to update the drag state.
 * @param {React.DragEvent} e - The drag event.
 */


function UploadArea(){
  const [uploadModal , setUploadModal] = useState(true);
  const fileInputRef = useRef(null);
  const [dragState , setDrag] = useState(false);
 
  const handleUploadClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click(); // 
  };
  const onFileDrop = (e) =>{
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      files[0].name;
    }
  }
  const handleDrag = (e)=>{
    e.preventDefault();
    setDrag(true);
  }

  return(
    <>
       <div className="Uploadarea-content">

          <div className="Uploadarea-body">
            <div className="Uploadarea-body-header">
                <h1>Modules</h1>
                <br />
                <hr />

                <div className="Uploadarea-search">
                    <input type="text" placeholder='Search' name="Upload-search-box" id="Upload-search-box" />
                     <IoIosAdd className='add-button' onClick={() => setUploadModal(true)} />
                </div>

                <div className="Uploadarea-data-area">
                  
               </div>
               
            </div>

          </div>
       </div>
       
       {uploadModal && 
         <dialog className='uploadModal' open>
           <div className="uploadModal-box">
           <div className="uploadModal-box-header">
             <p>Add Documents</p>
             <IoMdClose onClick={() => setUploadModal(false)} className='upload-exit-button'/>
              
           </div>
           <hr />
           <div className="uploadModal-box-body">
  
             <label htmlFor="Module-name">Title</label>
             <br />
             <input type="text" name='Module-name' className='Document-title-input'/>  
             
             <div className="Document-upload-box" onClick={handleUploadClick} onDrop={onFileDrop} onDragOver={(e) => e.preventDefault()}>
               <p>Drop your files here of choose your file</p>
             </div>
             <input type="file" hidden ref={fileInputRef}/>

         

           </div>
           </div>
         </dialog>
       }
         
    </>
  );
}
export default UploadArea;