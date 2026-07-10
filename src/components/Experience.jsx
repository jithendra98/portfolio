import React from 'react';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const trainingData = [
    {
      title: "Data Science - Interns Elite",
      date: "June 2025 - August 2025",
      points: [
        "Completed an industrial training program focused on core concepts of Data Science.",
        "Gained hands-on experience in data preprocessing, visualization, and building predictive models.",
        "Developed proficiency in applying statistical techniques and machine learning algorithms."
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "Power BI", "MySQL"]
    }
  ];

  return (
    <section className="experience-section animate-fade-in" style={{ animationDelay: '0.5s' }} id="experience">
      <h2 className="section-title reveal">Training & Experience</h2>
      <div className="timeline">
        {trainingData.map((training, idx) => (
          <div key={idx} className="timeline-item glass reveal-left">
            <h3 className="timeline-title">{training.title}</h3>
            <div className="timeline-meta">
              <span><Calendar size={14} /> {training.date}</span>
            </div>
            <ul className="timeline-points">
              {training.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="timeline-tech-small">
              {training.tech.map((tech, i) => (
                <span key={i} className="tech-badge-small">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
