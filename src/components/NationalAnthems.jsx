import React from 'react';
import './NationalAnthems.css';
import NavBar from './NavBar';

const NationalAnthems = ({ onNavigateBack, onNavigateToAnthem }) => {
  const rugbyNations = [
    { 
      id: 'south-africa-test',
      name: "South Africa", 
      code: "za",
      anthem: "National Anthem of South Africa",
      colors: ['#007749', '#000000', '#FFB81C'], // Green, Black, Gold
      rugbyNickname: "Springboks",
      featherLogo: "../Assets/images/featherlogos/southafricafl.png",
      solidLogo: "../Assets/images/solidlogos/southafricasl.png"
    },
    { 
      id: 'new-zealand-test',
      name: "New Zealand", 
      code: "nz",
      anthem: "God Defend New Zealand",
      colors: ['#000000', '#FFFFFF'], // Black, White
      rugbyNickname: "All Blacks",
      featherLogo: "../Assets/images/featherlogos/newzealandfl.png",
      solidLogo: "../Assets/images/solidlogos/newzealandsl.png"
    },
    { 
      id: 'australia-test',
      name: "Australia", 
      code: "au",
      anthem: "Advance Australia Fair",
      colors: ['#00008B', '#FF0000', '#FFFFFF'], // Blue, Red, White
      rugbyNickname: "Wallabies",
      featherLogo: "../Assets/images/featherlogos/australiafl.png",
      solidLogo: "../Assets/images/solidlogos/australiasl.png"
    },
    { 
      id: 'england-test',
      name: "England", 
      code: "eng",
      anthem: "God Save the King",
      colors: ['#CE1124', '#FFFFFF'], // Red, White
      rugbyNickname: "Red Rose",
      featherLogo: "../Assets/images/featherlogos/englandfl.png",
      solidLogo: "../Assets/images/solidlogos/englandsl.png"
    },
    { 
      id: 'ireland-test',
      name: "Ireland", 
      code: "ie",
      anthem: "Amhrán na bhFiann",
      colors: ['#009A49', '#FFFFFF', '#FF883E'], // Green, White, Orange
      rugbyNickname: "Shamrocks",
      featherLogo: "../Assets/images/featherlogos/irelandfl.png",
      solidLogo: "../Assets/images/solidlogos/irelandsl.png"
    },
    { 
      id: 'france-test',
      name: "France", 
      code: "fr",
      anthem: "La Marseillaise",
      colors: ['#002395', '#FFFFFF', '#ED2939'], // Blue, White, Red
      rugbyNickname: "Les Bleus",
      featherLogo: "../Assets/images/featherlogos/francefl.png",
      solidLogo: "../Assets/images/solidlogos/francesl.png"
    },
    { 
      id: 'wales-test',
      name: "Wales", 
      code: "wales",
      anthem: "Hen Wlad Fy Nhadau",
      colors: ['#D21034', '#FFFFFF', '#008B48'], // Red, White, Green
      rugbyNickname: "The Dragons",
      featherLogo: "../Assets/images/featherlogos/walesfl.png",
      solidLogo: "../Assets/images/solidlogos/walessl.png"
    },
    { 
      id: 'scotland-test',
      name: "Scotland", 
      code: "scotland",
      anthem: "Flower of Scotland",
      colors: ['#005EB8', '#FFFFFF'], // Blue, White
      rugbyNickname: "Thistles",
      featherLogo: "../Assets/images/featherlogos/scotlandfl.png",
      solidLogo: "../Assets/images/solidlogos/scotlandsl.png"
    },
    { 
      id: 'argentina-test',
      name: "Argentina", 
      code: "ar",
      anthem: "Himno Nacional Argentino",
      colors: ['#74ACDF', '#FFFFFF', '#F6B40E'], // Light Blue, White, Gold
      rugbyNickname: "Pumas",
      featherLogo: "../Assets/images/featherlogos/argentinafl.png",
      solidLogo: "../Assets/images/solidlogos/argentinasl.png"
    },
    { 
      id: 'fiji-test',
      name: "Fiji", 
      code: "fj",
      anthem: "Meda Dau Doka",
      colors: ['#002868', '#CE1126'], // Blue, Red
      rugbyNickname: "Flying Fijians",
      featherLogo: "../Assets/images/featherlogos/fijifl.png",
      solidLogo: "../Assets/images/solidlogos/fijisl.png"
    },
    { 
      id: 'japan-test',
      name: "Japan", 
      code: "jp",
      anthem: "Kimigayo",
      colors: ['#BC002D', '#FFFFFF'], // Red, White
      rugbyNickname: "Brave Blossoms",
      featherLogo: "../Assets/images/featherlogos/japanfl.png",
      solidLogo: "../Assets/images/solidlogos/japansl.png"
    },
    { 
      id: 'italy-test',
      name: "Italy", 
      code: "it",
      anthem: "Il Canto degli Italiani",
      colors: ['#009246', '#FFFFFF', '#CE2B37'], // Green, White, Red
      rugbyNickname: "Azzurri",
      featherLogo: "../Assets/images/featherlogos/italyfl.png",
      solidLogo: "../Assets/images/solidlogos/italysl.png"
    }
  ];

  const handleNationClick = (nationId) => {
    if (onNavigateToAnthem) {
      onNavigateToAnthem(nationId);
    }
  };

  // Flag component with fallback
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
    <div className="national-anthems-page">
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
        🎵 Rugby Anthem Zone - Complete Anthem Collection! 🌍
      </div>

      <div className="national-anthems-content">
        <div className="national-anthems-header">
          <h1 className="national-anthems-title">🎵 Rugby National Anthems</h1>
          <p className="national-anthems-subtitle">
            Explore complete anthem pages for all major rugby nations. 
            Click any flag to view full details, lyrics, history, and rugby information.
          </p>
        </div>

        {/* Nations Grid - 4x3 Layout */}
        <div className="nations-grid-section">
          <div className="grid-header">
            <h2 className="grid-title">Complete Anthem Collection</h2>
            <p className="grid-subtitle">12 Rugby Nations - Click to Explore Full Anthem Pages</p>
          </div>
          
          <div className="nations-grid">
            {rugbyNations.map((nation) => (
              <div 
                key={nation.id}
                className="nation-card"
                onClick={() => handleNationClick(nation.id)}
                style={{ 
                  background: `linear-gradient(135deg, 
                    ${nation.colors[0]}15, 
                    ${nation.colors[1] ? `${nation.colors[1]}15` : nation.colors[0]}15)`,
                  borderLeft: `6px solid ${nation.colors[0]}`,
                  borderTop: `3px solid ${nation.colors[1] || nation.colors[0]}`,
                  borderRight: `3px solid ${nation.colors[2] || nation.colors[0]}`
                }}
              >
                <div className="card-header">
                  <div className="flag-wrapper">
                    <Flag countryCode={nation.code} countryName={nation.name} />
                  </div>
                  <div className="nation-badge">
                    <span className="rugby-nickname">{nation.rugbyNickname}</span>
                  </div>
                </div>
                
                <div className="card-content">
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
                
                <div className="card-footer">
                  <button className="view-anthem-btn">
                    View Complete Anthem →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="anthems-stats">
          <div className="stat-card">
            <div className="stat-number">12</div>
            <div className="stat-label">Complete Anthem Pages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">7+</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Full</div>
            <div className="stat-label">Rugby Info</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Access</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="features-section">
          <h3>What You'll Find on Each Anthem Page:</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎵</div>
              <h4>Complete Lyrics</h4>
              <p>Original language and English translations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏉</div>
              <h4>Rugby Information</h4>
              <p>Team details, colors, and famous players</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📖</div>
              <h4>Historical Facts</h4>
              <p>Anthem history and adoption dates</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎧</div>
              <h4>Audio Player</h4>
              <p>Simulated anthem playback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏉 Know Every Anthem Before Match Day! Perfect for Rugby Fans 🎶
      </div>
    </div>
  );
};

export default NationalAnthems;