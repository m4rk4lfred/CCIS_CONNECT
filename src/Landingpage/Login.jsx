import '../Css/Landingpage-inputCredentials.css'

function Login({closeLogin , showlogin,showsignup}){
    return(
        <>
      <dialog className="Login-content-container credential-content-container" id='login' open>
        <div className="Login-container credential-container">
            <div className="Login-header">
                <h1>LOG<span className='design-1'>IN</span></h1>
                <button onClick={() => closeLogin(false)}>X</button>
            </div>
            <div className="Login-body">
                <form action="">
                    
                    <section className="username-section Login-section">
                        <label htmlFor="username-input">Username</label>
                        <input type="text" name='username-input' />
                    </section>


                    <section className="password-section Login-section">
                        <label htmlFor="password-input">Password</label>
                        <input type="password" name='password-input' />
                    </section>
                     
                    <section className="createaccount-section">
                        <p>Don't have an account? </p>   
                        <a onClick={()=> {showlogin(false);showsignup(true)}}>Sign up here.</a>
                    </section>

                    <section className="invalid-credentials">
                        <p>Invalid credentials, please verify them and retry</p>  {/*Gagamitin lang to for input validation */}
                    </section>

                    <section className="submit-section Login-section">
                        <button>Sign Up</button>
                    </section>

                </form>
            </div>
        </div>
        </dialog>
        </>
    );
   
}
export default Login;