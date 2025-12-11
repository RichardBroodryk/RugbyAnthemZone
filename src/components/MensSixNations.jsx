import React, { useState } from 'react';
import './MensSixNations.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'england': 'england',
      'ireland': 'ireland',
      'france': 'france',
      'scotland': 'scotland',
      'wales': 'wales',
      'italy': 'italy'
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

function MensSixNations({ 
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

  const sixNationsData = {
    name: "Six Nations Championship",
    year: "2026",
    description: "Europe's premier rugby union competition featuring six nations in annual battle for championship glory",
    logo: "🏆",
    teams: [
      { name: "England", ranking: 5, form: 'WWLWW', grandSlam: true },
      { name: "Ireland", ranking: 2, form: 'WWWWW', grandSlam: false },
      { name: "France", ranking: 4, form: 'WLWLW', grandSlam: false },
      { name: "Scotland", ranking: 6, form: 'LWWLW', grandSlam: false },
      { name: "Wales", ranking: 8, form: 'LLWLL', grandSlam: false },
      { name: "Italy", ranking: 12, form: 'LLLLW', grandSlam: false }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "France", ranking: 4 },
        team2: { name: "Ireland", ranking: 2 },
        venue: "Stade de France – Paris",
        date: "Feb 1, 2026",
        time: "21:00",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "81,338",
        isCalcuttaCup: false
      },
      {
        id: 2,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "Scotland", ranking: 6 },
        venue: "Principality Stadium – Cardiff",
        date: "Feb 1, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "74,500",
        isCalcuttaCup: false
      },
      {
        id: 3,
        team1: { name: "England", ranking: 5 },
        team2: { name: "Italy", ranking: 12 },
        venue: "Twickenham Stadium – London",
        date: "Feb 2, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 1",
        capacity: "82,000",
        isCalcuttaCup: false
      },
      {
        id: 4,
        team1: { name: "Scotland", ranking: 6 },
        team2: { name: "England", ranking: 5 },
        venue: "Murrayfield – Edinburgh",
        date: "Feb 8, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 2 - CALCUTTA CUP",
        capacity: "67,144",
        isCalcuttaCup: true
      },
      {
        id: 5,
        team1: { name: "Ireland", ranking: 2 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Aviva Stadium – Dublin",
        date: "Feb 8, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 2",
        capacity: "51,700",
        isCalcuttaCup: false
      },
      {
        id: 6,
        team1: { name: "Italy", ranking: 12 },
        team2: { name: "France", ranking: 4 },
        venue: "Stadio Olimpico – Rome",
        date: "Feb 9, 2026",
        time: "16:00",
        status: "upcoming",
        tournament: "Six Nations Round 2",
        capacity: "72,698",
        isCalcuttaCup: false
      },
      {
        id: 7,
        team1: { name: "Ireland", ranking: 2 },
        team2: { name: "England", ranking: 5 },
        venue: "Aviva Stadium – Dublin",
        date: "Feb 22, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "51,700",
        isCalcuttaCup: false
      },
      {
        id: 8,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "France", ranking: 4 },
        venue: "Principality Stadium – Cardiff",
        date: "Feb 22, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "74,500",
        isCalcuttaCup: false
      },
      {
        id: 9,
        team1: { name: "Italy", ranking: 12 },
        team2: { name: "Scotland", ranking: 6 },
        venue: "Stadio Olimpico – Rome",
        date: "Feb 23, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Six Nations Round 3",
        capacity: "72,698",
        isCalcuttaCup: false
      }
    ],
    standings: [
      { position: 1, team: "Ireland", played: 5, won: 4, drawn: 0, lost: 1, points: 20, pointsFor: 158, pointsAgainst: 87 },
      { position: 2, team: "France", played: 5, won: 4, drawn: 0, lost: 1, points: 18, pointsFor: 142, pointsAgainst: 105 },
      { position: 3, team: "England", played: 5, won: 3, drawn: 0, lost: 2, points: 14, pointsFor: 120, pointsAgainst: 115 },
      { position: 4, team: "Scotland", played: 5, won: 2, drawn: 0, lost: 3, points: 12, pointsFor: 98, pointsAgainst: 125 },
      { position: 5, team: "Wales", played: 5, won: 1, drawn: 0, lost: 4, points: 6, pointsFor: 85, pointsAgainst: 148 },
      { position: 6, team: "Italy", played: 5, won: 1, drawn: 0, lost: 4, points: 4, pointsFor: 78, pointsAgainst: 151 }
    ],
    trophies: [
      {
        name: "Championship Trophy",
        icon: "🏆",
        description: "Awarded to the overall winner of the Six Nations",
        currentHolder: "Ireland"
      },
      {
        name: "Calcutta Cup",
        icon: "🥛",
        description: "Contested between England and Scotland",
        currentHolder: "Scotland"
      },
      {
        name: "Millennium Trophy",
        icon: "🍀",
        description: "Contested between England and Ireland", 
        currentHolder: "Ireland"
      },
      {
        name: "Giuseppe Garibaldi Trophy",
        icon: "🇮🇹",
        description: "Contested between France and Italy",
        currentHolder: "France"
      }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = sixNationsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = sixNationsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name)
  }));

  const enhancedTrophies = sixNationsData.trophies.map(trophy => ({
    ...trophy,
    isFavorite: favoriteTeams.includes(trophy.currentHolder)
  }));

  const enhancedStandings = sixNationsData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : enhancedMatches;

  const userSixNationsTeams = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Six Nations'
    });
  };

  return (
    <div className="mens-six-nations-page">
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
        🏆 Six Nations Championship 2026 - Europe's Premier Rugby Competition!
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{sixNationsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{sixNationsData.name}</h1>
              <p className="tournament-year">{sixNationsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{sixNationsData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">🏆</span>
            <span className="stat-label">European Rugby</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userSixNationsTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Six Nations Experience</h3>
              <p>
                Following {userSixNationsTeams.length} team{userSixNationsTeams.length !== 1 ? 's' : ''}:{' '}
                {userSixNationsTeams.map(team => team.name).join(', ')}
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
              Six Nations Championship 2026
            </h2>
            
            {/* MATCH FILTERS */}
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
                  
                  {match.isCalcuttaCup && (
                    <div className="calcutta-cup-highlight">
                      🏆 CALCUTTA CUP
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
            <h2 className="section-title">Six Nations Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.grandSlam ? 'featured-series' : ''}`}>
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
            <h2 className="section-title">Six Nations Trophies</h2>
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
            <div className="feature-title">Six Nations Fantasy</div>
            <div className="feature-description">Build your dream championship team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time championship scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Podcasts</div>
            <div className="feature-description">European rugby analysis</div>
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
            🏅 Six Nations Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Championship Standings
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Six Nations Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('trophies')}>
            🏆 Championship Trophies
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🎟️</div>
          <div className="ad-text">
            Six Nations 2026 Hospitality Packages - Experience Rugby's Greatest Championship in Style!
            Official corporate hospitality now available.
          </div>
          <button className="ad-cta">🏰 Book Hospitality</button>
        </div>
      </div>
    </div>
  );
}

export default MensSixNations;