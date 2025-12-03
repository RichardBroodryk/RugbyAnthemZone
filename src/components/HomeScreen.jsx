import React from 'react';
import './HomeScreen.css';

// Import the correct logo from the new navbar layout
import razNavIcon from '../Assets/images/raz-nav-icon.png';

function HomeScreen({ 
  onNavigateToFreemiumLogin, 
  onNavigateToPremiumLogin, 
  onNavigateToSuperPremiumLogin,
  onNavigateToAppropriatePage,
  onNavigateToSearch,
  onNavigateToProfile
}) {
  return (
    <div className="home-screen">
      {/* Professional Navbar */}
      <nav className="raz-navbar">
        <div className="nav-logo-section">
          <img 
            src={razNavIcon} 
            alt="Rugby Anthem Zone" 
            className="nav-main-logo" 
          />
        </div>

        <div className="nav-icons-section">
          <button className="nav-icon home-icon">
            🏠
          </button>
          
          <button className="nav-icon search-icon" onClick={onNavigateToSearch}>
            🔍
          </button>
          
          <button className="nav-icon profile-icon" onClick={onNavigateToProfile}>
            👤
          </button>
          
          <button className="nav-icon login-icon" onClick={onNavigateToAppropriatePage}>
            🔐
          </button>
          
          <button className="nav-icon menu-icon">
            ☰
          </button>
        </div>
      </nav>

      <div className="home-content">
        <div className="welcome-section">
          <h1>WELCOME TO RUGBY UNION INTERNATIONAL</h1>
          <div className="design-placeholder">
            🌍 The Global Home of Rugby - Connecting Fans Worldwide
          </div>
        </div>

        {/* Features Section - Properly sized */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-time Team Updates & Lineups</h3>
            <p>Automatically updated player details, substitutions, and tactical insights.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎵</div>
            <h3>National Anthem Experience</h3>
            <p>Anthem lyrics and audio for fans to sing along and connect with each team's cultural heritage.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📹</div>
            <h3>Pre/Post Match Content</h3>
            <p>Expert analysis and behind-the-scenes footage before and after the games.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Sponsor & Ad Integration</h3>
            <p>Tailored ad content for brands, connecting them with an engaged, rugby-loving audience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Pre/Post Match Purchasing</h3>
            <p>Match day tickets, flight tickets, Uber rides and merchandise can be sourced directly from the application.</p>
          </div>
        </div>

        {/* Subscription Section - 3 equal columns */}
        <div className="subscription-section">
          <h2>CHOOSE YOUR RUGBY EXPERIENCE</h2>
          
          <div className="subscription-buttons-container">
            <div className="subscription-buttons">
              <button className="subscription-btn freemium-btn" onClick={onNavigateToFreemiumLogin}>
                <span className="btn-main">🆓 FREEMIUM</span>
                <span className="btn-description">Free Access</span>
                <div className="btn-price">FREE</div>
                <ul className="btn-features">
                  <li>Basic match info</li>
                  <li>Live scores</li>
                  <li>Limited highlights</li>
                  <li>Basic schedule</li>
                </ul>
                <div className="btn-select">SELECT PLAN</div>
              </button>
              
              <button className="subscription-btn premium-btn" onClick={onNavigateToPremiumLogin}>
                <span className="btn-main">⭐ PREMIUM</span>
                <span className="btn-description">Most Popular</span>
                <div className="btn-price">$9.99<span className="price-period">/month</span></div>
                <ul className="btn-features">
                  <li>All Freemium features</li>
                  <li>Extended highlights</li>
                  <li>No video ads</li>
                  <li>Advanced stats</li>
                  <li>Exclusive content</li>
                </ul>
                <div className="btn-select">SELECT PLAN</div>
              </button>

              <button className="subscription-btn super-premium-btn" onClick={onNavigateToSuperPremiumLogin}>
                <span className="btn-main">👑 SUPER PREMIUM</span>
                <span className="btn-description">Ultimate Experience</span>
                <div className="btn-price">$19.99<span className="price-period">/month</span></div>
                <ul className="btn-features">
                  <li>All Premium features</li>
                  <li>Full match replays</li>
                  <li>4K streaming</li>
                  <li>Priority support</li>
                  <li>Early ticket access</li>
                  <li>Exclusive merchandise</li>
                </ul>
                <div className="btn-select">SELECT PLAN</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Ad Banner */}
      <div className="fixed-ad-banner">
        <div className="ad-content">
          <span className="ad-badge">AD</span>
          <span className="ad-text">🎽 Official Rugby Jersey Sale - 50% Off! Limited Time Offer ⚡</span>
          <button className="ad-action">SHOP NOW →</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;