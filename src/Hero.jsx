import { useState } from 'react';

function Hero() {
  const [buttonText, setButtonText] = useState('Get Started');
  
  const handleClick = () => {
    setButtonText('Loading...');
    setTimeout(() => {
      setButtonText('Welcome!');
    }, 1000);
  };

  return (
    <div className="hero">
      <h1>Welcome to My App</h1>
      <p>Solving [Your Problem Here] for [Your Target Audience]</p>
      <div className="button-group">
        <button className="primary-btn" onClick={handleClick}>
          {buttonText}
        </button>
        <button className="secondary-btn" onClick={() => alert('Learn More clicked!')}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;