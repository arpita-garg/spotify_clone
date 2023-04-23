import React from "react";
import { StyledSideNavbar } from "../Style/LayoutSpotifyStyle";
import spotifyLogo from "../Assets/Spotify-emblem.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-bootstrap";

export default function LayoutSideNavbar() {
  return (
    <>
      <div className="container">
        <StyledSideNavbar>
          <div className="logo">
            <div className="spotify-img">
              <img src={spotifyLogo} alt="spotify-logo" id="spotify-logo" />
            </div>
            <div className="spotify-title">Spotify</div>
          </div>
          <div className="sideNavList1">
            <ul className="sideMenu1">
              <li>
                <div className="home">
                  <div className="home-icon">
                    <FontAwesomeIcon icon={faHouse} size="lg" />
                  </div>
                  <div className="home-title">
                    <NavLink>Home</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <div className="search">
                  <div className="search-icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                  </div>
                  <div className="search-title">
                    <NavLink className="searchLink">Serach</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <div className="library">
                  <div className="library-icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div className="library-title">
                    <NavLink className="libLink">Your Library</NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="sideNavList2">
            <ul className="sideMenu2">
              <li>
                <div className="playlist">
                  <div className="playlist-icon">
                    <FontAwesomeIcon icon={faSquarePlus} size="lg" />
                  </div>
                  <div className="playlist-title">
                    <NavLink className="playlist-link">Create Playlist</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <div className="liked">
                  <div className="liked-icon">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <div className="liked-title">
                    <NavLink className="likedLink">Liked Songs</NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="sideNavList3">
            <ul className="sideMenu3">
              <li>
                <div className="legal">
                  <NavLink>
                    <span>Legal</span>
                  </NavLink>
                </div>
              </li>

              <li>
                <div className="privacy-centre">
                  <NavLink>
                    <span>PrivacyCentre</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="sideNavList4">
            <ul className="sideMenu4">
              <li>
                <div className="privacy-policy">
                  <NavLink>
                    <span>PrivacyPolicy</span>
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="cookies">
                  <NavLink>
                    <span>Cookies</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="sideNavList5">
            <ul className="sideMenu5">
              <li>
                <div className="ads">
                  <NavLink>
                    <span>About Ads</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="sideNavList6">
            <ul className="sideMenu5">
              <li>
                <div className="cookie">
                  <NavLink>
                    <span>Cookies</span>
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="eng-btn">
            <button>
              <div className="btn-content">
                <div className="globe-icon">
                <FontAwesomeIcon icon={faGlobe} size="lg" />
                </div>
                <div className="eng-title">
                  <NavLink>English</NavLink>
                </div>
              </div>
            </button>
          </div>

        </StyledSideNavbar>
      </div>
    </>
  );
}
