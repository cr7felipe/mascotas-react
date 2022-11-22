import React from "react"
import "./About.css"
import Footer from './Footer';

const About = () => {
    return (
        <><div className="about-container">
            <div className="about desc">
                <h3> cuentanos algo sobre esta iniciativa </h3>
                <p> mas informacion motivacion para continuar con esto </p>

            </div>
            <div className="about-img">
                <img src="https://www.elcolombiano.com/documents/10157/0/843x562/0c0/0d0/none/11101/DPHP/image_content_35796761_20200530133807.jpg"
                    alt="About" />

            </div>
        </div><Footer></Footer></>

    )

}
export default About