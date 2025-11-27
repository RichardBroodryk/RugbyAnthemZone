import React, { useState } from 'react';
import './MensWorldCup.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

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
  const [selectedVenue, setSelectedVenue] = useState('Stade de France');

  // Rugby World Cup 2027 French stadiums
  const worldCupStadiums = [
    'Stade de France',
    'Stade Vélodrome',
    'Allianz Riviera',
    'Parc Olympique Lyonnais',
    'Stade de Bordeaux',
    'Stade de la Beaujoire',
    'Stade Geoffroy-Guichard',
    'Stade Pierre-Mauroy'
  ];

  // Get user's favorite teams for personalization
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const worldCupData = {
    name: "Rugby World Cup",
    year: "2027",
    description: "The premier international rugby union competition, held every four years",
    logo: "🏆",
    teams: [
      { flag: "🇳🇿", name: "New Zealand", ranking: 3, form: 'WWWLW', isFavorite: false },
      { flag: "🇿🇦", name: "South Africa", ranking: 1, form: 'WWLWW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW', isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 4, form: 'WLWLW', isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', isFavorite: false },
      { flag: "🇦🇺", name: "Australia", ranking: 9, form: 'LLLLL', isFavorite: false },
      { flag: "🇦🇷", name: "Argentina", ranking: 7, form: 'WLLWW', isFavorite: false },
      { flag: "🇯🇵", name: "Japan", ranking: 11, form: 'LWWLL', isFavorite: false },
      { flag: "🇫🇯", name: "Fiji", ranking: 10, form: 'WLWWW', isFavorite: false },
      { flag: "🇮🇹", name: "Italy", ranking: 12, form: 'LLLLW', isFavorite: false },
      { flag: "🇬🇪", name: "Georgia", ranking: 13, form: 'WWWWL', isFavorite: false },
      { flag: "🇼🇸", name: "Samoa", ranking: 15, form: 'WLWLW', isFavorite: false },
      { flag: "🇹🇴", name: "Tonga", ranking: 16, form: 'LLWLL', isFavorite: false },
      { flag: "🇺🇾", name: "Uruguay", ranking: 17, form: 'WLLWL', isFavorite: false },
      { flag: "🇷🇴", name: "Romania", ranking: 19, form: 'LLLWL', isFavorite: false },
      { flag: "🇵🇹", name: "Portugal", ranking: 20, form: 'WLWLL', isFavorite: false },
      { flag: "🇺🇸", name: "USA", ranking: 18, form: 'LLLLW', isFavorite: false },
      { flag: "🇨🇦", name: "Canada", ranking: 23, form: 'LLWLL', isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇷", name: "France", ranking: 4 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "Stade de France – Paris",
        stadium: "Stade de France",
        date: "Sep 8, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "World Cup Opening Match",
        capacity: "81,338",
        isFinal: false
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        team2: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        venue: "Stade Vélodrome – Marseille",
        stadium: "Stade Vélodrome",
        date: "Sep 9, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "World Cup Pool A",
        capacity: "67,394",
        isFinal: false
      },
      {
        id: 3,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Allianz Riviera – Nice",
        stadium: "Allianz Riviera",
        date: "Sep 10, 2027",
        time: "17:45",
        status: "upcoming",
        tournament: "World Cup Pool B",
        capacity: "36,178",
        isFinal: false
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Parc Olympique Lyonnais – Lyon",
        stadium: "Parc Olympique Lyonnais",
        date: "Sep 11, 2027",
        time: "21:00",
        status: "upcoming",
        tournament: "World Cup Pool C",
        capacity: "59,186",
        isFinal: false
      },
      {
        id: 5,
        team1: { flag: "🇫🇯", name: "Fiji", ranking: 10 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Stade de Bordeaux – Bordeaux",
        stadium: "Stade de Bordeaux",
        date: "Sep 16, 2027",
        time: "17:45",
        status: "upcoming",
        tournament: "World Cup Pool D",
        capacity: "42,115",
        isFinal: false
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan", ranking: 11 },
        team2: { flag: "🇬🇪", name: "Georgia", ranking: 13 },
        venue: "Stade de la Beaujoire – Nantes",
        stadium: "Stade de la Beaujoire",
        date: "Sep 17, 2027",
        time: "15:00",
        status: "upcoming",
        tournament: "World Cup Pool E",
        capacity: "35,322",
        isFinal: false
      },
      {
        id: 7,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 12 },
        team2: { flag: "🇺🇾", name: "Uruguay", ranking: 17 },
        venue: "Stade Geoffroy-Guichard – Saint-Étienne",
        stadium: "Stade Geoffroy-Guichard",
        date: "Sep 18, 2027",
        time: "20:00",
        status: "upcoming",
        tournament: "World Cup Pool A",
        capacity: "41,965",
        isFinal: false
      },
      {
        id: 8,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
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
          { position: 1, team: "France", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 2, team: "New Zealand", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 3, team: "Italy", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 4, team: "Uruguay", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 5, team: "Romania", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" }
        ]
      },
      {
        name: "Pool B",
        teams: [
          { position: 1, team: "South Africa", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 2, team: "Scotland", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 3, team: "Argentina", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 4, team: "Tonga", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 5, team: "Canada", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" }
        ]
      },
      {
        name: "Pool C",
        teams: [
          { position: 1, team: "Ireland", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 2, team: "Australia", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 3, team: "Fiji", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 4, team: "Portugal", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 5, team: "USA", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" }
        ]
      },
      {
        name: "Pool D",
        teams: [
          { position: 1, team: "England", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 2, team: "Wales", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "Q" },
          { position: 3, team: "Japan", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 4, team: "Georgia", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" },
          { position: 5, team: "Samoa", played: 0, won: 0, drawn: 0, lost: 0, points: 0, pointsFor: 0, pointsAgainst: 0, qualification: "" }
        ]
      }
    ]
  };

  // Handle seat selection for stadium maps
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Add favorite status to teams
  const enhancedTeams = worldCupData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  // Add favorite status to matches
  const enhancedMatches = worldCupData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  // Add favorite status to standings
  const enhancedStandings = worldCupData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Add favorite status to group teams
  const enhancedGroups = worldCupData.groups.map(group => ({
    ...group,
    teams: group.teams.map(team => ({
      ...team,
      isFavorite: favoriteTeams.includes(team.team)
    }))
  }));

  // Get user's World Cup teams
  const userWorldCupTeams = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Rugby World Cup',
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="mens-world-cup-page">
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

        {hasFavoriteTeams && userWorldCupTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your World Cup Experience</h3>
              <p>
                Following {userWorldCupTeams.length} team{userWorldCupTeams.length !== 1 ? 's' : ''}:{' '}
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
            <h2 className="section-title">World Cup 2027 Matches</h2>
            <div className="matches-grid">
              {enhancedMatches.map(match => (
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
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className={`team ${favoriteTeams.includes(match.team1.name) ? 'favorite' : ''}`}>
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                      {favoriteTeams.includes(match.team1.name) && <span className="favorite-indicator">❤️</span>}
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className={`team ${favoriteTeams.includes(match.team2.name) ? 'favorite' : ''}`}>
                      {favoriteTeams.includes(match.team2.name) && <span className="favorite-indicator">❤️</span>}
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
            <h2 className="section-title">Qualified Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.isFavorite ? 'favorite-team' : ''}`}>
                  {team.isFavorite && <div className="favorite-badge">❤️ YOUR TEAM</div>}
                  
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

        {activeTab === 'groups' && (
          <div className="groups-section">
            <h2 className="section-title">World Cup Pools</h2>
            {enhancedGroups.map((group, index) => (
              <div key={index} className="group-card">
                <div className="group-header">
                  <h3 className="group-name">{group.name}</h3>
                </div>
                <div className="group-table">
                  <div className="group-table-header">
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
                  {group.teams.map(team => (
                    <div key={team.position} className={`group-table-row ${team.isFavorite ? 'favorite-team' : ''}`}>
                      <span className="position">{team.position}</span>
                      <span className="team-name">
                        {team.qualification && <span className="qualification-spot">Q</span>}
                        {team.team}
                        {team.isFavorite && <span className="favorite-indicator"> ❤️</span>}
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
            ))}
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
              {enhancedStandings.map(team => (
                <div key={team.position} className={`table-row ${team.isFavorite ? 'favorite-team' : ''}`}>
                  <span className="position">{team.position}</span>
                  <span className="team-name">
                    {team.team} 
                    {team.isFavorite && <span className="favorite-indicator"> ❤️</span>}
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
            <h2 className="section-title">🏟️ Rugby World Cup 2027 Stadiums</h2>
            <p>Explore the iconic French venues that will host the world's biggest rugby tournament</p>
            
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
                <li>🇫🇷 All French host cities and venues</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🏆 Trophy presentation areas highlighted</li>
              </ul>
            </div>

            <div className="stadium-quick-facts">
              <h3>World Cup 2027 Stadiums Quick Facts:</h3>
              <div className="facts-grid">
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade de France</div>
                  <div className="fact-desc">Main venue in Paris - Opening match & Final</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade Vélodrome</div>
                  <div className="fact-desc">Marseille's iconic stadium - 67,394 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Parc Olympique Lyonnais</div>
                  <div className="fact-desc">Lyon's modern stadium - 59,186 capacity</div>
                </div>
                <div className="fact-card">
                  <div className="fact-icon">🇫🇷</div>
                  <div className="fact-title">Stade de Bordeaux</div>
                  <div className="fact-desc">Bordeaux's new stadium - 42,115 capacity</div>
                </div>
              </div>
            </div>

            <div className="worldcup-atmosphere">
              <h3>🎪 Rugby World Cup Atmosphere</h3>
              <div className="atmosphere-features">
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇫🇷</div>
                  <div className="feature-details">
                    <h4>Stade de France - Paris</h4>
                    <p>Electric atmosphere for opening ceremony and final with global rugby fans</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇫🇷</div>
                  <div className="feature-details">
                    <h4>Stade Vélodrome - Marseille</h4>
                    <p>Passionate Mediterranean atmosphere with vibrant local support</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇫🇷</div>
                  <div className="feature-details">
                    <h4>Parc Olympique Lyonnais - Lyon</h4>
                    <p>Modern stadium with excellent facilities and passionate French support</p>
                  </div>
                </div>
                <div className="atmosphere-feature">
                  <div className="feature-icon">🇫🇷</div>
                  <div className="feature-details">
                    <h4>Stade de Bordeaux - Bordeaux</h4>
                    <p>Beautiful wine region stadium with sophisticated rugby atmosphere</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="travel-info">
              <h3>✈️ World Cup 2027 Travel Guide</h3>
              <div className="travel-tips">
                <div className="travel-tip">
                  <strong>Paris (Stade de France):</strong> RER B line direct to stadium
                </div>
                <div className="travel-tip">
                  <strong>Marseille (Stade Vélodrome):</strong> Metro Line 2 to Rond-point du Prado
                </div>
                <div className="travel-tip">
                  <strong>Lyon (Parc Olympique):</strong> Tram T7 direct to stadium
                </div>
                <div className="travel-tip">
                  <strong>Bordeaux (Stade de Bordeaux):</strong> Tram C line to Parc des Expositions
                </div>
                <div className="travel-tip">
                  <strong>Nice (Allianz Riviera):</strong> Tram T2 line direct to stadium
                </div>
                <div className="travel-tip">
                  <strong>Nantes (Stade de la Beaujoire):</strong> Tram 1 line to Beaujoire station
                </div>
              </div>
            </div>

            <div className="historical-facts">
              <h3>📜 Rugby World Cup Historical Facts</h3>
              <div className="facts-timeline">
                <div className="fact-item">
                  <div className="fact-year">1987</div>
                  <div className="fact-details">
                    <strong>First Rugby World Cup:</strong> Hosted by Australia and New Zealand, won by New Zealand
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">1995</div>
                  <div className="fact-details">
                    <strong>Iconic Final:</strong> South Africa wins on home soil after apartheid era
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">2007</div>
                  <div className="fact-details">
                    <strong>France Hosts:</strong> South Africa wins their second World Cup in France
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-year">2023</div>
                  <div className="fact-details">
                    <strong>Most Recent:</strong> South Africa wins record fourth title in France
                  </div>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">French Stadiums</div>
              <div className="feature-description">Explore host venues</div>
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
            🏟️ French Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🎟️</div>
          <div className="ad-text">
            Rugby World Cup 2027 Official Tickets - Register Now for Priority Access!
            Don't miss the world's biggest rugby event in France.
          </div>
          <button className="ad-cta">🏆 Register Interest</button>
        </div>
      </div>
    </div>
  );
}

export default MensWorldCup;