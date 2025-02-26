import React, { useState } from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';
import './Projects.css';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

function ProjectCard({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={image}
          alt={title}
          className="project-image"
        />
        <div className="project-overlay">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <Github className="h-5 w-5" />
            <span>Code</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-stack e-commerce solution with real-time inventory and payment processing",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  //   tags: ["React", "Node.js", "MongoDB", "Stripe"],
  //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
  //   liveUrl: "https://ecommerce-platform.example.com"
  // },
  {
    title: "TODO Application",
    description: "A simple TODO application with user authentication and task management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "css", "javascript"],
    githubUrl: "https://github.com/Anujsinghchaudhary/todoapp-react",
    liveUrl: "https://todoapp-react-nine.vercel.app/"
  },
  {
    title: "Stock Market Prediction",
    description: "A machine learning model to predict stock prices using historical data",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", 
    tags: ["Python", "TensorFlow", "Keras", "Pandas"],
    githubUrl: "https://github.com/Anujsinghchaudhary/Stock-prediction-model",
  },
  {
    title: "emotion detection",
    description: "A machine learning model to detect human emotions using facial expressions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "TensorFlow", "OpenCV"],
    githubUrl:"https://github.com/Anujsinghchaudhary/emotion_recoginition_using_ml",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Anujsinghchaudhary/portfolio-react",
    liveUrl: "https://anujsingh-portfolio.vercel.app/"
  }
];

const categories = ["All", "Web", "Mobile", "AI/ML"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <div className="section-icon">
            <Layout />
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore my latest projects showcasing my expertise in web development,
            mobile applications, and artificial intelligence.
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;