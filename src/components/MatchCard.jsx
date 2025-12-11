import React from 'react';
import './MatchCard.css';

const MatchCard = ({ 
  match, 
  isSelected = false, 
  onSelect, 
  tournamentColor = '#1976d2',
  showTournament = true,
  FlagComponent = null
}) => {
  const getStatusClass = (status) => {
    switch(status?.toUpperCase()) {
      case 'LIVE': return 'status-live';
      case 'UPCOMING': return 'status-upcoming';
      case 'COMPLETED': 
      case 'FT': 
      case 'FULL TIME': 
        return 'status-completed';
      default: return 'status-upcoming';
    }
  };

  const getStatusText = (status, time) => {
    switch(status?.toUpperCase()) {
      case 'LIVE': return time || 'LIVE';
      case 'UPCOMING': return time || 'UPCOMING';
      case 'COMPLETED': 
      case 'FT': return 'FT';
      default: return time || status || 'UPCOMING';
    }
  };

  const homeTeam = match.homeTeam || 'TBD';
  const awayTeam = match.awayTeam || 'TBD';

  return (
    <div 
      className={`match-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect && onSelect(match)}
      style={{ borderLeftColor: tournamentColor }}
    >
      {/* Tournament Badge - BLACK TEXT */}
      {showTournament && match.tournament && (
        <div 
          className="match-tournament"
          style={{ 
            background: `linear-gradient(135deg, ${tournamentColor}, ${tournamentColor}cc)` 
          }}
        >
          {match.tournament}
        </div>
      )}

      {/* Match Teams */}
      <div className="match-teams-container">
        {/* Home Team */}
        <div className="team-section home-team">
          {FlagComponent ? (
            <div className="team-flag-container">
              <FlagComponent country={homeTeam} size="medium" />
            </div>
          ) : (
            <div className="team-flag">🏉</div>
          )}
          <div className="team-name">{homeTeam}</div>
          <div className="team-score">{match.homeScore || 0}</div>
        </div>

        {/* Center Section */}
        <div className="match-center-section">
          <div className="vs-indicator">VS</div>
          <div className="match-time">
            {getStatusText(match.status, match.time)}
          </div>
          {match.status?.toUpperCase() === 'LIVE' && (
            <div className="live-pulse"></div>
          )}
        </div>

        {/* Away Team */}
        <div className="team-section away-team">
          {FlagComponent ? (
            <div className="team-flag-container">
              <FlagComponent country={awayTeam} size="medium" />
            </div>
          ) : (
            <div className="team-flag">🏉</div>
          )}
          <div className="team-name">{awayTeam}</div>
          <div className="team-score">{match.awayScore || 0}</div>
        </div>
      </div>

      {/* Match Info */}
      <div className="match-info">
        <span className={`match-status ${getStatusClass(match.status)}`}>
          {match.status?.toUpperCase() === 'LIVE' ? 'LIVE' : match.status}
        </span>
        {match.venue && (
          <span className="match-venue">{match.venue}</span>
        )}
      </div>
    </div>
  );
};

export default MatchCard;