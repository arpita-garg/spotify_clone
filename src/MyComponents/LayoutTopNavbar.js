import React from "react";
import { StyledTopNavbar } from "../Style/LayoutSpotifyStyle";
import { NavLink } from "react-bootstrap";

export default function LayoutTopNavbar() {
  return (
    <>
      <div className="container">
        <StyledTopNavbar>
          <div className="topNavList">
            <ul className="topMenu">
              <li>
                <div className="premium">
                  <NavLink>Premium</NavLink>
                </div>
              </li>
              <li>
                <div className="support">
                  <NavLink>Support</NavLink>
                </div>
              </li>
              <li>
                <div className="download">
                  <NavLink>Download</NavLink>
                </div>
              </li>
              <li>
                <div className="divider">
                  |
                </div>
              </li>
              <li>
                <div className="signUp">
                  <NavLink>Sign up</NavLink>
                </div>
              </li>
              <li>
                <div className="login-btn">
                  <button>
                    Login
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </StyledTopNavbar>
      </div>
    </>
  );
}
