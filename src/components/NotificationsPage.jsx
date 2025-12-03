import React, { useState } from 'react';
import './NotificationsPage.css';
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
      'argentina': 'argentina'
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

const NotificationsPage = ({ onNavigateBack }) => {
  const [notificationSettings, setNotificationSettings] = useState({
    matchAlerts: true,
    scoreUpdates: true,
    teamNews: true,
    tournamentUpdates: false,
    promotionalOffers: false,
    pushNotifications: true,
    emailNotifications: false,
    smsAlerts: false
  });

  const [scheduledMatches, setScheduledMatches] = useState([
    { id: 1, teams: 'Ireland vs France', homeCountry: 'ireland', awayCountry: 'france', time: 'Sat, 3:00 PM', enabled: true },
    { id: 2, teams: 'England vs Scotland', homeCountry: 'england', awayCountry: 'scotland', time: 'Sat, 5:30 PM', enabled: true },
    { id: 3, teams: 'Wales vs Italy', homeCountry: 'wales', awayCountry: 'italy', time: 'Sun, 2:00 PM', enabled: false },
    { id: 4, teams: 'New Zealand vs Australia', homeCountry: 'new-zealand', awayCountry: 'australia', time: 'Sun, 8:35 PM', enabled: true },
    { id: 5, teams: 'South Africa vs Argentina', homeCountry: 'south-africa', awayCountry: 'argentina', time: 'Mon, 4:05 PM', enabled: false }
  ]);

  const handleToggleSetting = (setting) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleToggleMatch = (matchId) => {
    setScheduledMatches(prev => prev.map(match => match.id === matchId ? { ...match, enabled: !match.enabled } : match));
  };

  const getSettingDescription = (key) => {
    const descriptions = {
      matchAlerts: "Get notified when matches are about to start",
      scoreUpdates: "Live score updates every 5 minutes",
      teamNews: "Team announcements, injuries, and lineup changes",
      tournamentUpdates: "Tournament standings and schedule changes",
      promotionalOffers: "Special ticket offers and merchandise deals",
      pushNotifications: "Instant notifications on your device",
      emailNotifications: "Daily and weekly email summaries",
      smsAlerts: "Critical match alerts via text message"
    };
    return descriptions[key] || "Notification setting";
  };

  return (
    <div className="notifications-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Notifications")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      <div className="top-ad-banner">🔔 Never Miss a Rugby Moment - Customize Your Alerts! ⚡</div>

      <div className="notifications-content">
        <div className="notifications-header">
          <div className="notification-icon">🔔</div>
          <h1 className="notifications-title">Rugby Notifications</h1>
          <p className="notifications-subtitle">Stay connected to live rugby action with personalized alerts, score updates, and breaking news from your favorite teams and tournaments</p>
        </div>

        <div className="notification-stats">
          <h3>📊 Your Notification Activity</h3>
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-number">12</div><div className="stat-label">Active Alerts</div></div>
            <div className="stat-item"><div className="stat-number">98%</div><div className="stat-label">Delivery Rate</div></div>
            <div className="stat-item"><div className="stat-number">3</div><div className="stat-label">Upcoming Matches</div></div>
            <div className="stat-item"><div className="stat-number">24/7</div><div className="stat-label">Live Coverage</div></div>
          </div>
        </div>

        <div className="settings-grid">
          <div className="settings-card">
            <h3>⚙️ Notification Preferences</h3>
            <div className="settings-list">
              {Object.entries(notificationSettings).slice(0, 4).map(([key, value]) => (
                <div key={key} className="setting-item">
                  <div className="setting-info">
                    <span className="setting-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).replace('Sms', 'SMS')}</span>
                    <span className="setting-description">{getSettingDescription(key)}</span>
                  </div>
                  <button className={`toggle-btn ${value ? 'active' : ''}`} onClick={() => handleToggleSetting(key)}>
                    <div className="toggle-slider"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="settings-card">
            <h3>📱 Delivery Methods</h3>
            <div className="settings-list">
              {Object.entries(notificationSettings).slice(4).map(([key, value]) => (
                <div key={key} className="setting-item">
                  <div className="setting-info">
                    <span className="setting-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).replace('Sms', 'SMS')}</span>
                    <span className="setting-description">{getSettingDescription(key)}</span>
                  </div>
                  <button className={`toggle-btn ${value ? 'active' : ''}`} onClick={() => handleToggleSetting(key)}>
                    <div className="toggle-slider"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="matches-section">
          <h3>📅 Upcoming Match Alerts</h3>
          <div className="matches-list">
            {scheduledMatches.map(match => (
              <div key={match.id} className="match-item">
                <div className="match-info">
                  <div className="match-teams">
                    <Flag country={match.homeCountry} size="small" />
                    <span className="match-name">{match.teams}</span>
                    <Flag country={match.awayCountry} size="small" />
                  </div>
                  <span className="match-time">{match.time}</span>
                </div>
                <button className={`match-toggle ${match.enabled ? 'active' : ''}`} onClick={() => handleToggleMatch(match.id)}>
                  {match.enabled ? '🔔 ON' : '🔕 OFF'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="actions-section">
          <h3>🚀 Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn primary">🔔 Test Notification</button>
            <button className="action-btn secondary">📱 Enable Push</button>
            <button className="action-btn secondary">✉️ Email Settings</button>
            <button className="action-btn secondary">⚙️ Advanced</button>
          </div>
        </div>

        <div className="preview-section">
          <h3>🎯 Coming Soon Features</h3>
          <div className="preview-grid">
            <div className="preview-card"><div className="preview-icon">🏆</div><h4>Tournament Alerts</h4><p>Get comprehensive updates for entire rugby tournaments and championships</p></div>
            <div className="preview-card"><div className="preview-icon">⭐</div><h4>Player Focus</h4><p>Follow your favorite players and get performance alerts</p></div>
            <div className="preview-card"><div className="preview-icon">🚨</div><h4>Breaking News</h4><p>Instant injury updates, lineup changes, and team announcements</p></div>
            <div className="preview-card"><div className="preview-icon">🌍</div><h4>Global Coverage</h4><p>Expanded alerts for all major rugby competitions worldwide</p></div>
          </div>
        </div>
      </div>

      <div className="bottom-ad-banner">📱 Download Our Mobile App - Enhanced Notifications & Live Updates! 📲</div>
    </div>
  );
};

export default NotificationsPage;