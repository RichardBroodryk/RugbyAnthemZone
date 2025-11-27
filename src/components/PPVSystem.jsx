import React, { useState } from 'react';
import './PPVSystem.css';
import MatchCard from './MatchCard';

const PPVSystem = ({ onNavigateBack, game }) => {
  const [userLocation, setUserLocation] = useState('Japan');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showPPVProviders, setShowPPVProviders] = useState(false);

  // PPV Providers data remains the same...
  const ppvProviders = {
    'Japan': [
      { name: 'DAZN Japan', logo: '🎌', url: 'https://www.dazn.com/ja-JP', price: '¥1,800', quality: '4K' },
      // ... rest of providers data
    ],
    // ... rest of countries
  };

  const availableCountries = Object.keys(ppvProviders);

  // Updated to use MatchCard compatible data structure
  const upcomingGames = [
    {
      id: 1,
      tournament: "Six Nations Championship",
      homeTeam: "England",
      homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      awayTeam: "Ireland",
      awayFlag: "🇮🇪",
      homeScore: 0,
      awayScore: 0,
      status: "UPCOMING",
      time: "Sat, Mar 16, 2024, 14:15",
      venue: "Twickenham Stadium, London",
      broadcastRights: ["ITV", "BBC"],
      ppvPrice: 12.99,
      ppvAvailable: true,
      duration: "Live + 48h replay",
      quality: "4K Ultra HD"
    },
    {
      id: 2,
      tournament: "Six Nations Championship",
      homeTeam: "Wales",
      homeFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      awayTeam: "France",
      awayFlag: "🇫🇷",
      homeScore: 0,
      awayScore: 0,
      status: "UPCOMING",
      time: "Sat, Mar 16, 2024, 16:45",
      venue: "Principality Stadium, Cardiff",
      broadcastRights: ["BBC", "France 2"],
      ppvPrice: 9.99,
      ppvAvailable: true,
      duration: "Live only",
      quality: "1080p HD"
    },
    {
      id: 3,
      tournament: "Rugby Championship",
      homeTeam: "New Zealand",
      homeFlag: "🇳🇿",
      awayTeam: "South Africa",
      awayFlag: "🇿🇦",
      homeScore: 0,
      awayScore: 0,
      status: "UPCOMING",
      time: "Sat, Aug 10, 2024, 08:05",
      venue: "Eden Park, Auckland",
      broadcastRights: ["Sky Sports", "SuperSport"],
      ppvPrice: 14.99,
      ppvAvailable: true,
      duration: "Live + 7 days replay",
      quality: "4K Ultra HD"
    }
  ];

  const paymentOptions = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🔵' },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿' },
    { id: 'mobile', name: 'Mobile Payment', icon: '📱' }
  ];

  const benefits = [
    {
      icon: '🌍',
      title: 'Global Access',
      description: 'Watch from anywhere in the world (where available)'
    },
    {
      icon: '📱',
      title: 'Multi-Device',
      description: 'Stream on phone, tablet, computer, or smart TV'
    },
    {
      icon: '🔒',
      title: 'DRM Protected',
      description: 'Advanced encryption to prevent piracy'
    },
    {
      icon: '⏱️',
      title: 'Flexible Viewing',
      description: 'Live stream + replay access included'
    },
    {
      icon: '🎯',
      title: 'Premium Quality',
      description: 'Up to 4K Ultra HD streaming available'
    },
    {
      icon: '💬',
      title: 'Live Commentary',
      description: 'Multiple language commentary options'
    }
  ];

  const handlePurchase = async (game) => {
    setIsProcessing(true);
    setSelectedGame(game);
    
    try {
      await processPayment(game, paymentMethod);
      const streamToken = generateStreamToken(game.id);
      showPurchaseSuccess(game, streamToken);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
      setSelectedGame(null);
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
    alert(`🎉 Purchase Successful!\n\nYou can now watch:\n${game.homeTeam} 🆚 ${game.awayTeam}\n\n💰 Amount: $${game.ppvPrice}\n📺 Quality: ${game.quality}\n⏰ Access: ${game.duration}\n\nYour stream will begin shortly...`);
  };

  // REMOVED: formatGameDate function since it's no longer needed

  const PPVProviderModal = () => (
    <div className="ppv-providers-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>🌍 Select Your Country for PPV Providers</h2>
          <button className="close-btn" onClick={() => setShowPPVProviders(false)}>✕</button>
        </div>
        
        <div className="countries-grid">
          {availableCountries.map(country => (
            <div 
              key={country}
              className={`country-option ${userLocation === country ? 'selected' : ''}`}
              onClick={() => {
                setUserLocation(country);
                setShowPPVProviders(false);
              }}
            >
              <span className="country-flag">{
                country === 'Japan' ? '🇯🇵' :
                country === 'United States' ? '🇺🇸' :
                country === 'United Kingdom' ? '🇬🇧' :
                country === 'Ireland' ? '🇮🇪' :
                country === 'Australia' ? '🇦🇺' :
                country === 'New Zealand' ? '🇳🇿' :
                country === 'South Africa' ? '🇿🇦' :
                country === 'France' ? '🇫🇷' :
                country === 'Italy' ? '🇮🇹' :
                country === 'Argentina' ? '🇦🇷' :
                country === 'Canada' ? '🇨🇦' :
                country === 'Wales' ? '🏴' :
                country === 'Scotland' ? '🏴' :
                country === 'Fiji' ? '🇫🇯' :
                country === 'Samoa' ? '🇼🇸' :
                country === 'Tonga' ? '🇹🇴' :
                country === 'Germany' ? '🇩🇪' :
                country === 'Spain' ? '🇪🇸' :
                country === 'Portugal' ? '🇵🇹' :
                country === 'Netherlands' ? '🇳🇱' :
                country === 'Singapore' ? '🇸🇬' :
                country === 'Hong Kong' ? '🇭🇰' :
                country === 'UAE' ? '🇦🇪' : '🌍'
              }</span>
              <span className="country-name">{country}</span>
            </div>
          ))}
        </div>

        <div className="providers-list">
          <h3>Available PPV Providers in {userLocation}:</h3>
          <div className="providers-grid">
            {ppvProviders[userLocation]?.map((provider, index) => (
              <div key={index} className="provider-card">
                <div className="provider-logo">{provider.logo}</div>
                <div className="provider-info">
                  <h4>{provider.name}</h4>
                  <p>Price: {provider.price}</p>
                  <p>Quality: {provider.quality}</p>
                </div>
                <button 
                  className="visit-btn" 
                  onClick={() => {
                    if (window.confirm(`You are being redirected to ${provider.name}. Continue?`)) {
                      window.open(provider.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  Visit Site
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="ppv-system">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎥 LIMITED TIME: Get 20% off your first PPV purchase! Use code: RUGBY20 ⚡
      </div>

      {/* Navigation */}
      <nav className="ppv-nav">
        <button className="ppv-nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="ppv-nav-btn">🏠 Home</button>
        <button className="ppv-nav-btn">🔍 Search</button>
        <button className="ppv-nav-btn">👤 Profile</button>
      </nav>

      <div className="ppv-content">
        {/* PPV Header */}
        <div className="ppv-header">
          <h1 className="ppv-title">🎥 Rugby Pay-Per-View</h1>
          <p className="ppv-subtitle">Watch live rugby matches anywhere in the world. No subscription required.</p>
          
          <div className="location-section">
            <div className="location-badge" onClick={() => setShowPPVProviders(true)}>
              📍 Watching from: <strong>{userLocation}</strong>
              <span className="change-location">(Click to change)</span>
            </div>
            <button 
              className="location-btn"
              onClick={() => setShowPPVProviders(true)}
            >
              🌍 Change Country
            </button>
          </div>
        </div>

        {/* Enhanced Payment Methods */}
        <div className="payment-section">
          <div className="payment-header">
            <h3>💳 Secure Payment</h3>
            <div className="security-badge">
              🔒 SSL Encrypted • PCI Compliant
            </div>
          </div>
          
          <div className="payment-methods-grid">
            {paymentOptions.map(option => (
              <div 
                key={option.id}
                className={`payment-method-card ${paymentMethod === option.id ? 'selected' : ''}`}
                onClick={() => setPaymentMethod(option.id)}
              >
                <div className="payment-method-icon">{option.icon}</div>
                <div className="payment-method-info">
                  <h4>{option.name}</h4>
                  <p>{
                    option.id === 'card' ? 'Visa, MasterCard, Amex' :
                    option.id === 'paypal' ? 'Pay with PayPal balance or card' :
                    option.id === 'crypto' ? 'Bitcoin, Ethereum, USDT' :
                    'Apple Pay, Google Pay'
                  }</p>
                </div>
                <div className="payment-checkmark">
                  {paymentMethod === option.id && '✓'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Games - USING MATCHCARD COMPONENT */}
        <div className="upcoming-games">
          <h2>🏉 Available Live Games</h2>
          <div className="games-grid">
            {upcomingGames.map(game => (
              <div key={game.id} className={`game-card ${selectedGame?.id === game.id ? 'featured' : ''}`}>
                {/* Use MatchCard for the teams display */}
                <MatchCard
                  match={game}
                  isSelected={selectedGame?.id === game.id}
                  onSelect={() => setSelectedGame(game)}
                  tournamentColor="#667eea"
                  showTournament={true}
                />
                
                {/* PPV-specific details */}
                <div className="game-details">
                  <div className="venue">🏟️ {game.venue}</div>
                  <div className="broadcasters">
                    📡 Available on: {game.broadcastRights.join(', ')}
                  </div>
                  <div className="quality">🎬 {game.quality}</div>
                </div>
                
                {/* PPV Options */}
                <div className="ppv-options">
                  <div className="pricing">
                    <span className="price">${game.ppvPrice}</span>
                    <span className="duration">{game.duration}</span>
                  </div>
                  <button 
                    className="ppv-purchase-btn"
                    onClick={() => handlePurchase(game)}
                    disabled={isProcessing}
                  >
                    {isProcessing && selectedGame?.id === game.id ? '🔄 Processing...' : '🎥 Watch Live'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PPV Benefits */}
        <div className="ppv-benefits">
          <h3>⭐ Why Choose Our PPV Service?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info Section */}
        <div className="info-section">
          <h3>ℹ️ PPV Information</h3>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">💡</div>
              <h4>How It Works</h4>
              <p>Pay once, watch the game live and access replays based on your purchase.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🔄</div>
              <h4>Refund Policy</h4>
              <p>Full refund if stream fails or game is cancelled before kickoff.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h4>Support</h4>
              <p>24/7 customer support during live events. Contact us if you need help.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PPV Providers Modal */}
      {showPPVProviders && <PPVProviderModal />}

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        📱 Download Our App for Better Streaming Experience! Available on iOS & Android 🎯
      </div>
    </div>
  );
};

export default PPVSystem;