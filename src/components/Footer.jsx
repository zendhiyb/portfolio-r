import React from 'react'

function Footer() {
  return (
    <>  
    <footer className="card bg-white border-0 rounded-0">
    <hr className="m-0 border" /> {/* Scroll To Top */} <div className="position-absolute top-0 start-50 translate-middle">
      <a href="#" id="scrollToTop" className="scroll-btn">
        <div className="border bg-white rounded-5" style={{ height: "55px", width: "55px" }}>
          <p className="text-center">
            <i className="fa-solid fa-arrow-up text-dark" style={{ marginTop: "35%", marginLeft: "1px", fontSize: "18px" }}></i>
          </p>
        </div>
      </a>
    </div> {/* Main Content */} <div className="py-5 px-3">
      <div className="container">
        <div className="text-center">
          <h4 className="p-3 fw-bold mb-0">
            <q>Thank you for visiting my portfolio</q>
          </h4>
          <div className="py-3">
            <a href="https://drive.google.com/file/d/1qsUyBWjVf1GMBr3ZaRKytcMBxPyXmxRu/view?usp=sharing" target="_blank" rel="noreferrer" className="link-underline link-underline-opacity-0 btn btn-dark rounded-5 px-5">
              <i className="fa-solid fa-file me-2"></i> View my CV{" "} <span className="fw-bold" style={{ textDecoration: "none" }}> here </span>
            </a>
          </div>
        </div>
        <hr className="border" />
        <div className="row">
          <div className="col-lg-5 mb-2">
            <p className="lh-lg"> Based in <b>Tulangan, Sidoarjo, East Java, Indonesia,</b> and open to communication and collaboration opportunities. </p>
          </div>
          <div className="col-lg-4 mb-2">
            <p className="lh-lg"> For further communication, you can reach me via email at{" "} <a href="#" className="text-dark link-underline link-underline-opacity-0">
                <b>zendhiyb10@gmail.com</b>
              </a> . </p>
          </div>
          <div className="col-lg-3 mb-2">
            <div className="d-flex flex-wrap mt-2 justify-content-center">
              <a href="https://github.com/zendhiyb" target="_blank" rel="noreferrer" className="btn btn-outline-light border-secondary border-opacity-25 btn-footer me-2 mb-2 rounded-0" style={{ height: "50px", width: "50px" }}>
                <p className="m-0 d-flex align-content-end justify-content-center">
                  <img src="src/assets/img/github.png" alt="github" height="21px" style={{ marginTop: "28%" }} />
                </p>
              </a>
              <a href="https://www.linkedin.com/in/zendhiyb/" target="_blank" rel="noreferrer" className="btn btn-outline-light border-secondary border-opacity-25 btn-footer me-2 mb-2 rounded-0" style={{ height: "50px", width: "50px" }}>
                <p className="m-0 d-flex align-content-end justify-content-center">
                  <img src="src/assets/img/linkedin.png" alt="linkedin" height="21px" style={{ marginTop: "28%" }} />
                </p>
              </a>
              <a href="https://dribbble.com/zendhiyb" target="_blank" rel="noreferrer" className="btn btn-outline-light border-secondary border-opacity-25 btn-footer me-2 mb-2 rounded-0" style={{ height: "50px", width: "50px" }}>
                <p className="m-0 d-flex align-content-end justify-content-center">
                  <img src="src/assets/img/dribbble.png" alt="dribbble" height="21px" style={{ marginTop: "28%" }} />
                </p>
              </a>
              <a href="https://www.instagram.com/zendhiy/" target="_blank" rel="noreferrer" className="btn btn-outline-light border-secondary border-opacity-25 btn-footer me-2 mb-2 rounded-0" style={{ height: "50px", width: "50px" }}>
                <p className="m-0 d-flex align-content-end justify-content-center">
                  <img src="src/assets/img/instagram.png" alt="instagram" height="21px" style={{ marginTop: "28%" }} />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="cv"></div> {/* Bottom Bar */} <div className="p-3 px-4" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="clearfix">
          <div className="float-md-start mt-1">
            <h6 className="text-white mb-0 my-1">MyPortfolio</h6>
          </div>
          <p className="float-md-end text-white mb-2 my-1 fw-light"> &#169; 2025 zendhiyb. All rights reserved. </p>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer