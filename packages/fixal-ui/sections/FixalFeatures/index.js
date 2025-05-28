import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/fixal.css';

const FixalFeatures = ({
  type = 'grid',
  title = 'Our Features',
  features = [],
  highlightedIndex = null,
}) => {
  const renderGrid = () => (
    <div className="fixal-hero">
      <h1>{title}</h1>
      <div className="fixal-features-grid">
        {features.map((feat, idx) => {
          const ref = useScrollReveal('reveal-visible');
          const isHighlighted = highlightedIndex === idx;
          return (
            <div
              ref={ref}
              key={idx}
              className={`reveal fixal-feature-card${isHighlighted ? ' highlighted' : ''}`}
            >
              {feat.icon && <div className="icon">{feat.icon}</div>}
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderDarkGlow = () => (
    <div className="fixal-hero dark-glow">
      <h1>{title}</h1>
      <div className="fixal-dark-features-grid">
        {features.map((feat, idx) => {
          const ref = useScrollReveal('reveal-visible');
          return (
            <div ref={ref} key={idx} className="reveal fixal-dark-card">
              {feat.img && <img src={feat.img} alt={feat.title} className="feature-img" />}
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return type === 'dark-glow' ? renderDarkGlow() : renderGrid();
};

export default FixalFeatures;
