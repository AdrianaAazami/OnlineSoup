import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CarouselMenu from '../components/CarouselMenu';

import Ramen from '../images/ramensoup.svg';
import soupSoup from '../images/soupsoup.svg';
import greenSoup from '../images/greensoup.svg';
import Lentil from '../images/lentilsoup.svg';
import redSoup from '../images/redsoup.svg';
import seaSoup from '../images/seasoup.svg';
import yellowSoup from '../images/yellowsoup.svg';
import lastSoup from '../images/lastsoup.svg';



function Landing() {
    return (

        <div className="page" >
            <CarouselMenu />
            <p>Menu</p>
            <div className="container">
                <h2>Ramen Soup</h2>
                <img src={Ramen} />
                <p>Spicy noodle soup with chicken <br /> topped with koriander</p>
                {/*  <a href="#" class="myButton">light orange</a> */}
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Minnestrone Soup</h2>
                <img src={soupSoup} />
                <p>Minnestrone soup with freshly cut vegetables and pasta <br /> topped with parmesan cheese</p>
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Broccoli Soup</h2>
                <img src={greenSoup} />
                <p>Creamy Broccoli Soup with spinach and onion</p>
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Lentil Soup</h2>
                <img src={Lentil} />
                <p>Creamy Lentil soup with vegetables and parsley</p>
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Tomato Soup</h2>
                <img src={redSoup} />
                <p>Fresh tomato soup with sour cream and sunflower seeds</p>
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Seafood Soup</h2>
                <img src={seaSoup} />
                <p>Seafood soup with vegetables, clams and shrimps</p>
                <button className="myButton">Take me home!</button>
            </div>
            <div className="container">
                <h2>Mushroom Soup</h2>
                <img src={yellowSoup} />
                <p>Creamy mushroom soup with white wine and parsley </p></div>
            <button className="myButton">Take me home!</button>
            <div className="container">
                <h2>Borscht Soup</h2>
                <img src={lastSoup} />
                <p>Classic Borscht Soup with beets <br /> vegetables and meet</p>
                <button className="myButton">Take me home!</button>
            </div>
        </div>
    );
}

export default Landing;