import styled from "styled-components";
export const StyledSignupDiv = styled.div`
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

  .heading {
    margin-top: 20px;
  }

  .facebook_signup-button {
    margin-top: 20px;
  }

  button.facebook {
    background-color: #3b5998;
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
    width: 50%;
    margin: auto;
  }

  img#fb {
    width: 15%;
  }

  span.fb-sign {
    font-weight: bold;
  }

  .google_signup-button {
    margin-top: 20px;
    margin-bottom: 25px;
  }

  button.google {
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
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
    color: black;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
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

export const StyledForm = styled.div`
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

  .alter.nav-link {
    color: #117a37;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
  }

  .form-confirm-email {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    padding-block-end: var(--spacer-1, 24px);
    margin-top: 20px;
  }

  .confirm-email-label,
  .password-label,
  .profile-name-label,
  .dob-label,
  .gender-label {
    font-size: 0.875rem;
    font-weight: 700;
    padding-block-end: var(--spacer--2, 8px);
  }

  .form-password,
  .form-profile-name,
  .form-dob,
  .form-gender,
  .form-check1,
  .form-check2 {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    padding-block-end: var(--spacer-1, 24px);
  }

  .profile-alt {
    margin-top: 3px;
  }

  span.profile-alt-text {
    font-weight: 600;
  }

  .dob-input {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .date-label,
  .year-label,
  .month-label {
    font-size: 0.875rem;
    font-weight: 600;
    padding-block-end: var(--spacer--2, 8px);
  }

  #year {
    width: 60%;
  }
  .month-input-label{
    width: 50%.n;
  }

  .month-input {
    margin-right: 20px;
  }

 select#month {
    width: 100%;
  }

  #date {
    width: 45%;
  }

  #year,
  #month,
  #date {
    appearance: none;
    border: 0px;
    font-size: 1rem;
    border-radius: var(--border-radius-md, 4px);
    padding-inline: 14px;
    padding-block-start: var(--spacer--2, 8px);
    padding-block-end: var(--spacer--2, 8px);
    min-block-size: var(--control-size-md, 48px);
    background-color: var(--background-base, #ffffff);
    box-shadow: inset 0 0 0 1px var(--essential-subdued, #878787);
    color: var(--text-base, #000000);
  }

  .gender-input {
    display: flex;
    flex-wrap: wrap;
  }

  .male-input,
  .female-input,
  .Non-binary-input,
  .other-input,
  .prefer-not-to-say-input {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    position: relative;
    min-block-size: 32px;
  }

  input[type="radio"] {
    width: 30px;
  }

  span.male-gender,
  span.female-gender,
  span.non-binary-gender,
  span.prefer-not-to-say-gender,
  span.other-gender,
  span.check1-title,
  span.check2-title {
    font-weight: 600;
  }

  .form-check1 {
    display: flex;
    flex-direction: row;
  }

  input[type="checkbox"] {
    margin-top: -16px;
    margin-right: 10px;
  }

  .signup-btn-tc {
    text-align: center;
  }

  p.tc,
  p.policy {
    margin-block: 0px;
    font-size: 0.6875rem;
    padding-block-end: 12px;
    font-weight: 500;
  }

  a.nav-link {
    color: #1db954;
    text-decoration: underline;
  }

  .signup-button {
    text-align: center;
    width: 50%;
    margin: auto;
    margin-bottom: 24px;
  }

  button {
    font-size: 1.125rem;
    font-weight: 700;
    border: 0px;
    border-radius: 500px;
    position: relative;
    box-sizing: border-box;
    background-color: var(--background-base, #1ed760);
    color: var(--text-base, #000000);
    display: flex;
    min-block-size: 56px;
    align-items: center;
    padding-inline: 48px;
  }

  p.login-account {
    font-weight: 500;
    font-size: 16px;
    color: black;
}
`;
