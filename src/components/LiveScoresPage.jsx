import React, { useState, useEffect } from 'react';
import './LiveScoresPage.css';
import MatchCard from './MatchCard';

const LiveScoresPage = ({ onNavigateBack }) => {
  const [liveGames, setLiveGames] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    const mockLiveGames = [
      // Six Nations Matches
      {
        id: 1,
        tournament: "Six Nations",
        homeTeam: "Ireland",
        homeFlag: "🇮🇪",
        awayTeam: "France", 
        awayFlag: "🇫🇷",
        homeScore: 32,
        awayScore: 19,
        status: "FT",
        time: "Full Time",
        venue: "Aviva Stadium, Dublin"
      },
      {
        id: 2,
        tournament: "Six Nations", 
        homeTeam: "Scotland",
        homeFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        awayTeam: "Wales",
        awayFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        homeScore: 17,
        awayScore: 14,
        status: "Live",
        time: "65'",
        venue: "Murrayfield, Edinburgh"
      },
      {
        id: 3,
        tournament: "Six Nations",
        homeTeam: "England",
        homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "Italy",
        awayFlag: "🇮🇹",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "14:15 GMT",
        venue: "Twickenham, London"
      },

      // Rugby Championship Matches
      {
        id: 4,
        tournament: "Rugby Championship",
        homeTeam: "New Zealand",
        homeFlag: "🇳🇿",
        awayTeam: "South Africa",
        awayFlag: "🇿🇦",
        homeScore: 24,
        awayScore: 17,
        status: "Live",
        time: "72'",
        venue: "Eden Park, Auckland"
      },
      {
        id: 5,
        tournament: "Rugby Championship",
        homeTeam: "Australia",
        homeFlag: "🇦🇺",
        awayTeam: "Argentina",
        awayFlag: "🇦🇷",
        homeScore: 28,
        awayScore: 25,
        status: "FT",
        time: "Full Time",
        venue: "Suncorp Stadium, Brisbane"
      },

      // Summer Internationals
      {
        id: 6,
        tournament: "Summer Tests",
        homeTeam: "Japan",
        homeFlag: "🇯🇵",
        awayTeam: "Fiji",
        awayFlag: "🇫🇯",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Tomorrow 06:00 GMT",
        venue: "National Stadium, Tokyo"
      },
      {
        id: 7,
        tournament: "Pacific Nations",
        homeTeam: "Samoa",
        homeFlag: "🇼🇸",
        awayTeam: "Tonga",
        awayFlag: "🇹🇴",
        homeScore: 31,
        awayScore: 28,
        status: "FT",
        time: "Full Time",
        venue: "Apia Park, Samoa"
      },

      // Women's Internationals
      {
        id: 8,
        tournament: "Women's Six Nations",
        homeTeam: "England",
        homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        awayTeam: "France",
        awayFlag: "🇫🇷",
        homeScore: 21,
        awayScore: 18,
        status: "Live",
        time: "58'",
        venue: "Sandy Park, Exeter"
      },
      {
        id: 9,
        tournament: "Women's Pacific Four",
        homeTeam: "New Zealand",
        homeFlag: "🇳🇿",
        awayTeam: "Australia",
        awayFlag: "🇦🇺",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Sat 03:05 GMT",
        venue: "Eden Park, Auckland"
      },

      // Autumn Internationals
      {
        id: 10,
        tournament: "Autumn Tests",
        homeTeam: "Wales",
        homeFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        awayTeam: "South Africa",
        awayFlag: "🇿🇦",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Nov 23, 15:15 GMT",
        venue: "Principality Stadium, Cardiff"
      },
      {
        id: 11,
        tournament: "Autumn Tests",
        homeTeam: "Ireland",
        homeFlag: "🇮🇪",
        awayTeam: "New Zealand",
        awayFlag: "🇳🇿",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Nov 16, 17:30 GMT",
        venue: "Aviva Stadium, Dublin"
      },

      // Rugby World Cup Warm-ups
      {
        id: 12,
        tournament: "World Cup Warm-up",
        homeTeam: "France",
        homeFlag: "🇫🇷",
        awayTeam: "Scotland",
        awayFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Aug 24, 20:00 GMT",
        venue: "Stade de France, Paris"
      },
      {
        id: 13,
        tournament: "World Cup Warm-up",
        homeTeam: "Argentina",
        homeFlag: "🇦🇷",
        awayTeam: "Spain",
        awayFlag: "🇪🇸",
        homeScore: 45,
        awayScore: 12,
        status: "FT",
        time: "Full Time",
        venue: "Estadio José Amalfitani, Buenos Aires"
      },

      // Emerging Nations
      {
        id: 14,
        tournament: "Rugby Europe Championship",
        homeTeam: "Georgia",
        homeFlag: "🇬🇪",
        awayTeam: "Portugal",
        awayFlag: "🇵🇹",
        homeScore: 38,
        awayScore: 22,
        status: "FT",
        time: "Full Time",
        venue: "Boris Paichadze Stadium, Tbilisi"
      },
      {
        id: 15,
        tournament: "Rugby Europe Championship",
        homeTeam: "Romania",
        homeFlag: "🇷🇴",
        awayTeam: "Netherlands",
        awayFlag: "🇳🇱",
        homeScore: 0,
        awayScore: 0,
        status: "Upcoming",
        time: "Tomorrow 18:00 GMT",
        venue: "Stadionul Arcul de Triumf, Bucharest"
      }
    ];
    
    setLiveGames(mockLiveGames);
  }, []);

  const tournamentFilters = [
    { id: 'all', name: 'All Tournaments' },
    { id: 'six-nations', name: 'Six Nations' },
    { id: 'rugby-championship', name: 'Rugby Championship' },
    { id: 'summer-tests', name: 'Summer Tests' },
    { id: 'autumn-tests', name: 'Autumn Tests' },
    { id: 'womens-rugby', name: "Women's Rugby" },
    { id: 'world-cup', name: 'World Cup Warm-up' },
    { id: 'europe', name: 'Rugby Europe' }
  ];

  const filteredGames = activeFilter === 'all' 
    ? liveGames 
    : liveGames.filter(game => {
        const tournamentName = game.tournament.toLowerCase();
        const filterId = activeFilter.toLowerCase();
        
        // Handle special cases
        if (filterId === 'six-nations') {
          return tournamentName.includes('six nations');
        } else if (filterId === 'rugby-championship') {
          return tournamentName.includes('rugby championship');
        } else if (filterId === 'summer-tests') {
          return tournamentName.includes('summer') || tournamentName.includes('pacific nations');
        } else if (filterId === 'autumn-tests') {
          return tournamentName.includes('autumn');
        } else if (filterId === 'womens-rugby') {
          return tournamentName.includes('women');
        } else if (filterId === 'world-cup') {
          return tournamentName.includes('world cup');
        } else if (filterId === 'europe') {
          return tournamentName.includes('europe');
        }
        
        return tournamentName.includes(filterId);
      });

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
    console.log('Selected match:', match);
  };

  const getTournamentColor = (tournament) => {
    const colors = {
      'Six Nations': '#1e88e5',
      'Rugby Championship': '#f57c00',
      'Summer Tests': '#43a047',
      'Autumn Tests': '#8e24aa',
      "Women's Six Nations": '#e91e63',
      "Women's Pacific Four": '#9c27b0',
      'World Cup Warm-up': '#d32f2f',
      'Pacific Nations': '#0097a7',
      'Rugby Europe Championship': '#5d4037'
    };
    return colors[tournament] || '#1976d2';
  };

  return (
    <div className="live-scores-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🌍 International Rugby Live Scores - Follow Your Nation! 🏉
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="live-scores-content">
        <div className="live-scores-header">
          <h1 className="live-scores-title">🏉 International Rugby Scores</h1>
          <p className="live-scores-subtitle">Live scores from test matches and international tournaments worldwide</p>
        </div>

        {/* Tournament Filter */}
        <div className="tournament-filter">
          {tournamentFilters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Match Statistics */}
        <div className="match-statistics">
          <div className="stat-item">
            <span className="stat-number">{filteredGames.length}</span>
            <span className="stat-label">Total Matches</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {filteredGames.filter(m => m.status === 'Live').length}
            </span>
            <span className="stat-label">Live Now</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {filteredGames.filter(m => m.status === 'Upcoming').length}
            </span>
            <span className="stat-label">Upcoming</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {filteredGames.filter(m => m.status === 'FT').length}
            </span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        {/* Live Games Grid */}
        <div className="live-games-grid">
          {filteredGames.map((game) => (
            <MatchCard
              key={game.id}
              match={game}
              isSelected={selectedMatch?.id === game.id}
              onSelect={handleMatchSelect}
              tournamentColor={getTournamentColor(game.tournament)}
              showTournament={true}
            />
          ))}
        </div>

        {/* Live Updates Info */}
        <div className="live-updates">
          <h3>📊 Live International Rugby Coverage</h3>
          <div className="updates-grid">
            <div className="update-item">
              <span className="update-icon">🌍</span>
              <span className="update-text">Coverage of 50+ international teams worldwide</span>
            </div>
            <div className="update-item">
              <span className="update-icon">⚡</span>
              <span className="update-text">Real-time score updates every 30 seconds</span>
            </div>
            <div className="update-item">
              <span className="update-icon">🔔</span>
              <span className="update-text">Push notifications for major international matches</span>
            </div>
            <div className="update-item">
              <span className="update-icon">📈</span>
              <span className="update-text">World Rugby rankings impact tracking</span>
            </div>
          </div>
        </div>

        {/* No Games Message */}
        {filteredGames.length === 0 && (
          <div className="no-games-message">
            <p>📭 No international matches scheduled</p>
            <p>Check back during test match windows for live scores!</p>
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎟️ Book Tickets for International Matches - Limited Availability! ⭐
      </div>
    </div>
  );
};

export default LiveScoresPage;