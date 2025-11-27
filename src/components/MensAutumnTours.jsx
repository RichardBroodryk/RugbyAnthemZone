import React, { useState } from 'react';
import './MensAutumnTours.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage'; // CHANGED: StadiumMap to StadiumPage
import VenueSelector from './VenueSelector';

function MensAutumnTours({ 
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
  const [selectedVenue, setSelectedVenue] = useState('Twickenham');

  const autumnToursStadiums = [
    'Twickenham',
    'Murrayfield', 
    'Principality Stadium',
    'Aviva Stadium',
    'Stade de France',
    'Stadio Olimpico'
  ];

  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const autumnToursData = {
    name: "Autumn Nations Series",
    year: "2026", 
    description: "The premier November test matches featuring Northern vs Southern Hemisphere rugby giants",
    logo: "🍂",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW' },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW' },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL' },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW' },
      { flag: "🇫🇷", name: "France", ranking: 4, form: 'WLWLW' },
      { flag: "🇮🇹", name: "Italy", ranking: 12, form: 'LLLLW' },
      { flag: "🇿🇦", name: "South Africa", ranking: 1, form: 'WWLWW' },
      { flag: "🇳🇿", name: "New Zealand", ranking: 3, form: 'WWWLW' },
      { flag: "🇦🇺", name: "Australia", ranking: 9, form: 'LLLLL' },
      { flag: "🇦🇷", name: "Argentina", ranking: 7, form: 'WLLWW' },
      { flag: "🇫🇯", name: "Fiji", ranking: 10, form: 'WLWWW' },
      { flag: "🇯🇵", name: "Japan", ranking: 11, form: 'LWWLL' }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham",
        date: "Nov 7, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "82,000"
      },
      {
        id: 2, 
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Murrayfield – Edinburgh",
        stadium: "Murrayfield",
        date: "Nov 8, 2026", 
        time: "14:30",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "67,144"
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Principality Stadium – Cardiff", 
        stadium: "Principality Stadium",
        date: "Nov 9, 2026",
        time: "17:15",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "74,500"
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Nov 14, 2026",
        time: "15:00", 
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "51,700"
      },
      {
        id: 5,
        team1: { flag: "🇫🇷", name: "France", ranking: 4 },
        team2: { flag: "🇫🇯", name: "Fiji", ranking: 10 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Nov 15, 2026",
        time: "21:00",
        status: "upcoming",
        tournament: "Autumn Nations Series", 
        capacity: "81,338"
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        team2: { flag: "🇯🇵", name: "Japan", ranking: 11 },
        venue: "Stadio Olimpico – Rome",
        stadium: "Stadio Olimpico",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "72,698"
      }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 5, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ]
  };

  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  const enhancedTeams = autumnToursData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = autumnToursData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  const userAutumnToursTeams = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Autumn Nations Series',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="autumn-tours-page">
      {/* FIXED: STANDARD WHITE TOP NAVIGATION */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{autumnToursData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{autumnToursData.name}</h1>
              <p className="tournament-year">{autumnToursData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{autumnToursData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">Nov 2026</span>
            <span className="stat-label">Tournament</span>
          </div>
        </div>

        {hasFavoriteTeams && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Autumn Nations Experience</h3>
              <p>
                Following {userAutumnToursTeams.length} team{userAutumnToursTeams.length !== 1 ? 's' : ''}:{' '}
                {userAutumnToursTeams.map(team => team.name).join(', ')}
              </p>
            </div>
          </div>
        )}
      </header>

      {/* FIXED: TAB NAVIGATION - Now properly positioned below the header */}
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
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">Autumn Nations Series 2026 Fixtures</h2>
            
            {hasFavoriteTeams && (
              <div className="match-filters">
                <button 
                  className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('all')}
                >
                  All Matches
                </button>
                <button 
                  className={`filter-btn ${matchFilter === 'my-teams' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('my-teams')}
                >
                  My Teams Only
                </button>
              </div>
            )}

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* FIXED: Visible star icon & featured wording */}
                  {match.isFavoriteMatch && (
                    <div className="match-highlight">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                      {favoriteTeams.includes(match.team1.name) && <span className="favorite-indicator">❤️</span>}
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                      {favoriteTeams.includes(match.team2.name) && <span className="favorite-indicator">❤️</span>}
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

        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}>
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

                  {team.isFavorite && (
                    <div className="team-highlight">
                      Your followed team
                    </div>
                  )}
                  
                  <div className="nation-actions">
                    <button className="team-btn">👀 Follow</button>
                    <button className="team-btn">📊 Stats</button>
                    <button className="team-btn">🏆 History</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
              {autumnToursData.standings.map(team => (
                <div key={team.position} className={`table-row ${favoriteTeams.includes(team.team) ? 'favorite-team' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name">
                    {team.team} 
                    {favoriteTeams.includes(team.team) && <span className="favorite-indicator"> ❤️</span>}
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

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Autumn Nations Stadiums</h2>
            <p>Explore the iconic venues hosting the Autumn Nations Series matches</p>
            
            <VenueSelector 
              venues={autumnToursStadiums}
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
              <h3>Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with ticket purchasing</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🏆 Premium seating areas highlighted</li>
                <li>📍 Facility locations (restrooms, concessions)</li>
              </ul>
            </div>

            <div className="stadium-quick-facts">
              <h3>Autumn Nations Stadiums Quick Facts:</h3>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                  <div className="fact-title">Twickenham</div>
                  <div className="fact-desc">Largest rugby stadium in the world</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade de France</div>
                  <div className="fact-desc">Hosted 1998 FIFA World Cup Final</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
                  <div className="fact-title">Principality Stadium</div>
                  <div className="fact-desc">Retractable roof stadium</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FIXED: Tournament Features Section - NOW WITH PROPER ALIGNMENT */}
        <div className="features-section">
          <h2 className="section-title">Tournament Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">Fantasy League</div>
              <div className="feature-description">Build your dream Autumn Nations team</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Live Results</div>
              <div className="feature-description">Real-time scores and standings</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">Podcasts</div>
              <div className="feature-description">Expert analysis and interviews</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Interactive venue exploration</div>
            </div>
          </div>
        </div>

        {/* FIXED: Quick Actions - NOW WITH PROPER ALIGNMENT */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Autumn Nations Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Autumn Nations Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Explore Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏆</div>
          <div className="ad-text">
            Official Rugby World Cup 2027 Tickets - Early Bird Sale Now On! 
            Don't miss your chance to see rugby history in the making.
          </div>
          <button className="ad-cta">🎟️ Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default MensAutumnTours;