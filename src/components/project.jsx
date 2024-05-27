import React, { useEffect, useState } from "react";
import AboutMe from "./aboutMe";
import Home from "./home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Project() {
    const [currentImage, setCurrentImage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [clicked, setClicked] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const projectData = [
        {
            id: 1,
            name: "Clone the Starbucks Indonesia website application",
            category: ["Front-End Developer", "Landing Pages"],
            imageUrl: "./assets/starbucks.png",
            sourceCodeLink: "",
        },
        {
            id: 2,
            name: "EZprog (using Next.js)",
            category: ["Front-End Developer", "Landing Pages"],
            imageUrl: "./assets/ezprog.png",
            sourceCodeLink: "https://ez-prog.vercel.app/"
        },
        {
            id: 3,
            name: "Web Portofolio (using React.Js)",
            category: ["Front-End Developer", "Landing Pages"],
            imageUrl: "./assets/project.png",
            sourceCodeLink: "https://github.com/azwan20/MyPortofolio"
        },
        {
            id: 4,
            name: "Online Shop MSI",
            category: ["Front-End Developer", "Landing Pages"],
            imageUrl: "./assets/msi.png",
            sourceCodeLink: ""
        },
        {
            id: 5,
            name: "Monitoring FIKOM UMI",
            category: ["Front-End Developer", "Landing Pages"],
            imageUrl: "./assets/monitoring.png",
            sourceCodeLink: ""
        },
        {
            id: 6,
            name: "Landing Page Online Shop",
            category: "Landing Pages",
            imageUrl: "./assets/onlineShopLP.png",
            sourceCodeLink: "https://ez-prog-fashion-shop.vercel.app/"
        },
        {
            id: 7,
            name: "Landing Page Produk UMKM",
            category: "Landing Pages",
            imageUrl: "./assets/umkmLP.png",
            sourceCodeLink: "https://rioslku.vercel.app/"
        },
        {
            id: 8,
            name: "Toko Kelontong Online",
            category: "Web Developer",
            imageUrl: "./assets/kelontong.png",
            sourceCodeLink: "https://nur-afiah-mart.vercel.app/"
        },
        {
            id: 9,
            name: "Digitalisasi Kantor Desa",
            category: "Web Developer",
            imageUrl: "./assets/kantor.png",
            sourceCodeLink: "https://kantordesapao.vercel.app/"
        },
        {
            id: 10,
            name: "Wedding Invitation (Non WordPress)",
            category: "Front-End Developer",
            imageUrl: "./assets/wedding-invitation.png",
            sourceCodeLink: "https://wedding-invitation-henna.vercel.app/"
        },
        {
            id: 11,
            name: "RestoTa App",
            category: "Front-End Developer",
            imageUrl: "./assets/restoTa.jpeg",
            sourceCodeLink: ""
        }
    ];

    useEffect(() => {
        // Ketika komponen pertama kali dirender, atur konten awal sesuai dengan id: 1
        const initialProject = projectData.find(project => project.id === 1);
        setCurrentImage(initialProject.imageUrl);
        setClicked(initialProject.id);
        setShowMessage(true);

        // Ketika komponen pertama kali dirender, atur kategori yang dipilih menjadi "Landing Pages"
        setSelectedCategory("Landing Pages");
    }, []); // Tambahkan array kosong sebagai dependencies agar useEffect hanya dijalankan sekali saat komponen pertama kali dirender    

    const switchImage = (imageNumber, imageUrl, sourceCodeLink) => {
        setCurrentImage(imageUrl);
        setClicked(imageNumber);
        setShowMessage(true);
    
        // Tampilkan alert jika sourceCodeLink tidak ada
        if (!sourceCodeLink) {
            alert('App ini tidak terdeploy');
        }
    };
    

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
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
                        <Link className="navbar-brand font-weight-bold" href="#">Azwan Triyadi</Link>
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

            <div className="buttons">
                <button onClick={() => handleCategoryClick("Landing Pages")}>Landing Pages</button>
                <button onClick={() => handleCategoryClick("Web Developer")}>Web Developer</button>
                <button onClick={() => handleCategoryClick("Front-End Developer")}>Front-End Developer</button>
            </div>

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
                                <h5 class="card-title">Proyek {selectedCategory}</h5>
                                <ul>
                                    {projectData.filter(item => selectedCategory ? item.category.includes(selectedCategory) : true).map((item, index) => (
                                        <li key={index}>
                                        <Link onClick={() => switchImage(item.id, item.imageUrl, item.sourceCodeLink)} style={color(item.id)} href="#">{item.name}</Link>
                                                                                {showMessage && clicked === item.id && item.sourceCodeLink && <button className="bg-light" onClick={() => window.open(item.sourceCodeLink, "_blank")}>Lihat Website</button>}
                                        </li>
                                    ))}
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
