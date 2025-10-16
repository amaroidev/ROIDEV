import React, { useState, useEffect } from 'react';
import './Laptop3D.css';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/prefer-tag-over-role, react/no-array-index-key */
const Laptop3D = () => {
  const [rotation, setRotation] = useState({ x: -10, y: 20 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x,
          y: (prev.y + 0.3) % 360
        }));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    setRotation({ x, y });
  };

  const codeSnippets = [
    'const build = () => {',
    '  return innovative',
    '    .solutions()',
    '    .withPassion();',
    '};',
    '',
    '// Always learning',
    '// Always creating'
  ];

  return (
    <div 
      className="laptop-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Interactive 3D Laptop Model"
      tabIndex={0}
    >
      <div 
        className="laptop-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* Laptop Base */}
        <div className="laptop-base">
          <div className="laptop-keyboard">
            <div className="keyboard-row">
              {[...Array(14)].map((_, i) => (
                <div key={`key-1-${i}`} className="key" style={{ animationDelay: `${i * 0.05}s` }}></div>
              ))}
            </div>
            <div className="keyboard-row">
              {[...Array(13)].map((_, i) => (
                <div key={`key-2-${i}`} className="key" style={{ animationDelay: `${i * 0.05 + 0.7}s` }}></div>
              ))}
            </div>
            <div className="keyboard-row">
              {[...Array(12)].map((_, i) => (
                <div key={`key-3-${i}`} className="key" style={{ animationDelay: `${i * 0.05 + 1.4}s` }}></div>
              ))}
            </div>
            <div className="touchpad"></div>
          </div>
        </div>

        {/* Laptop Screen */}
        <div className="laptop-screen">
          <div className="screen-frame">
            <div className="screen-content">
              <div className="code-editor">
                <div className="editor-header">
                  <div className="editor-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="editor-title">portfolio.js</div>
                </div>
                <div className="editor-body">
                  {codeSnippets.map((line, i) => (
                    <div key={`code-${i}-${line.substring(0, 5)}`} className="code-line" style={{ animationDelay: `${i * 0.1 + 2}s` }}>
                      <span className="line-number">{i + 1}</span>
                      <span className="code-text">{line}</span>
                    </div>
                  ))}
                  <div className="cursor-blink"></div>
                </div>
              </div>
            </div>
            <div className="screen-glare"></div>
          </div>
        </div>

        {/* Laptop Shadow */}
        <div className="laptop-shadow"></div>
      </div>
    </div>
  );
};

export default Laptop3D;
