import React, { useState } from 'react';
import './LoyaltyPage.css';

function LoyaltyPage({ onNavigateBack, userPreferences, onNavigateToTickets, onNavigateToMerchandise }) {
  const [activeTab, setActiveTab] = useState('rewards');

  // Mock loyalty data - will come from backend
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
      { action: 'News Article Read', points: 3, date: '2024-01-12', icon: '📰' }
    ]
  };

  const tierBenefits = {
    bronze: {
      discount: '2%',
      benefits: ['2% off all tickets', 'Basic merchandise access', 'Standard support'],
      color: '#CD7F32',
      icon: '🥉'
    },
    silver: {
      discount: '5%',
      benefits: ['5% off all tickets', 'Early ticket access', 'Priority support', 'Exclusive content'],
      color: '#C0C0C0',
      icon: '🥈'
    },
    gold: {
      discount: '10%',
      benefits: ['10% off all tickets', 'VIP ticket access', 'Dedicated support', 'Exclusive merchandise', 'Player meet & greets'],
      color: '#FFD700',
      icon: '🥇'
    },
    platinum: {
      discount: '15%',
      benefits: ['15% off all tickets', 'Premium VIP experiences', '24/7 dedicated support', 'Limited edition merchandise', 'Stadium tours', 'Player interactions'],
      color: '#E5E4E2',
      icon: '💎'
    }
  };

  const rewards = [
    { id: 1, name: '5% Ticket Discount', cost: 500, icon: '🎟️', available: true },
    { id: 2, name: 'Free Merchandise', cost: 1000, icon: '👕', available: true },
    { id: 3, name: 'Stadium Tour', cost: 2000, icon: '🏟️', available: false },
    { id: 4, name: 'Meet & Greet', cost: 5000, icon: '🤝', available: false },
    { id: 5, name: 'VIP Experience', cost: 10000, icon: '⭐', available: false }
  ];

  const currentTier = tierBenefits[loyaltyData.userTier];

  const handleRedeemReward = (reward) => {
    if (loyaltyData.points >= reward.cost && reward.available) {
      alert(`Congratulations! You've redeemed ${reward.name} for ${reward.cost} points!`);
    } else if (!reward.available) {
      alert('This reward will be available soon!');
    } else {
      alert(`You need ${reward.cost - loyaltyData.points} more points to redeem this reward.`);
    }
  };

  return (
    <div className="loyalty-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Earn Double Points This Weekend! 🎉
      </div>

      {/* Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn active">🏆 Rewards</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      <div className="loyalty-container">
        {/* Header Section */}
        <div className="loyalty-header">
          <h1>🏆 Rugby Rewards</h1>
          <p>Earn points, unlock benefits, and get exclusive rugby experiences!</p>
        </div>

        {/* Current Status Card */}
        <div className="status-card" style={{ borderColor: currentTier.color }}>
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
                    background: currentTier.color
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
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

        {/* Tab Content */}
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
                    <div key={index} className="benefit-item">
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
                    <div key={tier} className="tier-card" style={{ borderColor: data.color }}>
                      <div className="tier-card-header" style={{ background: data.color }}>
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
                    <div className="activity-points">+{activity.points}</div>
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

        {/* Quick Actions */}
        <div className="loyalty-actions">
          <button className="action-btn primary" onClick={onNavigateToTickets}>
            🎟️ Buy Tickets & Earn Points
          </button>
          <button className="action-btn secondary" onClick={onNavigateToMerchandise}>
            🛒 Shop Merchandise
          </button>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        💎 Reach Gold Tier for VIP Experiences! 🏆
      </div>
    </div>
  );
}

export default LoyaltyPage;