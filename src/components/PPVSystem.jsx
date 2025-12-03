import React, { useState } from 'react';
import './PPVSystem.css';
import NavBar from './NavBar';

const Flag = ({ country, size = 'small' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'england': 'england',
      'ireland': 'ireland',
      'france': 'france',
      'wales': 'wales',
      'scotland': 'scotland',
      'italy': 'italy',
      'newzealand': 'new-zealand',
      'southafrica': 'south-africa',
      'australia': 'australia',
      'argentina': 'argentina',
      'japan': 'japan',
      'usa': 'united-states',
      'uk': 'united-kingdom',
      'canada': 'canada',
      'fiji': 'fiji',
      'samoa': 'samoa',
      'tonga': 'tonga',
      'germany': 'germany',
      'spain': 'spain',
      'portugal': 'portugal',
      'netherlands': 'netherlands',
      'singapore': 'singapore',
      'hongkong': 'hong-kong',
      'uae': 'united-arab-emirates'
    };
    return nameMap[countryName] || countryName;
  };

  const fileName = getCountryFileName(country.toLowerCase());
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>{country.slice(0, 3).toUpperCase()}</div>;
    }
  }
};

const PPVSystem = ({ onNavigateBack, game }) => {
  const [userLocation, setUserLocation] = useState('Japan');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showPPVProviders, setShowPPVProviders] = useState(false);

  // PPV Providers data with real country names
  const ppvProviders = {
    'Japan': [
      { name: 'DAZN Japan', logo: '🎌', url: 'https://www.dazn.com/ja-JP', price: '¥1,800', quality: '4K' },
      { name: 'Rakuten TV', logo: '🎁', url: 'https://rakuten.tv', price: '¥2,200', quality: '4K HDR' },
      { name: 'U-NEXT', logo: '▶️', url: 'https://video.unext.jp', price: '¥1,980', quality: '1080p' },
      { name: 'Hulu Japan', logo: '🎬', url: 'https://www.happyon.jp', price: '¥1,026', quality: '1080p' }
    ],
    'United States': [
      { name: 'ESPN+', logo: '🏈', url: 'https://plus.espn.com', price: '$9.99', quality: '4K' },
      { name: 'Peacock', logo: '🦚', url: 'https://www.peacocktv.com', price: '$4.99', quality: '4K' },
      { name: 'Flosports', logo: '📺', url: 'https://www.flosports.tv', price: '$12.50', quality: '1080p' },
      { name: 'Sling TV', logo: '💎', url: 'https://www.sling.com', price: '$40/mo', quality: '1080p' }
    ],
    'United Kingdom': [
      { name: 'Sky Sports', logo: '☁️', url: 'https://www.skysports.com', price: '£10', quality: '4K UHD' },
      { name: 'BT Sport', logo: '🔵', url: 'https://www.bt.com/sport', price: '£25/mo', quality: '4K' },
      { name: 'Amazon Prime', logo: '📦', url: 'https://primevideo.com', price: '£8.99/mo', quality: '4K HDR' },
      { name: 'Premier Sports', logo: '👑', url: 'https://www.premiersports.com', price: '£12.99', quality: '1080p' }
    ],
    'Ireland': [
      { name: 'Virgin Media', logo: '📡', url: 'https://www.virginmediatelevision.ie', price: '€15', quality: '1080p' },
      { name: 'eir Sport', logo: '📶', url: 'https://www.eir.ie/sport', price: '€20/mo', quality: '1080p' },
      { name: 'RTÉ Player', logo: '🇮🇪', url: 'https://www.rte.ie/player', price: 'Free (license)', quality: '720p' },
      { name: 'TG4', logo: '📺', url: 'https://www.tg4.ie', price: 'Free', quality: '720p' }
    ],
    'Australia': [
      { name: 'Stan Sport', logo: '🎾', url: 'https://www.stan.com.au/sport', price: 'AUD$10', quality: '4K' },
      { name: 'Kayo Sports', logo: '🎯', url: 'https://kayosports.com.au', price: 'AUD$25/mo', quality: '4K' },
      { name: 'Foxtel', logo: '🦊', url: 'https://www.foxtel.com.au', price: 'AUD$58/mo', quality: '4K' },
      { name: 'Nine Network', logo: '9️⃣', url: 'https://www.9now.com.au', price: 'Free', quality: '720p' }
    ],
    'New Zealand': [
      { name: 'Sky Sport NZ', logo: '☁️', url: 'https://www.skysport.co.nz', price: 'NZD$49/mo', quality: '4K' },
      { name: 'Spark Sport', logo: '⚡', url: 'https://www.sparksport.co.nz', price: 'NZD$24.99', quality: '4K' },
      { name: 'TVNZ OnDemand', logo: '📺', url: 'https://www.tvnz.co.nz', price: 'Free', quality: '720p' },
      { name: 'Whakaata Māori', logo: '🇳🇿', url: 'https://www.maoritelevision.com', price: 'Free', quality: '720p' }
    ]
  };

  const availableCountries = Object.keys(ppvProviders);

  // Updated to use real flag images
  const upcomingGames = [
    {
      id: 1,
      tournament: "Six Nations Championship",
      homeTeam: "England",
      homeCountry: "england",
      awayTeam: "Ireland",
      awayCountry: "ireland",
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
      homeCountry: "wales",
      awayTeam: "France",
      awayCountry: "france",
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
      homeCountry: "new-zealand",
      awayTeam: "South Africa",
      awayCountry: "south-africa",
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
    },
    {
      id: 4,
      tournament: "Rugby Championship",
      homeTeam: "Australia",
      homeCountry: "australia",
      awayTeam: "Argentina",
      awayCountry: "argentina",
      homeScore: 0,
      awayScore: 0,
      status: "UPCOMING",
      time: "Sat, Sep 7, 2024, 10:05",
      venue: "Suncorp Stadium, Brisbane",
      broadcastRights: ["Stan Sport", "ESPN"],
      ppvPrice: 11.99,
      ppvAvailable: true,
      duration: "Live + 72h replay",
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
              <div className="country-flag">
                <Flag country={country.replace(/\s+/g, '').toLowerCase()} size="small" />
              </div>
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
      {/* Navigation Bar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search PPV")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎥 LIMITED TIME: Get 20% off your first PPV purchase! Use code: RUGBY20 ⚡
      </div>

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

        {/* Upcoming Games with Real Flags */}
        <div className="upcoming-games">
          <h2>🏉 Available Live Games</h2>
          <div className="games-grid">
            {upcomingGames.map(game => (
              <div key={game.id} className={`game-card ${selectedGame?.id === game.id ? 'featured' : ''}`}>
                {/* Game Teams with Real Flags */}
                <div className="game-teams">
                  <div className="team-info home-team">
                    <Flag country={game.homeCountry} size="medium" />
                    <div className="team-name">{game.homeTeam}</div>
                  </div>
                  <div className="vs-separator">🆚</div>
                  <div className="team-info away-team">
                    <Flag country={game.awayCountry} size="medium" />
                    <div className="team-name">{game.awayTeam}</div>
                  </div>
                </div>

                {/* Game Details */}
                <div className="game-details">
                  <div className="tournament-badge">{game.tournament}</div>
                  <div className="game-time">📅 {game.time}</div>
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