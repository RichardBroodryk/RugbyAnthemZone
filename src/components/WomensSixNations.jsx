import React, { useState } from 'react';
import './WomensSixNations.css';
import NavBar from './NavBar';

// Flag Component with real images (From Autumn/Rival Tours template)
const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'england': 'england',
      'france': 'france',
      'ireland': 'ireland',
      'italy': 'italy',
      'scotland': 'scotland',
      'wales': 'wales'
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

function WomensSixNations({ 
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

  const womensSixNationsData = {
    name: "Women's Six Nations",
    year: "2026",
    description: "Premier European women's rugby union competition featuring six elite nations",
    logo: "🏆",
    teams: [
      { name: "England", ranking: 1, grandSlam: true },
      { name: "France", ranking: 3, grandSlam: false },
      { name: "Ireland", ranking: 6, grandSlam: false },
      { name: "Italy", ranking: 7, grandSlam: false },
      { name: "Scotland", ranking: 9, grandSlam: false },
      { name: "Wales", ranking: 8, grandSlam: false }
    ],
    matches: [
      {
        id: 1,
        team1: { name: "France", ranking: 3 },
        team2: { name: "Ireland", ranking: 6 },
        venue: "Stade Jean-Bouin – Paris",
        date: "Mar 21, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Round 1",
        capacity: "20,000",
        isRivalry: true
      },
      {
        id: 2,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "Scotland", ranking: 9 },
        venue: "Cardiff Arms Park – Cardiff",
        date: "Mar 22, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Round 1",
        capacity: "12,500",
        isRivalry: true
      },
      {
        id: 3,
        team1: { name: "England", ranking: 1 },
        team2: { name: "Italy", ranking: 7 },
        venue: "Sandy Park – Exeter",
        date: "Mar 23, 2026",
        time: "12:45",
        status: "upcoming",
        tournament: "Round 1",
        capacity: "12,800",
        isRivalry: false
      },
      {
        id: 4,
        team1: { name: "Scotland", ranking: 9 },
        team2: { name: "France", ranking: 3 },
        venue: "Scotstoun Stadium – Glasgow",
        date: "Mar 28, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Round 2",
        capacity: "9,708",
        isRivalry: false
      },
      {
        id: 5,
        team1: { name: "Ireland", ranking: 6 },
        team2: { name: "England", ranking: 1 },
        venue: "Aviva Stadium – Dublin",
        date: "Mar 29, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Round 2",
        capacity: "51,700",
        isRivalry: true
      },
      {
        id: 6,
        team1: { name: "Italy", ranking: 7 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Stadio Sergio Lanfranchi – Parma",
        date: "Mar 30, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Round 2",
        capacity: "5,000",
        isRivalry: false
      },
      {
        id: 7,
        team1: { name: "England", ranking: 1 },
        team2: { name: "Wales", ranking: 8 },
        venue: "Twickenham Stadium – London",
        date: "Apr 4, 2026",
        time: "17:30",
        status: "upcoming",
        tournament: "Round 3",
        capacity: "82,000",
        isRivalry: true
      },
      {
        id: 8,
        team1: { name: "France", ranking: 3 },
        team2: { name: "Italy", ranking: 7 },
        venue: "Stade Jean-Bouin – Paris",
        date: "Apr 5, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "Round 3",
        capacity: "20,000",
        isRivalry: false
      },
      {
        id: 9,
        team1: { name: "Wales", ranking: 8 },
        team2: { name: "France", ranking: 3 },
        venue: "Principality Stadium – Cardiff",
        date: "Apr 12, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Round 4",
        capacity: "74,500",
        isRivalry: true
      },
      {
        id: 10,
        team1: { name: "Scotland", ranking: 9 },
        team2: { name: "England", ranking: 1 },
        venue: "Scotstoun Stadium – Glasgow",
        date: "Apr 13, 2026",
        time: "12:45",
        status: "upcoming",
        tournament: "Round 4",
        capacity: "9,708",
        isRivalry: true
      }
    ],
    standings: [
      { position: 1, team: "England", played: 5, won: 5, drawn: 0, lost: 0, points: 25, pointsFor: 185, pointsAgainst: 52 },
      { position: 2, team: "France", played: 5, won: 4, drawn: 0, lost: 1, points: 20, pointsFor: 162, pointsAgainst: 78 },
      { position: 3, team: "Ireland", played: 5, won: 3, drawn: 0, lost: 2, points: 15, pointsFor: 128, pointsAgainst: 95 },
      { position: 4, team: "Italy", played: 5, won: 2, drawn: 0, lost: 3, points: 10, pointsFor: 98, pointsAgainst: 142 },
      { position: 5, team: "Wales", played: 5, won: 1, drawn: 0, lost: 4, points: 5, pointsFor: 75, pointsAgainst: 168 },
      { position: 6, team: "Scotland", played: 5, won: 0, drawn: 0, lost: 5, points: 0, pointsFor: 58, pointsAgainst: 171 }
    ]
  };

  // Enhanced data with favorite status
  const enhancedTeams = womensSixNationsData.teams.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.name)
  }));

  const enhancedMatches = womensSixNationsData.matches.map(match => ({
    ...match,
    isFavoriteMatch: favoriteTeams.includes(match.team1.name) || favoriteTeams.includes(match.team2.name),
    favoriteTeamsInvolved: [match.team1.name, match.team2.name].filter(team => favoriteTeams.includes(team))
  }));

  const enhancedStandings = womensSixNationsData.standings.map(team => ({
    ...team,
    isFavorite: favoriteTeams.includes(team.team)
  }));

  // Filter matches based on user selection
  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'rivalry'
    ? enhancedMatches.filter(match => match.isRivalry)
    : enhancedMatches;

  const userSixNationsTeams = enhancedTeams.filter(team => team.isFavorite);

  const getFeaturedPlayer = (teamName) => {
    const players = {
      "England": { name: "Marlie Packer", position: "Flanker", fact: "England captain with 90+ caps" },
      "France": { name: "Caroline Drouin", position: "Fly-half", fact: "Creative playmaker and goal-kicker" },
      "Ireland": { name: "Sam Monaghan", position: "Lock", fact: "Physical presence in second row" },
      "Italy": { name: "Beatrice Rigoni", position: "Centre", fact: "Key playmaker in midfield" },
      "Scotland": { name: "Helen Nelson", position: "Centre", fact: "Versatile back and goal-kicker" },
      "Wales": { name: "Jasmine Joyce", position: "Wing", fact: "Olympic sevens star and try-scorer" }
    };
    return players[teamName];
  };

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: "Women's Six Nations",
      userFavorite: match.isFavoriteMatch
    });
  };

  return (
    <div className="womens-six-nations-page">
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
        🏆 Women's Six Nations 2026 - Premier European Women's Rugby! ♀
      </div>

      {/* EXACT Autumn/Rival Tours Hero Structure */}
      <header className="tournament-hero">
        <div className="hero-content">
          <div className="tournament-badge">
            <span className="tournament-logo">{womensSixNationsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">
                {womensSixNationsData.name}
                <span className="womens-rugby-badge">WOMEN'S RUGBY</span>
              </h1>
              <p className="tournament-year">{womensSixNationsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{womensSixNationsData.description}</p>
        </div>
        <div className="hero-stats">
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Nations</span>
          </div>
          {/* FIXED: BLACK TEXT FOR READABILITY */}
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Matches</span>
          </div>
          {/* FIXED: BLACK TEXT AND REMOVED FEMALE ICON */}
          <div className="stat">
            <span className="stat-number">🏆</span> {/* Changed from ♀ to 🏆 */}
            <span className="stat-label">Six Nations</span> {/* Changed from "Women's Rugby" to "Six Nations" */}
          </div>
        </div>

        {/* PERSONALIZATION BANNER - Autumn/Rival Tours pattern */}
        {hasFavoriteTeams && userSixNationsTeams.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">🏆</div>
            <div className="banner-content">
              <h3>Your Six Nations Journey</h3>
              <p>
                Following {userSixNationsTeams.length} women's team{userSixNationsTeams.length !== 1 ? 's' : ''}:{' '}
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
        </div>
      </nav>

      <main className="tournament-main">
        {/* FIXTURES TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'fixtures' && (
          <div className="fixtures-section">
            <h2 className="section-title centered-fixtures-title">
              Women's Six Nations 2026
            </h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'rivalry' ? 'active' : ''}`}
                onClick={() => setMatchFilter('rivalry')}
              >
                Rivalry Matches
              </button>
              {hasFavoriteTeams && (
                <button 
                  className={`filter-btn ${matchFilter === 'my-teams' ? 'active' : ''}`}
                  onClick={() => setMatchFilter('my-teams')}
                >
                  My Teams
                </button>
              )}
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isRivalry ? 'featured-series' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  {/* SIX NATIONS RIVALRY INDICATOR */}
                  {match.isRivalry && (
                    <div className="six-nations-rivalry">
                      ⚔️ SIX NATIONS RIVALRY
                    </div>
                  )}
                  
                  {/* MATCH HIGHLIGHT FOR FAVORITE TEAMS */}
                  {match.isFavoriteMatch && (
                    <div className="six-nations-rivalry">
                      ⭐ Features {match.favoriteTeamsInvolved.join(' & ')}
                    </div>
                  )}
                  
                  {/* STATUS BADGE - POSITIONED ON LEFT (FIXED) */}
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
            <h2 className="section-title">Six Nations Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => {
                const featuredPlayer = getFeaturedPlayer(team.name);
                return (
                  <div key={index} className={`nation-card ${team.grandSlam ? 'featured-series' : ''}`}>
                    <div className="nation-flag">
                      <Flag country={team.name} size="large" />
                    </div>
                    <h3 className="nation-name">{team.name}</h3>
                    <span className="world-ranking">Rank: #{team.ranking}</span>
                    {team.grandSlam && (
                      <div className="six-nations-rivalry" style={{marginTop: '0.5rem'}}>
                        Grand Slam Champions
                      </div>
                    )}
                    
                    {featuredPlayer && (
                      <div style={{marginTop: '0.5rem', fontSize: '0.8rem', color: '#666'}}>
                        <strong>⭐ {featuredPlayer.name}</strong>
                        <div>{featuredPlayer.position}</div>
                        <div style={{fontSize: '0.7rem', marginTop: '0.2rem'}}>{featuredPlayer.fact}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STANDINGS TAB - Autumn/Rival Tours pattern */}
        {activeTab === 'standings' && (
          <div className="standings-section">
            <h2 className="section-title">Women's Six Nations Standings</h2>
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

        {/* FEATURES GRID - NO BIG TITLE (Lions Tours correction) */}
        <div className="features-grid">
          <div className="feature-card" onClick={onNavigateToFantasy}>
            <div className="feature-icon">🏅</div>
            <div className="feature-title">Six Nations Fantasy</div>
            <div className="feature-description">Build your dream women's team</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToResults}>
            <div className="feature-icon">📈</div>
            <div className="feature-title">Live Results</div>
            <div className="feature-description">Real-time women's scores</div>
          </div>
          
          <div className="feature-card" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <div className="feature-title">Women's Podcasts</div>
            <div className="feature-description">Six Nations analysis</div>
          </div>
          
          <div className="feature-card" onClick={() => setActiveTab('fixtures')}>
            <div className="feature-icon">🏆</div>
            <div className="feature-title">Six Nations</div>
            <div className="feature-description">Premier women's rugby</div>
          </div>
        </div>

        {/* QUICK ACTIONS - Autumn/Rival Tours pattern */}
        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Six Nations Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tournament Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Women's Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('fixtures')}>
            🏆 Six Nations
          </button>
        </div>
      </main>

      {/* BOTTOM AD BANNER - Autumn/Rival Tours pattern */}
      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🏆</div>
          <div className="ad-text">
            Support Women's Six Nations Rugby! Official Merchandise & Hospitality 2026.
            Be part of Europe's premier women's rugby tournament.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensSixNations;