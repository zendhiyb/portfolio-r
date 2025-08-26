function Aboutme() {
  return (
    <>  
    <div className="container" style={{ marginTop: "60px", marginBottom: "80px" }}>
      <div className="card border-0 p-3">
          <h3 className="fw-bold mb-4">About Me</h3>
          <div className="row">
              <div className="col-lg-7">
              <div className="card border-0">
              <p className="lh-lg mb-4" style={{ textAlign: "justify", textJustify: "inter-word" }}> I am a graduate of Information Engineering from Muhammadiyah University of Sidoarjo, with expertise in web development, data analysis, prediction, and UI/UX design. During my studies, I contributed to various projects such as the Aslab Informatika website, registration systems, voting platforms, and sentiment analysis and prediction systems. I was also actively involved in the Programming Division of Aslab Informatika UMSIDA, where I developed and managed laboratory systems, strengthening my technical skills, problem-solving abilities, and teamwork. </p>
              </div>
          </div>
          <div className="col-lg-5">
              <div className="border-0"> 
                {[ "HTML", "CSS", "JavaScript", "PHP", "Python", "Codeigniter 4", "Bootstrap", "Figma", "Google Colab", "Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "UML", ].map((skill, index) => ( <div key={index} className="btn btn-outline-light rounded-5 me-2 border-0 mb-3">
                  <span className="fs-6 text-dark fw-normal">
                  <i className="fa-solid fa-plus me-2"></i> {skill} </span>
                </div> ))}
              </div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Aboutme