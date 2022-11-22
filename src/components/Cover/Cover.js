import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
import img111 from "../../media/img111.PNG";
import img222 from "../../media/img222.PNG";

export const Cover = () => {
    return (
        <><><div className="cover-container">
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1> Mundo mascotas</h1>
            <p> Recuperacion de mascotas|Cuidados|Alimentacion|Curiosidades</p>

        </div>
            <div className='nosotros'>
                <Carousel variant="dark" className='item'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img222}
                            alt="First slide" />
                        <Carousel.Caption>
                            <h5>(✿◕‿◕✿)</h5>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img111}


                            alt="Second slide" />

                        <Carousel.Caption>

                            <h5>(✿◕‿◕✿)</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i1.wp.com/www.viviendoencasa.mx/wp-content/uploads/2020/12/Los-perros-no-son-capaces-de-sentir-amor-por-sus-duen%CC%83os.jpg?fit=1024%2C576&ssl=1'

                            alt="Third slide" />
                        <Carousel.Caption>
                            <h5>(✿◕‿◕✿)</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div></><Footer></Footer></>


    );
}
export default Cover;
