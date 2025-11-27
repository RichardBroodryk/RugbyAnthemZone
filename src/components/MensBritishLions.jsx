import React, { useState } from 'react';
import './MensBritishLions.css';
import ThemeToggle from './ThemeToggle';
import StadiumPage from './StadiumPage'; // CHANGED: StadiumMap to StadiumPage
import VenueSelector from './VenueSelector';

function MensBritishLions({ 
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
  const [selectedVenue, setSelectedVenue] = useState('FNB Stadium');
  
  // KEEP LIONS-SPECIFIC STADIUMS
  const lionsStadiums = [
    'FNB Stadium',
    'Cape Town Stadium', 
    'Ellis Park',
    'Kings Park'
  ];

  // KEEP LIONS-SPECIFIC DATA STRUCTURE
  const favoriteTeams = userPreferences?.favoriteTeams || [];
  const hasFavoriteTeams = favoriteTeams.length > 0;

  const britishLionsData = {
    name: "British & Irish Lions",
    year: "2025",
    description: "The legendary touring team featuring the best players from England, Ireland, Scotland, and Wales",
    logo: "🦁",
    homeNations: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", ranking: 5, form: 'WWLWW', isFavorite: false },
      { flag: "🇮🇪", name: "Ireland", ranking: 2, form: 'WWWWW', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", ranking: 8, form: 'LLWLL', isFavorite: false },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", ranking: 6, form: 'LWWLW', isFavorite: false }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "FNB Stadium – Johannesburg",
        stadium: "FNB Stadium",
        date: "Jul 19, 2025",
        time: "17:05",
        status: "upcoming",
        tournament: "First Test",
        capacity: "94,736",
        isTestMatch: true,
        series: "Test Series"
      },
      {
        id: 2,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Cape Town Stadium – Cape Town",
        stadium: "Cape Town Stadium",
        date: "Jul 26, 2025",
        time: "17:05",
        status: "upcoming",
        tournament: "Second Test",
        capacity: "55,000",
        isTestMatch: true,
        series: "Test Series"
      },
      {
        id: 3,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "South Africa", ranking: 1 },
        venue: "Ellis Park – Johannesburg",
        stadium: "Ellis Park",
        date: "Aug 2, 2025",
        time: "17:05",
        status: "upcoming",
        tournament: "Third Test",
        capacity: "62,567",
        isTestMatch: true,
        series: "Test Series"
      },
      {
        id: 4,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "South Africa A", ranking: "N/A" },
        venue: "Kings Park – Durban",
        stadium: "Kings Park",
        date: "Jul 10, 2025",
        time: "19:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "52,000",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 5,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "Stormers", ranking: "N/A" },
        venue: "Cape Town Stadium – Cape Town",
        stadium: "Cape Town Stadium",
        date: "Jul 6, 2025",
        time: "15:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "55,000",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 6,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "Sharks", ranking: "N/A" },
        venue: "Kings Park – Durban",
        stadium: "Kings Park",
        date: "Jul 3, 2025",
        time: "19:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "52,000",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 7,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "Bulls", ranking: "N/A" },
        venue: "Loftus Versfeld – Pretoria",
        stadium: "Loftus Versfeld",
        date: "Jun 28, 2025",
        time: "17:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "51,762",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 8,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "Lions", ranking: "N/A" },
        venue: "Ellis Park – Johannesburg",
        stadium: "Ellis Park",
        date: "Jun 24, 2025",
        time: "19:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "62,567",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 9,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "Western Province", ranking: "N/A" },
        venue: "Cape Town Stadium – Cape Town",
        stadium: "Cape Town Stadium",
        date: "Jun 20, 2025",
        time: "19:00",
        status: "upcoming",
        tournament: "Tour Match",
        capacity: "55,000",
        isTestMatch: false,
        series: "Warm-up"
      },
      {
        id: 10,
        team1: { flag: "🦁", name: "British & Irish Lions", ranking: "N/A" },
        team2: { flag: "🇿🇦", name: "SA Invitational XV", ranking: "N/A" },
        venue: "FNB Stadium – Johannesburg",
        stadium: "FNB Stadium",
        date: "Jun 15, 2025",
        time: "15:00",
        status: "upcoming",
        tournament: "Tour Opener",
        capacity: "94,736",
        isTestMatch: false,
        series: "Warm-up"
      }
    ],
    squad: [
      // Squad data remains unchanged
    ],
    tourHistory: [
      // History data remains unchanged
    ]
  };

  // KEEP LIONS-SPECIFIC HANDLERS
  const handleSeatSelect = (seatInfo) => {
    console.log('Selected seat:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // KEEP LIONS-SPECIFIC ENHANCEMENT LOGIC
  const enhancedHomeNations = britishLionsData.homeNations.map(nation => ({
    ...nation,
    isFavorite: favoriteTeams.includes(nation.name)
  }));

  // KEEP LIONS-SPECIFIC FILTERING
  const filteredMatches = matchFilter === 'test-matches' 
    ? britishLionsData.matches.filter(match => match.isTestMatch)
    : britishLionsData.matches;

  const userLionsNations = enhancedHomeNations.filter(nation => nation.isFavorite);

  const handleMatchClick = (match) => {
    onGameSelect?.({
      ...match,
      tournament: 'British & Irish Lions Tour',
      userFavorite: match.isTestMatch
    });
  };

  // KEEP LIONS-SPECIFIC FORMATTING
  const formatForm = (form) => {
    return form.split('').map((result, index) => (
      <span key={index} className={`form-dot ${result === 'W' ? 'win' : result === 'L' ? 'loss' : 'draw'}`}>
        {result}
      </span>
    ));
  };

  return (
    <div className="mens-british-lions-page">
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
            <span className="tournament-logo">{britishLionsData.logo}</span>
            <div className="tournament-info">
              <h1 className="tournament-name">{britishLionsData.name}</h1>
              <p className="tournament-year">{britishLionsData.year}</p>
            </div>
          </div>
          <p className="tournament-description">{britishLionsData.description}</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Nations</span>
          </div>
          <div className="stat">
            <span className="stat-number">50</span>
            <span className="stat-label">Players</span>
          </div>
          <div className="stat">
            <span className="stat-number">🦁</span>
            <span className="stat-label">Legendary</span>
          </div>
        </div>

        {hasFavoriteTeams && userLionsNations.length > 0 && (
          <div className="personalization-banner">
            <div className="banner-icon">⭐</div>
            <div className="banner-content">
              <h3>Your Lions Connection</h3>
              <p>
                Supporting {userLionsNations.length} home nation{userLionsNations.length !== 1 ? 's' : ''}:{' '}
                {userLionsNations.map(nation => nation.name).join(', ')}
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
            className={`tab-btn ${activeTab === 'squad' ? 'active' : ''}`}
            onClick={() => setActiveTab('squad')}
          >
            👥 Squad
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            📜 History
          </button>
          <button 
            className={`tab-btn ${activeTab === 'nations' ? 'active' : ''}`}
            onClick={() => setActiveTab('nations')}
          >
            🏴󠁧󠁢󠁥󠁮󠁧󠁿 Nations
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
            <h2 className="section-title">South Africa Tour 2025</h2>
            
            <div className="match-filters">
              <button 
                className={`filter-btn ${matchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMatchFilter('all')}
              >
                All Matches
              </button>
              <button 
                className={`filter-btn ${matchFilter === 'test-matches' ? 'active' : ''}`}
                onClick={() => setMatchFilter('test-matches')}
              >
                Test Matches Only
              </button>
            </div>

            <div className="matches-grid">
              {filteredMatches.map(match => (
                <div 
                  key={match.id} 
                  className={`match-card ${match.isTestMatch ? 'test-match' : ''}`}
                  onClick={() => handleMatchClick(match)}
                >
                  <div className="series-indicator">
                    {match.series}
                  </div>
                  
                  <div className="match-header">
                    <span className="match-tournament">{match.tournament}</span>
                    <span className="match-date">{match.date} • {match.time}</span>
                  </div>
                  
                  <div className="teams-container">
                    <div className="team">
                      <span className="team-flag">{match.team1.flag}</span>
                      <span className="team-name">{match.team1.name}</span>
                      <span className="team-ranking">{match.team1.ranking}</span>
                    </div>
                    
                    <div className="vs-container">
                      <span className="vs">VS</span>
                    </div>
                    
                    <div className="team">
                      <span className="team-ranking">{match.team2.ranking}</span>
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

        {activeTab === 'squad' && (
          <div className="squad-section">
            <h2 className="section-title">Lions Squad 2025</h2>
            <div className="nation-breakdown">
              <div className="nation-squad">
                <span className="nation-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                <div className="nation-name">England</div>
                <div className="player-count">15 Players</div>
                <div className="captain">Captain: Owen Farrell</div>
              </div>
              <div className="nation-squad">
                <span className="nation-flag">🇮🇪</span>
                <div className="nation-name">Ireland</div>
                <div className="player-count">14 Players</div>
                <div className="captain">Captain: Johnny Sexton</div>
              </div>
              <div className="nation-squad">
                <span className="nation-flag">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
                <div className="nation-name">Wales</div>
                <div className="player-count">11 Players</div>
                <div className="captain">Captain: Alun Wyn Jones</div>
              </div>
              <div className="nation-squad">
                <span className="nation-flag">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                <div className="nation-name">Scotland</div>
                <div className="player-count">10 Players</div>
                <div className="captain">Captain: Stuart Hogg</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="history-section">
            <h2 className="section-title">Lions Tour History</h2>
            <div className="tour-card">
              <div className="tour-header">
                <div className="tour-year">2021 South Africa</div>
                <div className="tour-result">Lost 1-2</div>
              </div>
              <div className="tour-details">
                <div className="tour-info">
                  <h4>Series Result</h4>
                  <p>South Africa 2-1 Lions</p>
                </div>
                <div className="tour-info">
                  <h4>Captain</h4>
                  <p>Alun Wyn Jones</p>
                </div>
                <div className="tour-info">
                  <h4>Coach</h4>
                  <p>Warren Gatland</p>
                </div>
              </div>
              <div className="tour-highlight">
                Memorable first test victory in Cape Town, but lost series in dramatic third test
              </div>
            </div>
            <div className="tour-card">
              <div className="tour-header">
                <div className="tour-year">2017 New Zealand</div>
                <div className="tour-result">Drew 1-1</div>
              </div>
              <div className="tour-details">
                <div className="tour-info">
                  <h4>Series Result</h4>
                  <p>New Zealand 1-1 Lions</p>
                </div>
                <div className="tour-info">
                  <h4>Captain</h4>
                  <p>Sam Warburton</p>
                </div>
                <div className="tour-info">
                  <h4>Coach</h4>
                  <p>Warren Gatland</p>
                </div>
              </div>
              <div className="tour-highlight">
                Historic series draw against the All Blacks - only the second drawn series in Lions history
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nations' && (
          <div className="teams-section">
            <h2 className="section-title">Home Nations</h2>
            <div className="teams-grid">
              {enhancedHomeNations.map((nation, index) => (
                <div 
                  key={index} 
                  className={`nation-card ${nation.isFavorite ? 'favorite-team' : ''}`}
                >
                  {nation.isFavorite && <div className="favorite-badge">⭐ YOUR NATION</div>}
                  
                  <div className="nation-header">
                    <span className="nation-flag">{nation.flag}</span>
                    <div className="nation-info">
                      <div className="nation-name">{nation.name}</div>
                      <div className="world-ranking">World Rank: #{nation.ranking}</div>
                    </div>
                  </div>
                  
                  <div className="nation-form">
                    <div className="form-label">Current Form:</div>
                    <div className="form-indicator">
                      {formatForm(nation.form)}
                    </div>
                  </div>

                  {nation.isFavorite && (
                    <div className="team-highlight">
                      Your Lions nation
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stadiums' && (
          <div className="stadiums-section">
            <h2 className="section-title">Tour Stadiums</h2>
            <VenueSelector 
              venues={lionsStadiums}
              selectedVenue={selectedVenue}
              onVenueChange={setSelectedVenue}
            />
            {/* CHANGED: StadiumMap to StadiumPage */}
            <StadiumPage 
              stadium={selectedVenue}
              onSeatSelect={handleSeatSelect}
              interactive={true}
              showInfo={true}
            />
          </div>
        )}

        <div className="features-section">
          <h2 className="section-title">Lions Tour Features</h2>
          <div className="features-grid">
            <div className="feature-card" onClick={onNavigateToFantasy}>
              <div className="feature-icon">🏅</div>
              <div className="feature-title">Lions Fantasy</div>
              <div className="feature-description">Build your dream Lions XV</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToResults}>
              <div className="feature-icon">📈</div>
              <div className="feature-title">Tour Results</div>
              <div className="feature-description">Match reports and analysis</div>
            </div>
            
            <div className="feature-card" onClick={onNavigateToPodcasts}>
              <div className="feature-icon">🎧</div>
              <div className="feature-title">Lions Podcasts</div>
              <div className="feature-description">Tour diaries and interviews</div>
            </div>
            
            <div className="feature-card" onClick={() => setActiveTab('stadiums')}>
              <div className="feature-icon">🏟️</div>
              <div className="feature-title">Tour Stadiums</div>
              <div className="feature-description">Explore South African venues</div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="quick-btn" onClick={onNavigateToFantasy}>
            🏅 Lions Fantasy
          </button>
          <button className="quick-btn" onClick={onNavigateToResults}>
            📈 Tour Results
          </button>
          <button className="quick-btn" onClick={onNavigateToPodcasts}>
            🎧 Lions Podcasts
          </button>
          <button className="quick-btn" onClick={() => setActiveTab('stadiums')}>
            🏟️ Tour Stadiums
          </button>
        </div>
      </main>

      <div className="bottom-ad-banner">
        <div className="ad-content">
          <div className="ad-icon">🦁</div>
          <div className="ad-text">
            British & Irish Lions 2025 Tour - The Ultimate Rugby Experience!
            Official tour packages, hospitality, and exclusive access.
          </div>
          <button className="ad-cta">🎫 Join the Pride</button>
        </div>
      </div>
    </div>
  );
}

export default MensBritishLions;