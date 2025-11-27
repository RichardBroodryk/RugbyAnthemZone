import React, { useState } from 'react';
import './WomensRugby7s.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

function WomensRugby7s({ 
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
  const [activeTab, setActiveTab] = useState('series');
  const [seriesFilter, setSeriesFilter] = useState('all');
  const [selectedVenue, setSelectedVenue] = useState('The Sevens Stadium');
  
  // Women's Rugby 7s global stadiums
  const sevensStadiums = [
    'The Sevens Stadium',
    'Cape Town Stadium',
    'Allianz Stadium',
    'BC Place',
    'Hong Kong Stadium',
    'Starlight Stadium',
    'Twickenham Stadium'
  ];

  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensRugby7sData = {
    name: "Women's World Rugby Sevens Series",
    year: "2026-2027",
    description: "Fast-paced international women's rugby sevens competition featuring global tournaments",
    logo: "⚡",
    teams: [
      { flag: "🇦🇺", name: "Australia", ranking: 1, points: 128, coreTeam: true, isFavorite: false },
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, points: 122, coreTeam: true, isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, points: 116, coreTeam: true, isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 4, points: 108, coreTeam: true, isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 5, points: 102, coreTeam: true, isFavorite: false },
      { flag: "🇫🇯", name: "Fiji", ranking: 6, points: 94, coreTeam: true, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 7, points: 88, coreTeam: true, isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 8, points: 82, coreTeam: true, isFavorite: false },
      { flag: "🇪🇸", name: "Spain", ranking: 9, points: 76, coreTeam: true, isFavorite: false },
      { flag: "🇧🇷", name: "Brazil", ranking: 10, points: 68, coreTeam: false, isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 11, points: 62, coreTeam: false, isFavorite: false },
      { flag: "🇨🇳", name: "China", ranking: 12, points: 56, coreTeam: false, isFavorite: false },
      { flag: "🇬🇧", name: "Great Britain", ranking: 13, points: 50, coreTeam: false, isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 14, points: 44, coreTeam: false, isFavorite: false },
      { flag: "🇵🇹", name: "Portugal", ranking: 15, points: 38, coreTeam: false, isFavorite: false },
      { flag: "🇵🇱", name: "Poland", ranking: 16, points: 32, coreTeam: false, isFavorite: false }
    ],
    series: [
      {
        id: 1,
        name: "Dubai Sevens",
        location: "The Sevens Stadium – Dubai",
        stadium: "The Sevens Stadium",
        date: "Nov 27-28, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Canada", "Fiji", "England", "Ireland"]
      },
      {
        id: 2,
        name: "Cape Town Sevens",
        location: "Cape Town Stadium – South Africa",
        stadium: "Cape Town Stadium",
        date: "Dec 4-5, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "South Africa", "Fiji", "England", "Brazil"]
      },
      {
        id: 3,
        name: "Sydney Sevens",
        location: "Allianz Stadium – Sydney",
        stadium: "Allianz Stadium",
        date: "Jan 23-24, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Canada", "Fiji", "Japan", "China"]
      },
      {
        id: 4,
        name: "Vancouver Sevens",
        location: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "Feb 27-28, 2027",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["Australia", "New Zealand", "Canada", "USA", "France", "England", "Ireland", "Spain"]
      },
      {
        id: 5,
        name: "Hong Kong Sevens",
        location: "Hong Kong Stadium",
        stadium: "Hong Kong Stadium",
        date: "Apr 3-5, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Fiji", "Japan", "China", "Hong Kong"]
      },
      {
        id: 6,
        name: "Langford Sevens",
        location: "Starlight Stadium – Canada",
        stadium: "Starlight Stadium",
        date: "Apr 10-11, 2027",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["Australia", "New Zealand", "Canada", "USA", "France", "England", "Brazil", "Spain"]
      },
      {
        id: 7,
        name: "London Sevens",
        location: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "May 22-23, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "England", "USA", "Canada", "Ireland", "Fiji"]
      }
    ],
    standings: [
      { position: 1, team: "Australia", played: 4, won: 4, drawn: 0, lost: 0, pointsFor: 152, pointsAgainst: 45, points: 128, isFavorite: false },
      { position: 2, team: "New Zealand", played: 4, won: 3, drawn: 1, lost: 0, pointsFor: 138, pointsAgainst: 52, points: 122, isFavorite: false },
      { position: 3, team: "France", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 126, pointsAgainst: 68, points: 116, isFavorite: false },
      { position: 4, team: "USA", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 118, pointsAgainst: 75, points: 108, isFavorite: false },
      { position: 5, team: "Canada", played: 4, won: 2, drawn: 1, lost: 1, pointsFor: 112, pointsAgainst: 82, points: 102, isFavorite: false },
      { position: 6, team: "Fiji", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 98, pointsAgainst: 95, points: 94, isFavorite: false },
      { position: 7, team: "England", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 92, pointsAgainst: 102, points: 88, isFavorite: false },
      { position: 8, team: "Ireland", played: 4, won: 1, drawn: 1, lost: 2, pointsFor: 85, pointsAgainst: 108, points: 82, isFavorite: false }
    ],
    fastRugbyRules: [
      { icon: "⏱️", text: "7-minute halves" },
      { icon: "👥", text: "7 players per side" },
      { icon: "⚡", text: "Fast restarts" },
      { icon: "🔄", text: "5 substitutions" },
      { icon: "🎯", text: "Drop-kick conversions" },
      { icon: "🏃‍♀️", text: "Continuous play" }
    ]
  };

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = womensRugby7sData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to series
  const enhancedSeries = womensRugby7sData.series.map(series => ({
    ...series,
    hasFavoriteTeams: series.participatingTeams.some(team => favoriteTeams.includes(team)),
    favoriteTeamsParticipating: series.participatingTeams.filter(team => favoriteTeams.includes(team))
  }));

  // Add favorite status to standings
  const enhancedStandings = womensRugby7sData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter series based on user selection
  const filteredSeries = seriesFilter === 'my-teams' 
    ? enhancedSeries.filter(series => series.hasFavoriteTeams)
    : seriesFilter === 'featured'
    ? enhancedSeries.filter(series => series.featured)
    : enhancedSeries;

  // Get user's Rugby 7s teams
  const userSevensTeams = enhancedTeams.filter(team => team.isFavorite);

  const getTopTeamsForSeries = (series) => {
    const topTeams = series.participatingTeams.slice(0, 3);
    return topTeams.map(teamName => {
      const team = enhancedTeams.find(t => t.name === teamName);
      return team || { flag: "🏉", name: teamName };
    });
  };

  const handleSeriesClick = (series) => {
    onGameSelect?.({
      ...series,
      tournament: "Women's World Rugby Sevens Series",
      userFavorite: series.hasFavoriteTeams
    });
  };

  return (
    <div className="womens-rugby-7s-page">
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
            <span className="tournament-logo">{womensRugby7sData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensRugby7sData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensRugby7sData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensRugby7sData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">16</span>
            <span className="stat-label">Teams</span>
          </div>
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Tournaments</span>
          </div>
          <div className="stat">
            <span className="stat-number">♀</span>
            <span className="stat-label">Women's 7s</span>
          </div>
        </div>

        {hasFavoriteTeams && userSevensTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⚡</div>
            <div className="banner-content">
              <h3>Your Rugby 7s Journey</h3>
              <p>
                Following {userSevensTeams.length} women's 7s team{userSevensTeams.length !== 1 ? 's' : ''}:{' '}
                {userSevensTeams.map(team => team.name).join(', ')}
              </p>
            </div>
          </div>
        )}
      </header>

      <nav className="tournament-tabs">
        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'series' ? 'active' : ''}`}
            onClick={() => setActiveTab('series')}
          >
            🏆 Series
          </button>
          <button 
            className={`tab-btn ${activeTab === 'teams' ? 'active' : ''}`}
            onClick={() => setActiveTab('teams')}
          >
            ⚡ Teams
          </button>
          <button 
            className={`tab-btn ${activeTab === 'standings' ? 'active' : ''}`}
            onClick={() => setActiveTab('standings')}
          >
            📊 Standings
          </button>
          <button 
            className={`tab-btn ${activeTab === 'fastrugby' ? 'active' : ''}`}
            onClick={() => setActiveTab('fastrugby')}
          >
            🎯 Fast Rugby
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
        {activeTab === 'series' && (
          <div className="fixtures-section">
            <h2 className="section-title">World Series 2026-2027</h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${seriesFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSeriesFilter('all')}
              >
                All Series
              </button>
              <button 
                className={`filter-btn ${seriesFilter === 'featured' ? 'active' : ''}`}
                onClick={() => setSeriesFilter('featured')}
              >
                Featured Events
              </button>
              {hasFavoriteTeams && (
                <button 
                  className={`filter-btn ${seriesFilter === 'my-teams' ? 'active' : ''}`}
                  onClick={() => setSeriesFilter('my-teams')}
                >
                  My Teams Only
                </button>
              )}
            </div>

            <div className="series-grid">
              {filteredSeries.map(series => {
                const topTeams = getTopTeamsForSeries(series);
                return (
                  <div 
                    key={series.id} 
                    className={`series-card ${series.featured ? 'featured' : ''} ${series.hasFavoriteTeams ? 'favorite-match' : ''}`}
                    onClick={() => handleSeriesClick(series)}
                  >
                    {series.hasFavoriteTeams && (
                      <div className="match-highlight">
                        ⭐ Features {series.favoriteTeamsParticipating.join(', ')}
                      </div>
                    )}
                    
                    <div className="series-header">
                      <span className="series-name">{series.name}</span>
                      <span className="series-date">{series.date}</span>
                    </div>
                    
                    <div className="series-location">
                      <span>📍</span>
                      <span>{series.location}</span>
                    </div>
                    
                    <div className="series-teams">
                      {topTeams.map((team, index) => (
                        <div key={index} className="team-preview">
                          <span className="team-flag">{team.flag}</span>
                          <span className={`team-name ${team.isFavorite ? 'favorite-team-name' : ''}`}>
                            {team.name}
                            {team.isFavorite && <span className="favorite-indicator"> ♀</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {series.winner && (
                      <div className="match-footer">
                        <span>🏆 Winner: {series.winner.flag} {series.winner.name}</span>
                      </div>
                    )}
                    
                    <div className="series-actions">
                      <button className="action-btn primary" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                        {series.status === 'completed' ? '📺 Highlights' : '🎟️ Tickets'}
                      </button>
                      <button className="action-btn secondary" onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}>
                        🔔 Remind
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Core & Invited Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.coreTeam ? 'core-team' : ''} ${team.isFavorite ? 'favorite-team' : ''}`}>
                  {team.isFavorite && <div className="favorite-badge">♀ YOUR TEAM</div>}
                  
                  <span className="nation-flag">{team.flag}</span>
                  <h3 className="nation-name">{team.name}</h3>
                  <span className="world-ranking">Rank: #{team.ranking}</span>
                  <span className="points">{team.points} pts</span>

                  {team.isFavorite && (
                    <div className="team-highlight">
                      Your 7s team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">World Series Standings</h2>
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
                  <span>{team.pointsFor}</span>
                  <span>{team.pointsAgainst}</span>
                  <span className="points">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'fastrugby' && (
          <div className="fast-rugby-section">
            <h2 className="section-title">Rugby 7s - The Fastest Format</h2>
            <div className="rules-card">
              <div className="rules-header">
                <span className="rules-icon">🎯</span>
                <div className="rules-info">
                  <h3>Rugby 7s Rules & Format</h3>
                  <p>Fast-paced, high-scoring rugby with 7 players per side</p>
                </div>
              </div>
              <div className="rules-grid">
                {womensRugby7sData.fastRugbyRules.map((rule, index) => (
                  <div key={index} className="rule-item">
                    <div className="rule-icon">{rule.icon}</div>
                    <div className="rule-text">{rule.text}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {hasFavoriteTeams && (
              <div className="personalization-banner" style={{marginTop: '2rem'}}>
                <div className="banner-icon">🏃‍♀️</div>
                <div className="banner-content">
                  <h3>Your 7s Experience</h3>
                  <p>
                    Get ready to follow {userSevensTeams.length} of your teams across 7 global tournaments! 
                    {userSevensTeams.some(team => team.coreTeam) ? ' Your core teams will compete in every event.' : ' Your teams will feature in selected tournaments.'}
                  </p>
                </div>
              </div>
            )}
            
            <div className="tournament-description" style={{marginTop: '2rem'}}>
              <strong>Women's Rugby 7s</strong> has become one of the fastest-growing sports globally, 
              featuring in the Olympic Games and showcasing incredible athleticism, speed, and skill. 
              The World Series travels to iconic locations worldwide, bringing fast-paced rugby to passionate fans.
            </div>
          </div>
        )}

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Women's Rugby 7s Global Stadiums</h2>
            <p>Explore the iconic venues around the world that host the fast-paced women's rugby sevens tournaments</p>
            
            <VenueSelector 
              venues={sevensStadiums}
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
              <h3>Rugby 7s Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with 7s festival ticket packages</li>
                <li>🌍 Global stadiums from Dubai to London</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>⚡ Fast-paced 7s tournament layouts</li>
              </ul>
            </div>
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">Women's 7s Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">7s Fantasy</div>
              <div className="feature-description">Build your dream 7s team</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Live Results</div>
              <div className="feature-description">Real-time 7s scores</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">7s Podcasts</div>
              <div className="feature-description">Women's 7s analysis</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore global venues</div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 7s Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Series Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 7s Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ 7s Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">⚡</div>
          <div className="ad-text">
            Experience Women's Rugby 7s Live! The World's Most Exciting Rugby Format.
            Festival atmosphere, fast-paced action, and world-class athletes.
          </div>
          <button className="ad-cta">🎫 Get Tickets</button>
        </div>
      </div>
    </div>
  );
}

export default WomensRugby7s;