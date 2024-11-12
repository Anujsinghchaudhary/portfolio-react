import "./about.css";
import theme from "../../assets/theme.svg";
import Profile_anuj from "../../assets/Profile_anuj.png";

const About = () => {
  return (
    <section id="about" className="about">
      <header className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="Theme decoration" />
      </header>
      <div className="about-sections">
        <div className="about-left">
          <img src={Profile_anuj} alt="Profile of Anuj Singh" width="300px" height="300px" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Student at GEU</p>
            <p>Pursuing B.Tech in CSE with AI & DS</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr className="skill-bar" style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr className="skill-bar" style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr className="skill-bar" style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p>
              <hr className="skill-bar" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Gaining Experience</h1>
          <p>Will be happy to join you</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>Projects Completed till date</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Certifications</p>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default About;