import React from 'react'

export default function MusicCard({musicData}) {
  console.log(musicData);
  return (
    <>
    {musicData.map((currEle)=> {
      return(
        <>
        <li>
        <div className="card">
            <div className="card-body">
              <div className="card-img">
                <img src={currEle.photo}  alt="powerCard1" id="powerCard1"></img>
              </div>
              <div className="card-content">
                <p className="free-music"  >  {currEle.title} </p>
                <p class="enjoy-music">{currEle.para}</p>
              </div>
            </div>
        </div>
        
        </li>
    </>
      )
    })}
    
     </>
  )
}
