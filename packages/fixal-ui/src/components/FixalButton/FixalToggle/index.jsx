import '../../../styles/fixal.css';

const FixalToggleSwitch = ({ darkMode, toggleMode }) => {
  return (
    <div className="theme">
      <input
        className="theme__toggle"
        type="checkbox"
        checked={darkMode}
        onChange={toggleMode}
        aria-label="Toggle Theme"
      />
      <div className="theme__fill"></div>
      <div className="theme__icon">
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
        <div className="theme__icon-part"></div>
      </div>
    </div>
  );
};

export default FixalToggleSwitch;
