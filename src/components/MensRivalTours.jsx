import React, { useState } from 'react';
import './MensRivalTours.css';
import ThemeToggle from './ThemeToggle';

function MensRivalTours({ 
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

  const rivalToursData = {
    name: "Rival Tours",
    year: "2026",
    description: "Historic rugby rivalries and traditional test matches between rugby's greatest opponents",
    logo: "⚔️",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW' },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW' },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW' },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL' },
      { flag: "🇫🇷", name: "France", ranking: 4, form: 'WLWLW' },
      { flag: "🇳🇿", name: "New Zealand", ranking: 3, form: 'WWWLW' },
      { flag: "🇿🇦", name: "South Africa", ranking: 1, form: 'WWLWW' },
      { flag: "🇦🇺", name: "Australia", ranking: 9, form: 'LLLLL' },
      { flag: "🇦🇷", name: "Argentina", ranking: 7, form: 'WLLWW' }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Twickenham Stadium – London",
        date: "Mar 14, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Calcutta Cup",
        capacity: "82,000",
        isRivalry: true,
        trophy: "Calcutta Cup"
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Twickenham Stadium – London",
        date: "Mar 7, 2026",
        time: "16:45",
        status: "upcoming",
        tournament: "Six Nations",
        capacity: "82,000",
        isRivalry: true,
        trophy: "No Trophy"
      },
      {
        id: 3,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Aviva Stadium – Dublin",
        date: "Mar 21, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Six Nations",
        capacity: "51,700",
        isRivalry: true,
        trophy: "Millennium Trophy"
      },
      {
        id: 4,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Eden Park – Auckland",
        date: "Aug 15, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Bledisloe Cup",
        capacity: "48,000",
        isRivalry: true,
        trophy: "Bledisloe Cup"
      },
      {
        id: 5,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        venue: "Ellis Park – Johannesburg",
        date: "Aug 22, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship",
        capacity: "62,567",
        isRivalry: true,
        trophy: "No Trophy"
      },
      {
        id: 6,
        team1: { flag: "🇦🇷", name: "Argentina", ranking: 7 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Jul 4, 2026",
        time: "20:10",
        status: "upcoming",
        tournament: "Summer Tour",
        capacity: "49,540",
        isRivalry: false,
        trophy: "No Trophy"
      },
      {
        id: 7,
        team1: { flag: "🇫🇷", name: "France", ranking: 4 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Stade de France – Paris",
        date: "Mar 28, 2026",
        time: "21:00",
        status: "upcoming",
        tournament: "Six Nations",
        capacity: "81,338",
        isRivalry: true,
        trophy: "Le Crunch"
      },
      {
        id: 8,
        team1: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        team2: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        venue: "FNB Stadium – Johannesburg",
        date: "Aug 29, 2026",
        time: "17:05",
        status: "upcoming",
        tournament: "Rugby Championship",
        capacity: "94,736",
        isRivalry: true,
        trophy: "Freedom Cup"
      },
      {
        id: 9,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6 },
        venue: "Principality Stadium – Cardiff",
        date: "Feb 28, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations",
        capacity: "74,500",
        isRivalry: true,
        trophy: "Doddie Weir Cup"
      },
      {
        id: 10,
        team1: { flag: "🇦🇺", name: "Australia", ranking: 9 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5 },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 11, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "Summer Tour",
        capacity: "52,500",
        isRivalry: true,
        trophy: "Cook Cup"
      },
      {
        id: 11,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 2 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Aviva Stadium – Dublin",
        date: "Feb 14, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Six Nations",
        capacity: "51,700",
        isRivalry: true,
        trophy: "No Trophy"
      },
      {
        id: 12,
        team1: { flag: "🇳🇿", name: "New Zealand", ranking: 3 },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Sep 5, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Rugby Championship",
        capacity: "30,748",
        isRivalry: true,
        trophy: "Freedom Cup"
      }
    ],
    rivalries: [
      {
        name: "England vs Scotland",
        icon: "🏆",
        description: "The Calcutta Cup - Oldest rugby rivalry dating back to 1871",
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", record: "76 Wins" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", record: "46 Wins" },
        draws: "19",
        currentHolder: "Scotland"
      },
      {
        name: "New Zealand vs Australia",
        icon: "🥝",
        description: "Bledisloe Cup - Trans-Tasman rivalry since 1903",
        team1: { flag: "🇳🇿", name: "New Zealand", record: "122 Wins" },
        team2: { flag: "🇦🇺", name: "Australia", record: "45 Wins" },
        draws: "8",
        currentHolder: "New Zealand"
      },
      {
        name: "South Africa vs New Zealand",
        icon: "🌍",
        description: "World's top two rugby nations - ultimate rivalry",
        team1: { flag: "🇿🇦", name: "South Africa", record: "39 Wins" },
        team2: { flag: "🇳🇿", name: "New Zealand", record: "60 Wins" },
        draws: "3",
        currentHolder: "South Africa"
      },
      {
        name: "England vs Wales",
        icon: "🌹",
        description: "Battle of the Roses vs the Dragon since 1881",
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", record: "67 Wins" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", record: "60 Wins" },
        draws: "12",
        currentHolder: "Wales"
      },
      {
        name: "Ireland vs England",
        icon: "☘️",
        description: "Millennium Trophy - Celtic vs English rivalry",
        team1: { flag: "🇮🇪", name: "Ireland", record: "54 Wins" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", record: "80 Wins" },
        draws: "8",
        currentHolder: "Ireland"
      },
      {
        name: "France vs England",
        icon: "🥐",
        description: "Le Crunch - Cross-channel rivalry since 1906",
        team1: { flag: "🇫🇷", name: "France", record: "42 Wins" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", record: "60 Wins" },
        draws: "7",
        currentHolder: "France"
      }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = rivalToursData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = rivalToursData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name)
  }));

  const enhancedRivalries = rivalToursData.rivalries.map(rivalry => ({
    ...rivalry,
    isFavorite: favoriteTeams.includes(rivalry.team1.name) || favoriteTeams.includes(rivalry.team2.name)
  }));

  const filteredMatches = matchFilter === 'rivalries-only' 
    ? enhancedMatches.filter(match => match.isRivalry)
    : enhancedMatches;

  const userRivalNations = enhancedTeams.filter(team => team.isFavorite);

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
      tournament: 'Rival Tours'
    });
  };

  return (
    <div className="mens-rival-tours-page">
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
            <span className="tournament-logo">{rivalToursData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{rivalToursData.name}</h1>
              <p className="tournament-year">{rivalToursData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{rivalToursData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">9</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Rivalries</span>
          </div>
          <div className="stat">
            <span className="stat-number">⚔️</span>
            <span className="stat-label">Historic</span>
          </div>
        </div>

        {/* PERSONALIZATION BANNER */}
        {hasFavoriteTeams && userRivalNations.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Rival Tours Experience</h3>
              <p>
                Following {userRivalNations.length} rival nation{userRivalNations.length !== 1 ? 's' : ''}:{' '}
                {userRivalNations.map(team => team.name).join(', ')}
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
            className={`tab-btn ${activeTab === 'rivalries' ? 'active' : ''}`}
            onClick={() => setActiveTab('rivalries')}
          >
            ⚔️ Rivalries
          </button>
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - BRITISH LIONS STRUCTURE */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title">Historic Rivalry Matches</h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'rivalries-only' ? 'active' : ''}`}
                onClick={() => setMatchFilter('rivalries-only')}
              >
                Rivalries Only
              </button>
            </div>

            {/* MATCHES GRID - NOW WITH 12 MATCH CARDS FOR SCROLLING */}
            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isRivalry ? 'rivalry-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* TROPHY INDICATOR */}
                  {match.trophy !== "No Trophy" && (
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

        {/* TEAMS TAB - BRITISH LIONS STRUCTURE */}
        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Rival Nations</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => (
                <div key={index} className="nation-card">
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
                    <button className="team-btn">⚔️ Rivals</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RIVALRIES TAB */}
        {activeTab === 'rivalries' && (
          <div className="rivalries-section">
            <h2 className="section-title">Historic Rugby Rivalries</h2>
            {enhancedRivalries.map((rivalry, index) => (
              <div key={index} className="rivalry-card">
                <div className="rivalry-header">
                  <span className="rivalry-icon">{rivalry.icon}</span>
                  <div className="rivalry-info">
                    <h3>{rivalry.name}</h3>
                    <p>{rivalry.description}</p>
                  </div>
                </div>
                <div className="rivalry-stats">
                  <div className="rivalry-team">
                    <span className="rivalry-team-flag">{rivalry.team1.flag}</span>
                    <div className="rivalry-team-name">{rivalry.team1.name}</div>
                    <div className="rivalry-record">{rivalry.team1.record}</div>
                  </div>
                  <div className="rivalry-vs">VS</div>
                  <div className="rivalry-team">
                    <span className="rivalry-team-flag">{rivalry.team2.flag}</span>
                    <div className="rivalry-team-name">{rivalry.team2.name}</div>
                    <div className="rivalry-record">{rivalry.team2.record}</div>
                  </div>
                </div>
                <div className="trophy-winner">
                  <span>Current Trophy Holder: </span>
                  <strong>{rivalry.currentHolder}</strong>
                  <span> • Draws: {rivalry.draws}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BRITISH LIONS FEATURE GRID */}
        <div className="features-section">
          <h2 className="section-title">Rival Tours Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">Rivalry Fantasy</div>
              <div className="feature-description">Build your dream rivalry team</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Rivalry Results</div>
              <div className="feature-description">Historic results and analysis</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">Rivalry Podcasts</div>
              <div className="feature-description">Stories from historic clashes</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('rivalries')}>
              <div className="feature-icon">⚔️</div>
              <div className="feature-title">Historic Rivalries</div>
              <div className="feature-description">Explore legendary matchups</div>
            </div>
          </div>
        </div>

        {/* BRITISH LIONS QUICK ACTIONS */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Rivalry Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Rivalry Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Rivalry Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('rivalries')}>
            ⚔️ Historic Rivalries
          </button>
        </div>
      </main>

      {/* BRITISH LIONS BOTTOM AD BANNER */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">⚔️</div>
          <div className="ad-text">
            Experience Rugby's Greatest Rivalries Live! Official Rival Tours Hospitality Packages 2026.
          </div>
          <button className="ad-cta">🎫 Book Experience</button>
        </div>
      </div>
    </div>
  );
}

export default MensRivalTours;