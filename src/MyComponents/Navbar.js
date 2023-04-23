import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";
import { StyledNavDiv } from "../Style/Navbar.style";
import spotify from "../Assets/Spotify-emblem.jpg";
import { NavLink } from "react-router-dom";
import Signup from "../Autho/Signup";
import Login from "../Autho/Login";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLoginOpen, setIsModaLoginOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showLoginModal = () => {
    setIsModaLoginOpen(true);
  }
  const handleLoginOk = () => {
    setIsModaLoginOpen(false);
  }
  const handleLoginCancel = () => {
    setIsModaLoginOpen(false);
  }
  return (
    <>
      <StyledNavDiv className="Navbar-wrapper">
        <nav>
          <div className="nav-list">
            <div className="logo">
              <div className="spotify-img">
                <img src={spotify} id="spotify-logo" alt="spotify-logo"></img>
              </div>
              <div className="spotify-title">Spotify</div>
            </div>
            <div className="list">
              <ul className="menu">
                <li>
                  <NavLink className="list-item" to="/">
                    Premium
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-item" to="/support">
                    Support
                  </NavLink>
                </li>
                <li>
                  <NavLink className="list-item" to="/download">
                    Download
                  </NavLink>
                </li>
                <li className="separator">|</li>
                <li>
                  <NavLink className="list-item" onClick={showModal}>
                    Sign up
                  </NavLink>
                  
                  <Modal
                    title="Sign Up"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Signup data={showLoginModal}></Signup>
                  </Modal>
                </li>
                <li>
                  <NavLink className="list-item" onClick={showLoginModal}>
                  Login
                  </NavLink>
                  <Modal
                      title="Login"
                      open={isModalLoginOpen}
                      onOk={handleLoginOk}
                      onCancel={handleLoginCancel}
                    >
                      <Login></Login>
                    </Modal>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </StyledNavDiv>
    </>
  );
}
