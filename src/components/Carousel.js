import React from "react";
import firstSoup from "../images/soupcrave.png";
import sickMan from "../images/ssickMan.png";
import soupCar from "../images/soupTruck.png";


class Carousel extends React.Component {
    render() {
        return <div class="container" style={{ width: "auto", height: "auto" }}>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active" style={{ backgroundColor: "#FFA702" }}></li>
                    <li data-target="#myCarousel" data-slide-to="1" style={{ backgroundColor: "#FFA702" }}></li>
                    <li data-target="#myCarousel" data-slide-to="2" style={{ backgroundColor: "#FFA702" }}></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
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

                {/* <!-- Left and right controls --> */}
                {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev"> */}
            </div>
        </div >
    }
}

export default Carousel;