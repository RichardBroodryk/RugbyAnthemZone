import './HomePage.css';

function HomePage({ 
  onNavigateToSignup, 
  onNavigateBack, 
  onNavigateToMensTournaments, 
  onNavigateToWomensTournaments,
  onNavigateToFantasyLeagues,
  onNavigateToFinalResults,
  onNavigateToPodcasts,
  onNavigateToPPV,
  onNavigateToAudio,
  onNavigateToGameStats,
  onNavigateToNationalAnthems,
  onNavigateToTournamentMerchandise,
  onNavigateToLiveScores
}) {
  const gridItems = [
    // CORE FEATURES - NOW CONNECTED
    { icon: '📊', label: 'Live Scores', description: 'Real-Time Match Info', premium: true, action: 'scores' },
    { icon: '🎟️', label: 'Tickets', description: 'Match Tickets & Events', premium: true, action: 'tickets' },
    { icon: '🛒', label: 'Merchandise', description: 'Official Rugby Gear', premium: true, action: 'merchandise' },
    { icon: '🔔', label: 'Notifications', description: 'Alerts & Updates', premium: true, action: 'notifications' },
    
    // TOURNAMENTS - WORKING
    { icon: '🏆', label: 'Men\'s Tournaments', description: 'World Cup, Six Nations', action: 'mens-tournaments' },
    { icon: '🌟', label: 'Women\'s Tournaments', description: 'Women\'s Rugby Events', action: 'womens-tournaments' },
    
    // CONTENT & MEDIA - NOW CONNECTED
    { icon: '🎥', label: 'Match Videos', description: 'Highlights & Analysis', premium: true, action: 'videos' },
    { icon: '🎶', label: 'National Anthems', description: 'Lyrics & Audio', premium: true, action: 'anthems' },
    { icon: '🎧', label: 'Podcasts', description: 'Expert Analysis', premium: true, action: 'podcasts' },
    { icon: '📺', label: 'Live PPV', description: 'Pay-Per-View Games', premium: true, action: 'ppv' },
    { icon: '🔊', label: 'Live Audio', description: 'Audio Streaming', premium: true, action: 'audio' },
    
    // FANTASY & STATS - NOW CONNECTED
    { icon: '🏅', label: 'Fantasy League', description: 'Build Your Dream Team', premium: true, action: 'fantasy' },
    { icon: '📈', label: 'Results & Stats', description: 'Complete Statistics', premium: true, action: 'results' },
    
    // TRAVEL & SERVICES - COMING SOON
    { icon: '🛫', label: 'Flights', description: 'Travel Bookings', premium: true, action: 'flights' },
    { icon: '🏨', label: 'Hotels', description: 'Accommodation', premium: true, action: 'hotels' },
    { icon: '🚗', label: 'Uber', description: 'Ride Services', premium: true, action: 'uber', className: 'uber-icon' }
  ];

  const handleIconClick = (action, label) => {
    switch (action) {
      // ========== WORKING FEATURES ==========
      
      // Tournament Navigation
      case "mens-tournaments":
        onNavigateToMensTournaments();
        break;
      case "womens-tournaments":
        onNavigateToWomensTournaments();
        break;
      
      // New Premium Features (ALL WORKING NOW)
      case "fantasy":
        onNavigateToFantasyLeagues();
        break;
      case "results":
        onNavigateToFinalResults();
        break;
      case "podcasts":
        onNavigateToPodcasts();
        break;
      case "ppv":
        onNavigateToPPV();
        break;
      case "audio":
        onNavigateToAudio();
        break;
      case "anthems":
        onNavigateToNationalAnthems();
        break;
      case "merchandise":
        onNavigateToTournamentMerchandise();
        break;
      case "scores":
        onNavigateToLiveScores();
        break;
      
      // ========== COMING SOON FEATURES ==========
      case "tickets":
        alert(`🎟️ ${label} - Ticket integration coming soon!`);
        break;
      case "notifications":
        alert(`🔔 ${label} - Push notifications feature in development!`);
        break;
      case "videos":
        alert(`🎥 ${label} - Match video library launching soon!`);
        break;
      case "flights":
        alert(`🛫 ${label} - Flight booking integration coming soon!`);
        break;
      case "hotels":
        alert(`🏨 ${label} - Hotel booking feature in development!`);
        break;
      case "uber":
        alert(`🚗 ${label} - Ride service integration launching soon!`);
        break;
      
      default:
        alert(`${label} - Feature coming soon!`);
    }
  };

  return (
    <div className="home-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Rugby World Cup 2025 - Official Partner! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn" onClick={() => window.location.reload()}>🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="home-content">
        <h1 className="welcome-title">Welcome to the Home of Rugby Union International</h1>
        <p className="welcome-subtitle">Your Premium Destination for everything International Rugby</p>
        
        {/* Premium Badge */}
        <div className="premium-badge">
          ⭐ PREMIUM MEMBER ACCESS - ALL FEATURES UNLOCKED
        </div>
        
        {/* Feature Status Info */}
        <div className="feature-status">
          <div className="status-item">
            <span className="status-dot working"></span>
            <span>Ready to use</span>
          </div>
          <div className="status-item">
            <span className="status-dot coming-soon"></span>
            <span>Coming soon</span>
          </div>
        </div>
        
        {/* Icon Grid */}
        <div className="icon-grid">
          {gridItems.map((item, index) => (
            <div 
              key={index}
              className={`icon-item ${item.premium ? 'premium-feature' : ''}`}
              onClick={() => handleIconClick(item.action, item.label)}
            >
              <div className={`icon ${item.className || ''}`}>
                {item.icon}
                {item.premium && <span className="premium-star">⭐</span>}
              </div>
              <div className="icon-label">{item.label}</div>
              <div className="icon-description">{item.description}</div>
              
              {/* Status Indicator */}
              {(['fantasy', 'results', 'podcasts', 'ppv', 'audio', 'anthems', 'merchandise', 'scores', 'mens-tournaments', 'womens-tournaments'].includes(item.action)) && (
                <div className="status-badge working">READY</div>
              )}
              {!['fantasy', 'results', 'podcasts', 'ppv', 'audio', 'anthems', 'merchandise', 'scores', 'mens-tournaments', 'womens-tournaments'].includes(item.action) && (
                <div className="status-badge coming-soon">SOON</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎽 Limited Edition Jerseys - Shop Now! 🛒
      </div>
    </div>
  );
}

export default HomePage;