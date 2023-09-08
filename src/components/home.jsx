import React from "react";
import AboutMe from "./aboutMe";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Home() {
    const backgroundStyle = {
        background: 'linear-gradient(90deg, #DBE8F3, #d4d6f3ff,  #FFFFFF)',
        backgroundImage: 'url("./assets/pattern.svg"), url("./assets/pattern2.svg")',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'left top, right top', /* Mengatur posisi latar belakang pertama di kiri atas dan latar belakang kedua di kanan atas */
        backgroundSize: 'auto 100vh, auto 100vh',
    }
    return (
        <div className="body-home">
            <div className="content">
                <h1>Hello, Welcome</h1>
                <p>I’m <b>Azwan Triyadi</b>, am a web developer. You Are on my personal website.</p>
            </div>
            <div className="link">
                <ul>
                    <li><Link to="/project"><button className="button-home">My Project</button></Link></li>
                    <li><Link to="/aboutMe"><button className="button-home">About Me</button></Link></li>
                </ul>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="390" viewBox="0 0 1440 390" fill="none">
                <path d="M0 47.4302C573.5 -12.5 870 529.5 1440 47.4302V390H0L0 47.4302Z" fill="#2C1E59" />
            </svg> */}
        </div>
    );
}

export default Home;