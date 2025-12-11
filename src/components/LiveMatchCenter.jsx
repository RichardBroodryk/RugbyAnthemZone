import './LiveMatchCenter.css';
import { useState } from 'react';
import NavBar from './NavBar';
import MatchCard from './MatchCard';

// SIMPLE Flag Component that WORKS
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
      'scotland': 'scotland',
      'south africa': 'south-africa',
      'wales': 'wales',
      'usa': 'united-states-of-america',
      'canada': 'canada'
    };
    
    return nameMap[countryName.toLowerCase()] || countryName.toLowerCase();
  };

  const fileName = getCountryFileName(country);
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.png`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>
        {country.slice(0, 3).toUpperCase()}
      </div>;
    }
  }
};

function LiveMatchCenter({ onNavigateBack }) {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [activeTournament, setActiveTournament] = useState('ALL');

  // SIMPLE match data - NO flag properties
  const matches = [
    {
      id: 1,
      homeTeam: "England",
      awayTeam: "Ireland",
      homeScore: 18,
      awayScore: 22,
      time: '65:00',
      status: 'LIVE',
      tournament: 'Six Nations',
      venue: 'Twickenham, London',
      date: '2024-03-15',
      tournamentType: 'SIX_NATIONS'
    },
    {
      id: 2,
      homeTeam: "France",
      awayTeam: "Wales",
      homeScore: 0,
      awayScore: 0,
      time: 'Kickoff in 2:30:00',
      status: 'UPCOMING',
      tournament: 'Six Nations',
      venue: 'Stade de France, Paris',
      date: '2024-03-16',
      tournamentType: 'SIX_NATIONS'
    },
    {
      id: 3,
      homeTeam: "New Zealand",
      awayTeam: "South Africa",
      homeScore: 24,
      awayScore: 17,
      time: '72:00',
      status: 'LIVE',
      tournament: 'Rugby Championship',
      venue: 'Eden Park, Auckland',
      date: '2024-08-10',
      tournamentType: 'RUGBY_CHAMPIONSHIP'
    },
    {
      id: 4,
      homeTeam: "Australia",
      awayTeam: "Argentina",
      homeScore: 28,
      awayScore: 25,
      time: '78:00',
      status: 'LIVE',
      tournament: 'Rugby Championship',
      venue: 'Suncorp Stadium, Brisbane',
      date: '2024-08-10',
      tournamentType: 'RUGBY_CHAMPIONSHIP'
    },
    {
      id: 5,
      homeTeam: "Japan",
      awayTeam: "Fiji",
      homeScore: 0,
      awayScore: 0,
      time: 'Tomorrow 14:00',
      status: 'UPCOMING',
      tournament: 'Summer Tests',
      venue: 'National Stadium, Tokyo',
      date: '2024-07-20',
      tournamentType: 'SUMMER_TESTS'
    }
  ];

  const tournaments = [
    { id: 'ALL', name: 'All Tournaments', icon: '🌍', color: '#4fc3f7' },
    { id: 'SIX_NATIONS', name: 'Six Nations', icon: '🏆', color: '#1e88e5' },
    { id: 'RUGBY_CHAMPIONSHIP', name: 'Rugby Championship', icon: '⭐', color: '#f57c00' },
    { id: 'SUMMER_TESTS', name: 'Summer Tests', icon: '☀️', color: '#ffb300' },
    { id: 'AUTUMN_TESTS', name: 'Autumn Tests', icon: '🍂', color: '#8e24aa' },
    { id: 'WOMENS_RUGBY', name: "Women's Rugby", icon: '👩‍🏫', color: '#e91e63' },
    { id: 'RUGBY_SEVENS', name: 'Rugby Sevens', icon: '⚡', color: '#00bcd4' }
  ];

  const filteredMatches = activeTournament === 'ALL' 
    ? matches 
    : matches.filter(m => m.tournamentType === activeTournament);

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
  };

  const getTournamentColor = (tournamentType) => {
    const tournament = tournaments.find(t => t.id === tournamentType);
    return tournament?.color || '#4fc3f7';
  };

  return (
    <div className="live-match-center">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
      />

      <div className="top-ad-banner">
        ⚡ Live Rugby Action - Real-time Scores & Commentary! 🏉
      </div>

      <div className="match-center-content">
        <div className="match-center-header">
          <h1 className="match-center-title">🏉 Live Match Center</h1>
          <p className="match-center-subtitle">Real-time scores, live commentary, and match statistics</p>
          <div className="live-indicator">
            <span className="pulse-dot">●</span>
            LIVE UPDATES ACTIVE
          </div>
        </div>

        <div className="tournament-filter-section">
          <h3 style={{textAlign: 'center', color: 'white', marginBottom: '20px', fontSize: '1.5em'}}>
            🏆 Select Tournament
          </h3>
          <div className="tournament-filters">
            {tournaments.map(tournament => (
              <button
                key={tournament.id}
                className={`tournament-filter-btn ${activeTournament === tournament.id ? 'active' : ''}`}
                onClick={() => setActiveTournament(tournament.id)}
                style={{
                  borderLeftColor: tournament.color,
                  background: activeTournament === tournament.id ? 
                    `linear-gradient(135deg, ${tournament.color}20, ${tournament.color}40)` : 
                    'rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="tournament-icon">{tournament.icon}</span>
                <span className="tournament-name-text">{tournament.name}</span>
                {activeTournament === tournament.id && (
                  <span className="active-indicator">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="tournament-stats-container">
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-number">{filteredMatches.length}</span>
              <span className="stat-label">Total Matches</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {filteredMatches.filter(m => m.status === 'LIVE').length}
              </span>
              <span className="stat-label">Live Now</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {filteredMatches.filter(m => m.status === 'UPCOMING').length}
              </span>
              <span className="stat-label">Upcoming</span>
            </div>
          </div>
          <div className="active-tournament-card-container">
            <div className="active-tournament-card">
              <span className="active-tournament-name">
                {tournaments.find(t => t.id === activeTournament)?.name || 'All Tournaments'}
              </span>
              <span className="active-tournament-label">Active Tournament</span>
            </div>
          </div>
        </div>

        <div className="live-features">
          <h3>🎯 Live Center Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Multi-Tournament Support</h4>
              <p>Follow matches across all major rugby tournaments simultaneously</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h4>Live Commentary</h4>
              <p>Minute-by-minute updates and key match events as they happen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Tournament Filtering</h4>
              <p>Quickly switch between different competitions and view specific matchups</p>
            </div>
          </div>
        </div>

        <div className="matches-section">
          <h2 style={{textAlign: 'center', color: 'white', marginBottom: '30px', fontSize: '2.2em'}}>
            {activeTournament === 'ALL' ? '📅 All Matches' : `📅 ${tournaments.find(t => t.id === activeTournament)?.name} Matches`}
          </h2>
          
          {filteredMatches.length === 0 ? (
            <div className="no-matches-message">
              <div className="no-matches-icon">📭</div>
              <h3>No matches found</h3>
              <p>There are currently no matches for the selected tournament.</p>
            </div>
          ) : (
            <div className="matches-grid">
              {filteredMatches.map(match => (
                <MatchCard
                  key={match.id}
                  match={match}
                  isSelected={selectedMatch?.id === match.id}
                  onSelect={handleMatchSelect}
                  tournamentColor={getTournamentColor(match.tournamentType)}
                  showTournament={true}
                  FlagComponent={Flag}
                />
              ))}
            </div>
          )}
        </div>

        {selectedMatch && (
          <div className="match-details-section">
            <div className="selected-match-header">
              <h3>🎯 Match Details - {selectedMatch.tournament}</h3>
              <div className={`match-status-badge ${selectedMatch.status === 'LIVE' ? 'status-live' : 'status-upcoming'}`}>
                {selectedMatch.status}
              </div>
            </div>
            
            <div className="match-scoreboard">
              <div className="score-team">
                <Flag country={selectedMatch.homeTeam} size="large" />
                <div className="team-name-large">{selectedMatch.homeTeam}</div>
                <div className="score-large">{selectedMatch.homeScore}</div>
              </div>
              <div className="score-separator">-</div>
              <div className="score-team">
                <Flag country={selectedMatch.awayTeam} size="large" />
                <div className="team-name-large">{selectedMatch.awayTeam}</div>
                <div className="score-large">{selectedMatch.awayScore}</div>
              </div>
            </div>

            <div className="match-info-detailed">
              <div className="info-item">
                <span className="info-label">🏆 Tournament:</span>
                <span className="info-value">{selectedMatch.tournament}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📍 Venue:</span>
                <span className="info-value">{selectedMatch.venue}</span>
              </div>
              <div className="info-item">
                <span className="info-label">⏰ Match Time:</span>
                <span className="info-value">{selectedMatch.time}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📅 Date:</span>
                <span className="info-value">{selectedMatch.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bottom-ad-banner">
        🎥 Premium Live Streaming - HD Quality & Multiple Camera Angles! 📡
      </div>
    </div>
  );
}

export default LiveMatchCenter;