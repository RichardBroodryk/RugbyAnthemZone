import React, { useState } from 'react';
import './LoyaltyPage.css';
import NavBar from './NavBar';

function LoyaltyPage({ onNavigateBack, userPreferences, onNavigateToTickets, onNavigateToMerchandise }) {
  const [activeTab, setActiveTab] = useState('rewards');

  const loyaltyData = {
    userTier: 'bronze',
    points: 1250,
    nextTier: 'silver',
    pointsToNext: 500,
    activityHistory: [
      { action: 'Daily Login', points: 10, date: '2024-01-16', icon: '📱' },
      { action: 'Ticket Purchase', points: 150, date: '2024-01-15', icon: '🎟️' },
      { action: 'Match Video Watched', points: 5, date: '2024-01-14', icon: '🎥' },
      { action: 'Fantasy League Win', points: 50, date: '2024-01-13', icon: '🏅' },
      { action: 'News Article Read', points: 3, date: '2024-01-12', icon: '📰' },
      { action: 'Premium Subscription', points: 250, date: '2024-01-11', icon: '💎' },
      { action: 'Social Share', points: 15, date: '2024-01-10', icon: '📢' },
      { action: 'Stadium Check-in', points: 25, date: '2024-01-09', icon: '📍' }
    ]
  };

  const tierBenefits = {
    bronze: {
      discount: '2%',
      benefits: ['2% off all tickets', 'Basic merchandise access', 'Standard support', 'Newsletter'],
      color: '#92400e',
      icon: '🥉',
      bgColor: 'rgba(146, 64, 14, 0.15)',
      gradient: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)'
    },
    silver: {
      discount: '5%',
      benefits: ['5% off all tickets', 'Early ticket access', 'Priority support', 'Exclusive content', 'Member forum access'],
      color: '#374151',
      icon: '🥈',
      bgColor: 'rgba(55, 65, 81, 0.15)',
      gradient: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)'
    },
    gold: {
      discount: '10%',
      benefits: ['10% off all tickets', 'VIP ticket access', 'Dedicated support', 'Exclusive merchandise', 'Player meet & greets', 'Stadium tours'],
      color: '#d97706',
      icon: '🥇',
      bgColor: 'rgba(217, 119, 6, 0.15)',
      gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)'
    },
    platinum: {
      discount: '15%',
      benefits: ['15% off all tickets', 'Premium VIP experiences', '24/7 dedicated support', 'Limited edition merchandise', 'Stadium tours', 'Player interactions', 'Travel packages'],
      color: '#1e40af',
      icon: '💎',
      bgColor: 'rgba(30, 64, 175, 0.15)',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
    }
  };

  const rewards = [
    { id: 1, name: '5% Ticket Discount', cost: 500, icon: '🎟️', available: true, category: 'discount' },
    { id: 2, name: 'Free Team Cap', cost: 1000, icon: '🧢', available: true, category: 'merchandise' },
    { id: 3, name: 'Matchday Program', cost: 750, icon: '📰', available: true, category: 'merchandise' },
    { id: 4, name: 'Stadium Tour', cost: 2000, icon: '🏟️', available: false, category: 'experience' },
    { id: 5, name: 'Meet & Greet Pass', cost: 5000, icon: '🤝', available: false, category: 'experience' },
    { id: 6, name: 'VIP Lounge Access', cost: 3000, icon: '⭐', available: false, category: 'experience' },
    { id: 7, name: 'Signed Jersey', cost: 8000, icon: '👕', available: false, category: 'merchandise' },
    { id: 8, name: 'Season Ticket Upgrade', cost: 12000, icon: '💺', available: false, category: 'tickets' }
  ];

  const currentTier = tierBenefits[loyaltyData.userTier];

  const handleRedeemReward = (reward) => {
    if (loyaltyData.points >= reward.cost && reward.available) {
      alert(`🏆 Congratulations! You've successfully redeemed "${reward.name}" for ${reward.cost} loyalty points!`);
    } else if (!reward.available) {
      alert('⏳ This reward will be available soon! Keep earning points.');
    } else {
      alert(`💰 You need ${reward.cost - loyaltyData.points} more points to redeem this reward.`);
    }
  };

  const getProgressPercentage = () => {
    const basePoints = (loyaltyData.userTier === 'bronze') ? 0 : 
                      (loyaltyData.userTier === 'silver') ? 500 : 
                      (loyaltyData.userTier === 'gold') ? 1000 : 2000;
    const totalRange = (loyaltyData.nextTier === 'silver') ? 500 : 
                      (loyaltyData.nextTier === 'gold') ? 500 : 
                      (loyaltyData.nextTier === 'platinum') ? 1000 : 1000;
    
    const earnedInCurrent = loyaltyData.points - basePoints;
    return Math.min(100, (earnedInCurrent / totalRange) * 100);
  };

  return (
    <div className="loyalty-page">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Loyalty")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      <div className="top-ad-banner">
        🏆 DOUBLE POINTS WEEKEND: Jan 19-21! Earn 2x points on all purchases! ⚡
      </div>

      <div className="loyalty-container">
        <div className="loyalty-header">
          <h1>🏆 Rugby Rewards</h1>
          <p>Earn points, unlock benefits, and get exclusive rugby experiences!</p>
        </div>

        <div className="status-card" style={{ borderColor: currentTier.color, background: currentTier.bgColor }}>
          <div className="tier-display">
            <div className="tier-icon-large">{currentTier.icon}</div>
            <div className="tier-info">
              <h2 style={{ color: currentTier.color }}>{loyaltyData.userTier.toUpperCase()} TIER</h2>
              <div className="points-display-large">
                <span className="points-count">{loyaltyData.points.toLocaleString()}</span>
                <span className="points-label">Total Points</span>
              </div>
            </div>
          </div>

          {loyaltyData.userTier !== 'platinum' && (
            <div className="progress-section">
              <div className="progress-info">
                <span>{loyaltyData.pointsToNext} points to {loyaltyData.nextTier}</span>
                <span>{((loyaltyData.points % 500) / 5)}%</span>
              </div>
              <div className="progress-bar-large">
                <div 
                  className="progress-fill-large" 
                  style={{ 
                    width: `${(loyaltyData.points % 500) / 5}%`,
                    background: currentTier.gradient
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'rewards' ? 'active' : ''}`}
            onClick={() => setActiveTab('rewards')}
          >
            🎁 Available Rewards
          </button>
          <button 
            className={`tab ${activeTab === 'benefits' ? 'active' : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            ⭐ Tier Benefits
          </button>
          <button 
            className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            📈 Activity History
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'rewards' && (
            <div className="rewards-grid">
              {rewards.map(reward => (
                <div key={reward.id} className={`reward-card ${!reward.available ? 'coming-soon' : ''}`}>
                  <div className="reward-icon">{reward.icon}</div>
                  <div className="reward-info">
                    <h3>{reward.name}</h3>
                    <div className="reward-cost">
                      <span className="cost">{reward.cost.toLocaleString()}</span>
                      <span className="points-text">points</span>
                    </div>
                  </div>
                  <button 
                    className={`redeem-btn ${!reward.available ? 'disabled' : loyaltyData.points >= reward.cost ? 'available' : 'insufficient'}`}
                    onClick={() => handleRedeemReward(reward)}
                    disabled={!reward.available}
                  >
                    {!reward.available ? 'Coming Soon' : 
                     loyaltyData.points >= reward.cost ? 'Redeem' : 'Need More Points'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="benefits-section">
              <div className="current-benefits">
                <h3>Your Current Benefits</h3>
                <div className="benefits-list">
                  {currentTier.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item" style={{ background: currentTier.bgColor }}>
                      <span className="benefit-icon">✅</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="all-tiers">
                <h3>All Tiers & Benefits</h3>
                <div className="tiers-grid">
                  {Object.entries(tierBenefits).map(([tier, data]) => (
                    <div key={tier} className="tier-card" style={{ borderColor: data.color, background: data.bgColor }}>
                      <div className="tier-card-header" style={{ background: data.gradient }}>
                        <span className="tier-card-icon">{data.icon}</span>
                        <h4>{tier.toUpperCase()}</h4>
                      </div>
                      <div className="tier-card-body">
                        <div className="tier-discount" style={{ color: data.color }}>
                          {data.discount} OFF
                        </div>
                        <ul className="tier-benefits">
                          {data.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index}>• {benefit}</li>
                          ))}
                          {data.benefits.length > 3 && <li>• +{data.benefits.length - 3} more benefits</li>}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-section">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {loyaltyData.activityHistory.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">{activity.icon}</div>
                    <div className="activity-info">
                      <div className="activity-action">{activity.action}</div>
                      <div className="activity-date">{activity.date}</div>
                    </div>
                    <div className="activity-points" style={{ background: currentTier.gradient }}>
                      +{activity.points}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="points-guide">
                <h4>How to Earn Points</h4>
                <div className="points-options">
                  <div className="points-option">
                    <span>📱 Daily Login</span>
                    <span>+10 points</span>
                  </div>
                  <div className="points-option">
                    <span>🎟️ Ticket Purchase</span>
                    <span>+10 points per $</span>
                  </div>
                  <div className="points-option">
                    <span>🛒 Merchandise</span>
                    <span>+20 points per $</span>
                  </div>
                  <div className="points-option">
                    <span>🎥 Watch Content</span>
                    <span>+5 points</span>
                  </div>
                  <div className="points-option">
                    <span>🏅 Fantasy Wins</span>
                    <span>+50 points</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="loyalty-actions">
          <button className="action-btn primary" onClick={onNavigateToTickets}>
            🎟️ Buy Tickets & Earn Points
          </button>
          <button className="action-btn secondary" onClick={onNavigateToMerchandise}>
            🛒 Shop Merchandise
          </button>
        </div>
      </div>

      <div className="bottom-ad-banner">
        💎 Reach Gold Tier for VIP Experiences! 🏆
      </div>
    </div>
  );
}

export default LoyaltyPage;