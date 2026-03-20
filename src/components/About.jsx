import React from 'react';
import { Code, Brain, Rocket, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, title: "Full Stack", desc: "Building scalable web apps" },
    { icon: <Brain size={24} />, title: "AI/RAG", desc: "Implementing intelligent solutions" },
    { icon: <Rocket size={24} />, title: "Problem Solver", desc: "Tackling complex challenges" },
    { icon: <Coffee size={24} />, title: "Continuous Learner", desc: "Always exploring new tech" }
  ];

  return (
    <section id="about" className="animate-fade-in">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="about-text glass hover-lift reveal-left">
          <h3>Hello, I'm <span className="highlight">Jithendra</span>! 👋</h3>
          <p>
            I am a passionate aspiring <strong className="text-highlight">Software Engineer</strong> and <strong className="text-highlight">Data Science</strong> learner based in India. 
            My journey in tech is driven by an insatiable curiosity for how things work and a desire to build 
            solutions that make a real impact.
          </p>
          <p>
            I specialize in bridging the gap between elegant <strong className="text-highlight">frontend interfaces</strong> and robust <strong className="text-highlight">backend architectures</strong>. 
            Recently, I've been diving deep into the world of <strong className="text-highlight">Artificial Intelligence</strong> and <strong className="text-highlight">Retrieval-Augmented Generation (RAG)</strong>, 
            exploring how we can use intelligent models to solve complex, real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, participating in continuous learning, 
            or brainstorming my next big project. I believe in writing <strong className="text-highlight">clean code</strong>, building intuitive user experiences, 
            and constantly pushing the boundaries of what's possible.
          </p>
        </div>

        <div className="about-stats reveal-right">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass hover-lift">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h4>{stat.title}</h4>
                <p>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
