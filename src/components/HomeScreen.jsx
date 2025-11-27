import './HomeScreen.css';

function HomeScreen({ 
  onNavigateToFreemiumLogin, 
  onNavigateToPremiumLogin, 
  onNavigateToSuperPremiumLogin,
  onNavigateToAppropriatePage
}) {

  return (
    <div className="home-screen">
      <nav className="top-nav">
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <button className="nav-btn" onClick={onNavigateToAppropriatePage}>🔐 Login</button>
        <button className="nav-btn">☰ Menu</button>
      </nav>

      <div className="home-content">
        <div className="welcome-section">
          <h1>WELCOME TO RUGBY UNION INTERNATIONAL</h1>
          <div className="design-placeholder">
            🌍 The Global Home of Rugby - Connecting Fans Worldwide
          </div>
        </div>

        <div className="features-section">
          <div className="feature-card">
            <h3>⚡ Real-time Team Updates & Lineups</h3>
            <p>Automatically updated player details, substitutions, and tactical insights.</p>
          </div>

          <div className="feature-card">
            <h3>🎵 National Anthem Experience</h3>
            <p>Anthem lyrics and audio for fans to sing along and connect with each team's cultural heritage.</p>
          </div>

          <div className="feature-card">
            <h3>📹 Pre/Post Match Content</h3>
            <p>Expert analysis and behind-the-scenes footage before and after the games.</p>
          </div>

          <div className="feature-card">
            <h3>🏢 Sponsor & Ad Integration</h3>
            <p>Tailored ad content for brands, connecting them with an engaged, rugby-loving audience.</p>
          </div>

          <div className="feature-card">
            <h3>🛒 Pre/Post Match Purchasing</h3>
            <p>Match day tickets, flight tickets, Uber rides and merchandise can be sourced directly from the application.</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn freemium" onClick={onNavigateToFreemiumLogin}>
            <span className="button-main">🆓 Freemium</span>
            <span className="button-description">Free Basic Features</span>
          </button>
          
          <button className="action-btn premium" onClick={onNavigateToPremiumLogin}>
            <span className="button-main">⭐ Premium</span>
            <span className="button-description">$9.99/month</span>
          </button>

          <button className="action-btn super-premium" onClick={onNavigateToSuperPremiumLogin}>
            <span className="button-main">👑 Super Premium</span>
            <span className="button-description">$19.99/month</span>
          </button>
        </div>
      </div>

      <div className="ad-banner">
        <div className="ad-content">
          <span className="ad-badge">AD</span>
          <span className="ad-text">🎽 Official Rugby Jersey Sale - 50% Off! Limited Time Offer ⚡</span>
          <button className="ad-close">×</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;