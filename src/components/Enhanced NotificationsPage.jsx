import './NotificationsPage.css';
import { useState, useEffect } from 'react';

function NotificationsPage({ onNavigateBack, userPreferences }) {
  const [notificationPermission, setNotificationPermission] = useState('default');
  const [scheduledNotifications, setScheduledNotifications] = useState([]);
  const [notificationHistory, setNotificationHistory] = useState([
    { id: 1, type: 'match', title: 'Match Starting Soon', message: 'NZ vs Australia begins in 30min', time: '10:30 AM', read: false },
    { id: 2, type: 'fantasy', title: 'Fantasy Deadline', message: 'Team selection closes in 2 hours', time: '9:15 AM', read: true },
    { id: 3, type: 'news', title: 'Team News', message: 'Player injury update available', time: 'Yesterday', read: true }
  ]);

  // Check notification permission on load
  useEffect(() => {
    checkNotificationPermission();
    scheduleDemoNotifications();
  }, []);

  const checkNotificationPermission = () => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  };

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('Your browser does not support notifications');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      
      if (permission === 'granted') {
        showBrowserNotification('Notifications Enabled!', 'You will now receive rugby match alerts and updates.');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const showBrowserNotification = (title, message) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body: message,
        icon: '/rugby-icon.png', // You can add this icon later
        badge: '/badge-icon.png',
        tag: 'rugby-app'
      });

      // Add to history
      const newNotification = {
        id: Date.now(),
        type: 'system',
        title,
        message,
        time: new Date().toLocaleTimeString(),
        read: false
      };
      setNotificationHistory(prev => [newNotification, ...prev]);

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
  };

  const scheduleDemoNotifications = () => {
    // Clear any existing scheduled notifications
    scheduledNotifications.forEach(id => clearTimeout(id));
    
    const newScheduled = [];
    
    // Schedule demo match notification (2 minutes from now)
    const matchNotificationId = setTimeout(() => {
      showBrowserNotification('🏉 Match Alert!', 'New Zealand vs Australia starting in 15 minutes!');
    }, 2 * 60 * 1000); // 2 minutes
    newScheduled.push(matchNotificationId);
    
    // Schedule fantasy reminder (4 minutes from now)
    const fantasyNotificationId = setTimeout(() => {
      showBrowserNotification('🏅 Fantasy Reminder', 'Don\'t forget to update your team! Deadline approaching.');
    }, 4 * 60 * 1000); // 4 minutes
    newScheduled.push(fantasyNotificationId);
    
    setScheduledNotifications(newScheduled);
  };

  const sendTestNotification = () => {
    showBrowserNotification('Test Notification', 'This is a test notification from Rugby Union International!');
  };

  const markAsRead = (id) => {
    setNotificationHistory(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const clearAllNotifications = () => {
    setNotificationHistory([]);
  };

  const getUnreadCount = () => {
    return notificationHistory.filter(notif => !notif.read).length;
  };

  return (
    <div className="notifications-page">
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      <div className="notifications-content">
        <h1>🔔 Notifications</h1>
        
        {/* Notification Status Card */}
        <div className="status-card">
          <div className="status-header">
            <h2>Notification Status</h2>
            <span className={`status-badge ${notificationPermission}`}>
              {notificationPermission.toUpperCase()}
            </span>
          </div>
          
          {notificationPermission === 'default' && (
            <div className="status-message">
              <p>Enable notifications to get live match updates, fantasy reminders, and breaking news.</p>
              <button className="enable-btn" onClick={requestNotificationPermission}>
                🔔 Enable Notifications
              </button>
            </div>
          )}
          
          {notificationPermission === 'granted' && (
            <div className="status-message granted">
              <p>✅ Notifications are enabled! You'll receive alerts for:</p>
              <ul>
                <li>Live match scores and starts</li>
                <li>Fantasy league deadlines</li>
                <li>Breaking rugby news</li>
                <li>Personalized team updates</li>
              </ul>
              <button className="test-btn" onClick={sendTestNotification}>
                🧪 Send Test Notification
              </button>
            </div>
          )}
          
          {notificationPermission === 'denied' && (
            <div className="status-message denied">
              <p>❌ Notifications are blocked. To enable them:</p>
              <ol>
                <li>Click the lock icon in your browser's address bar</li>
                <li>Find "Notifications" in the site settings</li>
                <li>Change the setting to "Allow"</li>
                <li>Refresh this page</li>
              </ol>
            </div>
          )}
        </div>

        {/* Notification History */}
        <div className="history-section">
          <div className="section-header">
            <h2>Notification History</h2>
            <div className="header-actions">
              <span className="unread-count">{getUnreadCount()} unread</span>
              <button className="clear-btn" onClick={clearAllNotifications}>
                🗑️ Clear All
              </button>
            </div>
          </div>
          
          <div className="notifications-list">
            {notificationHistory.length === 0 ? (
              <div className="empty-state">
                <p>No notifications yet</p>
                <small>Notifications will appear here when you receive them</small>
              </div>
            ) : (
              notificationHistory.map(notification => (
                <div 
                  key={notification.id} 
                  className={`notification-item ${notification.type} ${notification.read ? 'read' : 'unread'}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="notification-icon">
                    {notification.type === 'match' && '🏉'}
                    {notification.type === 'fantasy' && '🏅'}
                    {notification.type === 'news' && '📰'}
                    {notification.type === 'system' && '🔔'}
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">{notification.title}</div>
                    <div className="notification-message">{notification.message}</div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                  {!notification.read && <div className="unread-dot"></div>}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Demo Controls */}
        <div className="demo-controls">
          <h3>Demo Controls</h3>
          <p>Test different notification types:</p>
          <div className="demo-buttons">
            <button className="demo-btn match" onClick={() => showBrowserNotification('🏉 Match Update', 'Try scored! New Zealand 7 - Australia 0')}>
              Match Update
            </button>
            <button className="demo-btn fantasy" onClick={() => showBrowserNotification('🏅 Fantasy Alert', 'Your captain just scored 25 points!')}>
              Fantasy Alert
            </button>
            <button className="demo-btn news" onClick={() => showBrowserNotification('📰 Breaking News', 'Major team announcement coming soon')}>
              Breaking News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;