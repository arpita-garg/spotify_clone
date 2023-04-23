import React from 'react'
import LayoutSideNavbar from '../MyComponents/LayoutSideNavbar'
import LayoutMainContent from '../MyComponents/LayoutMainContent'
import LayoutFooter from '../MyComponents/LayoutFooter'
import LayoutTopNavbar from '../MyComponents/LayoutTopNavbar'
import { StyledLayout } from '../Style/LayoutSpotifyStyle'

export default function LayoutSpotify() {
  return (
    <>
        <section>
    <StyledLayout>
     
      <div className="SideNavbar">
      <LayoutSideNavbar></LayoutSideNavbar>
      </div>
   <div className="HomeHero">
        <div className="TopNavbar">
          <LayoutTopNavbar></LayoutTopNavbar>
        </div>
        <div className="MainContent">
          <LayoutMainContent></LayoutMainContent>
        </div>
        <div className="Footer">
        <LayoutFooter></LayoutFooter>
      </div> 
      </div>
      
    </StyledLayout>
    </section>
    </>
  )
}
