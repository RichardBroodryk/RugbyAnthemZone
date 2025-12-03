import React from 'react';
import './LoyaltyCard.css';

function LoyaltyCard({ userTier, points, onNavigateToLoyalty }) {
  const tierData = {
    bronze: { 
      color: '#92400e', 
      name: 'Bronze', 
      next: 'Silver',
      icon: '🥉',
      gradient: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)'
    },
    silver: { 
      color: '#374151', 
      name: 'Silver', 
      next: 'Gold',
      icon: '🥈',
      gradient: 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #6b7280 100%)'
    },
    gold: { 
      color: '#92400e', 
      name: 'Gold', 
      next: 'Platinum',
      icon: '🥇',
      gradient: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)'
    },
    platinum: { 
      color: '#1e40af', 
      name: 'Platinum', 
      next: null,
      icon: '💎',
      gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
    }
  };

  const currentTier = tierData[userTier] || tierData.bronze;
  const pointsToNext = currentTier.next ? 500 - (points % 500) : 0;
  const progress = (points % 500) / 5; // Percentage to next tier

  return (
    <div 
      className="loyalty-card" 
      onClick={onNavigateToLoyalty}
      data-tier={userTier}
    >
      <div className="loyalty-header" style={{ background: currentTier.gradient }}>
        <div className="tier-icon">{currentTier.icon}</div>
        <h3>🏆 Rugby Rewards</h3>
        <div className="tier-badge">{currentTier.name}</div>
      </div>
      
      <div className="loyalty-body">
        <div className="points-display">
          <span className="points">{points.toLocaleString()}</span>
          <span className="points-label">Loyalty Points</span>
        </div>
        
        {currentTier.next && (
          <div className="progress-section">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ 
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${currentTier.color} 0%, ${currentTier.color}cc 100%)`
                }}
              ></div>
            </div>
            <div className="next-tier">
              {pointsToNext} points to <strong>{currentTier.next}</strong>
            </div>
          </div>
        )}
        
        <div className="current-benefits">
          <span className="benefits-label">View Benefits & Rewards →</span>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;