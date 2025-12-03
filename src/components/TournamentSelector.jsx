import React from 'react';
import './TournamentSelector.css';
import razNavIcon from '../Assets/images/raz-nav-icon.png';

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
        { name: "Six Nations", icon: "🌹", navigate: onNavigateToMensSixNations, gender: "mens", color: "#4fc3f7" },
        { name: "Rugby World Cup", icon: "🏆", navigate: onNavigateToMensWorldCup, gender: "mens", color: "#ffd700" },
        { name: "Rugby Championship", icon: "💪", navigate: onNavigateToMensRugbyChampionship, gender: "mens", color: "#4fc3f7" },
        { name: "Autumn Internationals", icon: "🍁", navigate: onNavigateToMensAutumnTours, gender: "mens", color: "#ff6b35" },
        { name: "Summer Tests", icon: "☀️", navigate: onNavigateToMensSummerInternationals, gender: "mens", color: "#4fc3f7" },
        { name: "British & Irish Lions", icon: "🦁", navigate: onNavigateToMensBritishLions, gender: "mens", color: "#ffd700" }
      ]
    },
    {
      title: "Women's Major Tournaments", 
      tournaments: [
        { name: "Women's Six Nations", icon: "♀🌹", navigate: onNavigateToWomensSixNations, gender: "womens", color: "#ff6b6b" },
        { name: "Women's World Cup", icon: "♀🏆", navigate: onNavigateToWomensWorldCup, gender: "womens", color: "#ff6b6b" },
        { name: "WXV", icon: "♀🌟", navigate: onNavigateToWomensWXV, gender: "womens", color: "#ff6b6b" },
        { name: "Pacific Four Series", icon: "♀🌊", navigate: onNavigateToWomensPacificFour, gender: "womens", color: "#ff6b6b" },
        { name: "Women's Autumn Internationals", icon: "♀🍁", navigate: onNavigateToWomensAutumnInternationals, gender: "womens", color: "#ff6b6b" },
        { name: "Women's Summer Tests", icon: "♀☀️", navigate: onNavigateToWomensSummerTests, gender: "womens", color: "#ff6b6b" }
      ]
    },
    {
      title: "Rugby 7s & Special Events",
      tournaments: [
        { name: "Men's Rugby 7s", icon: "⚡", navigate: onNavigateToMensRugby7s, gender: "mens", color: "#4fc3f7" },
        { name: "Women's Rugby 7s", icon: "♀⚡", navigate: onNavigateToWomensRugby7s, gender: "womens", color: "#ff6b6b" },
        { name: "Rival Tours", icon: "⚔️", navigate: onNavigateToMensRivalTours, gender: "mens", color: "#4fc3f7" }
      ]
    }
  ];

  const handleTournamentSelect = (tournament) => {
    // Create tournament data for preferences
    const tournamentData = {
      name: tournament.name,
      icon: tournament.icon,
      color: tournament.color,
      gender: tournament.gender
    };
    
    // Save to user preferences
    if (onTournamentSelected) {
      onTournamentSelected(tournamentData);
    }
    
    // Navigate to the selected tournament
    tournament.navigate();
  };

  return (
    <div className="tournament-selector-page">
      {/* Professional Navbar */}
      <nav className="raz-navbar">
        <div className="nav-logo-section">
          <img 
            src={razNavIcon} 
            alt="Rugby Anthem Zone" 
            className="nav-main-logo" 
          />
        </div>

        <div className="nav-icons-section">
          <button className="nav-icon back-icon" onClick={onNavigateBack}>
            ←
          </button>
          <button className="nav-icon home-icon">
            🏠
          </button>
          <button className="nav-icon search-icon">
            🔍
          </button>
          <button className="nav-icon profile-icon">
            👤
          </button>
          <button className="nav-icon menu-icon">
            ☰
          </button>
        </div>
      </nav>

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Select Your Tournament - Get Exclusive Content! ⭐
      </div>

      <div className="selector-content">
        <div className="selector-header">
          <h1>Select Your Featured Tournament</h1>
          <p>This tournament will appear on your homepage for quick access</p>
        </div>

        {tournamentCategories.map((category, index) => (
          <div key={index} className="tournament-category">
            <h2 className={`category-title ${category.title.includes("Men's") ? 'mens-header' : category.title.includes("Women's") ? 'womens-header' : 'special-header'}`}>
              {category.title}
            </h2>
            <div className="tournament-grid">
              {category.tournaments.map((tournament, tIndex) => (
                <div 
                  key={tIndex}
                  className="tournament-option"
                  onClick={() => handleTournamentSelect(tournament)}
                  style={{ 
                    borderColor: tournament.color,
                    background: `linear-gradient(135deg, rgba(79, 195, 247, 0.1) 0%, rgba(41, 182, 246, 0.2) 100%)`
                  }}
                >
                  <div className="tournament-icon" style={{ color: tournament.color }}>
                    {tournament.icon}
                  </div>
                  <div className="tournament-name">{tournament.name}</div>
                  <div className="select-button" style={{ background: tournament.color }}>
                    Select
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎟️ Book Tickets for Featured Tournament - Early Bird Discounts! 🎉
      </div>
    </div>
  );
}

export default TournamentSelector;