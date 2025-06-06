import '../styles/fixal.css';

const FixalMobileIntro = ({ appName, tagline, imgSrc, onGetStarted }) => {
  return (
    <div className="fixal-mobile-intro">
      <img src={imgSrc} alt={appName} className="intro-logo" />
      <h1>{appName}</h1>
      <p>{tagline}</p>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default FixalMobileIntro;
