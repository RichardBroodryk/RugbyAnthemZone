import './HomeScreen.css';

function HomeScreen({ 
  onNavigateToFreemiumLogin, 
  onNavigateToPremiumLogin, 
  onNavigateToAppropriatePage,
  userStatus 
}) {
  
  // Determine if Sign In button should be active
  const isSignInActive = userStatus !== null;

  return (
    <div className="home-screen">
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <button className="nav-btn">☰ Menu</button>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <div className="welcome-section">
          <h1>WELCOME TO</h1>
          <div className="design-placeholder">
            [My own DESIGN - to be added later]
          </div>
        </div>

        {/* Feature Descriptions */}
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

        {/* Action Buttons - UPDATED STRATEGY */}
        <div className="action-buttons">
          <button className="action-btn freemium" onClick={onNavigateToFreemiumLogin}>
            Freemium Sign In
          </button>
          <button className="action-btn subscribe" onClick={onNavigateToPremiumLogin}>
            Premium Subscribe
          </button>
          <button 
            className="action-btn signin" 
            onClick={onNavigateToAppropriatePage}
            disabled={!isSignInActive}
          >
            {isSignInActive ? 'Sign In' : 'Choose Option First'}
          </button>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div className="ad-banner">
        <div className="ad-content">
          <span className="ad-badge">AD</span>
          <span className="ad-text">Official Rugby Jersey Sale - 50% Off! 🎽</span>
          <button className="ad-close">×</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;