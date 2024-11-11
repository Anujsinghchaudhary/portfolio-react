import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="glitch" data-text="Anuj Singh">Anuj Singh</h1>
          <div className="hero-subtitle">
            <span className="gradient-text">Full Stack Developer</span>
            <span className="separator">|</span>
            <span className="gradient-text">Web-dev,Mern stack,Software Developer</span>
          </div>
          <p className="hero-description">
            Crafting digital experiences that leave a lasting impression
          </p>
          <div className="hero-buttons">
            <button className="primary-button">
              View Projects <ArrowRight className="button-icon" />
            </button>
            <div className="social-links">
              <a href="#" className="social-link">
                <Github />
              </a>
              <a href="#" className="social-link">
                <Linkedin />
              </a>
              <a href="#" className="social-link">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          <div className="rotating-border"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </div>
  );
};

export default Hero;