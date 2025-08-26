import React from "react";

function Navbar() {
  return (
    <>
    <nav className="navbar bg-white fixed-top pt-5 pb-3">
    <div className="container">
        <a className="navbar-brand fw-bold" href="/"> MyPortfolio </a>
        <div>
        <a href="#cv" className="text-dark fw-bold mx-4 text-decoration-none my-resume-link"> My Resume </a>
        <a href="#" style={{ textDecoration: "none", padding: "12px 15px", borderRadius: "50%" }} className="text-white bg-dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <i className="fa-solid fa-bars"></i>
        </a>
        </div> {/* Offcanvas */} <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: "300px" }}>
        <div className="offcanvas-header">
            <h6 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> Others </h6>
            <button type="button" className="btn-close focus-ring focus-ring-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-3 pt-0">
            <div className="card border-0 rounded-0">
            <div className="row m-0">
                <div className="col-6 m-0 p-1">
                <a href="https://github.com/zendhiyb" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <div className="card border rounded-0 p-3 text-center hover-effect">
                    <div className="mb-2">
                        <img src="src/assets/img/github.png" alt="Github" height="23px" />
                    </div>
                    <p className="mb-0">Github</p>
                    </div>
                </a>
                </div>
                <div className="col-6 m-0 p-1">
                <a href="https://www.linkedin.com/in/zendhiyb/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <div className="card border rounded-0 p-3 text-center hover-effect">
                    <div className="mb-2">
                        <img src="src/assets/img/linkedin.png" alt="Linkedin" height="23px" />
                    </div>
                    <p className="mb-0">Linkedin</p>
                    </div>
                </a>
                </div>
                <div className="col-6 m-0 p-1">
                <a href="https://dribbble.com/zendhiyb" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <div className="card border rounded-0 p-3 text-center hover-effect">
                    <div className="mb-2">
                        <img src="src/assets/img/dribbble.png" alt="Dribbble" height="23px" />
                    </div>
                    <p className="mb-0">Dribbble</p>
                    </div>
                </a>
                </div>
                <div className="col-6 m-0 p-1">
                <a href="https://www.instagram.com/zendhiy/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <div className="card border rounded-0 p-3 text-center hover-effect">
                    <div className="mb-2">
                        <img src="src/assets/img/instagram.png" alt="Instagram" height="23px" />
                    </div>
                    <p className="mb-0">Instagram</p>
                    </div>
                </a>
                </div>
            </div>
            <hr className="border my-1" />
            </div>
        </div>
        </div>
    </div>
    </nav>
    
    </>
  );
}

export default Navbar;