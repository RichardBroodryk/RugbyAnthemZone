import React, { useState } from 'react';
import './WomensAutumnInternationals.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage'; // CHANGED: StadiumMap to StadiumPage
import VenueSelector from './VenueSelector';

function WomensAutumnInternationals({ 
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
  
  // Women's Autumn Internationals stadiums
  const womensStadiums = [
    'Twickenham Stadium',
    'Cardiff Arms Park',
    'Scotstoun Stadium',
    'Aviva Stadium',
    'Stade Jean-Bouin',
    'Stadio Sergio Lanfranchi',
    'Sandy Park',
    'Principality Stadium'
  ];

  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensAutumnInternationalsData = {
    name: "Women's Autumn Internationals",
    year: "2026",
    description: "End-of-year women's test matches featuring cross-hemisphere competitions",
    logo: "🍁",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1, form: 'WWWWW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9, form: 'LWWLW', isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 6, form: 'WWLWW', isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, form: 'WLWLW', isFavorite: false },
      { flag: "🇮🇹", name: "Italy", ranking: 7, form: 'LLLLW', isFavorite: false },
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, form: 'WWWLW', isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 5, form: 'WLLWL', isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 4, form: 'WWLWW', isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 10, form: 'LLWLL', isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 12, form: 'WLWWW', isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 11, form: 'LWWLL', isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Nov 7, 2026",
        time: "17:30",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "82,000",
        isFeatured: true
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        venue: "Cardiff Arms Park – Cardiff",
        stadium: "Cardiff Arms Park",
        date: "Nov 8, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "12,500",
        isFeatured: false
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9 },
        team2: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        venue: "Scotstoun Stadium – Glasgow",
        stadium: "Scotstoun Stadium",
        date: "Nov 8, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "9,708",
        isFeatured: false
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 6 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 10 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Nov 14, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "51,700",
        isFeatured: false
      },
      {
        id: 5,
        team1: { flag: "🇫🇷", name: "France", ranking: 3 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 12 },
        venue: "Stade Jean-Bouin – Paris",
        stadium: "Stade Jean-Bouin",
        date: "Nov 15, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "20,000",
        isFeatured: true
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 7 },
        team2: { flag: "🇯🇵", name: "Japan", ranking: 11 },
        venue: "Stadio Sergio Lanfranchi – Parma",
        stadium: "Stadio Sergio Lanfranchi",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "5,000",
        isFeatured: false
      },
      {
        id: 7,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        venue: "Sandy Park – Exeter",
        stadium: "Sandy Park",
        date: "Nov 21, 2026",
        time: "12:45",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "12,800",
        isFeatured: false
      },
      {
        id: 8,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 10 },
        venue: "Principality Stadium – Cardiff",
        stadium: "Principality Stadium",
        date: "Nov 22, 2026",
        time: "14:30",
        status: "upcoming",
        tournament: "Women's Autumn Internationals",
        capacity: "74,500",
        isFeatured: false
      }
    ],
    standings: [
      { position: 1, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "Canada", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 5, team: "Australia", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 6, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 7, team: "Wales", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 8, team: "Scotland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ]
  };

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = womensAutumnInternationalsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to matches
  const enhancedMatches = womensAutumnInternationalsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Add favorite status to standings
  const enhancedStandings = womensAutumnInternationalsData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'featured'
    ? enhancedMatches.filter(match => match.isFeatured)
    : enhancedMatches;

  // Get user's Women's Autumn Internationals teams
  const userWomensTeams = enhancedTeams.filter(team => team.isFavorite);

  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

  const getFeaturedPlayer = (teamName) => {
    const players = {
      "England": { name: "Marlie Packer", position: "Flanker", fact: "England captain with 90+ caps" },
      "New Zealand": { name: "Ruahei Demant", position: "Fly-half", fact: "World Rugby Player of the Year 2023" },
      "France": { name: "Caroline Drouin", position: "Fly-half", fact: "Creative playmaker and goal-kicker" },
      "Canada": { name: "Sophie de Goede", position: "No. 8", fact: "Captain and leading points scorer" },
      "Australia": { name: "Arabella McKenzie", position: "Fly-half", fact: "Rising star playmaker" },
      "Wales": { name: "Jasmine Joyce", position: "Wing", fact: "Olympic sevens star and try-scorer" },
      "Scotland": { name: "Helen Nelson", position: "Centre", fact: "Versatile back and goal-kicker" },
      "Ireland": { name: "Sam Monaghan", position: "Lock", fact: "Physical presence in second row" },
      "USA": { name: "Kate Zackary", position: "Back-row", fact: "Experienced captain and leader" },
      "South Africa": { name: "Babalwa Latsha", position: "Prop", fact: "Trailblazing professional player" },
      "Japan": { name: "Ayasa Otsuka", position: "Fly-half", fact: "Creative playmaker" },
      "Italy": { name: "Beatrice Rigoni", position: "Centre", fact: "Key playmaker in midfield" }
    };
    return players[teamName];
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: "Women's Autumn Internationals",
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="womens-autumn-internationals-page">
      {/* APPLY BRITISH LIONS NAVIGATION STRUCTURE */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      {/* WOMEN'S SPECIFIC HERO HEADER WITH PEACH COLORS */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensAutumnInternationalsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensAutumnInternationalsData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensAutumnInternationalsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensAutumnInternationalsData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">8</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">♀</span>
            <span className="stat-label">Women's Rugby</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER */}
        {hasFavoriteTeams && userWomensTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Women's Rugby Experience</h3>
              <p>
                Following {userWomensTeams.length} women's team{userWomensTeams.length !== 1 ? 's' : ''}:{' '}
                {userWomensTeams.map(team => team.name).join(', ')}
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
            <h2 className="section-title">Autumn Test Series</h2>
            
            {/* MATCH FILTERS */}
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
                  {/* MATCH HIGHLIGHT FOR FAVORITE TEAMS */}
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

        {/* TEAMS TAB CONTENT */}
        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => {
                const featuredPlayer = getFeaturedPlayer(team.name);
                return (
                  <div key={index} className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}>
                    {/* FAVORITE TEAM BADGE */}
                    {team.isFavorite && <div className="favorite-badge">♀ YOUR TEAM</div>}
                    
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

                    {/* TEAM HIGHLIGHT FOR FAVORITE TEAMS */}
                    {team.isFavorite && (
                      <div className="team-highlight">
                        Your women's rugby team
                      </div>
                    )}
                    
                    {featuredPlayer && (
                      <div className="featured-player">
                        <h4>⭐ Star Player</h4>
                        <p><strong>{featuredPlayer.name}</strong> ({featuredPlayer.position})</p>
                        <p>{featuredPlayer.fact}</p>
                      </div>
                    )}
                    
                    <div className="nation-actions">
                      <button className="team-btn">👀 Follow</button>
                      <button className="team-btn">📊 Stats</button>
                      <button className="team-btn">♀ Squad</button>
                    </div>
                  </div>
                );
              })}
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

        {/* STADIUMS TAB CONTENT */}
        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Women's Autumn Internationals Stadiums</h2>
            <p>Explore the venues hosting women's test matches across Europe and beyond</p>
            
            <VenueSelector 
              venues={womensStadiums}
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
              <h3>Women's Rugby Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with women's rugby ticket packages</li>
                <li>♀ Family-friendly women's rugby atmosphere</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🌟 Women's rugby heritage and history</li>
              </ul>
            </div>
          </div>
        )}

        {/* APPLY BRITISH LIONS BOTTOM FEATURE BLOCKS STRUCTURE */}
        <div className="features-section">
          <h2 className="section-title">Women's Rugby Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">Women's Fantasy</div>
              <div className="feature-description">Build your dream women's team</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Live Results</div>
              <div className="feature-description">Real-time women's scores</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">Women's Podcasts</div>
              <div className="feature-description">Women's rugby analysis</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore women's rugby venues</div>
            </div>
          </div>
        </div>

        {/* APPLY BRITISH LIONS QUICK ACTIONS STRUCTURE */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Women's Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Women's Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Women's Stadiums
          </button>
        </div>
      </main>

      {/* APPLY BRITISH LIONS BOTTOM AD BANNER STRUCTURE */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">♀</div>
          <div className="ad-text">
            Support Women's Rugby! Official Women's Autumn Internationals Merchandise Available.
            Wear your colors and champion the women's game.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensAutumnInternationals;