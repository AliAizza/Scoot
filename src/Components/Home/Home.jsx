import React from "react";
import './Home.css'
import Sec from "../ReusableComponents/Sec/Sec";

import line from '../assets/patterns/line.svg'
import right_arrow from '../assets/patterns/right-arrow.svg'
import white_circles from '../assets/patterns/white-circles.svg'
import locate from '../assets/icons/locate.svg'
import ride from '../assets/icons/ride.svg'
import scooter from '../assets/icons/scooter.svg'
import telemetry from '../assets/images/telemetry.jpg'
import nearyou from '../assets/images/near-you.jpg'
import payments from '../assets/images/payments.jpg'

function Home(){
    return (
        <>
            <div className="space"></div>
            
            <section className="sec1">
                <div className="back">
                    <div className="content">
                        <h1>Scooter sharing made simple</h1>
                        <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                        <button>Get Scootin</button>
                    </div>
                    <img src={line} className="line"/>
                    <img src={right_arrow} className="right-arrow"/>
                    <img src={white_circles} className="white-circles"/>
                </div>
            </section>

            <section className="sec2">
                <div className="grey-line"></div>
                <div className="content">
                    <div className="col locate-column">
                        <img src={locate} className="locate"/>
                        <div>
                            <h3>Locate with app</h3>
                            <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
                        </div>
                    </div>
                    <div className="col ride-column">
                        <img src={ride} className="ride"/>
                        <div>
                            <h3>Pick your scooter</h3>
                            <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
                        </div>
                    </div>
                    <div className="col scooter-column">
                        <img src={scooter} className="scooter"/>
                        <div>
                            <h3>Enjoy the ride</h3>
                            <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Sec 
                title="Easy to use riding telemetry"
                paragraph="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                imgsrc={telemetry}
                type='long downward'
                dir='row'
                btn='Learn More'
            />

            <Sec 
                title="Coming to a city near you"
                paragraph="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                imgsrc={nearyou}
                dir='rev'
                btn='Learn More'
            />

            <Sec 
                title="Zero hassle payments"
                paragraph="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                imgsrc={payments}
                type='short downward'
                dir='row'
                btn='Learn More'
            />
        </>
    )
}

export default Home