import React, { useState } from "react";
import { HomeHero, PowerCard, PremiumPlan } from "../Style/Premium.style";
import { NavLink } from "react-router-dom";
import MusicCard from "../MyComponents/MusicCard";
import PremiumPlanCard from "../MyComponents/PremiumPlanCard";
import Music from "../Services/MusicCardData";
import PremiumPlanData from "../Services/PremiumPlanCardData";
import upiImg from "../Assets/upi.svg";
import paytmImg from "../Assets/paytm.svg";
import visaImg from "../Assets/visa.svg";
import mastercardImg from "../Assets/mastercard.svg";
import annexImg from "../Assets/amex.svg";
import dinersImg from "../Assets/diners.svg";

export default function Premium() {
  const [musicData, setMusicData] = useState(Music);
  const [premiumCardData, setPremiumCardData]= useState(PremiumPlanData);

  return (
    <div className="home-wrapper">
      {/*********** HOME HERO SECTION STARTS ***************/}
      <HomeHero>
        <div className="container">
          <div className="hero-content">
            <div className="title">
              <h1>Get Premium free for 1 month</h1>
            </div>
            <div className="para">
              <h2>
                Just ₹119/month after. Debit and credit cards accepted. Cancel
                anytime.
              </h2>
            </div>
            <div className="buttons">
              <div className="btn1">
                <button className="started">GET STARTED</button>
              </div>
              <div className="btn2">
                <button className="plans">SEE OTHER PLANS</button>
              </div>
            </div>
            <footer>
              <p>
                <NavLink>Terms and conditions apply.</NavLink> 1 month free not
                available for users who have already tried Premium.
              </p>
            </footer>
          </div>
        </div>
      </HomeHero>

      {/*********** HOME HERO SECTION ENDS ***************/}

      {/*********** POWER CARD SECTION STARTS ***************/}

      <PowerCard>
        <div className="container">
          <div className="power-card-content">
            <div className="heading">
              <h2>The power of Premium</h2>
            </div>
          </div>
          <ul className="card-list">
            <MusicCard musicData={musicData} />
          </ul>
        </div>
      </PowerCard>

      {/*********** POWER CARD SECTION ENDS ***************/}

      {/*********** PREMIUM PLANS SECTION STARTS ***************/}

      <PremiumPlan>
        <div className="container">
          <div className="pp-content">
            <div className="pp-heading">
              <div className="pp-label">
                <h2>Pick your Premium</h2>
              </div>
              <div className="pp-para">
                <h3>
                  Listen without limits on your phone, speaker, and other
                  devices.
                </h3>
              </div>
              <div className="pp-payment-methods">
                <ul className="pp-list">
                  <li>
                    <div className="upi-img">
                      <img src={upiImg} alt="upi-img" id="upi-img" />
                    </div>
                  </li>
                  <li>
                    <div className="paytm-img">
                      <img src={paytmImg} id="paytm-img" alt="paytm-img" />
                    </div>
                  </li>
                  <li>
                    <div className="visa-img">
                      <img src={visaImg} alt="visa-img" id="visa-img" />
                    </div>
                  </li>
                  <li>
                    <div className="mastercard-img">
                      <img
                        src={mastercardImg}
                        alt="mastercard-img"
                        id="mastercard-img"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="annex-img">
                      <img src={annexImg} alt="annex-img" id="annex-img" />
                    </div>
                  </li>
                  <li>
                    <div className="diners-img">
                      <img src={dinersImg} alt="diners-img" id="diners-img" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pp-card">
             
                <PremiumPlanCard premiumCardData = {premiumCardData} />
              
            </div>
          </div>
        </div>
      </PremiumPlan>

      {/*********** PREMIUM PLANS SECTION ENDS ***************/}
    </div>
  );
}
