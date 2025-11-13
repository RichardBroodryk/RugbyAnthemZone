import { useState, useEffect } from 'react';
import './TournamentOverview.css';

function TournamentOverview({ onNavigateBack, tournamentData, onGameSelect, userStatus }) {
  const [currentAd, setCurrentAd] = useState(0);
  
  const tournament = tournamentData || {
    name: "Tournament",
    year: "2026", 
    description: "Rugby tournament",
    teams: [],
    matches: []
  };

  const ads = [
    "🎟️ Limited Tickets Available - Book Now! ⚡",
    "🏉 Official Tournament Merchandise - 20% Off! 🛒",
    "📺 Watch All Games Live - Subscribe Today! 🎬",
    "🏆 Rugby World Cup 2025 - Early Bird Tickets! 🌍"
  ];

  // Rotating ads
  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 8000);
    
    return () => clearInterval(adInterval);
  }, [ads.length]);

  const handleGameClick = (match) => {
    if (onGameSelect) {
      const gameData = {
        tournament: `${tournament.name} ${tournament.year}`,
        round: match.round || "Test Match",
        home: { 
          id: match.team1.name.toLowerCase().replace(/\s+/g, '-'),
          name: match.team1.name,
          flag: match.team1.flag
        },
        away: { 
          id: match.team2.name.toLowerCase().replace(/\s+/g, '-'),
          name: match.team2.name,
          flag: match.team2.flag
        },
        venue: match.venue,
        date: new Date(match.date).toISOString(),
        referee: 'TBA'
      };
      onGameSelect(gameData);
    }
  };

  return (
    <div className="tournament-overview-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 {tournament.name} {tournament.year} - Official Partner! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="tournament-content">
        {/* Tournament Header */}
        <div className="tournament-header">
          <h1 className="tournament-title">{tournament.name} {tournament.year}</h1>
          <p className="tournament-subtitle">{tournament.description}</p>
        </div>

        {/* Rotating Ad Banner */}
        <div className="rotating-ad-banner">
          {ads[currentAd]}
        </div>

        {/* Teams Section */}
        <div className="teams-section">
          <h2 className="section-title">🏆 Participating Teams</h2>
          <div className="teams-grid">
            {tournament.teams.map((team, index) => (
              <div key={index} className="team-card">
                <div className="team-flag">{team.flag}</div>
                <div className="team-name">{team.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Matches Section */}
        <div className="matches-section">
          <h2 className="section-title">📅 Tournament Fixtures</h2>
          <div className="matches-grid">
            {tournament.matches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="team">
                  <div className="team-flag-small">{match.team1.flag}</div>
                  <div className="team-name-small">{match.team1.name}</div>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="team">
                  <div className="team-flag-small">{match.team2.flag}</div>
                  <div className="team-name-small">{match.team2.name}</div>
                </div>
                
                <div className="match-details">
                  <div className="match-venue">
                    📍 {match.venue}
                  </div>
                  <div className="match-time">
                    🕓 {match.date} | {match.time}
                  </div>
                  <button 
                    className="game-button"
                    onClick={() => handleGameClick(match)}
                  >
                    View Game
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        📺 Watch All {tournament.name} Games Live - Subscribe Now! 🎬
      </div>
    </div>
  );
}

export default TournamentOverview;