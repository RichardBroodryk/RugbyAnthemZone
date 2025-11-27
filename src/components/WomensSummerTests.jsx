import React, { useState } from 'react';
import './WomensSummerTests.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

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
  const [activeTab, setActiveTab] = useState('matches');
  const [matchFilter, setMatchFilter] = useState('all');
  const [selectedVenue, setSelectedVenue] = useState('Eden Park');
  
  const womensSummerStadiums = [
    'Eden Park',
    'Sydney Cricket Ground',
    'BC Place',
    'Suncorp Stadium',
    'Forsyth Barr Stadium',
    'Ellis Park',
    'Dignity Health Sports Park',
    'Chichibunomiya Stadium'
  ];

  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensSummerTestsData = {
    name: "Women's Summer Tests", 
    year: "2026",
    description: "Mid-year women's test matches featuring Southern Hemisphere tours and competitions",
    teams: [
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 5, isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 4, isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 10, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1, isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 6, isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 12, isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 11, isFavorite: false },
      { flag: "🇫🇯", name: "Fiji", ranking: 15, isFavorite: false },
      { flag: "🇪🇸", name: "Spain", ranking: 13, isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        venue: "Eden Park – Auckland",
        stadium: "Eden Park",
        date: "Jul 4, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "48,000",
        isFeatured: true
      },
      {
        id: 2,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        team2: { flag: "🇫🇷", name: "France", ranking: 3 },
        venue: "Sydney Cricket Ground – Sydney",
        stadium: "Sydney Cricket Ground",
        date: "Jul 5, 2026",
        time: "19:45",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "48,000",
        isFeatured: true
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "Jul 5, 2026",
        time: "19:00",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "54,500",
        isFeatured: false
      },
      {
        id: 4,
        team1: { flag: "🇺🇸", name: "USA", ranking: 10 },
        team2: { flag: "🇮🇪", name: "Ireland", ranking: 6 },
        venue: "Dignity Health Sports Park – Los Angeles",
        stadium: "Dignity Health Sports Park",
        date: "Jul 11, 2026",
        time: "17:00",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "30,000",
        isFeatured: false
      },
      {
        id: 5,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 12 },
        team2: { flag: "🇪🇸", name: "Spain", ranking: 13 },
        venue: "Ellis Park – Johannesburg",
        stadium: "Ellis Park",
        date: "Jul 12, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "62,567",
        isFeatured: false
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan", ranking: 11 },
        team2: { flag: "🇫🇯", name: "Fiji", ranking: 15 },
        venue: "Chichibunomiya Stadium – Tokyo",
        stadium: "Chichibunomiya Stadium",
        date: "Jul 12, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "27,188",
        isFeatured: false
      },
      {
        id: 7,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        venue: "Forsyth Barr Stadium – Dunedin",
        stadium: "Forsyth Barr Stadium",
        date: "Jul 18, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "30,748",
        isFeatured: true
      },
      {
        id: 8,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        team2: { flag: "🇫🇷", name: "France", ranking: 3 },
        venue: "Suncorp Stadium – Brisbane",
        stadium: "Suncorp Stadium",
        date: "Jul 19, 2026",
        time: "19:45",
        status: "upcoming",
        tournament: "Women's Summer Tests",
        capacity: "52,500",
        isFeatured: true
      }
    ]
  };

  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  const enhancedTeams = womensSummerTestsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensSummerTestsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

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
    <div className="womens-summer-tests">
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      <header className="tournament-header">
        <h1 className="tournament-title">{womensSummerTestsData.name}</h1>
        <p className="tournament-subtitle">International Women's Rugby Summer Series</p>
        <div className="tournament-year">{womensSummerTestsData.year}</div>
        <div className="womens-feature-badge">♀ Women's Rugby Exclusive</div>
      </header>

      <div className="tournament-description">
        {womensSummerTestsData.description}
      </div>

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

      <nav className="tournament-nav">
        <button 
          className={`tab-btn ${activeTab === 'matches' ? 'active' : ''}`}
          onClick={() => setActiveTab('matches')}
        >
          📅 Summer Tests
        </button>
        <button 
          className={`tab-btn ${activeTab === 'teams' ? 'active' : ''}`}
          onClick={() => setActiveTab('teams')}
        >
          🏆 Teams
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stadiums' ? 'active' : ''}`}
          onClick={() => setActiveTab('stadiums')}
        >
          🏟️ Stadiums
        </button>
      </nav>

      <main className="tournament-main">
        {activeTab === 'matches' && (
          <div className="matches-section">
            <h2 className="section-title">Summer Test Series 2026</h2>
            
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
                  My Teams Only
                </button>
              )}
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFeatured ? 'featured-match' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {match.isFavoriteMatch && (
                    <div className="match-highlight">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  <div className="match-header">
                    <div className="match-teams">
                      <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                        <span className="team-flag-small">{match.team1.flag}</span>
                        <span className="team-name-small">{match.team1.name}</span>
                        <span className="team-ranking">#{match.team1.ranking}</span>
                        {favoriteTeams.includes(match.team1.name) && <span className="favorite-indicator">♀</span>}
                      </div>
                      
                      <div className="vs">VS</div>
                      
                      <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                        {favoriteTeams.includes(match.team2.name) && <span className="favorite-indicator">♀</span>}
                        <span className="team-ranking">#{match.team2.ranking}</span>
                        <span className="team-name-small">{match.team2.name}</span>
                        <span className="team-flag-small">{match.team2.flag}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="match-details">
                    <span className="match-venue">🏟️ {match.venue}</span>
                    <span className="match-date">{match.date}</span>
                    <span className="match-time">{match.time}</span>
                  </div>
                  
                  <div className="match-status">{match.status}</div>
                  
                  <div className="match-actions">
                    <button className="action-btn primary" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                      📺 Watch
                    </button>
                    <button className="action-btn secondary" onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}>
                      🔊 Listen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Summer Test Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div 
                  key={index} 
                  className={`team-card ${team.isFavorite ? 'favorite-team' : ''}`}
                >
                  {team.isFavorite && <div className="favorite-badge">♀ YOUR TEAM</div>}
                  
                  <span className="team-flag">{team.flag}</span>
                  <div className="team-name">{team.name}</div>
                  <div className="world-ranking">Rank: #{team.ranking}</div>

                  {team.isFavorite && (
                    <div className="team-highlight">
                      Your summer rugby team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Women's Summer Tests Stadiums</h2>
            <p>Explore the iconic venues hosting women's rugby summer tests across the globe</p>
            
            <VenueSelector 
              venues={womensSummerStadiums}
              selectedVenue={selectedVenue}
              onVenueChange={setSelectedVenue}
            />
            
            <StadiumPage 
              stadium={selectedVenue}
              onSeatSelect={handleSeatSelect}
              interactive={true}
              showInfo={true}
            />
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">Summer Rugby Features</h2>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore summer test venues</div>
            </div>
          </div>
        </div>

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
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Summer Stadiums
          </button>
        </div>
      </main>
    </div>
  );
}

export default WomensSummerTests;