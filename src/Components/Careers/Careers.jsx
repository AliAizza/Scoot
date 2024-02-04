import React from "react"
import './Careers.css'
import Hero from "../ReusableComponents/Hero/Hero"
import Sec from "../ReusableComponents/Sec/Sec"


import join from '../assets/images/join-us.jpg'
import Values from "../ReusableComponents/Values/Values"

function Careers() {
    const data = {
        titles: ["General Manager", "UI/UX Designer", "Blog Content Copywriter", "Graphic Designer", "Fleet Supervisor", "UX Analyst"],
        cities: ["Jakarta, Indonesia", "Yokohama, Japan", "New York, United States", "New York, United States", "Jakarta, Indonesia", "London, United Kingdom"]
    }
    return(
        <>
            <div className="space"></div>
            
            <Hero title="Careers"/>

            <Sec
                title="Care to join our mission?"
                paragraph="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
                imgsrc={join}
                dir="row"
                btn="Say Hello"
                type="long downward"
            />

            <div className="why">Why join us?</div>
            <Values/>

            <div>
                {
                    data.titles.map((title, index) => {
                        return (
                            <div key={index} className="job-container">
                                <div className="job-and-city">
                                    <h3>{title}</h3>
                                    <p>{data.cities[index]}</p>
                                </div>
                                <button>Apply</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Careers