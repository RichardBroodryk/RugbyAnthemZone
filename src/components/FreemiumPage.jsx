import './FreemiumPage.css';

function FreemiumPage({ onNavigateToPremium, onNavigateBack, onNavigateToMensTournaments, onNavigateToWomensTournaments }) {
  console.log('FreemiumPage loaded - props:', { onNavigateToPremium, onNavigateBack });

  const freemiumItems = [
    { icon: '📊', label: 'Scores', description: 'Real-Time Match Info', locked: false },
    { icon: '🎟️', label: 'Tickets', description: 'Match Tickets & Events', locked: false },
    { icon: '💼', label: 'Merchandise', description: 'Official Rugby Gear', locked: true },
    { icon: '📅', label: 'Men\'s Tournaments', description: 'World Cup, Six Nations', locked: false },
    { icon: '📅', label: 'Women\'s Tournaments', description: 'Women\'s Rugby Events', locked: false },
    { icon: '🔔', label: 'Notifications', description: 'Alerts & Updates', locked: false },
    { icon: '🎶', label: 'National Anthems', description: 'Team Anthems & Lyrics', locked: false },
    { icon: '⭐', label: 'Premium Subscription', description: 'Unlock All Features', locked: false }
  ];

  const handleItemClick = (item) => {
    console.log('Item clicked:', item.label);
    
    if (item.locked) {
      alert('🔒 This feature requires Premium subscription. Upgrade to unlock exclusive merchandise stores!');
      return;
    }
    
    if (item.label === 'Premium Subscription') {
      console.log('Premium Subscription clicked - calling onNavigateToPremium');
      if (onNavigateToPremium) {
        onNavigateToPremium();
      } else {
        console.error('onNavigateToPremium is undefined!');
        alert('Navigation error: Premium feature not available');
      }
      return;
    }

    if (item.label === "Men's Tournaments") {
      if (onNavigateToMensTournaments) {
        onNavigateToMensTournaments();
      } else {
        alert("Men's Tournaments - Navigation coming soon!");
      }
      return;
    }

    if (item.label === "Women's Tournaments") {
      if (onNavigateToWomensTournaments) {
        onNavigateToWomensTournaments();
      } else {
        alert("Women's Tournaments - Navigation coming soon!");
      }
      return;
    }

    if (item.label === "National Anthems") {
      alert('🎵 National Anthems available! Go to any game overview to explore team anthems.');
      return;
    }
    
    alert(`${item.label} feature coming soon!`);
  };

  return (
    <div className="freemium-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Rugby World Cup 2025 - Official Partner! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="freemium-content">
        <h1 className="welcome-title">Welcome to the Home of Rugby Union International</h1>
        <p className="welcome-subtitle">Freemium Experience - Basic Features</p>
        
        {/* Feature Status */}
        <div className="feature-status">
          <div className="status-item unlocked">
            <span className="status-icon">✅</span>
            <span className="status-text">Game Overview & National Anthems</span>
          </div>
          <div className="status-item locked">
            <span className="status-icon">🔒</span>
            <span className="status-text">Official Merchandise Stores</span>
          </div>
        </div>
        
        {/* Limited Icon Grid */}
        <div className="freemium-grid">
          {freemiumItems.map((item, index) => (
            <div 
              key={index}
              className={`freemium-item ${item.locked ? 'locked-item' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item.locked && <div className="locked-badge">PREMIUM</div>}
              <div className="freemium-icon">
                {item.icon}
              </div>
              <div className="freemium-label">{item.label}</div>
              <div className="freemium-description">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Upgrade Prompt */}
        <div className="upgrade-prompt">
          <h3>🚀 Unlock Premium Features!</h3>
          <p><strong>Freemium includes:</strong> Game Overviews, National Anthems, Basic Content</p>
          <p><strong>Premium unlocks:</strong> Official Merchandise Stores, Ad-Free Experience, Exclusive Content</p>
          <button className="upgrade-button" onClick={() => {
            console.log('Upgrade button clicked directly');
            if (onNavigateToPremium) {
              onNavigateToPremium();
            } else {
              alert('Navigation function missing!');
            }
          }}>
            ⭐ Upgrade to Premium
          </button>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎽 Limited Edition Jerseys - Shop Now! 🛒
      </div>
    </div>
  );
}

export default FreemiumPage;