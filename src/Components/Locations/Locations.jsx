import React from "react"
import './Locations.css'
import Hero from "../ReusableComponents/Hero/Hero"

function Locations() {
    return (
        <>
            <div className="space"></div>
            
            <Hero title="Locations"/>

            <div className="map">
                <div className="newyork">New York</div>
                <div className="london">London</div>
                <div className="yokohama">Yokohama</div>
                <div className="jakarta">Jakarta</div>
            </div>

            <div className="resp-locations">
                <div>New York</div>
                <div>London</div>
                <div>Yokohama</div>
                <div>Jakarta</div>
            </div>

            <div className="contact">
                <h1>Your City Not Listed?</h1>
                <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <button>Message Us</button>
            </div>
        </>
    )
}

export default Locations