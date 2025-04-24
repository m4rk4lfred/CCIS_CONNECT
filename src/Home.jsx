import { useState, useRef } from 'react'
import blurryLogo from './assets/ccislogo.svg'
import brandingLogo from './assets/ccis logo 1.svg'
import blurryTriangleYellow from './assets/blurryTriangle.svg'
import blurryTriangleBlue from './assets/blurryBlueTriangle.svg'
import Signup from './Signup'
import Login from './Login'
import './App.css'



function Home() {
  {/* This state variable manages the value of the input box. */}
  {/* 'text' holds the current state (i.e., the current value of the input). */}
  {/* 'setText' is the function used to update the state with a new value. */}
  {/* When the user types in the input, 'setText' updates 'text', causing the component to re-render. */}
  {/* The first value is the current state, and the second is the updater function—not the new state itself. */}
  {/* The initial state is an empty string, so the input box starts off blank. */}
  const [email , setEmail] = useState("");
  
  {/* this two variable will control the visibility of the login and signup modal */}
  const [signupModal , signupState] = useState(false);
  const [loginModal , loginState] = useState(false);

  
  {/* Fragment that will return the home page*/}
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
                <li><a onClick={()=>signupState(true)}>Sign up</a></li>
                <li><a onClick={()=>loginState(true)}>Login</a></li>
             </ul>
        </nav>
    </header>
    

    <div className="content">
       
       {/* Left section of the homepage — separated for easier styling and positioning of floating elements */}
       <div className="homeSection">
        <div className="homesection-upper">
            <h2><span className="design-1">C</span>onnecting CCIS Minds, One Click at a Time</h2>
        </div>
         
        {/* Email input section on the homepage */}
        <div className="homesection-lower">
            <div className="homesection-email-div">
                <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <button className='submitButton' onClick={()=>signupState(true)}>Submit</button>
            </div>
        </div>


       {/* floating svg like the ccis logo and so on*/}
        <img src={brandingLogo} alt="ccislogo" className="ccis-logo"/>
        <img src={blurryTriangleYellow} alt="ccislogo" className="bt-1"/>
        <img src={blurryTriangleBlue} alt="ccislogo" className="bt-2"/>
        <img src={blurryTriangleBlue} alt="ccislogo" className="bt-3"/>
       </div>
    </div>
        
        {/*if signupModal is true the signup UI will appear */}
    {signupModal && <Signup email={email} closeSignup={signupState} signupShow={signupState} loginShow={loginState}/>}
    {loginModal && <Login closeLogin={loginState} showlogin={loginState} showsignup={signupState}/>}  {/*Then gumamit nalang ako ng props or properties para magpass ng data sa another component, parang pagpass lang ng data sa function pero sa component naten pinapasa*/}
    </>
  );
}

export default Home;
