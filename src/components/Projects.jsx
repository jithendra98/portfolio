import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Research Assistant using RAG",
      date: "Dec 2025 - Feb 2026",
      points: [
        "Built an AI-powered Research Assistant using RAG architecture to enable accurate question answering over PDF documents.",
        "Integrated FAISS vector database with embeddings for fast semantic search and efficient document retrieval.",
        "Designed a Streamlit-based interactive chat interface using LLMs to deliver context-aware answers with source references."
      ],
      tech: ["Python", "RAG", "LangChain", "FAISS", "Streamlit", "OpenAI API"],
      links: { demo: "https://ai-powered-research-assistant-rag.streamlit.app/", github: "https://github.com/jithendra98/AI-Powered-Research-Assistant-using-RAG" }
    },
    {
      title: "AI-Interview Coach Web App",
      date: "Aug 2025 - Jan 2026",
      points: [
        "Built an AI mock interview platform using Django and GPT-3.5 that generates role-specific questions with AI-scored feedback.",
        "Developed a smart resume analyser using LangChain + OpenAI to parse files and identify missing keywords.",
        "Deployed on Render using Gunicorn and Whitenoise for static file serving with SQLite."
      ],
      tech: ["Python", "Django", "OpenAI", "LangChain", "SQLite", "Render"],
      links: { demo: "https://ai-interview-coach-web-app.onrender.com/", github: "https://github.com/jithendra98/ai-interview-coach-web-app?tab=readme-ov-file" }
    }
  ];

  return (
    <section className="projects-section animate-fade-in" style={{ animationDelay: '0.4s' }} id="projects">
      <h2 className="section-title reveal">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card glass hover-lift reveal">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-date">{project.date}</span>
            </div>
            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
