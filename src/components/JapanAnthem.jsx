import React, { useState } from 'react';
import './JapanAnthem.css';
import NavBar from './NavBar';

const JapanAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(55); // 0:55 in seconds
  const [activeTab, setActiveTab] = useState('japanese');

  const nationData = {
    name: "Japan",
    officialName: "Japan",
    code: "jp",
    
    anthem: {
      title: "Kimigayo",
      originalTitle: "君が代",
      yearAdopted: 1999,
      composers: ["Yoshiisa Oku", "Akimori Hayashi", "Franz Eckert (arranged)"],
      lyricsBy: "Traditional Waka poem",
      languages: ["Japanese"],
      duration: "0:55",
      note: "World's oldest lyrics and shortest national anthem"
    },
    
    rugby: {
      teamName: "Brave Blossoms",
      nickname: "The Cherry Blossoms",
      colors: ["#BC002D", "#FFFFFF"], // Red, White
      worldCupWins: 0,
      captain: "Michael Leitch",
      coach: "Jamie Joseph",
      homeStadium: "National Stadium, Tokyo",
      famousPlayers: ["Michael Leitch", "Ayumu Goromaru", "Kotaro Matsushima", "Kazuaki Takahashi", "Shota Horie"]
    },
    
    lyrics: {
      japanese: `君が代は
千代に八千代に
さざれ石の
巌となりて
苔の生すまで`,
      
      english: `May your reign
Continue for a thousand, eight thousand generations,
Until the pebbles
Grow into boulders
Lush with moss.`
    },
    
    facts: [
      "Has the oldest lyrics of any national anthem, dating from the Heian period (794-1185).",
      "World's shortest national anthem with only 32 characters in Japanese.",
      "Officially adopted in 1999 but had been used as de facto anthem since 1880.",
      "Japan made Rugby World Cup history in 2015 by beating South Africa (the 'Brighton Miracle').",
      "Hosted the 2019 Rugby World Cup, the first Asian nation to do so.",
      "Known for their disciplined, fast-paced rugby and incredible fitness levels.",
      "The team is nicknamed 'Brave Blossoms' after Japan's cherry blossoms."
    ],
    
    history: "Kimigayo's lyrics are from a Waka poem written in the Heian period (794-1185), making it the world's oldest national anthem lyrics. The current melody was composed in 1880 and it was used as the de facto national anthem until officially adopted in 1999. The anthem is short, solemn, and reflects Japanese cultural values. Japanese rugby has grown dramatically, highlighted by their stunning victory over South Africa in the 2015 Rugby World Cup (the 'Brighton Miracle') and successfully hosting the 2019 tournament. The Brave Blossoms are known for their speed, discipline, and never-say-die attitude."
  };

  const japanLogo = () => {
    try {
      return require('../Assets/images/solidlogos/japansl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Japan_national_rugby_union_team_logo.svg/300px-Japan_national_rugby_union_team_logo.svg.png";
    }
  };

  const japanFlag = () => {
    try {
      return require('../Assets/images/flags/japan.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/jp.png";
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
    <div className="nation-anthem-page japan">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 JAPAN NATIONAL ANTHEM - BRAVE BLOSSOMS PRIDE! 🏉🇯🇵
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#BC002D' }}>
          <div className="header-left">
            <img src={japanLogo()} alt="Japan Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Japan National Anthem</h1>
            <p className="anthem-subtitle">Brave Blossoms Official Anthem - Kimigayo</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={japanFlag()} alt="Japan Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 国歌を聴く</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ 一時停止' : '▶️ 再生'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ 停止</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 日本ラグビー</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#BC002D' }} title="赤" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="白" />
                  <div className="color-box" style={{ backgroundColor: '#000000' }} title="黒" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Quarter-finals 2019)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>World Cup Host:</strong> 2019 (First Asian host)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Legendary Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'japanese' ? 'active' : ''}`} onClick={() => handleTabClick('japanese')}>🇯🇵 日本語</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 歴史</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 事実</button>
            </div>

            <div className="tab-content">
              {activeTab === 'japanese' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>君が代 (日本語)</h4>
                    <pre>{nationData.lyrics.japanese}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Kimigayo (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Lyrics Written:</strong> Heian period (794-1185)</p>
                    <p><strong>Melody Composed:</strong> 1880</p>
                    <p><strong>Official Adoption:</strong> 1999</p>
                    <p><strong>Rugby Milestone:</strong> 2015 Brighton Miracle vs South Africa</p>
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
                    <h4>🏉 The Brighton Miracle</h4>
                    <p>On September 19, 2015, Japan achieved arguably the greatest upset in rugby history, 
                    beating two-time world champions South Africa 34-32 at the Rugby World Cup. This match, 
                    known as the 'Brighton Miracle', transformed Japanese rugby and inspired a nation.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>{nationData.rugby.teamName} 公式国歌 - 日本ラグビーの誇り</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🇯🇵 BRAVE BLOSSOMS - 2019 WORLD CUP HOSTS & BRIGHTON MIRACLE! 🏉🌸
      </div>
    </div>
  );
};

export default JapanAnthem;