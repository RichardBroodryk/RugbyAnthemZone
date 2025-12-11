import React, { useState } from 'react';
import './MensRivalTours.css';
import NavBar from './NavBar';

// Flag Component with real images - EXACT from Autumn Tours
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

  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const rivalToursData = {
    name: "Rival Tours",
    year: "2026", 
    description: "Historic rugby rivalries and traditional test matches between rugby's greatest opponents",
    logo: "⚔️",
    teams: [
      { name: "England", ranking: 5, form: 'WWLWW' },
      { name: "Scotland", ranking: 6, form: 'LWWLW' },
      { name: "Wales", ranking: 8, form: 'LLWLL' },
      { name: "Ireland", ranking: 2, form: 'WWWWW' },
      { name: "France", ranking: 4, form: 'WLWLW' },
      { name: "New Zealand", ranking: 3, form: 'WWWLW' },
      { name: "South Africa", ranking: 1, form: 'WWLWW' },
      { name: "Australia", ranking: 9, form: 'LLLLL' },
      { name: "Argentina", ranking: 7, form: 'WLLWW' }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "England", ranking: 5 },
        team2: { name: "Scotland", ranking: 6 },
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
        team1: { name: "England", ranking: 5 },
        team2: { name: "Wales", ranking: 8 },
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
        team1: { name: "Ireland", ranking: 2 },
        team2: { name: "England", ranking: 5 },
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
        team1: { name: "New Zealand", ranking: 3 },
        team2: { name: "Australia", ranking: 9 },
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
        team1: { name: "South Africa", ranking: 1 },
        team2: { name: "Australia", ranking: 9 },
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
        team1: { name: "Argentina", ranking: 7 },
        team2: { name: "England", ranking: 5 },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Jul 4, 2026",
        time: "20:10",
        status: "upcoming",
        tournament: "Summer Tour",
        capacity: "49,540",
        isRivalry: false,
        trophy: "No Trophy"
      }
    ],
    rivalries: [
      {
        name: "England vs Scotland",
        icon: "🏆",
        description: "The Calcutta Cup - Oldest rugby rivalry dating back to 1871",
        team1: { name: "England", record: "76 Wins" },
        team2: { name: "Scotland", record: "46 Wins" },
        draws: "19",
        currentHolder: "Scotland"
      },
      {
        name: "New Zealand vs Australia",
        icon: "🥝",
        description: "Bledisloe Cup - Trans-Tasman rivalry since 1903",
        team1: { name: "New Zealand", record: "122 Wins" },
        team2: { name: "Australia", record: "45 Wins" },
        draws: "8",
        currentHolder: "New Zealand"
      },
      {
        name: "South Africa vs New Zealand",
        icon: "🌍",
        description: "World's top two rugby nations - ultimate rivalry",
        team1: { name: "South Africa", record: "39 Wins" },
        team2: { name: "New Zealand", record: "60 Wins" },
        draws: "3",
        currentHolder: "South Africa"
      }
    ]
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'Rival Tours',
      userFavorite: match.isFavoriteMatch
    });
  };

  const enhancedTeams = rivalToursData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = rivalToursData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
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

  return (
    <div className="mens-rival-tours-page">
      {/* EXACT Autumn Tours NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
      />

      {/* EXACT Autumn Tours Top Ad Banner */}
      <div className="top-ad-banner">
        ⚔️ Rival Tours 2026 - Experience Rugby's Greatest Rivalries Live! 🎟️
      </div>

      {/* EXACT Autumn Tours Hero Structure */}
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

        {hasFavoriteTeams && (
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

      {/* EXACT Autumn Tours Tab Navigation */}
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
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Rival Tours 2026 Fixtures
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
                  className={`filter-btn ${matchFilter === 'rivalries-only' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('rivalries-only')}
                >
                  Rivalries Only
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
                  
                  {match.trophy !== "No Trophy" && (
                    <div className="match-highlight">
                      🏆 {match.trophy}
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

        {activeTab === 'teams' && (
          <div className="teams-section">
            <h2 className="section-title">Rival Nations</h2>
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
                    <button className="team-btn">⚔️ Rivals</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
                    <span className="rivalry-team-flag">
                      <Flag country={rivalry.team1.name} size="medium" />
                    </span>
                    <div className="rivalry-team-name">{rivalry.team1.name}</div>
                    <div className="rivalry-record">{rivalry.team1.record}</div>
                  </div>
                  <div className="rivalry-vs">VS</div>
                  <div className="rivalry-team">
                    <span className="rivalry-team-flag">
                      <Flag country={rivalry.team2.name} size="medium" />
                    </span>
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

        {/* FEATURES GRID - NO BIG TITLE (Applied Lions Tours correction) */}
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