import React from "react";

import logo from '../images/logo.svg';
import backGround from '../images/backGround.svg';
import facebook from "../images/facebook.svg";

import Carousel from "../components/Carousel/Carousel.js";





function Intro() {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundImage: "url(" + backGround + ")", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition: "bottom" }}  >
                <img alt="logo" src={logo} style={{ width: "50%" }} />
                <Carousel />
                <input style={{ border: 0, outline: 0, background: "transparent", borderBottom: "1px solid black" }} placeholder="+46 737 668 110"></input>
                <p style={{ color: "#404040" }}> or </p>
                <img alt="connect with facebook" src={facebook} style={{ width: "70%" }} />
            </header>
        </div>
    )
}

export default Intro
