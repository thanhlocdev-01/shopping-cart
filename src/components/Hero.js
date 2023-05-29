import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';
import img1 from '../img/header/home-img-1.jpg';
import img2 from '../img/header/home-img-2.jpg';
import img3 from '../img/header/home-img-3.jpg';
import img4 from '../img/header/home-img-4.jpg';

function Hero() {
    return (
        <>
            <div className="home-container">
                <div className="container">
                    <div className="grid-container">
                        <div className="featured grid-one">
                            <Link to="/">
                              <div id='img1' className="lil-overlay"></div>
                              <img src={img1} alt=""></img>
                              <p className='main-description'>Live Comfortably</p>
                            </Link>
                        </div>
                        <div className="featured grid-two">
                            <Link to="/">
                              <div id='img2' className="lil-overlay"></div>
                              <img src={img2} alt=""></img>
                              <p className='main-description'>Skincare</p>
                            </Link>
                        </div>
                        <div className="featured grid-four">
                            <Link to="/">
                                <div id='img3' className="lil-overlay"></div>
                                <img src={img3} alt=""></img>
                                <p className='main-description'>Kitchen</p>
                            </Link>
                        </div>
                        <div className="featured grid-four-low">
                            <Link to="/">
                                <div id='img4' className="lil-overlay"></div>
                                <img src={img4} alt=""></img>
                                <p className='main-description'>Electronics</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
