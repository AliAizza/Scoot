import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { Link as Scroll} from 'react-scroll'

import scoot_logo from '../assets/logo.svg'

function Header(){
    const body = document.body;

    const [navState, setNavState] = useState(false);
    
    const ToggleNavBar = () =>{
        setNavState(!navState);
    }
    
    const closeNavBar = () =>{
        setNavState(false);
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
        closeNavBar();
    }

    body.style.overflowY = navState ? "hidden" : "visible";

    return (
        <>
            <div className="navbar">
                <div className={navState ? "hamb active" : "hamb"} onClick={ToggleNavBar}></div>
                <div className="left">
                    <Link to="/" className='sc' onClick={ScrollToTop}>
                        <img src={scoot_logo}/>
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
                <Scroll to="footer" smooth={true} duration={800}>
                    <button>Get Scootin</button>
                </Scroll>
                <div className={navState ? "dark active" : "dark"} onClick={closeNavBar}></div>
                <div className={navState ? "resp active" : "resp"}>
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
                    <Scroll to="footer" smooth={true} duration={800} onClick={ToggleNavBar}>
                        <button>Get Scootin</button>
                    </Scroll>
                </div>
            </div>
        </>
    )
}

export default Header