import React, { useState, useEffect, useRef } from 'react';
import AIChat from './AIChat';

const RoboCompanion = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const roboRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye movement distance based on angle
  const maxEyeMove = 7;
  let eyeX = 0;
  let eyeY = 0;

  if (roboRef.current) {
    const rect = roboRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
    
    // Scale distance naturally out to the max setting
    const distance = Math.min(
      Math.hypot(mousePos.x - centerX, mousePos.y - centerY) / 30,
      maxEyeMove
    );

    eyeX = Math.cos(angle) * distance;
    eyeY = Math.sin(angle) * distance;
  }

  return (
    <div className="chatbot-wrapper">
      {isChatOpen && <AIChat onClose={() => setIsChatOpen(false)} />}
      
      <div 
        className={`splunk-robot-container ${isChatOpen ? 'active' : ''}`}
        onClick={() => setIsChatOpen((prev) => !prev)}
        title="Click me to chat with Jithendra's AI assistant!"
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }}></div>
        <iframe 
          src="https://my.spline.design/genkubgreetingrobot-2JNl3ubuV2e81X7vsKI4DLhB/" 
          frameBorder="0" 
          style={{ 
            position: 'absolute',
            top: '-5px',
            left: '-15px',
            width: '200px', 
            height: '200px',
            backgroundColor: 'transparent',
            pointerEvents: 'none'
          }}
          title="3D Greeting Robot"
        ></iframe>
      </div>
    </div>
  );
};

export default RoboCompanion;
