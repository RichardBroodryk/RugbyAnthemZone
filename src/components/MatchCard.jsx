import React from 'react';
import './MatchCard.css';

const MatchCard = ({ 
  match, 
  isSelected = false, 
  onSelect, 
  tournamentColor = '#1976d2',
  showTournament = true,
  FlagComponent = null // Accept Flag component prop
}) => {
  const getStatusClass = (status) => {
    switch(status?.toUpperCase()) {
      case 'LIVE': return 'status-live';
      case 'UPCOMING': return 'status-upcoming';
      case 'COMPLETED': 
      case 'FT': 
      case 'FULL TIME': 
        return 'status-completed';
      case 'HT': 
      case 'HALF TIME': 
        return 'status-ht';
      default: return 'status-upcoming';
    }
  };

  const getStatusText = (status, time) => {
    switch(status?.toUpperCase()) {
      case 'LIVE': return time || 'LIVE';
      case 'UPCOMING': return time || 'UPCOMING';
      case 'COMPLETED': 
      case 'FT': return 'FT';
      case 'HT': return 'HT';
      default: return time || status || 'UPCOMING';
    }
  };

  const homeTeam = match.homeTeam || match.teams?.[0] || 'TBD';
  const awayTeam = match.awayTeam || match.teams?.[1] || 'TBD';

  // Render flag with FlagComponent if provided, otherwise fallback to emoji/text
  const renderFlag = (flagData, size = 'medium') => {
    if (FlagComponent && flagData) {
      return (
        <div className="team-flag-container">
          <FlagComponent country={flagData} size={size} />
        </div>
      );
    }
    // Fallback to existing emoji/text display
    return <div className="team-flag">{flagData || '🏉'}</div>;
  };

  return (
    <div 
      className={`match-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect && onSelect(match)}
      style={{ borderLeftColor: tournamentColor }}
    >
      {/* Tournament Badge */}
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

      {/* COMPLETELY REDESIGNED LAYOUT */}
      <div className="match-teams-container">
        {/* Home Team - Stacked Layout */}
        <div className="team-section home-team">
          {renderFlag(match.homeFlag, 'medium')}
          <div className="team-name">{homeTeam}</div>
          <div className="team-score">{match.homeScore ?? match.scores?.[0] ?? 0}</div>
        </div>

        {/* VS and Time - Centered */}
        <div className="match-center-section">
          <div className="vs-indicator">VS</div>
          <div className="match-time">
            {getStatusText(match.status, match.time)}
          </div>
          {match.status?.toUpperCase() === 'LIVE' && (
            <div className="live-pulse"></div>
          )}
        </div>

        {/* Away Team - Stacked Layout */}
        <div className="team-section away-team">
          {renderFlag(match.awayFlag, 'medium')}
          <div className="team-name">{awayTeam}</div>
          <div className="team-score">{match.awayScore ?? match.scores?.[1] ?? 0}</div>
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