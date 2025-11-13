import React from 'react';
import './TournamentOverview.css';

const WomensTournaments = ({ 
  onNavigateBack,
  onNavigateToWomensSixNations,
  onNavigateToWomensWXV,
  onNavigateToWomensWorldCup,
  onNavigateToWomensPacificFour,
  onNavigateToWomensRugby7s,
  onNavigateToWomensAutumnInternationals,
  onNavigateToWomensSummerTests
}) => {
  const tournaments = [
    {
      id: 'six-nations',
      name: 'Women\'s Six Nations',
      description: 'Annual European competition',
      onClick: onNavigateToWomensSixNations
    },
    {
      id: 'wxv',
      name: 'WXV Tournament',
      description: 'Global women\'s rugby competition',
      onClick: onNavigateToWomensWXV
    },
    {
      id: 'world-cup',
      name: 'Women\'s Rugby World Cup',
      description: 'Premier international competition',
      onClick: onNavigateToWomensWorldCup
    },
    {
      id: 'pacific-four',
      name: 'Pacific Four Series',
      description: 'Pacific rim nations competition',
      onClick: onNavigateToWomensPacificFour
    },
    {
      id: 'summer-tests',
      name: 'Summer Tests',
      description: 'Mid-year international matches',
      onClick: onNavigateToWomensSummerTests
    },
    {
      id: 'autumn-internationals',
      name: 'Autumn Internationals',
      description: 'End-of-year test matches',
      onClick: onNavigateToWomensAutumnInternationals
    },
    {
      id: 'rugby-7s',
      name: 'Women\'s Rugby 7s',
      description: 'Fast-paced sevens rugby',
      onClick: onNavigateToWomensRugby7s
    }
  ];

  return (
    <div className="tournament-overview-page">
      <div className="tournament-content">
        <div className="tournament-header">
          <button className="nav-btn" onClick={onNavigateBack}>
            ← Back
          </button>
          <h1 className="tournament-title">Women's Rugby Tournaments</h1>
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

export default WomensTournaments;