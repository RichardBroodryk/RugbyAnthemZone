import React, { useState } from 'react';
import './MensRugbyChampionship.css';
import ThemeToggle from './ThemeToggle';

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
      { flag: "🇳🇿", name: "New Zealand", ranking: 3, form: 'WWWLW', triNations: true },
      { flag: "🇿🇦", name: "South Africa", ranking: 1, form: 'WWLWW', triNations: true },
      { flag: "🇦🇺", name: "Australia", ranking: 9, form: 'LLLLL', triNations: true },
      { flag: "🇦🇷", name: "Argentina", ranking: 7, form: 'WLLWW', triNations: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Suncorp Stadium – Brisbane",
        date: "Aug 9, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 1",
        capacity: "52,500",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: null
      },
      {
        id: 2,
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Aug 9, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 1",
        capacity: "49,540",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: null
      },
      {
        id: 3,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Eden Park – Auckland",
        date: "Aug 16, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 2 - BLEDISLOE CUP",
        capacity: "50,000",
        isBledisloeCup: true,
        isFreedomCup: false,
        trophy: "Bledisloe Cup"
      },
      {
        id: 4,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        venue: "Ellis Park – Johannesburg",
        date: "Aug 16, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 2",
        capacity: "62,567",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: null
      },
      {
        id: 5,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "ANZ Stadium – Sydney",
        date: "Aug 30, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 3 - BLEDISLOE CUP",
        capacity: "83,500",
        isBledisloeCup: true,
        isFreedomCup: false,
        trophy: "Bledisloe Cup"
      },
      {
        id: 6,
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Estadio Mario Alberto Kempes – Córdoba",
        date: "Aug 30, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 3",
        capacity: "57,000",
        isBledisloeCup: false,
        isFreedomCup: true,
        trophy: "Freedom Cup"
      },
      {
        id: 7,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Sep 13, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 4",
        capacity: "30,748",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: null
      },
      {
        id: 8,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Loftus Versfeld – Pretoria",
        date: "Sep 13, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 4",
        capacity: "51,762",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: "Mandela Challenge Plate"
      },
      {
        id: 9,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        venue: "Perth Stadium – Perth",
        date: "Sep 27, 2026",
        time: "20:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 5",
        capacity: "65,000",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: "Puma Trophy"
      },
      {
        id: 10,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Eden Park – Auckland",
        date: "Sep 27, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship Round 5 - FREEDOM CUP",
        capacity: "50,000",
        isBledisloeCup: false,
        isFreedomCup: true,
        trophy: "Freedom Cup"
      },
      {
        id: 11,
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Oct 4, 2026",
        time: "16:10",
        status: "upcoming",
        tournament: "Rugby Championship Round 6",
        capacity: "49,540",
        isBledisloeCup: false,
        isFreedomCup: false,
        trophy: "Puma Trophy"
      },
      {
        id: 12,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "Ellis Park – Johannesburg",
        date: "Oct 4, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship Round 6 - FREEDOM CUP",
        capacity: "62,567",
        isBledisloeCup: false,
        isFreedomCup: true,
        trophy: "Freedom Cup"
      }
    ],
    standings: [
      { position: 1, team: "South Africa", played: 6, won: 5, drawn: 0, lost: 1, points: 25, tries: 18, pointsFor: 195, pointsAgainst: 112 },
      { position: 2, team: "New Zealand", played: 6, won: 4, drawn: 0, lost: 2, points: 19, tries: 15, pointsFor: 178, pointsAgainst: 145 },
      { position: 3, team: "Argentina", played: 6, won: 2, drawn: 0, lost: 4, points: 9, tries: 8, pointsFor: 120, pointsAgainst: 185 },
      { position: 4, team: "Australia", played: 6, won: 1, drawn: 0, lost: 5, points: 5, tries: 6, pointsFor: 98, pointsAgainst: 149 }
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
      {/* BRITISH LIONS NAVIGATION STRUCTURE */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>
      
      {/* BRITISH LIONS HERO STRUCTURE */}
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

        {/* PERSONALIZATION BANNER */}
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

      {/* BRITISH LIONS TAB NAVIGATION */}
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
        {/* FIXTURES TAB - ALL MATCHES VISIBLE & SCROLLABLE */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">Rugby Championship 2026</h2>
            
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

            {/* SCROLLABLE MATCHES GRID - ALL CARDS VISIBLE */}
            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isBledisloeCup ? 'bledisloe-cup' : ''} ${match.isFreedomCup ? 'freedom-cup' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* TROPHY INDICATOR */}
                  {match.trophy && (
                    <div className="trophy-indicator">
                      🏆 {match.trophy}
                    </div>
                  )}
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className="team">
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">#{match.team1.ranking}</span>
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className="team">
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

        {/* TEAMS TAB - ALL TEAMS VISIBLE & SCROLLABLE */}
        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Rugby Championship Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className={`nation-card ${team.triNations ? 'tri-nations' : ''}`}>
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

        {/* STANDINGS TAB - FULL TABLE VISIBLE & SCROLLABLE */}
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
                <span>T</span>
                <span>PF</span>
                <span>PA</span>
                <span>Pts</span>
              </div>
              {enhancedStandings.map(team => (
                <div key={team.position} className="table-row">
                  <span className="position">{team.position}</span>
                  <span className="team-name">{team.team}</span>
                  <span>{team.played}</span>
                  <span>{team.won}</span>
                  <span>{team.drawn}</span>
                  <span>{team.lost}</span>
                  <span>{team.tries}</span>
                  <span>{team.pointsFor}</span>
                  <span>{team.pointsAgainst}</span>
                  <span className="points">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TROPHIES TAB - ALL TROPHIES VISIBLE & SCROLLABLE */}
        {activeTab === 'trophies' && (
          <div className="trophies-section">
            <h2 className="section-title">Rugby Championship Trophies</h2>
            {enhancedTrophies.map((trophy, index) => (
              <div key={index} className="trophy-card">
                <div className="trophy-header">
                  <span className="trophy-icon">{trophy.icon}</span>
                  <div className="trophy-info">
                    <h3>{trophy.name}</h3>
                    <p>{trophy.description}</p>
                  </div>
                </div>
                <div className="trophy-winner">
                  <span>Current Holder: </span>
                  <strong>{trophy.currentHolder}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BRITISH LIONS FEATURE GRID */}
        <div className="features-section">
          <h2 className="section-title">Championship Features</h2>
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
        </div>

        {/* BRITISH LIONS QUICK ACTIONS */}
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

      {/* BRITISH LIONS BOTTOM AD BANNER */}
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