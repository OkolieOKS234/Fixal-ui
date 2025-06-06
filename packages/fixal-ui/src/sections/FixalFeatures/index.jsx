import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/fixal.css'

const FixalFeatures = ({
  type = 'grid',
  title = 'Our Features',
  description = '',
  features = [],
  highlightedIndex = null,
}) => {
  const renderCardContent = (feat) => {
    if (feat.img) {
      return typeof feat.img === 'string' ? (
        <img src={feat.img} alt={feat.title} className="feature-img" />
      ) : (
        feat.img
      );
    } else if (feat.icon) {
      return typeof feat.icon === 'string' ? (
        <span className="icon">{feat.icon}</span>
      ) : (
        <div className="icon">{feat.icon}</div>
      );
    }
    return null;
  };

  const renderGrid = () => (
    <div className="fixal-hero">
      <h1>{title}</h1>
      {description && <p className="fixal-description">{description}</p>}

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
              {renderCardContent(feat)}
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
      {description && <p className="fixal-description">{description}</p>}

      <div className="fixal-dark-features-grid">
        {features.map((feat, idx) => {
          const ref = useScrollReveal('reveal-visible');

          return (
            <div ref={ref} key={idx} className="reveal fixal-dark-card">
              {renderCardContent(feat)}
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
