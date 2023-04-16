import styled from "styled-components";

export const StyledNavDiv = styled.div`
  background-color: black;
  color: white;

  .nav-list {
    display: flex;
    justify-content: space-around;
  }

  .logo{
    display: flex;
    justify-content: flex-start;
    width: 18%;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 50px;
  }

  .spotify-img{
    width: 20%;
    margin: auto;
    margin-right: 0px;
  }

  img#spotify-logo {
    width: 100%;
  }

  .spotify-title{
    margin: auto;
    margin-left: 0px;
    font-size: 27px;
    font-weight: 600;
    font-family: cursive;
  }
  
  .list{
    /* margin: auto; */
  }

  li{
    display: inline-block;
    font-size: 16px;
    padding: 28px 24px;
    letter-spacing: 0px;
    line-height: inherit;
    font-weight: 600;
  }
   
  li:hover{
    color: #1ed760;
  }
  
`;
