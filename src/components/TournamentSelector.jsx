import React from 'react';
import './TournamentSelector.css';

function TournamentSelector({ 
  userPreferences,
  onNavigateBack,
  onTournamentSelected,
  // All tournament navigation functions
  onNavigateToMensSixNations,
  onNavigateToWomensSixNations,
  onNavigateToMensWorldCup,
  onNavigateToWomensWorldCup,
  onNavigateToMensRugbyChampionship,
  onNavigateToMensAutumnTours,
  onNavigateToMensSummerInternationals,
  onNavigateToWomensWXV,
  onNavigateToWomensPacificFour,
  onNavigateToWomensAutumnInternationals,
  onNavigateToWomensSummerTests,
  onNavigateToMensRugby7s,
  onNavigateToWomensRugby7s,
  onNavigateToMensBritishLions,
  onNavigateToMensRivalTours
}) {
  
  const tournamentCategories = [
    {
      title: "Men's Major Tournaments",
      tournaments: [
        { name: "Six Nations", icon: "🌹", navigate: onNavigateToMensSixNations, gender: "mens" },
        { name: "Rugby World Cup", icon: "🏆", navigate: onNavigateToMensWorldCup, gender: "mens" },
        { name: "Rugby Championship", icon: "💪", navigate: onNavigateToMensRugbyChampionship, gender: "mens" },
        { name: "Autumn Internationals", icon: "🍁", navigate: onNavigateToMensAutumnTours, gender: "mens" },
        { name: "Summer Tests", icon: "☀️", navigate: onNavigateToMensSummerInternationals, gender: "mens" },
        { name: "British & Irish Lions", icon: "🦁", navigate: onNavigateToMensBritishLions, gender: "mens" }
      ]
    },
    {
      title: "Women's Major Tournaments", 
      tournaments: [
        { name: "Women's Six Nations", icon: "♀🌹", navigate: onNavigateToWomensSixNations, gender: "womens" },
        { name: "Women's World Cup", icon: "♀🏆", navigate: onNavigateToWomensWorldCup, gender: "womens" },
        { name: "WXV", icon: "♀🌟", navigate: onNavigateToWomensWXV, gender: "womens" },
        { name: "Pacific Four Series", icon: "♀🌊", navigate: onNavigateToWomensPacificFour, gender: "womens" },
        { name: "Women's Autumn Internationals", icon: "♀🍁", navigate: onNavigateToWomensAutumnInternationals, gender: "womens" },
        { name: "Women's Summer Tests", icon: "♀☀️", navigate: onNavigateToWomensSummerTests, gender: "womens" }
      ]
    },
    {
      title: "Rugby 7s & Special Events",
      tournaments: [
        { name: "Men's Rugby 7s", icon: "⚡", navigate: onNavigateToMensRugby7s, gender: "mens" },
        { name: "Women's Rugby 7s", icon: "♀⚡", navigate: onNavigateToWomensRugby7s, gender: "womens" },
        { name: "Rival Tours", icon: "⚔️", navigate: onNavigateToMensRivalTours, gender: "mens" }
      ]
    }
  ];

  const handleTournamentSelect = (tournament) => {
    // Save to user preferences
    if (onTournamentSelected) {
      onTournamentSelected(tournament);
    }
    
    // Navigate to the selected tournament
    tournament.navigate();
  };

  return (
    <div className="tournament-selector-page">
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <div className="nav-title">Choose Featured Tournament</div>
      </nav>

      <div className="selector-content">
        <div className="selector-header">
          <h1>Select Your Featured Tournament</h1>
          <p>This tournament will appear on your homepage for quick access</p>
        </div>

        {tournamentCategories.map((category, index) => (
          <div key={index} className="tournament-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="tournament-grid">
              {category.tournaments.map((tournament, tIndex) => (
                <div 
                  key={tIndex}
                  className="tournament-option"
                  onClick={() => handleTournamentSelect(tournament)}
                >
                  <div className="tournament-icon">{tournament.icon}</div>
                  <div className="tournament-name">{tournament.name}</div>
                  <div className="select-button">Select</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentSelector;