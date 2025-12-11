import './SecondarySplash.css';

function SecondarySplash({ onComplete }) {
  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="secondary-splash" onClick={handleContinue}>
      {/* Background overlay */}
      <div className="splash-overlay"></div>
      
      {/* Main container */}
      <div className="splash-container">
        
        {/* Title section */}
        <div className="title-section">
          <h1 className="main-title">RUGBY ANTHEM ZONE</h1>
          <p className="subtitle">The Ultimate International Rugby Home</p>
        </div>
        
        {/* Content area */}
        <div className="content-area">
          
          {/* Two column row */}
          <div className="features-row">
            {/* Left Feature Block */}
            <div className="feature-column">
              <div className="feature-block">
                <div className="feature-header">
                  <div className="feature-icon">🏆</div>
                  <h2 className="feature-title">App Features</h2>
                </div>
                <div className="feature-content">
                  Experience comprehensive rugby coverage with our premium features. 
                  Access all major <span className="feature-highlight">Men's Tournaments</span> and complete 
                  <span className="feature-highlight"> Women's Tournament</span> coverage. 
                  Follow matches in real-time with our <span className="feature-highlight">Live Match Center</span>, 
                  complete with live scores, commentary, and instant updates.
                </div>
              </div>
            </div>
            
            {/* Right Feature Block */}
            <div className="feature-column">
              <div className="feature-block">
                <div className="feature-header">
                  <div className="feature-icon">⚡</div>
                  <h2 className="feature-title">Premium Content</h2>
                </div>
                <div className="feature-content">
                  Dive deeper with exclusive content including HD video highlights, 
                  expert analysis, and interactive match predictions. Track player 
                  statistics, team profiles, and historical data. Plan your rugby 
                  calendar with our comprehensive fixtures and results tracker. 
                  Plus, enjoy fantasy rugby leagues and immersive stadium experiences.
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Block - Full width */}
          <div className="bottom-block">
            <h2 className="bottom-title">Complete Rugby Experience Package</h2>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">🎫</div>
                <span className="service-label">Match Tickets</span>
              </div>
              <div className="service-item">
                <div className="service-icon">✈️</div>
                <span className="service-label">Flight Bookings</span>
              </div>
              <div className="service-item">
                <div className="service-icon">🚗</div>
                <span className="service-label">Uber Transport</span>
              </div>
              <div className="service-item">
                <div className="service-icon">🏨</div>
                <span className="service-label">Hotel Stays</span>
              </div>
              <div className="service-item">
                <div className="service-icon">🍺</div>
                <span className="service-label">Pub & Dining</span>
              </div>
              <div className="service-item">
                <div className="service-icon">🛍️</div>
                <span className="service-label">Official Merch</span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      {/* Continue prompt */}
      <div className="continue-section" onClick={handleContinue}>
        <div className="continue-content">
          <div className="continue-icon">👇</div>
          <div className="continue-text">
            <h3>TAP TO CONTINUE</h3>
            <p>Enter Rugby Hub</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SecondarySplash;