import React from "react";

import logo from '../images/logo.svg';
import backGround from '../images/backGround.svg';
import facebook from "../images/facebook.svg";
import firstSoup from "../images/firstSoup.svg"
import sickMan from "../images/sickMan.svg";
import soupCar from "../images/soupCar.svg"

import Carousel from "../components/Carousel/Carousel.js";





function Intro() {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundImage: "url(" + backGround + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}  >
                <img alt="logo" src={logo} />
                <Carousel />
                {/*  {               <div class="container" style={{ width: "auto", height: "auto" }}>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
             
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active" style={{ backgroundColor: "#FFA702" }}></li>
                            <li data-target="#myCarousel" data-slide-to="1" style={{ backgroundColor: "#FFA702" }}></li>
                            <li data-target="#myCarousel" data-slide-to="2" style={{ backgroundColor: "#FFA702" }}></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="item active">
                                <img src={firstSoup} alt="Los Angeles" style={{ width: "100%" }} />
                                <div class="carousel-caption">
                                </div>
                                <h3 style={{ color: "#FFA702" }}>Craving a soup?</h3>
                            </div>

                            <div class="item">
                                <img src={sickMan} alt="Chicago" style={{ width: "100%" }} />
                                <div class="carousel-caption">
                                </div>
                                <h3 style={{ color: "#FFA702" }}>Having a friend in need of a boost?</h3>
                            </div>

                            <div class="item">
                                <img src={soupCar} alt="New York" style={{ width: "100%" }} />
                                <div class="carousel-caption">
                                </div>
                                <h3 style={{ color: "#FFA702" }}>We deliver the soup!</h3>
                            </div>

                        </div>

                    </div>
                </div >}  */}

                <input style={{ border: 0, outline: 0, background: "transparent", borderBottom: "1px solid black" }} placeholder="+46 737 668 110"></input>
                <img alt="connect with facebook" src={facebook} />
            </header>
        </div>
    )
}

export default Intro
