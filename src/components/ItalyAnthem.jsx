import React, { useState } from 'react';
import './ItalyAnthem.css';
import NavBar from './NavBar';

const ItalyAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(135); // 2:15 in seconds
  const [activeTab, setActiveTab] = useState('italian');

  const nationData = {
    name: "Italy",
    officialName: "Italian Republic",
    code: "it",
    
    anthem: {
      title: "Il Canto degli Italiani",
      originalTitle: "Il Canto degli Italiani",
      yearAdopted: 1946,
      composers: ["Michele Novaro"],
      lyricsBy: "Goffredo Mameli",
      languages: ["Italian"],
      duration: "2:15",
      note: "Also known as 'Inno di Mameli' or 'Fratelli d'Italia'"
    },
    
    rugby: {
      teamName: "Azzurri",
      nickname: "The Azzurri",
      colors: ["#008C45", "#FFFFFF", "#CD212A"], // Green, White, Red
      worldCupWins: 0,
      captain: "Michele Lamaro",
      coach: "Gonzalo Quesada",
      homeStadium: "Stadio Olimpico, Rome",
      famousPlayers: ["Sergio Parisse", "Diego Domínguez", "Martin Castrogiovanni", "Alessandro Troncon", "Mirco Bergamasco"]
    },
    
    lyrics: {
      italian: `Fratelli d'Italia,
l'Italia s'è desta,
dell'elmo di Scipio
s'è cinta la testa.
Dov'è la vittoria?
Le porga la chioma,
ché schiava di Roma
Iddio la creò.

Stringiamci a coorte,
siam pronti alla morte.
Siam pronti alla morte,
l'Italia chiamò.
Stringiamci a coorte,
siam pronti alla morte.
Siam pronti alla morte,
l'Italia chiamò!`,
      
      english: `Brothers of Italy,
Italy has awoken,
With Scipio's helmet
binding her head.
Where is Victory?
Let her bow down,
For God created her
Slave of Rome.

Let us join in a cohort,
We are ready to die.
We are ready to die,
Italy has called.
Let us join in a cohort,
We are ready to die.
We are ready to die,
Italy has called!`
    },
    
    facts: [
      "Also known as 'Inno di Mameli' after its lyricist Goffredo Mameli.",
      "Written in 1847 during the Italian unification movement (Risorgimento).",
      "Adopted as national anthem in 1946 after Italy became a republic.",
      "Italy joined the Six Nations Championship in 2000, expanding from Five Nations.",
      "The team is nicknamed 'Azzurri' (The Blues) after the royal blue of the House of Savoy.",
      "Sergio Parisse is considered Italy's greatest rugby player, with 142 caps.",
      "Italy's rugby colors are blue, but the national flag colors are green, white, and red."
    ],
    
    history: "Il Canto degli Italiani was written in 1847 by young poet Goffredo Mameli during the Italian unification movement (Risorgimento). Michele Novaro composed the music shortly after. The anthem became popular during the revolutions of 1848 and was unofficially used for decades before being officially adopted as the national anthem in 1946 when Italy became a republic. Italian rugby has grown significantly since joining the Six Nations in 2000. While often considered underdogs, the Azzurri have produced moments of brilliance and developed world-class players, most notably the legendary Sergio Parisse."
  };

  const italyLogo = () => {
    try {
      return require('../Assets/images/solidlogos/italysl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Italy_national_rugby_union_team_logo.svg/300px-Italy_national_rugby_union_team_logo.svg.png";
    }
  };

  const italyFlag = () => {
    try {
      return require('../Assets/images/flags/italy.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/it.png";
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
    <div className="nation-anthem-page italy">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 ITALY NATIONAL ANTHEM - AZZURRI PASSION! 🏉🇮🇹
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#008C45' }}>
          <div className="header-left">
            <img src={italyLogo()} alt="Italy Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Italy National Anthem</h1>
            <p className="anthem-subtitle">Azzurri Official Anthem - Il Canto degli Italiani</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={italyFlag()} alt="Italy Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Ascolta l'Inno</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pausa' : '▶️ Riproduci'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Ferma</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 Rugby Italiano</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#008C45' }} title="Verde" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="Bianco" />
                  <div className="color-box" style={{ backgroundColor: '#CD212A' }} title="Rosso" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Pool stage)</p>
                  <p><strong>Capitano:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Allenatore:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Stadio:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Six Nations:</strong> Joined in 2000 (expanded from Five Nations)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Giocatori Leggendari:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'italian' ? 'active' : ''}`} onClick={() => handleTabClick('italian')}>🇮🇹 Italiano</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 Storia</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Fatti</button>
            </div>

            <div className="tab-content">
              {activeTab === 'italian' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Il Canto degli Italiani (Italiano)</h4>
                    <pre>{nationData.lyrics.italian}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>The Song of the Italians (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Scritto:</strong> 1847 da Goffredo Mameli</p>
                    <p><strong>Musica:</strong> 1847 da Michele Novaro</p>
                    <p><strong>Adottato:</strong> 1946 (dopo la Repubblica)</p>
                    <p><strong>Rugby Milestone:</strong> Entrato nel Sei Nazioni nel 2000</p>
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
                    <h4>🏉 Sergio Parisse - Il Capitano</h4>
                    <p>Sergio Parisse is considered Italy's greatest rugby player, earning 142 caps from 
                    2002 to 2019. The Argentine-born number 8 became the symbol of Italian rugby, known 
                    for his skill, leadership, and longevity at the highest level.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Inno Ufficiale degli {nationData.rugby.teamName} - La Passione del Rugby Italiano</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🇮🇹 AZZURRI - SIX NATIONS MEMBERS & STADIO OLIMPICO PASSION! 🏉
      </div>
    </div>
  );
};

export default ItalyAnthem;