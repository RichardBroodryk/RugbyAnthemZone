import React, { useState } from 'react';
import './MatchVideosPage.css';
import NavBar from './NavBar';

const MatchVideosPage = ({ onNavigateBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('highlights');
  
  const videoCategories = [
    { id: 'highlights', name: '🎯 Match Highlights', count: 24 },
    { id: 'analysis', name: '📊 Expert Analysis', count: 18 },
    { id: 'interviews', name: '🎤 Player Interviews', count: 12 },
    { id: 'behind-scenes', name: '🎬 Behind the Scenes', count: 8 }
  ];

  const videos = {
    highlights: [
      { id: 1, title: 'Ireland vs France - Full Highlights', duration: '8:45', views: '125K', date: '2 days ago', thumbnail: '🏉' },
      { id: 2, title: 'England Epic Comeback vs Scotland', duration: '6:20', views: '98K', date: '1 week ago', thumbnail: '🏉' },
      { id: 3, title: 'Best Tries of Six Nations 2024', duration: '12:15', views: '210K', date: '2 weeks ago', thumbnail: '🏉' },
      { id: 4, title: 'Wales vs Italy - Key Moments', duration: '5:30', views: '76K', date: '3 weeks ago', thumbnail: '🏉' },
      { id: 5, title: 'New Zealand Dominance - Rugby Championship', duration: '9:15', views: '156K', date: '1 month ago', thumbnail: '🏉' },
      { id: 6, title: 'Women\'s Rugby World Cup Final', duration: '10:30', views: '189K', date: '2 months ago', thumbnail: '🏉' }
    ],
    analysis: [
      { id: 1, title: 'Tactical Breakdown: Ireland Defense', duration: '15:30', views: '45K', date: '3 days ago', thumbnail: '📈' },
      { id: 2, title: 'Lineout Strategies Analysis', duration: '12:45', views: '32K', date: '1 week ago', thumbnail: '📈' },
      { id: 3, title: 'Scrum Dominance Techniques', duration: '18:20', views: '28K', date: '2 weeks ago', thumbnail: '📈' },
      { id: 4, title: 'Kicking Game Masterclass', duration: '14:10', views: '38K', date: '3 weeks ago', thumbnail: '📈' }
    ],
    interviews: [
      { id: 1, title: 'Captain Interview: Leadership Insights', duration: '7:15', views: '67K', date: '1 day ago', thumbnail: '🎤' },
      { id: 2, title: 'Rookie of the Year Speaks', duration: '5:40', views: '43K', date: '4 days ago', thumbnail: '🎤' },
      { id: 3, title: 'Coach Press Conference Highlights', duration: '9:30', views: '52K', date: '1 week ago', thumbnail: '🎤' },
      { id: 4, title: 'Legends Roundtable Discussion', duration: '22:15', views: '89K', date: '2 weeks ago', thumbnail: '🎤' }
    ],
    'behind-scenes': [
      { id: 1, title: 'Match Day Preparation', duration: '6:50', views: '89K', date: '2 days ago', thumbnail: '🎬' },
      { id: 2, title: 'Team Training Session', duration: '8:15', views: '71K', date: '5 days ago', thumbnail: '🎬' },
      { id: 3, title: 'Locker Room Celebrations', duration: '4:20', views: '112K', date: '1 week ago', thumbnail: '🎬' },
      { id: 4, title: 'Travel Day with the Team', duration: '11:30', views: '64K', date: '2 weeks ago', thumbnail: '🎬' }
    ]
  };

  return (
    <div className="match-videos-page">
      {/* Professional Navigation Bar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Videos")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎥 Rugby Video Library - Exclusive Match Content & Analysis! 📊
      </div>

      {/* Main Content */}
      <div className="videos-content">
        {/* Header */}
        <div className="videos-header">
          <div className="video-icon">🎥</div>
          <h1 className="videos-title">Rugby Video Library</h1>
          <p className="videos-subtitle">
            Exclusive match content, expert analysis, behind-the-scenes footage, and player interviews from the world of rugby
          </p>
        </div>

        {/* Video Stats */}
        <div className="video-stats-section">
          <h3>📈 Video Library Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Total Videos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5M+</div>
              <div className="stat-label">Total Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Tournaments Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">New Content Added</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {videoCategories.map(category => (
            <button
              key={category.id}
              className={`tab-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="tab-name">{category.name}</span>
              <span className="tab-count">{category.count} videos</span>
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="videos-grid">
          {videos[selectedCategory].map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <div className="thumbnail-icon">{video.thumbnail}</div>
                <div className="video-duration">{video.duration}</div>
                <div className="play-overlay">▶️</div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <div className="video-stats">
                  <span className="video-views">👁️ {video.views}</span>
                  <span className="video-date">{video.date}</span>
                </div>
                <button className="watch-btn">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Features */}
        <div className="premium-features">
          <h3>⭐ Premium Video Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h4>Download & Watch Offline</h4>
              <p>Save your favorite videos for offline viewing anytime, anywhere</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎞️</div>
              <h4>Extended Highlights</h4>
              <p>20+ minute comprehensive match coverage with all key moments</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h4>4K Ultra HD</h4>
              <p>Crystal clear video quality for the best viewing experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚫</div>
              <h4>Ad-Free Experience</h4>
              <p>Watch without interruptions or commercial breaks</p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="coming-soon">
          <h3>🚀 Coming Soon to Video Library</h3>
          <div className="coming-soon-list">
            <div className="coming-item">
              <span className="coming-icon">📊</span>
              <span>Interactive Player Stats Overlay</span>
            </div>
            <div className="coming-item">
              <span className="coming-icon">🎧</span>
              <span>Multi-language Commentary Options</span>
            </div>
            <div className="coming-item">
              <span className="coming-icon">📹</span>
              <span>User-Generated Content Hub</span>
            </div>
            <div className="coming-item">
              <span className="coming-icon">⭐</span>
              <span>Exclusive Documentary Series</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏉 Rugby World Cup 2025 - Official Video Content Partner! 🌍
      </div>
    </div>
  );
};

export default MatchVideosPage;