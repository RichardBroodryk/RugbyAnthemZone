import React, { useState } from 'react';
import './WomensWXV.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

function WomensWXV({ 
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
  const [selectedVenue, setSelectedVenue] = useState('Twickenham Stadium');
  
  // WXV Stadiums
  const wxvStadiums = [
    'Twickenham Stadium',
    'Stade Jean-Bouin',
    'BC Place',
    'Cardiff Arms Park',
    'Aviva Stadium',
    'Chichibunomiya Stadium',
    'Ellis Park',
    'Sydney Cricket Ground'
  ];

  // WXV Data
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensWXVData = {
    name: "Women's WXV",
    year: "2026",
    description: "Global women's rugby competition featuring teams from multiple continents across three tiers, promoting international development and competition.",
    logo: "♀",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1, tier: "WXV 1", isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, tier: "WXV 1", isFavorite: false },
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, tier: "WXV 1", isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 6, tier: "WXV 1", isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 4, tier: "WXV 1", isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 5, tier: "WXV 1", isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 7, tier: "WXV 2", isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 11, tier: "WXV 2", isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 8, tier: "WXV 2", isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9, tier: "WXV 2", isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 13, tier: "WXV 3", isFavorite: false },
      { flag: "🇪🇸", name: "Spain", ranking: 12, tier: "WXV 3", isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Oct 10, 2026",
        time: "17:30",
        status: "upcoming",
        tournament: "WXV 1",
        capacity: "82,000",
        tier: "WXV 1",
        isFeatured: true
      },
      {
        id: 2,
        team1: { flag: "🇫🇷", name: "France", ranking: 3 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 6 },
        venue: "Stade Jean-Bouin – Paris",
        stadium: "Stade Jean-Bouin",
        date: "Oct 11, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "WXV 1",
        capacity: "20,000",
        tier: "WXV 1",
        isFeatured: true
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 5 },
        venue: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "Oct 17, 2026",
        time: "19:00",
        status: "upcoming",
        tournament: "WXV 1",
        capacity: "54,500",
        tier: "WXV 1",
        isFeatured: true
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 7 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 11 },
        venue: "Cardiff Arms Park – Cardiff",
        stadium: "Cardiff Arms Park",
        date: "Oct 18, 2026",
        time: "14:30",
        status: "upcoming",
        tournament: "WXV 2",
        capacity: "12,500",
        tier: "WXV 2",
        isFeatured: false
      },
      {
        id: 5,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 8 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Oct 24, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "WXV 2",
        capacity: "51,700",
        tier: "WXV 2",
        isFeatured: false
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan", ranking: 13 },
        team2: { flag: "🇪🇸", name: "Spain", ranking: 12 },
        venue: "Chichibunomiya Stadium – Tokyo",
        stadium: "Chichibunomiya Stadium",
        date: "Oct 25, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "WXV 3",
        capacity: "27,188",
        tier: "WXV 3",
        isFeatured: false
      }
    ],
    standings: [
      { position: 1, team: "England", played: 3, won: 3, drawn: 0, lost: 0, points: 15, tier: "WXV 1", isFavorite: false },
      { position: 2, team: "New Zealand", played: 3, won: 2, drawn: 1, lost: 0, points: 12, tier: "WXV 1", isFavorite: false },
      { position: 3, team: "France", played: 3, won: 2, drawn: 0, lost: 1, points: 10, tier: "WXV 1", isFavorite: false },
      { position: 4, team: "Canada", played: 3, won: 1, drawn: 1, lost: 1, points: 8, tier: "WXV 1", isFavorite: false },
      { position: 5, team: "Australia", played: 3, won: 1, drawn: 0, lost: 2, points: 5, tier: "WXV 1", isFavorite: false },
      { position: 6, team: "USA", played: 3, won: 0, drawn: 0, lost: 3, points: 0, tier: "WXV 1", isFavorite: false }
    ]
  };

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensWXVData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensWXVData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = womensWXVData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  const userWXVTeams = enhancedTeams.filter(team => team.isFavorite);

  const filteredMatches = matchFilter === 'featured' 
    ? enhancedMatches.filter(match => match.isFeatured)
    : matchFilter === 'my-teams'
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'Women\'s WXV',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="womens-wxv-page">
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
            <span className="tournament-logo">{womensWXVData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensWXVData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensWXVData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensWXVData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Tiers</span>
          </div>
          <div className="stat">
            <span className="stat-number">♀</span>
            <span className="stat-label">Global</span>
          </div>
        </div>

        {hasFavoriteTeams && userWXVTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">♀</div>
            <div className="banner-content">
              <h3>Your WXV Global Journey</h3>
              <p>
                Following {userWXVTeams.length} women's team{userWXVTeams.length !== 1 ? 's' : ''}:{' '}
                {userWXVTeams.map(team => team.name).join(', ')}
              </p>
            </div>
          </div>
        )}
      </header>

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
          <button 
            className={`tab-btn ${activeTab === 'tiers' ? 'active' : ''}`}
            onClick={() => setActiveTab('tiers')}
          >
            🌍 Tiers
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">WXV 2026 Fixtures</h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'featured' ? 'active' : ''}`}
                onClick={() => setMatchFilter('featured')}
              >
                Featured Matches
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
                  
                  <div className="tier-indicator">
                    {match.tier}
                  </div>
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                      {favoriteTeams.includes(match.team1.name) && <span className="favorite-indicator">♀</span>}
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                      {favoriteTeams.includes(match.team2.name) && <span className="favorite-indicator">♀</span>}
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
            <h2 className="section-title">WXV 2026 Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div 
                  key={index} 
                  className={`team-card ${team.isFavorite ? 'favorite-team' : ''}`}
                >
                  {team.isFavorite && <div className="favorite-badge">♀ YOUR TEAM</div>}
                  
                  <div className="team-header">
                    <span className="team-flag-large">{team.flag}</span>
                    <div className="team-info">
                      <div className="team-name-large">{team.name}</div>
                      <div className="world-ranking">World Rank: #{team.ranking}</div>
                    </div>
                  </div>
                  
                  <div className="team-tier">{team.tier}</div>

                  {team.isFavorite && (
                    <div className="team-highlight">
                      Your WXV team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">WXV 1 Standings</h2>
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
                    {team.isFavorite && <span className="favorite-indicator"> ♀</span>}
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
            <h2 className="section-title">🏟️ Women's WXV Stadiums</h2>
            <p>Explore the global venues hosting women's WXV matches across three tiers and multiple continents</p>
            
            <VenueSelector 
              venues={wxvStadiums}
              selectedVenue={selectedVenue}
              onVenueChange={setSelectedVenue}
            />
            
            <StadiumPage 
              stadium={selectedVenue}
              onSeatSelect={handleSeatSelect}
              interactive={true}
              showInfo={true}
            />
            
            <div className="stadium-features">
              <h3>WXV Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with WXV ticket packages</li>
                <li>🌍 Global stadiums from London to Tokyo</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>♀ Women's rugby development focus</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'tiers' && (
          <div className="tiers-section">
            <h2 className="section-title">WXV Tier System</h2>
            <div className="wxv-tiers-overview">
              <div className="tiers-grid">
                <div className="tier-card tier-wxv1">
                  <div className="tier-header">
                    <span className="tier-icon">🥇</span>
                    <h4 className="tier-name">WXV 1</h4>
                  </div>
                  <p className="tier-description">
                    Top-tier competition featuring the world's best women's rugby nations competing for the championship.
                  </p>
                </div>
                
                <div className="tier-card tier-wxv2">
                  <div className="tier-header">
                    <span className="tier-icon">🥈</span>
                    <h4 className="tier-name">WXV 2</h4>
                  </div>
                  <p className="tier-description">
                    Developing nations and emerging teams competing for promotion to WXV 1.
                  </p>
                </div>
                
                <div className="tier-card tier-wxv3">
                  <div className="tier-header">
                    <span className="tier-icon">🥉</span>
                    <h4 className="tier-name">WXV 3</h4>
                  </div>
                  <p className="tier-description">
                    Growth-focused tier for developing rugby nations with promotion opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">WXV Tour Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">WXV Fantasy</div>
              <div className="feature-description">Build your dream women's XV</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Tour Results</div>
              <div className="feature-description">Match reports and analysis</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">WXV Podcasts</div>
              <div className="feature-description">Tour diaries and interviews</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore WXV venues</div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 WXV Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tour Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 WXV Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ WXV Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">♀</div>
          <div className="ad-text">
            Women's WXV 2026 - The Future of Women's Rugby!
            Official tour packages, hospitality, and exclusive access across all tiers.
          </div>
          <button className="ad-cta">🎫 Join the Movement</button>
        </div>
      </div>
    </div>
  );
}

export default WomensWXV;