import React, { useState, useEffect } from 'react';
import './PPVSystem.css';

const PPVSystem = ({ onNavigateBack, game }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const ppvAvailability = {
    availableRegions: [
      'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina',
      'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Belgium',
      'Japan', 'South Korea', 'Singapore', 'Hong Kong', 'UAE',
      'South Africa', 'Kenya', 'Nigeria', 'Australia', 'New Zealand'
    ],
    restrictedRegions: [
      'United Kingdom', 'Ireland'
    ],
    tournamentRestrictions: {
      'Six Nations': ['France', 'Italy'],
      'Rugby World Cup': ['Japan', 'South Africa'],
      'Rugby Championship': ['Australia', 'New Zealand', 'South Africa', 'Argentina']
    }
  };

  const upcomingGames = [
    {
      id: 1,
      tournament: "Six Nations Championship",
      homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG" },
      awayTeam: { name: "Ireland", flag: "🇮🇪", code: "IRE" },
      date: "2024-03-16T14:15:00",
      venue: "Twickenham Stadium, London",
      broadcastRights: ["ITV", "BBC"],
      ppvPrice: 12.99,
      ppvAvailable: true,
      duration: "Live + 48h replay"
    },
    {
      id: 2,
      tournament: "Six Nations Championship",
      homeTeam: { name: "Wales", flag: "🏴", code: "WAL" },
      awayTeam: { name: "France", flag: "🇫🇷", code: "FRA" },
      date: "2024-03-16T16:45:00",
      venue: "Principality Stadium, Cardiff",
      broadcastRights: ["BBC", "France 2"],
      ppvPrice: 9.99,
      ppvAvailable: true,
      duration: "Live only"
    }
  ];

  const paymentOptions = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🔵' },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿' },
    { id: 'mobile', name: 'Mobile Payment', icon: '📱' }
  ];

  useEffect(() => {
    detectUserLocation();
  }, []);

  const detectUserLocation = () => {
    const mockLocation = 'United States';
    setUserLocation(mockLocation);
  };

  const isPPVAvailable = (game) => {
    if (!userLocation) return false;
    
    if (ppvAvailability.restrictedRegions.includes(userLocation)) {
      return false;
    }
    
    const tournamentRestrictions = ppvAvailability.tournamentRestrictions[game.tournament];
    if (tournamentRestrictions && tournamentRestrictions.includes(userLocation)) {
      return false;
    }
    
    return game.ppvAvailable && ppvAvailability.availableRegions.includes(userLocation);
  };

  const handlePurchase = async (game) => {
    setIsProcessing(true);
    
    try {
      await processPayment(game, paymentMethod);
      const streamToken = generateStreamToken(game.id);
      showPurchaseSuccess(game, streamToken);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const processPayment = (game, method) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1;
        if (success) {
          resolve({ transactionId: 'TX' + Date.now(), amount: game.ppvPrice });
        } else {
          reject(new Error('Payment processing failed'));
        }
      }, 2000);
    });
  };

  const generateStreamToken = (gameId) => {
    return btoa(`game:${gameId}:user:${Date.now()}:exp:${Date.now() + 48 * 60 * 60 * 1000}`);
  };

  const showPurchaseSuccess = (game, token) => {
    alert(`Purchase successful! You can now watch ${game.homeTeam.name} vs ${game.awayTeam.name}\n\nStream Token: ${token}\n\nRedirecting to stream...`);
  };

  const GameCard = ({ game }) => (
    <div className="game-card">
      <div className="game-header">
        <span className="tournament-badge">{game.tournament}</span>
        <span className="game-date">{new Date(game.date).toLocaleDateString()}</span>
      </div>
      
      <div className="teams-display">
        <div className="team">
          <span className="team-flag">{game.homeTeam.flag}</span>
          <span className="team-name">{game.homeTeam.name}</span>
        </div>
        <div className="vs">VS</div>
        <div className="team">
          <span className="team-name">{game.awayTeam.name}</span>
          <span className="team-flag">{game.awayTeam.flag}</span>
        </div>
      </div>
      
      <div className="game-details">
        <div className="venue">{game.venue}</div>
        <div className="broadcasters">
          Available on: {game.broadcastRights.join(', ')}
        </div>
      </div>
      
      {isPPVAvailable(game) ? (
        <div className="ppv-options">
          <div className="pricing">
            <span className="price">${game.ppvPrice}</span>
            <span className="duration">{game.duration}</span>
          </div>
          <button 
            className="purchase-btn"
            onClick={() => handlePurchase(game)}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Watch Live'}
          </button>
        </div>
      ) : (
        <div className="ppv-unavailable">
          {userLocation ? 
            `PPV not available in ${userLocation}` : 
            'Checking availability...'
          }
        </div>
      )}
    </div>
  );

  return (
    <div className="ppv-system">
      {/* Navigation Bar */}
      <nav className="ppv-nav">
        <button className="nav-back-btn" onClick={onNavigateBack}>
          ← Back
        </button>
        <h1 className="nav-title">Rugby Pay-Per-View</h1>
        <div className="nav-actions">
          <button className="nav-action-btn">🏠</button>
          <button className="nav-action-btn">🔍</button>
        </div>
      </nav>

      {/* Top Ad Banner */}
      <div className="ad-banner top-ad">
        <p>ADVERTISEMENT</p>
        <div className="ad-placeholder">
          Ad Banner (728x90)
        </div>
      </div>

      <div className="container">
        {/* PPV Header */}
        <div className="ppv-header">
          <h1>Rugby Pay-Per-View</h1>
          <p>Watch live games anywhere, anytime. No subscription required.</p>
          {userLocation && (
            <div className="location-info">
              📍 Watching from: <strong>{userLocation}</strong>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h3>Available Payment Methods</h3>
          <div className="payment-options">
            {paymentOptions.map(option => (
              <div 
                key={option.id}
                className={`payment-option ${paymentMethod === option.id ? 'selected' : ''}`}
                onClick={() => setPaymentMethod(option.id)}
              >
                <span className="payment-icon">{option.icon}</span>
                <span className="payment-name">{option.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Games */}
        <div className="upcoming-games">
          <h2>Available Games</h2>
          <div className="games-grid">
            {upcomingGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* PPV Benefits */}
        <div className="ppv-benefits">
          <h3>Why Choose Our PPV Service?</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🌍</div>
              <h4>Global Access</h4>
              <p>Watch from anywhere in the world (where available)</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📱</div>
              <h4>Multi-Device</h4>
              <p>Stream on phone, tablet, computer, or smart TV</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🔒</div>
              <h4>DRM Protected</h4>
              <p>Advanced encryption to prevent piracy</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">⏱️</div>
              <h4>Flexible Viewing</h4>
              <p>Live stream + replay access included</p>
            </div>
          </div>
        </div>

        {/* Bottom Ad Banner */}
        <div className="ad-banner bottom-ad">
          <p>ADVERTISEMENT</p>
          <div className="ad-placeholder">
            Ad Banner (728x90)
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPVSystem;