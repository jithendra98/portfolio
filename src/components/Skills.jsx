import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript (ES6+)"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "React.js", "Next.js 14", "Node.js", "Express.js", "REST API", "Tailwind CSS"]
    },
    {
      category: "Tools & Platforms",
      items: ["MySQL", "PostgreSQL", "Prisma ORM", "Docker", "Git", "GitHub", "Postman", "Power BI", "Excel"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-Solving", "Team Player", "Adaptability"]
    }
  ];

  return (
    <section className="skills-section animate-fade-in" style={{ animationDelay: '0.2s' }} id="skills">
      <h2 className="section-title reveal">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} className="skill-card glass reveal-right">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="skill-badge">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
