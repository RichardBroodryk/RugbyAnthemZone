import React from 'react';
import './HomePage.css';
import NavBar from './NavBar';

function HomePage({
  // Navigation functions
  onNavigateBack,
  onNavigateToSearch,
  onNavigateToUserProfile,
  onNavigateToMensTournaments,
  onNavigateToWomensTournaments,
  onNavigateToAnthems,
  onNavigateToLiveMatchCenter,
  onNavigateToLiveScores,
  onNavigateToFixtures,
  onNavigateToResultsStats,
  onNavigateToGameStats,
  onNavigateToBreakingNews,
  onNavigateToNotifications,
  onNavigateToPodcasts,
  onNavigateToMatchVideos,
  onNavigateToLivePPV,
  onNavigateToLiveAudio,
  onNavigateToLoyaltyRewards,
  onNavigateToMyTeams,
  onNavigateToFantasyRugby,
  onNavigateToTickets,
  onNavigateToMerchandise,
  onNavigateToUber,
  onNavigateToFlights,
  onNavigateToHotels,
  onNavigateToAllStadiums,
  onNavigateToCalendar,
  onNavigateToNews
}) {

  return (
    <div className="home-page">
      {/* NAVBAR */}
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
        {/* 1) Welcome Title Section */}
        <div className="main-welcome-section">
          <div className="welcome-text">Welcome to</div>
          <h1 className="main-title">THE RUGBY ANTHEM ZONE!</h1>
        </div>

        {/* ===== FIRST SET OF FEATURE BLOCKS (3 rows of 3) ===== */}
        
        {/* Row 1: Men's Tournaments, Women's Tournaments, Anthems */}
        <div className="feature-grid-row">
          <div className="feature-block" onClick={onNavigateToMensTournaments}>
            <div className="feature-icon">🏆</div>
            <h3 className="feature-label">Men's Tournaments</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToWomensTournaments}>
            <div className="feature-icon">🌟</div>
            <h3 className="feature-label">Women's Tournaments</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToAnthems}>
            <div className="feature-icon">🎶</div>
            <h3 className="feature-label">Anthems</h3>
          </div>
        </div>

        {/* Row 2: Live Match Center, Live Scores, Fixtures */}
        <div className="feature-grid-row">
          <div className="feature-block" onClick={onNavigateToLiveMatchCenter}>
            <div className="feature-icon">⚡</div>
            <h3 className="feature-label">Live Match Center</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToLiveScores}>
            <div className="feature-icon">📊</div>
            <h3 className="feature-label">Live Scores</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToFixtures}>
            <div className="feature-icon">📅</div>
            <h3 className="feature-label">Fixtures</h3>
          </div>
        </div>

        {/* Row 3: Results and stats, Game stats, Breaking News */}
        <div className="feature-grid-row">
          <div className="feature-block" onClick={onNavigateToResultsStats}>
            <div className="feature-icon">📈</div>
            <h3 className="feature-label">Results & Stats</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToGameStats}>
            <div className="feature-icon">📋</div>
            <h3 className="feature-label">Game Stats</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToBreakingNews}>
            <div className="feature-icon">📰</div>
            <h3 className="feature-label">Breaking News</h3>
          </div>
        </div>

        {/* ===== POWER UP SECTION ===== */}
        <div className="section-heading">
          <h2>Power up your game in the Anthem Zone!</h2>
        </div>

        {/* Row 1: Notifications, Podcasts, Match Videos */}
        <div className="power-up-row">
          <div className="feature-block" onClick={onNavigateToNotifications}>
            <div className="feature-icon">🔔</div>
            <h3 className="feature-label">Notifications</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToPodcasts}>
            <div className="feature-icon">🎧</div>
            <h3 className="feature-label">Podcasts</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToMatchVideos}>
            <div className="feature-icon">🎥</div>
            <h3 className="feature-label">Match Videos</h3>
          </div>
        </div>

        {/* Row 2: Live PPV, Live Audio, Loyalty Rewards */}
        <div className="power-up-row">
          <div className="feature-block" onClick={onNavigateToLivePPV}>
            <div className="feature-icon">📺</div>
            <h3 className="feature-label">Live PPV</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToLiveAudio}>
            <div className="feature-icon">🔊</div>
            <h3 className="feature-label">Live Audio</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToLoyaltyRewards}>
            <div className="feature-icon">💎</div>
            <h3 className="feature-label">Loyalty Rewards</h3>
          </div>
        </div>

        {/* ===== WHY STOP NOW SECTION ===== */}
        <div className="section-heading">
          <h2>Why Stop Now? Get Building in the Zone!</h2>
        </div>

        <div className="why-stop-now-row">
          <div className="feature-block" onClick={onNavigateToMyTeams}>
            <div className="feature-icon">👥</div>
            <h3 className="feature-label">My Teams</h3>
            <button 
              className="tap-select-button" 
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToMyTeams();
              }}
            >
              Tap to Select
            </button>
          </div>
          <div className="feature-block" onClick={onNavigateToFantasyRugby}>
            <div className="feature-icon">🏅</div>
            <h3 className="feature-label">Fantasy Rugby</h3>
          </div>
        </div>

        {/* ===== NEEDING SOMETHING SECTION ===== */}
        <div className="section-heading">
          <h2>Needing something? Going Somewhere?</h2>
        </div>

        {/* Row 1: Tickets, Merchandise, Uber */}
        <div className="needing-row">
          <div className="feature-block" onClick={onNavigateToTickets}>
            <div className="feature-icon">🎟️</div>
            <h3 className="feature-label">Tickets</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToMerchandise}>
            <div className="feature-icon">🛒</div>
            <h3 className="feature-label">Merchandise</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToUber}>
            <div className="feature-icon">🚗</div>
            <h3 className="feature-label">Uber</h3>
          </div>
        </div>

        {/* Row 2: Flights, Hotels, All Stadiums */}
        <div className="needing-row">
          <div className="feature-block" onClick={onNavigateToFlights}>
            <div className="feature-icon">🛫</div>
            <h3 className="feature-label">Flights</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToHotels}>
            <div className="feature-icon">🏨</div>
            <h3 className="feature-label">Hotels</h3>
          </div>
          <div className="feature-block" onClick={onNavigateToAllStadiums}>
            <div className="feature-icon">🏟️</div>
            <h3 className="feature-label">All Stadiums</h3>
          </div>
        </div>

        {/* ===== LAST BUTTONS ===== */}
        <div className="last-buttons">
          <button className="action-button" onClick={onNavigateToLiveMatchCenter}>
            ⚡ Go to Live Match Center
          </button>
          <button className="action-button" onClick={onNavigateToNews}>
            📰 Latest Rugby News
          </button>
          <button className="action-button" onClick={onNavigateToCalendar}>
            📅 Full Match Calendar
          </button>
        </div>
      </div>

      {/* ===== AD BANNER ===== */}
      <div className="ad-banner">
        🎽 Official Rugby Jersey Sale - 50% Off! Limited Time Offer ⚡
      </div>
    </div>
  );
}

export default HomePage;