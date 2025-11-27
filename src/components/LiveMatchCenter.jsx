import './LiveMatchCenter.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ThemeToggle from './ThemeToggle';
import MatchCard from './MatchCard'; // Import the MatchCard component

function LiveMatchCenter({ onNavigateBack }) {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [commentary, setCommentary] = useState([]);
  const [activeTournament, setActiveTournament] = useState('ALL');
  const [matches, setMatches] = useState([]);
  const [tournamentData, setTournamentData] = useState({});

  // Tournament configuration
  const tournaments = [
    { id: 'ALL', name: 'All Tournaments', icon: '🌍', color: '#4fc3f7' },
    { id: 'SIX_NATIONS', name: 'Six Nations', icon: '🏆', color: '#1e88e5' },
    { id: 'RUGBY_CHAMPIONSHIP', name: 'Rugby Championship', icon: '⭐', color: '#f57c00' },
    { id: 'SUMMER_INTERNATIONALS', name: 'Summer Tests', icon: '☀️', color: '#ffb300' },
    { id: 'AUTUMN_INTERNATIONALS', name: 'Autumn Tests', icon: '🍂', color: '#8e24aa' },
    { id: 'WOMENS_RUGBY', name: "Women's Rugby", icon: '♀', color: '#e91e63' },
    { id: 'RUGBY_SEVENS', name: 'Rugby Sevens', icon: '⚡', color: '#00bcd4' }
  ];

  // Use useMemo for the initial data to avoid recreating it on every render
  const initialTournamentMatchData = useMemo(() => ({
    'SIX_NATIONS': [
      {
        id: 1,
        homeTeam: "England",
        homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "Ireland",
        awayFlag: "🇮🇪",
        homeScore: 18,
        awayScore: 22,
        time: '65:00',
        status: 'LIVE',
        tournament: 'Six Nations',
        venue: 'Twickenham, London',
        date: '2024-03-15',
        tournamentType: 'SIX_NATIONS'
      },
      {
        id: 2,
        homeTeam: "France",
        homeFlag: "🇫🇷",
        awayTeam: "Wales",
        awayFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        homeScore: 0,
        awayScore: 0,
        time: 'Kickoff in 2:30:00',
        status: 'UPCOMING',
        tournament: 'Six Nations',
        venue: 'Stade de France, Paris',
        date: '2024-03-16',
        tournamentType: 'SIX_NATIONS'
      },
      {
        id: 3,
        homeTeam: "Scotland",
        homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        awayTeam: "Italy",
        awayFlag: "🇮🇹",
        homeScore: 32,
        awayScore: 14,
        time: 'FULL TIME',
        status: 'COMPLETED',
        tournament: 'Six Nations',
        venue: 'Murrayfield, Edinburgh',
        date: '2024-03-14',
        tournamentType: 'SIX_NATIONS'
      }
    ],
    'RUGBY_CHAMPIONSHIP': [
      {
        id: 4,
        homeTeam: "New Zealand",
        homeFlag: "🇳🇿",
        awayTeam: "South Africa",
        awayFlag: "🇿🇦",
        homeScore: 24,
        awayScore: 17,
        time: '72:00',
        status: 'LIVE',
        tournament: 'Rugby Championship',
        venue: 'Eden Park, Auckland',
        date: '2024-08-10',
        tournamentType: 'RUGBY_CHAMPIONSHIP'
      },
      {
        id: 5,
        homeTeam: "Australia",
        homeFlag: "🇦🇺",
        awayTeam: "Argentina",
        awayFlag: "🇦🇷",
        homeScore: 28,
        awayScore: 25,
        time: '78:00',
        status: 'LIVE',
        tournament: 'Rugby Championship',
        venue: 'Suncorp Stadium, Brisbane',
        date: '2024-08-10',
        tournamentType: 'RUGBY_CHAMPIONSHIP'
      }
    ],
    'SUMMER_INTERNATIONALS': [
      {
        id: 6,
        homeTeam: "Japan",
        homeFlag: "🇯🇵",
        awayTeam: "Fiji",
        awayFlag: "🇫🇯",
        homeScore: 0,
        awayScore: 0,
        time: 'Tomorrow 14:00',
        status: 'UPCOMING',
        tournament: 'Summer Internationals',
        venue: 'National Stadium, Tokyo',
        date: '2024-07-20',
        tournamentType: 'SUMMER_INTERNATIONALS'
      },
      {
        id: 7,
        homeTeam: "USA",
        homeFlag: "🇺🇸",
        awayTeam: "Canada",
        awayFlag: "🇨🇦",
        homeScore: 21,
        awayScore: 18,
        time: 'FULL TIME',
        status: 'COMPLETED',
        tournament: 'Summer Tests',
        venue: 'Soldier Field, Chicago',
        date: '2024-07-13',
        tournamentType: 'SUMMER_INTERNATIONALS'
      }
    ],
    'AUTUMN_INTERNATIONALS': [
      {
        id: 8,
        homeTeam: "England",
        homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "New Zealand",
        awayFlag: "🇳🇿",
        homeScore: 0,
        awayScore: 0,
        time: 'Nov 2, 14:30',
        status: 'UPCOMING',
        tournament: 'Autumn Internationals',
        venue: 'Twickenham, London',
        date: '2024-11-02',
        tournamentType: 'AUTUMN_INTERNATIONALS'
      },
      {
        id: 9,
        homeTeam: "Ireland",
        homeFlag: "🇮🇪",
        awayTeam: "South Africa",
        awayFlag: "🇿🇦",
        homeScore: 0,
        awayScore: 0,
        time: 'Nov 9, 15:00',
        status: 'UPCOMING',
        tournament: 'Autumn Tests',
        venue: 'Aviva Stadium, Dublin',
        date: '2024-11-09',
        tournamentType: 'AUTUMN_INTERNATIONALS'
      }
    ],
    'WOMENS_RUGBY': [
      {
        id: 10,
        homeTeam: "England",
        homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "France",
        awayFlag: "🇫🇷",
        homeScore: 28,
        awayScore: 24,
        time: '70:00',
        status: 'LIVE',
        tournament: "Women's Six Nations",
        venue: 'Sandy Park, Exeter',
        date: '2024-04-20',
        tournamentType: 'WOMENS_RUGBY'
      },
      {
        id: 11,
        homeTeam: "New Zealand",
        homeFlag: "🇳🇿",
        awayTeam: "Australia",
        awayFlag: "🇦🇺",
        homeScore: 0,
        awayScore: 0,
        time: 'Tomorrow 16:00',
        status: 'UPCOMING',
        tournament: "Women's Pacific Four",
        venue: 'Eden Park, Auckland',
        date: '2024-05-25',
        tournamentType: 'WOMENS_RUGBY'
      }
    ],
    'RUGBY_SEVENS': [
      {
        id: 12,
        homeTeam: "Fiji",
        homeFlag: "🇫🇯",
        awayTeam: "South Africa",
        awayFlag: "🇿🇦",
        homeScore: 21,
        awayScore: 19,
        time: 'FINAL',
        status: 'COMPLETED',
        tournament: 'World Rugby Sevens',
        venue: 'Hong Kong Stadium',
        date: '2024-04-07',
        tournamentType: 'RUGBY_SEVENS'
      },
      {
        id: 13,
        homeTeam: "New Zealand",
        homeFlag: "🇳🇿",
        awayTeam: "Argentina",
        awayFlag: "🇦🇷",
        homeScore: 0,
        awayScore: 0,
        time: 'Next Week',
        status: 'UPCOMING',
        tournament: 'Singapore Sevens',
        venue: 'National Stadium, Singapore',
        date: '2024-04-13',
        tournamentType: 'RUGBY_SEVENS'
      }
    ]
  }), []);

  // Initialize matches and tournament data
  useEffect(() => {
    const allMatches = Object.values(initialTournamentMatchData).flat();
    
    const completeTournamentData = {
      ...initialTournamentMatchData,
      'ALL': allMatches
    };
    
    setMatches(allMatches);
    setTournamentData(completeTournamentData);
  }, [initialTournamentMatchData]);

  // Filter matches based on active tournament
  const filteredMatches = activeTournament === 'ALL' 
    ? matches 
    : tournamentData[activeTournament] || [];

  // Mock commentary data
  const loadCommentary = useCallback(() => {
    const mockCommentary = [
      { time: '70:00', text: 'Penalty awarded to South Africa in kicking range' },
      { time: '69:30', text: 'Lineout won cleanly by New Zealand' },
      { time: '68:45', text: 'Break by Beauden Barrett, gains 30 meters!' },
      { time: '67:20', text: 'Scrum reset after collapse' },
      { time: '66:10', text: 'Try-saving tackle by Cheslin Kolbe!' },
      { time: '65:30', text: 'Handling error gives possession to All Blacks' },
      { time: '64:15', text: 'Successful clearance kick finds touch' },
      { time: '63:40', text: 'Lineout throw not straight - scrum to South Africa' }
    ];
    setCommentary(mockCommentary);
  }, []);

  // Commentary and live updates effect
  useEffect(() => {
    loadCommentary();
    
    const interval = setInterval(() => {
      if (commentary.length > 0 && selectedMatch?.status === 'LIVE') {
        setCommentary(prev => {
          const newCommentary = [...prev];
          if (newCommentary.length > 10) {
            newCommentary.pop();
          }
          return newCommentary;
        });
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [loadCommentary, commentary.length, selectedMatch]);

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
    loadCommentary();
  };

  const getStatusClass = (status) => {
    switch(status) {
      case 'LIVE': return 'status-live';
      case 'UPCOMING': return 'status-upcoming';
      case 'COMPLETED': return 'status-completed';
      default: return 'status-upcoming';
    }
  };

  const getTournamentColor = (tournamentType) => {
    const tournament = tournaments.find(t => t.id === tournamentType);
    return tournament?.color || '#4fc3f7';
  };

  return (
    <div className="live-match-center">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        ⚡ Live Rugby Action - Real-time Scores & Commentary! 🏉
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

      {/* Main Content */}
      <div className="match-center-content">
        {/* Header */}
        <div className="match-center-header">
          <h1 className="match-center-title">🏉 Live Match Center</h1>
          <p className="match-center-subtitle">Real-time scores, live commentary, and match statistics from rugby games worldwide</p>
          <div className="live-indicator">
            <span className="pulse-dot">●</span>
            LIVE UPDATES ACTIVE
          </div>
        </div>

        {/* Tournament Filter */}
        <div className="tournament-filter-section">
          <h3 style={{textAlign: 'center', color: 'white', marginBottom: '20px', fontSize: '1.5em'}}>
            🏆 Select Tournament
          </h3>
          <div className="tournament-filters">
            {tournaments.map(tournament => (
              <button
                key={tournament.id}
                className={`tournament-filter-btn ${activeTournament === tournament.id ? 'active' : ''}`}
                onClick={() => setActiveTournament(tournament.id)}
                style={{
                  borderLeftColor: tournament.color,
                  background: activeTournament === tournament.id ? 
                    `linear-gradient(135deg, ${tournament.color}20, ${tournament.color}40)` : 
                    'rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="tournament-icon">{tournament.icon}</span>
                {tournament.name}
                {activeTournament === tournament.id && (
                  <span className="active-indicator">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Stats */}
        <div className="tournament-stats">
          <div className="stat-card">
            <span className="stat-number">{filteredMatches.length}</span>
            <span className="stat-label">Total Matches</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {filteredMatches.filter(m => m.status === 'LIVE').length}
            </span>
            <span className="stat-label">Live Now</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {filteredMatches.filter(m => m.status === 'UPCOMING').length}
            </span>
            <span className="stat-label">Upcoming</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">
              {tournaments.find(t => t.id === activeTournament)?.name || 'All'}
            </span>
            <span className="stat-label">Active Tournament</span>
          </div>
        </div>

        {/* Live Features */}
        <div className="live-features">
          <h3>🎯 Live Center Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h4>Multi-Tournament Support</h4>
              <p>Follow matches across all major rugby tournaments simultaneously</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h4>Live Commentary</h4>
              <p>Minute-by-minute updates and key match events as they happen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Tournament Filtering</h4>
              <p>Quickly switch between different competitions and view specific matchups</p>
            </div>
          </div>
        </div>

        {/* Matches Grid - USING MATCHCARD COMPONENT */}
        <div className="matches-section">
          <h2 style={{textAlign: 'center', color: 'white', marginBottom: '30px', fontSize: '2.2em'}}>
            {activeTournament === 'ALL' ? '📅 All Matches' : `📅 ${tournaments.find(t => t.id === activeTournament)?.name} Matches`}
          </h2>
          
          {filteredMatches.length === 0 ? (
            <div className="no-matches-message">
              <div className="no-matches-icon">📭</div>
              <h3>No matches found</h3>
              <p>There are currently no matches for the selected tournament.</p>
            </div>
          ) : (
            <div className="matches-grid">
              {filteredMatches.map(match => (
                <MatchCard
                  key={match.id}
                  match={match}
                  isSelected={selectedMatch?.id === match.id}
                  onSelect={handleMatchSelect}
                  tournamentColor={getTournamentColor(match.tournamentType)}
                  showTournament={true}
                />
              ))}
            </div>
          )}
        </div>

        {/* Selected Match Details */}
        {selectedMatch && (
          <div className="match-details-section">
            <div className="selected-match-header">
              <h3>🎯 Match Details - {selectedMatch.tournament}</h3>
              <div className={`match-status-badge ${getStatusClass(selectedMatch.status)}`}>
                {selectedMatch.status}
              </div>
            </div>
            
            <div className="match-scoreboard">
              <div className="score-team">
                <div className="team-name-large">{selectedMatch.homeTeam}</div>
                <div className="score-large">{selectedMatch.homeScore}</div>
              </div>
              <div className="score-separator">-</div>
              <div className="score-team">
                <div className="team-name-large">{selectedMatch.awayTeam}</div>
                <div className="score-large">{selectedMatch.awayScore}</div>
              </div>
            </div>

            <div className="match-info-detailed">
              <div className="info-item">
                <span className="info-label">🏆 Tournament:</span>
                <span className="info-value">{selectedMatch.tournament}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📍 Venue:</span>
                <span className="info-value">{selectedMatch.venue}</span>
              </div>
              <div className="info-item">
                <span className="info-label">⏰ Match Time:</span>
                <span className="info-value">{selectedMatch.time}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📅 Date:</span>
                <span className="info-value">{selectedMatch.date}</span>
              </div>
            </div>

            {/* Live Commentary */}
            <div className="commentary-section">
              <h4>🎙️ Live Commentary Feed</h4>
              <div className="commentary-feed">
                {commentary.map((comment, index) => (
                  <div key={index} className="commentary-item">
                    <span className="comment-time">{comment.time}'</span>
                    <span className="comment-text">{comment.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Match Stats */}
            <div className="match-stats">
              <h4>📊 Live Match Statistics</h4>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">62%</span>
                  <span className="stat-label">Possession</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">78%</span>
                  <span className="stat-label">Tackle Success</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12</span>
                  <span className="stat-label">Linebreaks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">8</span>
                  <span className="stat-label">Penalties</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">45%</span>
                  <span className="stat-label">Territory</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">92%</span>
                  <span className="stat-label">Goal Kicking</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-section">
              <h3>🚀 Match Actions</h3>
              <div className="action-buttons">
                <button className="action-btn watch-live">
                  📺 Watch Live Stream
                </button>
                <button className="action-btn view-stats">
                  📊 Detailed Statistics
                </button>
                <button className="action-btn fantasy">
                  🏅 Fantasy Points
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions when no match selected */}
        {!selectedMatch && (
          <div className="quick-actions-section">
            <h3>🎯 Get Started</h3>
            <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>
              Select a match from the {activeTournament === 'ALL' ? 'available tournaments' : tournaments.find(t => t.id === activeTournament)?.name} to view detailed information
            </p>
            <div className="action-buttons">
              <button className="action-btn watch-live">
                📺 Watch Live Stream
              </button>
              <button className="action-btn view-stats">
                📊 View All Statistics
              </button>
              <button className="action-btn fantasy">
                🏅 Check Fantasy
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎥 Premium Live Streaming - HD Quality & Multiple Camera Angles! 📡
      </div>
    </div>
  );
}

export default LiveMatchCenter;