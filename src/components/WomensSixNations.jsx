import React, { useState } from 'react';
import './WomensSixNations.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage';
import VenueSelector from './VenueSelector';

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
  const [selectedVenue, setSelectedVenue] = useState('Twickenham Stadium');
  
  const womensSixNationsStadiums = [
    'Twickenham Stadium',
    'Cardiff Arms Park',
    'Scotstoun Stadium',
    'Aviva Stadium',
    'Stade Jean-Bouin',
    'Stadio Sergio Lanfranchi',
    'Sandy Park',
    'Principality Stadium'
  ];

  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const womensSixNationsData = {
    name: "Women's Six Nations",
    year: "2026",
    description: "Premier European women's rugby union competition featuring six elite nations",
    logo: "🏆",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1, form: 'WWWWW', grandSlam: true, isFavorite: false },
      { flag: "🇫🇷", name: "France", ranking: 3, form: 'WLWLW', grandSlam: false, isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 6, form: 'WWLWW', grandSlam: false, isFavorite: false },
      { flag: "🇮🇹", name: "Italy", ranking: 7, form: 'LLLLW', grandSlam: false, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9, form: 'LWWLW', grandSlam: false, isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', grandSlam: false, isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇷", name: "France", ranking: 3 },
        team2: { flag: "🇮🇪", name: "Ireland", ranking: 6 },
        venue: "Stade Jean-Bouin – Paris",
        stadium: "Stade Jean-Bouin",
        date: "Mar 21, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 1",
        capacity: "20,000",
        isRivalry: true
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9 },
        venue: "Cardiff Arms Park – Cardiff",
        stadium: "Cardiff Arms Park",
        date: "Mar 22, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 1",
        capacity: "12,500",
        isRivalry: true
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🇮🇹", name: "Italy", ranking: 7 },
        venue: "Sandy Park – Exeter",
        stadium: "Sandy Park",
        date: "Mar 23, 2026",
        time: "12:45",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 1",
        capacity: "12,800",
        isRivalry: false
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9 },
        team2: { flag: "🇫🇷", name: "France", ranking: 3 },
        venue: "Scotstoun Stadium – Glasgow",
        stadium: "Scotstoun Stadium",
        date: "Mar 28, 2026",
        time: "19:35",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 2",
        capacity: "9,708",
        isRivalry: false
      },
      {
        id: 5,
        team1: { flag: "🇮🇪", name: "Ireland", ranking: 6 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        venue: "Aviva Stadium – Dublin",
        stadium: "Aviva Stadium",
        date: "Mar 29, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 2",
        capacity: "51,700",
        isRivalry: true
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy", ranking: 7 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Stadio Sergio Lanfranchi – Parma",
        stadium: "Stadio Sergio Lanfranchi",
        date: "Mar 30, 2026",
        time: "15:00",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 2",
        capacity: "5,000",
        isRivalry: false
      },
      {
        id: 7,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        venue: "Twickenham Stadium – London",
        stadium: "Twickenham Stadium",
        date: "Apr 4, 2026",
        time: "17:30",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 3",
        capacity: "82,000",
        isRivalry: true
      },
      {
        id: 8,
        team1: { flag: "🇫🇷", name: "France", ranking: 3 },
        team2: { flag: "🇮🇹", name: "Italy", ranking: 7 },
        venue: "Stade Jean-Bouin – Paris",
        stadium: "Stade Jean-Bouin",
        date: "Apr 5, 2026",
        time: "20:00",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 3",
        capacity: "20,000",
        isRivalry: false
      },
      {
        id: 9,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8 },
        team2: { flag: "🇫🇷", name: "France", ranking: 3 },
        venue: "Principality Stadium – Cardiff",
        stadium: "Principality Stadium",
        date: "Apr 12, 2026",
        time: "14:15",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 4",
        capacity: "74,500",
        isRivalry: true
      },
      {
        id: 10,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 9 },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 1 },
        venue: "Scotstoun Stadium – Glasgow",
        stadium: "Scotstoun Stadium",
        date: "Apr 13, 2026",
        time: "12:45",
        status: "upcoming",
        tournament: "Women's Six Nations - Round 4",
        capacity: "9,708",
        isRivalry: true
      }
    ],
    standings: [
      { position: 1, team: "England", played: 5, won: 5, drawn: 0, lost: 0, points: 25, pointsFor: 185, pointsAgainst: 52, isFavorite: false },
      { position: 2, team: "France", played: 5, won: 4, drawn: 0, lost: 1, points: 20, pointsFor: 162, pointsAgainst: 78, isFavorite: false },
      { position: 3, team: "Ireland", played: 5, won: 3, drawn: 0, lost: 2, points: 15, pointsFor: 128, pointsAgainst: 95, isFavorite: false },
      { position: 4, team: "Italy", played: 5, won: 2, drawn: 0, lost: 3, points: 10, pointsFor: 98, pointsAgainst: 142, isFavorite: false },
      { position: 5, team: "Wales", played: 5, won: 1, drawn: 0, lost: 4, points: 5, pointsFor: 75, pointsAgainst: 168, isFavorite: false },
      { position: 6, team: "Scotland", played: 5, won: 0, drawn: 0, lost: 5, points: 0, pointsFor: 58, pointsAgainst: 171, isFavorite: false }
    ],
    trophies: [
      {
        name: "Six Nations Trophy",
        icon: "🏆",
        description: "Awarded to the overall winner of the Women's Six Nations",
        currentHolder: "England"
      },
      {
        name: "Grand Slam",
        icon: "🌟",
        description: "Awarded for winning all five matches",
        currentHolder: "England"
      },
      {
        name: "Triple Crown",
        icon: "👑",
        description: "Awarded to Home Nations team beating the other three",
        currentHolder: "England"
      }
    ]
  };

  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

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

  const filteredMatches = matchFilter === 'my-teams' 
    ? enhancedMatches.filter(match => match.isFavoriteMatch)
    : matchFilter === 'rivalry'
    ? enhancedMatches.filter(match => match.isRivalry)
    : enhancedMatches;

  const userSixNationsTeams = enhancedTeams.filter(team => team.isFavorite);

  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

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
          <div className="stat">
            <span className="stat-number">6</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">Matches</span>
          </div>
          <div className="stat">
            <span className="stat-number">♀</span>
            <span className="stat-label">Women's Rugby</span>
          </div>
        </div>

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
            <h2 className="section-title">Women's Six Nations 2026</h2>
            
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
                  My Teams Only
                </button>
              )}
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isRivalry ? 'womens-rivalry' : ''} ${match.isFavoriteMatch ? 'favorite-match' : ''}`}
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
            <h2 className="section-title">Six Nations Teams</h2>
            <div className="teams-grid">
              {enhancedTeams.map((team, index) => {
                const featuredPlayer = getFeaturedPlayer(team.name);
                return (
                  <div key={index} className={`nation-card ${team.grandSlam ? 'grand-slam' : ''} ${team.isFavorite ? 'favorite-team' : ''}`}>
                    {team.isFavorite && <div className="favorite-badge">♀ YOUR TEAM</div>}
                    
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

                    {team.isFavorite && (
                      <div className="team-highlight">
                        Your women's rugby team
                      </div>
                    )}
                    
                    {featuredPlayer && (
                      <div className="featured-player">
                        <h4>⭐ Star Player</h4>
                        <p><strong>{featuredPlayer.name}</strong> ({featuredPlayer.position})</p>
                        <p>{featuredPlayer.fact}</p>
                      </div>
                    )}
                    
                    <div className="nation-actions">
                      <button className="team-btn">👀 Follow</button>
                      <button className="team-btn">📊 Stats</button>
                      <button className="team-btn">♀ Squad</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
                  <span>{team.pointsFor}</span>
                  <span>{team.pointsAgainst}</span>
                  <span className="points">{team.points}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'trophies' && (
          <div className="trophies-section">
            <h2 className="section-title">Women's Six Nations Trophies</h2>
            {womensSixNationsData.trophies.map((trophy, index) => (
              <div key={index} className="trophy-card">
                <div className="trophy-header">
                  <span className="trophy-icon">{trophy.icon}</span>
                  <div className="trophy-info">
                    <h3>{trophy.name}</h3>
                    <p>{trophy.description}</p>
                  </div>
                </div>
                <div className="trophy-winner">
                  <span>Current Holder:</span>
                  <strong className={favoriteTeams.includes(trophy.currentHolder) ? 'favorite-team-name' : ''}>
                    {trophy.currentHolder}
                    {favoriteTeams.includes(trophy.currentHolder) && <span className="favorite-indicator"> ♀</span>}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">🏟️ Women's Six Nations Stadiums</h2>
            <p>Explore the iconic venues hosting the premier women's rugby tournament in Europe</p>
            
            <VenueSelector 
              venues={womensSixNationsStadiums}
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
              <h3>Women's Six Nations Stadium Features:</h3>
              <ul>
                <li>🎯 Click on stadium sections to explore seating</li>
                <li>🎫 Integrated with Six Nations ticket packages</li>
                <li>♀ Family-friendly women's rugby atmosphere</li>
                <li>📱 Mobile-optimized interactive maps</li>
                <li>🌟 Women's rugby heritage and history</li>
              </ul>
            </div>
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">Women's Six Nations Features</h2>
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
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Stadium Maps</div>
              <div className="feature-description">Explore women's rugby venues</div>
            </div>
          </div>
        </div>

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
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Women's Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">♀</div>
          <div className="ad-text">
            Support Women's Rugby! Official Women's Six Nations Merchandise & Hospitality 2026.
            Be part of the fastest-growing tournament in women's sport.
          </div>
          <button className="ad-cta">🛍️ Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default WomensSixNations;