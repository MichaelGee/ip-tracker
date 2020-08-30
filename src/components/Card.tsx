import React from 'react'

const Card = () => {
    return (
        <div className="card-container">
          <div className="card">
           <div className="ip">
             <p>IP ADDRESS</p>
             <p className="data">192.212.174.101</p>
           </div>
           <div className="address">
             <p>ADDRESS</p>
             <p className="data">Booklyn, New York</p>
           </div>
           <div className="timezone">
             <p>TIMEZONE</p>
             <p className="data">GMT -01:00</p>
           </div>
           <div className="isp">
             <p>ISP</p>
             <p className="data">SpaceX Starlink</p>
           </div>
          </div>  
        </div>
    )
}

export default Card
