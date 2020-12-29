import React from "react";
import dealSoup1 from "../../images/dealSoup1.svg";
import dealSoup2 from "../../images/dealSoup2.svg";
import dealSoup3 from "../../images/dealSoup3.svg";


class CarouselMenu extends React.Component {
    render() {
        return <div className="container" style={{ width: "auto", height: "auto", marginTop: "1000px" }}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active" style={{ backgroundColor: "#00000" }}></li>
                    <li data-target="#myCarousel" data-slide-to="1" style={{ backgroundColor: "#00000" }}></li>
                    <li data-target="#myCarousel" data-slide-to="2" style={{ backgroundColor: "#00000" }}></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={dealSoup1} alt="Los Angeles" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                        </div>
                        <h3 style={{ color: "#FFA702" }}>Craving a soup?</h3>
                    </div>

                    <div className="item">
                        <img src={dealSoup2} alt="Chicago" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                        </div>
                        <h3 style={{ color: "#FFA702" }}>Having a friend in need of a boost?</h3>
                    </div>

                    <div className="item">
                        <img src={dealSoup3} alt="New York" style={{ width: "100%" }} />
                        <div className="carousel-caption">
                        </div>
                        <h3 style={{ color: "#FFA702" }}>We deliver the soup!</h3>
                    </div>

                </div>

                {/* <!-- Left and right controls --> */}
                {/*                 <a class="left carousel-control" href="#myCarousel" data-slide="prev" /> */}
            </div>
        </div >
    }
}

export default CarouselMenu;