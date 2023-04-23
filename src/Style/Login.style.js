import styled from "styled-components";
export const StyledLoginDiv = styled.div`
  .logo-spotify {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
  }

  img#black-logo {
    width: 25%;
  }

  span.title {
    margin-left: 5px;
    font-size: 22px;
    font-weight: bold;
    margin-top: 14px;
  }

  .divider {
    margin-top: 30px;
  }

  .below-divider {
    flex: 3 1 0%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 10px;
    background: white;
    margin-bottom: 15px;
  }

  .below-divider-wrapper{
    max-width: 74%;
    width: 100%;
  }

  .below-divider-content{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .below-divider-heading{
    text-align: center;
    font-weight: bold;
  }

  
  .facebook_signup-button {
    margin-top: 20px;
  }

  button.facebook {
    background-color:  rgb(24, 119, 242);;
    border: 2px solid transparent;
    border-radius: 33px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .img-photo {
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    width: 50%;
    width: max-content;
    width: 70%;
    margin: auto;
  }

  img#fb {
    width: 15%;
  }

  span.fb-sign {
    font-weight: bold;
    text-transform: uppercase;
  }

  
  .google_signup-button {
    margin-top: 20px;
    margin-bottom: 25px;
  }

  button.google {
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .google-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  img#google {
    width: 9%;
  }

  span.google-sign {
    color: grey;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
  }

  button.phone{
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 33px;
    padding-right: 30px;
    padding-left: 30px;
    background-color: white;
    color: black;
    border: 2px solid black;
  }

  span.phone-content{
    font-size: 16px;
    color: grey;
    font-weight: bold;
  }

  
  span.formDivider {
    display: table;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    margin: 0px auto 1em;
    color: rgb(127, 127, 127);
    position: relative;
    text-align: center;
    width: 85%;
  }

  span.formDivider::before,
  span.formDivider::after {
    border-top: 1px solid rgb(204, 204, 204);
    content: "";
    display: table-cell;
    position: relative;
    top: 0.8em;
    width: 42%;
  }
`;

export const StyledLoginForm = styled.div`
.form-email {
    display: flex;
    flex-direction: column;
  }

  .form-email-label {
    font-size: 0.875rem;
    font-weight: 700;
    padding-block-end: var(--spacer--2, 8px);
  }

  input[type="email"],
  input[type="password"],
  input[type="text"] {
    appearance: none;
    border: 0px;
    font-size: 1rem;
    inline-size: 100%;
    border-radius: var(--border-radius-md, 4px);
    padding-inline: 14px;
    padding-block-start: var(--spacer--2, 8px);
    padding-block-end: var(--spacer--2, 8px);
    min-block-size: var(--control-size-md, 48px);
    background-color: var(--background-base, #ffffff);
    box-shadow: inset 0 0 0 1px var(--essential-subdued, #878787);
    color: var(--text-base, #000000);
  }

  .password-label
   {
    font-size: 0.875rem;
    font-weight: 700;
    padding-block-end: var(--spacer--2, 8px);
  }

  .form-password
  {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    padding-block-end: var(--spacer-1, 24px);
  }
  
  .forget.nav-link {
    color: black;
    text-decoration: underline;
    font-size: 15px;
    font-weight: 500;
    padding-block-end: var(--spacer-1,24px);
}

.remember-login, .remember{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.remember-login{
  justify-content: space-around;
}

#remember {
    font-weight: 500;
    font-size: 16px;
    margin-left: 5px;
    margin-top: 3px;
}

button.login-btn {
    background-color: #1ED670;
    border: 2px solid transparent;
    font-size: 16px;
    padding: 10px;
    font-weight: bold;
    padding-right: 30px;
    border-radius: 33px;
    padding-left: 30px;
    /* margin-top: 10px; */
}

`;