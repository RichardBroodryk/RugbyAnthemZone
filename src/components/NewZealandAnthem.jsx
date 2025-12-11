import React, { useState } from 'react';
import './NewZealandAnthem.css';
import NavBar from './NavBar';

const NewZealandAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(120); // 2:00 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "New Zealand",
    officialName: "New Zealand",
    code: "nz",
    
    anthem: {
      title: "God Defend New Zealand",
      originalTitle: "God Defend New Zealand (Aotearoa)",
      yearAdopted: 1977,
      composers: ["John Joseph Woods"],
      lyricsBy: "Thomas Bracken",
      languages: ["English", "Māori"],
      duration: "2:00",
      note: "Has equal status with 'God Save the King' as national anthem"
    },
    
    rugby: {
      teamName: "All Blacks",
      nickname: "The All Blacks",
      colors: ["#000000", "#FFFFFF"], // Black, White
      worldCupWins: 3,
      captain: "Sam Cane",
      coach: "Scott Robertson",
      homeStadium: "Eden Park, Auckland",
      famousPlayers: ["Richie McCaw", "Dan Carter", "Jonah Lomu", "Beauden Barrett", "Sam Whitelock"],
      haka: "Ka Mate (Traditional war dance performed before matches)"
    },
    
    lyrics: {
      english: `God of nations at Thy feet,
In the bonds of love we meet,
Hear our voices, we entreat,
God defend our free land.
Guard Pacific's triple star
From the shafts of strife and war,
Make her praises heard afar,
God defend New Zealand.

Men of every creed and race,
Gather here before Thy face,
Asking Thee to bless this place,
God defend our free land.
From dissension, envy, hate,
And corruption guard our state,
Make our country good and great,
God defend New Zealand.

Peace, not war, shall be our boast,
But, should foes assail our coast,
Make us then a mighty host,
God defend our free land.
Lord of battles in Thy might,
Put our enemies to flight,
Let our cause be just and right,
God defend New Zealand.`,
      
      maori: `E Ihowā Atua,
O ngā iwi mātou rā
Āta whakarangona;
Me aroha noa
Kia hua ko te pai;
Kia tau tō atawhai;
Manaakitia mai
Aotearoa

Ōna mano tāngata
Kiri whero, kiri mā,
Iwi Māori, Pākehā,
Rūpeke katoa,
Nei ka tono ko ngā hē
Māu e whakaahu kē,
Kia ora mārire
Aotearoa

Tōna mana kia tū!
Tōna kaha kia ū;
Tōna rongo hei pakū
Ki te ao katoa
Aua rawa ngā whawhai
Ngā tutū a tata mai;
Kia tupu nui ai
Aotearoa

Waiho tona takiwā
Ko te ao mārama;
Kia whiti tōna rā
Taiāwhio noa.
Ko te hae me te ngangau
Meinga kia kore kau;
Waiho i te rongo mau
Aotearoa`
    },
    
    facts: [
      "One of only two national anthems in the world with official status in two languages (English and Māori).",
      "Originally written as a poem in 1870 by Thomas Bracken, a Irish-born New Zealander.",
      "The music was composed in 1876 by John Joseph Woods in just one sitting.",
      "First performed in 1876 at the Queen's Theatre in Dunedin.",
      "Gained popularity during the 1905 'Originals' rugby tour of the British Isles.",
      "Officially adopted as national anthem in 1977, sharing equal status with 'God Save the King'.",
      "Often sung in Māori at international sporting events, especially before All Blacks matches."
    ],
    
    history: "God Defend New Zealand began as a poem written in the 1870s by Thomas Bracken, who offered a prize for the best musical setting. The music was composed by John Joseph Woods, a schoolteacher from Lawrence, Otago. The anthem gained popularity through the late 19th and early 20th centuries, particularly associated with New Zealand's sporting successes. It was officially adopted as one of New Zealand's two national anthems in 1977, with equal status to 'God Save the King'. The Māori version was translated in 1878 by Thomas Henry Smith and has become particularly significant in New Zealand's cultural identity."
  };

  // CORRECTED IMAGE PATHS:
  const allBlacksLogo = () => {
    try {
      return require('../Assets/images/solidlogos/new-zealandsl.png');
    } catch (e) {
      console.log("All Blacks logo not found, using fallback");
      return "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/All_Blacks_logo.svg/300px-All_Blacks_logo.svg.png";
    }
  };

  const newZealandFlag = () => {
    try {
      return require('../Assets/images/flags/new-zealand.jpg');
    } catch (e) {
      console.log("New Zealand flag image not found, using fallback");
      return "https://flagcdn.com/w640/nz.png";
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
    <div className="nation-anthem-page new-zealand">
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

      <div className="top-ad-banner">
        🎵 NEW ZEALAND NATIONAL ANTHEM - ALL BLACKS LEGEND! 🏉⚫
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#000000' }}>
          <div className="header-left">
            <img 
              src={allBlacksLogo()}
              alt="All Blacks Logo"
              className="springbok-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/All_Blacks_logo.svg/300px-All_Blacks_logo.svg.png";
              }}
            />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">New Zealand National Anthem</h1>
            <p className="anthem-subtitle">All Blacks Official Anthem with Ka Mate Haka</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img 
                src={newZealandFlag()} 
                alt="New Zealand Flag" 
                className="flag-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://flagcdn.com/w640/nz.png";
                  e.target.style.objectFit = "cover";
                }}
              />
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
              
              <div className="haka-info">
                <h4>⚡ The Ka Mate Haka</h4>
                <p>Traditional Māori war dance performed by the All Blacks before every test match</p>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 All Blacks Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#000000' }} title="All Blacks Black" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                  <div className="color-box" style={{ backgroundColor: '#CC0000' }} title="Fern Red" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (1987, 2011, 2015)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Win Rate:</strong> 77% (Highest in rugby history)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Legendary Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => handleTabClick('lyrics')}>
                📜 English Lyrics
              </button>
              <button className={`tab-btn ${activeTab === 'maori' ? 'active' : ''}`} onClick={() => handleTabClick('maori')}>
                🌿 Māori Version
              </button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>
                📖 History
              </button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>
                💡 Facts
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'lyrics' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>English Version</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'maori' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Māori Version (Aotearoa)</h4>
                    <pre>{nationData.lyrics.maori}</pre>
                    <p className="translation-note">
                      <strong>Translation:</strong> A prayer for God's protection and blessing on New Zealand, 
                      expressing unity among all people regardless of race or creed.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Poem Written:</strong> 1870 by Thomas Bracken</p>
                    <p><strong>Music Composed:</strong> 1876 by John Joseph Woods</p>
                    <p><strong>First Performance:</strong> 1876, Queen's Theatre, Dunedin</p>
                    <p><strong>Official Adoption:</strong> 1977</p>
                    <p><strong>Māori Translation:</strong> 1878 by Thomas Henry Smith</p>
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
                    <h4>🏉 Rugby Connection</h4>
                    <p>The anthem gained widespread popularity during the 1905 "Original All Blacks" tour of Britain, 
                    where it was sung before matches and helped establish New Zealand's rugby identity internationally.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Official {nationData.rugby.teamName} Anthem - Performed before every test match with the Ka Mate Haka</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        ⚫ ALL BLACKS - 3x RUGBY WORLD CUP CHAMPIONS & HIGHEST WIN RATE! 🏆🏆🏆
      </div>
    </div>
  );
};

export default NewZealandAnthem;