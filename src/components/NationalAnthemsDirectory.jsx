import React from 'react';
import './NationalAnthemsDirectory.css';
import NavBar from './NavBar';

const NationalAnthemsDirectory = ({ onNavigateBack, onNavigateToAnthem }) => {
  const rugbyNations = [
    { 
      id: 'south-africa',
      name: "South Africa", 
      code: "za",
      anthem: "National Anthem of South Africa",
      colors: ['#007749', '#000000', '#FFB81C'] // Green, Black, Gold
    },
    { 
      id: 'new-zealand',
      name: "New Zealand", 
      code: "nz",
      anthem: "God Defend New Zealand",
      colors: ['#000000', '#FFFFFF'] // Black, White
    },
    { 
      id: 'australia',
      name: "Australia", 
      code: "au",
      anthem: "Advance Australia Fair",
      colors: ['#00008B', '#FF0000', '#FFFFFF'] // Blue, Red, White
    },
    { 
      id: 'england',
      name: "England", 
      code: "eng",
      anthem: "God Save the King",
      colors: ['#CE1124', '#FFFFFF'] // Red, White
    },
    { 
      id: 'ireland',
      name: "Ireland", 
      code: "ie",
      anthem: "Amhrán na bhFiann",
      colors: ['#009A49', '#FFFFFF', '#FF883E'] // Green, White, Orange
    },
    { 
      id: 'france',
      name: "France", 
      code: "fr",
      anthem: "La Marseillaise",
      colors: ['#002395', '#FFFFFF', '#ED2939'] // Blue, White, Red
    },
    { 
      id: 'wales',
      name: "Wales", 
      code: "wales",
      anthem: "Hen Wlad Fy Nhadau",
      colors: ['#D21034', '#FFFFFF', '#008B48'] // Red, White, Green
    },
    { 
      id: 'scotland',
      name: "Scotland", 
      code: "scotland",
      anthem: "Flower of Scotland",
      colors: ['#005EB8', '#FFFFFF'] // Blue, White
    },
    { 
      id: 'argentina',
      name: "Argentina", 
      code: "ar",
      anthem: "Himno Nacional Argentino",
      colors: ['#74ACDF', '#FFFFFF', '#F6B40E'] // Light Blue, White, Gold
    },
    { 
      id: 'fiji',
      name: "Fiji", 
      code: "fj",
      anthem: "Meda Dau Doka",
      colors: ['#002868', '#CE1126'] // Blue, Red
    },
    { 
      id: 'japan',
      name: "Japan", 
      code: "jp",
      anthem: "Kimigayo",
      colors: ['#BC002D', '#FFFFFF'] // Red, White
    },
    { 
      id: 'italy',
      name: "Italy", 
      code: "it",
      anthem: "Il Canto degli Italiani",
      colors: ['#009246', '#FFFFFF', '#CE2B37'] // Green, White, Red
    }
  ];

  const handleCountryClick = (countryId) => {
    if (onNavigateToAnthem) {
      onNavigateToAnthem(countryId);
    } else {
      // Fallback: alert for demo
      alert(`Navigating to ${countryId} anthem page`);
    }
  };

  // Flag component
  const Flag = ({ countryCode, countryName }) => {
    const getFlagUrl = (code) => {
      const flagMap = {
        'za': 'https://flagcdn.com/w320/za.png',
        'nz': 'https://flagcdn.com/w320/nz.png',
        'au': 'https://flagcdn.com/w320/au.png',
        'eng': 'https://flagcdn.com/w320/gb-eng.png',
        'ie': 'https://flagcdn.com/w320/ie.png',
        'fr': 'https://flagcdn.com/w320/fr.png',
        'wales': 'https://flagcdn.com/w320/gb-wls.png',
        'scotland': 'https://flagcdn.com/w320/gb-sct.png',
        'ar': 'https://flagcdn.com/w320/ar.png',
        'fj': 'https://flagcdn.com/w320/fj.png',
        'jp': 'https://flagcdn.com/w320/jp.png',
        'it': 'https://flagcdn.com/w320/it.png'
      };
      return flagMap[code] || `https://flagcdn.com/w320/${code}.png`;
    };

    return (
      <img 
        src={getFlagUrl(countryCode)}
        alt={`${countryName} flag`}
        className="nation-flag"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://flagcdn.com/w320/${countryCode}.png`;
        }}
      />
    );
  };

  return (
    <div className="anthems-directory-page">
      {/* Professional NavBar Component */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Anthems")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎵 Rugby Anthem Zone - Learn Every National Anthem! 🌍
      </div>

      <div className="directory-content">
        <div className="directory-header">
          <h1 className="directory-title">🎵 National Anthems</h1>
          <p className="directory-subtitle">
            Explore the passion and pride of rugby nations through their national anthems.
            Click any nation to view full anthem details, lyrics, history, and more.
          </p>
        </div>

        {/* Nations Grid - Full Width */}
        <div className="nations-grid-section">
          <h2 className="grid-section-title">Rugby Nations</h2>
          <div className="nations-grid">
            {rugbyNations.map((nation, index) => (
              <div 
                key={nation.id}
                className="nation-card"
                onClick={() => handleCountryClick(nation.id)}
                style={{ 
                  background: `linear-gradient(135deg, 
                    ${nation.colors[0]}20, 
                    ${nation.colors[1] ? `${nation.colors[1]}20` : nation.colors[0]}20)`,
                  borderColor: nation.colors[0]
                }}
              >
                <div className="flag-wrapper">
                  <Flag countryCode={nation.code} countryName={nation.name} />
                </div>
                <div className="nation-info">
                  <h3 className="nation-name">{nation.name}</h3>
                  <p className="anthem-name">{nation.anthem}</p>
                  <div className="nation-colors">
                    {nation.colors.map((color, idx) => (
                      <span 
                        key={idx} 
                        className="color-dot" 
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                <div className="view-button">View Anthem →</div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="directory-stats">
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Rugby Nations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">7</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">🎵</div>
            <div className="stat-label">Full Lyrics</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="directory-instructions">
          <h3>How to Use This Directory</h3>
          <div className="instructions-grid">
            <div className="instruction-step">
              <div className="step-icon">1️⃣</div>
              <h4>Browse Nations</h4>
              <p>View all major rugby-playing nations</p>
            </div>
            <div className="instruction-step">
              <div className="step-icon">2️⃣</div>
              <h4>Select a Nation</h4>
              <p>Click any nation to see full anthem details</p>
            </div>
            <div className="instruction-step">
              <div className="step-icon">3️⃣</div>
              <h4>Learn & Explore</h4>
              <p>Read lyrics, history, and interesting facts</p>
            </div>
            <div className="instruction-step">
              <div className="step-icon">4️⃣</div>
              <h4>Share & Save</h4>
              <p>Share with friends or save for later</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏉 Rugby World Cup 2025 - Know Every Anthem! 🎶
      </div>
    </div>
  );
};

export default NationalAnthemsDirectory;