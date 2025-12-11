import React, { useState } from 'react';
import './FixturesPage.css';
import NavBar from './NavBar';

function FixturesPage({ onNavigateBack }) {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const fixtures = [
    { date: '2024-03-15', tournament: 'Six Nations', teams: 'England vs France', time: '15:00 GMT', venue: 'Twickenham', status: 'upcoming' },
    { date: '2024-03-16', tournament: 'Six Nations', teams: 'Ireland vs Scotland', time: '14:15 GMT', venue: 'Aviva Stadium', status: 'upcoming' },
    { date: '2024-03-16', tournament: 'Six Nations', teams: 'Wales vs Italy', time: '16:45 GMT', venue: 'Principality Stadium', status: 'upcoming' },
    { date: '2024-07-06', tournament: 'Rugby Championship', teams: 'New Zealand vs Argentina', time: 'TBC', venue: 'Eden Park', status: 'upcoming' },
    { date: '2024-07-06', tournament: 'Rugby Championship', teams: 'Australia vs South Africa', time: 'TBC', venue: 'Suncorp Stadium', status: 'upcoming' },
    { date: '2024-09-07', tournament: 'Women\'s Six Nations', teams: 'England vs France', time: 'TBC', venue: 'Twickenham', status: 'upcoming' },
  ];

  const filteredFixtures = fixtures.filter(fixture => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'six-nations') return fixture.tournament === 'Six Nations';
    if (activeFilter === 'rugby-championship') return fixture.tournament === 'Rugby Championship';
    if (activeFilter === 'womens') return fixture.tournament.includes("Women's");
    return true;
  });

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="fixtures-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Fixtures")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      <div className="top-ad-banner">📅 Never Miss a Match - Complete Rugby Fixtures Calendar 2024! 🏉</div>

      <div className="fixtures-content">
        <h1 className="fixtures-title">📅 Rugby Fixtures & Schedule</h1>
        <p className="fixtures-subtitle">Complete calendar of upcoming international rugby matches across all major tournaments</p>
        
        <div className="fixtures-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{fixtures.length}</div>
              <div className="stat-label" style={{color: 'black'}}>Upcoming Matches</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label" style={{color: 'black'}}>Tournaments</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label" style={{color: 'black'}}>Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label" style={{color: 'black'}}>Live Updates</div>
            </div>
          </div>
        </div>
        
        <div className="fixtures-controls">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            🌍 All Tournaments
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'six-nations' ? 'active' : ''}`}
            onClick={() => handleFilterClick('six-nations')}
          >
            🏆 Six Nations
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'rugby-championship' ? 'active' : ''}`}
            onClick={() => handleFilterClick('rugby-championship')}
          >
            🌏 Rugby Championship
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'womens' ? 'active' : ''}`}
            onClick={() => handleFilterClick('womens')}
          >
            👩 Women's Tournaments
          </button>
        </div>
        
        <div className="fixtures-list">
          {filteredFixtures.map((fixture, index) => (
            <div key={index} className="fixture-card">
              <div className="fixture-header">
                <span className="tournament-badge">{fixture.tournament}</span>
                <span className="fixture-date">{fixture.date}</span>
                <span className="fixture-status">{fixture.status === 'live' ? '🔴 LIVE' : '🟢 UPCOMING'}</span>
              </div>
              
              <div className="fixture-details">
                <div className="teams">
                  <span className="team-name">{fixture.teams}</span>
                </div>
                
                <div className="fixture-info">
                  <div className="info-item">
                    <span className="info-icon">🕒</span>
                    <span className="info-text" style={{color: 'black'}}>{fixture.time}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🏟️</span>
                    <span className="info-text" style={{color: 'black'}}>{fixture.venue}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span className="info-text" style={{color: 'black'}}>{fixture.tournament}</span>
                  </div>
                </div>
              </div>
              
              <div className="fixture-actions">
                <button className="ticket-btn">🎟️ Get Tickets</button>
                <button className="reminder-btn">🔔 Set Reminder</button>
                <button className="info-btn">📊 Match Info</button>
                <button className="stream-btn">📺 Live Stream</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="coming-up-section">
          <h3>📢 Highlighted Tournaments</h3>
          <div className="coming-up-grid">
            <div className="coming-up-item">
              <div className="tournament-icon">🏆</div>
              <div className="coming-up-details">
                <h4 style={{color: 'black'}}>Six Nations 2024</h4>
                <p style={{color: 'black'}}>Final Weekend: March 15-16, 2024</p>
                <small>🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇫🇷 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇮🇪 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇮🇹</small>
              </div>
            </div>
            <div className="coming-up-item">
              <div className="tournament-icon">🌏</div>
              <div className="coming-up-details">
                <h4 style={{color: 'black'}}>Rugby Championship</h4>
                <p style={{color: 'black'}}>Starting: July 6, 2024</p>
                <small>🇳🇿 🇦🇺 🇿🇦 🇦🇷</small>
              </div>
            </div>
            <div className="coming-up-item">
              <div className="tournament-icon">👑</div>
              <div className="coming-up-details">
                <h4 style={{color: 'black'}}>Women's Six Nations</h4>
                <p style={{color: 'black'}}>March 23 - April 27, 2024</p>
                <small>🏴󠁧󠁢󠁥󠁮󠁧󠁿 🇫🇷 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🇮🇪 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇮🇹</small>
              </div>
            </div>
            <div className="coming-up-item">
              <div className="tournament-icon">🏉</div>
              <div className="coming-up-details">
                <h4 style={{color: 'black'}}>Summer Internationals</h4>
                <p style={{color: 'black'}}>June - July 2024</p>
                <small>🌍 Global Test Matches</small>
              </div>
            </div>
          </div>
        </div>

        <div className="calendar-integration">
          <h3>📅 Add to Calendar</h3>
          <div className="calendar-buttons">
            <button className="calendar-btn google">📅 Google Calendar</button>
            <button className="calendar-btn apple">📱 Apple Calendar</button>
            <button className="calendar-btn outlook">📧 Outlook</button>
            <button className="calendar-btn ical">⬇️ iCal File</button>
          </div>
        </div>
      </div>

      <div className="bottom-ad-banner">🎟️ Book Your Tickets Now - Limited Availability for Major Fixtures! ⚡</div>
    </div>
  );
}

export default FixturesPage;