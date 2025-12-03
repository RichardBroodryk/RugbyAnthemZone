import React from 'react';
import './FeaturedTournament.css';

function FeaturedTournament({ 
  userPreferences,
  onNavigateToTournamentSelector
}) {
  
  const getFeaturedTournamentData = () => {
    // Check if user has a featured tournament selected
    const featuredTournament = userPreferences?.featuredTournament;
    
    if (featuredTournament) {
      return {
        icon: featuredTournament.icon,
        name: featuredTournament.name,
        description: "Your Featured Tournament",
        hasSelection: true,
        color: featuredTournament.color || "#667eea"
      };
    }
    
    // No selection - show prompt to choose
    return {
      icon: "⭐",
      name: "My Tournament", 
      description: "Tap to Choose",
      hasSelection: false,
      color: "#4fc3f7"
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
    <div 
      className="featured-tournament-card" 
      onClick={handleClick}
      style={{ 
        background: tournamentData.hasSelection 
          ? `linear-gradient(135deg, ${tournamentData.color} 0%, ${darkenColor(tournamentData.color, 20)} 100%)`
          : 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)'
      }}
    >
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

// Helper function to darken color for gradient
function darkenColor(color, percent) {
  let hex = color.replace("#", "");
  let r = parseInt(hex.substr(0, 2), 16);
  let g = parseInt(hex.substr(2, 2), 16);
  let b = parseInt(hex.substr(4, 2), 16);
  
  r = Math.floor(r * (100 - percent) / 100);
  g = Math.floor(g * (100 - percent) / 100);
  b = Math.floor(b * (100 - percent) / 100);
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export default FeaturedTournament;