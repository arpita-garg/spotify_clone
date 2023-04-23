import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .SideNavbar {
    background-color: black;
    width: 20%;
    position: sticky;
  }

  .HomeHero {
    width: 80%;
  }

  .MainContent {
    background-color: #333333;
  }

  .TopNavbar {
    background-color: black;

    position: sticky;
  }

  .Footer {
    background-color: black;

    overflow-y: auto;
  }
`;

export const StyledSideNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .logo {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
  }

  .spotify-img {
    width: 25%;
  }

  img#spotify-logo {
    width: 91%;
  }

  .spotify-title {
    color: white;
    font-size: 26px;
    font-weight: bold;
    font-family: cursive;
    width: 50%;
  }

  .sideNavList1 {
    color: white;
    margin-top: 20px;
  }

  .sideNavList2 {
    color: white;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .sideNavList3 {
    margin-top: 50px;
  }

  .home,
  .search,
  .library,
  .playlist,
  .liked,
  .btn-content {
    display: flex;
    flex-direction: row;
  }

  li {
    list-style-type: none;
    margin-bottom: 15px;
  }

  .home-title,
  .search-title,
  .library-title,
  .playlist-title,
  .liked-title {
    margin-left: 20px;
  }

  a.nav-link {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: 600;
  }

  svg.svg-inline--fa.fa-magnifying-glass,
  svg.svg-inline--fa.fa-square-plus,
  svg.svg-inline--fa.fa-book,
  svg.svg-inline--fa.fa-heart.fa-lg {
    color: gray;
  }

  a.searchLink.nav-link,
  a.libLink.nav-link,
  a.playlist-link.nav-link,
  a.likedLink.nav-link {
    color: gray;
  }

  svg.svg-inline--fa.fa-heart {
    background-color: blue;
    padding: 3px;
  }

  .sideNavList3 {
    color: gray;
  }

  span {
    color: gray;
    font-size: 12px;
  }

  ul.sideMenu3,
  ul.sideMenu4 {
    display: flex;
  }

  .legal,
  .privacy-policy {
    margin-right: 15px;
  }

  button {
    background-color: black;
    padding: 5px;
    align-items: center;
    text-align: 18px;
    border-radius: 27px;
    border: 1px solid white;
  }

  svg.svg-inline--fa.fa-globe.fa-lg {
    color: white;
  }

  .globe-icon {
    width: 50%;
    margin: auto;
    margin-right: 10px;
  }
`;

export const StyledTopNavbar = styled.div`
  ul.topMenu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style-type: none;
    align-items: end;
    padding-bottom: 18px;
  }

  li {
    margin-right: 15px;
  }

  a.nav-link {
    text-decoration: none;
    color: gray;
    font-size: 18px;
    font-weight: bold;
  }

  .divider {
    color: white;
    font-weight: bold;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 20px;
  }

  button {
    padding: 12px;
    border-radius: 20px;
    padding-right: 30px;
    padding-left: 30px;
    border: 2px solid;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export const StyledFooter = styled.div`
  .footer-list {
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: space-between;
    margin-top: 15px;
  }

  .right-list {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
    justify-content: space-evenly;
  }

  .company,
  .communities,
  .usefulLinks {
    margin-top: 10px;
  }

  a.nav-link {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  ul.company-menu,
  ul.communities-menu,
  ul.useful-menu {
    list-style-type: none;
    margin-top: 10px;
  }

  li {
    margin-bottom: 10px;
  }

  span {
    color: gray;
  }

  .left-list {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: flex-end;
  }

  .instagram,
  .twitter,
  .facebook {
    background-color: #5a5a5a;
    padding: 5px;
    height: 35px;
    width: 35px;
    border-radius: 30px;
  }

  hr {
    border: 1px solid gray;
    width: 80%;
    margin: auto;
    color: gray;
    background: gray;
  }

  .footer-divider {
    margin-bottom: 20px;
  }
  .footer-last {
    padding-bottom: 15px;
  }
`;

export const StyledMainContent = styled.div`
.focus-title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  padding-top: 10px;
}

a.nav-link {
    text-decoration: none;
    color: white;
}

ul.album-card-list {
    padding-bottom: 22px;
}

.album-card {
    margin-top: 20px;
  
}

.card {
    width: 26%;
    background-color: #2a2727;
    padding: 8px;
}

img#piano-img {
    width: 100%;
}

h4 {
    color: white;
}

p {
    color: grey;
}


`;