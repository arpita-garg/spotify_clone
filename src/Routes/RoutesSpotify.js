import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from "../MyComponents/Navbar"
import Premium from "../Pages/Premium"
import Support from "../Pages/Support"
import Download from "../Pages/Download"
import LayoutSpotify from "../Layout/LayoutSpotify"

function PublicRoute( {isAuthenticated} ){
if(isAuthenticated !== null){
  return <Navigate to="/LayoutSpotify"/>
}
return <Outlet/>;
}


  // This function is used for Authentication when user's credentials will be invalid.
function PrivateRoute({isAuthenticated}){
if (isAuthenticated === null){
  return <Navigate to= "/" />;
}
return <Outlet/>;
}

export default function RoutesSpotify() {

  let credentials = localStorage.getItem("token");

  return (
    <>
    <BrowserRouter>
      {credentials === null ? <Navbar/> : ""}

      <Routes>
        <Route element = {<PublicRoute isAuthenticated ={credentials}/>}>
          <Route path ="/" element = {<Premium/>}/>
          <Route path ="/support" element = {<Support/>}/>
          <Route path ="/download" elememt = {<Download/>}/>
          </Route>

          <Route element = {<PrivateRoute isAuthenticated={credentials} />} >
            <Route path="/LayoutSpotify" element = {<LayoutSpotify/>}>
              {/* <Route path = "homeSidebar" />
              <Route path = "searchSidebar" />
              <Route path = "yourLibrarySidebar" />
              <Route path = "createPlaylistSidebar" />
              <Route path = "likedSongsSidebar"/> */}
              </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
