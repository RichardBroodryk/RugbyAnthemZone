import React from 'react';
import './TournamentMerchandise.css';

const TournamentMerchandise = ({ game, onNavigateBack, userStatus }) => {
  // Official merchandise stores for all rugby nations
  const teamStores = {
    "New Zealand": {
      flag: "🇳🇿",
      storeName: "All Blacks Official Store",
      url: "https://www.allblacks.com/shop/",
      description: "Official All Blacks jerseys, apparel, and exclusive merchandise. Get the famous black jersey and support the team!"
    },
    "South Africa": {
      flag: "🇿🇦", 
      storeName: "Springboks Official Store",
      url: "https://www.springbokshop.com/",
      description: "Official Springboks gear, Green and Gold jerseys, and South African rugby merchandise. Go Bokke!"
    },
    "Australia": {
      flag: "🇦🇺",
      storeName: "Wallabies Official Store", 
      url: "https://www.wallabieshop.com.au/",
      description: "Official Wallabies jerseys, Gold apparel, and Australian rugby gear. Support the Wallabies!"
    },
    "England": {
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      storeName: "England Rugby Store",
      url: "https://www.englandrugbystore.com/",
      description: "Official England rugby union merchandise, White Rose kit, and exclusive apparel"
    },
    "Ireland": {
      flag: "🇮🇪",
      storeName: "Irish Rugby Shop",
      url: "https://www.irishrugby.ie/shop/",
      description: "Official Ireland rugby merchandise, Green jerseys, and Irish rugby apparel"
    },
    "France": {
      flag: "🇫🇷",
      storeName: "FFR Boutique Officielle",
      url: "https://boutique.ffr.fr/",
      description: "Official French rugby federation merchandise, Bleu jerseys, and French rugby gear"
    },
    "Wales": {
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      storeName: "Welsh Rugby Union Shop",
      url: "https://www.wru.wales/shop/",
      description: "Official Wales rugby union merchandise, Red Dragon kit, and Welsh rugby apparel"
    },
    "Scotland": {
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      storeName: "Scottish Rugby Shop",
      url: "https://www.scottishrugbystore.com/",
      description: "Official Scotland rugby merchandise, Thistle kit, and Scottish rugby gear"
    },
    "Argentina": {
      flag: "🇦🇷",
      storeName: "UAR Tienda Oficial",
      url: "https://tienda.uar.com.ar/",
      description: "Official Argentine rugby union merchandise, Los Pumas jerseys, and rugby apparel"
    },
    "Fiji": {
      flag: "🇫🇯",
      storeName: "Fiji Rugby Shop",
      url: "https://www.fijirugby.com/shop/",
      description: "Official Flying Fijians merchandise, traditional designs, and Pacific rugby gear"
    },
    "Japan": {
      flag: "🇯🇵",
      storeName: "Japan Rugby Shop",
      url: "https://www.rugby-japan.jp/shop/",
      description: "Official Brave Blossoms merchandise, Sakura jerseys, and Japanese rugby apparel"
    },
    "Italy": {
      flag: "🇮🇹",
      storeName: "FIR Store Ufficiale",
      url: "https://store.federugby.it/",
      description: "Official Italian rugby federation merchandise, Azzurri kit, and Italian rugby gear"
    }
  };

  // Check if user has access
  if (userStatus !== 'premium') {
    return (
      <div className="premium-gate">
        {/* Top Ad Banner - Matching FlightsPage */}
        <div className="top-ad-banner">
          🛍️ UNLOCK OFFICIAL MERCHANDISE - UPGRADE TO PREMIUM! ⭐
        </div>

        {/* Standardized Navigation - Matching HomePage */}
        <nav className="top-nav">
          <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
          <button className="nav-btn">🏠 Home</button>
          <button className="nav-btn">🔍 Search</button>
          <button className="nav-btn">👤 Profile</button>
        </nav>

        <div className="gate-content">
          <h1>⭐ Premium Exclusive</h1>
          <p>Access to official team merchandise stores is reserved for Premium subscribers.</p>
          <p>Upgrade now to support your team with authentic gear and exclusive content!</p>
          <button className="upgrade-btn-large" onClick={onNavigateBack}>
            🎯 Upgrade to Premium
          </button>
        </div>

        {/* Bottom Ad Banner - Matching FlightsPage */}
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
      {/* Top Ad Banner - Matching FlightsPage */}
      <div className="top-ad-banner">
        🛍️ OFFICIAL RUGBY GEAR - SUPPORT YOUR TEAM! 🏉
      </div>

      {/* Standardized Navigation - Matching HomePage */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

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
                <span className="team-flag">{teamStores[homeTeam]?.flag}</span>
                <span className="team-name">{homeTeam}</span>
                <span className="vs">VS</span>
                <span className="team-flag">{teamStores[awayTeam]?.flag}</span>
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
                <div className="team-flag-large">{team.flag}</div>
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
                  <span className="nation-store-flag">{nation.flag}</span>
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

      {/* Bottom Ad Banner - Matching FlightsPage */}
      <div className="bottom-ad-banner">
        🎽 Limited Edition Jerseys - Shop Now Before They're Gone! ⚡
      </div>
    </div>
  );
};

export default TournamentMerchandise;