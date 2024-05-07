import pic from "../images/me.jpeg"

function About() {
    return (
        <div className="about-page">
            <img src={pic} className="about-img mb-5" height="300" width="300" alt="" />
            <h2 className="page-header">About Me</h2>
            <p className="lead w-75 mx-auto">
                My journey in the world of programming began in 2020 at New Horizons Nigeria. Whether it's crafting visually appealing interfaces, optimizing website performance, or troubleshooting complex issues, I am dedicated to delivering high-quality results.
            </p>
            <button type="button" className="resume-btn btn btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text-fill me-1 mb-1" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                </svg>
                My Resume
            </button>
        </div> 
    )
}

export default About;