import React, { useState } from 'react';
import './MensWorldCup.css';
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
      'georgia': 'georgia',
      'romania': 'romania',
      'portugal': 'portugal',
      'uruguay': 'uruguay',
      'tonga': 'tonga'
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

function MensWorldCup({ 
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

  const worldCupData = {
    name: "Rugby World Cup",
    year: "2027",
    description: "The premier international rugby union competition, held every four years in France",
    logo: "🏆",
    matches: [
      {
        id: 1,
        team1: { name: "France", ranking: 4 },
        team2: { name: "New Zealand", ranking: 3 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Sep 8, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "Opening Match",
        capacity: "81,338",
        isFinal: false
      },
      {
        id: 2,
        team1: { name: "England", ranking: 5 },
        team2: { name: "Argentina", ranking: 7 },
        venue: "Stade Vélodrome – Marseille",
        stadium: "Stade Vélodrome",
        date: "Sep 9, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "Pool A",
        capacity: "67,394",
        isFinal: false
      },
      {
        id: 3,
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Scotland", ranking: 6 },
        venue: "Allianz Riviera – Nice",
        stadium: "Allianz Riviera",
        date: "Sep 10, 2027",
        time: "17:45",
        status: "upcoming",
        tournament: "Pool B",
        capacity: "36,178",
        isFinal: false
      },
      {
        id: 4,
        team1: { name: "Ireland", ranking: 2 },
        team2: { name: "Australia", ranking: 9 },
        venue: "Parc Olympique Lyonnais – Lyon",
        stadium: "Parc Olympique Lyonnais",
        date: "Sep 11, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "Pool C",
        capacity: "59,186",
        isFinal: false
      },
      {
        id: 5,
        team1: { name: "Fiji", ranking: 10 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Stade de Bordeaux – Bordeaux",
        stadium: "Stade de Bordeaux",
        date: "Sep 16, 2027",
        time: "17:45",
        status: "upcoming",
        tournament: "Pool D",
        capacity: "42,115",
        isFinal: false
      },
      {
        id: 6,
        team1: { name: "Japan", ranking: 11 },
        team2: { name: "Georgia", ranking: 13 },
        venue: "Stade de la Beaujoire – Nantes",
        stadium: "Stade de la Beaujoire",
        date: "Sep 17, 2027",
        time: "15:00",
        status: "upcoming",
        tournament: "Pool E",
        capacity: "35,322",
        isFinal: false
      },
      {
        id: 7,
        team1: { name: "Italy", ranking: 12 },
        team2: { name: "Uruguay", ranking: 17 },
        venue: "Stade Geoffroy-Guichard – Saint-Étienne",
        stadium: "Stade Geoffroy-Guichard",
        date: "Sep 18, 2027",
        time: "20:00",
        status: "upcoming",
        tournament: "Pool A",
        capacity: "41,965",
        isFinal: false
      },
      {
        id: 8,
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "South Africa", ranking: 1 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Oct 30, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "WORLD CUP FINAL",
        capacity: "81,338",
        isFinal: true
      }
    ],
    teams: [
      { name: "New Zealand", ranking: 3, coreTeam: true },
      { name: "South Africa", ranking: 1, coreTeam: true },
      { name: "England", ranking: 5, coreTeam: true },
      { name: "France", ranking: 4, coreTeam: true },
      { name: "Ireland", ranking: 2, coreTeam: true },
      { name: "Scotland", ranking: 6, coreTeam: true },
      { name: "Wales", ranking: 8, coreTeam: true },
      { name: "Australia", ranking: 9, coreTeam: true },
      { name: "Argentina", ranking: 7, coreTeam: true },
      { name: "Japan", ranking: 11, coreTeam: true },
      { name: "Fiji", ranking: 10, coreTeam: true },
      { name: "Italy", ranking: 12, coreTeam: true },
      { name: "Georgia", ranking: 13, coreTeam: false },
      { name: "Samoa", ranking: 15, coreTeam: false },
      { name: "Tonga", ranking: 16, coreTeam: false },
      { name: "Uruguay", ranking: 17, coreTeam: false },
      { name: "Romania", ranking: 19, coreTeam: false },
      { name: "Portugal", ranking: 20, coreTeam: false },
      { name: "USA", ranking: 18, coreTeam: false },
      { name: "Canada", ranking: 23, coreTeam: false }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 3, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 4, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 5, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 6, team: "Scotland", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 7, team: "Argentina", played: 0, won: 0, drawn: 0, lost: 0, points: 0 },
      { position: 8, team: "Australia", played: 0, won: 0, drawn: 0, lost: 0, points: 0 }
    ],
    groups: [
      {
        name: "Pool A",
        teams: [
          { position: 1, team: "France", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "Q" },
          { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "Q" },
          { position: 3, team: "Italy", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" },
          { position: 4, team: "Uruguay", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" },
          { position: 5, team: "Romania", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" }
        ]
      },
      {
        name: "Pool B",
        teams: [
          { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "Q" },
          { position: 2, team: "Scotland", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "Q" },
          { position: 3, team: "Argentina", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" },
          { position: 4, team: "Tonga", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" },
          { position: 5, team: "Canada", played: 0, won: 0, drawn: 0, lost: 0, pointsFor: 0, pointsAgainst: 0, points: 0, qualification: "" }
        ]
      }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = worldCupData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = worldCupData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = worldCupData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  const enhancedGroups = worldCupData.groups.map(group => ({
    ...group,
    teams: group.teams.map(team => ({
      ...team,
      isFavorite: favoriteTeams.includes(team.team)
    }))
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'featured' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch || match.isFinal)
    : matchFilter === 'upcoming'
    ? enhancedMatches.filter(match => match.status === 'upcoming')
    : enhancedMatches;

  const userWorldCupTeams = enhancedTeams.filter(team => team.isFavorite);

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'Rugby World Cup',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="mens-world-cup-page">
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
        🏆 Rugby World Cup 2027 - France Hosts the Greatest Rugby Tournament! 🇫🇷
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{worldCupData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{worldCupData.name}</h1>
              <p className="tournament-year">{worldCupData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{worldCupData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">20</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">48</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">France</span>
            <span className="stat-label">Host</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userWorldCupTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your World Cup Journey</h3>
              <p>
                Following {userWorldCupTeams.length} team{userWorldCupTeams.length !== 1 ? 's' : ''}:{' '}
                {userWorldCupTeams.map(team => team.name).join(', ')}
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
            className={`tab-btn ${activeTab === 'groups' ? 'active' : ''}`}
            onClick={() => setActiveTab('groups')}
          >
            📊 Groups
          </button>
          <button 
            className={`tab-btn ${activeTab === 'standings' ? 'active' : ''}`}
            onClick={() => setActiveTab('standings')}
          >
            🏅 Standings
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Rugby World Cup 2027 - Key Matches
            </h2>
            
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
                Featured
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'upcoming' ? 'active' : ''}`}
                onClick={() => setMatchFilter('upcoming')}
              >
                Upcoming
              </button>
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isFinal ? 'world-cup-final' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {match.isFavoriteMatch && (
                    <div className="match-highlight">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  {match.isFinal && (
                    <div className="world-cup-final-indicator">
                      🏆 WORLD CUP FINAL
                    </div>
                  )}
                  
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
            <h2 className="section-title">Qualified Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
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
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GROUPS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'groups' && (
          <div className="standings-section">
            <h2 className="section-title">World Cup Pools 2027</h2>
            <div className="standings-table">
              <div className="table-header">
                <span>Pool</span>
                <span>Team</span>
                <span>P</span>
                <span>W</span>
                <span>D</span>
                <span>L</span>
                <span>Pts</span>
              </div>
              {enhancedGroups.flatMap((group, groupIndex) => 
                group.teams.map(team => (
                  <div key={`${group.name}-${team.position}`} className={`table-row ${team.isFavorite ? 'featured-series' : ''}`}>
                    <span className="position">{group.name}</span>
                    <span className="team-name-cell">
                      <Flag country={team.team} size="small" />
                      <div className="team-name-wrapper">
                        <span className="team-name-text">{team.team}</span>
                        {team.isFavorite && <span className="favorite-star">⭐</span>}
                        {team.qualification && <span style={{color: '#d4af37', marginLeft: '8px'}}>Q</span>}
                      </div>
                    </span>
                    <span>{team.played}</span>
                    <span>{team.won}</span>
                    <span>{team.drawn}</span>
                    <span>{team.lost}</span>
                    <span className="points">{team.points}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* STANDINGS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">World Rankings</h2>
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
            <div className="feature-title">World Cup Fantasy</div>
            <div className="feature-description">Build your dream tournament team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Tournament Results</div>
            <div className="feature-description">Live World Cup scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">World Cup Podcasts</div>
            <div className="feature-description">Tournament analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('fixtures')}>
            <div className="feature-icon">🏟️</div>
            <div className="feature-title">French Stadiums</div>
            <div className="feature-description">Explore host venues</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
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
          <button className="quick-btn" onClick={() => setActiveTab('fixtures')}>
            🏟️ French Stadiums
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🎟️</div>
          <div className="ad-text">
            Rugby World Cup 2027 Official Tickets - Register Now for Priority Access!
            Experience the world's biggest rugby event in France.
          </div>
          <button className="ad-cta">🏆 Register Interest</button>
        </div>
      </div>
    </div>
  );
}

export default MensWorldCup;