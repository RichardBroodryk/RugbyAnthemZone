import React, { useState } from 'react';
import './MensAutumnTours.css';
import NavBar from './NavBar';
import StadiumPage from './StadiumPage'; // Make sure this is StadiumPage not StadiumMap
import VenueSelector from './VenueSelector';

// Flag Component with real images
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
      'canada': 'canada'
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

function MensAutumnTours({ 
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

  const autumnToursStadiums = [
    'Twickenham Stadium',
    'Murrayfield', 
    'Principality Stadium',
    'Aviva Stadium',
    'Stade de France',
    'Stadio Olimpico'
  ];

  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const autumnToursData = {
    name: "Autumn Nations Series",
    year: "2026", 
    description: "The premier November test matches featuring Northern vs Southern Hemisphere rugby giants",
    logo: "🍂",
    teams: [
      { name: "England", ranking: 5, form: 'WWLWW' },
      { name: "Scotland", ranking: 6, form: 'LWWLW' },
      { name: "Wales", ranking: 8, form: 'LLWLL' },
      { name: "Ireland", ranking: 2, form: 'WWWWW' },
      { name: "France", ranking: 4, form: 'WLWLW' },
      { name: "Italy", ranking: 12, form: 'LLLLW' },
      { name: "South Africa", ranking: 1, form: 'WWLWW' },
      { name: "New Zealand", ranking: 3, form: 'WWWLW' },
      { name: "Australia", ranking: 9, form: 'LLLLL' },
      { name: "Argentina", ranking: 7, form: 'WLLWW' },
      { name: "Fiji", ranking: 10, form: 'WLWWW' },
      { name: "Japan", ranking: 11, form: 'LWWLL' }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "England", ranking: 5 },
        team2: { name: "New Zealand", ranking: 3 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Nov 7, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "82,000"
      },
      {
        id: 2, 
        team1: { name: "Scotland", ranking: 6 },
        team2: { name: "Australia", ranking: 9 },
        venue: "Murrayfield – Edinburgh",
        stadium: "Murrayfield",
        date: "Nov 8, 2026", 
        time: "14:30",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "67,144"
      },
      {
        id: 3,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "South Africa", ranking: 1 },
        venue: "Principality Stadium – Cardiff", 
        stadium: "Principality Stadium",
        date: "Nov 9, 2026",
        time: "17:15",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "74,500"
      },
      {
        id: 4,
        team1: { name: "Ireland", ranking: 2 },
        team2: { name: "Argentina", ranking: 7 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Nov 14, 2026",
        time: "15:00", 
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "51,700"
      },
      {
        id: 5,
        team1: { name: "France", ranking: 4 },
        team2: { name: "Fiji", ranking: 10 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Nov 15, 2026",
        time: "21:00",
        status: "upcoming",
        tournament: "Autumn Nations Series", 
        capacity: "81,338"
      },
      {
        id: 6,
        team1: { name: "Italy", ranking: 12 },
        team2: { name: "Japan", ranking: 11 },
        venue: "Stadio Olimpico – Rome",
        stadium: "Stadio Olimpico",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Autumn Nations Series",
        capacity: "72,698"
      }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 5, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ]
  };

  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  const enhancedTeams = autumnToursData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = autumnToursData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  const userAutumnToursTeams = enhancedTeams.filter(team => team.isFavorite);

  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'Autumn Nations Series',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="autumn-tours-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
      />

      <div className="top-ad-banner">
        🏉 Autumn Nations Series 2026 - Book Your Tickets Early! 🎟️
      </div>

      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{autumnToursData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{autumnToursData.name}</h1>
              <p className="tournament-year">{autumnToursData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{autumnToursData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">Nov 2026</span>
            <span className="stat-label">Tournament</span>
          </div>
        </div>

        {hasFavoriteTeams && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Autumn Nations Experience</h3>
              <p>
                Following {userAutumnToursTeams.length} team{userAutumnToursTeams.length !== 1 ? 's' : ''}:{' '}
                {userAutumnToursTeams.map(team => team.name).join(', ')}
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
            <h2 className="section-title centered-fixtures-title">
              Autumn Nations Series 2026 Fixtures
            </h2>
            
            {hasFavoriteTeams && (
              <div className="match-filters">
                <button 
                  className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('all')}
                >
                  All Matches
                </button>
                <button 
                  className={`filter-btn ${matchFilter === 'my-teams' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('my-teams')}
                >
                  My Teams Only
                </button>
              </div>
            )}

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
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
                    {/* Team 1 - Left Side */}
                    <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                      <div className="team-row">
                        <div className="team-flag">
                          <Flag country={match.team1.name} size="medium" />
                        </div>
                        <span className="team-ranking">#{match.team1.ranking}</span>
                      </div>
                      <span className="team-name">{match.team1.name}</span>
                    </div>
                    
                    {/* VS Container */}
                    <div className="vs-container">
                      <span className="vs">VS</span>
                      <span className="match-time">{match.time}</span>
                    </div>
                    
                    {/* Team 2 - Right Side */}
                    <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                      <div className="team-row reverse">
                        <div className="team-flag">
                          <Flag country={match.team2.name} size="medium" />
                        </div>
                        <span className="team-ranking">#{match.team2.ranking}</span>
                      </div>
                      <span className="team-name">{match.team2.name}</span>
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
            <h2 className="section-title">Participating Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}>
                  {team.isFavorite && <div className="favorite-badge">⭐ YOUR TEAM</div>}
                  
                  <div className="nation-header">
                    <div className="nation-flag">
                      <Flag country={team.name} size="large" />
                    </div>
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
                  
                  <div className="nation-actions">
                    <button className="team-btn">👀 Follow</button>
                    <button className="team-btn">📊 Stats</button>
                    <button className="team-btn">🏆 History</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
              {autumnToursData.standings.map(team => (
                <div key={team.position} className={`table-row ${favoriteTeams.includes(team.team) ? 'favorite-team' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name-cell">
                    <Flag country={team.team} size="small" />
                    <div className="team-name-wrapper">
                      <span className="team-name-text">{team.team}</span>
                      {favoriteTeams.includes(team.team) && <span className="favorite-star">⭐</span>}
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

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Autumn Nations Stadiums</h2>
            <p>Explore the iconic venues hosting the Autumn Nations Series matches</p>
            
            <VenueSelector 
              venues={autumnToursStadiums}
              selectedVenue={selectedVenue}
              onVenueChange={setSelectedVenue}
            />
            
            {/* IMPORTANT: Pass showNavBar={false} to hide the internal nav bar */}
            <StadiumPage 
              stadium={selectedVenue}
              onSeatSelect={handleSeatSelect}
              interactive={true}
              showInfo={true}
              showNavBar={false}
              onNavigateBack={onNavigateBack}
            />
            
            <div className="stadium-features">
              <h3>Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with ticket purchasing</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🏆 Premium seating areas highlighted</li>
                <li>📍 Facility locations (restrooms, concessions)</li>
              </ul>
            </div>

            <div className="stadium-quick-facts">
              <h3>Autumn Nations Stadiums Quick Facts:</h3>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                  <div className="fact-title">Twickenham</div>
                  <div className="fact-desc">Largest rugby stadium in the world</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade de France</div>
                  <div className="fact-desc">Hosted 1998 FIFA World Cup Final</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🏴󠁧󠁢󠁷󠁬󠁳󠁿</div>
                  <div className="fact-title">Principality Stadium</div>
                  <div className="fact-desc">Retractable roof stadium</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Autumn Nations Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Autumn Nations Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Explore Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏆</div>
          <div className="ad-text">
            Official Rugby World Cup 2027 Tickets - Early Bird Sale Now On! 
            Don't miss your chance to see rugby history in the making.
          </div>
          <button className="ad-cta">🎟️ Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default MensAutumnTours;