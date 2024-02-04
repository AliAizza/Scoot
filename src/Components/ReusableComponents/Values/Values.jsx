import React from "react"
import './Values.css'

import tech from '../../assets/images/our-tech.jpg'
import integrity from '../../assets/images/our-integrity.jpg'
import community from '../../assets/images/our-community.jpg'

function Values() {
    return(
        <section className="values">
                <div className="value">
                    <img src={tech}/>
                    <div className="num">01</div>
                    <h3>Our tech</h3>
                    <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                </div>

                <div className="value">
                    <img src={integrity}/>
                    <div className="num">02</div>
                    <h3>Our integrity</h3>
                    <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                </div>

                <div className="value">
                    <img src={community}/>
                    <div className="num">03</div>
                    <h3>Our community</h3>
                    <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                </div>
        </section>
    )
}

export default Values