import React, { useState } from 'react';
import './MyTeams.css';
import ThemeToggle from './ThemeToggle';

function MyTeams({ 
  userPreferences = {
    favoriteTeams: [],
    followedTournaments: []
  }, 
  onNavigateBack, 
  onNavigateToMensTournaments, 
  onNavigateToWomensTournaments, 
  onNavigateToMensSixNations, 
  onNavigateToWomensSixNations 
}) {
  const hasFavoriteTeams = userPreferences?.favoriteTeams?.length > 0;
  const [activeView, setActiveView] = useState('teams'); // 'teams' or 'tournaments'

  // Sample team data
  const teamData = {
    'New Zealand': {
      flag: '🇳🇿',
      nextMatch: 'vs South Africa - Aug 17',
      recentResult: 'Won vs Australia (35-20)',
      tournament: 'Rugby Championship',
      news: 'All Blacks announce new coaching staff'
    },
    'South Africa': {
      flag: '🇿🇦',
      nextMatch: 'vs New Zealand - Aug 17', 
      recentResult: 'Lost to Ireland (25-30)',
      tournament: 'Rugby Championship',
      news: 'Springboks welcome back injured stars'
    },
    'England': {
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      nextMatch: 'vs France - Feb 1',
      recentResult: 'Won vs Wales (28-14)',
      tournament: 'Six Nations',
      news: 'England name new captain for 2025'
    },
    'Ireland': {
      flag: '🇮🇪',
      nextMatch: 'vs Wales - Feb 8',
      recentResult: 'Won vs South Africa (30-25)',
      tournament: 'Six Nations', 
      news: 'Ireland remain world #1 ranking'
    },
    'France': {
      flag: '🇫🇷',
      nextMatch: 'vs England - Feb 1',
      recentResult: 'Lost to Scotland (20-24)',
      tournament: 'Six Nations',
      news: 'French team announces stadium upgrades'
    },
    'Australia': {
      flag: '🇦🇺',
      nextMatch: 'vs Argentina - Sep 7',
      recentResult: 'Lost to New Zealand (20-35)',
      tournament: 'Rugby Championship',
      news: 'Wallabies rebuild under new coach'
    },
    'Wales': {
      flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
      nextMatch: 'vs Ireland - Feb 8',
      recentResult: 'Lost to England (14-28)',
      tournament: 'Six Nations',
      news: 'Welsh rugby announces development program'
    },
    'Scotland': {
      flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
      nextMatch: 'vs Italy - Feb 2',
      recentResult: 'Won vs France (24-20)',
      tournament: 'Six Nations',
      news: 'Scotland target Six Nations title'
    },
    'Argentina': {
      flag: '🇦🇷',
      nextMatch: 'vs Australia - Sep 7',
      recentResult: 'Won vs Japan (45-12)',
      tournament: 'Rugby Championship',
      news: 'Pumas prepare for Championship campaign'
    },
    'Japan': {
      flag: '🇯🇵',
      nextMatch: 'vs Fiji - Nov 10',
      recentResult: 'Lost to Argentina (12-45)',
      tournament: 'Autumn Internationals',
      news: 'Brave Blossoms focus on development'
    },
    'Fiji': {
      flag: '🇫🇯',
      nextMatch: 'vs Japan - Nov 10',
      recentResult: 'Won vs Samoa (38-15)',
      tournament: 'Autumn Internationals',
      news: 'Fiji Drua make Super Rugby impact'
    },
    'Italy': {
      flag: '🇮🇹',
      nextMatch: 'vs Scotland - Feb 2',
      recentResult: 'Lost to Georgia (18-25)',
      tournament: 'Six Nations',
      news: 'Italy invest in youth development'
    }
  };

  // Get teams that are in Six Nations for personalized tournament view
  const sixNationsTeams = userPreferences?.favoriteTeams?.filter(team => 
    ['England', 'Ireland', 'France', 'Wales', 'Scotland', 'Italy'].includes(team)
  ) || [];

  const hasSixNationsTeams = sixNationsTeams.length > 0;

  const handleViewMatches = (teamName) => {
    console.log(`View matches for ${teamName}`);
    // Navigate to team matches page
  };

  const handleViewNews = (teamName) => {
    console.log(`View news for ${teamName}`);
    // Navigate to team news page
  };

  return (
    <div className="my-teams-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏉 Follow Your Favorite Teams - Personalized Rugby Experience 🌟
      </div>

      {/* Scoped Navigation */}
      <nav className="my-teams-nav">
        <button className="my-teams-nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="my-teams-nav-btn" onClick={() => window.location.reload()}>🏠 Home</button>
        <button className="my-teams-nav-btn">🔍 Search</button>
        <button className="my-teams-nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

      <div className="my-teams-content">
        <h1 className="my-teams-title">My Rugby Dashboard</h1>
        <p className="my-teams-subtitle">Personalized content for your followed teams and tournaments</p>

        {/* View Toggle */}
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${activeView === 'teams' ? 'active' : ''}`}
            onClick={() => setActiveView('teams')}
          >
            🏉 My Teams
          </button>
          <button 
            className={`toggle-btn ${activeView === 'tournaments' ? 'active' : ''}`}
            onClick={() => setActiveView('tournaments')}
          >
            🏆 My Tournaments
          </button>
        </div>

        {activeView === 'teams' ? (
          /* TEAMS VIEW */
          hasFavoriteTeams ? (
            <div className="teams-dashboard">
              <div className="dashboard-header">
                <h2>Your Followed Teams</h2>
                <p>Latest updates and upcoming matches</p>
              </div>
              
              <div className="teams-grid">
                {userPreferences.favoriteTeams.map((team, index) => {
                  const data = teamData[team] || {};
                  return (
                    <div key={team} className="team-card personalized">
                      <div className="team-header">
                        <div className="team-flag">{data.flag || '🏉'}</div>
                        <div className="team-info">
                          <div className="team-name">{team}</div>
                          <div className="team-tournament">{data.tournament || 'International'}</div>
                        </div>
                      </div>
                      
                      <div className="team-content">
                        <div className="match-info">
                          <div className="info-item">
                            <span className="info-label">Next Match:</span>
                            <span className="info-value">{data.nextMatch || 'Schedule TBC'}</span>
                          </div>
                          <div className="info-item">
                            <span className="info-label">Last Result:</span>
                            <span className="info-value">{data.recentResult || 'No recent matches'}</span>
                          </div>
                        </div>
                        
                        <div className="team-news">
                          <strong>Latest News:</strong> 
                          <p>{data.news || 'No recent news updates'}</p>
                        </div>
                      </div>

                      <div className="team-actions">
                        <button 
                          className="team-action-btn view-matches"
                          onClick={() => handleViewMatches(team)}
                        >
                          📅 View Matches
                        </button>
                        <button 
                          className="team-action-btn view-news"
                          onClick={() => handleViewNews(team)}
                        >
                          📰 Team News
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <button className="quick-action-btn" onClick={onNavigateToMensTournaments}>
                  🏆 Browse Men's Tournaments
                </button>
                <button className="quick-action-btn" onClick={onNavigateToWomensTournaments}>
                  🌟 Browse Women's Tournaments
                </button>
                {hasSixNationsTeams && (
                  <button className="quick-action-btn" onClick={onNavigateToMensSixNations}>
                    ⭐ My Six Nations
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🏉</div>
              <h3>No Teams Followed Yet</h3>
              <p>Follow your favorite teams to see personalized content, matches, and news here.</p>
              <button className="cta-btn" onClick={onNavigateBack}>
                ✨ Follow Teams Now
              </button>
            </div>
          )
        ) : (
          /* TOURNAMENTS VIEW */
          <div className="tournaments-view">
            <h2>Your Tournaments</h2>
            
            {/* Six Nations Personalized Section */}
            {hasSixNationsTeams && (
              <div className="tournament-section personalized-tournament">
                <div className="tournament-header">
                  <h3>⭐ My Six Nations</h3>
                  <p>Personalized Six Nations experience with your teams: {sixNationsTeams.join(', ')}</p>
                </div>
                <div className="tournament-actions">
                  <button className="tournament-btn primary" onClick={onNavigateToMensSixNations}>
                    🏆 Open My Six Nations
                  </button>
                  <button className="tournament-btn secondary">
                    📅 Sync Calendar
                  </button>
                </div>
              </div>
            )}

            {/* Other Tournaments */}
            <div className="tournament-section">
              <h3>Other Followed Tournaments</h3>
              <div className="tournament-cards">
                {userPreferences?.followedTournaments?.length > 0 ? (
                  userPreferences.followedTournaments.map((tournament, index) => (
                    <div key={index} className="tournament-card">
                      <div className="tournament-name">{tournament}</div>
                      <button className="tournament-action-btn">
                        View Tournament
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="no-tournaments">No other tournaments followed</p>
                )}
              </div>
            </div>

            {(!userPreferences?.followedTournaments?.length && !hasSixNationsTeams) && (
              <div className="empty-state">
                <div className="empty-icon">🏆</div>
                <h3>No Tournaments Followed</h3>
                <p>Follow tournaments to see personalized content and updates here.</p>
                <button className="cta-btn" onClick={onNavigateToMensTournaments}>
                  🏆 Browse Tournaments
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎟️ Get Match Tickets - Support Your Team Live! 🏟️
      </div>
    </div>
  );
}

export default MyTeams;