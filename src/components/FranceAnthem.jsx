import React, { useState } from 'react';
import './FranceAnthem.css';
import NavBar from './NavBar';

const FranceAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(110); // 1:50 in seconds
  const [activeTab, setActiveTab] = useState('french');

  const nationData = {
    name: "France",
    officialName: "French Republic",
    code: "fr",
    
    anthem: {
      title: "La Marseillaise",
      originalTitle: "La Marseillaise",
      yearAdopted: 1795,
      composers: ["Claude Joseph Rouget de Lisle"],
      languages: ["French"],
      duration: "1:50",
      note: "Revolutionary anthem with powerful, martial melody"
    },
    
    rugby: {
      teamName: "Les Bleus",
      nickname: "Les Tricolores",
      colors: ["#002395", "#FFFFFF", "#ED2939"], // Blue, White, Red
      worldCupWins: 0,
      captain: "Antoine Dupont",
      coach: "Fabien Galthié",
      homeStadium: "Stade de France, Paris",
      famousPlayers: ["Serge Blanco", "Thierry Dusautoir", "Frédéric Michalak", "Philippe Sella", "Dimitri Yachvili"]
    },
    
    lyrics: {
      french: `Allons enfants de la Patrie,
Le jour de gloire est arrivé !
Contre nous de la tyrannie
L'étendard sanglant est levé. (bis)
Entendez-vous dans les campagnes
Mugir ces féroces soldats ?
Ils viennent jusque dans nos bras
Égorger nos fils, nos compagnes !

Aux armes, citoyens !
Formez vos bataillons !
Marchons, marchons !
Qu'un sang impur
Abreuve nos sillons !`,
      
      english: `Arise, children of the Fatherland,
The day of glory has arrived!
Against us tyranny's
Bloody banner is raised. (repeat)
Do you hear, in the countryside,
The roar of those ferocious soldiers?
They're coming right into your arms
To cut the throats of your sons, your women!

To arms, citizens!
Form your battalions!
Let's march, let's march!
Let an impure blood
Water our furrows!`
    },
    
    facts: [
      "Originally titled 'Chant de guerre pour l'Armée du Rhin' (War Song for the Army of the Rhine).",
      "Composed in one night (April 25, 1792) by Claude Joseph Rouget de Lisle.",
      "Named 'La Marseillaise' after it was sung by volunteers from Marseille marching to Paris.",
      "Banned during the Napoleonic Empire and restored as national anthem in 1879.",
      "Known for its powerful, revolutionary spirit and martial rhythm.",
      "France has hosted the Rugby World Cup twice (1991, 2007) and will host again in 2023.",
      "French rugby is known for 'le beau jeu' (the beautiful game) with flair and attacking rugby."
    ],
    
    history: "La Marseillaise was composed during the French Revolution by army officer Claude Joseph Rouget de Lisle in Strasbourg. It was originally a revolutionary war song that became the rallying cry of the French Republic. Its passionate, militant tone reflects the revolutionary spirit of the time. Banned during various periods of French history, it was definitively adopted as the national anthem in 1879. In rugby, it's famously sung with great passion by French fans, creating an intimidating atmosphere for visiting teams."
  };

  const franceLogo = () => {
    try {
      return require('../Assets/images/solidlogos/francesl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/France_national_rugby_union_team_logo.svg/300px-France_national_rugby_union_team_logo.svg.png";
    }
  };

  const franceFlag = () => {
    try {
      return require('../Assets/images/flags/france.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/fr.png";
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
    <div className="nation-anthem-page france">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 FRANCE NATIONAL ANTHEM - LES BLEUS PASSION! 🏉🇫🇷
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#002395' }}>
          <div className="header-left">
            <img src={franceLogo()} alt="France Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">France National Anthem</h1>
            <p className="anthem-subtitle">Les Bleus Official Anthem - La Marseillaise</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={franceFlag()} alt="France Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Écouter l'Hymne</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pause' : '▶️ Jouer'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Arrêter</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 Le Rugby Français</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#002395' }} title="Bleu" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="Blanc" />
                  <div className="color-box" style={{ backgroundColor: '#ED2939' }} title="Rouge" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Runners-up 1987, 1999, 2011)</p>
                  <p><strong>Capitaine:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Entraîneur:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Stade:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Six Nations Titles:</strong> 18 (including 10 Grand Slams)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Joueurs Légendaires:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'french' ? 'active' : ''}`} onClick={() => handleTabClick('french')}>🇫🇷 Français</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 Histoire</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Faits</button>
            </div>

            <div className="tab-content">
              {activeTab === 'french' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>La Marseillaise (Premier Couplet)</h4>
                    <pre>{nationData.lyrics.french}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>The Marseillaise (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Composé:</strong> 25 avril 1792 par Rouget de Lisle</p>
                    <p><strong>Devenu Hymne:</strong> 1795</p>
                    <p><strong>Restauré:</strong> 1879</p>
                    <p><strong>Rugby Connection:</strong> Sung with great passion at Stade de France</p>
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
                    <h4>🏉 French Rugby Spirit</h4>
                    <p>Known for 'le beau jeu' (the beautiful game), French rugby is celebrated for its flair, 
                    creativity, and passionate support. La Marseillaise creates one of the most intimidating 
                    atmospheres in world rugby at the Stade de France.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Hymne Officiel des {nationData.rugby.teamName} - La Passion du Rugby Français</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🇫🇷 LES BLEUS - LE BEAU JEU & STADE DE FRANCE ATMOSPHÈRE! 🏉
      </div>
    </div>
  );
};

export default FranceAnthem;