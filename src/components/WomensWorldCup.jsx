import React, { useState } from 'react';
import './WomensWorldCup.css';
import NavBar from './NavBar';

function WomensWorldCup({ 
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

  // World Cup Data
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensWorldCupData = {
    name: "Women's Rugby World Cup",
    year: "2025",
    description: "The premier international women's rugby union competition, showcasing the best teams globally in the ultimate test of skill, strength, and strategy.",
    logo: "🏆",
    teams: [
      { flag: "https://flagcdn.com/w320/gb-eng.png", name: "England", ranking: 1, isFavorite: false },
      { flag: "https://flagcdn.com/w320/nz.png", name: "New Zealand", ranking: 2, isFavorite: false },
      { flag: "https://flagcdn.com/w320/fr.png", name: "France", ranking: 3, isFavorite: false },
      { flag: "https://flagcdn.com/w320/ca.png", name: "Canada", ranking: 4, isFavorite: false },
      { flag: "https://flagcdn.com/w320/us.png", name: "USA", ranking: 5, isFavorite: false },
      { flag: "https://flagcdn.com/w320/au.png", name: "Australia", ranking: 6, isFavorite: false },
      { flag: "https://flagcdn.com/w320/gb-wls.png", name: "Wales", ranking: 7, isFavorite: false },
      { flag: "https://flagcdn.com/w320/ie.png", name: "Ireland", ranking: 8, isFavorite: false },
      { flag: "https://flagcdn.com/w320/gb-sct.png", name: "Scotland", ranking: 9, isFavorite: false },
      { flag: "https://flagcdn.com/w320/it.png", name: "Italy", ranking: 10, isFavorite: false },
      { flag: "https://flagcdn.com/w320/za.png", name: "South Africa", ranking: 11, isFavorite: false },
      { flag: "https://flagcdn.com/w320/es.png", name: "Spain", ranking: 12, isFavorite: false },
      { flag: "https://flagcdn.com/w320/jp.png", name: "Japan", ranking: 13, isFavorite: false },
      { flag: "https://flagcdn.com/w320/fj.png", name: "Fiji", ranking: 14, isFavorite: false },
      { flag: "https://flagcdn.com/w320/br.png", name: "Brazil", ranking: 15, isFavorite: false },
      { flag: "https://flagcdn.com/w320/kz.png", name: "Kazakhstan", ranking: 16, isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "https://flagcdn.com/w320/gb-eng.png", name: "England", ranking: 1 },
        team2: { flag: "https://flagcdn.com/w320/fr.png", name: "France", ranking: 3 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Sep 12, 2025",
        time: "20:00",
        status: "upcoming",
        tournament: "Pool A",
        capacity: "82,000",
        round: "Pool Stage",
        isFeatured: true
      },
      {
        id: 2,
        team1: { flag: "https://flagcdn.com/w320/nz.png", name: "New Zealand", ranking: 2 },
        team2: { flag: "https://flagcdn.com/w320/au.png", name: "Australia", ranking: 6 },
        venue: "Eden Park – Auckland",
        stadium: "Eden Park",
        date: "Sep 13, 2025",
        time: "19:35",
        status: "upcoming",
        tournament: "Pool B",
        capacity: "48,000",
        round: "Pool Stage",
        isFeatured: true
      },
      {
        id: 3,
        team1: { flag: "https://flagcdn.com/w320/ca.png", name: "Canada", ranking: 4 },
        team2: { flag: "https://flagcdn.com/w320/us.png", name: "USA", ranking: 5 },
        venue: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "Sep 14, 2025",
        time: "17:00",
        status: "upcoming",
        tournament: "Pool C",
        capacity: "54,500",
        round: "Pool Stage",
        isFeatured: true
      },
      {
        id: 4,
        team1: { flag: "https://flagcdn.com/w320/gb-wls.png", name: "Wales", ranking: 7 },
        team2: { flag: "https://flagcdn.com/w320/ie.png", name: "Ireland", ranking: 8 },
        venue: "Principality Stadium – Cardiff",
        stadium: "Principality Stadium",
        date: "Sep 19, 2025",
        time: "14:30",
        status: "upcoming",
        tournament: "Pool D",
        capacity: "74,500",
        round: "Pool Stage",
        isFeatured: false
      },
      {
        id: 5,
        team1: { flag: "https://flagcdn.com/w320/za.png", name: "South Africa", ranking: 11 },
        team2: { flag: "https://flagcdn.com/w320/jp.png", name: "Japan", ranking: 13 },
        venue: "Ellis Park – Johannesburg",
        stadium: "Ellis Park",
        date: "Sep 20, 2025",
        time: "15:00",
        status: "upcoming",
        tournament: "Pool A",
        capacity: "62,567",
        round: "Pool Stage",
        isFeatured: false
      },
      {
        id: 6,
        team1: { flag: "https://flagcdn.com/w320/fj.png", name: "Fiji", ranking: 14 },
        team2: { flag: "https://flagcdn.com/w320/br.png", name: "Brazil", ranking: 15 },
        venue: "ANZ Stadium – Suva",
        stadium: "ANZ Stadium",
        date: "Sep 21, 2025",
        time: "13:00",
        status: "upcoming",
        tournament: "Pool B",
        capacity: "15,000",
        round: "Pool Stage",
        isFeatured: false
      }
    ],
    standings: [
      { position: 1, team: "England", played: 3, won: 3, drawn: 0, lost: 0, points: 15, isFavorite: false },
      { position: 2, team: "New Zealand", played: 3, won: 3, drawn: 0, lost: 0, points: 15, isFavorite: false },
      { position: 3, team: "France", played: 3, won: 2, drawn: 0, lost: 1, points: 10, isFavorite: false },
      { position: 4, team: "Canada", played: 3, won: 2, drawn: 0, lost: 1, points: 10, isFavorite: false },
      { position: 5, team: "Australia", played: 3, won: 2, drawn: 0, lost: 1, points: 10, isFavorite: false },
      { position: 6, team: "USA", played: 3, won: 1, drawn: 0, lost: 2, points: 5, isFavorite: false },
      { position: 7, team: "Wales", played: 3, won: 1, drawn: 0, lost: 2, points: 5, isFavorite: false },
      { position: 8, team: "Ireland", played: 3, won: 1, drawn: 0, lost: 2, points: 5, isFavorite: false }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensWorldCupData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensWorldCupData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = womensWorldCupData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  const userWorldCupTeams = enhancedTeams.filter(team => team.isFavorite);

  const filteredMatches = matchFilter === 'featured' 
    ? enhancedMatches.filter(match => match.isFeatured)
    : matchFilter === 'my-teams'
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: "Women's Rugby World Cup",
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
    <div className="womens-world-cup-page">
      {/* Top Navigation */}
      <NavBar onNavigateBack={onNavigateBack} />
      
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Women's Rugby World Cup 2025 - Official Tournament Hub
      </div>

      {/* Hero Section */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensWorldCupData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensWorldCupData.name}
                <span className="womens-rugby-badge">WORLD CUP</span>
              </h1>
              <p className="tournament-year">{womensWorldCupData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensWorldCupData.description}</p>
        </div>
        
        {/* FIXED: Hero Stats with BLACK TEXT */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">16</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">48</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">🏆</span>
            <span className="stat-label">World Cup</span>
          </div>
        </div>

        {/* Personalization Banner */}
        {hasFavoriteTeams && userWorldCupTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">🏆</div>
            <div className="banner-content">
              <h3>Your World Cup Journey</h3>
              <p>
                Following {userWorldCupTeams.length} women's team{userWorldCupTeams.length !== 1 ? 's' : ''}:{' '}
                {userWorldCupTeams.map(team => team.name).join(', ')}
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
            <h2 className="section-title centered-fixtures-title">World Cup 2025 Fixtures</h2>
            
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
                  
                  {/* World Cup Round Indicator */}
                  <div className="world-cup-round">
                    {match.round}
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
            <h2 className="section-title">World Cup 2025 Nations</h2>
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
                  
                  {team.isFavorite && (
                    <div className="team-highlight">
                      Your World Cup team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">World Cup Standings</h2>
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
            <div className="feature-title">World Cup Fantasy</div>
            <div className="feature-description">Build your dream World Cup team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time World Cup scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">World Cup Podcasts</div>
            <div className="feature-description">Tournament analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => alert('World Cup Stats coming soon!')}>
            <div className="feature-icon">📊</div>
            <div className="feature-title">World Cup Stats</div>
            <div className="feature-description">Player & team statistics</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 World Cup Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 World Cup Podcasts
          </button>
          <button className="quick-btn" onClick={() => alert('World Cup History coming soon!')}>
            📜 World Cup History
          </button>
        </div>
      </main>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏆</div>
          <div className="ad-text">
            Women's Rugby World Cup 2025 - The Ultimate Women's Rugby Championship!
            Official packages, hospitality, and exclusive World Cup experiences.
          </div>
          <button className="ad-cta" onClick={() => alert('Redirecting to ticket sales...')}>
            🎫 Get World Cup Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default WomensWorldCup;