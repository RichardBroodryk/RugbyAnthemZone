import './GlobalCalendar.css';
import { useState } from 'react';

function GlobalCalendar({ 
  onNavigateBack, 
  onNavigateToUserProfile,
  onNavigateToTickets,
  userStatus 
}) {
  const [activeView, setActiveView] = useState('upcoming');
  const [timezone, setTimezone] = useState('local');
  
  const timezones = [
    { value: 'local', label: 'Your Local Time' },
    { value: 'utc', label: 'UTC' },
    { value: 'london', label: 'London (GMT)' },
    { value: 'sydney', label: 'Sydney (AEST)' },
    { value: 'tokyo', label: 'Tokyo (JST)' },
    { value: 'newyork', label: 'New York (EST)' },
    { value: 'paris', label: 'Paris (CET)' }
  ];

  const sampleEvents = [
    {
      id: 1,
      tournament: "Six Nations 2025",
      date: "2025-02-01",
      time: "15:00",
      timezone: "GMT",
      team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      team2: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
      stadium: "Twickenham Stadium, London",
      capacity: "82,000",
      broadcast: "BBC, ITV, Peacock",
      ticketStatus: "Limited Availability",
      matchType: "Opening Match"
    },
    {
      id: 2,
      tournament: "Rugby Championship",
      date: "2025-08-10",
      time: "17:05",
      timezone: "SAST",
      team1: { name: "South Africa", flag: "🇿🇦" },
      team2: { name: "New Zealand", flag: "🇳🇿" },
      stadium: "Ellis Park, Johannesburg",
      capacity: "62,000",
      broadcast: "Sky Sport, SuperSport",
      ticketStatus: "On Sale Now",
      matchType: "Championship Decider"
    },
    {
      id: 3,
      tournament: "Women's Six Nations",
      date: "2025-03-22",
      time: "14:15",
      timezone: "GMT",
      team1: { name: "France", flag: "🇫🇷" },
      team2: { name: "Ireland", flag: "🇮🇪" },
      stadium: "Stade de France, Paris",
      capacity: "78,000",
      broadcast: "BBC Two, France 2",
      ticketStatus: "Good Availability",
      matchType: "Grand Slam Decider"
    },
    {
      id: 4,
      tournament: "Summer Internationals",
      date: "2025-07-05",
      time: "20:00",
      timezone: "AEST",
      team1: { name: "Australia", flag: "🇦🇺" },
      team2: { name: "British Lions", flag: "🦁" },
      stadium: "Sydney Cricket Ground",
      capacity: "48,000",
      broadcast: "Stan Sport, Sky Sports",
      ticketStatus: "Sold Out",
      matchType: "First Test"
    },
    {
      id: 5,
      tournament: "Autumn Nations",
      date: "2025-11-08",
      time: "14:30",
      timezone: "GMT",
      team1: { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
      team2: { name: "Argentina", flag: "🇦🇷" },
      stadium: "Murrayfield, Edinburgh",
      capacity: "67,000",
      broadcast: "Amazon Prime, ESPN",
      ticketStatus: "Coming Soon",
      matchType: "International Friendly"
    },
    {
      id: 6,
      tournament: "Rugby World Cup 2027",
      date: "2027-09-18",
      time: "19:45",
      timezone: "AEST",
      team1: { name: "Fiji", flag: "🇫🇯" },
      team2: { name: "Japan", flag: "🇯🇵" },
      stadium: "Suncorp Stadium, Brisbane",
      capacity: "52,000",
      broadcast: "World Rugby TV Partners",
      ticketStatus: "Pre-registration Open",
      matchType: "Pool Stage"
    }
  ];

  const filteredEvents = activeView === 'upcoming' 
    ? sampleEvents 
    : sampleEvents.filter(event => event.tournament.toLowerCase().includes(activeView));

  const handleEventClick = (event) => {
    // In a real app, this would show detailed event modal
    alert(`Event Details: ${event.team1.name} vs ${event.team2.name}\n\nStadium: ${event.stadium}\nBroadcast: ${event.broadcast}\nTickets: ${event.ticketStatus}`);
  };

  const handleSyncCalendar = (platform) => {
    alert(`Syncing with ${platform}...\n\nAll upcoming matches will be added to your calendar with timezone conversion.`);
  };

  const handleSetReminder = (event) => {
    alert(`Reminder set for: ${event.team1.name} vs ${event.team2.name}\n\nYou'll receive notifications 24 hours and 1 hour before the match.`);
  };

  const handleBuyTickets = (event) => {
    if (event.ticketStatus === "Sold Out") {
      alert("This match is sold out. Join the waiting list for returned tickets.");
    } else if (event.ticketStatus === "Coming Soon") {
      alert("Tickets for this match will be available soon. We'll notify you when they go on sale.");
    } else {
      onNavigateToTickets();
    }
  };

  const convertTimezone = (time, fromTimezone, toTimezone) => {
    // Simplified timezone conversion - in real app would use proper timezone library
    const conversions = {
      'GMT->local': '+0h',
      'SAST->local': '+1h', 
      'AEST->local': '+9h',
      'GMT->newyork': '-5h',
      'GMT->sydney': '+10h',
      'GMT->tokyo': '+9h'
    };
    
    const key = `${fromTimezone}->${toTimezone}`;
    return conversions[key] || time;
  };

  return (
    <div className="global-calendar-page">
      <div className="calendar-top-ad-banner">
        🏆 Never Miss a Match - Sync Your Calendar! 📅
      </div>

      <nav className="calendar-top-nav">
        <button className="calendar-nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="calendar-nav-btn" onClick={() => window.location.reload()}>🏠 Home</button>
        <button className="calendar-nav-btn">🔍 Search Events</button>
        <button className="calendar-nav-btn" onClick={onNavigateToUserProfile}>👤 Profile</button>
      </nav>

      <div className="calendar-content">
        <h1 className="calendar-title">Global Rugby Calendar</h1>
        <p className="calendar-subtitle">Comprehensive Schedule with Timezone Conversion & Live Updates</p>
        
        <div className="calendar-premium-badge">
          ⭐ PROFESSIONAL CALENDAR SYSTEM - SYNC, REMINDERS & ALERTS
        </div>

        {/* Calendar Controls */}
        <div className="calendar-controls">
          <div className="calendar-view-toggle">
            <button 
              className={`view-toggle-btn ${activeView === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveView('upcoming')}
            >
              📅 All Upcoming
            </button>
            <button 
              className={`view-toggle-btn ${activeView === 'six nations' ? 'active' : ''}`}
              onClick={() => setActiveView('six nations')}
            >
              🏆 Six Nations
            </button>
            <button 
              className={`view-toggle-btn ${activeView === 'world cup' ? 'active' : ''}`}
              onClick={() => setActiveView('world cup')}
            >
              🌍 World Cup
            </button>
            <button 
              className={`view-toggle-btn ${activeView === 'championship' ? 'active' : ''}`}
              onClick={() => setActiveView('championship')}
            >
              🥇 Rugby Championship
            </button>
          </div>

          <select 
            className="timezone-selector"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            {timezones.map(tz => (
              <option key={tz.value} value={tz.value}>
                🕐 {tz.label}
              </option>
            ))}
          </select>
        </div>

        {/* Sync Options */}
        <div className="sync-options">
          <h3 className="sync-title">Sync to Your Calendar</h3>
          <div className="sync-buttons">
            <button className="sync-btn" onClick={() => handleSyncCalendar('Google Calendar')}>
              📅 Google Calendar
            </button>
            <button className="sync-btn" onClick={() => handleSyncCalendar('Apple Calendar')}>
              🍎 Apple Calendar
            </button>
            <button className="sync-btn" onClick={() => handleSyncCalendar('Outlook')}>
              📧 Outlook
            </button>
            <button className="sync-btn" onClick={() => handleSyncCalendar('iCal')}>
              📥 Download iCal
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="calendar-grid">
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              className="calendar-event-card"
              onClick={() => handleEventClick(event)}
            >
              <div className="event-header">
                <span className="event-tournament">{event.tournament}</span>
                <div className="event-date-time">
                  <div className="event-date">{event.date}</div>
                  <div className="event-time">
                    {event.time} {event.timezone} 
                    {timezone !== 'local' && ` → ${convertTimezone(event.time, event.timezone.toLowerCase(), timezone)}`}
                  </div>
                </div>
              </div>

              <div className="event-teams">
                <div className="team">
                  <div className="team-flag">{event.team1.flag}</div>
                  <div className="team-name">{event.team1.name}</div>
                </div>
                <div className="vs">VS</div>
                <div className="team">
                  <div className="team-flag">{event.team2.flag}</div>
                  <div className="team-name">{event.team2.name}</div>
                </div>
              </div>

              <div className="event-details">
                <div className="detail-row">
                  <span className="detail-label">📍 Stadium:</span>
                  <span className="detail-value">{event.stadium}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">🎯 Match Type:</span>
                  <span className="detail-value">{event.matchType}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">📺 Broadcast:</span>
                  <span className="detail-value broadcast-info">{event.broadcast}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">🎟️ Tickets:</span>
                  <span className="detail-value ticket-status">{event.ticketStatus}</span>
                </div>
              </div>

              <div className="event-actions" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
                <button 
                  className="sync-btn" 
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={(e) => { e.stopPropagation(); handleSetReminder(event); }}
                >
                  ⏰ Reminder
                </button>
                <button 
                  className="sync-btn" 
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={(e) => { e.stopPropagation(); handleBuyTickets(event); }}
                >
                  🎟️ Tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="calendar-quick-actions">
          <button className="calendar-quick-btn" onClick={() => setActiveView('six nations')}>
            🏆 Six Nations Schedule
          </button>
          <button className="calendar-quick-btn" onClick={() => setActiveView('world cup')}>
            🌍 World Cup 2027
          </button>
          <button className="calendar-quick-btn" onClick={() => handleSyncCalendar('Google Calendar')}>
            📅 Sync All Events
          </button>
          <button className="calendar-quick-btn" onClick={onNavigateToTickets}>
            🎟️ Browse All Tickets
          </button>
        </div>
      </div>

      <div className="calendar-bottom-ad-banner">
        🎟️ Official Ticket Partner - Best Seats Guaranteed! 🏟️
      </div>
    </div>
  );
}

export default GlobalCalendar;