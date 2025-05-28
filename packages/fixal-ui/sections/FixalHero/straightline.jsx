import React from 'react';
import { useScrollReveal } from '../../src/hooks/useScrollReveal';
import '../../styles/fixal.css';

const StraightLineHero = ({ title, subtitle, ctaText, imgSrc }) => {
  const textRef = useScrollReveal('reveal-visible');
  const imgRef = useScrollReveal('reveal-visible');

  return (
    <div className="fixal-hero">
      <div ref={textRef} className="reveal">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="fixal-button">{ctaText}</button>
      </div>
      <img ref={imgRef} src={imgSrc} alt="Hero" className="reveal" style={{ marginTop: '2rem', maxWidth: '100%' }} />
    </div>
  );
};

export default StraightLineHero;
