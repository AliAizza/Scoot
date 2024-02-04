import React from "react"
import './Sec.css'


import circle from '../../assets/patterns/circle.svg'
import up_arrow from '../../assets/patterns/left-upward-arrow.svg'
import down_arrow from '../../assets/patterns/left-downward-arrow.svg'
import right_arrow from '../../assets/patterns/right-arrow.svg'

function Sec( { title, paragraph, imgsrc, type, dir, btn } ) {
    return(
        <>
            <section className={dir === 'row' ? "main-sec" : "main-sec main-rev"}>
                <div className="content">
                    <h1>{title}</h1>
                    <p>{paragraph}</p>
                    {
                        btn !== 'none' && (<button>{btn}</button>)
                    }
                </div>
                <div className={dir === 'row' ? "images" : "images images-rev"}>
                    <img src={imgsrc} className="main-image"/>
                    <img src={circle}/>
                </div>
                {
                    dir === 'row' && (<img src={type === 'long downward' || type === 'short downward' ? down_arrow : up_arrow} className={type === 'long downward'? "long-line" : type === 'long upward' ? "long-line upward-line" : "short-line"}/>)
                }
                {   
                    dir === 'rev' && (<img src={right_arrow} className="right-arrow"/>)
                }
            </section>
        </>
    )
}

export default Sec