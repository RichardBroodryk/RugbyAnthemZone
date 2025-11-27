import React, { useState } from 'react';
import './SearchPage.css';
import ThemeToggle from './ThemeToggle';

function SearchPage({ onNavigateBack, onGameSelect, onNavigateToTournament, userPreferences }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock search data - in real app, this would come from API
  const searchableData = [
    { type: 'team', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', tournament: 'Six Nations' },
    { type: 'team', name: 'New Zealand', flag: '🇳🇿', tournament: 'Rugby Championship' },
    { type: 'team', name: 'South Africa', flag: '🇿🇦', tournament: 'Rugby Championship' },
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
      // Navigate to team details or tournament
      onNavigateToTournament?.(result.tournament);
    }
    // Add more navigation handlers as needed
  };

  return (
    <div className="search-page">
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn active">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

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
                      {result.flag || result.icon || '🔍'}
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
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('Six Nations')}>
                🏆 Six Nations
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('World Cup')}>
                🌍 World Cup
              </button>
              <button className="suggestion-btn" onClick={() => handleSearch('Twickenham')}>
                🏟️ Twickenham
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
                    {team}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;