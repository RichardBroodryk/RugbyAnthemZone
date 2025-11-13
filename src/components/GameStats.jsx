import React, { useState } from 'react';
import './GameStats.css';

const GameStats = ({ game, onNavigateBack }) => {
  const [selectedTeam, setSelectedTeam] = useState('home');
  
  const gameData = game || {
    id: 1,
    tournament: "Six Nations Championship",
    round: "Round 3",
    date: "2024-02-24",
    venue: "Twickenham Stadium, London",
    status: "Completed",
    homeTeam: {
      id: 1,
      name: "England",
      code: "ENG",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
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
      flag: "🇮🇪",
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
      stats: [
        { key: "tackles", label: "Tackles Made" },
        { key: "missedTackles", label: "Missed Tackles" },
        { key: "tackleSuccess", label: "Tackle Success %" },
        { key: "turnovers", label: "Turnovers Won" }
      ]
    },
    {
      title: "Set Piece",
      stats: [
        { key: "lineoutsWon", label: "Lineouts Won", totalKey: "lineouts" },
        { key: "scrumsWon", label: "Scrums Won", totalKey: "scrums" },
        { key: "rucksWon", label: "Rucks Won", totalKey: "rucks" }
      ]
    },
    {
      title: "Kicking & Discipline",
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

  return (
    <div className="game-stats-page">
      {/* Navigation Bar */}
      <nav className="stats-nav">
        <button className="nav-back-btn" onClick={onNavigateBack}>
          ← Back
        </button>
        <h1 className="nav-title">Game Statistics</h1>
        <div className="nav-actions">
          <button className="nav-action-btn">🏠</button>
          <button className="nav-action-btn">🔍</button>
        </div>
      </nav>

      {/* Top Ad Banner */}
      <div className="ad-banner top-ad">
        <p>ADVERTISEMENT</p>
        <div className="ad-placeholder">
          Ad Banner (728x90)
        </div>
      </div>

      {/* Game Header */}
      <div className="game-header">
        <div className="container">
          <div className="tournament-info">
            <span className="tournament-name">{gameData.tournament}</span>
            <span className="game-round">{gameData.round}</span>
            <span className="game-date">{gameData.date}</span>
          </div>
          
          <div className="teams-display">
            <div className="team home-team">
              <div className="team-flag">{gameData.homeTeam.flag}</div>
              <div className="team-name">{gameData.homeTeam.name}</div>
              <div className="team-score">{gameData.homeTeam.score}</div>
            </div>
            
            <div className="vs-separator">VS</div>
            
            <div className="team away-team">
              <div className="team-score">{gameData.awayTeam.score}</div>
              <div className="team-name">{gameData.awayTeam.name}</div>
              <div className="team-flag">{gameData.awayTeam.flag}</div>
            </div>
          </div>
          
          <div className="game-details">
            <span className="venue">{gameData.venue}</span>
            <span className="status">{gameData.status}</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Team Selection Tabs */}
        <div className="team-tabs">
          <button 
            className={`team-tab ${selectedTeam === 'home' ? 'active' : ''}`}
            onClick={() => setSelectedTeam('home')}
          >
            {gameData.homeTeam.flag} {gameData.homeTeam.name} Statistics
          </button>
          <button 
            className={`team-tab ${selectedTeam === 'away' ? 'active' : ''}`}
            onClick={() => setSelectedTeam('away')}
          >
            {gameData.awayTeam.flag} {gameData.awayTeam.name} Statistics
          </button>
        </div>

        {/* Team Stats Overview */}
        <div className="team-stats-overview">
          <div className="selected-team-header">
            <h2>{currentTeam.flag} {currentTeam.name} Team Statistics</h2>
            <div className="score-comparison">
              <span className="team-score">{currentTeam.score}</span>
              <span className="score-separator">-</span>
              <span className="opponent-score">{opponentTeam.score}</span>
            </div>
          </div>

          {/* Stats by Category */}
          {statCategories.map((category, index) => (
            <div key={index} className="stats-category">
              <h3 className="category-title">{category.title}</h3>
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
          <h3>Key Performance Indicators</h3>
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

        {/* Bottom Ad Banner */}
        <div className="ad-banner bottom-ad">
          <p>ADVERTISEMENT</p>
          <div className="ad-placeholder">
            Ad Banner (728x90)
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;