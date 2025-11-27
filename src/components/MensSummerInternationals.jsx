import React, { useState } from 'react';
import './MensSummerInternationals.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage'; // CHANGED: StadiumMap to StadiumPage
import VenueSelector from './VenueSelector';

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
  const [selectedVenue, setSelectedVenue] = useState('Eden Park');

  // Summer Internationals iconic stadiums
  const summerStadiums = [
    'Eden Park',
    'Sydney Cricket Ground',
    'Loftus Versfeld',
    'Estadio José Amalfitani',
    'National Stadium Tokyo',
    'ANZ National Stadium',
    'Forsyth Barr Stadium',
    'Suncorp Stadium'
  ];

  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const summerInternationalsData = {
    name: "Summer Internationals",
    year: "2026",
    description: "Mid-year test matches featuring Northern Hemisphere tours to Southern Hemisphere nations",
    logo: "☀️",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW', isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW', isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 4, form: 'WLWLW', isFavorite: false },
      { flag: "🇮🇹", name: "Italy", ranking: 12, form: 'LLLLW', isFavorite: false },
      { flag: "🇳🇿", name: "New Zealand", ranking: 3, form: 'WWWLW', isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 9, form: 'LLLLL', isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 1, form: 'WWLWW', isFavorite: false },
      { flag: "🇦🇷", name: "Argentina", ranking: 7, form: 'WLLWW', isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 11, form: 'LWWLL', isFavorite: false },
      { flag: "🇫🇯", name: "Fiji", ranking: 10, form: 'WLWWW', isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Eden Park – Auckland",
        stadium: "Eden Park",
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
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Sydney Cricket Ground – Sydney",
        stadium: "Sydney Cricket Ground",
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
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Loftus Versfeld – Pretoria",
        stadium: "Loftus Versfeld",
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
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🇫🇷", name: "France", ranking: 4 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        stadium: "Estadio José Amalfitani",
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
        team1: { flag: "🇯🇵", name: "Japan", ranking: 11 },
        team2: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        venue: "National Stadium – Tokyo",
        stadium: "National Stadium Tokyo",
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
        team1: { flag: "🇫🇯", name: "Fiji", ranking: 10 },
        team2: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        venue: "ANZ National Stadium – Suva",
        stadium: "ANZ National Stadium",
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
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Forsyth Barr Stadium – Dunedin",
        stadium: "Forsyth Barr Stadium",
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
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Suncorp Stadium – Brisbane",
        stadium: "Suncorp Stadium",
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
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Ellis Park – Johannesburg",
        stadium: "Ellis Park",
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
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🇫🇷", name: "France", ranking: 4 },
        venue: "Estadio Mario Alberto Kempes – Córdoba",
        stadium: "Estadio Mario Alberto Kempes",
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

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = summerInternationalsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to matches
  const enhancedMatches = summerInternationalsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Add favorite status to standings
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

  // Get user's Summer Internationals teams
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
      tournament: 'Summer Internationals',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="mens-summer-internationals-page">
      {/* APPLY BRITISH LIONS NAVIGATION STRUCTURE */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      {/* SUMMER TOURS HERO HEADER */}
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
            <span className="stat-number">Jul 2026</span>
            <span className="stat-label">Tournament</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER */}
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

      {/* APPLY BRITISH LIONS TAB NAVIGATION STRUCTURE */}
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
          <button 
            className={`tab-btn ${activeTab === 'stadiums' ? 'active' : ''}`}
            onClick={() => setActiveTab('stadiums')}
          >
            🏟️ Stadiums
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB CONTENT */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">Summer Test Series 2026</h2>
            
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
                  className={`match-card ${match.isTourSeries ? 'tour-series' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* TOUR SERIES INDICATOR */}
                  {match.isTourSeries && (
                    <div className="tour-series-indicator">
                      🌏 {match.tourName}
                    </div>
                  )}
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className="team">
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className="team">
                      <span className="team-ranking">#{match.team2.ranking}</span>
                      <span className="team-name">{match.team2.name}</span>
                      <span className="team-flag">{match.team2.flag}</span>
                    </div>
                  </div>
                  
                  <div className="match-footer">
                    <span className="venue">🏟️ {match.venue}</span>
                    <span className="capacity">👥 {match.capacity}</span>
                  </div>
                  
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

        {/* TEAMS TAB CONTENT */}
        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}>
                  {/* FAVORITE TEAM BADGE */}
                  {team.isFavorite && <div className="favorite-badge">❤️ YOUR TEAM</div>}
                  
                  <div className="nation-header">
                    <span className="nation-flag">{team.flag}</span>
                    <div className="nation-info">
                      <h3 className="nation-name">{team.name}</h3>
                      <span className="world-ranking">World Ranking: #{team.ranking}</span>
                    </div>
                  </div>
                  
                  <div className="nation-form">
                    <span className="form-label">Recent Form:</span>
                    <div className="form-indicator">
                      {formatForm(team.form)}
                    </div>
                  </div>
                  
                  <div className="nation-actions">
                    <button className="team-btn">👀 Follow</button>
                    <button className="team-btn">📊 Stats</button>
                    <button className="team-btn">🌏 Tour Info</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB CONTENT */}
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
                <div key={team.position} className={`table-row ${team.isFavorite ? 'favorite-team' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name">
                    {team.team} 
                    {team.isFavorite && <span className="favorite-indicator"> ❤️</span>}
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

        {/* STADIUMS TAB CONTENT */}
        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Summer Tours Stadiums</h2>
            <p>Explore the iconic venues across the Southern Hemisphere that host summer test matches</p>
            
            <VenueSelector 
              venues={summerStadiums}
              selectedVenue={selectedVenue}
              onVenueChange={setSelectedVenue}
            />
            
            {/* CHANGED: StadiumMap to StadiumPage */}
            <StadiumPage 
              stadium={selectedVenue}
              onSeatSelect={handleSeatSelect}
              interactive={true}
              showInfo={true}
            />
            
            <div className="stadium-features">
              <h3>Summer Tours Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with summer tour ticket packages</li>
                <li>🌏 Global stadiums from New Zealand to Argentina</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>✈️ International travel information</li>
              </ul>
            </div>

            {/* Stadium Quick Facts */}
            <div className="stadium-quick-facts">
              <h3>Summer Tours Stadiums Quick Facts:</h3>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🇳🇿</div>
                  <div className="fact-title">Eden Park</div>
                  <div className="fact-desc">New Zealand's largest stadium - 50,000 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇦🇺</div>
                  <div className="fact-title">Sydney Cricket Ground</div>
                  <div className="fact-desc">Historic Australian venue - 48,000 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇿🇦</div>
                  <div className="fact-title">Loftus Versfeld</div>
                  <div className="fact-desc">Pretoria's iconic stadium - 51,762 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇦🇷</div>
                  <div className="fact-title">Estadio José Amalfitani</div>
                  <div className="fact-desc">Buenos Aires rugby venue - 49,540 capacity</div>
                </div>
              </div>
            </div>

            {/* Summer Tours Atmosphere */}
            <div className="summer-tours-atmosphere">
              <h3>🌞 Summer Tours Championship Atmosphere</h3>
              <div className="atmosphere-features">
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇳🇿</div>
                  <div className="feature-details">
                    <h4>Eden Park - New Zealand</h4>
                    <p>Iconic Auckland stadium with passionate All Blacks support and traditional haka performances</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇦🇺</div>
                  <div className="feature-details">
                    <h4>SCG - Australia</h4>
                    <p>Historic Sydney venue with passionate Wallabies support and traditional Australian rugby atmosphere</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇿🇦</div>
                  <div className="feature-details">
                    <h4>Loftus Versfeld - South Africa</h4>
                    <p>Electric Pretoria atmosphere with passionate Springboks support and traditional African songs</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇦🇷</div>
                  <div className="feature-details">
                    <h4>Estadio Amalfitani - Argentina</h4>
                    <p>Lively Buenos Aires atmosphere with passionate Pumas support and Latin American flair</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Information */}
            <div className="travel-info">
              <h3>✈️ Summer Tours Travel Guide</h3>
              <div className="travel-tips">
                <div className="travel-tip">
                  <strong>Auckland (Eden Park):</strong> Excellent transport links via train and bus services
                </div>
                <div className="travel-tip">
                  <strong>Sydney (SCG):</strong> Light rail and train services to Moore Park station
                </div>
                <div className="travel-tip">
                  <strong>Pretoria (Loftus Versfeld):</strong> Gautrain service to Hatfield station
                </div>
                <div className="travel-tip">
                  <strong>Buenos Aires (Estadio Amalfitani):</strong> Subte Line D to Plaza Italia station
                </div>
                <div className="travel-tip">
                  <strong>Tokyo (National Stadium):</strong> Multiple train lines to Shinjuku station
                </div>
                <div className="travel-tip">
                  <strong>Suva (ANZ Stadium):</strong> Local bus services and taxi access
                </div>
              </div>
            </div>

            {/* Historical Facts */}
            <div className="historical-facts">
              <h3>📜 Summer Tours Historical Facts</h3>
              <div className="facts-timeline">
                <div className="fact-item">
                  <div className="fact-year">1904</div>
                  <div className="fact-details">
                    <strong>First British & Irish Lions Tour:</strong> First official tour to Australia and New Zealand
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">1971</div>
                  <div className="fact-details">
                    <strong>Legendary Lions Tour:</strong> Only Lions team to win a series in New Zealand
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">1995</div>
                  <div className="fact-details">
                    <strong>Professional Era:</strong> Summer tours became annual professional events
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">2021</div>
                  <div className="fact-details">
                    <strong>Global Expansion:</strong> Tours expanded to include Japan, Argentina, and Pacific Islands
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPLY BRITISH LIONS BOTTOM FEATURE BLOCKS STRUCTURE */}
        <div className="features-section">
          <h2 className="section-title">Summer Tours Features</h2>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Global Stadiums</div>
              <div className="feature-description">Explore worldwide venues</div>
            </div>
          </div>
        </div>

        {/* APPLY BRITISH LIONS QUICK ACTIONS STRUCTURE */}
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
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Global Stadiums
          </button>
        </div>
      </main>

      {/* APPLY BRITISH LIONS BOTTOM AD BANNER STRUCTURE */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">✈️</div>
          <div className="ad-text">
            Summer Rugby Tours 2026 - Official Travel Packages Available!
            Follow your team Down Under with our exclusive tour packages to New Zealand, Australia, and South Africa.
          </div>
          <button className="ad-cta">🌏 Book Tour</button>
        </div>
      </div>
    </div>
  );
}

export default MensSummerInternationals;