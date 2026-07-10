import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Prepare Web3Forms payload
    const formDataObj = new FormData();
    // Use the access key from environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_key_here') {
      alert("Please add your Web3Forms Access Key to .env.local to enable email sending.");
      setStatus(null);
      return;
    }

    formDataObj.append("access_key", accessKey);
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("subject", formData.subject);
    formDataObj.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000); // reset status after 5s
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-wrapper">
        {/* Info Cards */}
        <div className="contact-info">
          <div className="contact-info-card glass hover-lift">
            <span className="contact-icon"><Mail size={24} /></span>
            <div>
              <h4>Email</h4>
              <a href="mailto:jithendra.mallela@example.com">mallelajithendra2004@gmail.com</a>
            </div>
          </div>

          <div className="contact-info-card glass hover-lift">
            <span className="contact-icon"><Linkedin size={24} /></span>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/mallela-jithendra-93j" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="contact-info-card glass hover-lift">
            <span className="contact-icon"><Github size={24} /></span>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/jithendra98" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="contact-info-card glass hover-lift">
            <span className="contact-icon"><MapPin size={24} /></span>
            <div>
              <h4>Location</h4>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <h3 className="contact-form-heading">Send a Message</h3>

          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Jithendra Mallela"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                title="Please enter a complete email address containing an @ and a domain like .com"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Collaboration / Opportunity / Question"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              placeholder="Write your message here…"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="contact-submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <span className="btn-spinner" />
            ) : status === 'sent' ? (
              '✓ Message Sent!'
            ) : (
              <>Send Message &nbsp;➤</>
            )}
          </button>

          {status === 'sent' && (
            <p className="contact-success">
              Thank you for your message! I'll get back to you soon. 🎉
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
