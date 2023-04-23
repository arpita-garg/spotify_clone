import React from "react";
import { useFormik } from "formik";

import { StyledSignupDiv, StyledForm } from "../Style/Signup.style";
import blackLogo from "../Assets/blacklogo.png";
import fb from "../Assets/facebook.png";
import google from "../Assets/google.jpg";
import { NavLink } from "react-bootstrap";
import { validationSignup } from "./Validation";

export default function Signup(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      gender: "",
      year: "",
      month: "",
      date: "",
    },

    
    validationSchema: validationSignup,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
    // ,

    // validate: (values) => {
    //   // values.name, values.gender, values.password, values.month
    //   // errors.name, errrors.gender, errors.password, errors.month
    //   // errors.name = "This field is required"
    //   //(!values.name) Means is the name field is empty.

    //   const errors = {};

    //   if (!values.email) {
    //     errors.email = "Email Address is Required, Can't be Empty";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email address";
    //   }

    //   if (!values.confirm) {
    //     errors.name = "Please confirm your Email Address";
    //   }

    //   if (!values.password) {
    //     errors.password = "Reqired, Can't be Empty";
    //   }
    //   else if(values.password.length<8){
    //     errors.password = "Must have aleast 8 characters"
    //   }

    //   if (!values.name) {
    //     errors.name = "Reqired, Can't be Empty";
    //   }

    //   if (!values.year) {
    //     errors.year = "Reqired, Can't be Empty";
    //   }

    //   if (!values.month) {
    //     errors.month = "Reqired, Choose any one";
    //   }

    //   if (!values.date) {
    //     errors.date = "Reqired, Can't be Empty";
    //   }

    //   if (!values.gender) {
    //     errors.gender = "Reqired, Choose any one";
    //   }

    //   return errors;
    // },
  });

  console.log(formik.errors);

  return (
    <>
      <div className="form-wrapper">
        <div className="container">
          <StyledSignupDiv>
            <div className="header-img-heading">
              <div className="logo-spotify">
                <img src={blackLogo} alt="black-logo" id="black-logo" />
                <span className="title"> Spotify</span>
              </div>
              <div className="heading">
                <h2>Sign up for free to start listening.</h2>
              </div>
            </div>
            <div className="facebook_signup-button">
              <button className="facebook">
                <div className="img-photo">
                  <img src={fb} alt="fb" id="fb" />
                  <span className="fb-sign">Sign up with Facebook</span>
                </div>
              </button>
            </div>
            <div className="google_signup-button">
              <button className="google">
                <div className="google-icon">
                  <img src={google} alt="google" id="google" />
                  <NavLink>
                    <span className="google-sign">Sign up with Google</span>
                  </NavLink>
                </div>
              </button>
            </div>
            <span className="formDivider">or</span>
          </StyledSignupDiv>
          <StyledForm>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-email">
                <div className="form-email-label">
                  <label htmlFor="email">Whats's your email?</label>
                </div>
                <div className="email-input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email."
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <NavLink className="alter">
                  <span className="alt">Use your phone number instead.</span>
                </NavLink>
              </div>
              <div className="form-confirm-email">
                <div className="confirm-email-label">
                  <label htmlFor="confirm">Confirm your email.</label>
                </div>
                <div className="confirm-email-input">
                  <input
                    type="email"
                    name="confirm"
                    id="confirm"
                    placeholder="Enter your email again."
                    onChange={formik.handleChange}
                    value={formik.values.confirm}
                  />
                  {formik.errors.confirm ? (
                    <div>{formik.errors.confirm}</div>
                  ) : null}
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
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-profile-name">
                <div className="profile-name-label">
                  <label htmlFor="name">What should we call you?</label>
                </div>
                <div className="profile-name-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter a profile name."
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
                <div className="profile-alt">
                  <span className="profile-alt-text">
                    This appears on your profile
                  </span>
                </div>
              </div>
              <div className="form-dob">
                <div className="dob-label">
                  <label htmlFor="dob">What's your date of birth?</label>
                </div>
                <div className="dob-input">
                  <div className="year-input-label">
                    <div className="year-label">
                      <label htmlFor="year">Year</label>
                    </div>
                    <div className="year-input">
                      <input
                        type="text"
                        id="year"
                        name="year"
                        placeholder="YYYY"
                        onChange={formik.handleChange}
                        value={formik.values.year}
                      />
                      {formik.errors.year ? (
                        <div>{formik.errors.year}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="month-input-label">
                    <div className="month-label">
                      <label htmlFor="month">Month</label>
                    </div>
                    <div className="month-input">
                      <select
                        name="month"
                        id="month"
                        onChange={formik.handleChange}
                        value={formik.values.month}
                      >
                        <option selected disabled value>
                          Month
                        </option>
                        <option value="January" name="month">
                          January
                        </option>
                        <option value="February" name="month">
                          February
                        </option>
                        <option value="March" name="month">
                          March
                        </option>
                        <option value="April" name="month">
                          April
                        </option>
                        <option value="May" name="month">
                          May
                        </option>
                        <option value="June" name="month">
                          June
                        </option>
                        <option value="July" name="month">
                          July
                        </option>
                        <option value="August" name="month">
                          August
                        </option>
                        <option value="September" name="month">
                          September
                        </option>
                        <option value="October" name="month">
                          October
                        </option>
                        <option value="November" name="month">
                          November
                        </option>
                        <option value="December" name="month">
                          Decemmber
                        </option>
                      </select>
                      {formik.errors.month ? (
                        <div>{formik.errors.month}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="date-input-label">
                    <div className="date-label">
                      <label htmlFor="date">Date</label>
                    </div>
                    <div className="date-input">
                      <input
                        type="text"
                        id="date"
                        placeholder="DD"
                        name="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                      />
                      {formik.errors.date ? (
                        <div>{formik.errors.date}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-gender">
                <div className="gender-label">
                  <label htmlFor="gender">What's your gender?</label>
                </div>
                <div className="gender-input">
                  <div className="male-input">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      onChange={formik.handleChange}
                      value="male"
                    />
                    <label htmlFor="male">
                      <span className="male-gender">Male</span>
                    </label>
                  </div>
                  <div className="female-input">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={formik.handleChange}
                      value="female"
                    />
                    <label htmlFor="female">
                      <span className="female-gender">Female</span>
                    </label>
                  </div>
                  <div className="Non-binary-input">
                    <input
                      type="radio"
                      id="non-binary"
                      name="gender"
                      onChange={formik.handleChange}
                      value="Non-binary-input"
                    />
                    <label htmlFor="non-binary">
                      <span className="non-binary-gender">Non-binary</span>
                    </label>
                  </div>
                  <div className="other-input">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      onChange={formik.handleChange}
                      value="others"
                    />
                    <label htmlFor="other">
                      <span className="other-gender">Other</span>
                    </label>
                  </div>
                  <div className="prefer-not-to-say-input">
                    <input
                      type="radio"
                      id="prefer-not-to-say"
                      name="gender"
                      onChange={formik.handleChange}
                      value="prefer-not-to-say"
                    />
                    {formik.errors.gender ? (
                      <div>{formik.errors.gender}</div>
                    ) : null}
                    <label htmlFor="prefer-not-to-say">
                      <span className="prefer-not-to-say-gender">
                        Prefer not to say
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-check1">
                <input type="checkbox" />
                <label htmlFor="check1">
                  <span className="check1-title">
                    I would prefer not to receive marketing messages from
                    Spotify
                  </span>
                </label>
              </div>
              <div className="form-check2">
                <input type="checkbox" />
                <span className="geemark"></span>
                <label htmlFor="check2">
                  <span className="check2-title">
                    Share my registration data with Spotify's content providers
                    for marketing purposes.
                  </span>
                </label>
              </div>
              <div className="signup-btn-tc">
                <p className="tc">
                  <span className="terms-condns">
                    By clicking on sign-up, you agree to Spotify's.
                  </span>
                  <span className="nav-tc">
                    <NavLink> Terms and Conditions of Use.</NavLink>
                  </span>
                </p>
                <p className="policy">
                  <span className="privacy-policy">
                    To learn more about how Spotify collects, uses, shares and
                    protects your personal data, please see.
                  </span>
                  <span className="nav-policy">
                    <NavLink> Spotify's Privacy Policy</NavLink>
                  </span>
                </p>
                <div className="signup-button">
                  <button type="submit" onClick={props.data}>Sign up</button>
                </div>
                <p className="login-account">
                  <span className="account">Have an account? </span>
                  <NavLink to="/login">Log in.</NavLink>
                </p>
              </div>
            </form>
          </StyledForm>
        </div>
      </div>
    </>
  );
}
