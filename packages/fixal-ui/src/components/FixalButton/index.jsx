import React from 'react';
import '../../styles/fixal.css';

const FixalButton = ({ darkMode, toggleMode }) => (
  <button
    className="fixal-button"
    onClick={toggleMode}
    style={{
      backgroundColor: darkMode ? 'white' : 'black',
      color: darkMode ? 'black' : 'white',
    }}
  >
    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
  </button>
);

export default FixalButton;
