import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started My 3D Journey</h4>
                <h5>Learning</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Picked up 3D out of pure curiosity and never really put it down. Started with the basics, quickly got obsessed with environments, lighting, and making things feel real.
            
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3D Generalist</h4>
                <h5>3D Artist & Team Leader</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Landed my first professional role as a 3D Generalist became a core member of the team, 
              gained real-world production experience, and stepped into
              leadership for the first time.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>The Next Chapter</h4>
                <h5>Seeking New Challenges</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              The next chapter is being written looking for the right project, 
              the right team, and the right challenge 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
