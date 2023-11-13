import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
    return (
        <div className="aboutMe">
            <nav class="navbar navbar-expand-lg" style={{ position: 'absolute', width: '100%' }}>
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
            <div className="lanskap">
                    <img className="lanskap-img" src="./assets/forLanskap.jpeg" alt="Bostrap" />
                    <div className="lansHead">
                        <h1 style={{ color: "#9079F1", fontFamily: 'Jomolhari, serif' }}>Hello There!</h1>
                        <h4>Azwan Here</h4>
                    </div>
                    <div className="lansFoot">
                        <h4>I'm A Web Developer</h4>
                        <p>I am a web developer mainly focusing on the front end web developer field and I am also open to new experiences in other fields.</p>
                    </div>
            </div>
            <div className="about about2">
                <h3>About Me</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <p>I’m was a <b>Informatics Engineering</b> student at the Universitas Muslim Indonesia and graduated on August, 19 2023. I’m enter the university on August 2019 studying any subject and have interest to Web Programming in my second year. I take it seroiusly on that because it looks amazing to make application on Web. I comfortbale at <b>HTML, CSS, JavaScript, PHP, Boostrap, and React.js.</b></p>
            </div>
            <div className="about">
                <h3>Skills</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bostrap" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://o.remove.bg/downloads/a0568bdb-f418-4fbd-874d-76b005f0c61d/174854-removebg-preview.png" alt="HTML" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://diziglobalsolution.com/wp-content/uploads/2023/04/logo-css-3-1536.png" alt="CSS" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png" alt="JavaScript" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="PHP" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React JS" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://seeklogo.com/images/1/3ds-max-logo-4C228D4A3D-seeklogo.com.png" alt="3Ds Max" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://static.vecteezy.com/system/resources/previews/022/100/816/original/microsoft-logo-transparent-free-png.png" alt="Microsoft Office" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="skills-item">
                            <img className="img" src="https://aety.io/wp-content/uploads/2016/11/mysql-logo.png" alt="MySql" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about about2 ">
                <h3>Experiences</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <ul className="experience">
                    <li><b>Februari 2021 - Agustus 2023</b></li>
                    <li>Assistent Laboratory at Computer Science faculty of the Universitas Muslim Indonesia</li>
                    <ol>
                        <li>Responsibilities included instructing practical courses, assigning coursework, evaluating student performance, and administering examinations</li>
                        <li>Managing inventory, including the cataloging of new and used items, as well as assessing the condition of goods to ensure integrity and suitability within warehouse facilities</li>
                        <li>Proficient in assembling new PCs, replacing faulty components, and conducting repairs on malfunctioning personal computers</li>
                        <li>Proficient in fabricating LAN cables for fellow associates, used in computer networking, CCTV systems, and server rooms.</li>
                    </ol>
                    <li><b>Juni - Juli 2021</b></li>
                    <li>Diklat BDI Denpasar 3D Aset</li>
                    <ol>
                        <li>Proficient in creating 3 dimensional designs for architectural structures, interior spaces, and automotive models using 3D modeling software such as 3ds Max.</li>
                    </ol>
                    <li><b>November 2019</b></li>
                    <li>Himpunan Pelajar Mahasiswa Massenrempulu (HPMM)</li>
                    <li><b>Juli 2019</b></li>
                    <li>Lomba Cerpen Tingkat Nasional</li>
                    <li><b>September 2018</b></li>
                    <li>Volunteer PMR untuk korban Gempa & Tsunami Palu</li>
                    <ol>
                        <li>Coordinated community outreach efforts in Enrekang city, including the collection, organization, and documentation of relief donations for the Office of the Regent in Enrekang. Managed inventory and facilitated the dispatch of goods to Palu, Central Sulawesi.</li>
                    </ol>
                    <li><b>2017</b></li>
                    <li>Lomba Kepalang Merahan Se-Sulawesi Selatan</li>
                    <li><b>2016</b></li>
                    <li>Lomba Teratai Chapter X</li>
                </ul>
            </div>
            <div className="about">
                <h3>Education and Serification</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <ul className="education">
                    <li><b>Agustus 2019 - Agustus 2023</b></li>
                    <li>S1 Teknik Informatika Universitas Muslim Indonesia</li>
                    <ol>
                        <li>Judul tugas akhir : Analisis Sentiment Publik Mengenai Neuralink dengan Menerapkan Naive Bayes: Multinmial, Gaussian, Complement</li>
                        <li>IPK : 3.85</li>
                    </ol>
                    <br />
                    <li><b>Oktober 2022</b></li>
                    <li>Microsoft Certified Fundamental (MCF)</li>
                    <br />
                    <li><b>Juli 2016 - April 2019</b></li>
                    <li>SMAN 2 ENREKANG</li>
                    <ol>
                        <li>Jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam)</li>
                    </ol>
                </ul>
            </div>
            <div className="about about2">
                <h3>Contacts</h3>
                <div className="border-bottom border-3 border-primary-subtle" />
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="contact-item">
                            <a href="https://wa.me/+6282246377149" target="_blank">
                            <img className="img" src="./assets/WhatsApp.svg" alt="WhatsApp" />+6282246377149</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="contact-item">
                            <img className="img" src="./assets/Gmail.svg" alt="Gmail" />
                            <a href="mailto:triyadi.azwan@gmail.com" target="_blank">triyadi.azwan@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-col-12 col-lg-4">
                        <div className="contact-item">
                            <a href="https://www.instagram.com/azwantrydi/" target="_blank">
                            <img className="img" src="./assets/instagram.svg" alt="Instagram" /> Azwan Triyadi</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-col-12 col-lg-6 ">
                        <div className="contact-item add" style={{ padding: '2rem 0 0 8rem' }}>
                            <a href="https://github.com/azwan20" target="_blank">
                            <img className="img" src="./assets/gitHub.svg" alt="Instagram" />Azwan20</a>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-col-12 col-lg-6">
                        <div className="contact-item add" style={{ padding: '2rem 9rem 0 0' }}>
                            <a href="https://www.linkedin.com/in/azwan-triyadi-185494256/" target="_blank">
                            <img className="img" src="./assets/LinkedIn.svg" alt="Instagram" />Azwan Triyadi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;
