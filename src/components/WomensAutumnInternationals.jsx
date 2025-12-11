import React, { useState } from 'react';
import './WomensAutumnInternationals.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'argentina': 'argentina',
      'australia': 'australia',
      'england': 'england',
      'fiji': 'fiji',
      'france': 'france',
      'ireland': 'ireland',
      'italy': 'italy',
      'japan': 'japan',
      'new zealand': 'new-zealand',
      'scotland': 'scotland',
      'south africa': 'south-africa',
      'wales': 'wales',
      'usa': 'united-states-of-america',
      'canada': 'canada',
      'samoa': 'samoa',
      'spain': 'spain'
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
  
  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensAutumnInternationalsData = {
    name: "Women's Autumn Internationals",
    year: "2026",
    description: "End-of-year women's test matches featuring cross-hemisphere competitions",
    logo: "🍁",
    teams: [
      { name: "England", ranking: 1, coreTeam: true },
      { name: "Wales", ranking: 8, coreTeam: true },
      { name: "Scotland", ranking: 9, coreTeam: true },
      { name: "Ireland", ranking: 6, coreTeam: true },
      { name: "France", ranking: 3, coreTeam: true },
      { name: "Italy", ranking: 7, coreTeam: true },
      { name: "New Zealand", ranking: 2, coreTeam: true },
      { name: "Australia", ranking: 5, coreTeam: true },
      { name: "Canada", ranking: 4, coreTeam: true },
      { name: "USA", ranking: 10, coreTeam: true },
      { name: "South Africa", ranking: 12, coreTeam: false },
      { name: "Japan", ranking: 11, coreTeam: false }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "England", ranking: 1 },
        team2: { name: "New Zealand", ranking: 2 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Nov 7, 2026",
        time: "17:30",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "82,000",
        isFeatured: true
      },
      {
        id: 2,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "Australia", ranking: 5 },
        venue: "Cardiff Arms Park – Cardiff",
        stadium: "Cardiff Arms Park",
        date: "Nov 8, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "12,500",
        isFeatured: false
      },
      {
        id: 3,
        team1: { name: "Scotland", ranking: 9 },
        team2: { name: "Canada", ranking: 4 },
        venue: "Scotstoun Stadium – Glasgow",
        stadium: "Scotstoun Stadium",
        date: "Nov 8, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "9,708",
        isFeatured: false
      },
      {
        id: 4,
        team1: { name: "Ireland", ranking: 6 },
        team2: { name: "USA", ranking: 10 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Nov 14, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "51,700",
        isFeatured: false
      },
      {
        id: 5,
        team1: { name: "France", ranking: 3 },
        team2: { name: "South Africa", ranking: 12 },
        venue: "Stade Jean-Bouin – Paris",
        stadium: "Stade Jean-Bouin",
        date: "Nov 15, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "20,000",
        isFeatured: true
      },
      {
        id: 6,
        team1: { name: "Italy", ranking: 7 },
        team2: { name: "Japan", ranking: 11 },
        venue: "Stadio Sergio Lanfranchi – Parma",
        stadium: "Stadio Sergio Lanfranchi",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Internationals",
        capacity: "5,000",
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

  // Enhanced data with favorite status
  const enhancedTeams = womensAutumnInternationalsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensAutumnInternationalsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

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

  const userWomensTeams = enhancedTeams.filter(team => team.isFavorite);

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
        ♀ Women's Autumn Internationals 2026 - Elite Women's Rugby Showcase! 🍁
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
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
    <span className="stat-number">🍁</span> {/* CHANGED TO LEAF/TOURNAMENT ICON */}
    <span className="stat-label">Autumn Tests</span> {/* CHANGED TEXT */}
  </div>
</div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userWomensTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Women's Rugby Journey</h3>
              <p>
                Following {userWomensTeams.length} women's team{userWomensTeams.length !== 1 ? 's' : ''}:{' '}
                {userWomensTeams.map(team => team.name).join(', ')}
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
              Women's Autumn Internationals 2026
            </h2>
            
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
                Featured
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
                  className={`match-card ${match.isFeatured ? 'featured-match' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* MATCH HIGHLIGHT FOR FAVORITE TEAMS */}
                  {match.isFavoriteMatch && (
                    <div className="match-highlight">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
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
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => {
                const featuredPlayer = getFeaturedPlayer(team.name);
                return (
                  <div key={index} className={`nation-card ${team.isFavorite ? 'featured-series' : ''}`}>
                    <div className="nation-flag">
                      <Flag country={team.name} size="large" />
                    </div>
                    <h3 className="nation-name">{team.name}</h3>
                    <span className="world-ranking">Rank: #{team.ranking}</span>
                    {team.coreTeam && (
                      <div className="match-highlight" style={{marginTop: '0.5rem'}}>
                        Core Team
                      </div>
                    )}
                    
                    {featuredPlayer && (
                      <div style={{marginTop: '0.5rem', fontSize: '0.8rem', color: '#666'}}>
                        <strong>⭐ {featuredPlayer.name}</strong>
                        <div>{featuredPlayer.position}</div>
                      </div>
                    )}
                  </div>
                );
              })}
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
          
          <div className="feature-card" onClick={() => setActiveTab('fixtures')}>
            <div className="feature-icon">♀</div>
            <div className="feature-title">Women's Rugby</div>
            <div className="feature-description">Elite women's competition</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
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
          <button className="quick-btn" onClick={() => setActiveTab('fixtures')}>
            ♀ Women's Rugby
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
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