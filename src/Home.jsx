import { useState } from 'react'
import blurryLogo from './assets/ccislogo.svg'
import brandingLogo from './assets/ccis logo 1.svg'
import blurryTriangleYellow from './assets/blurryTriangle.svg'
import blurryTriangleBlue from './assets/blurryBlueTriangle.svg'
import './App.css'


function Home() {
  {/* This state variable manages the value of the input box. */}
  {/* 'text' holds the current state (i.e., the current value of the input). */}
  {/* 'setText' is the function used to update the state with a new value. */}
  {/* When the user types in the input, 'setText' updates 'text', causing the component to re-render. */}
  {/* The first value is the current state, and the second is the updater function—not the new state itself. */}
  {/* The initial state is an empty string, so the input box starts off blank. */}
  const [text , setText] = useState("");
  return (
    <>
    <header>  
      
        <div className="header-branding-div" id='HomeSection'> 
            <img src={brandingLogo} alt="ccis.logo" className="header-logo"/>
            <h1><span className="design-1">C</span>CIS <span className="design-1">C</span>ONNECT</h1>
        </div>

  
        <nav>       
             <ul>
                <li><a href="#HomeSection">Home</a></li>
                <li><a href="#FeaturesSection">Features</a></li>
                <li><a href="#AboutSection">About</a></li>
                <li><a href="#ContactSection">Contact</a></li>
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

export default Home;
