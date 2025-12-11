import React, { useState } from 'react';
import './WomensSummerTests.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours template)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'new zealand': 'new-zealand',
      'england': 'england',
      'australia': 'australia',
      'france': 'france',
      'canada': 'canada',
      'wales': 'wales',
      'usa': 'united-states-of-america',
      'ireland': 'ireland',
      'south africa': 'south-africa',
      'spain': 'spain',
      'japan': 'japan',
      'fiji': 'fiji'
    };
    
    return nameMap[countryName.toLowerCase()] || countryName.toLowerCase();
  };

  const fileName = getCountryFileName(country);
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.png`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>
        {country.slice(0, 3).toUpperCase()}
      </div>;
    }
  }
};

function WomensSummerTests({ 
  onNavigateBack, 
  userStatus, 
  userPreferences,
  onGameSelect,
  onNavigateToFantasy,
  onNavigateToResults,
  onNavigateToPodcasts,
  onNavigateToPPV,
  onNavigateToAudio 
}) {
  const [activeTab, setActiveTab] = useState('fixtures');
  const [matchFilter, setMatchFilter] = useState('all');
  
  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensSummerTestsData = {
    name: "Women's Summer Tests",
    year: "2026",
    description: "Mid-year women's test matches featuring Southern Hemisphere tours and competitions",
    logo: "☀️",
    teams: [
      { name: "New Zealand", ranking: 2 },
      { name: "England", ranking: 1 },
      { name: "Australia", ranking: 5 },
      { name: "France", ranking: 3 },
      { name: "Canada", ranking: 4 },
      { name: "Wales", ranking: 8 },
      { name: "USA", ranking: 10 },
      { name: "Ireland", ranking: 6 },
      { name: "South Africa", ranking: 12 },
      { name: "Spain", ranking: 13 },
      { name: "Japan", ranking: 11 },
      { name: "Fiji", ranking: 15 }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "New Zealand", ranking: 2 },
        team2: { name: "England", ranking: 1 },
        venue: "Eden Park – Auckland",
        date: "Jul 4, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "48,000",
        isFeatured: true
      },
      {
        id: 2,
        team1: { name: "Australia", ranking: 5 },
        team2: { name: "France", ranking: 3 },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Jul 5, 2026",
        time: "19:45",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "48,000",
        isFeatured: true
      },
      {
        id: 3,
        team1: { name: "Canada", ranking: 4 },
        team2: { name: "Wales", ranking: 8 },
        venue: "BC Place – Vancouver",
        date: "Jul 5, 2026",
        time: "19:00",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "54,500",
        isFeatured: false
      },
      {
        id: 4,
        team1: { name: "USA", ranking: 10 },
        team2: { name: "Ireland", ranking: 6 },
        venue: "Dignity Health Sports Park – Los Angeles",
        date: "Jul 11, 2026",
        time: "17:00",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "30,000",
        isFeatured: false
      },
      {
        id: 5,
        team1: { name: "South Africa", ranking: 12 },
        team2: { name: "Spain", ranking: 13 },
        venue: "Ellis Park – Johannesburg",
        date: "Jul 12, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "62,567",
        isFeatured: false
      },
      {
        id: 6,
        team1: { name: "Japan", ranking: 11 },
        team2: { name: "Fiji", ranking: 15 },
        venue: "Chichibunomiya Stadium – Tokyo",
        date: "Jul 12, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "27,188",
        isFeatured: false
      },
      {
        id: 7,
        team1: { name: "New Zealand", ranking: 2 },
        team2: { name: "England", ranking: 1 },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Jul 18, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "30,748",
        isFeatured: true
      },
      {
        id: 8,
        team1: { name: "Australia", ranking: 5 },
        team2: { name: "France", ranking: 3 },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 19, 2026",
        time: "19:45",
        status: "upcoming",
        tournament: "Summer Test",
        capacity: "52,500",
        isFeatured: true
      }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensSummerTestsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensSummerTestsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'featured'
    ? enhancedMatches.filter(match => match.isFeatured)
    : enhancedMatches;

  const userSummerTeams = enhancedTeams.filter(team => team.isFavorite);

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: "Women's Summer Tests",
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="womens-summer-tests-page">
      {/* EXACT Autumn/Rival Tours NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
      />

      {/* EXACT Autumn/Rival Tours Top Ad Banner */}
      <div className="top-ad-banner">
        ☀️ Women's Summer Tests 2026 - International Women's Rugby Under the Sun! 🌞
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensSummerTestsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensSummerTestsData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensSummerTestsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensSummerTestsData.description}</p>
        </div>
        <div className="hero-stats">
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">8</span>
            <span className="stat-label">Matches</span>
          </div>
          {/* FIXED: BLACK TEXT AND REMOVED FEMALE ICON */}
          <div className="stat">
            <span className="stat-number">🏉</span> {/* Changed from ♀ to 🏉 */}
            <span className="stat-label">Summer Rugby</span> {/* Changed from "Women's Rugby" to "Summer Rugby" */}
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userSummerTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">☀️</div>
            <div className="banner-content">
              <h3>Your Summer Rugby Experience</h3>
              <p>
                Following {userSummerTeams.length} women's team{userSummerTeams.length !== 1 ? 's' : ''}:{' '}
                {userSummerTeams.map(team => team.name).join(', ')}
              </p>
            </div>
          </div>
        )}
      </header>

      {/* EXACT Autumn/Rival Tours Tab Navigation */}
      <nav className="tournament-tabs">
        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'fixtures' ? 'active' : ''}`}
            onClick={() => setActiveTab('fixtures')}
          >
            📅 Fixtures
          </button>
          <button 
            className={`tab-btn ${activeTab === 'teams' ? 'active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            🏆 Teams
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Women's Summer Tests 2026
            </h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Tests
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'featured' ? 'active' : ''}`}
                onClick={() => setMatchFilter('featured')}
              >
                Featured Tests
              </button>
              {hasFavoriteTeams && (
                <button 
                  className={`filter-btn ${matchFilter === 'my-teams' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('my-teams')}
                >
                  My Teams
                </button>
              )}
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFeatured ? 'featured-series' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* SUMMER TEST FEATURED INDICATOR */}
                  {match.isFeatured && (
                    <div className="summer-featured">
                      🌟 FEATURED SUMMER TEST
                    </div>
                  )}
                  
                  {/* MATCH HIGHLIGHT FOR FAVORITE TEAMS */}
                  {match.isFavoriteMatch && (
                    <div className="summer-featured">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  {/* STATUS BADGE - POSITIONED ON LEFT (FIXED) */}
                  <div className={`status-badge ${match.status}`}>
                    {match.status.toUpperCase()}
                  </div>
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className="team">
                      <div className="team-flag">
                        <Flag country={match.team1.name} size="medium" />
                      </div>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                      <span className="match-time">{match.time}</span>
                    </div>
                    
                    <div className="team">
                      <div className="team-flag">
                        <Flag country={match.team2.name} size="medium" />
                      </div>
                      <span className="team-name">{match.team2.name}</span>
                      <span className="team-ranking">#{match.team2.ranking}</span>
                    </div>
                  </div>
                  
                  <div className="match-footer">
                    <span className="venue">🏟️ {match.venue}</span>
                    <span className="capacity">👥 {match.capacity}</span>
                  </div>
                  
                  <div className="match-actions">
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                      📺 Watch
                    </button>
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}>
                      🔊 Audio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TEAMS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Summer Test Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'featured-series' : ''}`}>
                  <div className="nation-flag">
                    <Flag country={team.name} size="large" />
                  </div>
                  <h3 className="nation-name">{team.name}</h3>
                  <span className="world-ranking">Rank: #{team.ranking}</span>
                  {team.isFavorite && (
                    <div className="summer-featured" style={{marginTop: '0.5rem'}}>
                      ⭐ Your Team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEATURES GRID - NO BIG TITLE (Lions Tours correction) */}
        <div className="features-grid">
          <div className="feature-card" onClick={onNavigateToFantasy}>
            <div className="feature-icon">🏅</div>
            <div className="feature-title">Summer Fantasy</div>
            <div className="feature-description">Build your dream summer test team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time summer test scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Summer Podcasts</div>
            <div className="feature-description">Women's rugby analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('fixtures')}>
            <div className="feature-icon">☀️</div>
            <div className="feature-title">Summer Tests</div>
            <div className="feature-description">Mid-year international rugby</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Summer Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Test Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Summer Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('fixtures')}>
            ☀️ Summer Tests
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">☀️</div>
          <div className="ad-text">
            Experience Women's Summer Rugby Live! Official Summer Tests Merchandise 2026.
            Celebrate women's rugby under the summer sun.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensSummerTests;