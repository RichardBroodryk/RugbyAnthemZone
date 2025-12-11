import React, { useState } from 'react';
import './WomensPacificFour.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'australia': 'australia',
      'canada': 'canada',
      'new zealand': 'new-zealand',
      'usa': 'united-states-of-america'
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

function WomensPacificFour({ 
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

  const womensPacificFourData = {
    name: "Women's Pacific Four Series",
    year: "2026",
    description: "Annual women's rugby union competition featuring four Pacific nations",
    logo: "🌊",
    teams: [
      { name: "New Zealand", ranking: 2, coreTeam: true },
      { name: "Australia", ranking: 5, coreTeam: true },
      { name: "Canada", ranking: 4, coreTeam: true },
      { name: "USA", ranking: 10, coreTeam: true }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "New Zealand", ranking: 2 },
        team2: { name: "Australia", ranking: 5 },
        venue: "Eden Park – Auckland",
        stadium: "Eden Park",
        date: "May 30, 2026",
        time: "19:05",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "48,000",
        isPacificRivalry: true,
        series: "Opening Match"
      },
      {
        id: 2,
        team1: { name: "Canada", ranking: 4 },
        team2: { name: "USA", ranking: 10 },
        venue: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "May 31, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "54,500",
        isPacificRivalry: true,
        series: "North American Derby"
      },
      {
        id: 3,
        team1: { name: "New Zealand", ranking: 2 },
        team2: { name: "Canada", ranking: 4 },
        venue: "FMG Stadium – Hamilton",
        stadium: "FMG Stadium",
        date: "June 6, 2026",
        time: "17:35",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "25,800",
        isPacificRivalry: false,
        series: "Round 2"
      },
      {
        id: 4,
        team1: { name: "Australia", ranking: 5 },
        team2: { name: "USA", ranking: 10 },
        venue: "AAMI Park – Melbourne",
        stadium: "AAMI Park",
        date: "June 7, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "30,050",
        isPacificRivalry: false,
        series: "Round 2"
      },
      {
        id: 5,
        team1: { name: "New Zealand", ranking: 2 },
        team2: { name: "USA", ranking: 10 },
        venue: "Sky Stadium – Wellington",
        stadium: "Sky Stadium",
        date: "June 13, 2026",
        time: "19:05",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "34,500",
        isPacificRivalry: false,
        series: "Final Round"
      },
      {
        id: 6,
        team1: { name: "Australia", ranking: 5 },
        team2: { name: "Canada", ranking: 4 },
        venue: "Allianz Stadium – Sydney",
        stadium: "Allianz Stadium",
        date: "June 14, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Pacific Four Series",
        capacity: "45,500",
        isPacificRivalry: true,
        series: "Championship Decider"
      }
    ],
    standings: [
      { position: 1, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "Canada", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "Australia", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "USA", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensPacificFourData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensPacificFourData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = womensPacificFourData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'pacific-rivalry'
    ? enhancedMatches.filter(match => match.isPacificRivalry)
    : enhancedMatches;

  const userPacificTeams = enhancedTeams.filter(team => team.isFavorite);

  const getFeaturedPlayer = (teamName) => {
    const players = {
      "New Zealand": { name: "Ruahei Demant", position: "Fly-half", fact: "World Rugby Player of the Year 2023" },
      "Australia": { name: "Arabella McKenzie", position: "Fly-half", fact: "Rising star playmaker for Wallaroos" },
      "Canada": { name: "Sophie de Goede", position: "No. 8", fact: "Captain and leading points scorer" },
      "USA": { name: "Kate Zackary", position: "Back-row", fact: "Experienced captain and leader" }
    };
    return players[teamName];
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: "Women's Pacific Four Series",
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="womens-pacific-four-page">
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
        ♀ Women's Pacific Four Series 2026 - Pacific Rugby Excellence! 🌊
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensPacificFourData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensPacificFourData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensPacificFourData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensPacificFourData.description}</p>
        </div>
        <div className="hero-stats">
  <div className="stat">
    <span className="stat-number">4</span>
    <span className="stat-label">Nations</span>
  </div>
  <div className="stat">
    <span className="stat-number">6</span>
    <span className="stat-label">Matches</span>
  </div>
  <div className="stat">
    <span className="stat-number">🏆</span> {/* CHANGED TO TROPHY ICON */}
    <span className="stat-label">Pacific Four</span> {/* CHANGED TEXT */}
  </div>
</div>
        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userPacificTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Pacific Four Journey</h3>
              <p>
                Following {userPacificTeams.length} Pacific nation{userPacificTeams.length !== 1 ? 's' : ''}:{' '}
                {userPacificTeams.map(team => team.name).join(', ')}
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
              Pacific Four Series 2026
            </h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'pacific-rivalry' ? 'active' : ''}`}
                onClick={() => setMatchFilter('pacific-rivalry')}
              >
                Pacific Rivalries
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
                  className={`match-card ${match.isPacificRivalry ? 'featured-series' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* PACIFIC RIVALRY INDICATOR */}
                  {match.isPacificRivalry && (
                    <div className="pacific-rivalry-indicator">
                      🌊 PACIFIC RIVALRY
                    </div>
                  )}
                  
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
                    <span className="match-tournament">{match.series}</span>
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
            <h2 className="section-title">Pacific Four Nations</h2>
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
                        <div style={{fontSize: '0.7rem', marginTop: '0.2rem'}}>{featuredPlayer.fact}</div>
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
            <h2 className="section-title">Pacific Four Standings</h2>
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
            <div className="feature-title">Pacific Fantasy</div>
            <div className="feature-description">Build your dream Pacific team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time Pacific Four scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Pacific Podcasts</div>
            <div className="feature-description">Women's rugby analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('fixtures')}>
            <div className="feature-icon">🌊</div>
            <div className="feature-title">Pacific Series</div>
            <div className="feature-description">Four Pacific nations compete</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Pacific Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Series Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Pacific Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('fixtures')}>
            🌊 Pacific Series
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🌊</div>
          <div className="ad-text">
            Support Women's Pacific Rugby! Official Pacific Four Series Merchandise Available.
            Wear your Pacific colors and champion the women's game.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensPacificFour;