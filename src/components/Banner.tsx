import React from 'react';
import RightArrow from "../images/icon-arrow.svg"

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <h1>IP Address Tracker</h1>
                <div className="search__box">
                <input type="text" name="number" className="input" placeholder="Search for any IP address.."/>
                <button className="input__btn">
                        <img src={RightArrow} alt="search-arrow"/>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
