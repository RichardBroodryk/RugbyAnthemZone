import React, { useState } from 'react';
import './NationalAnthems.css';

const NationalAnthems = ({ onNavigateBack }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const countries = [
    { 
      name: "New Zealand", 
      flag: "🇳🇿", 
      anthem: "God Defend New Zealand",
      lyrics: `God of nations at Thy feet,
In the bonds of love we meet,
Hear our voices, we entreat,
God defend our free land.
Guard Pacific's triple star
From the shafts of strife and war,
Make her praises heard afar,
God defend New Zealand.`,
      facts: "Adopted as national anthem in 1977. Has both English and Māori versions."
    },
    { 
      name: "South Africa", 
      flag: "🇿🇦", 
      anthem: "National Anthem of South Africa",
      lyrics: `Nkosi sikelel' iAfrika
Maluphakanyisw' uphondo lwayo,
Yizwa imithandazo yethu,
Nkosi sikelela, thina lusapho lwayo.
Morena boloka setjhaba sa heso,
O fedise dintwa le matshwenyeho,
O se boloke, O se boloke setjhaba sa heso,
Setjhaba sa South Afrika - South Afrika.`,
      facts: "Unique anthem combining five different languages. Adopted in 1997."
    },
    { 
      name: "Australia", 
      flag: "🇦🇺", 
      anthem: "Advance Australia Fair",
      lyrics: `Australians all let us rejoice,
For we are one and free;
We've golden soil and wealth for toil;
Our home is girt by sea;
Our land abounds in nature's gifts
Of beauty rich and rare;
In history's page, let every stage
Advance Australia Fair.`,
      facts: "Replaced 'God Save the Queen' in 1984. Originally composed in 1878."
    },
    { 
      name: "England", 
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 
      anthem: "God Save the King",
      lyrics: `God save our gracious King!
Long live our noble King!
God save the King!
Send him victorious,
Happy and glorious,
Long to reign over us,
God save the King.`,
      facts: "One of the oldest national anthems, first performed in 1745."
    },
    { 
      name: "Ireland", 
      flag: "🇮🇪", 
      anthem: "Amhrán na bhFiann (The Soldier's Song)",
      lyrics: `Sinne Fianna Fáil,
Atá faoi gheall ag Éirinn,
Buíon dár slua
Thar toinn do ráinig chugainn,
Faoi mhóid bheith saor,
Seantír ár sinsear feasta,
Ní fhágfar faoin tíorán ná faoin tráill.`,
      facts: "Irish language anthem adopted in 1926. Often preceded by 'Ireland's Call' in sports."
    },
    { 
      name: "France", 
      flag: "🇫🇷", 
      anthem: "La Marseillaise",
      lyrics: `Allons enfants de la Patrie,
Le jour de gloire est arrivé !
Contre nous de la tyrannie
L'étendard sanglant est levé !
Entendez-vous dans les campagnes
Mugir ces féroces soldats ?
Ils viennent jusque dans nos bras
Égorger nos fils, nos compagnes !`,
      facts: "Written during French Revolution in 1792. Known for its revolutionary spirit."
    },
    { 
      name: "Wales", 
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", 
      anthem: "Hen Wlad Fy Nhadau (Land of My Fathers)",
      lyrics: `Mae hen wlad fy nhadau yn annwyl i mi,
Gwlad beirdd a chantorion, enwogion o fri;
Ei gwrol ryfelwyr, gwladgarwyr tra mâd,
Dros ryddid collasant eu gwaed.
Gwlad, gwlad, pleidiol wyf i'm gwlad,
Tra môr yn fur i'r bur hoff bau,
O bydded i'r hen iaith barhau.`,
      facts: "First sung at a rugby match in 1905. Welsh language anthem."
    },
    { 
      name: "Scotland", 
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", 
      anthem: "Flower of Scotland",
      lyrics: `O Flower of Scotland,
When will we see
Your like again,
That fought and died for,
Your wee bit Hill and Glen,
And stood against him,
Proud Edward's Army,
And sent him homeward,
Tae think again.`,
      facts: "Unofficial anthem adopted by Scottish rugby team. Written in 1960s."
    },
    { 
      name: "Argentina", 
      flag: "🇦🇷", 
      anthem: "Himno Nacional Argentino",
      lyrics: `Oíd, mortales, el grito sagrado:
"¡Libertad, libertad, libertad!"
Oíd el ruido de rotas cadenas,
ved en trono a la noble igualdad.`,
      facts: "One of the longest national anthems. Adopted in 1813."
    },
    { 
      name: "Fiji", 
      flag: "🇫🇯", 
      anthem: "Meda Dau Doka (God Bless Fiji)",
      lyrics: `Meda dau doka ka vinakata na vanua
E ra sa dau tiko kina na savasava
Rawa tu na gauna ni sautu na veilomani
Biu na i tovo tawa savasava`,
      facts: "Adopted upon independence in 1970. Has English and Fijian versions."
    },
    { 
      name: "Japan", 
      flag: "🇯🇵", 
      anthem: "Kimigayo",
      lyrics: `Kimi ga yo wa
Chiyo ni
Yachiyo ni
Sazare ishi no
Iwao to narite
Koke no musu made`,
      facts: "World's shortest national anthem. Lyrics from 9th century poem."
    },
    { 
      name: "Italy", 
      flag: "🇮🇹", 
      anthem: "Il Canto degli Italiani",
      lyrics: `Fratelli d'Italia,
L'Italia s'è desta,
Dell'elmo di Scipio
S'è cinta la testa.`,
      facts: "Also known as 'Inno di Mameli'. Adopted in 1946."
    }
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsPlaying(false);
    setCurrentTime(0);
    // Simulate audio loading
    setTimeout(() => {
      setDuration(120); // 2 minutes simulated duration
    }, 500);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.value);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="anthems-page">
      <div className="anthems-header">
        <button className="back-btn" onClick={onNavigateBack}>
          ← Back to Game
        </button>
        <h1>🎵 National Anthems</h1>
        <p>Click on any country to explore their national anthem</p>
      </div>

      <div className="anthems-container">
        {/* Countries Grid */}
        <div className="countries-grid">
          {countries.map((country, index) => (
            <div
              key={index}
              className={`country-card ${selectedCountry?.name === country.name ? 'selected' : ''}`}
              onClick={() => handleCountryClick(country)}
            >
              <div className="country-flag">{country.flag}</div>
              <div className="country-name">{country.name}</div>
              <div className="anthem-name">{country.anthem}</div>
            </div>
          ))}
        </div>

        {/* Player Section */}
        {selectedCountry && (
          <div className="player-section">
            <div className="player-card">
              <h2>Now Exploring</h2>
              <div className="current-track">
                <span className="flag-large">{selectedCountry.flag}</span>
                <div className="track-info">
                  <div className="country-name-large">{selectedCountry.name}</div>
                  <div className="anthem-title">{selectedCountry.anthem}</div>
                </div>
              </div>

              {/* Audio Controls */}
              <div className="audio-controls">
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleTimeUpdate}
                  className="progress-bar"
                />
                
                <div className="player-buttons">
                  <button className="control-btn play-pause" onClick={handlePlayPause}>
                    {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                  </button>
                  <button className="control-btn stop" onClick={handleStop}>
                    ⏹️ Stop
                  </button>
                </div>
              </div>

              {/* Lyrics Section */}
              <div className="lyrics-section">
                <h3>Lyrics</h3>
                <div className="lyrics-text">
                  {selectedCountry.lyrics}
                </div>
              </div>

              {/* Fun Facts */}
              <div className="facts-section">
                <h3>🎵 Did You Know?</h3>
                <p>{selectedCountry.facts}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!selectedCountry && (
        <div className="instructions">
          <h3>How to Explore National Anthems:</h3>
          <p>• Click on any country card to view their national anthem</p>
          <p>• Read the lyrics and learn about the anthem's history</p>
          <p>• Use the player controls to simulate audio playback</p>
          <p>• Discover interesting facts about each anthem</p>
        </div>
      )}
    </div>
  );
};

export default NationalAnthems;