import React, { useState } from 'react';
import './ScotlandAnthem.css';
import NavBar from './NavBar';

const ScotlandAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(86); // 1:26 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "Scotland",
    officialName: "Scotland",
    code: "sco",
    
    anthem: {
      title: "Flower of Scotland",
      originalTitle: "Flower of Scotland",
      yearAdopted: 1990,
      composers: ["Roy Williamson"],
      languages: ["English"],
      duration: "1:26",
      note: "Unofficial national anthem used for sporting events"
    },
    
    rugby: {
      teamName: "Scotland Rugby",
      nickname: "The Thistle",
      colors: ["#0065BF", "#FFFFFF"], // Blue, White
      worldCupWins: 0,
      captain: "Jamie Ritchie",
      coach: "Gregor Townsend",
      homeStadium: "Murrayfield Stadium, Edinburgh",
      famousPlayers: ["Gavin Hastings", "Andy Irvine", "Chris Paterson", "Stuart Hogg", "Finn Russell"]
    },
    
    lyrics: {
      original: `O flower of Scotland,
When will we see
Your like again,
That fought and died for,
Your wee bit hill and glen,
And stood against him,
Proud Edward's army,
And sent him homeward,
Tae think again.

The hills are bare now,
And autumn leaves
Lie thick and still,
O'er land that is lost now,
Which those so dearly held,
That stood against him,
Proud Edward's army,
And sent him homeward,
Tae think again.

Those days are past now,
And in the past
They must remain,
But we can still rise now,
And be the nation again,
That stood against him,
Proud Edward's army,
And sent him homeward,
Tae think again.`
    },
    
    facts: [
      "Written in 1967 by Roy Williamson of the folk group The Corries.",
      "First performed by The Corries in 1967 and gained popularity in the 1970s.",
      "Adopted by the Scottish Rugby Union as the pre-match anthem in 1990.",
      "Refers to the victory of the Scots over Edward II's army at the Battle of Bannockburn in 1314.",
      "The thistle is Scotland's national flower and rugby emblem.",
      "Scotland's Murrayfield Stadium is the largest stadium in Scotland.",
      "Scotland has won the Five/Six Nations Championship 15 times (including 3 Grand Slams)."
    ],
    
    history: "Flower of Scotland was written by Roy Williamson of the folk group The Corries in the mid-1960s. It gained popularity as an alternative to 'God Save the Queen' and was adopted by the Scottish Rugby Union in 1990 as the pre-match anthem. The song commemorates the Scottish victory over the English at the Battle of Bannockburn in 1314. While not officially the national anthem (Scotland uses 'God Save the King' for official purposes), it has become the de facto anthem for Scottish sporting events and is passionately sung by fans at Murrayfield."
  };

  const scotlandLogo = () => {
    try {
      return require('../Assets/images/solidlogos/scotlandsl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Scotland_national_rugby_union_team_logo.svg/300px-Scotland_national_rugby_union_team_logo.svg.png";
    }
  };

  const scotlandFlag = () => {
    try {
      return require('../Assets/images/flags/scotland.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/gb-sct.png";
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
    <div className="nation-anthem-page scotland">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 SCOTLAND NATIONAL ANTHEM - THISTLE PRIDE! 🏉🏴󠁧󠁢󠁳󠁣󠁴󠁿
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#0065BF' }}>
          <div className="header-left">
            <img src={scotlandLogo()} alt="Scotland Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Scotland National Anthem</h1>
            <p className="anthem-subtitle">Scotland Rugby Official Anthem - Flower of Scotland</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={scotlandFlag()} alt="Scotland Flag" className="flag-image" />
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
              <h3>🏉 Scotland Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#0065BF' }} title="Royal Blue" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                  <div className="color-box" style={{ backgroundColor: '#C8102E' }} title="Red" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: 4th place 1991)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium} (67,144 capacity)</p>
                  <p><strong>Six Nations Titles:</strong> 15 (including 3 Grand Slams)</p>
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
              <button className={`tab-btn ${activeTab === 'thistle' ? 'active' : ''}`} onClick={() => handleTabClick('thistle')}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 The Thistle</button>
            </div>

            <div className="tab-content">
              {activeTab === 'lyrics' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Flower of Scotland</h4>
                    <pre>{nationData.lyrics.original}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Written:</strong> 1967 by Roy Williamson</p>
                    <p><strong>First Performed:</strong> 1967 by The Corries</p>
                    <p><strong>Rugby Adoption:</strong> 1990 by Scottish Rugby Union</p>
                    <p><strong>Battle Referenced:</strong> Bannockburn, 1314</p>
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

              {activeTab === 'thistle' && (
                <div className="facts-content">
                  <div className="rugby-fact">
                    <h4>🏴󠁧󠁢󠁳󠁣󠁴󠁿 The Thistle - Scotland's Emblem</h4>
                    <p>The thistle has been Scotland's national emblem since the reign of Alexander III (1249–1286). 
                    According to legend, Norse invaders were discovered when one stepped on a thistle and cried out in pain. 
                    In rugby, the thistle represents Scottish pride, resilience, and fighting spirit.</p>
                  </div>
                  <div className="rugby-fact" style={{ marginTop: '20px', background: '#0065BF' }}>
                    <h4>🏉 Murrayfield Atmosphere</h4>
                    <p>Murrayfield Stadium, with its 67,000 capacity, creates one of rugby's great atmospheres. 
                    The singing of 'Flower of Scotland' followed by the skirl of bagpipes is an iconic rugby experience.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Official {nationData.rugby.teamName} Anthem - Flower of Scotland & The Thistle</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🏴󠁧󠁢󠁳󠁣󠁴󠁿 SCOTLAND RUGBY - 15X FIVE/SIX NATIONS CHAMPIONS & MURRAYFIELD MAGIC! 🏆
      </div>
    </div>
  );
};

export default ScotlandAnthem;