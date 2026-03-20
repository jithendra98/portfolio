import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      score: "CGPA: 7.00",
      location: "Phagwara, Punjab",
      date: "August 2023 - Present"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate",
      score: "Percentage: 76.1%",
      location: "Chilakaluripet, Andhra Pradesh",
      date: "August 2021 - May 2022"
    },
    {
      institution: "AMG Residential High School",
      degree: "Matriculation",
      score: "CGPA: 78.2%",
      location: "Chilakaluripet, Andhra Pradesh",
      date: "July 2019 - April 2020"
    }
  ];

  return (
    <section className="education-section animate-fade-in" style={{ animationDelay: '0.9s' }} id="education">
      <h2 className="section-title reveal">Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item glass reveal-right">
            <h3 className="timeline-title">{edu.institution}</h3>
            <h4 className="timeline-subtitle">{edu.degree}</h4>
            <p className="timeline-score">{edu.score}</p>
            <div className="timeline-meta">
              <span><MapPin size={14} /> {edu.location}</span>
              <span><Calendar size={14} /> {edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
