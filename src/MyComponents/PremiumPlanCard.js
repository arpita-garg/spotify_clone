import React from "react";
import { NavLink } from "react-router-dom";

export default function PremiumPlanCard({premiumCardData}) {
  return (
    <>
    {premiumCardData.map((currentElement) => {
      return(
        <>
        <div className="card">
        <div className="container">
          <div className="card-body">
          
          {console.log('currentElement' , currentElement)}
            <div className="avail-name">
              {currentElement.nasa && 
              
            <button className="free">
                <span>
                {currentElement.nasa}
                </span>
              </button>
              }
            <div className="plan-avail">{currentElement.avail}</div>
            <div className="pp-name">
              

              <h3 className="mini">{currentElement.mini}</h3>
              <p className="pp-name1">{currentElement.name1}</p>
              <p className="pp-name2">{currentElement.nam}</p>
              <p className="pp-name3">{currentElement.name3}</p>
              <hr />
            </div>
            </div>
            <div className="pp-ul">
            <ul className="pp-card-list">
              <li>
                <p className="pp-card-para">
                  {currentElement.para1}
                </p>
              </li>
              <li>
                <p className="pp-card-para">{currentElement.para2}</p>
              </li>
              <li>
                <p className="pp-card-para">
                  {currentElement.para3}
                </p>
              </li>
              <li>
                <p className="pp-card-para">{currentElement.para4}</p>
              </li>
              <li>
                <p className="pp-card-para">{currentElement.para5}</p>
              </li>
            </ul>
            </div>
            <div className="btn-tc">
            <div className="button">
              <button id="pp-btn">View Plans</button>
            </div>
            <div className="terms-condns">
              <p className="pp-tc">
                <NavLink>{currentElement.tc}</NavLink>
                <p className="ppTC-link">
                  {currentElement.ptc}
                </p>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )
    })}
      {/* <div className="card">
        <div className="container">
          <div className="card-body">
            <div className="plan-avail">One-time plans available</div>
            <div className="pp-name">
              <NavLink>
                <span>

                </span>
              </NavLink>

              <h3 className="mini">Mini</h3>
              <p className="pp-name1">From ₹7/day</p>
              <p className="pp-name2">1 account on mobile only</p>
              <p className="pp-name3"></p>
              <hr />
            </div>
            <ul className="pp-card-list">
              <li>
                <p className="pp-card-para">
                  Ad-free music listening on mobile
                </p>
              </li>
              <li>
                <p className="pp-card-para">Group Session</p>
              </li>
              <li>
                <p className="pp-card-para">
                  Download 30 songs on 1 mobile device
                </p>
              </li>
              <li>
                <p className="pp-card-para"></p>
              </li>
              <li>
                <p className="pp-card-para"></p>
              </li>
            </ul>
            <div className="button">
              <button id="pp-btn">View Plans</button>
            </div>
            <div className="terms-condns">
              <p className="pp-tc">
                <NavLink>Terms and Conditions apply.</NavLink><p className="ppTC-link"></p>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
