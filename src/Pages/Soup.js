import React from "react";

import HalfMoon from "../images/HalfMoon.svg";
import LentilSoup from "../images/lentilsoup.svg";
import SourceBar from "../images/sourcebar.svg";
import Spinach from "../images/spinach.svg";


function Soup() {
    return (
        <div class="SoupPage">
            <img src={HalfMoon} style={{ width: "1700px" }} />
            <img src={LentilSoup} style={{ position: "relative", bottom: "150px", width: "230px" }} />
            <div class="contains" style={{ top: "-500px" }}>
                <h2>Lentil Soup</h2>
                <p>Lentil soup made with yellow lentils and fresh vegetables</p>
                <img src={SourceBar} style={{ width: "500px", top: "300px" }} />
                <p>Ingredients</p>
                <img src={Spinach} style={{ width: "100px", marginRight: "200px" }} /> <p> Spinach</p>

            </div>

        </div>
    )
}

export default Soup