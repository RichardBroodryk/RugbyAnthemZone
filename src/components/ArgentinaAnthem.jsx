import React, { useState } from 'react';
import './ArgentinaAnthem.css';
import NavBar from './NavBar';

const ArgentinaAnthem = ({ onNavigateBack, onNavigateToHome }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(220); // 3:40 in seconds
  const [activeTab, setActiveTab] = useState('lyrics');

  const nationData = {
    name: "Argentina",
    officialName: "Argentine Republic",
    code: "ar",
    
    anthem: {
      title: "Himno Nacional Argentino",
      originalTitle: "Himno Nacional Argentino",
      yearAdopted: 1813,
      composers: ["Blas Parera"],
      lyricsBy: "Vicente López y Planes",
      languages: ["Spanish"],
      duration: "3:40",
      note: "One of the longest national anthems in the world"
    },
    
    rugby: {
      teamName: "Los Pumas",
      nickname: "The Pumas",
      colors: ["#75AADB", "#FFFFFF"], // Light Blue, White
      worldCupWins: 0,
      captain: "Julian Montoya",
      coach: "Michael Cheika",
      homeStadium: "Estadio José Amalfitani, Buenos Aires",
      famousPlayers: ["Agustín Pichot", "Juan Martín Hernández", "Felipe Contepomi", "Nicolás Sánchez", "Juan Imhoff"]
    },
    
    lyrics: {
      spanish: `Oíd, mortales, el grito sagrado:
"¡Libertad, libertad, libertad!"
Oíd el ruido de rotas cadenas,
ved en trono a la noble igualdad.

Ya su trono dignísimo abrieron
las Provincias Unidas del Sud
y los libres del mundo responden:
"¡Al gran pueblo argentino, salud!
¡Al gran pueblo argentino, salud!"
Y los libres del mundo responden:
"¡Al gran pueblo argentino, salud!"

Sean eternos los laureles
que supimos conseguir,
que supimos conseguir.
Coronados de gloria vivamos...
¡o juremos con gloria morir!
¡o juremos con gloria morir!`,
      
      english: `Hear, mortals, the sacred cry:
"Freedom, freedom, freedom!"
Hear the noise of broken chains,
see noble equality enthroned.

Their most worthy throne has now opened
the United Provinces of the South.
And the free people of the world reply:
"To the great Argentine people, hail!"
To the great Argentine people, hail!
And the free people of the world reply:
"To the great Argentine people, hail!"

May the laurels be eternal
that we knew how to win,
that we knew how to win.
Let us live crowned in glory...
or swear to die gloriously!
Or swear to die gloriously!`
    },
    
    facts: [
      "One of the longest national anthems in the world at 3 minutes 40 seconds.",
      "Originally had nine verses but only the first and last are usually sung today.",
      "Adopted on May 11, 1813, during the Argentine War of Independence.",
      "Known for its dramatic, operatic style and patriotic fervor.",
      "Argentina is the only South American team in the Rugby Championship.",
      "The Pumas reached the Rugby World Cup semi-finals in 2007 and 2015.",
      "Argentinian rugby is known for its passion, forward power, and creative backline play."
    ],
    
    history: "The Argentine National Anthem was adopted on May 11, 1813, three years after the May Revolution that began Argentina's struggle for independence from Spain. The lyrics were written by Vicente López y Planes and the music composed by Blas Parera. Originally with nine verses celebrating independence and condemning Spanish rule, today only the first and last verses are typically performed. The anthem reflects the revolutionary spirit of the time and Argentina's commitment to freedom. In rugby, it's passionately sung by Los Pumas fans and players, symbolizing Argentine pride and fighting spirit."
  };

  const argentinaLogo = () => {
    try {
      return require('../Assets/images/solidlogos/argentinasl.png');
    } catch (e) {
      return "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Argentina_national_rugby_union_team_logo.svg/300px-Argentina_national_rugby_union_team_logo.svg.png";
    }
  };

  const argentinaFlag = () => {
    try {
      return require('../Assets/images/flags/argentina.jpg');
    } catch (e) {
      return "https://flagcdn.com/w640/ar.png";
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
    <div className="nation-anthem-page argentina">
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showProfileButton={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
      />

      <div className="top-ad-banner">
        🎵 ARGENTINA NATIONAL ANTHEM - LOS PUMAS PASSION! 🏉🇦🇷
      </div>

      <div className="anthem-content">
        <div className="anthem-header" style={{ background: '#75AADB' }}>
          <div className="header-left">
            <img src={argentinaLogo()} alt="Argentina Rugby Logo" className="springbok-logo" />
          </div>
          
          <div className="header-center">
            <h1 className="anthem-page-title">Argentina National Anthem</h1>
            <p className="anthem-subtitle">Los Pumas Official Anthem - Himno Nacional Argentino</p>
          </div>
          
          <div className="header-right">
            <div className="flag-container">
              <img src={argentinaFlag()} alt="Argentina Flag" className="flag-image" />
            </div>
          </div>
        </div>

        <div className="anthem-grid">
          <div className="left-column">
            <div className="player-card">
              <h3>🎧 Escuchar el Himno</h3>
              <div className="player-controls">
                <button className={`play-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
                  {isPlaying ? '⏸️ Pausa' : '▶️ Reproducir'}
                </button>
                <button className="stop-btn" onClick={handleStop}>⏹️ Detener</button>
                
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <input type="range" min="0" max={duration} value={currentTime} onChange={handleTimeUpdate} className="time-slider" />
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              <div className="haka-info">
                <h4>⚡ Rugby Championship Member</h4>
                <p>Only South American team in the Rugby Championship with New Zealand, Australia, and South Africa</p>
              </div>
            </div>

            <div className="rugby-card">
              <h3>🏉 Los Pumas Rugby</h3>
              <div className="rugby-details">
                <div className="team-colors">
                  <div className="color-box" style={{ backgroundColor: '#75AADB' }} title="Celeste" />
                  <div className="color-box" style={{ backgroundColor: '#FFFFFF', border: '2px solid #333' }} title="Blanco" />
                  <div className="color-box" style={{ backgroundColor: '#F6B40E' }} title="Amarillo" />
                </div>
                <div className="team-info">
                  <p><strong>World Cup Wins:</strong> {nationData.rugby.worldCupWins} (Best: Semi-finals 2007, 2015)</p>
                  <p><strong>Capitán:</strong> {nationData.rugby.captain}</p>
                  <p><strong>Entrenador:</strong> {nationData.rugby.coach}</p>
                  <p><strong>Estadio:</strong> {nationData.rugby.homeStadium}</p>
                  <p><strong>Rugby Championship:</strong> First win in 2020 (vs New Zealand)</p>
                </div>
              </div>
              <div className="famous-players">
                <p><strong>Jugadores Legendarios:</strong> {nationData.rugby.famousPlayers.join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="content-tabs">
              <button className={`tab-btn ${activeTab === 'lyrics' ? 'active' : ''}`} onClick={() => handleTabClick('lyrics')}>🇦🇷 Español</button>
              <button className={`tab-btn ${activeTab === 'english' ? 'active' : ''}`} onClick={() => handleTabClick('english')}>🇬🇧 English</button>
              <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => handleTabClick('history')}>📖 Historia</button>
              <button className={`tab-btn ${activeTab === 'facts' ? 'active' : ''}`} onClick={() => handleTabClick('facts')}>💡 Datos</button>
            </div>

            <div className="tab-content">
              {activeTab === 'lyrics' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Himno Nacional Argentino (Español)</h4>
                    <pre>{nationData.lyrics.spanish}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'english' && (
                <div className="lyrics-content">
                  <div className="lyrics-section">
                    <h4>Argentine National Anthem (English Translation)</h4>
                    <pre>{nationData.lyrics.english}</pre>
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div className="history-content">
                  <p>{nationData.history}</p>
                  <div className="key-dates">
                    <p><strong>Adoptado:</strong> 11 de mayo de 1813</p>
                    <p><strong>Letra:</strong> Vicente López y Planes</p>
                    <p><strong>Música:</strong> Blas Parera</p>
                    <p><strong>Rugby Connection:</strong> Passionately sung before Pumas matches</p>
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
                    <h4>🏉 Los Pumas Legacy</h4>
                    <p>Named after the jaguar (not the puma) when a journalist mistakenly identified 
                    the emblem on their jerseys in 1965. The name stuck and became a symbol of 
                    Argentine rugby's growing power in world rugby.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="page-footer">
          <p>Himno Oficial de {nationData.rugby.teamName} - Pasión del Rugby Argentino</p>
        </div>
      </div>

      <div className="bottom-ad-banner">
        🇦🇷 LOS PUMAS - RUGBY CHAMPIONSHIP MEMBERS & WORLD CUP SEMI-FINALISTS! 🏉
      </div>
    </div>
  );
};

export default ArgentinaAnthem;