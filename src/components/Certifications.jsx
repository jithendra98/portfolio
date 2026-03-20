import React, { useState } from 'react';
import { Award, Trophy, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { title: "Java Skill Up | GeeksforGeeks", date: "January 2026", path: "/GFG JAVA Certificate.pdf" },
    { title: "Data Science Industrial Training | InternsElite", date: "August 2025", path: "/Certificate of Training-MALLELA JITHENDRA_Data Science_IT_2025_DS-T6_TC-10256_InternsElite.pdf" },
    { title: "Cloud Computing | NPTEL", date: "April 2025", highlight: "Elite with 60%", path: "/Cloud Computing.pdf" },
    { title: "Full Stack Development with MERN | thingQbator", date: "December 2025", path: "/1766658276420_MallelaJithendra_Course-Excellence.pdf" },
    { title: "Oracle Cloud Infrastructure | Oracle", date: "December 2025", path: "/oracle eCertificate.pdf" },
    { title: "Chatbot or smart Assistant Development | thingQbator", date: "December 2025", path: "/1766657649704_MallelaJithendra_Course-Excellence.pdf" },
    { title: "Responsive Web Design Developer | freeCodeCamp", date: "November 2023", path: "/freecodecamp.pdf" }
  ];

  return (
    <section className="certifications-section animate-fade-in" style={{ animationDelay: '0.8s' }} id="certifications">
      <h2 className="section-title reveal">Certifications & Achievements</h2>
      
      <div className="achievements-card glass mb-8 reveal">
        <h3 className="achievements-title"><Trophy size={20} className="inline-icon" /> Key Achievements</h3>
        <ul className="achievements-list">
          <li>Completed NPTEL Certification in Cloud Computing, securing Elite with 60%.</li>
          <li>Secured 2nd Prize at the State-Level Science Congress. Recognized and awarded in the competition.</li>
        </ul>
      </div>

      <div className="certs-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card glass hover-lift reveal">
            <Award className="cert-icon" size={24} />
            <div className="cert-details">
              <h4>{cert.title}</h4>
              <span className="cert-date">{cert.date}</span>
              {cert.highlight && <span className="cert-highlight">{cert.highlight}</span>}
            </div>
            <button 
              onClick={() => setSelectedCert(cert)} 
              className="cert-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, outline: 'none', fontFamily: 'inherit', textAlign: 'left' }}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{selectedCert.title}</h3>
              <button className="modal-close" onClick={() => setSelectedCert(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <iframe 
                src={selectedCert.path} 
                title={selectedCert.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
