import './UserProfile.css';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

function UserProfile({ userPreferences, onSavePreferences, onNavigateBack }) {
  const [localPreferences, setLocalPreferences] = useState({
    favoriteTeams: [],
    followedTournaments: [],
    profileSettings: {
      rugbyFocus: 'both', // 'mens', 'womens', 'both'
      notificationsEnabled: true
    },
    notificationPreferences: {
      matchAlerts: true,
      scoreUpdates: true,
      newsAlerts: false,
      fantasyReminders: true,
      ticketAlerts: true,
      calendarSync: true
    }
  });

  const [saveStatus, setSaveStatus] = useState('');

  // Available options for selection
  const availableTeams = [
    'New Zealand', 'South Africa', 'England', 'Ireland', 
    'France', 'Australia', 'Wales', 'Scotland', 
    'Argentina', 'Japan', 'Fiji', 'Italy'
  ];

  const availableTournaments = [
    'Six Nations', 'Rugby Championship', 'World Cup', 
    'Summer Internationals', 'Autumn Nations', 
    'Women\'s Six Nations', 'Rugby 7s World Series'
  ];

  const competitionFocusOptions = [
    { value: 'mens', label: '🚹 Men\'s Rugby', description: 'Focus on men\'s tournaments and teams' },
    { value: 'womens', label: '🚺 Women\'s Rugby', description: 'Focus on women\'s tournaments and teams' },
    { value: 'both', label: '⚧ Both Men\'s & Women\'s', description: 'Follow both men\'s and women\'s rugby' }
  ];

  // Initialize with user preferences
  useEffect(() => {
    if (userPreferences) {
      setLocalPreferences(userPreferences);
    }
  }, [userPreferences]);

  const handleTeamToggle = (team) => {
    setLocalPreferences(prev => {
      const currentTeams = prev.favoriteTeams || [];
      const newTeams = currentTeams.includes(team)
        ? currentTeams.filter(t => t !== team)
        : [...currentTeams, team];
      
      return {
        ...prev,
        favoriteTeams: newTeams
      };
    });
  };

  const handleNotificationToggle = (preference) => {
    setLocalPreferences(prev => ({
      ...prev,
      notificationPreferences: {
        ...prev.notificationPreferences,
        [preference]: !prev.notificationPreferences[preference]
      }
    }));
  };

  const handleTournamentToggle = (tournament) => {
    setLocalPreferences(prev => {
      const currentTournaments = prev.followedTournaments || [];
      const newTournaments = currentTournaments.includes(tournament)
        ? currentTournaments.filter(t => t !== tournament)
        : [...currentTournaments, tournament];
      
      return {
        ...prev,
        followedTournaments: newTournaments
      };
    });
  };

  const handleProfileSettingChange = (setting, value) => {
    setLocalPreferences(prev => ({
      ...prev,
      profileSettings: {
        ...prev.profileSettings,
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    try {
      onSavePreferences(localPreferences);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('error');
    }
  };

  const handleCalendarSync = () => {
    if (localPreferences.favoriteTeams.length > 0) {
      alert(`📅 Syncing calendar with matches for: ${localPreferences.favoriteTeams.join(', ')}`);
    } else {
      alert('Please select at least one favorite team to sync calendar events.');
    }
  };

  // Get personalized description based on settings
  const getPersonalizedDescription = () => {
    const { rugbyFocus } = localPreferences.profileSettings;
    const teamCount = localPreferences.favoriteTeams.length;
    
    let focusText = '';
    if (rugbyFocus === 'mens') focusText = 'men\'s rugby';
    else if (rugbyFocus === 'womens') focusText = 'women\'s rugby';
    else focusText = 'both men\'s and women\'s rugby';
    
    return `You're following ${teamCount} teams with focus on ${focusText}`;
  };

  return (
    <div className="user-profile">
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn" onClick={() => window.location.reload()}>🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

      <div className="profile-content">
        <h1>Your Rugby Profile</h1>
        <p>Customize your experience and get personalized content</p>
        
        <div className="personalized-preview">
          <h3>🎯 Your Personalized Experience</h3>
          <div className="personalized-feed">
            {localPreferences.favoriteTeams.length > 0 ? (
              <div>
                <p><strong>Teams:</strong> {localPreferences.favoriteTeams.join(', ')}</p>
                <p><strong>Focus:</strong> {getPersonalizedDescription()}</p>
              </div>
            ) : (
              <p>Select your favorite teams and preferences to get personalized content!</p>
            )}
          </div>
        </div>

        <div className="preferences-section">
          {/* Rugby Focus Selection */}
          <h2>🎯 Rugby Focus</h2>
          <div className="focus-selection">
            {competitionFocusOptions.map(option => (
              <label key={option.value} className="focus-option">
                <input 
                  type="radio" 
                  name="rugbyFocus"
                  value={option.value}
                  checked={localPreferences.profileSettings.rugbyFocus === option.value}
                  onChange={() => handleProfileSettingChange('rugbyFocus', option.value)}
                />
                <div className="focus-content">
                  <div className="focus-label">{option.label}</div>
                  <div className="focus-description">{option.description}</div>
                </div>
              </label>
            ))}
          </div>

          {/* Favorite Teams Selection */}
          <h2>🏉 Favorite Teams</h2>
          <div className="team-selection">
            {availableTeams.map(team => (
              <label key={team}>
                <input 
                  type="checkbox" 
                  checked={localPreferences.favoriteTeams.includes(team)}
                  onChange={() => handleTeamToggle(team)}
                />
                {team}
              </label>
            ))}
          </div>

          {localPreferences.favoriteTeams.length > 0 && (
            <>
              <h3>Your Selected Teams:</h3>
              <div className="teams-list">
                {localPreferences.favoriteTeams.map((team, index) => (
                  <div key={index} className="team-item">
                    {team} 👥
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Followed Tournaments */}
          <h2>📅 Followed Tournaments</h2>
          <div className="team-selection">
            {availableTournaments.map(tournament => (
              <label key={tournament}>
                <input 
                  type="checkbox" 
                  checked={localPreferences.followedTournaments.includes(tournament)}
                  onChange={() => handleTournamentToggle(tournament)}
                />
                {tournament}
              </label>
            ))}
          </div>

          {localPreferences.followedTournaments.length > 0 && (
            <>
              <h3>Your Tournaments:</h3>
              <div className="tournaments-list">
                {localPreferences.followedTournaments.map((tournament, index) => (
                  <div key={index} className="tournament-item">
                    {tournament} 🎯
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Notification Preferences */}
          <h2>🔔 Notification Preferences</h2>
          <div className="preference-item">
            <label>
              <input 
                type="checkbox" 
                checked={localPreferences.notificationPreferences.matchAlerts}
                onChange={() => handleNotificationToggle('matchAlerts')}
              />
              Match Alerts & Live Scores
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input 
                type="checkbox" 
                checked={localPreferences.notificationPreferences.fantasyReminders}
                onChange={() => handleNotificationToggle('fantasyReminders')}
              />
              Fantasy League Reminders
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input 
                type="checkbox" 
                checked={localPreferences.notificationPreferences.newsAlerts}
                onChange={() => handleNotificationToggle('newsAlerts')}
              />
              News & Updates
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input 
                type="checkbox" 
                checked={localPreferences.notificationPreferences.ticketAlerts}
                onChange={() => handleNotificationToggle('ticketAlerts')}
              />
              Ticket Availability Alerts
            </label>
          </div>
          <div className="preference-item">
            <label>
              <input 
                type="checkbox" 
                checked={localPreferences.notificationPreferences.calendarSync}
                onChange={() => handleNotificationToggle('calendarSync')}
              />
              Calendar Sync Notifications
            </label>
          </div>

          {/* Status Messages */}
          {saveStatus === 'success' && (
            <div className="status-message status-success">
              ✅ Preferences saved successfully!
            </div>
          )}
          {saveStatus === 'error' && (
            <div className="status-message status-error">
              ❌ Failed to save preferences. Please try again.
            </div>
          )}

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="save-btn" onClick={handleSave}>
              💾 Save Preferences
            </button>
            <button className="sync-btn" onClick={handleCalendarSync}>
              📅 Sync Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;