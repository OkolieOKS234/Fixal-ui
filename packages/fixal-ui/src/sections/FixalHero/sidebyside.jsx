
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../styles/fixal.css';

const SideBySideHero = ({ title, subtitle, ctaText, ctaButton, imgSrc }) => {
  const textRef = useScrollReveal('reveal-visible');
  const imgRef = useScrollReveal('reveal-visible');

  return (
    <div className="fixal-hero row">
      <div ref={textRef} className="reveal" style={{ flex: 1 }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaButton ? ctaButton : <FixalButton label={ctaText} />}
      </div>
      <img ref={imgRef} src={imgSrc} alt="Hero" className="reveal" style={{ flex: 1, maxWidth: '100%' }} />
    </div>
  );
};

export default SideBySideHero;
