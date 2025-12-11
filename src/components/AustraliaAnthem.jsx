import React, { useState } from 'react';
import './AustraliaAnthem.css';
import NavBar from './NavBar';

const AustraliaAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(98); // 1:38 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "Australia",
    officialName: "Commonwealth of Australia",
    code: "au",
    
    anthem: {
      title: "Advance Australia Fair",
      originalTitle: "Advance Australia Fair",
      yearAdopted: 1984,
      composers: ["Peter Dodds McCormick"],
      languages: ["English"],
      duration: "1:38",
      note: "Replaced 'God Save the Queen' as national anthem"
    },
    
    rugby: {
      teamName: "Wallabies",
      nickname: "The Wallabies",
      colors: ["#FFCD00", "#00843D", "#FFFFFF"], // Gold, Green, White
      worldCupWins: 2,
      captain: "Michael Hooper",
      coach: "Eddie Jones",
      homeStadium: "Sydney Cricket Ground / Suncorp Stadium",
      famousPlayers: ["David Campese", "John Eales", "Michael Lynagh", "George Gregan", "Stephen Larkham"]
    },
    
    lyrics: {
      original: `Australians all let us rejoice,
For we are one and free;
We've golden soil and wealth for toil;
Our home is girt by sea;
Our land abounds in nature's gifts
Of beauty rich and rare;
In history's page, let every stage
Advance Australia Fair.
In joyful strains then let us sing,
Advance Australia Fair.

Beneath our radiant Southern Cross
We'll toil with hearts and hands;
To make this Commonwealth of ours
Renowned of all the lands;
For those who've come across the seas
We've boundless plains to share;
With courage let us all combine
To Advance Australia Fair.
In joyful strains then let us sing,
Advance Australia Fair.`
    },
    
    facts: [
      "Originally composed in 1878 by Scottish-born Australian composer Peter Dodds McCormick.",
      "First performed at St Andrew's Day concert in Sydney on 30 November 1878.",
      "Became popular during Federation celebrations in 1901.",
      "Officially adopted as national anthem in 1984, replacing 'God Save the Queen'.",
      "Modified in 2021 to change 'young and free' to 'one and free' to recognize Indigenous history.",
      "Often performed at sporting events including Wallabies rugby matches.",
      "Australia has won two Rugby World Cups (1991, 1999)."
    ],
    
    history: "Advance Australia Fair was written by Peter Dodds McCormick, a Scottish-born schoolteacher, and first performed in 1878. It gained popularity during the Federation movement and was used unofficially for many years alongside 'God Save the Queen'. After a 1977 plebiscite, it was officially adopted as the national anthem in 1984. The lyrics were modified in 2021 to be more inclusive of Indigenous Australians."
  };

  // UPDATED: Changed from solidlogos/australiasl.png to iconlogos/australia-icon-logo.jpg
  const wallabiesLogo = () => {
    try {
      return require('../Assets/images/iconlogos/australia-icon-logo.jpg');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Australia_national_rugby_union_team_logo.svg/300px-Australia_national_rugby_union_team_logo.svg.png";
    }
  };

  const australiaFlag = () => {
    try {
      return require('../Assets/images/flags/australia.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/au.png";
    }
  };

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = (e) => setCurrentTime(parseInt(e.target.value));
  const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="nation-anthem-page australia">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 AUSTRALIA NATIONAL ANTHEM - WALLABIES PRIDE! 🏉🦘
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#00843D' }}>
          <div className="header-left">
            <img src={wallabiesLogo()} alt="Wallabies Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Australia National Anthem</h1>
            <p className="anthem-subtitle">Wallabies Official Anthem</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={australiaFlag()} alt="Australia Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Listen to the Anthem</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Stop</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 Wallabies Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#FFCD00' }} title="Gold" />
                  <div className="color-box" style={{ backgroundColor: '#00843D' }} title="Green" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (1991, 1999)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Bledisloe Cups:</strong> 44 wins</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Legendary Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => handleTabClick('lyrics')}>📜 Lyrics</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 History</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Facts</button>
            </div>

            <div className="tab-content">
              {activeTab === 'lyrics' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Advance Australia Fair</h4>
                    <pre>{nationData.lyrics.original}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Composed:</strong> 1878 by Peter Dodds McCormick</p>
                    <p><strong>First Performance:</strong> 1878, Sydney</p>
                    <p><strong>Official Adoption:</strong> 1984</p>
                    <p><strong>Lyrics Updated:</strong> 2021 ('one and free')</p>
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
          <p>Official {nationData.rugby.teamName} Anthem - 2x Rugby World Cup Champions</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🦘 WALLABIES - 2x RUGBY WORLD CUP CHAMPIONS & BLEDISLOE RIVALRY! 🏆🏆
      </div>
    </div>
  );
};

export default AustraliaAnthem;