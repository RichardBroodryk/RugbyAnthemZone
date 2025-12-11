import React, { useState } from 'react';
import './WomensRugby7s.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours template)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'australia': 'australia',
      'new zealand': 'new-zealand',
      'france': 'france',
      'usa': 'united-states-of-america',
      'canada': 'canada',
      'fiji': 'fiji',
      'england': 'england',
      'ireland': 'ireland',
      'spain': 'spain',
      'brazil': 'brazil',
      'japan': 'japan',
      'china': 'china',
      'great britain': 'great-britain',
      'south africa': 'south-africa',
      'portugal': 'portugal',
      'poland': 'poland'
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
  
  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensRugby7sData = {
    name: "Women's World Rugby Sevens Series",
    year: "2026-2027",
    description: "Fast-paced international women's rugby sevens competition featuring global tournaments",
    logo: "⚡",
    teams: [
      { name: "Australia", ranking: 1, points: 128, coreTeam: true },
      { name: "New Zealand", ranking: 2, points: 122, coreTeam: true },
      { name: "France", ranking: 3, points: 116, coreTeam: true },
      { name: "USA", ranking: 4, points: 108, coreTeam: true },
      { name: "Canada", ranking: 5, points: 102, coreTeam: true },
      { name: "Fiji", ranking: 6, points: 94, coreTeam: true },
      { name: "England", ranking: 7, points: 88, coreTeam: true },
      { name: "Ireland", ranking: 8, points: 82, coreTeam: true },
      { name: "Spain", ranking: 9, points: 76, coreTeam: true },
      { name: "Brazil", ranking: 10, points: 68, coreTeam: false },
      { name: "Japan", ranking: 11, points: 62, coreTeam: false },
      { name: "China", ranking: 12, points: 56, coreTeam: false },
      { name: "Great Britain", ranking: 13, points: 50, coreTeam: false },
      { name: "South Africa", ranking: 14, points: 44, coreTeam: false },
      { name: "Portugal", ranking: 15, points: 38, coreTeam: false },
      { name: "Poland", ranking: 16, points: 32, coreTeam: false }
    ],
    series: [
      {
        id: 1,
        name: "Dubai Sevens",
        location: "The Sevens Stadium – Dubai",
        date: "Nov 27-28, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Canada", "Fiji", "England", "Ireland"],
        capacity: "50,000"
      },
      {
        id: 2,
        name: "Cape Town Sevens",
        location: "Cape Town Stadium – South Africa",
        date: "Dec 4-5, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "South Africa", "Fiji", "England", "Brazil"],
        capacity: "55,000"
      },
      {
        id: 3,
        name: "Sydney Sevens",
        location: "Allianz Stadium – Sydney",
        date: "Jan 23-24, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Canada", "Fiji", "Japan", "China"],
        capacity: "45,500"
      },
      {
        id: 4,
        name: "Vancouver Sevens",
        location: "BC Place – Vancouver",
        date: "Feb 27-28, 2027",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["Australia", "New Zealand", "Canada", "USA", "France", "England", "Ireland", "Spain"],
        capacity: "54,500"
      },
      {
        id: 5,
        name: "Hong Kong Sevens",
        location: "Hong Kong Stadium",
        date: "Apr 3-5, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "USA", "Fiji", "Japan", "China", "Hong Kong"],
        capacity: "40,000"
      },
      {
        id: 6,
        name: "Langford Sevens",
        location: "Starlight Stadium – Canada",
        date: "Apr 10-11, 2027",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["Australia", "New Zealand", "Canada", "USA", "France", "England", "Brazil", "Spain"],
        capacity: "6,000"
      },
      {
        id: 7,
        name: "London Sevens",
        location: "Twickenham Stadium – London",
        date: "May 22-23, 2027",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["Australia", "New Zealand", "France", "England", "USA", "Canada", "Ireland", "Fiji"],
        capacity: "82,000"
      }
    ],
    standings: [
      { position: 1, team: "Australia", played: 4, won: 4, drawn: 0, lost: 0, pointsFor: 152, pointsAgainst: 45, points: 128 },
      { position: 2, team: "New Zealand", played: 4, won: 3, drawn: 1, lost: 0, pointsFor: 138, pointsAgainst: 52, points: 122 },
      { position: 3, team: "France", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 126, pointsAgainst: 68, points: 116 },
      { position: 4, team: "USA", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 118, pointsAgainst: 75, points: 108 },
      { position: 5, team: "Canada", played: 4, won: 2, drawn: 1, lost: 1, pointsFor: 112, pointsAgainst: 82, points: 102 },
      { position: 6, team: "Fiji", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 98, pointsAgainst: 95, points: 94 },
      { position: 7, team: "England", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 92, pointsAgainst: 102, points: 88 },
      { position: 8, team: "Ireland", played: 4, won: 1, drawn: 1, lost: 2, pointsFor: 85, pointsAgainst: 108, points: 82 },
      { position: 9, team: "Spain", played: 4, won: 1, drawn: 0, lost: 3, pointsFor: 78, pointsAgainst: 115, points: 76 },
      { position: 10, team: "Brazil", played: 4, won: 1, drawn: 0, lost: 3, pointsFor: 72, pointsAgainst: 125, points: 68 }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensRugby7sData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedSeries = womensRugby7sData.series.map(series => ({
    ...series,
    isFavorite: series.participatingTeams.some(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = womensRugby7sData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter series based on user selection
  const filteredSeries = seriesFilter === 'featured' 
    ? enhancedSeries.filter(series => series.featured)
    : seriesFilter === 'upcoming'
    ? enhancedSeries.filter(series => series.status === 'upcoming')
    : enhancedSeries;

  const userSevensTeams = enhancedTeams.filter(team => team.isFavorite);

  const handleSeriesClick = (series) => {
    onGameSelect?.({
      ...series,
      tournament: "Women's World Rugby Sevens Series"
    });
  };

  // Get top 3 teams for series preview
  const getTopTeams = (series) => {
    const topTeams = womensRugby7sData.teams
      .filter(team => series.participatingTeams.includes(team.name))
      .slice(0, 3);
    return topTeams;
  };

  return (
    <div className="womens-rugby-7s-page">
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
        ⚡ Women's World Rugby Sevens Series 2026-2027 - Fastest Women's Rugby on Earth! 🏉
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
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
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">16</span>
            <span className="stat-label">Teams</span>
          </div>
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">7</span>
            <span className="stat-label">Tournaments</span>
          </div>
          {/* FIXED: BLACK TEXT AND REMOVED FEMALE ICON */}
          <div className="stat">
            <span className="stat-number">🏉</span> {/* Changed from ♀ to 🏉 */}
            <span className="stat-label">Rugby 7s</span> {/* Changed from "Women's 7s" to "Rugby 7s" */}
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userSevensTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
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

      {/* EXACT Autumn/Rival Tours Tab Navigation */}
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
        </div>
      </nav>

      <main className="tournament-main">
        {/* SERIES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'series' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Women's World Rugby Sevens Series 2026-2027
            </h2>
            
            <div className="series-filters">
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
                Featured
              </button>
              <button 
                className={`filter-btn ${seriesFilter === 'upcoming' ? 'active' : ''}`}
                onClick={() => setSeriesFilter('upcoming')}
              >
                Upcoming
              </button>
            </div>

            <div className="series-grid">
              {filteredSeries.map(series => (
                <div 
                  key={series.id} 
                  className={`series-card ${series.featured ? 'featured-series' : ''}`}
                  onClick={() => handleSeriesClick(series)}
                >
                  {/* STATUS BADGE - Autumn/Rival Tours positioning */}
                  <div className={`status-badge ${series.status}`}>
                    {series.status.toUpperCase()}
                  </div>
                  
                  <div className="series-header">
                    <span className="series-name">{series.name}</span>
                    <span className="series-date">{series.date}</span>
                  </div>
                  
                  <div className="series-location">
                    <span>📍</span>
                    <span>{series.location}</span>
                  </div>
                  
                  <div className="series-teams">
                    {getTopTeams(series).map((team, index) => (
                      <div key={index} className="team-preview">
                        <div className="team-flag">
                          <Flag country={team.name} size="medium" />
                        </div>
                        <span className="team-name">{team.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="match-footer">
                    <span className="capacity">👥 {series.capacity}</span>
                  </div>
                  
                  {series.winner && (
                    <div className="match-highlight">
                      🏆 Winner: {series.winner.name}
                    </div>
                  )}
                  
                  <div className="series-actions">
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                      {series.status === 'completed' ? '📺 Highlights' : '🎟️ Tickets'}
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
            <h2 className="section-title">Core & Invited Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.coreTeam ? 'featured-series' : ''}`}>
                  <div className="nation-flag">
                    <Flag country={team.name} size="large" />
                  </div>
                  <h3 className="nation-name">{team.name}</h3>
                  <span className="world-ranking">Rank: #{team.ranking}</span>
                  <span className="points">{team.points} pts</span>
                  {team.coreTeam && (
                    <div className="match-highlight" style={{marginTop: '0.5rem'}}>
                      Core Team
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">World Series Standings 2026-2027</h2>
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
                  <span>{team.pointsFor}</span>
                  <span>{team.pointsAgainst}</span>
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
            <div className="feature-description">Women's rugby analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('series')}>
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Global Series</div>
            <div className="feature-description">7 tournaments worldwide</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 7s Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Series Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 7s Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('series')}>
            ⚡ Global Series
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">⚡</div>
          <div className="ad-text">
            Experience Women's Rugby 7s Live! The World's Most Exciting Women's Rugby Format.
            Festival atmosphere, fast-paced action, and world-class athletes.
          </div>
          <button className="ad-cta">🎫 Get Tickets</button>
        </div>
      </div>
    </div>
  );
}

export default WomensRugby7s;