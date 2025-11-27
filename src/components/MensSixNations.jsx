import React, { useState } from 'react';
import './MensSixNations.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage'; // CHANGED: StadiumMap to StadiumPage
import VenueSelector from './VenueSelector';

function MensSixNations({ 
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

  // Six Nations iconic stadiums
  const sixNationsStadiums = [
    'Twickenham',
    'Murrayfield', 
    'Principality Stadium',
    'Aviva Stadium',
    'Stade de France',
    'Stadio Olimpico'
  ];

  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const sixNationsData = {
    name: "Six Nations Championship",
    year: "2026",
    description: "Europe's premier rugby union competition featuring six nations in annual battle for championship glory",
    logo: "🏆",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW', grandSlam: true },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW', grandSlam: false },
      { flag: "🇫🇷", name: "France", ranking: 4, form: 'WLWLW', grandSlam: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW', grandSlam: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', grandSlam: false },
      { flag: "🇮🇹", name: "Italy", ranking: 12, form: 'LLLLW', grandSlam: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇷", name: "France", ranking: 4 },
        team2: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Feb 1, 2026",
        time: "21:00",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "81,338",
        isCalcuttaCup: false
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Principality Stadium – Cardiff",
        stadium: "Principality Stadium",
        date: "Feb 1, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "74,500",
        isCalcuttaCup: false
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        team2: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham",
        date: "Feb 2, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "82,000",
        isCalcuttaCup: false
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Murrayfield – Edinburgh",
        stadium: "Murrayfield",
        date: "Feb 8, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 2 - CALCUTTA CUP",
        capacity: "67,144",
        isCalcuttaCup: true
      },
      {
        id: 5,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Feb 8, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 2",
        capacity: "51,700",
        isCalcuttaCup: false
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        team2: { flag: "🇫🇷", name: "France", ranking: 4 },
        venue: "Stadio Olimpico – Rome",
        stadium: "Stadio Olimpico",
        date: "Feb 9, 2026",
        time: "16:00",
        status: "upcoming",
        tournament: "Six Nations Round 2",
        capacity: "72,698",
        isCalcuttaCup: false
      },
      {
        id: 7,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Feb 22, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "51,700",
        isCalcuttaCup: false
      },
      {
        id: 8,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🇫🇷", name: "France", ranking: 4 },
        venue: "Principality Stadium – Cardiff",
        stadium: "Principality Stadium",
        date: "Feb 22, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "74,500",
        isCalcuttaCup: false
      },
      {
        id: 9,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Stadio Olimpico – Rome",
        stadium: "Stadio Olimpico",
        date: "Feb 23, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "72,698",
        isCalcuttaCup: false
      }
    ],
    standings: [
      { position: 1, team: "Ireland", played: 5, won: 4, drawn: 0, lost: 1, points: 20, pointsFor: 158, pointsAgainst: 87 },
      { position: 2, team: "France", played: 5, won: 4, drawn: 0, lost: 1, points: 18, pointsFor: 142, pointsAgainst: 105 },
      { position: 3, team: "England", played: 5, won: 3, drawn: 0, lost: 2, points: 14, pointsFor: 120, pointsAgainst: 115 },
      { position: 4, team: "Scotland", played: 5, won: 2, drawn: 0, lost: 3, points: 12, pointsFor: 98, pointsAgainst: 125 },
      { position: 5, team: "Wales", played: 5, won: 1, drawn: 0, lost: 4, points: 6, pointsFor: 85, pointsAgainst: 148 },
      { position: 6, team: "Italy", played: 5, won: 1, drawn: 0, lost: 4, points: 4, pointsFor: 78, pointsAgainst: 151 }
    ],
    trophies: [
      {
        name: "Championship Trophy",
        icon: "🏆",
        description: "Awarded to the overall winner of the Six Nations",
        currentHolder: "Ireland"
      },
      {
        name: "Calcutta Cup",
        icon: "🥛",
        description: "Contested between England and Scotland",
        currentHolder: "Scotland"
      },
      {
        name: "Millennium Trophy",
        icon: "🍀",
        description: "Contested between England and Ireland", 
        currentHolder: "Ireland"
      },
      {
        name: "Giuseppe Garibaldi Trophy",
        icon: "🇮🇹",
        description: "Contested between France and Italy",
        currentHolder: "France"
      }
    ]
  };

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = sixNationsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to matches
  const enhancedMatches = sixNationsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  // Get user's Six Nations teams
  const userSixNationsTeams = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Six Nations',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="mens-six-nations-page">
      {/* APPLY BRITISH LIONS NAVIGATION STRUCTURE */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      {/* SIX NATIONS HERO HEADER */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{sixNationsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{sixNationsData.name}</h1>
              <p className="tournament-year">{sixNationsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{sixNationsData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">Feb-Mar</span>
            <span className="stat-label">Tournament</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER */}
        {hasFavoriteTeams && userSixNationsTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Six Nations Experience</h3>
              <p>
                Following {userSixNationsTeams.length} team{userSixNationsTeams.length !== 1 ? 's' : ''}:{' '}
                {userSixNationsTeams.map(team => team.name).join(', ')}
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
            className={`tab-btn ${activeTab === 'trophies' ? 'active' : ''}`}
            onClick={() => setActiveTab('trophies')}
          >
            🏅 Trophies
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
            <h2 className="section-title">Six Nations 2026 Fixtures</h2>
            
            {/* MATCH FILTERS */}
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
                  className={`match-card ${match.isCalcuttaCup ? 'calcutta-cup' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* CALCUTTA CUP INDICATOR */}
                  {match.isCalcuttaCup && (
                    <div className="calcutta-cup-indicator">
                      🏆 CALCUTTA CUP
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
            <h2 className="section-title">Six Nations Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.grandSlam ? 'grand-slam' : ''} ${team.isFavorite ? 'favorite-team' : ''}`}>
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
                    <button className="team-btn">🏆 History</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB CONTENT */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">Championship Table</h2>
            <div className="standings-table">
              <div className="table-header">
                <span>Pos</span>
                <span>Team</span>
                <span>P</span>
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>PF</span>
                <span>PA</span>
                <span>Pts</span>
              </div>
              {sixNationsData.standings.map(team => (
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
                  <span>{team.pointsFor}</span>
                  <span>{team.pointsAgainst}</span>
                  <span className="points">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TROPHIES TAB CONTENT */}
        {activeTab === 'trophies' && (
          <div className="trophies-section">
            <h2 className="section-title">Six Nations Trophies</h2>
            {sixNationsData.trophies.map((trophy, index) => (
              <div key={index} className="trophy-card">
                <div className="trophy-header">
                  <span className="trophy-icon">{trophy.icon}</span>
                  <div className="trophy-info">
                    <h3>{trophy.name}</h3>
                    <p>{trophy.description}</p>
                  </div>
                </div>
                <div className="trophy-winner">
                  <span>Current Holder: </span>
                  <strong>{trophy.currentHolder}</strong>
                  {favoriteTeams.includes(trophy.currentHolder) && (
                    <span className="favorite-indicator"> ❤️ Your Team!</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STADIUMS TAB CONTENT */}
        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Six Nations Stadiums</h2>
            <p>Explore the iconic venues that host Europe's premier rugby championship across six nations</p>
            
            <VenueSelector 
              venues={sixNationsStadiums}
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
              <h3>Six Nations Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with Six Nations ticket packages</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🏆 Trophy presentation areas highlighted</li>
                <li>🇪🇺 European travel information</li>
              </ul>
            </div>

            {/* Stadium Quick Facts */}
            <div className="stadium-quick-facts">
              <h3>Six Nations Stadiums Quick Facts:</h3>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                  <div className="fact-title">Twickenham</div>
                  <div className="fact-desc">Largest rugby stadium in the world - 82,000 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade de France</div>
                  <div className="fact-desc">National stadium of France - 81,338 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
                  <div className="fact-title">Principality Stadium</div>
                  <div className="fact-desc">Retractable roof stadium in Cardiff</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇮🇪</div>
                  <div className="fact-title">Aviva Stadium</div>
                  <div className="fact-desc">Modern stadium in Dublin - 51,700 capacity</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPLY BRITISH LIONS BOTTOM FEATURE BLOCKS STRUCTURE */}
        <div className="features-section">
          <h2 className="section-title">Tournament Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">Six Nations Fantasy</div>
              <div className="feature-description">Build your dream championship team</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Tournament Results</div>
              <div className="feature-description">Match reports and analysis</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">Six Nations Podcasts</div>
              <div className="feature-description">Expert analysis and interviews</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Championship Stadiums</div>
              <div className="feature-description">Explore iconic European venues</div>
            </div>
          </div>
        </div>

        {/* APPLY BRITISH LIONS QUICK ACTIONS STRUCTURE */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Six Nations Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Six Nations Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Championship Stadiums
          </button>
        </div>
      </main>

      {/* APPLY BRITISH LIONS BOTTOM AD BANNER STRUCTURE */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🎟️</div>
          <div className="ad-text">
            Six Nations 2026 Hospitality Packages - Experience Rugby's Greatest Championship in Style!
            Official corporate hospitality now available.
          </div>
          <button className="ad-cta">🏰 Book Hospitality</button>
        </div>
      </div>
    </div>
  );
}

export default MensSixNations;