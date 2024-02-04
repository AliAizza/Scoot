import React, { useState } from "react"
import './Faq.css'

import chevron from '../../assets/icons/chevron.svg'

function Faq({title, questions, answers}) {

    const [ExpandedIndices, setExpandedIndices] = useState([]);

    const handleToggle = (index) => {
        if (ExpandedIndices.includes(index))
            setExpandedIndices(ExpandedIndices.filter(i => i !== index));
        else
            setExpandedIndices([...ExpandedIndices, index])
    }

    // const [ExpandedIndex, setExpandedIndex] = useState(null);

    // const Toggle = (index) => {
    //     setExpandedIndex(ExpandedIndex === index ? null : index);
    // }

    return(
        <div className="faq">
            <h1>{title}</h1>
            <div className="qas">
                {
                    questions.map((question, index) => (
                        // <div key={index} onClick={() => Toggle(index)} className={ExpandedIndex === index ? "qa expanded" : "qa"}>
                        <div key={index} onClick={() => handleToggle(index)} className={ExpandedIndices.includes(index) ? "qa expanded" : "qa"}>
                            <div className="question">
                                <h3>{question}</h3>
                                <img src={chevron} className={ExpandedIndices.includes(index) ? "opened" : ""}/>
                            </div>
                            <p>{answers[index]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq