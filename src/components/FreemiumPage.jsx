import './FreemiumPage.css';
import razNavIcon from '../Assets/images/raz-nav-icon.png';

function FreemiumPage({ 
  onNavigateToPremium, 
  onNavigateToSuperPremium,
  onNavigateBack, 
  onNavigateToMensTournaments, 
  onNavigateToWomensTournaments,
  onNavigateToLiveScores,
  onNavigateToTickets,
  onNavigateToNationalAnthems,
  onNavigateToNotifications,
  onNavigateToGlobalCalendar
}) {

  const freemiumItems = [
    { icon: '📊', label: 'Live Scores', description: 'Real-Time Match Updates', action: 'scores', locked: false },
    { icon: '🎟️', label: 'Tickets', description: 'Match Tickets & Events', action: 'tickets', locked: false },
    { icon: '📅', label: 'Match Calendar', description: 'Global Schedule & Reminders', action: 'calendar', locked: false },
    { icon: '🏆', label: 'Men\'s Tournaments', description: 'World Cup, Six Nations', action: 'mens-tournaments', locked: false },
    { icon: '🌟', label: 'Women\'s Tournaments', description: 'Women\'s Rugby Events', action: 'womens-tournaments', locked: false },
    { icon: '🔔', label: 'Notifications', description: 'Alerts & Updates', action: 'notifications', locked: false },
    { icon: '🎶', label: 'National Anthems', description: 'Team Anthems & Lyrics', action: 'anthems', locked: false },
    { icon: '🛒', label: 'Merchandise', description: 'Official Rugby Gear', action: 'merchandise', locked: true },
    { icon: '📰', label: 'News Hub', description: 'Rugby News & Updates', action: 'news', locked: true },
    { icon: '🏅', label: 'Fantasy League', description: 'Build Your Dream Team', action: 'fantasy', locked: true },
    { icon: '🎥', label: 'Match Videos', description: 'Highlights & Analysis', action: 'videos', locked: true },
    { icon: '📈', label: 'Advanced Stats', description: 'Complete Statistics', action: 'stats', locked: true }
  ];

  const handleItemClick = (item) => {
    if (item.locked) {
      alert('🔒 This feature requires Premium subscription. Upgrade to unlock all exclusive features!');
      onNavigateToPremium?.();
      return;
    }
    
    switch(item.action) {
      case "mens-tournaments":
        onNavigateToMensTournaments?.();
        break;
      case "womens-tournaments":
        onNavigateToWomensTournaments?.();
        break;
      case "scores":
        onNavigateToLiveScores?.();
        break;
      case "tickets":
        onNavigateToTickets?.();
        break;
      case "calendar":
        onNavigateToGlobalCalendar?.();
        break;
      case "anthems":
        onNavigateToNationalAnthems?.();
        break;
      case "notifications":
        onNavigateToNotifications?.();
        break;
      default:
        alert(`${item.label} feature coming soon!`);
    }
  };

  return (
    <div className="freemium-page">
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
          <button className="nav-icon back-icon" onClick={onNavigateBack}>
            ←
          </button>
          <button className="nav-icon home-icon" onClick={() => window.location.reload()}>
            🏠
          </button>
          <button className="nav-icon search-icon">
            🔍
          </button>
          <button className="nav-icon profile-icon">
            👤
          </button>
          <button className="nav-icon menu-icon">
            ☰
          </button>
        </div>
      </nav>

      {/* Top Ad Banner - UNDERNEATH NAVBAR */}
      <div className="top-ad-banner">
        🏆 Rugby World Cup 2025 - Free Access Available 🌍
      </div>

      <div className="home-content">
        <h1 className="welcome-title">Welcome to Rugby Union International</h1>
        <p className="welcome-subtitle">Freemium Access - Basic Features Available</p>
        
        <div className="premium-badge">
          🆓 FREEMIUM ACCESS - UPGRADE FOR FULL FEATURES
        </div>

        {/* Upgrade Section */}
        <div className="upgrade-section">
          <h3>✨ Upgrade for Full Access:</h3>
          <div className="upgrade-options">
            <button className="upgrade-btn premium" onClick={onNavigateToPremium}>
              🥇 Premium - $9.99/month
            </button>
            <button className="upgrade-btn super-premium" onClick={onNavigateToSuperPremium}>
              💎 Super Premium - $19.99/month
            </button>
          </div>
        </div>
        
        <div className="icon-grid">
          {freemiumItems.map((item, index) => (
            <div 
              key={index}
              className={`icon-item ${item.locked ? 'locked-item' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="icon">
                {item.icon}
                {item.locked && <span className="premium-star">🔒</span>}
              </div>
              <div className="icon-label">{item.label}</div>
              <div className="icon-description">{item.description}</div>
              
              {item.locked ? (
                <div className="status-badge locked">PREMIUM</div>
              ) : (
                <div className="status-badge available">FREE</div>
              )}
            </div>
          ))}
        </div>

        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToMensTournaments}>
            🏆 Browse Men's Tournaments
          </button>
          <button className="quick-btn" onClick={onNavigateToGlobalCalendar}>
            📅 View Match Calendar
          </button>
          <button className="quick-btn" onClick={onNavigateToPremium}>
            ⭐ Upgrade to Premium
          </button>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🎽 Limited Free Features - Upgrade for Complete Access! 🛒
      </div>
    </div>
  );
}

export default FreemiumPage;