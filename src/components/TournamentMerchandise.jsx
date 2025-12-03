import React from 'react';
import './TournamentMerchandise.css';
import NavBar from './NavBar';

const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'newzealand': 'new-zealand',
      'southafrica': 'south-africa',
      'australia': 'australia',
      'england': 'england',
      'ireland': 'ireland',
      'france': 'france',
      'wales': 'wales',
      'scotland': 'scotland',
      'argentina': 'argentina',
      'fiji': 'fiji',
      'japan': 'japan',
      'italy': 'italy',
      'samoa': 'samoa',
      'tonga': 'tonga'
    };
    return nameMap[countryName] || countryName;
  };

  const fileName = getCountryFileName(country.toLowerCase());
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>{country.slice(0, 3).toUpperCase()}</div>;
    }
  }
};

const TournamentMerchandise = ({ game, onNavigateBack, userStatus }) => {
  const teamStores = {
    "New Zealand": {
      country: "new-zealand",
      storeName: "All Blacks Official Store",
      url: "https://www.allblacks.com/shop/",
      description: "Official All Blacks jerseys, apparel, and exclusive merchandise. Get the famous black jersey and support the team!"
    },
    "South Africa": {
      country: "south-africa", 
      storeName: "Springboks Official Store",
      url: "https://www.springbokshop.com/",
      description: "Official Springboks gear, Green and Gold jerseys, and South African rugby merchandise. Go Bokke!"
    },
    "Australia": {
      country: "australia",
      storeName: "Wallabies Official Store", 
      url: "https://www.wallabieshop.com.au/",
      description: "Official Wallabies jerseys, Gold apparel, and Australian rugby gear. Support the Wallabies!"
    },
    "England": {
      country: "england",
      storeName: "England Rugby Store",
      url: "https://www.englandrugbystore.com/",
      description: "Official England rugby union merchandise, White Rose kit, and exclusive apparel"
    },
    "Ireland": {
      country: "ireland",
      storeName: "Irish Rugby Shop",
      url: "https://www.irishrugby.ie/shop/",
      description: "Official Ireland rugby merchandise, Green jerseys, and Irish rugby apparel"
    },
    "France": {
      country: "france",
      storeName: "FFR Boutique Officielle",
      url: "https://boutique.ffr.fr/",
      description: "Official French rugby federation merchandise, Bleu jerseys, and French rugby gear"
    },
    "Wales": {
      country: "wales",
      storeName: "Welsh Rugby Union Shop",
      url: "https://www.wru.wales/shop/",
      description: "Official Wales rugby union merchandise, Red Dragon kit, and Welsh rugby apparel"
    },
    "Scotland": {
      country: "scotland",
      storeName: "Scottish Rugby Shop",
      url: "https://www.scottishrugbystore.com/",
      description: "Official Scotland rugby merchandise, Thistle kit, and Scottish rugby gear"
    },
    "Argentina": {
      country: "argentina",
      storeName: "UAR Tienda Oficial",
      url: "https://tienda.uar.com.ar/",
      description: "Official Argentine rugby union merchandise, Los Pumas jerseys, and rugby apparel"
    },
    "Fiji": {
      country: "fiji",
      storeName: "Fiji Rugby Shop",
      url: "https://www.fijirugby.com/shop/",
      description: "Official Flying Fijians merchandise, traditional designs, and Pacific rugby gear"
    },
    "Japan": {
      country: "japan",
      storeName: "Japan Rugby Shop",
      url: "https://www.rugby-japan.jp/shop/",
      description: "Official Brave Blossoms merchandise, Sakura jerseys, and Japanese rugby apparel"
    },
    "Italy": {
      country: "italy",
      storeName: "FIR Store Ufficiale",
      url: "https://store.federugby.it/",
      description: "Official Italian rugby federation merchandise, Azzurri kit, and Italian rugby gear"
    }
  };

  // Check if user has access
  if (userStatus !== 'premium') {
    return (
      <div className="premium-gate">
        <NavBar 
          showBackButton={true}
          showHomeButton={true}
          showSearchButton={true}
          showProfileButton={true}
          showThemeToggle={true}
          onNavigateBack={onNavigateBack}
          onNavigateToHome={() => window.location.reload()}
          onNavigateToSearch={() => console.log("Search Merchandise")}
          onNavigateToProfile={() => console.log("Profile clicked")}
        />

        {/* Top Ad Banner */}
        <div className="top-ad-banner">
          🛍️ UNLOCK OFFICIAL MERCHANDISE - UPGRADE TO PREMIUM! ⭐
        </div>

        <div className="gate-content">
          <h1>⭐ Premium Exclusive</h1>
          <p>Access to official team merchandise stores is reserved for Premium subscribers.</p>
          <p>Upgrade now to support your team with authentic gear and exclusive content!</p>
          <button className="upgrade-btn-large" onClick={onNavigateBack}>
            🎯 Upgrade to Premium
          </button>
        </div>

        {/* Bottom Ad Banner */}
        <div className="bottom-ad-banner">
          🏉 Official Rugby Gear - Only for Premium Members! 🛒
        </div>
      </div>
    );
  }

  // Get the two teams from the current game
  const homeTeam = game?.home?.name || game?.homeTeam?.name;
  const awayTeam = game?.away?.name || game?.awayTeam?.name;

  const playingTeams = [];
  if (homeTeam && teamStores[homeTeam]) playingTeams.push({...teamStores[homeTeam], name: homeTeam});
  if (awayTeam && teamStores[awayTeam]) playingTeams.push({...teamStores[awayTeam], name: awayTeam});

  // Get all other nations for additional shopping
  const otherNations = Object.entries(teamStores)
    .filter(([name]) => name !== homeTeam && name !== awayTeam)
    .map(([name, store]) => ({ name, ...store }));

  const handleStoreClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="merchandise-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Merchandise")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🛍️ OFFICIAL RUGBY GEAR - SUPPORT YOUR TEAM! 🏉
      </div>

      <div className="merch-content">
        {/* Merchandise Header */}
        <div className="merch-header">
          <h1 className="merch-title">🛍️ Official Team Merchandise</h1>
          <p className="merch-subtitle">Support your team with authentic merchandise from official stores</p>
          <div className="premium-badge">⭐ PREMIUM MEMBER ACCESS</div>
        </div>

        {/* Game Info Section */}
        {homeTeam && awayTeam && (
          <div className="game-info">
            <h2>Featured Match Teams</h2>
            <div className="teams-playing">
              <div className="vs-teams">
                <div className="team-flag">
                  <Flag country={teamStores[homeTeam]?.country} size="large" />
                </div>
                <span className="team-name">{homeTeam}</span>
                <span className="vs">VS</span>
                <div className="team-flag">
                  <Flag country={teamStores[awayTeam]?.country} size="large" />
                </div>
                <span className="team-name">{awayTeam}</span>
              </div>
            </div>
          </div>
        )}

        {/* Featured Teams Merchandise */}
        <div className="merchandise-grid">
          {playingTeams.map((team, index) => (
            <div key={index} className="store-card">
              <div className="team-header">
                <div className="team-flag-large">
                  <Flag country={team.country} size="xlarge" />
                </div>
                <div className="team-info">
                  <h3>{team.name}</h3>
                  <p className="store-name">{team.storeName}</p>
                </div>
              </div>
              
              <p className="store-description">{team.description}</p>
              
              <button 
                className="shop-btn"
                onClick={() => handleStoreClick(team.url)}
              >
                🛒 Visit Official Store
              </button>
              
              <div className="store-footer">
                <span className="official-badge">✅ Official Licensed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Rugby Nations */}
        {otherNations.length > 0 && (
          <div className="all-nations-section">
            <h2>🌍 All Rugby Nations</h2>
            <div className="nations-grid">
              {otherNations.map((nation, index) => (
                <button
                  key={index}
                  className="nation-store-btn"
                  onClick={() => handleStoreClick(nation.url)}
                >
                  <div className="nation-store-flag">
                    <Flag country={nation.country} size="medium" />
                  </div>
                  <span className="nation-store-name">{nation.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* No Teams Message */}
        {playingTeams.length === 0 && (
          <div className="no-teams-message">
            <h3>No teams selected</h3>
            <p>Return to a game overview page to see merchandise for the playing teams, or browse all rugby nations above.</p>
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎽 Limited Edition Jerseys - Shop Now Before They're Gone! ⚡
      </div>
    </div>
  );
};

export default TournamentMerchandise;