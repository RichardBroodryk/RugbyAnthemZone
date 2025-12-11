import React, { useState } from 'react';
import './SearchPage.css';
import NavBar from './NavBar'; // Import the professional NavBar

// Flag Component with real images
const Flag = ({ country, size = 'small' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'argentina': 'argentina',
      'australia': 'australia',
      'england': 'england',
      'fiji': 'fiji',
      'france': 'france',
      'ireland': 'ireland',
      'italy': 'italy',
      'japan': 'japan',
      'new zealand': 'new-zealand',
      'newzealand': 'new-zealand',
      'scotland': 'scotland',
      'south africa': 'south-africa',
      'southafrica': 'south-africa',
      'wales': 'wales'
    };
    
    const normalizedName = countryName.toLowerCase().trim();
    return nameMap[normalizedName] || normalizedName;
  };

  const fileName = getCountryFileName(country);
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      try {
        const flagImage = require(`../Assets/images/flags/${fileName}.svg`);
        return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
      } catch (error3) {
        return <div className={`flag-fallback flag-${size}`}>
          {country.split(' ').map(word => word[0]).join('').toUpperCase()}
        </div>;
      }
    }
  }
};

function SearchPage({ onNavigateBack, onGameSelect, onNavigateToTournament, userPreferences }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Updated search data with real flags
  const searchableData = [
    { type: 'team', name: 'England', tournament: 'Six Nations' },
    { type: 'team', name: 'New Zealand', tournament: 'Rugby Championship' },
    { type: 'team', name: 'South Africa', tournament: 'Rugby Championship' },
    { type: 'player', name: 'Marlie Packer', team: 'England', position: 'Flanker' },
    { type: 'player', name: 'Ruahei Demant', team: 'New Zealand', position: 'Fly-half' },
    { type: 'tournament', name: 'Women\'s Six Nations', icon: '🏆' },
    { type: 'tournament', name: 'Women\'s World Cup', icon: '🌍' },
    { type: 'tournament', name: 'WXV', icon: '🎯' },
    { type: 'stadium', name: 'Twickenham Stadium', location: 'London' },
    { type: 'stadium', name: 'Eden Park', location: 'Auckland' }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = searchableData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    if (result.type === 'tournament') {
      onNavigateToTournament?.(result.name);
    } else if (result.type === 'team') {
      onNavigateToTournament?.(result.tournament);
    }
  };

  return (
    <div className="search-page">
      {/* Professional NavBar at the top */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search clicked")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner below the NavBar */}
      <div className="top-ad-banner">
        🔍 Rugby Pro Search - Find Teams, Players & Tournaments Instantly! ⚡
      </div>

      <div className="search-container">
        <h1>🔍 Search Rugby Universe</h1>
        
        <div className="search-box">
          <input
            type="text"
            placeholder="Search teams, players, tournaments, stadiums..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
            autoFocus
          />
          <button className="search-btn">Search</button>
        </div>

        {searchQuery.length > 0 && (
          <div className="search-results">
            <h3>Search Results for "{searchQuery}"</h3>
            
            {searchResults.length === 0 ? (
              <div className="no-results">
                <p>No results found. Try searching for:</p>
                <ul>
                  <li>Team names (England, New Zealand, etc.)</li>
                  <li>Tournaments (Six Nations, World Cup, etc.)</li>
                  <li>Players (Marlie Packer, Ruahei Demant, etc.)</li>
                  <li>Stadiums (Twickenham, Eden Park, etc.)</li>
                </ul>
              </div>
            ) : (
              <div className="results-grid">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="result-card"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="result-icon">
                      {result.type === 'team' ? (
                        <Flag country={result.name} size="large" />
                      ) : result.icon ? (
                        <span className="result-icon-symbol">{result.icon}</span>
                      ) : '🔍'}
                    </div>
                    <div className="result-info">
                      <h4>{result.name}</h4>
                      <p>
                        {result.type === 'team' && `Team • ${result.tournament}`}
                        {result.type === 'player' && `Player • ${result.team} • ${result.position}`}
                        {result.type === 'tournament' && 'Tournament'}
                        {result.type === 'stadium' && `Stadium • ${result.location}`}
                      </p>
                    </div>
                    <div className="result-type">{result.type}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {searchQuery.length === 0 && (
          <div className="search-suggestions">
            <h3>Popular Searches</h3>
            <div className="suggestions-grid">
              <button className="suggestion-btn" onClick={() => handleSearch('England')}>
                <Flag country="England" size="small" />
                <span className="suggestion-text">England</span>
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('Six Nations')}>
                <span className="suggestion-icon">🏆</span>
                <span className="suggestion-text">Six Nations</span>
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('World Cup')}>
                <span className="suggestion-icon">🌍</span>
                <span className="suggestion-text">World Cup</span>
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('Twickenham')}>
                <span className="suggestion-icon">🏟️</span>
                <span className="suggestion-text">Twickenham</span>
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('New Zealand')}>
                <Flag country="New Zealand" size="small" />
                <span className="suggestion-text">New Zealand</span>
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('South Africa')}>
                <Flag country="South Africa" size="small" />
                <span className="suggestion-text">South Africa</span>
              </button>
            </div>

            <div className="recent-searches">
              <h3>Your Recent Teams</h3>
              <div className="recent-grid">
                {userPreferences?.favoriteTeams?.map((team, index) => (
                  <button
                    key={index}
                    className="recent-btn"
                    onClick={() => handleSearch(team)}
                  >
                    <Flag country={team} size="small" />
                    <span className="recent-team-name">{team}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        📱 Download Rugby App - Enhanced Search & Live Updates! 📲
      </div>
    </div>
  );
}

export default SearchPage;