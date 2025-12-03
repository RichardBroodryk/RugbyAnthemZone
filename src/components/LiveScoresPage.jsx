import React, { useState, useEffect } from 'react';
import './LiveScoresPage.css';
import MatchCard from './MatchCard';
import NavBar from './NavBar';

const Flag = ({ country, size = 'small' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'ireland': 'ireland',
      'france': 'france',
      'england': 'england',
      'scotland': 'scotland',
      'wales': 'wales',
      'italy': 'italy',
      'newzealand': 'new-zealand',
      'australia': 'australia',
      'southafrica': 'south-africa',
      'argentina': 'argentina',
      'japan': 'japan',
      'fiji': 'fiji',
      'samoa': 'samoa',
      'tonga': 'tonga',
      'georgia': 'georgia',
      'portugal': 'portugal',
      'romania': 'romania',
      'netherlands': 'netherlands',
      'spain': 'spain',
      'usa': 'united-states-of-america'
    };
    return nameMap[countryName] || countryName;
  };

  const fileName = getCountryFileName(country.toLowerCase());
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>{country.slice(0, 3).toUpperCase()}</div>;
    }
  }
};

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
        homeFlag: "ireland",
        awayTeam: "France", 
        awayFlag: "france",
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
        homeFlag: "scotland",
        awayTeam: "Wales",
        awayFlag: "wales",
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
        homeFlag: "england",
        awayTeam: "Italy",
        awayFlag: "italy",
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
        homeFlag: "newzealand",
        awayTeam: "South Africa",
        awayFlag: "southafrica",
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
        homeFlag: "australia",
        awayTeam: "Argentina",
        awayFlag: "argentina",
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
        homeFlag: "japan",
        awayTeam: "Fiji",
        awayFlag: "fiji",
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
        homeFlag: "samoa",
        awayTeam: "Tonga",
        awayFlag: "tonga",
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
        homeFlag: "england",
        awayTeam: "France",
        awayFlag: "france",
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
        homeFlag: "newzealand",
        awayTeam: "Australia",
        awayFlag: "australia",
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
        homeFlag: "wales",
        awayTeam: "South Africa",
        awayFlag: "southafrica",
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
        homeFlag: "ireland",
        awayTeam: "New Zealand",
        awayFlag: "newzealand",
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
        homeFlag: "france",
        awayTeam: "Scotland",
        awayFlag: "scotland",
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
        homeFlag: "argentina",
        awayTeam: "Spain",
        awayFlag: "spain",
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
        homeFlag: "georgia",
        awayTeam: "Portugal",
        awayFlag: "portugal",
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
        homeFlag: "romania",
        awayTeam: "Netherlands",
        awayFlag: "netherlands",
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
      {/* Top Ad Banner - MOVED TO TOP */}
      <div className="top-ad-banner">
        🌍 International Rugby Live Scores - Follow Your Nation! 🏉
      </div>

      {/* Professional NavBar - REPLACED CUSTOM NAV */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Live Scores")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

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
              FlagComponent={Flag} // Pass Flag component to MatchCard
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

      {/* Bottom Ad Banner - MOVED TO BOTTOM */}
      <div className="bottom-ad-banner">
        🎟️ Book Tickets for International Matches - Limited Availability! ⭐
      </div>
    </div>
  );
};

export default LiveScoresPage;