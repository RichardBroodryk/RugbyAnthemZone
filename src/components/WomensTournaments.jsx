import React from 'react';
import './WomensTournaments.css';
import ThemeToggle from './ThemeToggle';

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
    <div className="womens-tournaments-page">
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

      <div className="tournaments-content">
        <div className="tournament-header">
          <h1 className="tournament-title">Women's Rugby Tournaments</h1>
          <p className="tournament-subtitle">Select a tournament to explore</p>
        </div>
        
        <div className="tournaments-grid">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="tournament-card"
              onClick={tournament.onClick}
            >
              <div className="tournament-icon">🌟</div>
              <h3 className="tournament-name">{tournament.name}</h3>
              <p className="tournament-description">{tournament.description}</p>
              <div className="tournament-dates">View Tournament</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensTournaments;