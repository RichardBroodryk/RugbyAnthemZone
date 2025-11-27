import React, { useState } from 'react';
import './WomensWorldCup.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

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
  const [selectedVenue, setSelectedVenue] = useState('Twickenham Stadium');
  
  // World Cup Stadiums
  const worldCupStadiums = [
    'Twickenham Stadium',
    'Eden Park',
    'BC Place',
    'Principality Stadium',
    'Ellis Park',
    'ANZ Stadium',
    'Stade de France',
    'Sydney Cricket Ground'
  ];

  // World Cup Data
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensWorldCupData = {
    name: "Women's Rugby World Cup",
    year: "2025",
    description: "The premier international women's rugby union competition, showcasing the best teams globally in the ultimate test of skill, strength, and strategy.",
    logo: "🏆",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1, isFavorite: false },
      { flag: "🇳🇿", name: "New Zealand", ranking: 2, isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 4, isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 5, isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 6, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 7, isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 8, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9, isFavorite: false },
      { flag: "🇮🇹", name: "Italy", ranking: 10, isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 11, isFavorite: false },
      { flag: "🇪🇸", name: "Spain", ranking: 12, isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 13, isFavorite: false },
      { flag: "🇫🇯", name: "Fiji", ranking: 14, isFavorite: false },
      { flag: "🇧🇷", name: "Brazil", ranking: 15, isFavorite: false },
      { flag: "🇰🇿", name: "Kazakhstan", ranking: 16, isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🇫🇷", name: "France", ranking: 3 },
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
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 2 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 6 },
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
        team1: { flag: "🇨🇦", name: "Canada", ranking: 4 },
        team2: { flag: "🇺🇸", name: "USA", ranking: 5 },
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
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 7 },
        team2: { flag: "🇮🇪", name: "Ireland", ranking: 8 },
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
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 11 },
        team2: { flag: "🇯🇵", name: "Japan", ranking: 13 },
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
        team1: { flag: "🇫🇯", name: "Fiji", ranking: 14 },
        team2: { flag: "🇧🇷", name: "Brazil", ranking: 15 },
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

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
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

  return (
    <div className="womens-world-cup-page">
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
            <span className="tournament-logo">{womensWorldCupData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensWorldCupData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensWorldCupData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensWorldCupData.description}</p>
        </div>
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
            className={`tab-btn ${activeTab === 'legacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('legacy')}
          >
            📜 Legacy
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">World Cup 2025 Fixtures</h2>
            
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
                  
                  <div className="round-indicator">
                    {match.round}
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
            <h2 className="section-title">World Cup 2025 Nations</h2>
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
            <h2 className="section-title">🏟️ Women's World Cup Stadiums</h2>
            <p>Explore the iconic global venues hosting the pinnacle of women's rugby competition</p>
            
            <VenueSelector 
              venues={worldCupStadiums}
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
              <h3>World Cup Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with World Cup ticket packages</li>
                <li>🌍 Global stadiums from London to Auckland</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🏆 World Cup final venue included</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'legacy' && (
          <div className="legacy-section">
            <h2 className="section-title">World Cup Legacy</h2>
            <div className="world-cup-legacy">
              <h3 className="legacy-title">Women's Rugby World Cup Legacy</h3>
              <p>Celebrating the growth and excellence of women's rugby on the global stage</p>
              
              <div className="legacy-stats">
                <div className="legacy-stat">
                  <div className="stat-number">9th</div>
                  <div className="stat-label">Edition</div>
                </div>
                <div className="legacy-stat">
                  <div className="stat-number">16</div>
                  <div className="stat-label">Competing Nations</div>
                </div>
                <div className="legacy-stat">
                  <div className="stat-number">48</div>
                  <div className="stat-label">Total Matches</div>
                </div>
                <div className="legacy-stat">
                  <div className="stat-number">♀</div>
                  <div className="stat-label">Women's Rugby Excellence</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">World Cup Features</h2>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore World Cup venues</div>
            </div>
          </div>
        </div>

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
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ World Cup Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏆</div>
          <div className="ad-text">
            Women's Rugby World Cup 2025 - The Ultimate Women's Rugby Championship!
            Official packages, hospitality, and exclusive World Cup experiences.
          </div>
          <button className="ad-cta">🎫 Get World Cup Tickets</button>
        </div>
      </div>
    </div>
  );
}

export default WomensWorldCup;