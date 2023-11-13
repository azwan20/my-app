import React, { useEffect, useState } from "react";
import AboutMe from "./aboutMe";
import Home from "./home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Project() {
    // Gunakan state untuk melacak gambar yang harus ditampilkan
    const [currentImage, setCurrentImage] = useState("./assets/starbucks.png");
    const [showMessage, setShowMessage] = useState(false);
    const [clicked, setClicked] = useState(null);

    // Daftar gambar yang akan digunakan pada imageNumber === 1
    const imagesForImageNumber1 = [
        "./assets/starbucks.png",
        "./assets/starbucks2.png",
        "./assets/starbucks3.png",
        "./assets/starbucks4.png",
    ];

    // State untuk melacak indeks gambar saat ini
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    

    // Fungsi untuk mengganti gambar pada imageNumber === 1
    const switchImageNumber1 = () => {
        const newIndex = (currentImageIndex + 1) % imagesForImageNumber1.length;
        setCurrentImage(imagesForImageNumber1[newIndex]);
        setCurrentImageIndex(newIndex);
    };

    useEffect(() => {
        // Mulai interval hanya jika imageNumber === 1 dan ada lebih dari satu gambar
        if (clicked === 1 && imagesForImageNumber1.length > 1) {
            const interval = setInterval(switchImageNumber1, 2000); // Ganti gambar setiap 2 detik (sesuaikan dengan kebutuhan Anda)
            return () => clearInterval(interval); // Hentikan interval ketika komponen dibersihkan
        }
    }, [clicked, currentImageIndex]);

    // Fungsi untuk mengganti gambar berdasarkan nomor yang diberikan
    const switchImage = (imageNumber) => {
        if (imageNumber === 1) {
            setCurrentImage(imagesForImageNumber1[0]);
            setClicked(1);
        } else if (imageNumber === 2) {
            setCurrentImage('./assets/msi.png');
            setClicked(2);
        } else if (imageNumber === 3) {
            setCurrentImage('./assets/monitoring.png');
            setClicked(3);
        } else if (imageNumber === 4) {
            setCurrentImage('./assets/ezprog.png');
            setClicked(4);
        } else if (imageNumber === 5) {
            setCurrentImage('./assets/project.png');
            setClicked(5);
        } else {
            setCurrentImage(null); // Hapus gambar jika nomor tidak valid
            setClicked(null);
        }

        setShowMessage(!showMessage);
    };

    const color = (imageNumber) => {
        return {
            color: clicked === imageNumber ? "#E0CF35" : "white",
        }
    };

    return (
        <div className="project">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navb" id="navbarTogglerDemo01">
                        <a class="navbar-brand font-weight-bold" href="#">Azwan Triyadi</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active font-weight-bold btn" role="button" aria-current="page" href="#">Project</a>
                            </li>
                            <li class="nav-item">
                                <Link to="/aboutMe" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/home" class="nav-link">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container container-project d-flex align-items-center justify-content-center" style={{ height: "100vh" }} >
                <div class="card mb-3" style={{ maxWidth: '100%', height: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                    <div class="row g-0 d-flex align-items-center justify-content-center card-front">
                        <div class="col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
                            {currentImage && (
                                <img className="img-fluid" src={currentImage} alt="Displayed Image" />
                            )}
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="card-body">
                                <h5 class="card-title">Nama Proyek</h5>
                                <ul>
                                    <li>
                                        <a onClick={() => { switchImage(1) }} style={color(1)} href="#">Clone the Starbucks Indonesia website application</a>
                                        {showMessage && clicked === 1 && <button className="bg-light" onClick={() => { window.open("https://github.com/azwan20/starbucks", "_blank") }}>Source Code</button>}
                                    </li>
                                    <li>
                                        <a onClick={() => { switchImage(2) }} style={color(2)} href="#">Web E-commerce MSI</a>
                                        {showMessage && clicked === 2 && <button className="bg-light" onClick={() => { window.open("https://github.com/azwan20/MSI_website", "_blank") }}>Source Code</button>}
                                    </li>
                                    <li>
                                        <a onClick={() => { switchImage(3) }} style={color(3)} href="#">Monitoring FIKOM UMI</a>
                                        {showMessage && clicked === 3 && <button className="bg-light" onClick={() => { window.open("https://github.com/azwan20/monitoring", "_blank") }}>Source Code</button>}
                                    </li>
                                    <li>
                                        <a onClick={() => { switchImage(4) }} style={color(4)} href="https://ez-prog.vercel.app/" target="_blank">EZprog (using Next.js)</a>
                                        {showMessage && clicked === 4 && <button className="bg-light" onClick={() => { window.open("https://github.com/azwan20/ez-prog", "_blank") }}>Source Code</button>}
                                    </li>
                                    <li>
                                        <a onClick={() => { switchImage(5) }} style={color(5)} href="#">Web Portofolio (using React.Js)</a>
                                        {showMessage && clicked === 5 && <button className="bg-light" onClick={() => { window.open("https://github.com/azwan20/MyPortofolio", "_blank") }}>Source Code</button>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;
