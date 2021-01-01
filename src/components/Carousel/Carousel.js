import React from "react";
import firstSoup from "../../images/soupcrave.png";
import sickMan from "../../images/ssickMan.png";
import soupCar from "../../images/soupTruck.png";


class Carousel extends React.Component {
    render() {
        return <div className="container" style={{ width: "auto", height: "auto" }}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active" style={{ backgroundColor: "#FFA702" }}></li>
                    <li data-target="#myCarousel" data-slide-to="1" style={{ backgroundColor: "#FFA702" }}></li>
                    <li data-target="#myCarousel" data-slide-to="2" style={{ backgroundColor: "#FFA702" }}></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={firstSoup} alt="Soup" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                        </div>
                        <h3 style={{ color: "#FFA702" }}>Craving a soup?</h3>
                    </div>

                    <div className="item">
                        <img src={sickMan} alt="Sick man" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                        </div>
                        <h3 style={{ color: "#FFA702" }}>Having a friend in need of a boost?</h3>
                    </div>

                    <div className="item">
                        <img src={soupCar} alt="Soup Truck" style={{ width: "100%", backgroundSize: "100%", backgroundPosition: "" }} />
                        <div className="carousel-caption">
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