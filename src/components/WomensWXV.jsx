import React, { useState } from 'react';
import './WomensWXV.css';
import NavBar from './NavBar';

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

  // WXV Data
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensWXVData = {
    name: "Women's WXV",
    year: "2026",
    description: "Global women's rugby competition featuring teams from multiple continents across three tiers, promoting international development and competition.",
    logo: "🌍",
    teams: [
      { flag: "https://flagcdn.com/w320/gb-eng.png", name: "England", ranking: 1, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/fr.png", name: "France", ranking: 3, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/nz.png", name: "New Zealand", ranking: 2, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/au.png", name: "Australia", ranking: 6, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/ca.png", name: "Canada", ranking: 4, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/us.png", name: "USA", ranking: 5, tier: "WXV 1", isFavorite: false },
      { flag: "https://flagcdn.com/w320/gb-wls.png", name: "Wales", ranking: 7, tier: "WXV 2", isFavorite: false },
      { flag: "https://flagcdn.com/w320/za.png", name: "South Africa", ranking: 11, tier: "WXV 2", isFavorite: false },
      { flag: "https://flagcdn.com/w320/ie.png", name: "Ireland", ranking: 8, tier: "WXV 2", isFavorite: false },
      { flag: "https://flagcdn.com/w320/gb-sct.png", name: "Scotland", ranking: 9, tier: "WXV 2", isFavorite: false },
      { flag: "https://flagcdn.com/w320/jp.png", name: "Japan", ranking: 13, tier: "WXV 3", isFavorite: false },
      { flag: "https://flagcdn.com/w320/es.png", name: "Spain", ranking: 12, tier: "WXV 3", isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "https://flagcdn.com/w320/gb-eng.png", name: "England", ranking: 1 },
        team2: { flag: "https://flagcdn.com/w320/nz.png", name: "New Zealand", ranking: 2 },
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
        team1: { flag: "https://flagcdn.com/w320/fr.png", name: "France", ranking: 3 },
        team2: { flag: "https://flagcdn.com/w320/au.png", name: "Australia", ranking: 6 },
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
        team1: { flag: "https://flagcdn.com/w320/ca.png", name: "Canada", ranking: 4 },
        team2: { flag: "https://flagcdn.com/w320/us.png", name: "USA", ranking: 5 },
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
        team1: { flag: "https://flagcdn.com/w320/gb-wls.png", name: "Wales", ranking: 7 },
        team2: { flag: "https://flagcdn.com/w320/za.png", name: "South Africa", ranking: 11 },
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
        team1: { flag: "https://flagcdn.com/w320/ie.png", name: "Ireland", ranking: 8 },
        team2: { flag: "https://flagcdn.com/w320/gb-sct.png", name: "Scotland", ranking: 9 },
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
        team1: { flag: "https://flagcdn.com/w320/jp.png", name: "Japan", ranking: 13 },
        team2: { flag: "https://flagcdn.com/w320/es.png", name: "Spain", ranking: 12 },
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

  const Flag = ({ src, alt, size = 'small', fallback }) => {
    const [error, setError] = useState(false);
    
    const sizeClass = `flag-${size}`;
    
    return error ? (
      <div className={`${sizeClass} flag-fallback`}>
        {fallback || alt?.slice(0, 2) || 'FL'}
      </div>
    ) : (
      <img 
        src={src} 
        alt={alt || 'Flag'} 
        className={sizeClass}
        onError={() => setError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <div className="womens-wxv-page">
      {/* Top Navigation */}
      <NavBar onNavigateBack={onNavigateBack} />
      
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🌍 Women's WXV 2026 - Global Women's Rugby Competition
      </div>

      {/* Hero Section */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensWXVData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensWXVData.name}
                <span className="womens-rugby-badge">GLOBAL TOUR</span>
              </h1>
              <p className="tournament-year">{womensWXVData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensWXVData.description}</p>
        </div>
        
        {/* FIXED: Hero Stats with BLACK TEXT */}
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
            <span className="stat-number">WXV</span>
            <span className="stat-label">Global</span>
          </div>
        </div>

        {/* Personalization Banner */}
        {hasFavoriteTeams && userWXVTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">🌍</div>
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

      {/* Tab Navigation */}
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

      {/* Main Content */}
      <main className="tournament-main">
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">WXV 2026 Fixtures</h2>
            
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
                  className={`match-card ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* FIXED: Status badge moved to LEFT side */}
                  <div className={`status-badge ${match.status}`}>
                    {match.status.toUpperCase()}
                  </div>
                  
                  {/* WXV Tier Indicator */}
                  <div className="wxv-tier">
                    {match.tier}
                  </div>
                  
                  {/* Match Tournament and Date - Date positioned on RIGHT */}
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  {/* Teams Container */}
                  <div className="teams-container">
                    <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                      <div className="team-row">
                        <span className="team-ranking">#{match.team1.ranking}</span>
                        <div className="team-flag">
                          <Flag src={match.team1.flag} alt={match.team1.name} size="large" fallback={match.team1.name.slice(0, 2)} />
                        </div>
                      </div>
                      <span className="team-name">{match.team1.name}</span>
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                      <span className="match-time">{match.time}</span>
                    </div>
                    
                    <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                      <div className="team-row reverse">
                        <div className="team-flag">
                          <Flag src={match.team2.flag} alt={match.team2.name} size="large" fallback={match.team2.name.slice(0, 2)} />
                        </div>
                        <span className="team-ranking">#{match.team2.ranking}</span>
                      </div>
                      <span className="team-name">{match.team2.name}</span>
                    </div>
                  </div>
                  
                  {/* Match Footer */}
                  <div className="match-footer">
                    <span className="venue">🏟️ {match.venue}</span>
                    <span className="capacity">👥 {match.capacity}</span>
                  </div>
                  
                  {/* Match Actions */}
                  <div className="match-actions">
                    <button 
                      className="action-btn primary" 
                      onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}
                    >
                      📺 Watch
                    </button>
                    <button 
                      className="action-btn secondary" 
                      onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}
                    >
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
                  className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}
                >
                  {team.isFavorite && <div className="favorite-badge">⭐ YOUR TEAM</div>}
                  
                  <div className="team-flag-large">
                    <Flag src={team.flag} alt={team.name} size="large" fallback={team.name.slice(0, 2)} />
                  </div>
                  
                  <div className="nation-name">{team.name}</div>
                  <div className="world-ranking">World Rank: #{team.ranking}</div>
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
                <span>PF</span>
                <span>PA</span>
                <span>Pts</span>
              </div>
              {enhancedStandings.map(team => (
                <div key={team.position} className={`table-row ${team.isFavorite ? 'favorite-team' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name-cell">
                    <div className="team-name-wrapper">
                      <span className="team-name-text">{team.team}</span>
                      {team.isFavorite && <span className="favorite-star">⭐</span>}
                    </div>
                  </span>
                  <span>{team.played}</span>
                  <span>{team.won}</span>
                  <span>{team.drawn}</span>
                  <span>{team.lost}</span>
                  <span>120</span>
                  <span>45</span>
                  <span className="points">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid - NO BIG TITLE ABOVE */}
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
          
          <div className="feature-card" onClick={() => alert('WXV Stats coming soon!')}>
            <div className="feature-icon">📊</div>
            <div className="feature-title">WXV Stats</div>
            <div className="feature-description">Player & team statistics</div>
          </div>
        </div>

        {/* Quick Actions */}
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
          <button className="quick-btn" onClick={() => alert('WXV History coming soon!')}>
            📜 WXV History
          </button>
        </div>
      </main>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🌍</div>
          <div className="ad-text">
            Women's WXV 2026 - The Future of Women's Rugby!
            Official tour packages, hospitality, and exclusive access across all tiers.
          </div>
          <button className="ad-cta" onClick={() => alert('Redirecting to ticket sales...')}>
            🎫 Join the Movement
          </button>
        </div>
      </div>
    </div>
  );
}

export default WomensWXV;