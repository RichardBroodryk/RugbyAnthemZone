import React, { useState } from 'react';
import './MensRugby7s.css';
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
      'spain': 'spain',
      'kenya': 'kenya',
      'uruguay': 'uruguay',
      'germany': 'germany'
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

function MensRugby7s({ 
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

  const rugby7sData = {
    name: "World Rugby Sevens Series",
    year: "2025-2026",
    description: "The premier global circuit of international rugby sevens tournaments featuring fast-paced, high-scoring action",
    logo: "⚡",
    teams: [
      { name: "New Zealand", ranking: 1, points: 126, coreTeam: true },
      { name: "Argentina", ranking: 2, points: 118, coreTeam: true },
      { name: "Fiji", ranking: 3, points: 112, coreTeam: true },
      { name: "France", ranking: 4, points: 104, coreTeam: true },
      { name: "Australia", ranking: 5, points: 98, coreTeam: true },
      { name: "Ireland", ranking: 6, points: 86, coreTeam: true },
      { name: "USA", ranking: 7, points: 82, coreTeam: true },
      { name: "South Africa", ranking: 8, points: 78, coreTeam: true },
      { name: "England", ranking: 9, points: 72, coreTeam: true },
      { name: "Samoa", ranking: 10, points: 68, coreTeam: true },
      { name: "Spain", ranking: 11, points: 54, coreTeam: false },
      { name: "Japan", ranking: 12, points: 48, coreTeam: false },
      { name: "Canada", ranking: 13, points: 42, coreTeam: false },
      { name: "Kenya", ranking: 14, points: 38, coreTeam: false },
      { name: "Uruguay", ranking: 15, points: 32, coreTeam: false },
      { name: "Germany", ranking: 16, points: 28, coreTeam: false }
    ],
    series: [
      {
        id: 1,
        name: "Dubai Sevens",
        location: "The Sevens Stadium – Dubai",
        date: "Dec 5-6, 2025",
        status: "completed",
        winner: { name: "Argentina" },
        featured: true,
        participatingTeams: ["Argentina", "New Zealand", "Fiji", "France", "Australia", "South Africa"],
        capacity: "50,000"
      },
      {
        id: 2,
        name: "Cape Town Sevens",
        location: "Cape Town Stadium – South Africa",
        date: "Dec 12-13, 2025",
        status: "completed",
        winner: { name: "New Zealand" },
        featured: true,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "Australia", "France", "Ireland"],
        capacity: "55,000"
      },
      {
        id: 3,
        name: "Sydney Sevens",
        location: "Allianz Stadium – Sydney",
        date: "Jan 23-24, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "Australia", "South Africa", "USA"],
        capacity: "45,500"
      },
      {
        id: 4,
        name: "Hamilton Sevens",
        location: "FMG Stadium – Hamilton",
        date: "Jan 30-31, 2026",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "France", "England", "Samoa"],
        capacity: "25,000"
      },
      {
        id: 5,
        name: "Vancouver Sevens",
        location: "BC Place – Vancouver",
        date: "Feb 27-28, 2026",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "France", "England", "Samoa"],
        capacity: "54,500"
      },
      {
        id: 6,
        name: "Los Angeles Sevens",
        location: "Dignity Health Sports Park – Los Angeles",
        date: "Mar 6-7, 2026",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "USA", "Australia", "South Africa"],
        capacity: "30,000"
      },
      {
        id: 7,
        name: "Hong Kong Sevens",
        location: "Hong Kong Stadium",
        date: "Apr 3-5, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "Australia", "South Africa", "Japan"],
        capacity: "40,000"
      },
      {
        id: 8,
        name: "Singapore Sevens",
        location: "National Stadium – Singapore",
        date: "Apr 10-11, 2026",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "France", "Ireland", "Spain"],
        capacity: "55,000"
      },
      {
        id: 9,
        name: "London Sevens",
        location: "Twickenham Stadium – London",
        date: "May 22-23, 2026",
        status: "upcoming",
        winner: null,
        featured: true,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "England", "Australia", "South Africa"],
        capacity: "82,000"
      },
      {
        id: 10,
        name: "Paris Sevens",
        location: "Stade Jean-Bouin – Paris",
        date: "May 29-30, 2026",
        status: "upcoming",
        winner: null,
        featured: false,
        participatingTeams: ["New Zealand", "Argentina", "Fiji", "France", "Ireland", "Spain"],
        capacity: "20,000"
      }
    ],
    standings: [
      { position: 1, team: "New Zealand", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 145, pointsAgainst: 78, points: 126 },
      { position: 2, team: "Argentina", played: 4, won: 3, drawn: 0, lost: 1, pointsFor: 132, pointsAgainst: 85, points: 118 },
      { position: 3, team: "Fiji", played: 4, won: 2, drawn: 1, lost: 1, pointsFor: 128, pointsAgainst: 92, points: 112 },
      { position: 4, team: "France", played: 4, won: 2, drawn: 1, lost: 1, pointsFor: 118, pointsAgainst: 95, points: 104 },
      { position: 5, team: "Australia", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 110, pointsAgainst: 102, points: 98 },
      { position: 6, team: "Ireland", played: 4, won: 2, drawn: 0, lost: 2, pointsFor: 105, pointsAgainst: 108, points: 86 },
      { position: 7, team: "USA", played: 4, won: 1, drawn: 1, lost: 2, pointsFor: 98, pointsAgainst: 115, points: 82 },
      { position: 8, team: "South Africa", played: 4, won: 1, drawn: 1, lost: 2, pointsFor: 92, pointsAgainst: 118, points: 78 },
      { position: 9, team: "England", played: 4, won: 1, drawn: 0, lost: 3, pointsFor: 88, pointsAgainst: 125, points: 72 },
      { position: 10, team: "Samoa", played: 4, won: 1, drawn: 0, lost: 3, pointsFor: 85, pointsAgainst: 130, points: 68 },
      { position: 11, team: "Spain", played: 4, won: 0, drawn: 2, lost: 2, pointsFor: 78, pointsAgainst: 140, points: 54 },
      { position: 12, team: "Japan", played: 4, won: 0, drawn: 1, lost: 3, pointsFor: 72, pointsAgainst: 148, points: 48 }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = rugby7sData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedSeries = rugby7sData.series.map(series => ({
    ...series,
    isFavorite: series.participatingTeams.some(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = rugby7sData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter series based on user selection
  const filteredSeries = seriesFilter === 'featured' 
    ? enhancedSeries.filter(series => series.featured)
    : seriesFilter === 'upcoming'
    ? enhancedSeries.filter(series => series.status === 'upcoming')
    : enhancedSeries;

  const userRugby7sTeams = enhancedTeams.filter(team => team.isFavorite);

  const handleSeriesClick = (series) => {
    onGameSelect?.({
      ...series,
      tournament: 'World Rugby Sevens Series'
    });
  };

  // Get top 3 teams for series preview
  const getTopTeams = (series) => {
    const topTeams = rugby7sData.teams
      .filter(team => series.participatingTeams.includes(team.name))
      .slice(0, 3);
    return topTeams;
  };

  return (
    <div className="mens-rugby-7s-page">
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
        ⚡ World Rugby Sevens Series 2025-2026 - Fastest Rugby on Earth! 🏉
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{rugby7sData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{rugby7sData.name}</h1>
              <p className="tournament-year">{rugby7sData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{rugby7sData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">16</span>
            <span className="stat-label">Teams</span>
          </div>
          <div className="stat">
            <span className="stat-number">10</span>
            <span className="stat-label">Tournaments</span>
          </div>
          <div className="stat">
            <span className="stat-number">⚡</span>
            <span className="stat-label">Fast Rugby</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userRugby7sTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Rugby 7s Journey</h3>
              <p>
                Following {userRugby7sTeams.length} team{userRugby7sTeams.length !== 1 ? 's' : ''}:{' '}
                {userRugby7sTeams.map(team => team.name).join(', ')}
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
              World Rugby Sevens Series 2025-2026
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
            <h2 className="section-title">World Series Standings 2025-2026</h2>
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
            <div className="feature-description">Fast-paced analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('series')}>
            <div className="feature-icon">⚡</div>
            <div className="feature-title">Global Series</div>
            <div className="feature-description">10 tournaments worldwide</div>
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
            Experience Rugby 7s Live! The World's Most Exciting Rugby Format.
            Festival atmosphere, fast-paced action, and world-class athletes.
          </div>
          <button className="ad-cta">🎫 Get Tickets</button>
        </div>
      </div>
    </div>
  );
}

export default MensRugby7s;