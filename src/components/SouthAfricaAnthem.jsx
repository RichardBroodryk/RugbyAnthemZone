import React, { useState } from 'react';
import './SouthAfricaAnthem.css';
import NavBar from './NavBar';

const SouthAfricaAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(108); // 1:48 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "South Africa",
    officialName: "Republic of South Africa",
    code: "za",
    
    anthem: {
      title: "National Anthem of South Africa",
      originalTitle: "Nkosi Sikelel' iAfrika / Die Stem van Suid-Afrika",
      yearAdopted: 1997,
      composers: ["Enoch Sontonga", "Cornelis Jacobus Langenhoven"],
      languages: ["Xhosa", "Zulu", "Sesotho", "Afrikaans", "English"],
      duration: "1:48"
    },
    
    rugby: {
      teamName: "Springboks",
      nickname: "The Boks",
      colors: ["#007749", "#000000", "#FFB81C"], // Green, Black, Gold
      worldCupWins: 4,
      captain: "Siya Kolisi",
      coach: "Rassie Erasmus",
      homeStadium: "Ellis Park, Johannesburg",
      famousPlayers: ["Siya Kolisi", "Bryan Habana", "Faf de Klerk", "Eben Etzebeth", "Handré Pollard"]
    },
    
    lyrics: {
      original: `Nkosi sikelel' iAfrika
Maluphakanyisw' uphondo lwayo,
Yizwa imithandazo yethu,
Nkosi sikelela, thina lusapho lwayo.

Morena boloka setjhaba sa heso,
O fedise dintwa le matshwenyeho,
O se boloke, O se boloke setjhaba sa heso,
Setjhaba sa South Afrika - South Afrika.

Uit die blou van onse hemel,
Uit die diepte van ons see,
Oor ons ewige gebergtes,
Waar die kranse antwoord gee.

Sounds the call to come together,
And united we shall stand,
Let us live and strive for freedom,
In South Africa our land.`,
      
      translation: `Lord bless Africa
May her spirit rise high up
Hear thou our prayers
Lord bless us.

Lord bless Africa
Banish wars and strife
Lord, make our nation strong and free,
South Africa.

Ringing out from our blue heavens,
From our deep seas breaking round,
Over everlasting mountains,
Where the echoing crags resound.

Sounds the call to come together,
And united we shall stand,
Let us live and strive for freedom,
In South Africa our land.`
    },
    
    facts: [
      "The only national anthem in the world sung in five different languages.",
      "Combines the African hymn 'Nkosi Sikelel' iAfrika' with the former anthem 'Die Stem van Suid-Afrika'.",
      "Adopted in 1997 after the end of apartheid to symbolize national unity.",
      "The first two lines are in Xhosa and Zulu, followed by Sesotho, Afrikaans, and English.",
      "Often sung at major sporting events, especially Springboks rugby matches.",
      "Reflects South Africa's 'Rainbow Nation' identity with its multiple languages."
    ],
    
    history: "South Africa's national anthem is unique in that it combines two different songs: the African hymn 'Nkosi Sikelel' iAfrika' (God Bless Africa) and the Afrikaans song 'Die Stem van Suid-Afrika' (The Call of South Africa). This combination was chosen to represent the unity of the 'Rainbow Nation' after the end of apartheid. The anthem was officially adopted in 1997 and is considered one of the most beautiful and inclusive national anthems in the world."
  };

  // Try to load images with fallbacks
  const springbokLogo = () => {
    try {
      return require('../Assets/images/solidlogos/south-africasl.png');
    } catch (e) {
      console.log("Springbok logo not found, using fallback");
      return "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/South_Africa_national_rugby_union_team_logo.svg/300px-South_Africa_national_rugby_union_team_logo.svg.png";
    }
  };

  const southAfricaFlag = () => {
    try {
      return require('../Assets/images/flags/south-africa.jpg');
    } catch (e) {
      console.log("South Africa flag image not found, using fallback");
      return "https://flagcdn.com/w640/za.png";
    }
  };

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = (e) => setCurrentTime(parseInt(e.target.value));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="nation-anthem-page south-africa">
      {/* Professional NavBar Component */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
        onNavigateToSearch={() => console.log("Search Anthem")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎵 SOUTH AFRICA NATIONAL ANTHEM - SPRINGBOKS PRIDE! 🏉
      </div>

      <div className="anthem-content">
        {/* Header with Springbok green background */}
        <div className="anthem-header">
          <div className="header-left">
            <img 
              src={springbokLogo()}
              alt="Springboks Logo"
              className="springbok-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/South_Africa_national_rugby_union_team_logo.svg/300px-South_Africa_national_rugby_union_team_logo.svg.png";
              }}
            />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">South Africa National Anthem</h1>
            <p className="anthem-subtitle">Springboks Official Anthem</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img 
                src={southAfricaFlag()} 
                alt="South Africa Flag" 
                className="flag-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://flagcdn.com/w640/za.png";
                  e.target.style.objectFit = "cover";
                }}
              />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Audio Player */}
            <div className="player-card">
              <h3>🎧 Listen to the Anthem</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Stop</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleTimeUpdate}
                    className="time-slider"
                  />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Rugby Info */}
            <div className="rugby-card">
              <h3>🏉 Springboks Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#007749' }} title="Springbok Green" />
                  <div className="color-box" style={{ backgroundColor: '#000000' }} title="Black" />
                  <div className="color-box" style={{ backgroundColor: '#FFB81C' }} title="Gold" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins}</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Famous Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Tabs */}
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => handleTabClick('lyrics')}>
                📜 Lyrics
              </button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>
                📖 History
              </button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>
                💡 Facts
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === 'lyrics' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Original Version</h4>
                    <pre>{nationData.lyrics.original}</pre>
                  </div>
                  <div className="lyrics-section">
                    <h4>English Translation</h4>
                    <pre>{nationData.lyrics.translation}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Year Adopted:</strong> {nationData.anthem.yearAdopted}</p>
                    <p><strong>Composers:</strong> {nationData.anthem.composers.join(' and ')}</p>
                    <p><strong>Languages:</strong> {nationData.anthem.languages.join(', ')}</p>
                  </div>
                </div>
              )}

              {activeTab === 'facts' && (
                <div className="facts-content">
                  <ul className="facts-list">
                    {nationData.facts.map((fact, idx) => (
                      <li key={idx}>{fact}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Official {nationData.rugby.teamName} Anthem - For Rugby Match Preparation</p>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏉 SPRINGBOKS - 4x RUGBY WORLD CUP CHAMPIONS! 🏆🏆🏆🏆
      </div>
    </div>
  );
};

export default SouthAfricaAnthem;