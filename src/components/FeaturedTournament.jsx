import React from 'react';
import './FeaturedTournament.css';

function FeaturedTournament({ 
  userPreferences,
  onNavigateToTournamentSelector  // NEW PROP - navigates to selector
}) {
  
  const getFeaturedTournamentData = () => {
    // Check if user has a featured tournament selected
    const featuredTournament = userPreferences?.featuredTournament;
    
    if (featuredTournament) {
      return {
        icon: featuredTournament.icon,
        name: featuredTournament.name,
        description: "Your Featured Tournament",
        hasSelection: true
      };
    }
    
    // No selection - show prompt to choose
    return {
      icon: "⭐",
      name: "My Tournament", 
      description: "Tap to Choose",
      hasSelection: false
    };
  };

  const tournamentData = getFeaturedTournamentData();

  const handleClick = () => {
    // Always navigate to selector - let user choose or change
    if (onNavigateToTournamentSelector) {
      onNavigateToTournamentSelector();
    }
  };

  return (
    <div className="featured-tournament-card" onClick={handleClick}>
      <div className="tournament-header">
        <div className="tournament-icon">{tournamentData.icon}</div>
        <div className="tournament-info">
          <div className="tournament-label">
            {tournamentData.hasSelection ? "FEATURED TOURNAMENT" : "CHOOSE FEATURED"}
          </div>
          <div className="tournament-name">{tournamentData.name}</div>
          <div className="tournament-description">{tournamentData.description}</div>
        </div>
      </div>
      
      <div className="tournament-badge">
        <span className="badge-icon">
          {tournamentData.hasSelection ? "⭐" : "👉"}
        </span>
        <span className="badge-text">
          {tournamentData.hasSelection ? "Your Priority" : "Tap to Select"}
        </span>
      </div>

      {tournamentData.hasSelection && (
        <div className="tournament-preview">
          <div className="preview-teams">
            <span className="team-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
            <span className="vs">vs</span>
            <span className="team-flag">🇫🇷</span>
          </div>
          <div className="preview-date">Next: Soon</div>
        </div>
      )}
    </div>
  );
}

export default FeaturedTournament;