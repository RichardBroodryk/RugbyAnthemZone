import React, { useState } from 'react';
import './GameStats.css';
import NavBar from './NavBar'; // Import professional NavBar

// Flag Component with real images
const Flag = ({ country, size = 'large' }) => {
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

const GameStats = ({ game, onNavigateBack, onNavigateToTournament, onNavigateToGame }) => {
  const [selectedTeam, setSelectedTeam] = useState('home');
  const [showPlayerStats, setShowPlayerStats] = useState(false);
  
  const gameData = game || {
    id: 1,
    tournament: "Six Nations Championship",
    tournamentId: "six-nations",
    round: "Round 3",
    date: "24 February 2024",
    venue: "Twickenham Stadium, London",
    status: "Completed",
    homeTeam: {
      id: 1,
      name: "England",
      code: "ENG",
      score: 23,
      stats: {
        possession: 58,
        territory: 62,
        carries: 125,
        meters: 423,
        defendersBeaten: 12,
        cleanBreaks: 6,
        offloads: 8,
        turnovers: 11,
        tackles: 156,
        missedTackles: 14,
        tackleSuccess: 92,
        penalties: 9,
        lineouts: 12,
        lineoutsWon: 10,
        scrums: 7,
        scrumsWon: 6,
        rucks: 118,
        rucksWon: 115,
        kicks: 28,
        kickSuccess: 79,
        yellowCards: 1,
        redCards: 0,
        pointsFromSetPiece: 14,
        pointsFromTurnovers: 9
      }
    },
    awayTeam: {
      id: 2,
      name: "Ireland",
      code: "IRE",
      score: 22,
      stats: {
        possession: 42,
        territory: 38,
        carries: 98,
        meters: 387,
        defendersBeaten: 9,
        cleanBreaks: 4,
        offloads: 6,
        turnovers: 9,
        tackles: 189,
        missedTackles: 8,
        tackleSuccess: 96,
        penalties: 6,
        lineouts: 10,
        lineoutsWon: 9,
        scrums: 5,
        scrumsWon: 5,
        rucks: 105,
        rucksWon: 102,
        kicks: 22,
        kickSuccess: 82,
        yellowCards: 0,
        redCards: 0,
        pointsFromSetPiece: 11,
        pointsFromTurnovers: 11
      }
    }
  };

  const currentTeam = selectedTeam === 'home' ? gameData.homeTeam : gameData.awayTeam;
  const opponentTeam = selectedTeam === 'home' ? gameData.awayTeam : gameData.homeTeam;

  const statCategories = [
    {
      title: "Attack",
      icon: "⚡",
      stats: [
        { key: "carries", label: "Carries" },
        { key: "meters", label: "Meters Gained" },
        { key: "cleanBreaks", label: "Clean Breaks" },
        { key: "defendersBeaten", label: "Defenders Beaten" },
        { key: "offloads", label: "Offloads" }
      ]
    },
    {
      title: "Defense",
      icon: "🛡️",
      stats: [
        { key: "tackles", label: "Tackles Made" },
        { key: "missedTackles", label: "Missed Tackles" },
        { key: "tackleSuccess", label: "Tackle Success %" },
        { key: "turnovers", label: "Turnovers Won" }
      ]
    },
    {
      title: "Set Piece",
      icon: "🏉",
      stats: [
        { key: "lineoutsWon", label: "Lineouts Won", totalKey: "lineouts" },
        { key: "scrumsWon", label: "Scrums Won", totalKey: "scrums" },
        { key: "rucksWon", label: "Rucks Won", totalKey: "rucks" }
      ]
    },
    {
      title: "Kicking & Discipline",
      icon: "🎯",
      stats: [
        { key: "kicks", label: "Kicks from Hand" },
        { key: "kickSuccess", label: "Kick Success %" },
        { key: "penalties", label: "Penalties Conceded" },
        { key: "yellowCards", label: "Yellow Cards" },
        { key: "redCards", label: "Red Cards" }
      ]
    },
    {
      title: "Game Control",
      icon: "📊",
      stats: [
        { key: "possession", label: "Possession %" },
        { key: "territory", label: "Territory %" },
        { key: "pointsFromSetPiece", label: "Points from Set Piece" },
        { key: "pointsFromTurnovers", label: "Points from Turnovers" }
      ]
    }
  ];

  const StatRow = ({ stat, teamStats, opponentStats }) => {
    const teamValue = teamStats[stat.key];
    const opponentValue = opponentStats[stat.key];
    const isPercentage = stat.key.includes('Success') || stat.key === 'possession' || stat.key === 'territory';
    
    const totalKey = stat.totalKey;
    const totalValue = totalKey ? teamStats[totalKey] : null;
    
    return (
      <div className="stat-row">
        <div className="stat-label">{stat.label}</div>
        <div className="stat-values">
          <div className="team-value">
            {teamValue}
            {isPercentage && '%'}
            {totalValue && `/${totalValue}`}
          </div>
          <div className="stat-bar-container">
            <div 
              className="stat-bar team-bar" 
              style={{ width: `${(teamValue / (teamValue + opponentValue)) * 100}%` }}
            ></div>
            <div 
              className="stat-bar opponent-bar" 
              style={{ width: `${(opponentValue / (teamValue + opponentValue)) * 100}%` }}
            ></div>
          </div>
          <div className="opponent-value">
            {opponentValue}
            {isPercentage && '%'}
            {totalValue && `/${opponentStats[totalKey]}`}
          </div>
        </div>
      </div>
    );
  };

  // Related games from same tournament
  const relatedGames = [
    { id: 2, homeTeam: "France", awayTeam: "Wales", date: "23 Feb 2024", score: "28-24" },
    { id: 3, homeTeam: "Scotland", awayTeam: "Italy", date: "25 Feb 2024", score: "31-19" },
    { id: 4, homeTeam: "England", awayTeam: "Scotland", date: "10 Mar 2024", score: "TBD" }
  ];

  return (
    <div className="game-stats-page">
      {/* Professional NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Games")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        📊 Rugby Pro Stats - Advanced Analytics & Live Player Tracking! 🏉
      </div>

      {/* Game Header */}
      <div className="game-header">
        <div className="container">
          <div className="tournament-info-container">
            <div className="tournament-name">{gameData.tournament}</div>
            <div className="game-round">{gameData.round}</div>
            <div className="game-date">{gameData.date}</div>
          </div>
          
          <div className="teams-display">
            <div className="team home-team">
              <Flag country={gameData.homeTeam.name} size="large" />
              <div className="team-name">{gameData.homeTeam.name}</div>
              <div className="team-score game-score">{gameData.homeTeam.score}</div>
            </div>
            
            <div className="vs-separator">VS</div>
            
            <div className="team away-team">
              <div className="team-score game-score">{gameData.awayTeam.score}</div>
              <div className="team-name">{gameData.awayTeam.name}</div>
              <Flag country={gameData.awayTeam.name} size="large" />
            </div>
          </div>
          
          <div className="game-details-container">
            <span className="venue">{gameData.venue}</span>
            <span className="game-status">{gameData.status}</span>
          </div>

          {/* Tournament Navigation */}
          <div className="tournament-nav">
            <button 
              className="tournament-btn"
              onClick={() => onNavigateToTournament?.(gameData.tournamentId)}
            >
              🏆 View Full Tournament
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Stats View Toggle */}
        <div className="stats-view-toggle">
          <button 
            className={`view-toggle-btn ${!showPlayerStats ? 'active' : ''}`}
            onClick={() => setShowPlayerStats(false)}
          >
            📊 Team Statistics
          </button>
          <button 
            className={`view-toggle-btn ${showPlayerStats ? 'active' : ''}`}
            onClick={() => setShowPlayerStats(true)}
          >
            👤 Player Statistics
          </button>
        </div>

        {!showPlayerStats ? (
          <>
            {/* Team Selection Tabs */}
            <div className="team-tabs">
              <button 
                className={`team-tab ${selectedTeam === 'home' ? 'active' : ''}`}
                onClick={() => setSelectedTeam('home')}
              >
                <Flag country={gameData.homeTeam.name} size="small" />
                {gameData.homeTeam.name} Statistics
              </button>
              <button 
                className={`team-tab ${selectedTeam === 'away' ? 'active' : ''}`}
                onClick={() => setSelectedTeam('away')}
              >
                <Flag country={gameData.awayTeam.name} size="small" />
                {gameData.awayTeam.name} Statistics
              </button>
            </div>

            {/* Team Stats Overview */}
            <div className="team-stats-overview">
              <div className="selected-team-header">
                <h2>
                  <Flag country={currentTeam.name} size="small" />
                  {currentTeam.name} Team Statistics
                </h2>
                <div className="score-comparison">
                  <span className="comparison-team-score">{currentTeam.score}</span>
                  <span className="score-separator">-</span>
                  <span className="comparison-opponent-score">{opponentTeam.score}</span>
                </div>
              </div>

              {/* Stats by Category */}
              {statCategories.map((category, index) => (
                <div key={index} className="stats-category">
                  <h3 className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="stats-grid">
                    {category.stats.map((stat, statIndex) => (
                      <StatRow 
                        key={statIndex}
                        stat={stat}
                        teamStats={currentTeam.stats}
                        opponentStats={opponentTeam.stats}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Performance Indicators */}
            <div className="kpi-section">
              <h3>🎯 Key Performance Indicators</h3>
              <div className="kpi-grid">
                <div className="kpi-item">
                  <div className="kpi-value">{currentTeam.stats.tackleSuccess}%</div>
                  <div className="kpi-label">Tackle Success</div>
                </div>
                <div className="kpi-item">
                  <div className="kpi-value">{currentTeam.stats.territory}%</div>
                  <div className="kpi-label">Territory</div>
                </div>
                <div className="kpi-item">
                  <div className="kpi-value">{currentTeam.stats.possession}%</div>
                  <div className="kpi-label">Possession</div>
                </div>
                <div className="kpi-item">
                  <div className="kpi-value">{currentTeam.stats.pointsFromTurnovers}</div>
                  <div className="kpi-label">Points from Turnovers</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Player Statistics View */
          <div className="player-stats-view">
            <h3>👤 Player Statistics</h3>
            <div className="player-stats-message">
              <p>Player statistics feature coming soon! This will include:</p>
              <ul>
                <li>Individual player performance metrics</li>
                <li>Head-to-head player comparisons</li>
                <li>Position-specific statistics</li>
                <li>Player rating system</li>
                <li>Fantasy rugby integration</li>
              </ul>
              <button 
                className="player-stats-preview-btn"
                onClick={() => onNavigateToTournament?.(gameData.tournamentId)}
              >
                View Tournament Player Stats →
              </button>
            </div>
          </div>
        )}

        {/* Related Games Section */}
        <div className="related-games-section">
          <h3>📅 Other Games in {gameData.tournament}</h3>
          <div className="related-games-grid">
            {relatedGames.map((relatedGame, index) => (
              <div 
                key={index} 
                className="related-game-card"
                onClick={() => onNavigateToGame?.(relatedGame)}
              >
                <div className="related-game-teams">
                  <div className="related-game-team">
                    <Flag country={relatedGame.homeTeam} size="small" />
                    <span className="related-game-team-name">{relatedGame.homeTeam}</span>
                  </div>
                  <div className="related-game-vs">VS</div>
                  <div className="related-game-team">
                    <Flag country={relatedGame.awayTeam} size="small" />
                    <span className="related-game-team-name">{relatedGame.awayTeam}</span>
                  </div>
                </div>
                <div className="related-game-info">
                  <span className="related-game-date">{relatedGame.date}</span>
                  <span className="related-game-score">{relatedGame.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tournament Links */}
        <div className="tournament-links-section">
          <h3>🏆 Explore More Tournaments</h3>
          <div className="tournament-links-grid">
            <button 
              className="tournament-link"
              onClick={() => onNavigateToTournament?.('six-nations')}
            >
              Six Nations
            </button>
            <button 
              className="tournament-link"
              onClick={() => onNavigateToTournament?.('rugby-championship')}
            >
              Rugby Championship
            </button>
            <button 
              className="tournament-link"
              onClick={() => onNavigateToTournament?.('world-cup')}
            >
              World Cup
            </button>
            <button 
              className="tournament-link"
              onClick={() => onNavigateToTournament?.('autumn-internationals')}
            >
              Autumn Internationals
            </button>
          </div>
        </div>

        {/* Mid Content Ad Banner */}
        <div className="mid-ad-banner">
          🎯 Fantasy Rugby - Pick Your Dream Team Based on Real Stats! 📈
        </div>

        {/* Stats Export Section */}
        <div className="stats-export-section">
          <h3>📥 Export Statistics</h3>
          <div className="export-buttons">
            <button className="export-btn">📄 PDF Report</button>
            <button className="export-btn">📊 Excel Data</button>
            <button className="export-btn">🖼️ Share Image</button>
            <button className="export-btn">📱 Mobile App</button>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        📲 Rugby Analytics Pro - Real-time Stats & Advanced Metrics! 📊
      </div>
    </div>
  );
};

export default GameStats;