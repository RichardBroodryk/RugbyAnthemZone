import React, { useState } from 'react';
import './WomensPacificFour.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

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
  const [selectedVenue, setSelectedVenue] = useState('Eden Park');
  
  // Women's Pacific Four Series stadiums
  const pacificStadiums = [
    'Eden Park',
    'BC Place',
    'FMG Stadium',
    'AAMI Park',
    'Sky Stadium',
    'Allianz Stadium'
  ];

  // Get user's favorite teams
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensPacificFourData = {
    name: "Women's Pacific Four Series",
    year: "2026",
    description: "Annual women's rugby union competition featuring four Pacific nations",
    logo: "🌊",
    teams: [
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, form: 'WWWLW', isFavorite: false, isPacificPower: true },
      { flag: "🇦🇺", name: "Australia", ranking: 5, form: 'WLLWL', isFavorite: false, isPacificPower: true },
      { flag: "🇨🇦", name: "Canada", ranking: 4, form: 'WWLWW', isFavorite: false, isPacificPower: true },
      { flag: "🇺🇸", name: "USA", ranking: 10, form: 'LLWLL', isFavorite: false, isPacificPower: true }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        venue: "Eden Park – Auckland",
        stadium: "Eden Park",
        date: "May 30, 2026",
        time: "19:05",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
        capacity: "48,000",
        isPacificRivalry: true,
        series: "Opening Match"
      },
      {
        id: 2,
        team1: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 10 },
        venue: "BC Place – Vancouver",
        stadium: "BC Place",
        date: "May 31, 2026",
        time: "14:00",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
        capacity: "54,500",
        isPacificRivalry: true,
        series: "North American Derby"
      },
      {
        id: 3,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        venue: "FMG Stadium – Hamilton",
        stadium: "FMG Stadium",
        date: "June 6, 2026",
        time: "17:35",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
        capacity: "25,800",
        isPacificRivalry: false,
        series: "Round 2"
      },
      {
        id: 4,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 10 },
        venue: "AAMI Park – Melbourne",
        stadium: "AAMI Park",
        date: "June 7, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
        capacity: "30,050",
        isPacificRivalry: false,
        series: "Round 2"
      },
      {
        id: 5,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 10 },
        venue: "Sky Stadium – Wellington",
        stadium: "Sky Stadium",
        date: "June 13, 2026",
        time: "19:05",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
        capacity: "34,500",
        isPacificRivalry: false,
        series: "Final Round"
      },
      {
        id: 6,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 5 },
        team2: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        venue: "Allianz Stadium – Sydney",
        stadium: "Allianz Stadium",
        date: "June 14, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Women's Pacific Four Series",
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

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = womensPacificFourData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to matches
  const enhancedMatches = womensPacificFourData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Add favorite status to standings
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

  // Get user's Pacific Four teams
  const userPacificTeams = enhancedTeams.filter(team => team.isFavorite);

  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

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
            <span className="stat-label">Pacific Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">♀</span>
            <span className="stat-label">Women's Rugby</span>
          </div>
        </div>

        {hasFavoriteTeams && userPacificTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">🌊</div>
            <div className="banner-content">
              <h3>Your Pacific Four Experience</h3>
              <p>
                Following {userPacificTeams.length} Pacific nation{userPacificTeams.length !== 1 ? 's' : ''}:{' '}
                {userPacificTeams.map(team => team.name).join(', ')}
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
        </div>
      </nav>

      <main className="tournament-main">
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">Pacific Four Series Matches</h2>
            
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
                  My Teams Only
                </button>
              )}
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isPacificRivalry ? 'pacific-rivalry' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {match.isFavoriteMatch && (
                    <div className="match-highlight">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.series}</span>
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
            <h2 className="section-title">Pacific Four Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => {
                const featuredPlayer = getFeaturedPlayer(team.name);
                return (
                  <div key={index} className={`nation-card ${team.isPacificPower ? 'pacific-power' : ''} ${team.isFavorite ? 'favorite-team' : ''}`}>
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

                    {team.isFavorite && (
                      <div className="team-highlight">
                        Your Pacific Four team
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
            <h2 className="section-title">🏟️ Pacific Four Series Stadiums</h2>
            <p>Explore the iconic venues across the Pacific region hosting women's rugby's premier competition</p>
            
            <VenueSelector 
              venues={pacificStadiums}
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
              <h3>Pacific Four Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with Pacific Four ticket packages</li>
                <li>🌊 Pacific region stadiums from NZ to Canada</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>♀ Women's rugby heritage and atmosphere</li>
              </ul>
            </div>
          </div>
        )}

        <div className="pacific-series">
          <h2 className="section-title">About the Pacific Four Series</h2>
          <div className="series-card">
            <div className="series-header">
              <div className="series-icon">🌊</div>
              <div className="series-info">
                <h3>Women's Pacific Four Championship</h3>
                <p>Annual competition featuring the top four women's rugby nations from the Pacific region</p>
              </div>
            </div>
            <div className="series-teams">
              {enhancedTeams.map(team => (
                <div key={team.name} className="series-team">
                  <div className="team-flag">{team.flag}</div>
                  <div className="team-name">{team.name}</div>
                  <div className="team-ranking">#{team.ranking}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Pacific Four Features</h2>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore Pacific venues</div>
            </div>
          </div>
        </div>

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
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Pacific Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🌊</div>
          <div className="ad-text">
            Support Women's Pacific Rugby! Official Pacific Four Series Merchandise Available.
            Wear your Pacific colors and champion the women's game across the ocean.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensPacificFour;