import React from 'react';
import './LoyaltyCard.css';

function LoyaltyCard({ userTier, points, onNavigateToLoyalty }) {
  const tierData = {
    bronze: { 
      color: '#CD7F32', 
      name: 'Bronze', 
      next: 'Silver',
      icon: '🥉'
    },
    silver: { 
      color: '#C0C0C0', 
      name: 'Silver', 
      next: 'Gold',
      icon: '🥈'
    },
    gold: { 
      color: '#FFD700', 
      name: 'Gold', 
      next: 'Platinum',
      icon: '🥇'
    },
    platinum: { 
      color: '#E5E4E2', 
      name: 'Platinum', 
      next: null,
      icon: '💎'
    }
  };

  const currentTier = tierData[userTier] || tierData.bronze;
  const pointsToNext = currentTier.next ? 500 - (points % 500) : 0;
  const progress = (points % 500) / 5; // Percentage to next tier

  return (
    <div className="loyalty-card" onClick={onNavigateToLoyalty}>
      <div className="loyalty-header" style={{ background: currentTier.color }}>
        <div className="tier-icon">{currentTier.icon}</div>
        <h3>Rugby Rewards</h3>
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
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="next-tier">
              {pointsToNext} points to {currentTier.next}
            </div>
          </div>
        )}
        
        <div className="current-benefits">
          <span className="benefits-label">Current Benefits →</span>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;