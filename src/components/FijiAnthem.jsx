import React, { useState } from 'react';
import './FijiAnthem.css';
import NavBar from './NavBar';

const FijiAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(72); // 1:12 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "Fiji",
    officialName: "Republic of Fiji",
    code: "fj",
    
    anthem: {
      title: "Meda Dau Doka (God Bless Fiji)",
      originalTitle: "Meda Dau Doka",
      yearAdopted: 1970,
      composers: ["Charles Austin Miles (adapted)"],
      languages: ["English", "Fijian"],
      duration: "1:12",
      note: "Adopted upon independence from Britain in 1970"
    },
    
    rugby: {
      teamName: "Flying Fijians",
      nickname: "The Flying Fijians",
      colors: ["#FFFFFF", "#00247D"], // White, Navy Blue
      worldCupWins: 0,
      captain: "Waisea Nayacalevu",
      coach: "Simon Raiwalui",
      homeStadium: "ANZ Stadium, Suva",
      famousPlayers: ["Waisale Serevi", "Rupeni Caucaunibuca", "Viliame Mata", "Semi Radradra", "Levani Botia"]
    },
    
    lyrics: {
      fijian: `Meda dau doka ka vinakata na vanua
E ra sa dau tiko kina na savasava
Rawa tu na gauna ni sautu na veilomani
Biu na i tovo tawa savasava

Me bula ga ko Viti
Ka me toro ga ki liu
Me ra turaga vinaka ko ira na i liuliu
Me ra liutaki na tamata
E na veika vinaka
Me oti kina na i tovo ca`,
      
      english: `Blessing grant, oh God of nations, on the isles of Fiji
As we stand united under noble banner blue
And we honour and defend the cause of freedom ever
Onward march together, God bless Fiji

For Fiji, ever Fiji, let our voices ring with pride
For Fiji, ever Fiji, her name hail far and wide
A land of freedom, hope and glory to endure whatever befall
May God bless Fiji forever more!`
    },
    
    facts: [
      "Adopted in 1970 when Fiji gained independence from Britain.",
      "Has verses in both English and Fijian, reflecting Fiji's multicultural society.",
      "Fiji is renowned for producing some of the world's most exciting rugby sevens players.",
      "Won rugby sevens gold at the 2016 and 2020 Olympic Games.",
      "Known for their fast, free-flowing rugby style with incredible offloading skills.",
      "Fijian players are famous for their athleticism, speed, and natural rugby instincts.",
      "The national rugby team is nicknamed 'The Flying Fijians' for their exciting playing style."
    ],
    
    history: "God Bless Fiji was adopted as the national anthem when Fiji gained independence from Britain in 1970. The melody is adapted from a hymn by Charles Austin Miles. The anthem reflects Fiji's Christian heritage and multicultural society, with verses in both English and Fijian. In rugby, Fiji has made an impact far beyond its small population size, producing world-class players known for their natural talent, athleticism, and exciting style of play. The Flying Fijians are particularly dominant in rugby sevens, winning back-to-back Olympic gold medals in 2016 and 2020."
  };

  const fijiLogo = () => {
    try {
      return require('../Assets/images/solidlogos/fijisl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Fiji_national_rugby_union_team_logo.svg/300px-Fiji_national_rugby_union_team_logo.svg.png";
    }
  };

  const fijiFlag = () => {
    try {
      return require('../Assets/images/flags/fiji.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/fj.png";
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
    <div className="nation-anthem-page fiji">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 FIJI NATIONAL ANTHEM - FLYING FIJIANS MAGIC! 🏉🇫🇯
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#00247D' }}>
          <div className="header-left">
            <img src={fijiLogo()} alt="Fiji Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Fiji National Anthem</h1>
            <p className="anthem-subtitle">Flying Fijians Official Anthem - God Bless Fiji</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={fijiFlag()} alt="Fiji Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Vakasokumuni na Anthem</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Vakasokumuni'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Bera</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 Flying Fijians Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                  <div className="color-box" style={{ backgroundColor: '#00247D' }} title="Navy Blue" />
                  <div className="color-box" style={{ backgroundColor: '#D21034' }} title="Red" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Quarter-finals 1987, 2007)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Olympic Gold:</strong> 2 (2016 Rio, 2020 Tokyo - Rugby Sevens)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Legendary Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'fijian' ? 'active' : ''}`} onClick={() => handleTabClick('fijian')}>🇫🇯 Vosa Vakaviti</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 Itukutuku</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Veika e Kila</button>
            </div>

            <div className="tab-content">
              {activeTab === 'fijian' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Meda Dau Doka (Vosa Vakaviti)</h4>
                    <pre>{nationData.lyrics.fijian}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>God Bless Fiji (English Version)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Independence:</strong> 10 October 1970</p>
                    <p><strong>Anthem Adopted:</strong> 1970</p>
                    <p><strong>First World Cup:</strong> 1987 (Quarter-finals)</p>
                    <p><strong>Olympic Gold:</strong> 2016, 2020 (Rugby Sevens)</p>
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
                    <h4>🏉 Fiji Sevens Dominance</h4>
                    <p>Fiji has revolutionized rugby sevens with their breathtaking skills, offloading game, 
                    and infectious joy of playing. With back-to-back Olympic gold medals, they are considered 
                    the greatest sevens team in history.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Anthem ni {nationData.rugby.teamName} - Na Kaukauwa kei na Marau ni Rugby Vakaviti</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🇫🇯 FLYING FIJIANS - 2X OLYMPIC GOLD MEDALISTS & RUGBY MAGICIANS! 🥇🥇
      </div>
    </div>
  );
};

export default FijiAnthem;