import React, { useState } from 'react';
import './HomePage.css';
import NavBar from './NavBar'; // NEW: Import NavBar component
import FeaturedTournament from './FeaturedTournament';

function HomePage({ 
  onNavigateBack,
  onNavigateToSearch,
  onNavigateToUserProfile,
  onNavigateToMyTeams,
  onNavigateToNews,
  onNavigateToCalendar,
  onNavigateToMensTournaments,
  onNavigateToWomensTournaments,
  onNavigateToFantasyLeagues,
  onNavigateToFinalResults,
  onNavigateToPodcasts,
  onNavigateToPPV,
  onNavigateToAudio,
  onNavigateToGameStats,
  onNavigateToNationalAnthems,
  onNavigateToTournamentMerchandise,
  onNavigateToLiveScores,
  onNavigateToTickets,
  onNavigateToFlights,
  onNavigateToHotels,
  onNavigateToUber,
  onNavigateToNotifications,
  onNavigateToMatchVideos,
  onNavigateToLiveMatchCenter,
  onNavigateToLoyalty,
  onNavigateToTournamentSelector,
  userPreferences
}) {
  const [localPreferences] = useState(userPreferences || {
    favoriteTeams: [],
    followedTournaments: [],
    profileSettings: {
      rugbyFocus: 'both',
      notificationsEnabled: true
    }
  });

  // 🎯 PROFESSIONAL REORGANIZATION - FAN PRIORITY ORDER
  const gridSections = [
    {
      title: "LIVE & URGENT",
      description: "Real-time match updates and immediate actions",
      items: [
        { icon: '⚡', label: 'Live Match Center', description: 'Active Games', action: 'live-center', priority: 'high' },
        { icon: '📊', label: 'Live Scores', description: 'Score Updates', action: 'scores', priority: 'high' },
        { icon: '📅', label: 'Fixtures', description: 'Match Schedule', action: 'calendar', priority: 'high' },
        { icon: '📰', label: 'Breaking News', description: 'Latest Updates', action: 'news', priority: 'high' },
        { icon: '🎥', label: 'Match Videos', description: 'Highlights & Replays', action: 'videos', priority: 'high' },
        { icon: '🔔', label: 'Notifications', description: 'Match Alerts', action: 'notifications', priority: 'high' }
      ]
    },
    {
      title: "MY RUGBY WORLD",
      description: "Your personalized rugby experience",
      items: [
        { icon: '⭐', label: 'Featured Tournament', description: 'Your Priority', action: 'featured-tournament', priority: 'featured' },
        { icon: '👥', label: 'My Teams', description: 'Followed Teams', action: 'my-teams', priority: 'medium' },
        { icon: '📈', label: 'Results & Stats', description: 'Standings & Analysis', action: 'results', priority: 'medium' },
        { icon: '🏅', label: 'Fantasy Rugby', description: 'Dream Team', action: 'fantasy', priority: 'medium' },
        { icon: '🎧', label: 'Podcasts', description: 'Expert Analysis', action: 'podcasts', priority: 'medium' },
        { icon: '🎶', label: 'National Anthems', description: 'Lyrics & Audio', action: 'anthems', priority: 'medium' }
      ]
    },
    {
      title: "TOURNAMENTS & COMPETITIONS",
      description: "Explore all rugby events worldwide",
      items: [
        { icon: '🏆', label: "Men's Tournaments", description: 'All Competitions', action: 'mens-tournaments', priority: 'medium' },
        { icon: '🌟', label: "Women's Tournaments", description: 'All Competitions', action: 'womens-tournaments', priority: 'medium' },
        { icon: '📺', label: 'Live PPV', description: 'Pay-Per-View', action: 'ppv', priority: 'medium' },
        { icon: '🔊', label: 'Live Audio', description: 'Radio Stream', action: 'audio', priority: 'medium' },
        { icon: '📊', label: 'Game Stats', description: 'Detailed Analysis', action: 'game-stats', priority: 'medium' },
        { icon: '💎', label: 'Loyalty Rewards', description: 'Earn Points', action: 'loyalty', priority: 'medium' }
      ]
    },
    {
      title: "MATCH DAY EXPERIENCE",
      description: "Everything you need for the perfect rugby day",
      items: [
        { icon: '🎟️', label: 'Match Tickets', description: 'Buy & Manage', action: 'tickets', priority: 'low' },
        { icon: '🛒', label: 'Merchandise', description: 'Official Gear', action: 'merchandise', priority: 'low' },
        { icon: '🛫', label: 'Flights', description: 'Travel Booking', action: 'flights', priority: 'low' },
        { icon: '🏨', label: 'Hotels', description: 'Accommodation', action: 'hotels', priority: 'low' },
        { icon: '🚗', label: 'Transport', description: 'Ride Services', action: 'uber', priority: 'low' },
        { icon: '🔍', label: 'Search', description: 'Find Anything', action: 'search', priority: 'utility' }
      ]
    }
  ];

  const handleIconClick = (action, label) => {
    switch (action) {
      // LIVE & URGENT
      case "live-center": onNavigateToLiveMatchCenter(); break;
      case "scores": onNavigateToLiveScores(); break;
      case "calendar": onNavigateToCalendar(); break;
      case "news": onNavigateToNews(); break;
      case "videos": onNavigateToMatchVideos(); break;
      case "notifications": onNavigateToNotifications(); break;
      
      // MY RUGBY WORLD
      case "featured-tournament": onNavigateToTournamentSelector(); break;
      case "my-teams": onNavigateToMyTeams(); break;
      case "results": onNavigateToFinalResults(); break;
      case "fantasy": onNavigateToFantasyLeagues(); break;
      case "podcasts": onNavigateToPodcasts(); break;
      case "anthems": onNavigateToNationalAnthems(); break;
      
      // TOURNAMENTS
      case "mens-tournaments": onNavigateToMensTournaments(); break;
      case "womens-tournaments": onNavigateToWomensTournaments(); break;
      case "ppv": onNavigateToPPV(); break;
      case "audio": onNavigateToAudio(); break;
      case "game-stats": onNavigateToGameStats(); break;
      case "loyalty": onNavigateToLoyalty(); break;
      
      // MATCH DAY
      case "tickets": onNavigateToTickets(); break;
      case "merchandise": onNavigateToTournamentMerchandise(); break;
      case "flights": onNavigateToFlights(); break;
      case "hotels": onNavigateToHotels(); break;
      case "uber": onNavigateToUber(); break;
      case "search": onNavigateToSearch(); break;
      
      default: console.log(`Action: ${action} - ${label}`);
    }
  };

  const getPersonalizedWelcome = () => {
    const { rugbyFocus } = localPreferences.profileSettings;
    const teamCount = localPreferences.favoriteTeams.length;
    const tournamentCount = localPreferences.followedTournaments.length;
    
    if (teamCount === 0) {
      return "Your gateway to global rugby - personalized just for you";
    }
    
    let focusText = '';
    if (rugbyFocus === 'mens') focusText = "men's rugby";
    else if (rugbyFocus === 'womens') focusText = "women's rugby";
    else focusText = "rugby union";
    
    return `Welcome to your ${focusText} hub • Following ${teamCount} teams & ${tournamentCount} tournaments`;
  };

  const getNextMatchPreview = () => {
    // Simulated next match data - in real app, this would come from API
    const nextMatches = [
      { teams: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs 🇫🇷", tournament: "Six Nations", date: "Today, 15:00" },
      { teams: "🇳🇿 vs 🇿🇦", tournament: "Rugby Championship", date: "Tomorrow, 08:00" },
      { teams: "🇦🇺 vs 🏴󠁧󠁢󠁷󠁬󠁳󠁿", tournament: "Summer Tests", date: "Sat, 11:30" }
    ];
    
    return nextMatches[0];
  };

  const nextMatch = getNextMatchPreview();

  return (
    <div className="home-page">
      {/* NEW: Modern Navigation Bar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={onNavigateToSearch}
        onNavigateToProfile={onNavigateToUserProfile}
      />

      <div className="home-content">
        {/* Hero Welcome Section */}
        <div className="hero-section">
          <h1 className="welcome-title">
            {localPreferences.favoriteTeams.length > 0 
              ? `Welcome Back, Rugby Fan!` 
              : `Rugby Union International`
            }
          </h1>
          <p className="welcome-subtitle">{getPersonalizedWelcome()}</p>
          
          {/* Next Match Preview */}
          <div className="next-match-preview">
            <div className="match-teams">{nextMatch.teams}</div>
            <div className="match-tournament">{nextMatch.tournament}</div>
            <div className="match-date">{nextMatch.date}</div>
          </div>
        </div>

        {/* Personalized Status Card */}
        {localPreferences.favoriteTeams.length > 0 && (
          <div className="personalized-status-card">
            <div className="status-item">
              <strong>Focus:</strong> {
                localPreferences.profileSettings.rugbyFocus === 'mens' ? "Men's Rugby" :
                localPreferences.profileSettings.rugbyFocus === 'womens' ? "Women's Rugby" :
                'Both Codes'
              }
            </div>
            <div className="status-item">
              <strong>Following:</strong> {localPreferences.favoriteTeams.length} teams
            </div>
            <div className="status-item">
              <strong>Tournaments:</strong> {localPreferences.followedTournaments.length} active
            </div>
          </div>
        )}

        {/* Main Grid Sections */}
        {gridSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="grid-section">
            <div className="section-header">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>
            
            <div className="icon-grid">
              {section.items.map((item, itemIndex) => (
                item.action === 'featured-tournament' ? (
                  <div key={itemIndex} className="featured-tournament-container">
                    <FeaturedTournament 
                      userPreferences={userPreferences}
                      onNavigateToTournamentSelector={onNavigateToTournamentSelector}
                    />
                  </div>
                ) : (
                  <div 
                    key={itemIndex}
                    className={`icon-item icon-item-${item.priority}`}
                    onClick={() => handleIconClick(item.action, item.label)}
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="icon-label">{item.label}</div>
                    <div className="icon-description">{item.description}</div>
                    {item.priority === 'high' && <div className="priority-badge">LIVE</div>}
                  </div>
                )
              ))}
            </div>
          </div>
        ))}

        {/* Quick Actions Footer */}
        <div className="quick-actions-footer">
          <button className="quick-action-btn" onClick={onNavigateToLiveMatchCenter}>
            ⚡ Go to Live Match Center
          </button>
          <button className="quick-action-btn" onClick={onNavigateToNews}>
            📰 Latest Rugby News
          </button>
          <button className="quick-action-btn" onClick={onNavigateToCalendar}>
            📅 Full Match Calendar
          </button>
        </div>
      </div>

      {/* Promotional Footer */}
      <div className="promotional-footer">
        <div className="promo-banner">
          🎽 Limited Edition 2025 Jerseys - Shop Now! 🛒
        </div>
      </div>
    </div>
  );
}

export default HomePage;