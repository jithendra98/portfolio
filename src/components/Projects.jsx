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
    },
    {
      title: "E-Commerce Intelligence Platform",
      date: "Nov 2024 - Feb 2025",
      points: [
        "Built a sentiment analysis model (TF-IDF + Logistic Regression) on 200K+ reviews, achieving 88% F1-score.",
        "Developed time series forecasting models (ARIMA, Prophet) to predict demand, reducing inventory overstock by 22%.",
        "Automated the complete pipeline (data ingestion → analysis → modeling → visualization), reducing reporting time by 90%.",
        "Designed an interactive Streamlit dashboard to visualize KPIs, forecasts, and sentiment trends."
      ],
      tech: ["Python", "NLTK", "Seaborn", "ARIMA", "Prophet", "Streamlit"],
      links: { demo: "#", github: "https://github.com/jithendra98/ecommerce_intelligence" }
    },
    {
      title: "Retail Sales Performance Analytics",
      date: "Aug 2025 - Sep 2025",
      points: [
        "Extracted and analyzed 1M+ transactional records using advanced SQL (joins, CTEs, window functions).",
        "Performed EDA and data wrangling to uncover seasonal trends, top products, and customer segments.",
        "Built an interactive Power BI dashboard with KPI tracking, drill-down filters, and DAX-based metrics.",
        "Conducted cohort analysis to evaluate customer retention, identifying a 34% drop in Month 2."
      ],
      tech: ["SQL", "Python", "Pandas", "Power BI", "DAX"],
      links: { demo: "#", github: "https://github.com/jithendra98/retail_sales_analytics" }
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
              {project.links.demo !== "#" && (
                <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
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
