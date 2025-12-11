import React, { useState } from 'react';
import './EnglandAnthem.css';
import NavBar from './NavBar';

const EnglandAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(55); // 0:55 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "England",
    officialName: "England",
    code: "eng",
    
    anthem: {
      title: "God Save the King",
      originalTitle: "God Save the King",
      yearAdopted: 1745,
      composers: ["Unknown"],
      languages: ["English"],
      duration: "0:55",
      note: "Royal anthem used for England in sporting contexts"
    },
    
    rugby: {
      teamName: "England Rugby",
      nickname: "The Red Roses (Women), England (Men)",
      colors: ["#FFFFFF", "#CF142B"], // White, Red
      worldCupWins: 1,
      captain: "Owen Farrell",
      coach: "Steve Borthwick",
      homeStadium: "Twickenham Stadium, London",
      famousPlayers: ["Jonny Wilkinson", "Martin Johnson", "Jason Robinson", "Lawrence Dallaglio", "Maro Itoje"]
    },
    
    lyrics: {
      original: `God save our gracious King!
Long live our noble King!
God save the King!
Send him victorious,
Happy and glorious,
Long to reign over us,
God save the King.

Thy choicest gifts in store
On him be pleased to pour,
Long may he reign.
May he defend our laws,
And ever give us cause,
To sing with heart and voice,
God save the King.`
    },
    
    facts: [
      "One of the oldest national anthems in the world, first performed in 1745.",
      "Serves as the royal anthem for the United Kingdom and Commonwealth realms.",
      "Used for England in sporting events as England doesn't have its own official national anthem.",
      "The melody has been used for many other national songs including 'My Country, 'Tis of Thee' in the USA.",
      "At rugby matches, 'Swing Low, Sweet Chariot' is often sung by fans alongside the anthem.",
      "England won the Rugby World Cup in 2003 with Jonny Wilkinson's famous drop goal.",
      "Twickenham Stadium is the largest dedicated rugby union venue in the world."
    ],
    
    history: "God Save the King originated in the early 18th century, with the first recorded performance in 1745. It became established as the British national anthem during the reign of George III. While the United Kingdom doesn't have an official national anthem, 'God Save the King' is used by custom. In sporting contexts, it represents England. The anthem's simple, dignified melody has made it one of the most recognizable national songs in the world."
  };

  // UPDATED: Changed from solidlogos/englandsl.png to iconlogos/england-icon-logo.jpg
  const englandLogo = () => {
    try {
      return require('../Assets/images/iconlogos/england-icon-logo.jpg');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/England_national_rugby_union_team_logo.svg/300px-England_national_rugby_union_team_logo.svg.png";
    }
  };

  const englandFlag = () => {
    try {
      return require('../Assets/images/flags/england.png');
    } catch (e) {
      return "https://flagcdn.com/w640/gb-eng.png";
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
    <div className="nation-anthem-page england">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 ENGLAND NATIONAL ANTHEM - ENGLAND RUGBY PRIDE! 🏉🌹
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#CF142B' }}>
          <div className="header-left">
            <img src={englandLogo()} alt="England Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">England National Anthem</h1>
            <p className="anthem-subtitle">England Rugby Official Anthem</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={englandFlag()} alt="England Flag" className="flag-image" />
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
              <h3>🏉 England Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                  <div className="color-box" style={{ backgroundColor: '#CF142B' }} title="Red Rose" />
                  <div className="color-box" style={{ backgroundColor: '#0A2463' }} title="Navy Blue" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (2003)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Six Nations Titles:</strong> 29 (including 13 Grand Slams)</p>
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
                    <h4>God Save the King</h4>
                    <pre>{nationData.lyrics.original}</pre>
                    <p className="translation-note">
                      <strong>Note:</strong> Becomes 'God Save the Queen' when the monarch is female. 
                      'Swing Low, Sweet Chariot' is also traditionally sung by England rugby fans.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>First Recorded:</strong> 1745</p>
                    <p><strong>Became Traditional:</strong> Early 19th century</p>
                    <p><strong>Rugby Connection:</strong> Used for England since international rugby began</p>
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
                  <div className="rugby-fact">
                    <h4>🏉 Rugby Tradition</h4>
                    <p>England fans famously sing 'Swing Low, Sweet Chariot' during matches, a tradition 
                    that began in the 1980s and has become synonymous with English rugby.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Official {nationData.rugby.teamName} Anthem - 2003 Rugby World Cup Champions</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🌹 ENGLAND RUGBY - 2003 WORLD CUP CHAMPIONS & TWICKENHAM FORTRESS! 🏆
      </div>
    </div>
  );
};

export default EnglandAnthem;