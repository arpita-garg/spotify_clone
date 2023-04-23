import React from "react";


export default function LayoutCard(albumData) {
  const albumMap = albumData.map((item) => {
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="card-img">
                <img src={item.photo} alt="piano-img" id="piano-img" />
              </div>
            </div>
            <div className="card-content">
              <div className="container">
                <h4>{item.head}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });                                      
  return (
    <>
      {/* <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-img">
            <img src={Album[0].photo} alt="piano-img" id="piano-img" />
            
          </div>
        </div>
        <div className="card-content">
          <div className="container">
          <h4>{Album[0].head}</h4>
          <p>{Album[0].para}</p>
          </div>
       
        </div>
      </div>
     </div> */}
     <div>{albumMap}</div>
    </>
  );
}
