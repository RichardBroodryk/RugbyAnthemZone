import React, { useState, useEffect } from 'react';
import './PPASystem.css';

const PPASystem = ({ onNavigateBack, game }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioQuality, setAudioQuality] = useState('standard');

  const audioAvailability = {
    freeCommentary: {
      'BBC Radio 5 Live': ['United Kingdom', 'Ireland'],
      'Radio Sport NZ': ['New Zealand'],
      'ABC Grandstand': ['Australia'],
      'RSG': ['South Africa'],
      'France Info': ['France']
    },
    premiumAudio: {
      'International': ['Global'],
      'Stadium Feed': ['Global'],
      'Multilingual Pack': ['Global']
    },
    restrictedRegions: [
      'United Kingdom'
    ]
  };

  const upcomingGames = [
    {
      id: 1,
      tournament: "Six Nations Championship",
      homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "ENG" },
      awayTeam: { name: "Ireland", flag: "🇮🇪", code: "IRE" },
      date: "2024-03-16T14:15:00",
      venue: "Twickenham Stadium, London",
      audioOptions: {
        free: [
          { 
            name: "BBC Radio 5 Live", 
            language: "English",
            type: "Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "UK Only"
          }
        ],
        premium: [
          {
            name: "Stadium Atmosphere",
            language: "Natural Sound",
            type: "Stadium Feed",
            bitrate: "192kbps",
            ads: false,
            price: 2.99,
            features: ["No commentary", "Pure stadium sound", "Multi-angle audio"]
          },
          {
            name: "International Commentary",
            language: "Multi-language",
            type: "Premium Commentary",
            bitrate: "256kbps",
            ads: false,
            price: 4.99,
            features: ["Expert analysis", "No ads", "HD Audio", "Multiple language options"]
          }
        ]
      }
    },
    {
      id: 2,
      tournament: "Rugby Championship",
      homeTeam: { name: "New Zealand", flag: "🇳🇿", code: "NZL" },
      awayTeam: { name: "Australia", flag: "🇦🇺", code: "AUS" },
      date: "2024-08-21T08:35:00",
      venue: "Eden Park, Auckland",
      audioOptions: {
        free: [
          { 
            name: "Radio Sport NZ", 
            language: "English",
            type: "Commentary",
            bitrate: "128kbps",
            ads: true,
            region: "NZ Only"
          }
        ],
        premium: [
          {
            name: "Stadium Feed",
            language: "Natural Sound",
            type: "Stadium Audio",
            bitrate: "192kbps",
            ads: false,
            price: 1.99,
            features: ["Pure stadium atmosphere", "No interruptions"]
          }
        ]
      }
    }
  ];

  useEffect(() => {
    detectUserLocation();
  }, []);

  const detectUserLocation = () => {
    const mockLocation = 'United States';
    setUserLocation(mockLocation);
  };

  const isFreeAudioAvailable = (game) => {
    if (!userLocation) return false;
    
    return game.audioOptions.free.some(option => 
      option.region.includes(userLocation) || option.region === 'Global'
    );
  };

  const isPremiumAudioAvailable = (game) => {
    if (!userLocation) return false;
    
    if (audioAvailability.restrictedRegions.includes(userLocation)) {
      return false;
    }
    
    return game.audioOptions.premium.length > 0;
  };

  const handleFreeAudioSelect = (game, audioOption) => {
    setSelectedAudio({ ...audioOption, type: 'free' });
    setIsPlaying(true);
    console.log(`Connecting to free audio: ${audioOption.name}`);
  };

  const handlePremiumPurchase = async (game, audioOption) => {
    try {
      await processAudioPayment(game, audioOption);
      const audioToken = generateAudioToken(game.id, audioOption.name);
      
      setSelectedAudio({ ...audioOption, type: 'premium', token: audioToken });
      setIsPlaying(true);
      
      alert(`Premium audio purchased! Now streaming: ${audioOption.name}`);
      
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

  const AudioPlayer = () => {
    if (!selectedAudio) return null;

    return (
      <div className="audio-player-overlay">
        <div className="audio-player">
          <div className="player-header">
            <h3>Now Playing</h3>
            <button className="close-player" onClick={() => setIsPlaying(false)}>✕</button>
          </div>
          
          <div className="now-playing">
            <div className="game-info">
              <div className="teams">
                England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 vs Ireland 🇮🇪
              </div>
              <div className="audio-source">
                {selectedAudio.name} ({selectedAudio.type})
              </div>
            </div>
            
            <div className="player-controls">
              <button className="control-btn">⏮</button>
              <button 
                className="play-pause"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="control-btn">⏭</button>
            </div>
            
            <div className="audio-quality">
              <label>Quality: </label>
              <select 
                value={audioQuality} 
                onChange={(e) => setAudioQuality(e.target.value)}
              >
                <option value="standard">Standard (128kbps)</option>
                <option value="high">High (192kbps)</option>
                <option value="hd">HD (320kbps)</option>
              </select>
            </div>
            
            <div className="player-stats">
              <div className="bitrate">Bitrate: {selectedAudio.bitrate}</div>
              <div className="connection">Status: {isPlaying ? 'Connected' : 'Paused'}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const GameAudioCard = ({ game }) => (
    <div className="game-audio-card">
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
      
      <div className="audio-options">
        {/* Free Audio Options */}
        {isFreeAudioAvailable(game) && (
          <div className="audio-section free-audio">
            <h4>🎧 Free Commentary</h4>
            {game.audioOptions.free
              .filter(option => option.region.includes(userLocation) || option.region === 'Global')
              .map((option, index) => (
                <div key={index} className="audio-option free">
                  <div className="audio-info">
                    <div className="audio-name">{option.name}</div>
                    <div className="audio-details">
                      {option.language} • {option.type} • {option.bitrate}
                      {option.ads && <span className="ad-indicator"> • Contains Ads</span>}
                    </div>
                  </div>
                  <button 
                    className="listen-btn free"
                    onClick={() => handleFreeAudioSelect(game, option)}
                  >
                    Listen Free
                  </button>
                </div>
              ))}
          </div>
        )}
        
        {/* Premium Audio Options */}
        {isPremiumAudioAvailable(game) && (
          <div className="audio-section premium-audio">
            <h4>⭐ Premium Audio</h4>
            {game.audioOptions.premium.map((option, index) => (
              <div key={index} className="audio-option premium">
                <div className="audio-info">
                  <div className="audio-name">{option.name}</div>
                  <div className="audio-details">
                    {option.language} • {option.type} • {option.bitrate}
                    <div className="features">
                      {option.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="premium-actions">
                  <div className="price">${option.price}</div>
                  <button 
                    className="purchase-btn audio"
                    onClick={() => handlePremiumPurchase(game, option)}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* No Audio Available */}
        {!isFreeAudioAvailable(game) && !isPremiumAudioAvailable(game) && (
          <div className="no-audio-available">
            <p>No audio options available in your region ({userLocation})</p>
            <small>Audio rights may be restricted in your location</small>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="ppa-system">
      {/* Navigation Bar */}
      <nav className="ppa-nav">
        <button className="nav-back-btn" onClick={onNavigateBack}>
          ← Back
        </button>
        <h1 className="nav-title">Rugby Audio Streaming</h1>
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
        {/* PPA Header */}
        <div className="ppa-header">
          <h1>Rugby Audio Streaming</h1>
          <p>Listen to live commentary and stadium atmosphere. Free and premium options available.</p>
          {userLocation && (
            <div className="location-info">
              📍 Listening from: <strong>{userLocation}</strong>
            </div>
          )}
        </div>

        {/* Audio Benefits */}
        <div className="audio-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">🎧</div>
            <h3>Free Commentary</h3>
            <p>Local radio broadcasts available in many regions</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⭐</div>
            <h3>Premium Audio</h3>
            <p>Ad-free, multi-language, and stadium feed options</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📱</div>
            <h3>Any Device</h3>
            <p>Listen on mobile, computer, or smart speakers</p>
          </div>
        </div>

        {/* Available Games */}
        <div className="audio-games">
          <h2>Live & Upcoming Games</h2>
          <div className="games-grid">
            {upcomingGames.map(game => (
              <GameAudioCard key={game.id} game={game} />
            ))}
          </div>
        </div>

        {/* Audio Quality Info */}
        <div className="quality-info">
          <h3>Audio Quality Options</h3>
          <div className="quality-levels">
            <div className="quality-level">
              <div className="quality-badge standard">Standard</div>
              <div className="quality-desc">128kbps - Mobile data friendly</div>
            </div>
            <div className="quality-level">
              <div className="quality-badge high">High</div>
              <div className="quality-desc">192kbps - Balanced quality</div>
            </div>
            <div className="quality-level">
              <div className="quality-badge hd">HD Audio</div>
              <div className="quality-desc">320kbps - Studio quality</div>
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

      {/* Audio Player Overlay */}
      <AudioPlayer />
    </div>
  );
};

export default PPASystem;