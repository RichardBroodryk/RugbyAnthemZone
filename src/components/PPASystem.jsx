import React, { useState } from 'react';
import './PPASystem.css';

const PPASystem = ({ onNavigateBack, game }) => {
  const [userLocation, setUserLocation] = useState('United States');
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAudioProviders, setShowAudioProviders] = useState(false);

  // Audio Providers data
  const audioProviders = {
    'United States': [
      { name: 'ESPN Radio', logo: '🏈', url: 'https://www.espn.com/espnradio', type: 'Free', quality: '128kbps' },
      { name: 'TuneIn Premium', logo: '📻', url: 'https://tunein.com', type: 'Premium', quality: '192kbps' },
      { name: 'SiriusXM', logo: '⭐', url: 'https://www.siriusxm.com', type: 'Premium', quality: '256kbps' }
    ],
    'United Kingdom': [
      { name: 'BBC Radio 5 Live', logo: '🇬🇧', url: 'https://www.bbc.co.uk/sounds/play/live:bbc_radio_five_live', type: 'Free', quality: '128kbps' },
      { name: 'TalkSport', logo: '🗣️', url: 'https://talksport.com', type: 'Free', quality: '128kbps' },
      { name: 'BBC Sounds', logo: '🔊', url: 'https://www.bbc.co.uk/sounds', type: 'Free', quality: '192kbps' }
    ],
    'Ireland': [
      { name: 'RTÉ Radio 1', logo: '🇮🇪', url: 'https://www.rte.ie/radio', type: 'Free', quality: '128kbps' },
      { name: 'Newstalk', logo: '🎙️', url: 'https://www.newstalk.com', type: 'Free', quality: '128kbps' }
    ],
    'Australia': [
      { name: 'ABC Grandstand', logo: '🦘', url: 'https://www.abc.net.au/radio/grandstand', type: 'Free', quality: '128kbps' },
      { name: '2GB Rugby', logo: '📡', url: 'https://www.2gb.com', type: 'Free', quality: '128kbps' }
    ],
    'New Zealand': [
      { name: 'Radio Sport NZ', logo: '🥝', url: 'https://www.newstalkzb.co.nz/sport', type: 'Free', quality: '128kbps' },
      { name: 'Sky Sport Audio', logo: '📡', url: 'https://www.skysport.co.nz', type: 'Premium', quality: '256kbps' }
    ],
    'South Africa': [
      { name: 'RSG Radio', logo: '🇿🇦', url: 'https://www.rsg.co.za', type: 'Free', quality: '128kbps' },
      { name: 'SuperSport Audio', logo: '🌍', url: 'https://supersport.com/audio', type: 'Premium', quality: '192kbps' }
    ],
    'Global': [
      { name: 'World Rugby Radio', logo: '🌍', url: 'https://www.world.rugby', type: 'Premium', quality: '256kbps' },
      { name: 'Rugby Pass Audio', logo: '🎧', url: 'https://www.rugbypass.com', type: 'Premium', quality: '192kbps' }
    ]
  };

  const availableCountries = Object.keys(audioProviders);

  // Games data with original structure
  const upcomingGames = [
    {
      id: 1,
      tournament: "Six Nations Championship",
      homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      awayTeam: { name: "Ireland", flag: "🇮🇪" },
      date: "2024-03-16T14:15:00",
      venue: "Twickenham Stadium, London",
      audioOptions: {
        free: [
          { 
            name: "BBC Radio 5 Live", 
            language: "English",
            type: "Live Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "UK Only",
            provider: "BBC"
          }
        ],
        premium: [
          {
            name: "Stadium Atmosphere Feed",
            language: "Natural Sound",
            type: "Stadium Audio",
            bitrate: "192kbps",
            ads: false,
            price: 2.99,
            features: ["No commentary", "Pure stadium sound", "Multi-angle audio", "Crowd atmosphere"]
          },
          {
            name: "International Commentary Pack",
            language: "Multi-language",
            type: "Premium Commentary",
            bitrate: "256kbps",
            ads: false,
            price: 4.99,
            features: ["Expert analysis", "No ads", "HD Audio", "5 language options", "Tactical insights"]
          }
        ]
      }
    },
    {
      id: 2,
      tournament: "Rugby Championship",
      homeTeam: { name: "New Zealand", flag: "🇳🇿" },
      awayTeam: { name: "Australia", flag: "🇦🇺" },
      date: "2024-08-21T08:35:00",
      venue: "Eden Park, Auckland",
      audioOptions: {
        free: [
          { 
            name: "Radio Sport NZ", 
            language: "English",
            type: "Live Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "NZ Only",
            provider: "NZME"
          }
        ],
        premium: [
          {
            name: "Stadium Audio Experience",
            language: "Natural Sound",
            type: "Stadium Feed",
            bitrate: "192kbps",
            ads: false,
            price: 1.99,
            features: ["Pure stadium atmosphere", "No interruptions", "Referee mic"]
          },
          {
            name: "All Blacks Radio",
            language: "English & Māori",
            type: "Team Commentary",
            bitrate: "256kbps",
            ads: false,
            price: 3.99,
            features: ["Dual language", "Team insights", "Exclusive interviews"]
          }
        ]
      }
    },
    {
      id: 3,
      tournament: "Summer Internationals",
      homeTeam: { name: "South Africa", flag: "🇿🇦" },
      awayTeam: { name: "France", flag: "🇫🇷" },
      date: "2024-07-13T16:05:00",
      venue: "Ellis Park, Johannesburg",
      audioOptions: {
        free: [
          { 
            name: "RSG Rugby", 
            language: "Afrikaans",
            type: "Live Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "South Africa",
            provider: "SABC"
          }
        ],
        premium: [
          {
            name: "Springboks Audio",
            language: "Multiple",
            type: "Team Broadcast",
            bitrate: "256kbps",
            ads: false,
            price: 2.99,
            features: ["Multi-language", "Coach insights", "Stadium sounds"]
          }
        ]
      }
    },
    {
      id: 4,
      tournament: "Autumn Internationals",
      homeTeam: { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
      awayTeam: { name: "Argentina", flag: "🇦🇷" },
      date: "2024-11-09T15:00:00",
      venue: "Principality Stadium, Cardiff",
      audioOptions: {
        free: [
          { 
            name: "BBC Radio Wales", 
            language: "English/Welsh",
            type: "Live Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "Wales Only",
            provider: "BBC"
          }
        ],
        premium: [
          {
            name: "Stadium Surround Sound",
            language: "Natural Audio",
            type: "Immersive Feed",
            bitrate: "320kbps",
            ads: false,
            price: 3.99,
            features: ["360° audio", "Crowd channels", "Referee mic", "Coach communications"]
          }
        ]
      }
    }
  ];

  const handleFreeAudioSelect = (game, audioOption) => {
    setSelectedAudio({ ...audioOption, type: 'free', game: game });
    setIsPlaying(true);
    console.log(`Connecting to free audio: ${audioOption.name}`);
  };

  const handlePremiumPurchase = async (game, audioOption) => {
    try {
      await processAudioPayment(game, audioOption);
      const audioToken = generateAudioToken(game.id, audioOption.name);
      
      setSelectedAudio({ ...audioOption, type: 'premium', token: audioToken, game: game });
      setIsPlaying(true);
      
      alert(`🎧 Premium audio purchased!\n\nNow streaming: ${audioOption.name}\n💰 Amount: $${audioOption.price}\n🎚️ Quality: ${audioOption.bitrate}`);
      
    } catch (error) {
      console.error('Audio purchase failed:', error);
      alert('Purchase failed. Please try again.');
    }
  };

  const processAudioPayment = (game, audioOption) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1;
        if (success) {
          resolve({ 
            transactionId: 'AUD' + Date.now(), 
            amount: audioOption.price,
            product: audioOption.name
          });
        } else {
          reject(new Error('Payment processing failed'));
        }
      }, 1500);
    });
  };

  const generateAudioToken = (gameId, audioName) => {
    return btoa(`audio:${gameId}:${audioName}:${Date.now()}`);
  };

  const formatGameDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const AudioProviderModal = () => (
    <div className="ppa-audio-providers-modal">
      <div className="ppa-modal-content">
        <div className="ppa-modal-header">
          <h2>🌍 Select Your Country for Audio Providers</h2>
          <button className="ppa-close-btn" onClick={() => setShowAudioProviders(false)}>✕</button>
        </div>
        
        <div className="ppa-countries-grid">
          {availableCountries.map(country => (
            <div 
              key={country}
              className={`ppa-country-option ${userLocation === country ? 'ppa-selected' : ''}`}
              onClick={() => {
                setUserLocation(country);
                setShowAudioProviders(false);
              }}
            >
              <span className="ppa-country-flag">{
                country === 'United States' ? '🇺🇸' :
                country === 'United Kingdom' ? '🇬🇧' :
                country === 'Ireland' ? '🇮🇪' :
                country === 'Australia' ? '🇦🇺' :
                country === 'New Zealand' ? '🇳🇿' :
                country === 'South Africa' ? '🇿🇦' :
                country === 'Global' ? '🌍' : '🌍'
              }</span>
              <span className="ppa-country-name">{country}</span>
            </div>
          ))}
        </div>

        <div className="ppa-providers-list">
          <h3>Available Audio Providers in {userLocation}:</h3>
          <div className="ppa-providers-grid">
            {audioProviders[userLocation]?.map((provider, index) => (
              <div key={index} className="ppa-provider-card">
                <div className="ppa-provider-logo">{provider.logo}</div>
                <div className="ppa-provider-info">
                  <h4>{provider.name}</h4>
                  <p>Type: {provider.type}</p>
                  <p>Quality: {provider.quality}</p>
                </div>
                <button 
                  className="ppa-visit-btn" 
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

  const AudioPlayer = () => {
    if (!selectedAudio) return null;

    return (
      <div className="ppa-audio-player-overlay">
        <div className="ppa-audio-player">
          <div className="ppa-player-header">
            <h3>🎧 Now Playing</h3>
            <button className="ppa-close-player" onClick={() => {
              setIsPlaying(false);
              setSelectedAudio(null);
            }}>✕</button>
          </div>
          
          <div className="ppa-now-playing">
            <div className="ppa-game-info">
              <div className="ppa-teams">
                {selectedAudio.game?.homeTeam.name} {selectedAudio.game?.homeTeam.flag} vs {selectedAudio.game?.awayTeam.name} {selectedAudio.game?.awayTeam.flag}
              </div>
              <div className="ppa-audio-source">
                {selectedAudio.name} • {selectedAudio.type.toUpperCase()} • {selectedAudio.bitrate}
              </div>
            </div>
            
            <div className="ppa-player-controls">
              <button className="ppa-control-btn">⏮</button>
              <button 
                className="ppa-play-pause"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="ppa-control-btn">⏭</button>
            </div>
            
            <div className="ppa-player-stats">
              <div className="bitrate">Bitrate: {selectedAudio.bitrate}</div>
              <div className="connection">Status: {isPlaying ? '🔴 Live' : '⏸ Paused'}</div>
              <div className="type">{selectedAudio.type}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GameAudioCard = ({ game }) => (
    <div className="ppa-game-card">
      <div className="ppa-game-header">
        <span className="ppa-tournament-badge">{game.tournament}</span>
        <span className="ppa-game-date">{formatGameDate(game.date)}</span>
      </div>
      
      <div className="ppa-teams-display">
        <div className="ppa-team">
          <span className="ppa-team-flag">{game.homeTeam.flag}</span>
          <span className="ppa-team-name">{game.homeTeam.name}</span>
        </div>
        <div className="ppa-vs">VS</div>
        <div className="ppa-team">
          <span className="ppa-team-name">{game.awayTeam.name}</span>
          <span className="ppa-team-flag">{game.awayTeam.flag}</span>
        </div>
      </div>
      
      <div className="ppa-audio-options">
        {/* Free Audio Options */}
        <div className="ppa-audio-section">
          <h4>🎧 Free Commentary</h4>
          {game.audioOptions.free.map((option, index) => (
            <div key={index} className="ppa-audio-option ppa-free">
              <div className="ppa-audio-info">
                <div className="ppa-audio-name">{option.name}</div>
                <div className="ppa-audio-details">
                  {option.language} • {option.type} • {option.bitrate}
                  {option.ads && <span className="ppa-ad-indicator"> • Contains Ads</span>}
                  <div className="ppa-features">
                    <span className="ppa-feature-tag">{option.region}</span>
                    <span className="ppa-feature-tag">{option.provider}</span>
                  </div>
                </div>
              </div>
              <button 
                className="ppa-listen-btn"
                onClick={() => handleFreeAudioSelect(game, option)}
              >
                Listen Free
              </button>
            </div>
          ))}
        </div>
        
        {/* Premium Audio Options */}
        <div className="ppa-audio-section">
          <h4>⭐ Premium Audio</h4>
          {game.audioOptions.premium.map((option, index) => (
            <div key={index} className="ppa-audio-option ppa-premium">
              <div className="ppa-audio-info">
                <div className="ppa-audio-name">{option.name}</div>
                <div className="ppa-audio-details">
                  {option.language} • {option.type} • {option.bitrate}
                  <div className="ppa-features">
                    {option.features.map((feature, idx) => (
                      <span key={idx} className="ppa-feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ppa-premium-actions">
                <div className="ppa-price">${option.price}</div>
                <button 
                  className="ppa-purchase-btn"
                  onClick={() => handlePremiumPurchase(game, option)}
                >
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ppa-system">
      {/* Top Ad Banner */}
      <div className="ppa-top-ad-banner">
        🎧 Rugby Audio Streaming - Live Commentary & Stadium Atmosphere! 🔊
      </div>

      {/* Top Navigation */}
      <nav className="ppa-nav">
        <button className="ppa-nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="ppa-nav-btn">🏠 Home</button>
        <button className="ppa-nav-btn">🔍 Search</button>
        <button className="ppa-nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="ppa-content">
        <div className="ppa-header">
          <h1 className="ppa-title">🎧 Rugby Audio Streaming</h1>
          <p className="ppa-subtitle">Live commentary, stadium atmosphere, and premium audio experiences</p>
          
          <div className="ppa-location-section">
            <div className="ppa-location-badge" onClick={() => setShowAudioProviders(true)}>
              📍 Listening from: <strong>{userLocation}</strong>
              <span className="ppa-change-location">(Click to change)</span>
            </div>
            <button 
              className="ppa-location-btn"
              onClick={() => setShowAudioProviders(true)}
            >
              🌍 Change Country
            </button>
          </div>
        </div>

        {/* Audio Benefits Grid */}
        <div className="ppa-benefits-grid">
          <div className="ppa-benefit-card">
            <div className="ppa-benefit-icon">🎧</div>
            <h3>Free Commentary</h3>
            <p>Local radio broadcasts and free streaming options available in many regions worldwide</p>
          </div>
          <div className="ppa-benefit-card">
            <div className="ppa-benefit-icon">⭐</div>
            <h3>Premium Audio</h3>
            <p>Ad-free, multi-language commentary, stadium atmosphere feeds, and exclusive content</p>
          </div>
          <div className="ppa-benefit-card">
            <div className="ppa-benefit-icon">📱</div>
            <h3>Any Device</h3>
            <p>Stream on mobile, computer, tablet, or smart speakers with seamless cross-device support</p>
          </div>
        </div>

        {/* Available Games Grid */}
        <div className="ppa-games-section">
          <h2 style={{textAlign: 'center', color: 'white', marginBottom: '30px', fontSize: '2em'}}>
            📻 Live & Upcoming Audio Streams
          </h2>
          <div className="ppa-games-grid">
            {upcomingGames.map(game => (
              <GameAudioCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Audio Quality Info */}
        <div className="ppa-quality-info">
          <h3>🎚️ Audio Quality Options</h3>
          <div className="ppa-quality-levels">
            <div className="ppa-quality-level">
              <div className="ppa-quality-badge ppa-standard">Standard</div>
              <div className="ppa-quality-desc">128kbps - Optimized for mobile data and slower connections</div>
            </div>
            <div className="ppa-quality-level">
              <div className="ppa-quality-badge ppa-high">High</div>
              <div className="ppa-quality-desc">192kbps - Balanced quality for most listening scenarios</div>
            </div>
            <div className="ppa-quality-level">
              <div className="ppa-quality-badge ppa-hd">HD Audio</div>
              <div className="ppa-quality-desc">320kbps - Studio quality for premium listening experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Providers Modal */}
      {showAudioProviders && <AudioProviderModal />}

      {/* Audio Player Overlay */}
      <AudioPlayer />

      {/* Bottom Ad Banner */}
      <div className="ppa-bottom-ad-banner">
        🏉 Rugby World Cup 2025 - Official Audio Partner! 🌍
      </div>
    </div>
  );
};

export default PPASystem;