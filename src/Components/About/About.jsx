import React from "react"
import './About.css'
import Sec from "../ReusableComponents/Sec/Sec"
import Hero from "../ReusableComponents/Hero/Hero"

import digital from '../assets/images/digital-era.jpg'
import living from '../assets/images/better-living.jpg'
import Values from "../ReusableComponents/Values/Values"
import Faq from "../ReusableComponents/Faq/Faq"

function About() {

    const faqdata1 = {
        title: "How it works",
        questions: [
            "How do I download the app?",
            "Can I find a nearby Scoots?",
            "Do I need a license to ride?"
        ],
        answers: [
            "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
            "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
            "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
        ]
    }

    const faqdata2 = {
        title: "Safe driving",
        questions: [
            "Should I wear a helmet?",
            "How about the rules & regulations?",
            "What if I damage my Scoot?"
        ],
        answers: [
            "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
            "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
            "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
        ]
    }

    return (
        <>
            <div className="space"></div>

            <Hero title="About"/>

            <Sec
                title="Mobility for the digital era"
                paragraph="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
                imgsrc={digital}
                type="long upward"
                dir="row"
                btn="none"
            />

            <Sec
                title="Better urban living"
                paragraph="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
                imgsrc={living}
                dir="rev"
                btn="none"
            />

            <div className="values-title">Our values</div>
           <Values/>

            <div className="faqs">FAQs</div>
           <Faq {...faqdata1}/>
           <Faq {...faqdata2}/>
        </>
    )
}

export default About