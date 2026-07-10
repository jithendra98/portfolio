import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "Data Science Learner",
    "AI & RAG Enthusiast"
  ];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(100);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else {
      setTypingSpeed(isDeleting ? 50 : 100);
    }
  };

  return (
    <section className="hero glass animate-fade-in" id="home">
      <div className="hero-content">
        <div className="hero-header">
          <div className="avatar-container">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg.png`}
              alt="Jithendra Mallela" 
              className="hero-avatar"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="avatar-fallback" style={{ display: 'none' }}>
              JM
            </div>
          </div>
          <div className="hero-titles">
            <h1 className="hero-title">Jithendra Mallela</h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
        </div>
        <p className="hero-description">
          Passionate about building scalable web applications, intelligent solutions using AI/RAG, and solving complex problems with modern technologies.
        </p>
        <div className="hero-links">
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Jithendra_Mallela_Resume.pdf" className="hero-link" style={{ background: 'var(--accent-gradient)', borderColor: 'transparent', color: '#fff' }}>
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a href="mailto:mallelajithendra2004@gmail.com" className="hero-link">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/mallela-jithendra-93j" target="_blank" rel="noopener noreferrer" className="hero-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/jithendra98" target="_blank" rel="noopener noreferrer" className="hero-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="tel:+919652276818" className="hero-link">
            <Phone size={20} />
            <span>+91-9652276818</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
