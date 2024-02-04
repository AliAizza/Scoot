import React from "react"
import './Footer.css'
import {Link} from 'react-router-dom'

import app_store from '../assets/icons/app-store.svg'
import google_play from '../assets/icons/google-play.svg'
import semi_circles from '../assets/patterns/semi-circles.svg'
import logo from '../assets/white-logo.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'

function Footer() {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    }
    return (
        <section className="main-footer" id="footer">
            <div className="top">
                <h1>Sign up and Scoot off today</h1>
                <div className="stores">
                    <img src={app_store}/>
                    <img src={google_play}/>
                </div>
                <img src={semi_circles} className="semi-circles"/>
            </div>
            <footer>
                <div className="left">
                    <Link to="/" onClick={ScrollToTop}>
                        <img src={logo}/>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/about" onClick={ScrollToTop}>About</Link>
                        </li>
                        <li>
                            <Link to="/locations" onClick={ScrollToTop}>Locations</Link>
                        </li>
                        <li>
                            <Link to="/careers" onClick={ScrollToTop}>Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={instagram}/>
                </div>
            </footer>
        </section>
    )
}

export default Footer