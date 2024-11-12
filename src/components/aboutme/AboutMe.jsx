import React from 'react';
import { Briefcase, GraduationCap, Trophy, Heart, Code, MapPin, Mail, Phone, Globe } from 'lucide-react';
import './AboutMe.css';
import Profile_anuj from '../../assets/profile_anuj.jpg';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="hero-section">
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img
                src={Profile_anuj}
                alt="Profile"
                className="profile-image"
              />
              <div className="status-badge">Hi there, Here is all about me</div>
            </div>
            <div className="profile-info">
              <h1>Anuj Singh</h1>
              <p className="title">Full Stack Developer</p>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" /> Dehradun, India
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />anujsinghchaudhary07@gmail.com
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />+91 6396542978
                </div>
                <div className="contact-item">
                  <Globe className="contact-icon" /> English,Hindi
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="objective-section">
          <Code className="section-icon" />
          <div>
            <h2>Career Objective</h2>
            <p>Seeking to leverage my expertise in full-stack development to create innovative solutions that make a difference.</p>
          </div>
        </div>

        <div className="content-grid">
          <div className="info-card education">
            <div className="card-header">
              <GraduationCap className="icon" />
              <h2>Education Journey</h2>
            </div>
            <div className="card-content">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <p className="year">2022</p>
                <p className="degree">Graduated from High school</p>
                <p className="school">Gayatri Public School,Agra</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <p className="year">2022-2026</p>
                <p className="degree">Bachelors in Software Engineering</p>
                <p className="school">Graphic era University,Dehradun,Uttrakhand</p>
              </div>
            </div>
          </div>

          <div className="info-card experience">
            <div className="card-header">
              <Briefcase className="icon" />
              <h2>Work Experience</h2>
            </div>
            <div className="card-content">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <p className="year"></p>
                <p className="position">Fresher</p>
                <p className="company"></p>
                <p className="description"></p>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <p className="year"></p>
                <p className="position">As a freelancer</p>
                <p className="company">and a tech enthusiast</p>
                <p className="description">I Have worked on multiple projects</p>
              </div>
            </div>
          </div>

          <div className="info-card achievements">
            <div className="card-header">
              <Trophy className="icon" />
              <h2>Achievements</h2>
            </div>
            <div className="card-content">
              <div className="achievement-item">
                <div className="achievement-icon">🏆</div>
                <div>
                  <h3>Participated in Hackathon</h3>
                  <p></p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🌟</div>
                <div>
                  <h3>Selected for Internship</h3>
                  <p></p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon">🎯</div>
                <div>
                  <h3>Outstanding Achievement in Tech</h3>
                  <p>Led team to successful completion of major project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card interests">
            <div className="card-header">
              <Heart className="icon" />
              <h2>Interests & Hobbies</h2>
            </div>
            <div className="card-content">
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-emoji">📸</span>
                  <span>Photography</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🏃‍♂️</span>
                  <span>Hiking</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">📚</span>
                  <span>Reading</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">♟️</span>
                  <span>Chess</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">👨‍🍳</span>
                  <span>Cooking</span>
                </div>
                <div className="interest-item">
                  <span className="interest-emoji">🎸</span>
                  <span>Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;