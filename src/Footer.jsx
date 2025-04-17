import './App.css'
import logo from './assets/emailLogo.svg'
function Footer(){
    return(
        <>
        <footer className="footer-content">
          <h1>CCIS CONNECT &lt;/&gt;</h1>
          
          <p>FIND US</p>
          <div className="footer-findus-wrapper">
             <img src={logo} alt="socialmedia.svg" />
             <img src={logo} alt="socialmedia.svg" />
             <img src={logo} alt="socialmedia.svg" />
          </div>
          <p className='footer-cri'>© 2025 CCIS Connect (Basilio warriors). All rights reserved.</p>
          
        </footer>
       

        </>
    );
}
export default Footer