import React from 'react';
import './TournamentMerchandise.css';

const TournamentMerchandise = ({ game, onNavigateBack, userStatus }) => {
  // Check if user has access
  if (userStatus !== 'premium') {
    return (
      <div className="premium-gate">
        <div className="gate-content">
          <h1>⭐ Premium Feature</h1>
          <p>Access to official team merchandise stores is available to Premium subscribers only.</p>
          <p>Upgrade now to support your team with official gear and exclusive content!</p>
          <button className="upgrade-btn-large" onClick={onNavigateBack}>
            🔙 Back to Game
          </button>
        </div>
      </div>
    );
  }

  // Official merchandise stores for all rugby nations
  const teamStores = {
    "New Zealand": {
      flag: "🇳🇿",
      storeName: "All Blacks Official Store",
      url: "https://www.allblacks.com/shop/",
      description: "Official All Blacks jerseys, apparel and merchandise"
    },
    "South Africa": {
      flag: "🇿🇦", 
      storeName: "Springboks Official Store",
      url: "https://www.springbokshop.com/",
      description: "Official Springboks gear and South African rugby merchandise"
    },
    "Australia": {
      flag: "🇦🇺",
      storeName: "Wallabies Official Store", 
      url: "https://www.wallabieshop.com.au/",
      description: "Official Wallabies jerseys and Australian rugby apparel"
    },
    "England": {
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      storeName: "England Rugby Store",
      url: "https://www.englandrugbystore.com/",
      description: "Official England rugby union merchandise and kit"
    },
    "Ireland": {
      flag: "🇮🇪",
      storeName: "Irish Rugby Shop",
      url: "https://www.irishrugby.ie/shop/",
      description: "Official Ireland rugby merchandise and apparel"
    },
    "France": {
      flag: "🇫🇷",
      storeName: "FFR Boutique Officielle",
      url: "https://boutique.ffr.fr/",
      description: "Official French rugby federation merchandise"
    },
    "Wales": {
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      storeName: "Welsh Rugby Union Shop",
      url: "https://www.wru.wales/shop/",
      description: "Official Wales rugby union merchandise"
    },
    "Scotland": {
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      storeName: "Scottish Rugby Shop",
      url: "https://www.scottishrugbystore.com/",
      description: "Official Scotland rugby merchandise and kit"
    },
    "Argentina": {
      flag: "🇦🇷",
      storeName: "UAR Tienda Oficial",
      url: "https://tienda.uar.com.ar/",
      description: "Official Argentine rugby union merchandise"
    },
    "Fiji": {
      flag: "🇫🇯",
      storeName: "Fiji Rugby Shop",
      url: "https://www.fijirugby.com/shop/",
      description: "Official Flying Fijians merchandise and apparel"
    },
    "Japan": {
      flag: "🇯🇵",
      storeName: "Japan Rugby Shop",
      url: "https://www.rugby-japan.jp/shop/",
      description: "Official Brave Blossoms merchandise"
    },
    "Italy": {
      flag: "🇮🇹",
      storeName: "FIR Store Ufficiale",
      url: "https://store.federugby.it/",
      description: "Official Italian rugby federation merchandise"
    }
  };

  // Get the two teams from the current game
  const homeTeam = game?.home?.name || game?.homeTeam?.name;
  const awayTeam = game?.away?.name || game?.awayTeam?.name;

  const playingTeams = [];
  if (homeTeam && teamStores[homeTeam]) playingTeams.push({...teamStores[homeTeam], name: homeTeam});
  if (awayTeam && teamStores[awayTeam]) playingTeams.push({...teamStores[awayTeam], name: awayTeam});

  const handleStoreClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="merchandise-page">
      <div className="merch-header">
        <button className="back-btn" onClick={onNavigateBack}>
          ← Back to Game
        </button>
        <h1>🛍️ Official Team Merchandise</h1>
        <p>Support your team with official merchandise from their stores</p>
        <div className="premium-badge">⭐ Premium Member Access</div>
      </div>

      <div className="game-info">
        <h2>Featured Teams</h2>
        <div className="teams-playing">
          {homeTeam && awayTeam ? (
            <div className="vs-teams">
              <span className="team-flag">{teamStores[homeTeam]?.flag}</span>
              <span className="team-name">{homeTeam}</span>
              <span className="vs">VS</span>
              <span className="team-flag">{teamStores[awayTeam]?.flag}</span>
              <span className="team-name">{awayTeam}</span>
            </div>
          ) : (
            <p>Select a game to view team merchandise</p>
          )}
        </div>
      </div>

      <div className="merchandise-grid">
        {playingTeams.map((team, index) => (
          <div key={index} className="store-card">
            <div className="team-header">
              <div className="team-flag-large">{team.flag}</div>
              <div className="team-info">
                <h3 className="team-name">{team.name}</h3>
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
              <span className="official-badge">✅ Official Store</span>
            </div>
          </div>
        ))}
      </div>

      {playingTeams.length === 0 && (
        <div className="no-teams-message">
          <h3>No teams selected</h3>
          <p>Go back to a game overview page to see merchandise for the playing teams.</p>
        </div>
      )}
    </div>
  );
};

export default TournamentMerchandise;