import React, { useState } from 'react';
import './GlobalCalendar.css';
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
      'uruguay': 'uruguay',
      'portugal': 'portugal',
      'usa': 'united-states-of-america',
      'canada': 'canada'
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

const GlobalCalendar = ({ onNavigateBack, onNavigateToTickets, onNavigateToUserProfile }) => {
  const [activeView, setActiveView] = useState('month');
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');

  // Updated 2026 Rugby Calendar with new tournaments
  const rugbyEvents2026 = [
    {
      id: 1,
      tournament: "Men's Six Nations 2026",
      homeTeam: "France",
      awayTeam: "Ireland",
      date: "Sat, Feb 7, 2026",
      time: "15:00 GMT",
      stadium: "Stade de France, Paris",
      broadcast: "BBC Sport, France TV",
      tickets: "Limited Availability",
      teams: {
        home: { name: "France", flag: "france" },
        away: { name: "Ireland", flag: "ireland" }
      }
    },
    {
      id: 2,
      tournament: "Women's Six Nations 2026",
      homeTeam: "England",
      awayTeam: "Wales",
      date: "Sun, Feb 15, 2026",
      time: "14:30 GMT",
      stadium: "Twickenham Stadium, London",
      broadcast: "ITV, S4C",
      tickets: "Available",
      teams: {
        home: { name: "England", flag: "england" },
        away: { name: "Wales", flag: "wales" }
      }
    },
    {
      id: 3,
      tournament: "World Rugby Championship (New)",
      homeTeam: "New Zealand",
      awayTeam: "South Africa",
      date: "Sat, Mar 14, 2026",
      time: "08:35 GMT",
      stadium: "Eden Park, Auckland",
      broadcast: "Sky Sport, SuperSport",
      tickets: "High Demand",
      teams: {
        home: { name: "New Zealand", flag: "newzealand" },
        away: { name: "South Africa", flag: "southafrica" }
      }
    },
    {
      id: 4,
      tournament: "Pacific Nations Cup 2026",
      homeTeam: "Fiji",
      awayTeam: "Samoa",
      date: "Fri, Mar 27, 2026",
      time: "06:00 GMT",
      stadium: "ANZ Stadium, Suva",
      broadcast: "FBC TV, Samoa TV",
      tickets: "Available",
      teams: {
        home: { name: "Fiji", flag: "fiji" },
        away: { name: "Samoa", flag: "samoa" }
      }
    },
    {
      id: 5,
      tournament: "Rugby Europe Championship 2026",
      homeTeam: "Georgia",
      awayTeam: "Portugal",
      date: "Sat, Apr 4, 2026",
      time: "16:00 GMT",
      stadium: "Boris Paichadze Stadium, Tbilisi",
      broadcast: "Rugby Europe TV",
      tickets: "Available",
      teams: {
        home: { name: "Georgia", flag: "georgia" },
        away: { name: "Portugal", flag: "portugal" }
      }
    },
    {
      id: 6,
      tournament: "Americas Rugby Championship 2026",
      homeTeam: "USA",
      awayTeam: "Argentina",
      date: "Sun, Apr 12, 2026",
      time: "19:00 EST",
      stadium: "AT&T Stadium, Dallas",
      broadcast: "NBC Sports, ESPN",
      tickets: "Available",
      teams: {
        home: { name: "USA", flag: "usa" },
        away: { name: "Argentina", flag: "argentina" }
      }
    },
    {
      id: 7,
      tournament: "Summer Internationals 2026",
      homeTeam: "Australia",
      awayTeam: "England",
      date: "Sat, Jul 4, 2026",
      time: "11:05 AEST",
      stadium: "Suncorp Stadium, Brisbane",
      broadcast: "Channel 9, ITV",
      tickets: "High Demand",
      teams: {
        home: { name: "Australia", flag: "australia" },
        away: { name: "England", flag: "england" }
      }
    },
    {
      id: 8,
      tournament: "Autumn Internationals 2026",
      homeTeam: "Scotland",
      awayTeam: "New Zealand",
      date: "Sat, Nov 7, 2026",
      time: "15:00 GMT",
      stadium: "Murrayfield, Edinburgh",
      broadcast: "BBC Sport, Sky Sport",
      tickets: "Limited Availability",
      teams: {
        home: { name: "Scotland", flag: "scotland" },
        away: { name: "New Zealand", flag: "newzealand" }
      }
    }
  ];

  const handleSyncToCalendar = (platform) => {
    alert(`Syncing to ${platform} calendar...\n\nThis feature will add all upcoming matches to your personal calendar with reminders.`);
  };

  const handleEventClick = (event) => {
    alert(`📅 ${event.tournament}\n\n${event.homeTeam} vs ${event.awayTeam}\n${event.date} at ${event.time}\n📍 ${event.stadium}\n\nClick "Get Tickets" to secure your seat!`);
  };

  const handleAddToCalendar = (event) => {
    alert(`Added to your calendar:\n${event.homeTeam} vs ${event.awayTeam}\n${event.date} at ${event.time}\n\nYou'll receive reminders before the match.`);
  };

  const handleSetReminder = (event) => {
    alert(`⏰ Reminder set for:\n${event.homeTeam} vs ${event.awayTeam}\n\nYou'll be notified 1 hour before kickoff.`);
  };

  return (
    <div className="global-calendar-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Calendar")}
        onNavigateToProfile={onNavigateToUserProfile}
      />

      <div className="calendar-top-ad-banner">
        🗓️ 2026 Rugby Calendar Released! New Tournaments & Exciting Matchups Await! 🌟
      </div>

      <div className="calendar-content">
        <h1 className="calendar-title">Global Rugby Calendar 2026</h1>
        <p className="calendar-subtitle">
          Track every major rugby event, set reminders, sync with your calendar, and never miss a moment of the action
        </p>

        <div className="calendar-premium-badge">
          🎯 FEATURED TOURNAMENTS: Six Nations • World Rugby Championship • Pacific Nations Cup • Rugby Europe Championship
        </div>

        <div className="calendar-controls">
          <div className="calendar-view-toggle">
            <button 
              className={`view-toggle-btn ${activeView === 'month' ? 'active' : ''}`}
              onClick={() => setActiveView('month')}
            >
              📅 Month View
            </button>
            <button 
              className={`view-toggle-btn ${activeView === 'list' ? 'active' : ''}`}
              onClick={() => setActiveView('list')}
            >
              📋 List View
            </button>
            <button 
              className={`view-toggle-btn ${activeView === 'tournament' ? 'active' : ''}`}
              onClick={() => setActiveView('tournament')}
            >
              🏆 Tournament View
            </button>
          </div>

          <select 
            className="timezone-selector"
            value={selectedTimezone}
            onChange={(e) => setSelectedTimezone(e.target.value)}
          >
            <option value="UTC">UTC/GMT</option>
            <option value="EST">EST (Eastern)</option>
            <option value="PST">PST (Pacific)</option>
            <option value="CET">CET (Central Europe)</option>
            <option value="AEST">AEST (Australia)</option>
            <option value="NZST">NZST (New Zealand)</option>
          </select>
        </div>

        <div className="calendar-grid">
          {rugbyEvents2026.map(event => (
            <div 
              key={event.id} 
              className="calendar-event-card"
              onClick={() => handleEventClick(event)}
            >
              <div className="event-header">
                <span className="event-tournament">{event.tournament}</span>
                <div className="event-date-time">
                  <div className="event-date">{event.date}</div>
                  <div className="event-time">{event.time} ({selectedTimezone})</div>
                </div>
              </div>

              <div className="event-teams">
                <div className="team">
                  <div className="team-flag">
                    <Flag country={event.teams.home.flag} size="small" />
                  </div>
                  <div className="team-name">{event.homeTeam}</div>
                </div>

                <div className="vs">VS</div>

                <div className="team">
                  <div className="team-flag">
                    <Flag country={event.teams.away.flag} size="small" />
                  </div>
                  <div className="team-name">{event.awayTeam}</div>
                </div>
              </div>

              <div className="event-details">
                <div className="detail-row">
                  <span className="detail-label">📍 Stadium:</span>
                  <span className="detail-value">{event.stadium}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">📺 Broadcast:</span>
                  <span className="broadcast-info">{event.broadcast}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">🎫 Tickets:</span>
                  <span className="ticket-status">{event.tickets}</span>
                </div>
              </div>

              <div className="event-actions">
                <button 
                  className="sync-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToTickets();
                  }}
                >
                  🎫 Get Tickets
                </button>
                <button 
                  className="sync-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCalendar(event);
                  }}
                >
                  📅 Add to Calendar
                </button>
                <button 
                  className="sync-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSetReminder(event);
                  }}
                >
                  ⏰ Set Reminder
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="sync-options">
          <h3 className="sync-title">📲 Sync Calendar to Your Device</h3>
          <div className="sync-buttons">
            <button 
              className="sync-btn"
              onClick={() => handleSyncToCalendar('Google')}
            >
              🔵 Sync with Google Calendar
            </button>
            <button 
              className="sync-btn"
              onClick={() => handleSyncToCalendar('Apple')}
            >
              ⚪️ Sync with Apple Calendar
            </button>
            <button 
              className="sync-btn"
              onClick={() => handleSyncToCalendar('Outlook')}
            >
              🔴 Sync with Outlook
            </button>
            <button 
              className="sync-btn"
              onClick={() => handleSyncToCalendar('iCal')}
            >
              📥 Download iCal File
            </button>
          </div>
        </div>

        <div className="calendar-quick-actions">
          <button 
            className="calendar-quick-btn"
            onClick={() => onNavigateToTickets()}
          >
            🎫 Book Tickets for Featured Matches
          </button>
          <button 
            className="calendar-quick-btn"
            onClick={() => alert('Personalized calendar alerts enabled! You will receive notifications for matches involving your favorite teams.')}
          >
            🔔 Enable Personalized Alerts
          </button>
          <button 
            className="calendar-quick-btn"
            onClick={() => alert('Coming Soon: Filter calendar by tournament, team, or location preferences.')}
          >
            ⚙️ Advanced Filter Options
          </button>
        </div>
      </div>

      <div className="calendar-bottom-ad-banner">
        📱 Never Miss a Game - Sync Calendar & Set Reminders Directly to Your Phone! 🚀
      </div>
    </div>
  );
};

export default GlobalCalendar;