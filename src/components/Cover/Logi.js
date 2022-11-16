import React, { useState } from "react";
import "./Logi.css"
const Logi = () => {
    const [popupStyle, showpopup] = useState("hide")

    const popup = () => {
        showpopup("loging-popup")
        setTimeout(() => showpopup("hide"), 3000)

    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <input className="b1" type={'text'} placeholder="username" />
            <input type={'password'} placeholder="password" />

            <div className="lgbt" onClick={popup}> Login</div>
            <p className="text"> Or login using</p>
            <div className="alt">
                <div className="face"></div>
                <div className="google"></div>
            </div>
            <div className={popupStyle}>
                <h3> login failed</h3>
                <p>username or password incorrect</p>
            </div>

        </div>
    )

}
export default Logi