import { useState } from 'react';
import './SecondarySplash.css';

function SecondarySplash({ onComplete }) {
  const [showAd, setShowAd] = useState(true);

  const handleCloseAd = () => {
    setShowAd(false);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="secondary-splash" onClick={handleContinue}>
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <button className="nav-btn">☰ Menu</button>
      </nav>

      {/* Main Content */}
      <div className="secondary-content">
        <div className="tournament-section">
          <h2>Tournaments / Games</h2>
          <p className="subscribe-text">Subscribe for so much more!</p>
        </div>
        
        <p className="tagline">Transforming the Rugby Fan Experience</p>
        
        {/* Loading Animation - Now becomes click indicator */}
        <div className="loading-animation">
          <div className="rugby-field">
            <div className="rugby-ball-loading"></div>
          </div>
          <p>Tap anywhere to continue...</p>
        </div>
      </div>

      {/* Advertisement Banner */}
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