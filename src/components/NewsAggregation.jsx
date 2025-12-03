import './NewsAggregation.css';
import { useState } from 'react';
import NavBar from './NavBar';

function NewsAggregation({ 
  onNavigateBack, 
  onNavigateToUserProfile,
  userStatus 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const newsCategories = [
    { id: 'all', label: 'All News', icon: '📰' },
    { id: 'breaking', label: 'Breaking News', icon: '🚨' },
    { id: 'transfers', label: 'Transfer News', icon: '🔄' },
    { id: 'injuries', label: 'Injury Updates', icon: '🏥' },
    { id: 'interviews', label: 'Exclusive Interviews', icon: '🎤' },
    { id: 'press', label: 'Press Conferences', icon: '📢' },
    { id: 'rumors', label: 'Rumors', icon: '🤫' }
  ];

  const sampleNews = [
    {
      id: 1,
      title: "All Blacks Announce New Head Coach for 2025 Season",
      excerpt: "New Zealand Rugby confirms the appointment of Scott Robertson as the new head coach, bringing fresh strategies to the team.",
      source: "NZ Rugby Official",
      time: "2 hours ago",
      category: "breaking",
      tags: ["All Blacks", "Coaching", "Official"],
      featured: true
    },
    {
      id: 2,
      title: "Springbok Star Suffers Hamstring Injury in Training",
      excerpt: "Key player ruled out of upcoming championship matches after training ground incident. Recovery expected in 4-6 weeks.",
      source: "Team Medical",
      time: "5 hours ago",
      category: "injuries",
      tags: ["Springboks", "Injury", "Medical"],
      featured: false
    },
    {
      id: 3,
      title: "Exclusive: England Fly-Half Considering Move to French Club",
      excerpt: "Sources reveal top English player in talks with Top 14 clubs for a record-breaking transfer next season.",
      source: "Transfer Insider",
      time: "1 day ago",
      category: "transfers",
      tags: ["England", "Transfer", "Top 14"],
      featured: true
    },
    {
      id: 4,
      title: "Rugby World Cup 2027 Venues Officially Announced",
      excerpt: "Australia reveals stadium lineup for the upcoming World Cup, featuring state-of-the-art facilities across the country.",
      source: "World Rugby",
      time: "1 day ago",
      category: "breaking",
      tags: ["World Cup", "Australia", "Venues"],
      featured: false
    },
    {
      id: 5,
      title: "Captain's Press Conference: Team Strategy Revealed",
      excerpt: "National team captain discusses upcoming tournament tactics and team preparation in detailed press session.",
      source: "Rugby Press",
      time: "2 days ago",
      category: "press",
      tags: ["Press", "Strategy", "Captain"],
      featured: false
    },
    {
      id: 6,
      title: "Injury Update: Three Key Players Return to Training",
      excerpt: "Positive news as injured stars resume full training, boosting team options for crucial upcoming matches.",
      source: "Team Update",
      time: "2 days ago",
      category: "injuries",
      tags: ["Recovery", "Training", "Squad"],
      featured: false
    }
  ];

  const breakingNews = {
    title: "URGENT: Major Tournament Format Changes Announced for 2026",
    time: "Just now",
    source: "World Rugby"
  };

  const filteredNews = activeCategory === 'all' 
    ? sampleNews 
    : sampleNews.filter(news => news.category === activeCategory);

  const featuredNews = sampleNews.filter(news => news.featured);

  const handleNewsClick = (newsItem) => {
    // In a real app, this would navigate to full article
    alert(`Opening: ${newsItem.title}\n\nFull article feature coming soon!`);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="news-aggregation-page">
      {/* Professional Navigation Bar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search News")}
        onNavigateToProfile={onNavigateToUserProfile}
      />

      <div className="news-top-ad-banner">
        🏆 Rugby World Cup 2025 - Official News Partner 🌍
      </div>

      <div className="news-content">
        <h1 className="news-title">Rugby News Aggregation</h1>
        <p className="news-subtitle">Your Ultimate Source for Global Rugby News & Updates</p>
        
        <div className="news-premium-badge">
          📰 COMPREHENSIVE NEWS COVERAGE - ALL SOURCES, ONE PLATFORM
        </div>

        {/* Breaking News Banner */}
        <div className="breaking-news-banner">
          🚨 BREAKING: {breakingNews.title} - {breakingNews.time} | Source: {breakingNews.source}
        </div>

        {/* News Categories */}
        <div className="news-categories">
          {newsCategories.map(category => (
            <button
              key={category.id}
              className={`news-category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && activeCategory === 'all' && (
          <div className="featured-news">
            <h2 className="featured-news-title">⭐ Featured Stories</h2>
            <div className="news-grid">
              {featuredNews.map(news => (
                <div 
                  key={news.id}
                  className="news-card"
                  onClick={() => handleNewsClick(news)}
                >
                  <div className="news-card-header">
                    <span className="news-source">{news.source}</span>
                    <span className="news-time">{news.time}</span>
                  </div>
                  <h3 className="news-card-title">{news.title}</h3>
                  <p className="news-card-excerpt">{news.excerpt}</p>
                  <div className="news-card-footer">
                    <div className="news-tags">
                      {news.tags.map((tag, index) => (
                        <span key={index} className="news-tag">#{tag}</span>
                      ))}
                    </div>
                    <button className="news-read-more">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main News Grid */}
        <div className="news-grid">
          {filteredNews.map(news => (
            <div 
              key={news.id}
              className="news-card"
              onClick={() => handleNewsClick(news)}
            >
              <div className="news-card-header">
                <span className="news-source">{news.source}</span>
                <span className="news-time">{news.time}</span>
              </div>
              <h3 className="news-card-title">{news.title}</h3>
              <p className="news-card-excerpt">{news.excerpt}</p>
              <div className="news-card-footer">
                <div className="news-tags">
                  {news.tags.map((tag, index) => (
                    <span key={index} className="news-tag">#{tag}</span>
                  ))}
                </div>
                <button className="news-read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="news-quick-actions">
          <button className="news-quick-btn" onClick={() => setActiveCategory('breaking')}>
            🚨 View Breaking News
          </button>
          <button className="news-quick-btn" onClick={() => setActiveCategory('transfers')}>
            🔄 Latest Transfers
          </button>
          <button className="news-quick-btn" onClick={() => setActiveCategory('injuries')}>
            🏥 Injury Updates
          </button>
          <button className="news-quick-btn" onClick={() => setActiveCategory('interviews')}>
            🎤 Exclusive Interviews
          </button>
        </div>
      </div>

      <div className="news-bottom-ad-banner">
        📰 Stay Updated - Download Our News App! 📱
      </div>
    </div>
  );
}

export default NewsAggregation;