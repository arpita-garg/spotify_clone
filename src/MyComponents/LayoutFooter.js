import React from "react";
import { StyledFooter } from "../Style/LayoutSpotifyStyle";
import { NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function LayoutFooter() {
  return (
    <>
      {/* <div className="container"> */}
      <StyledFooter>
        <div className="container">
          <div className="footer-list">
            <div className="right-list">
              <div className="company">
                <NavLink>Company</NavLink>
                <ul className="company-menu">
                  <li className="footer">
                    <NavLink>
                      <span>About</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Jobs</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>For the Record</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="communities">
                <NavLink>Communities</NavLink>
                <ul className="communities-menu">
                  <li className="footer">
                    <NavLink>
                      <span>For Artists</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Developers</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Advertising</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Investors</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Vendors</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="usefulLinks">
                <NavLink>Useful Links</NavLink>
                <ul className="useful-menu">
                  <li className="footer">
                    <NavLink>
                      <span>Support</span>
                    </NavLink>
                  </li>
                  <li className="footer">
                    <NavLink>
                      <span>Free Mobile App</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="left-list">
              <div className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </div>
              <div className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="xl" />
              </div>

              <div className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <hr />
        </div>
        <div className="container">
          <div className="footer-last">
            <span>© 2023 Spotify AB</span>
          </div>
        </div>
      </StyledFooter>
    </>
  );
}
