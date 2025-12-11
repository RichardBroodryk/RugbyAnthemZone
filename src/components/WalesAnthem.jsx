import React, { useState } from 'react';
import './WalesAnthem.css';
import NavBar from './NavBar';

const WalesAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(78); // 1:18 in seconds
  // FIXED: Set initial active tab to 'welsh' (users see content immediately)
  const [activeTab, setActiveTab] = useState('welsh');

  const nationData = {
    name: "Wales",
    officialName: "Wales",
    code: "wales",
    
    anthem: {
      title: "Hen Wlad Fy Nhadau (Land of My Fathers)",
      originalTitle: "Hen Wlad Fy Nhadau",
      yearAdopted: 1905,
      composers: ["James James"],
      lyricsBy: "Evan James",
      languages: ["Welsh"],
      duration: "1:18",
      note: "Considered one of the most stirring national anthems in sport"
    },
    
    rugby: {
      teamName: "Wales Rugby",
      nickname: "The Dragons",
      colors: ["#D21034", "#FFFFFF", "#00843D"], // Red, White, Green
      worldCupWins: 0,
      captain: "Jac Morgan",
      coach: "Warren Gatland",
      homeStadium: "Principality Stadium, Cardiff",
      famousPlayers: ["Gareth Edwards", "Barry John", "Shane Williams", "Sam Warburton", "Alun Wyn Jones"]
    },
    
    lyrics: {
      welsh: `Mae hen wlad fy nhadau yn annwyl i mi,
Gwlad beirdd a chantorion, enwogion o fri;
Ei gwrol ryfelwyr, gwladgarwyr tra mâd,
Dros ryddid collasant eu gwaed.

Gwlad! Gwlad!
Pleidiol wyf i'm gwlad.
Tra môr yn fur i'r bur hoff bau,
O bydded i'r hen iaith barhau.`,
      
      english: `The old land of my fathers is dear to me,
A land of poets and singers, famous men of renown;
Her brave warriors, very splendid patriots,
For freedom shed their blood.

Nation! Nation!
I am faithful to my nation.
While the sea serves as a wall for the pure, most loved land,
O may the old language endure.`
    },
    
    facts: [
      "The first national anthem to be sung at a sporting event (1905 vs New Zealand).",
      "Written by father and son Evan James (lyrics) and James James (music) in 1856.",
      "Adopted as the Welsh national anthem after the 1905 rugby match against New Zealand.",
      "Only national anthem in the world that is regularly sung in a minority language (Welsh).",
      "The Principality Stadium (formerly Millennium Stadium) has a roof that creates incredible acoustics.",
      "Wales has won the Six Nations 28 times (including 12 Grand Slams).",
      "The anthem is often preceded by the Welsh hymn 'Cwm Rhondda' (Bread of Heaven)."
    ],
    
    history: "Hen Wlad Fy Nhadau was composed in 1856 by father Evan James (lyrics) and son James James (music) from Pontypridd. It gained popularity as a symbol of Welsh identity and culture. The anthem entered rugby history in 1905 when the Welsh crowd spontaneously sang it in response to the New Zealand Haka. This established the tradition of singing national anthems before international rugby matches. The powerful singing of Welsh fans at the Principality Stadium is considered one of the great experiences in world rugby."
  };

  // UPDATED: Changed from solidlogos/walessl.png to iconlogos/wales-icon-logo.jpg
  const walesLogo = () => {
    try {
      return require('../Assets/images/iconlogos/wales-icon-logo.jpg');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Wales_national_rugby_union_team_logo.svg/300px-Wales_national_rugby_union_team_logo.svg.png";
    }
  };

  const walesFlag = () => {
    try {
      return require('../Assets/images/flags/wales.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/gb-wls.png";
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
    <div className="nation-anthem-page wales">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 WALES NATIONAL ANTHEM - DRAGONS' ROAR! 🏉🏴󠁧󠁢󠁷󠁬󠁳󠁿
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#D21034' }}>
          <div className="header-left">
            <img src={walesLogo()} alt="Wales Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Wales National Anthem</h1>
            <p className="anthem-subtitle">Wales Rugby Official Anthem - Hen Wlad Fy Nhadau</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={walesFlag()} alt="Wales Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Gwrando ar yr Anthem</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Chwarae'}
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
              <h3>🏉 Rygbi Cymru</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#D21034' }} title="Coch" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="Gwyn" />
                  <div className="color-box" style={{ backgroundColor: '#00843D' }} title="Gwyrdd" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: 3rd place 1987)</p>
                  <p><strong>Capten:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Hyfforddwr:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Stadiwm:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Chwe Gwlad Titles:</strong> 28 (including 12 Grand Slams)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Chwaraewyr Chwedlonol:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'welsh' ? 'active' : ''}`} onClick={() => handleTabClick('welsh')}>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Cymraeg</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 Hanes</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Ffeithiau</button>
            </div>

            <div className="tab-content">
              {activeTab === 'welsh' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Hen Wlad Fy Nhadau (Cymraeg)</h4>
                    <pre>{nationData.lyrics.welsh}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Land of My Fathers (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Ysgrifennwyd:</strong> 1856 gan Evan a James James</p>
                    <p><strong>Cymeradwywyd:</strong> 1905 ar ôl gêm rygbi</p>
                    <p><strong>Stadiwm:</strong> Principality Stadium (75,000 sedd)</p>
                    <p><strong>Rygbi Tradition:</strong> First anthem sung at sporting event</p>
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
                    <h4>🏉 Principality Stadium Atmosphere</h4>
                    <p>The closed roof of the Principality Stadium creates incredible acoustics, 
                    making the Welsh anthem one of the most powerful and moving experiences in world sport. 
                    Often followed by 'Bread of Heaven' sung by 75,000 voices.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Anthem Swyddogol {nationData.rugby.teamName} - Y Ddraig Goch a'r Principality Stadium</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🏴󠁧󠁢󠁷󠁬󠁳󠁿 WALES RUGBY - 28X SIX NATIONS CHAMPIONS & PRINCIPALITY ROAR! 🏆
      </div>
    </div>
  );
};

export default WalesAnthem;