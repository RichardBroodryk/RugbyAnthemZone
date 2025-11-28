import { useState } from 'react';
import './SecondarySplash.css';
import splash2 from '../Assets/images/Splash2.png';

function SecondarySplash({ onComplete }) {
  const [showAd, setShowAd] = useState(true);

  const handleCloseAd = (e) => {
    e.stopPropagation(); // Don't trigger the main click
    setShowAd(false);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="secondary-splash" onClick={handleContinue}>
      {/* NAVIGATION BAR - BACK! */}
      <nav className="splash-nav">
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <button className="nav-btn">☰ Menu</button>
      </nav>

      {/* Main image area */}
      <div className="splash-content">
        <img 
          src={splash2} 
          alt="Rugby Anthem Zone" 
          className="splash-image-main"
        />
        
        {/* Tap indicator */}
        <div className="tap-indicator">
          <p>Tap anywhere to continue</p>
        </div>
      </div>

      {/* Fixed ad banner at bottom */}
      {showAd && (
        <div className="ad-banner">
          <div className="ad-content">
            <span className="ad-badge">AD</span>
            <span className="ad-text">Official Rugby Gear - Shop Now! 🛒</span>
            <button className="ad-close" onClick={handleCloseAd}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondarySplash;