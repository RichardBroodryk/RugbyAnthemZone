import React, { useState } from 'react';
import './MensRugbyChampionship.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'argentina': 'argentina',
      'australia': 'australia',
      'new zealand': 'new-zealand',
      'south africa': 'south-africa'
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

function MensRugbyChampionship({ 
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

  const rugbyChampionshipData = {
    name: "Rugby Championship",
    year: "2026",
    description: "Southern Hemisphere's premier rugby competition featuring the top four rugby nations",
    logo: "🏉",
    teams: [
      { name: "New Zealand", ranking: 3, form: 'WWWLW', triNations: true },
      { name: "South Africa", ranking: 1, form: 'WWLWW', triNations: true },
      { name: "Australia", ranking: 9, form: 'LLLLL', triNations: true },
      { name: "Argentina", ranking: 7, form: 'WLLWW', triNations: false }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "Australia", ranking: 9 },
        team2: { name: "South Africa", ranking: 1 },
        venue: "Suncorp Stadium – Brisbane",
        date: "Aug 9, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 1",
        capacity: "52,500",
        trophy: null
      },
      {
        id: 2,
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "New Zealand", ranking: 3 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Aug 9, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 1",
        capacity: "49,540",
        trophy: null
      },
      {
        id: 3,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "Australia", ranking: 9 },
        venue: "Eden Park – Auckland",
        date: "Aug 16, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 2 - BLEDISLOE CUP",
        capacity: "50,000",
        trophy: "Bledisloe Cup"
      },
      {
        id: 4,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Argentina", ranking: 7 },
        venue: "Ellis Park – Johannesburg",
        date: "Aug 16, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 2",
        capacity: "62,567",
        trophy: null
      },
      {
        id: 5,
        team1: { name: "Australia", ranking: 9 },
        team2: { name: "New Zealand", ranking: 3 },
        venue: "ANZ Stadium – Sydney",
        date: "Aug 30, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 3 - BLEDISLOE CUP",
        capacity: "83,500",
        trophy: "Bledisloe Cup"
      },
      {
        id: 6,
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "South Africa", ranking: 1 },
        venue: "Estadio Mario Alberto Kempes – Córdoba",
        date: "Aug 30, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 3",
        capacity: "57,000",
        trophy: "Freedom Cup"
      },
      {
        id: 7,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "Argentina", ranking: 7 },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Sep 13, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 4",
        capacity: "30,748",
        trophy: null
      },
      {
        id: 8,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Australia", ranking: 9 },
        venue: "Loftus Versfeld – Pretoria",
        date: "Sep 13, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 4",
        capacity: "51,762",
        trophy: "Mandela Challenge Plate"
      },
      {
        id: 9,
        team1: { name: "Australia", ranking: 9 },
        team2: { name: "Argentina", ranking: 7 },
        venue: "Perth Stadium – Perth",
        date: "Sep 27, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 5",
        capacity: "65,000",
        trophy: "Puma Trophy"
      },
      {
        id: 10,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "South Africa", ranking: 1 },
        venue: "Eden Park – Auckland",
        date: "Sep 27, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 5",
        capacity: "50,000",
        trophy: "Freedom Cup"
      },
      {
        id: 11,
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "Australia", ranking: 9 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Oct 4, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 6",
        capacity: "49,540",
        trophy: "Puma Trophy"
      },
      {
        id: 12,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "New Zealand", ranking: 3 },
        venue: "Ellis Park – Johannesburg",
        date: "Oct 4, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 6",
        capacity: "62,567",
        trophy: "Freedom Cup"
      }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 6, won: 5, drawn: 0, lost: 1, points: 25 },
      { position: 2, team: "New Zealand", played: 6, won: 4, drawn: 0, lost: 2, points: 19 },
      { position: 3, team: "Argentina", played: 6, won: 2, drawn: 0, lost: 4, points: 9 },
      { position: 4, team: "Australia", played: 6, won: 1, drawn: 0, lost: 5, points: 5 }
    ],
    trophies: [
      {
        name: "Rugby Championship Trophy",
        icon: "🏆",
        description: "Awarded to the overall winner of the Rugby Championship",
        currentHolder: "South Africa"
      },
      {
        name: "Bledisloe Cup",
        icon: "🥛",
        description: "Contested between Australia and New Zealand",
        currentHolder: "New Zealand"
      },
      {
        name: "Freedom Cup",
        icon: "🇿🇦",
        description: "Contested between New Zealand and South Africa", 
        currentHolder: "South Africa"
      },
      {
        name: "Mandela Challenge Plate",
        icon: "🦁",
        description: "Contested between Australia and South Africa",
        currentHolder: "South Africa"
      },
      {
        name: "Puma Trophy",
        icon: "🇦🇷",
        description: "Contested between Australia and Argentina",
        currentHolder: "Argentina"
      }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = rugbyChampionshipData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = rugbyChampionshipData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name)
  }));

  const enhancedTrophies = rugbyChampionshipData.trophies.map(trophy => ({
    ...trophy,
    isFavorite: favoriteTeams.includes(trophy.currentHolder)
  }));

  const enhancedStandings = rugbyChampionshipData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'trophy-matches'
    ? enhancedMatches.filter(match => match.trophy)
    : enhancedMatches;

  const userChampionshipTeams = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Rugby Championship'
    });
  };

  return (
    <div className="mens-rugby-championship-page">
      {/* EXACT Autumn/Rival Tours NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
      />

      {/* EXACT Autumn/Rival Tours Top Ad Banner */}
      <div className="top-ad-banner">
        🏉 Rugby Championship 2026 - Southern Hemisphere's Premier Competition!
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{rugbyChampionshipData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{rugbyChampionshipData.name}</h1>
              <p className="tournament-year">{rugbyChampionshipData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{rugbyChampionshipData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Trophies</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userChampionshipTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Rugby Championship</h3>
              <p>
                Following {userChampionshipTeams.length} team{userChampionshipTeams.length !== 1 ? 's' : ''}:{' '}
                {userChampionshipTeams.map(team => team.name).join(', ')}
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
          <button 
            className={`tab-btn ${activeTab === 'trophies' ? 'active' : ''}`}
            onClick={() => setActiveTab('trophies')}
          >
            🏅 Trophies
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Rugby Championship 2026
            </h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'trophy-matches' ? 'active' : ''}`}
                onClick={() => setMatchFilter('trophy-matches')}
              >
                Trophy Matches
              </button>
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
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
                  
                  {match.trophy && (
                    <div className="trophy-highlight">
                      🏆 {match.trophy}
                    </div>
                  )}
                  
                  <div className="match-actions">
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToPPV?.(); }}>
                      📺 Watch
                    </button>
                    <button className="action-btn" onClick={(e) => { e.stopPropagation(); onNavigateToAudio?.(); }}>
                      🔊 Listen
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
            <h2 className="section-title">Rugby Championship Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.triNations ? 'featured-series' : ''}`}>
                  <div className="nation-flag">
                    <Flag country={team.name} size="large" />
                  </div>
                  <h3 className="nation-name">{team.name}</h3>
                  <span className="world-ranking">Rank: #{team.ranking}</span>
                  <div className="form-indicator">
                    {formatForm(team.form)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STANDINGS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">Championship Table</h2>
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

        {/* TROPHIES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'trophies' && (
          <div className="trophies-section">
            <h2 className="section-title">Rugby Championship Trophies</h2>
            <div className="trophies-section">
              {enhancedTrophies.map((trophy, index) => (
                <div key={index} className="trophy-card">
                  <div className="trophy-icon">{trophy.icon}</div>
                  <div className="trophy-info">
                    <h3>{trophy.name}</h3>
                    <p>{trophy.description}</p>
                  </div>
                  <div className="match-highlight" style={{marginTop: '0.5rem'}}>
                    Current Holder: {trophy.currentHolder}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEATURES GRID - NO BIG TITLE (Lions Tours correction) */}
        <div className="features-grid">
          <div className="feature-card" onClick={onNavigateToFantasy}>
            <div className="feature-icon">🏅</div>
            <div className="feature-title">Championship Fantasy</div>
            <div className="feature-description">Build your dream SH team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time championship scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Podcasts</div>
            <div className="feature-description">SH rugby analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('trophies')}>
            <div className="feature-icon">🏆</div>
            <div className="feature-title">Championship Trophies</div>
            <div className="feature-description">Explore legendary cups</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Championship Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Championship Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Championship Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('trophies')}>
            🏆 Championship Trophies
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏉</div>
          <div className="ad-text">
            Southern Hemisphere Rugby Tours 2026 - Experience the Rugby Championship Live!
            Official travel packages to New Zealand, Australia, South Africa & Argentina.
          </div>
          <button className="ad-cta">🌏 Book Tour</button>
        </div>
      </div>
    </div>
  );
}

export default MensRugbyChampionship;