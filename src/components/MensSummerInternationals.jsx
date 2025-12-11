import React, { useState } from 'react';
import './MensSummerInternationals.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'england': 'england',
      'wales': 'wales',
      'scotland': 'scotland',
      'ireland': 'ireland',
      'france': 'france',
      'italy': 'italy',
      'new zealand': 'new-zealand',
      'australia': 'australia',
      'south africa': 'south-africa',
      'argentina': 'argentina',
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

function MensSummerInternationals({ 
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

  const summerInternationalsData = {
    name: "Summer Internationals",
    year: "2026",
    description: "Mid-year test matches featuring Northern Hemisphere tours to Southern Hemisphere nations",
    logo: "☀️",
    teams: [
      { name: "England", ranking: 5, form: 'WWLWW' },
      { name: "Wales", ranking: 8, form: 'LLWLL' },
      { name: "Scotland", ranking: 6, form: 'LWWLW' },
      { name: "Ireland", ranking: 2, form: 'WWWWW' },
      { name: "France", ranking: 4, form: 'WLWLW' },
      { name: "Italy", ranking: 12, form: 'LLLLW' },
      { name: "New Zealand", ranking: 3, form: 'WWWLW' },
      { name: "Australia", ranking: 9, form: 'LLLLL' },
      { name: "South Africa", ranking: 1, form: 'WWLWW' },
      { name: "Argentina", ranking: 7, form: 'WLLWW' },
      { name: "Japan", ranking: 11, form: 'LWWLL' },
      { name: "Fiji", ranking: 10, form: 'WLWWW' }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "England", ranking: 5 },
        venue: "Eden Park – Auckland",
        date: "Jul 4, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "England Summer Tour",
        capacity: "50,000",
        isTourSeries: true,
        tourName: "England Tour"
      },
      {
        id: 2,
        team1: { name: "Australia", ranking: 9 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Jul 5, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Wales Summer Tour",
        capacity: "48,000",
        isTourSeries: true,
        tourName: "Wales Tour"
      },
      {
        id: 3,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Scotland", ranking: 6 },
        venue: "Loftus Versfeld – Pretoria",
        date: "Jul 5, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Scotland Summer Tour",
        capacity: "51,762",
        isTourSeries: true,
        tourName: "Scotland Tour"
      },
      {
        id: 4,
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "France", ranking: 4 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Jul 11, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "France Summer Tour",
        capacity: "49,540",
        isTourSeries: true,
        tourName: "France Tour"
      },
      {
        id: 5,
        team1: { name: "Japan", ranking: 11 },
        team2: { name: "Ireland", ranking: 2 },
        venue: "National Stadium – Tokyo",
        date: "Jul 12, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "Ireland Summer Tour",
        capacity: "68,000",
        isTourSeries: true,
        tourName: "Ireland Tour"
      },
      {
        id: 6,
        team1: { name: "Fiji", ranking: 10 },
        team2: { name: "Italy", ranking: 12 },
        venue: "ANZ National Stadium – Suva",
        date: "Jul 12, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Summer Internationals",
        capacity: "15,000",
        isTourSeries: false,
        tourName: null
      },
      {
        id: 7,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "England", ranking: 5 },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Jul 18, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "England Summer Tour - 2nd Test",
        capacity: "30,748",
        isTourSeries: true,
        tourName: "England Tour"
      },
      {
        id: 8,
        team1: { name: "Australia", ranking: 9 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 19, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Wales Summer Tour - 2nd Test",
        capacity: "52,500",
        isTourSeries: true,
        tourName: "Wales Tour"
      },
      {
        id: 9,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Scotland", ranking: 6 },
        venue: "Ellis Park – Johannesburg",
        date: "Jul 19, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Scotland Summer Tour - 2nd Test",
        capacity: "62,567",
        isTourSeries: true,
        tourName: "Scotland Tour"
      },
      {
        id: 10,
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "France", ranking: 4 },
        venue: "Estadio Mario Alberto Kempes – Córdoba",
        date: "Jul 18, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "France Summer Tour - 2nd Test",
        capacity: "57,000",
        isTourSeries: true,
        tourName: "France Tour"
      }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 5, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 6, team: "Australia", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 7, team: "Argentina", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 8, team: "Scotland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 9, team: "Wales", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 10, team: "Japan", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 11, team: "Fiji", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 12, team: "Italy", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = summerInternationalsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = summerInternationalsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name)
  }));

  const enhancedStandings = summerInternationalsData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'tour-series'
    ? enhancedMatches.filter(match => match.isTourSeries)
    : enhancedMatches;

  const userSummerTeams = enhancedTeams.filter(team => team.isFavorite);

  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'Summer Internationals'
    });
  };

  return (
    <div className="mens-summer-internationals-page">
      {/* EXACT Autumn/Rival Tours NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
      />

      {/* EXACT Autumn/Rival Tours Top Ad Banner */}
      <div className="top-ad-banner">
        ☀️ Summer Internationals 2026 - Northern Hemisphere Tours South!
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{summerInternationalsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{summerInternationalsData.name}</h1>
              <p className="tournament-year">{summerInternationalsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{summerInternationalsData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">10</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">☀️</span>
            <span className="stat-label">Summer Rugby</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userSummerTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Summer Tours Experience</h3>
              <p>
                Following {userSummerTeams.length} team{userSummerTeams.length !== 1 ? 's' : ''}:{' '}
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
          <button 
            className={`tab-btn ${activeTab === 'standings' ? 'active' : ''}`}
            onClick={() => setActiveTab('standings')}
          >
            📊 Standings
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Summer Internationals 2026
            </h2>
            
            {/* MATCH FILTERS */}
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'tour-series' ? 'active' : ''}`}
                onClick={() => setMatchFilter('tour-series')}
              >
                Tour Series
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
                  className={`match-card ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* STATUS BADGE - Autumn/Rival Tours positioning */}
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
                  
                  {match.isTourSeries && (
                    <div className="tour-series-highlight">
                      🌏 {match.tourName}
                    </div>
                  )}
                  
                  <div className="match-actions">
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                      📺 Watch
                    </button>
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}>
                      🔊 Listen
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
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'featured-series' : ''}`}>
                  <div className="nation-flag">
                    <Flag country={team.name} size="large" />
                  </div>
                  <h3 className="nation-name">{team.name}</h3>
                  <span className="world-ranking">Rank: #{team.ranking}</span>
                  <div className="form-indicator">
                    {formatForm(team.form)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">Tournament Standings</h2>
            <div className="standings-table">
              <div className="table-header">
                <span>Pos</span>
                <span>Team</span>
                <span>P</span>
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>Pts</span>
              </div>
              {enhancedStandings.map(team => (
                <div key={team.position} className={`table-row ${team.isFavorite ? 'featured-series' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name-cell">
                    <Flag country={team.team} size="small" />
                    <div className="team-name-wrapper">
                      <span className="team-name-text">{team.team}</span>
                      {team.isFavorite && <span className="favorite-star">⭐</span>}
                    </div>
                  </span>
                  <span>{team.played}</span>
                  <span>{team.won}</span>
                  <span>{team.drawn}</span>
                  <span>{team.lost}</span>
                  <span className="points">{team.points}</span>
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
            <div className="feature-description">Build your dream tour team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Tour Results</div>
            <div className="feature-description">Live summer test scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Tour Podcasts</div>
            <div className="feature-description">Summer tour analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => window.open('https://www.world.rugby/travel', '_blank')}>
            <div className="feature-icon">✈️</div>
            <div className="feature-title">Travel Packages</div>
            <div className="feature-description">Book summer tours</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Summer Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tour Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Tour Podcasts
          </button>
          <button className="quick-btn" onClick={() => window.open('https://www.world.rugby/travel', '_blank')}>
            ✈️ Travel Packages
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">✈️</div>
          <div className="ad-text">
            Summer Rugby Tours 2026 - Official Travel Packages Available!
            Follow your team Down Under with our exclusive tour packages to New Zealand, Australia, and South Africa.
          </div>
          <button className="ad-cta" onClick={() => window.open('https://www.world.rugby/travel', '_blank')}>
            🌏 Book Tour
          </button>
        </div>
      </div>
    </div>
  );
}

export default MensSummerInternationals;