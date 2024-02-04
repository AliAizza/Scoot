import React from "react"
import './Hero.css'

import white_circles from '../../assets/patterns/white-circles.svg'

function Hero({title}) {
    return(
        <>
            <header className={title === 'About' ? "hero" : "hero other"}>
                <h1>{title}</h1>
                <img src={white_circles}/>
            </header>
        </>
    )
}

export default Hero