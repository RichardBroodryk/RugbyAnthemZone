import React, { useState, useEffect } from 'react';
import './GameOverview.css';

const GameOverview = ({ game, userStatus, onNavigateBack, onNavigateToAnthem, onNavigateToMerchandise }) => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the passed game prop or fallback data
    if (game) {
      setGameData(game);
      setLoading(false);
    } else {
      // Fallback data
      setTimeout(() => {
        setGameData({
          tournament: "Autumn Nations Series",
          round: "Test Match",
          home: { 
            name: "New Zealand", 
            flag: "🇳🇿", 
            score: 28 
          },
          away: { 
            name: "South Africa", 
            flag: "🇿🇦", 
            score: 24 
          },
          venue: "Main Stadium",
          date: "2024-03-20", 
          time: "19:30", 
          status: "Completed"
        });
        setLoading(false);
      }, 500);
    }
  }, [game]);

  const handleAnthemClick = (teamName) => {
    if (onNavigateToAnthem) {
      onNavigateToAnthem(teamName);
    }
  };

  const handleMerchandiseClick = () => {
    if (onNavigateToMerchandise) {
      onNavigateToMerchandise();
    }
  };

  const handleUpgradeClick = () => {
    alert('⭐ Upgrade to Premium to access official team merchandise stores!\n\nPremium features include:\n• Official merchandise store access\n• Exclusive content\n• Ad-free experience\n• And much more!');
  };

  if (loading) {
    return <div className="loading">Loading game details...</div>;
  }

  if (!gameData) {
    return <div className="error">Game not found</div>;
  }

  return (
    <div className="game-overview">
      <div className="game-header">
        <button className="back-btn" onClick={onNavigateBack}>
          ← Back to Tournament
        </button>
        <h1>Game Overview</h1>
        <div className="game-meta">
          <span className="date">{gameData.date} at {gameData.time}</span>
          <span className="venue">{gameData.venue}</span>
          <span className={`status ${(gameData.status || 'completed').toLowerCase()}`}>
            {gameData.status || 'Completed'}
          </span>
        </div>
      </div>

      <div className="teams-container">
        <div className="team-section home-team">
          <div className="team-header">
            <div className="team-flag">{gameData.home?.flag || gameData.homeTeam?.flag}</div>
            <h2>{gameData.home?.name || gameData.homeTeam?.name}</h2>
            <div className="team-score">{gameData.home?.score || gameData.homeTeam?.score || 0}</div>
          </div>
          
          <div className="team-features">
            <button 
              className="feature-btn anthem-btn" 
              onClick={() => handleAnthemClick(gameData.home?.name || gameData.homeTeam?.name)}
            >
              🎵 National Anthem
            </button>
            
            {/* Premium Gating: Merchandise Button */}
            {userStatus === 'premium' ? (
              <button 
                className="feature-btn merch-btn" 
                onClick={handleMerchandiseClick}
              >
                🛍️ Team Merchandise
              </button>
            ) : (
              <button 
                className="feature-btn upgrade-btn" 
                onClick={handleUpgradeClick}
              >
                ⭐ Upgrade for Merchandise
              </button>
            )}
          </div>
        </div>

        <div className="vs-section">
          <div className="vs-circle">VS</div>
        </div>

        <div className="team-section away-team">
          <div className="team-header">
            <div className="team-flag">{gameData.away?.flag || gameData.awayTeam?.flag}</div>
            <h2>{gameData.away?.name || gameData.awayTeam?.name}</h2>
            <div className="team-score">{gameData.away?.score || gameData.awayTeam?.score || 0}</div>
          </div>
          
          <div className="team-features">
            <button 
              className="feature-btn anthem-btn" 
              onClick={() => handleAnthemClick(gameData.away?.name || gameData.awayTeam?.name)}
            >
              🎵 National Anthem
            </button>
            
            {/* Premium Gating: Merchandise Button */}
            {userStatus === 'premium' ? (
              <button 
                className="feature-btn merch-btn" 
                onClick={handleMerchandiseClick}
              >
                🛍️ Team Merchandise
              </button>
            ) : (
              <button 
                className="feature-btn upgrade-btn" 
                onClick={handleUpgradeClick}
              >
                ⭐ Upgrade for Merchandise
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="game-features">
        <h3>Game Features</h3>
        <div className="features-grid">
          <button className="feature-card" onClick={() => alert('Highlights coming soon!')}>
            <span className="icon">🎥</span>
            <span className="label">Match Highlights</span>
          </button>
          
          <button className="feature-card" onClick={() => alert('Stats coming soon!')}>
            <span className="icon">📊</span>
            <span className="label">Game Statistics</span>
          </button>
          
          <button className="feature-card" onClick={() => alert('Standings coming soon!')}>
            <span className="icon">🏆</span>
            <span className="label">Tournament Standings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverview;