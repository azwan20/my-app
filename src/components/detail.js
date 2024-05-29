import { Link } from "react-router-dom";

function Detail() {
    return (
        <>
            <div className="detail" style={{maxHeight: '100vh', overflowY: 'auto'}}>
                <div style={{ height: '20%', zIndex: '999' }}>
                    <nav class="navbar navbar-expand-lg" style={{ position: 'absolute', width: '100%', zIndex: '999' }}>
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
                </div>
                <div style={{ height: '80%' }}>
                    <h1 className="text-center">Landing Pages</h1>
                    <div className="d-flex flex-column align-items-center">
                        <section className="" style={{ width: '80%', height: '550px', }}>
                            <div id="carouselExampleCaptions" class="carousel slide">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="./assets/ezprog.png" class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="..." class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Second slide label</h5>
                                                <p>Some representative placeholder content for the second slide.</p>
                                            </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="..." class="d-block w-100" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </section>
                        <section className="deskrip">
                            <span>
                                <p>Deskripsi App</p>
                                <b>Aplikasi web ini di gunakan untuk memaparkan services yang ada pada EZprog. Aplikasi ini dibangun dengan menggunakan library Next.js dan dapat diakses pada halaman berikut. 
                                Aplikasi web ini di gunakan untuk memaparkan services yang ada pada EZprog. Aplikasi ini dibangun dengan menggunakan library Next.js dan dapat diakses pada halaman berikut  </b>
                            </span>
                            <span>
                                <p>Dibangun menggunakan</p>
                                <b>
                                    <ul>
                                        <li>Next.js</li>
                                        <li>Firebase</li>
                                    </ul>
                                </b>
                            </span>
                            <span>
                                <p>Dapat Diakses pada</p>
                                <b><Link to="https://ez-prog.vercel.app/" target="_blank">https://ez-prog.vercel.app/</Link></b>
                            </span>
                        </section>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Detail;