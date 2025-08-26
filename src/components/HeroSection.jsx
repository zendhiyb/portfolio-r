function HeroSection() {
  return (
    <>
    <div className="container" style={{ marginTop: "180px" }}>
      <div className="text-center">
        <div className="row">
          <div className="col-xl-1"></div>
          <div className="col-xl-3">
            <div className="card border-0 p-3">
              <div className="text-center">
                <img src="/src/assets/img/fotogw.jpeg" className="rounded-circle link-shadow" height="220px" alt="profile" />
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="card border-0 p-3" style={{ marginBottom: "40px" }}>
              <h3 className="fw-bold text-start mt-3 mb-3" style={{ fontSize: "30px" }}> Hi, I'm Zendhi Yuna Burnama🖖 </h3>
              <h1 className="fw-normal text-start"> Learn, grow, and create impactful digital solutions. Ready to innovate!... </h1>
            </div>
          </div>
          <div className="col-xl-1"></div>
        </div>
      </div>
      <div className="text-center">
        <div style={{ marginBottom: "40px" }}>
          <div className="btn btn-outline-light rounded-5 border px-4 mb-3 me-3">
            <i className="fa-solid fa-thumbtack me-2 text-dark"></i>
            <span className="fs-6 text-dark">UI/UX Enthusiast</span>
          </div>
          <div className="btn btn-outline-light rounded-5 border px-4 mb-3 me-3">
            <i className="fa-solid fa-thumbtack me-2 text-dark"></i>
            <span className="fs-6 text-dark">Frontend Enthusiast</span>
          </div>
          <div className="btn btn-outline-light rounded-5 border px-4 mb-3">
            <i className="fa-solid fa-thumbtack me-2 text-dark"></i>
            <span className="fs-6 text-dark">Web Developer Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
    <hr className="border" />

    </>
  )
}

export default HeroSection