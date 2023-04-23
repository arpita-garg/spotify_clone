import React, { useEffect, useState } from "react";
import { StyledMainContent } from "../Style/LayoutSpotifyStyle";
import { NavLink } from "react-bootstrap";
import Album from "../Services/LayoutAlbumData";
// import { Layout } from 'antd'
import LayoutCard from "./LayoutCard";

export default function LayoutMainContent() {
  const [albumData, setAlbumData]= useState();
  useEffect(()=>{
    setAlbumData(Album);
  },[])
  return (
    <>
      <div className="container">
        <StyledMainContent>
          <div className="music-albums">
            <div className="focus-title">
              <div className="focus">
                <NavLink>
                  <span>Focus</span>
                </NavLink>
              </div>
              <div className="show-all">
                <NavLink>
                  <span>Show all</span>
                </NavLink>
              </div>
            </div>
            <div className="album-card">
              <ul className="album-card-list">
                <LayoutCard albumData= {albumData} />
              </ul>
            </div>
          </div>
        </StyledMainContent>
      </div>
    </>
  );
}
