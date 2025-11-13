import React from 'react';
import './TournamentOverview.css';

const MensTournaments = ({ 
  onNavigateBack,
  onNavigateToMensAutumnTours,
  onNavigateToMensSixNations,
  onNavigateToMensRugbyChampionship,
  onNavigateToMensWorldCup,
  onNavigateToMensRivalTours,
  onNavigateToMensSummerInternationals,
  onNavigateToMensRugby7s,
  onNavigateToMensBritishLions
}) => {
  const tournaments = [
    {
      id: 'autumn-tours',
      name: 'Autumn Internationals',
      description: 'End-of-year test matches',
      onClick: onNavigateToMensAutumnTours
    },
    {
      id: 'six-nations',
      name: 'Six Nations Championship',
      description: 'Annual European competition',
      onClick: onNavigateToMensSixNations
    },
    {
      id: 'rugby-championship',
      name: 'Rugby Championship',
      description: 'Southern Hemisphere premier competition',
      onClick: onNavigateToMensRugbyChampionship
    },
    {
      id: 'world-cup',
      name: 'Rugby World Cup',
      description: 'Premier international competition',
      onClick: onNavigateToMensWorldCup
    },
    {
      id: 'rival-tours',
      name: 'Rival Tours & Series',
      description: 'Historic rivalry matches',
      onClick: onNavigateToMensRivalTours
    },
    {
      id: 'summer-internationals',
      name: 'Summer Internationals',
      description: 'Mid-year test matches',
      onClick: onNavigateToMensSummerInternationals
    },
    {
      id: 'british-lions',
      name: 'British & Irish Lions',
      description: 'Legendary touring team',
      onClick: onNavigateToMensBritishLions
    },
    {
      id: 'rugby-7s',
      name: 'Rugby 7s World Series',
      description: 'Fast-paced sevens rugby',
      onClick: onNavigateToMensRugby7s
    }
  ];

  return (
    <div className="tournament-overview-page">
      <div className="tournament-content">
        <div className="tournament-header">
          <button className="nav-btn" onClick={onNavigateBack}>
            ← Back
          </button>
          <h1 className="tournament-title">Men's Rugby Tournaments</h1>
          <p className="tournament-subtitle">Select a tournament to explore</p>
        </div>
        
        <div className="teams-section">
          <div className="teams-grid">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="team-card"
                onClick={tournament.onClick}
              >
                <h3 className="team-name">{tournament.name}</h3>
                <p>{tournament.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensTournaments;