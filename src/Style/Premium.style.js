import styled from "styled-components";

export const HomeHero = styled.div`
  background-color: rgb(29, 117, 222);

  .container {
    display: flex;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    padding-top: 73px;
    padding-bottom: 83px;
    text-align: inherit;
    color: white;
  }

  .title {
    margin-top: 25px;
  }

  h1 {
    font-size: 40px;
    line-height: 1.2;
    margin: 0px;
    padding: 0px;
    font-weight: 900;
    max-width: 100%;
    display: inline-block;
  }

  .para {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    padding: 0px;
    max-width: 100%;
    display: inline-block;
  }

  .buttons {
    display: flex;
    margin-top: 35px;
  }

  .btn1 {
    margin-right: 20px;
  }

  button {
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 500px;
  }

  button.started {
    background-color: black;
    border: 2px solid black;
  }

  button.plans {
    background-color: transparent;
    border: 2px solid white;
  }

  footer {
    margin-top: 40px;
    font-size: 11px;
  }

  a.active {
    color: #ffffff;
  }
`;

export const PowerCard = styled.div`
  .power-card-content {
    text-align: center;
  }

  .heading {
    margin-bottom: 72px;
    margin-top: 72px;
  }

  h2 {
    font-size: 40px;
  }

  .card {
    margin-bottom: 72px;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
  }
  li {
    list-style-type: none;
  }

  .card-content {
    margin-top: 20px;
  }

  img#powerCard1 {
    width: 10rem;
  }

  p.free-music {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 21px;
    padding: 0px;
    line-height: 1.3em;
  }

  p.enjoy-music {
    font-size: 16px;
    line-height: 1.5;
    padding: 0px;
    width: 12rem;
  }


`;

export const PremiumPlan = styled.div`
  background-color: whitesmoke;

  h2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: -1.6px;
  }

  .pp-content {
    padding-top: 72px;
    text-align: center;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
    margin: 10px 0px;
    text-align: center;
    padding: 0px;
    line-height: 24px;
  }

  .pp-payment-methods {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 16px;
    padding-bottom: 50px;
  }

  ul.pp-list {
    display: flex;
  }

  li {
    list-style-type: none;
    margin-bottom: 10px;
  }

  img#diners-img {
    width: 10%;
    margin-right: 0px;
    width: 29px;
    height: 20px;
  }

  .pp-card{
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
  }

  .card {
    background-color: white;
    height: 600px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 8px;
    margin-bottom: 20px;
    margin-right: 25px;
    border-radius: 8px;
  }

  .card-body {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .avail-name{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 160px;
  }

  
button.free {
    width: 50%;
    margin-bottom: 10px;
    background-color: rgb(13, 114, 234);
    text-align: center;
    color: white;
    border-radius: 8px;
    border: 2px solid;
    font-weight: bold;
    font-size: 14px;
    padding: 2px;
}

  .plan-avail {
    border: 1px solid #0d72ea;
    color: #0d72ea;
    font-weight: 900;
    border-radius: 4px;
  }

  h3.mini {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: start;
  }

  p.pp-name1 {
    font-size: 17px;
    line-height: 22px;
    font-weight: 500;
    text-align: start;
  }

  p.pp-name2 {
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 2px;
    text-align: start;
  }

  hr {
    margin-top: 30px;
    border-color: rgb(204, 204, 204);
    margin-bottom: 10px;
  }

  .pp-ul{
    height: 160px;
  }

  ul.pp-card-list {
    padding-bottom: 16px;
    list-style: none;
    margin-top: 0px;
    padding-top: 20px;
  }

  p.pp-card-para {
    text-align: start;
    font-size: 17px;
    font-weight: 500;
  }

  .btn-tc{
    display: flex;
    flex-direction: column;
  }

  .button{
    margin-top: 45px;
  }

  button#pp-btn {
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: 700;
    border-radius: 22px;
    width: 200px;
    padding-top: 12px;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 12px;
  }

  .terms-condns {
    margin-top: 20px;
    margin-bottom: 30px;
}

  a.active {
    color: black;
  }

  p.pp-tc {
    font-size: 16px;
    font-weight: normal;
}
`;
