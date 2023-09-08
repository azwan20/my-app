import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <div className="aboutMe">
           <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navb" id="navbarTogglerDemo01">
                        <a class="navbar-brand font-weight-bold" href="#">Azwan Triyadi</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/project" class="nav-link active font-weight-bol" aria-current="page" href="#">Project</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active font-weight-bold btn" role="button" aria-curcmrent="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/home" class="nav-link">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="lanskap"></div>
            <div className="about about2">
                <h3>About Me</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <p>I’m was a <b>Informatics Engineering</b> student at the Universitas Muslim Indonesia and graduated on August, 19 2023. I’m enter the university on August 2019 studying any subject and have interest to Web Programming in my second year. I take it seroiusly on that because it looks amazing to make application on Web. I comfortbale at <b>HTML, CSS, JavaScript, PHP, Boostrap, and React.js.</b></p>
            </div>
            <div className="about">
                <h3>Skills</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                
            </div>
            <div className="about about2">
                <h3>Experiences</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <ul>
                    <li>Assistent Laboratory at Computer Science faculty of the Universitas Muslim Indonesia</li>
                    <li>Microsoft Certified Fundamental (MCF)</li>
                    <li>2021 - Diklat BDI Denpasar 3D Aset</li>
                    <li>2019 - Lomba Cerpen Tingkat Nasional</li>
                    <li>2017 - Lomba Kepalang Merahan Se-Sulawesi Selatan</li>
                    <li>2016 - Lomba Teratai Chapter X</li>
                </ul>
            </div>
            <div className="about">
                <h3>Contacts</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="contact-item">
                            <img className="img" src="./assets/WhatsApp.svg" alt="WhatsApp" />
                            <span>+6282246377149</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="contact-item">
                            <img className="img" src="./assets/Gmail.svg" alt="Gmail" />
                            <span>triyadi.azwan@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-col-12 col-lg-4">
                        <div className="contact-item">
                            <img className="img" src="./assets/Instagram.svg" alt="Instagram" />
                            <span>Azwan Triyadi</span>
                        </div>
                    </div>
                    {/* <div className="dk"> */}
                    <div className="col-md-6 col-sm-col-12 col-lg-6 ">
                        <div className="contact-item add" style={{ padding: '2rem 0 0 8rem' }}>
                            <img className="img" src="./assets/gitHub.svg" alt="Instagram" />
                            <span>Azwan20</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-col-12 col-lg-6">
                        <div className="contact-item add" style={{ padding: '2rem 9rem 0 0' }}>
                            <img className="img" src="./assets/LinkedIn.svg" alt="Instagram" />
                            <span>Azwan Triyadi</span>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            {/* <div className="container">

                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

                    <div className="row">

                        <div className="sidebio ok col-md-12 col-lg-6 col-sm-12">
                            <p>
                                I’m was a <a>Informatics Engineering</a> student at the Universitas Muslim Indonesia and graduated on August, 19 2023. I’m enter the university on August 2019 studying any subject and have interest to Web Programming in my second year. I take it seroiusly on that because it looks amazing to make application on Web. I comfortbale at HTML, CSS, JavaScript, PHP, Boostrap, and React.js.
                            </p>
                        </div>

                        <div className="biodata ok col-md-12 col-lg-6 col-sm-12">
                            <ul>
                                <li>
                                    <b>Contact : </b> <br />
                                    triyadi.azwan@gmail.com
                                </li>
                                <li>
                                    <b>Experiences :</b><br />
                                    Laborary Assistent (from 2020)
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div> */}
        </div>

    );
}

export default AboutMe;
