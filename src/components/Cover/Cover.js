import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

export const Cover = () => {
    return (
        <div className="cover-container">
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1> Mundo mascotas</h1>
            <p> Recuperacion de mascotas|Cuidados|Alimentacion|Curiosidades</p>

        </div >
    );
}
export default Cover;
