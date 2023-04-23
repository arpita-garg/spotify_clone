import React from "react";
import { StyledLoginDiv, StyledLoginForm } from "../Style/Login.style";
import blackLogo from "../Assets/blacklogo.png";
import fb from "../Assets/facebook.png";
import google from "../Assets/google.jpg";
import { NavLink } from "react-bootstrap";
import { useFormik } from "formik";
import { validationLogin } from "./Validation";

export default function Login() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const email_match = "agarg405@gmail.com";
  const pwd_match = "black2";

  const formik = useFormik({
    initialValues: {
     
      email: "",
      password: ""
      
 },

 validationSchema: validationLogin,

 
 onSubmit: (values) => {
   if (email_match=== values.email && pwd_match === values.password){
    alert("login confirmed")
       let toso = Math.random();
       console.log(toso);
      localStorage.setItem("token", toso);
      window.location.reload()
   }

 }
})

  // const handleSubmit = (e) => {
  //   localStorage.setItem("Email", email);
  //   localStorage.setItem("Password", password);
  // };
  return (
    <>
      <div className="form-wrapper">
        <StyledLoginDiv>
          <div className="container">
            <div className="header-img-heading">
              <div className="logo-spotify">
                <img src={blackLogo} alt="black-logo" id="black-logo" />
                <span className="title"> Spotify</span>
              </div>
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          {/* <div className="container"> */}
          <div className="below-divider">
            <div className="below-divider-wrapper">
              <div className="below-divider-content">
                <p className="below-divider-heading">
                  To continue, log in to Spotify.
                </p>
                <div className="facebook_signup-button">
                  <button className="facebook">
                    <div className="img-photo">
                      <img src={fb} alt="fb" id="fb" />
                      <span className="fb-sign">Continue with Facebook</span>
                    </div>
                  </button>
                </div>
                <div className="google_signup-button">
                  <button className="google">
                    <div className="google-icon">
                      <img src={google} alt="google" id="google" />
                      <NavLink>
                        <span className="google-sign">
                          Continue with Google
                        </span>
                      </NavLink>
                    </div>
                  </button>
                </div>
                <div className="login-with-phone">
                  <button className="phone">
                    <NavLink>
                      <span className="phone-content">
                        CONTINUE WITH PHONE NUMBER
                      </span>
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="formDivider">OR</span>

          {/* </div> */}
        </StyledLoginDiv>
        <div className="container">
          <StyledLoginForm>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-email">
                <div className="form-email-label">
                  <label htmlFor="email">Whats's your email?</label>
                </div>
                <div className="email-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email."
                    // value={email}
                    // onChange={(e) => {
                    //   setEmail(e.target.value);
                    // }}

                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>
              <div className="form-password">
                <div className="password-label">
                  <label htmlFor="password">Create a password</label>
                </div>
                <div className="password-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create a password"
                    // value={password}
                    // onChange={(e) => {
                    //   setPassword(e.target.value);
                    // }}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </div>
              <NavLink className="forget">Forgot your password?</NavLink>
              <div className="remember-login">
                <div className="remember">
                  <input type="checkbox" name="remember" />
                  <label id="remember" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div className="login-btn">
                  <button
                    type="submit"
                
                    className="login-btn"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </StyledLoginForm>
        </div>
      </div>
    </>
  );
}
