import React, { useState } from 'react';
import './IrelandAnthem.css';
import NavBar from './NavBar';

const IrelandAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(68); // 1:08 in seconds
  // FIXED: Set initial active tab to 'gaelic' instead of 'lyrics'
  const [activeTab, setActiveTab] = useState('gaelic');

  const nationData = {
    name: "Ireland",
    officialName: "Republic of Ireland",
    code: "ie",
    
    anthem: {
      title: "Amhrán na bhFiann (The Soldier's Song)",
      originalTitle: "Amhrán na bhFiann",
      yearAdopted: 1926,
      composers: ["Peadar Kearney", "Patrick Heeney"],
      languages: ["Irish Gaelic"],
      duration: "1:08",
      note: "National anthem of the Republic of Ireland"
    },
    
    rugby: {
      teamName: "Ireland Rugby",
      nickname: "The Boys in Green",
      colors: ["#169B62", "#FFFFFF"], // Green, White
      worldCupWins: 0,
      captain: "Johnny Sexton",
      coach: "Andy Farrell",
      homeStadium: "Aviva Stadium, Dublin",
      famousPlayers: ["Brian O'Driscoll", "Johnny Sexton", "Paul O'Connell", "Ronan O'Gara", "Keith Wood"]
    },
    
    lyrics: {
      original: `Sinne Fianna Fáil
Atá faoi gheall ag Éirinn,
Buíon dár slua
Thar toinn do ráinig chughainn,
Faoi mhóid bheith saor
Seantír ár sinsear feasta,
Ní fhágfar faoin tíorán ná faoin tráill.
Anocht a théam sa bhearna baoil,
Le gean ar Ghaeil chun báis nó saoil,
Le gunna-scréach faoi lámhach na bpiléar,
Seo libh canaigí Amhrán na bhFiann.`,
      
      english: `Soldiers are we
Whose lives are pledged to Ireland;
Some have come
From a land beyond the wave.
Sworn to be free,
No more our ancient sire land
Shall shelter the despot or the slave.
Tonight we man the gap of danger
In Erin's cause, come woe or weal;
'Mid cannon's roar and rifles' peal,
We'll chant a soldier's song.`
    },
    
    facts: [
      "Originally written in English in 1907 by Peadar Kearney, then translated to Irish.",
      "First published in 1912 in the newspaper 'Irish Freedom'.",
      "Adopted as the national anthem in 1926, replacing 'God Save Ireland'.",
      "Only the chorus (shown above) is officially used as the national anthem.",
      "Ireland rugby team represents both the Republic of Ireland and Northern Ireland.",
      "The team plays 'Ireland's Call' alongside the national anthem to be inclusive of Northern Irish players.",
      "Ireland has never won the Rugby World Cup but reached the quarter-finals multiple times."
    ],
    
    history: "Amhrán na bhFiann (The Soldier's Song) was written in 1907 by Peadar Kearney and Patrick Heeney during the Irish struggle for independence. It gained popularity among Irish Volunteers and was sung during the 1916 Easter Rising. After Irish independence, it was adopted as the national anthem in 1926. For rugby, which represents the whole island of Ireland, 'Ireland's Call' was composed in 1995 to be inclusive of players from Northern Ireland, and both anthems are played at international matches."
  };

  // UPDATED: Changed from solidlogos/irelandsl.png to iconlogos/ireland-icon-logo.jpg
  const irelandLogo = () => {
    try {
      return require('../Assets/images/iconlogos/ireland-icon-logo.jpg');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Ireland_national_rugby_union_team_logo.svg/300px-Ireland_national_rugby_union_team_logo.svg.png";
    }
  };

  const irelandFlag = () => {
    try {
      return require('../Assets/images/flags/ireland.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/ie.png";
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
    <div className="nation-anthem-page ireland">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 IRELAND NATIONAL ANTHEM - BOYS IN GREEN PRIDE! 🏉☘️
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#169B62' }}>
          <div className="header-left">
            <img src={irelandLogo()} alt="Ireland Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Ireland National Anthem</h1>
            <p className="anthem-subtitle">Ireland Rugby Official Anthems</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={irelandFlag()} alt="Ireland Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Listen to the Anthems</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Play Anthem'}
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
              <h3>🏉 Ireland Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#169B62' }} title="Irish Green" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="White" />
                  <div className="color-box" style={{ backgroundColor: '#FF883E' }} title="Orange" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Quarter-finals)</p>
                  <p><strong>Captain:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Coach:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Home Stadium:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Six Nations Titles:</strong> 15 (including 4 Grand Slams)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Legendary Players:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            {/* FIXED: Content tabs will be fixed by CSS update */}
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'gaelic' ? 'active' : ''}`} onClick={() => handleTabClick('gaelic')}>☘️ Irish Gaelic</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇮🇪 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 History</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Facts</button>
            </div>

            <div className="tab-content">
              {activeTab === 'gaelic' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Amhrán na bhFiann (Irish Gaelic)</h4>
                    <pre>{nationData.lyrics.original}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>The Soldier's Song (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                    <div className="rugby-fact">
                      <h4>🏉 Ireland's Call</h4>
                      <p>At rugby matches, 'Ireland's Call' is also played alongside the national anthem 
                      to represent the whole island of Ireland (including Northern Ireland).</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Written:</strong> 1907 by Peadar Kearney</p>
                    <p><strong>First Published:</strong> 1912 in 'Irish Freedom'</p>
                    <p><strong>Official Adoption:</strong> 1926</p>
                    <p><strong>Rugby Adaptation:</strong> 1995 ('Ireland's Call' composed)</p>
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
          <p>Official {nationData.rugby.teamName} Anthems - Amhrán na bhFiann & Ireland's Call</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        ☘️ IRELAND RUGBY - 6 NATIONS CHAMPIONS & AVIVA STADIUM LEGENDS! 🏆
      </div>
    </div>
  );
};

export default IrelandAnthem;