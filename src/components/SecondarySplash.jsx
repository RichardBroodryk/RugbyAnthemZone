import { useState } from 'react';
import './SecondarySplash.css';
import splash2 from '../Assets/images/Splash2.png';
import razNavIcon from '../Assets/images/raz-nav-icon.png';

function SecondarySplash({ onComplete }) {
  const [showAd, setShowAd] = useState(true);

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="secondary-splash" onClick={handleContinue}>
      {/* NEW NAVBAR - SAME AS HOMESCREEN */}
      <nav className="raz-navbar">
        <div className="nav-logo-section">
          <img 
            src={razNavIcon} 
            alt="Rugby Anthem Zone" 
            className="nav-main-logo" 
          />
        </div>

        <div className="nav-icons-section">
          <button className="nav-icon home-icon">🏠</button>
          <button className="nav-icon search-icon">🔍</button>
          <button className="nav-icon profile-icon">👤</button>
          <button className="nav-icon menu-icon">☰</button>
        </div>
      </nav>

      {/* Main image area - KEEP SAME */}
      <div className="splash-content">
        <img 
          src={splash2} 
          alt="Rugby Anthem Zone" 
          className="splash-image-main"
        />
      </div>

      {/* NEW: Click anywhere block - SEPARATE, NOT OVERLAY */}
      <div className="click-anywhere-block">
        <div className="click-container">
          <div className="click-icon">👉</div>
          <div className="click-text">
            <h3>CLICK ANYWHERE TO CONTINUE</h3>
            <p>Tap screen or press any key to enter Rugby Hub</p>
          </div>
        </div>
      </div>

      {/* FIXED AD BANNER - SAME AS HOMESCREEN */}
      {showAd && (
        <div className="fixed-ad-banner">
          <div className="ad-content">
            <span className="ad-badge">AD</span>
            <span className="ad-text">🎽 Official Rugby Jersey Sale - 50% Off! Limited Time Offer ⚡</span>
            <button className="ad-action">SHOP NOW →</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondarySplash;