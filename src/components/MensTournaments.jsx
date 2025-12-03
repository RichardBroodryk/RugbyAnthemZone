import React from 'react';
import './MensTournaments.css';
import NavBar from './NavBar';

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
    <div className="mens-tournaments-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search clicked")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      <div className="top-ad-banner">
        🏆 MEN'S RUGBY TOURNAMENTS - Official Partners! ⚡
      </div>

      <div className="tournaments-content">
        <div className="tournament-header">
          <h1 className="tournament-title">Men's Rugby Tournaments</h1>
          <p className="tournament-subtitle">Select a tournament to explore</p>
        </div>
        
        <div className="rotating-ad-banner">
          🎟️ Book Tickets Now - Limited Availability! ⚡
        </div>
        
        <div className="tournaments-grid">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="tournament-card"
              onClick={tournament.onClick}
            >
              <div className="tournament-icon">🏆</div>
              <h3 className="tournament-name">{tournament.name}</h3>
              <p className="tournament-description">{tournament.description}</p>
              <div className="tournament-dates">View Tournament</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-ad-banner">
        📺 Watch All Men's Rugby Live - Subscribe Now! 🎬
      </div>
    </div>
  );
};

export default MensTournaments;