import { useState } from 'react'
import blurryLogo from './assets/ccislogo.svg'
import brandingLogo from './assets/ccis logo 1.svg'
import blurryTriangleYellow from './assets/blurryTriangle.svg'
import blurryTriangleBlue from './assets/blurryBlueTriangle.svg'
import './App.css'


function App() {
  const [text , setText] = useState("");
  return (
    <>
    <header>  
      
        <div className="header-branding-div"> 
            <img src={brandingLogo} alt="ccis.logo" className="header-logo"/>
            <h1><span className="design-1">C</span>CIS <span className="design-1">C</span>ONNECT</h1>
        </div>

  
        <nav>       
             <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#sign">Sign up</a></li>
             </ul>
        </nav>
    </header>
    

    <div className="content">
       
      
       <div className="homeSection">
          

        <div className="homesection-upper">
            <h2><span className="design-1">C</span>onnecting CCIS Minds, One Click at a Time</h2>
        </div>
         
         
        <div className="homesection-lower">
            <div className="homesection-email-div">
                <input type="text" placeholder="Enter Your Email" value={text} onChange={(e)=>setText(e.target.value)}/>
                <button className='submitButton'>Submit</button>
            </div>
        </div>

      
        <img src={brandingLogo} alt="ccislogo" className="ccis-logo"/>
        <img src={blurryTriangleYellow} alt="ccislogo" className="bt-1"/>
        <img src={blurryTriangleBlue} alt="ccislogo" className="bt-2"/>
        <img src={blurryTriangleBlue} alt="ccislogo" className="bt-3"/>
       </div>
    </div>


    </>
  );
}

export default App;
