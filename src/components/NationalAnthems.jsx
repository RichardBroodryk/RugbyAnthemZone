import React, { useState } from 'react';
import './NationalAnthems.css';

const NationalAnthems = ({ onNavigateBack }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const countries = [
    { 
      name: "South Africa", 
      initials: "SA",
      flag: "🇿🇦", 
      anthem: "National Anthem of South Africa",
      lyrics: `Nkosi sikelel' iAfrika
Maluphakanyisw' uphondo lwayo,
Yizwa imithandazo yethu,
Nkosi sikelela, thina lusapho lwayo.

Morena boloka setjhaba sa heso,
O fedise dintwa le matshwenyeho,
O se boloke, O se boloke setjhaba sa heso,
Setjhaba sa South Afrika - South Afrika.

Uit die blou van onse hemel,
Uit die diepte van ons see,
Oor ons ewige gebergtes,
Waar die kranse antwoord gee.

Sounds the call to come together,
And united we shall stand,
Let us live and strive for freedom,
In South Africa our land.`,
      facts: "Unique anthem combining five different languages including Xhosa, Zulu, Sesotho, Afrikaans, and English. Adopted in 1997 after the end of apartheid. It's one of the few national anthems in the world that uses different languages in the same anthem."
    },
    { 
      name: "New Zealand", 
      initials: "NZ",
      flag: "🇳🇿", 
      anthem: "God Defend New Zealand",
      lyrics: `God of nations at Thy feet,
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
God defend New Zealand.

Let our love for Thee increase,
May Thy blessings never cease,
Give us plenty, give us peace,
God defend our free land.
From dishonour and from shame,
Guard our country's spotless name,
Crown her with immortal fame,
God defend New Zealand.

May our mountains ever be
Freedom's ramparts on the sea,
Make us faithful unto Thee,
God defend our free land.
Guide her in the nations' van,
Preaching love and truth to man,
Working out Thy glorious plan,
God defend New Zealand.`,
      facts: "Adopted as national anthem in 1977. Has both English and Māori versions. It's one of the two official national anthems of New Zealand, along with 'God Save the King'. The Māori version is not a direct translation but has its own unique meaning."
    },
    { 
      name: "Australia", 
      initials: "AUS",
      flag: "🇦🇺", 
      anthem: "Advance Australia Fair",
      lyrics: `Australians all let us rejoice,
For we are one and free;
We've golden soil and wealth for toil;
Our home is girt by sea;
Our land abounds in nature's gifts
Of beauty rich and rare;
In history's page, let every stage
Advance Australia Fair.
In joyful strains then let us sing,
Advance Australia Fair.

Beneath our radiant Southern Cross
We'll toil with hearts and hands;
To make this Commonwealth of ours
Renowned of all the lands;
For those who've come across the seas
We've boundless plains to share;
With courage let us all combine
To Advance Australia Fair.
In joyful strains then let us sing,
Advance Australia Fair.`,
      facts: "Replaced 'God Save the Queen' as the national anthem in 1984 after a public vote. Originally composed by Peter Dodds McCormick in 1878. The song was first performed in 1878 at the St Andrew's Day concert of the Highland Society in Sydney."
    },
    { 
      name: "England", 
      initials: "ENG",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 
      anthem: "God Save the King",
      lyrics: `God save our gracious King!
Long live our noble King!
God save the King!
Send him victorious,
Happy and glorious,
Long to reign over us,
God save the King.

O Lord our God arise,
Scatter his enemies,
And make them fall;
Confound their politics,
Frustrate their knavish tricks,
On Thee our hopes we fix,
God save us all.

Thy choicest gifts in store
On him be pleased to pour;
Long may he reign;
May he defend our laws,
And ever give us cause,
To sing with heart and voice,
God save the King.`,
      facts: "One of the oldest national anthems in the world, first performed in 1745. It's the royal anthem of the United Kingdom and many Commonwealth realms. The melody has been used in many other countries, including the United States ('My Country, 'Tis of Thee')."
    },
    { 
      name: "Ireland", 
      initials: "IRE",
      flag: "🇮🇪", 
      anthem: "Amhrán na bhFiann (The Soldier's Song)",
      lyrics: `Sinne Fianna Fáil,
Atá faoi gheall ag Éirinn,
Buíon dár slua
Thar toinn do ráinig chugainn,
Faoi mhóid bheith saor,
Seantír ár sinsear feasta,
Ní fhágfar faoin tíorán ná faoin tráill.

Anocht a théam sa bhearna bhaoil,
Le gean ar Ghaeil chun báis nó saoil,
Le gunna scréach faoi lámhach na bpiléar,
Seo libh canaídh amhrán na bhfiann.`,
      facts: "Irish language anthem adopted in 1926. Often preceded by 'Ireland's Call' in sports events, especially when players from both Northern Ireland and Republic of Ireland are represented. The anthem was originally written in English in 1907 and later translated to Irish."
    },
    { 
      name: "France", 
      initials: "FRA",
      flag: "🇫🇷", 
      anthem: "La Marseillaise",
      lyrics: `Allons enfants de la Patrie,
Le jour de gloire est arrivé !
Contre nous de la tyrannie
L'étendard sanglant est levé !
Entendez-vous dans les campagnes
Mugir ces féroces soldats ?
Ils viennent jusque dans nos bras
Égorger nos fils, nos compagnes !

Aux armes, citoyens !
Formez vos bataillons !
Marchons, marchons !
Qu'un sang impur
Abreuve nos sillons !

Que veut cette horde d'esclaves,
De traîtres, de rois conjurés ?
Pour qui ces ignobles entraves,
Ces fers dès longtemps préparés ?
Français, pour nous, ah ! quel outrage !
Quels transports il doit exciter !
C'est nous qu'on ose méditer
De rendre à l'antique esclavage !`,
      facts: "Written during French Revolution in 1792 by Claude Joseph Rouget de Lisle. Known for its revolutionary spirit and powerful, sometimes violent lyrics. It was banned during Napoleon's reign and the Restoration but reinstated after the 1830 Revolution."
    },
    { 
      name: "Wales", 
      initials: "WAL",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", 
      anthem: "Hen Wlad Fy Nhadau (Land of My Fathers)",
      lyrics: `Mae hen wlad fy nhadau yn annwyl i mi,
Gwlad beirdd a chantorion, enwogion o fri;
Ei gwrol ryfelwyr, gwladgarwyr tra mâd,
Dros ryddid collasant eu gwaed.

Gwlad, gwlad, pleidiol wyf i'm gwlad,
Tra môr yn fur i'r bur hoff bau,
O bydded i'r hen iaith barhau.

Hen Gymru fynyddig, paradwys y bardd,
Pob dyffryn, pob clogwyn, i'm golwg sydd hardd;
Trwy deimlad gwladgarol, mor swynol yw si
Ei nentydd, afonydd, i mi.`,
      facts: "First sung at a rugby match in 1905 when Wales beat New Zealand. Welsh language anthem written by Evan James and composed by his son James James in 1856. It's considered the first national anthem to be adopted by a nation without being officially proclaimed."
    },
    { 
      name: "Scotland", 
      initials: "SCO",
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
Tae think again.

The Hills are bare now,
And Autumn leaves
Lie thick and still,
O'er land that is lost now,
Which those so dearly held,
That stood against him,
Proud Edward's Army,
And sent him homeward,
Tae think again.

Those days are past now,
And in the past
They must remain,
But we can still rise now,
And be the nation again,
That stood against him,
Proud Edward's Army,
And sent him homeward,
Tae think again.`,
      facts: "Unofficial anthem adopted by Scottish rugby team and other sports teams. Written by Roy Williamson of The Corries in the mid-1960s. It commemorates the victory of the Scots over Edward II's army at the Battle of Bannockburn in 1314."
    },
    { 
      name: "Argentina", 
      initials: "ARG",
      flag: "🇦🇷", 
      anthem: "Himno Nacional Argentino",
      lyrics: `Oíd, mortales, el grito sagrado:
"¡Libertad, libertad, libertad!"
Oíd el ruido de rotas cadenas,
ved en trono a la noble igualdad.

Ya su trono dignísimo abrieron
las Provincias Unidas del Sud
y los libres del mundo responden:
"Al gran pueblo argentino, ¡salud!
Al gran pueblo argentino, ¡salud!"
Y los libres del mundo responden:
"Al gran pueblo argentino, ¡salud!"

Sean eternos los laureles
que supimos conseguir,
que supimos conseguir.
Coronados de gloria vivamos...
¡o juremos con gloria morir!,
¡o juremos con gloria morir!,
¡o juremos con gloria morir!`,
      facts: "One of the longest national anthems in the world when performed in full. Adopted in 1813 during the Argentine War of Independence. The original version was quite aggressive against Spain, but was later softened in 1900."
    },
    { 
      name: "Fiji", 
      initials: "FIJ",
      flag: "🇫🇯", 
      anthem: "Meda Dau Doka (God Bless Fiji)",
      lyrics: `Meda dau doka ka vinakata na vanua
E ra sa dau tiko kina na savasava
Rawa tu na gauna ni sautu na veilomani
Biu na i tovo tawa savasava

Me da tui vinaka tikoga me da kalouga
Me da duavata ni noda vanua
Me da sa qai biuta vakadua
Ni da sa na tawa savasava

Me da sa qai biuta vakadua
Ni da sa na tawa savasava

Na lesu ni noda masu
Me da sa cegu rawada
Noda na veivutuni
E da sa doka tu na vanua
E da sa doka tu na vanua`,
      facts: "Adopted upon independence in 1970. Has English and Fijian versions. The anthem reflects Fiji's multicultural society and Christian heritage. It's one of the few national anthems that specifically mentions God in the title."
    },
    { 
      name: "Japan", 
      initials: "JPN",
      flag: "🇯🇵", 
      anthem: "Kimigayo",
      lyrics: `Kimi ga yo wa
Chiyo ni
Yachiyo ni
Sazare ishi no
Iwao to narite
Koke no musu made`,
      facts: "World's shortest national anthem with only 32 characters in the Japanese version. Lyrics from 9th century poem in the Kokin Wakashū anthology. The current melody was composed in 1880, but the anthem wasn't officially adopted until 1999."
    },
    { 
      name: "Italy", 
      initials: "ITA",
      flag: "🇮🇹", 
      anthem: "Il Canto degli Italiani",
      lyrics: `Fratelli d'Italia,
L'Italia s'è desta,
Dell'elmo di Scipio
S'è cinta la testa.
Dov'è la Vittoria?
Le porga la chioma,
Ché schiava di Roma
Iddio la creò.

Stringiamci a coorte,
Siam pronti alla morte.
Siam pronti alla morte,
L'Italia chiamò.
Stringiamci a coorte,
Siam pronti alla morte.
Siam pronti alla morte,
L'Italia chiamò!`,
      facts: "Also known as 'Inno di Mameli'. Adopted in 1946 after Italy became a republic. Written in 1847 by Goffredo Mameli, a 20-year-old student, and set to music by Michele Novaro. It became popular during the Risorgimento."
    }
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsPlaying(false);
    setCurrentTime(0);
    // Simulate audio loading
    setTimeout(() => {
      setDuration(150); // 2.5 minutes simulated duration
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
      {/* Top Ad Banner - Matching Other Pages */}
      <div className="top-ad-banner">
        🎵 Rugby Anthem Zone - Learn Every National Anthem! 🌍
      </div>

      {/* Standardized Navigation - Matching HomePage */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      <div className="anthems-content">
        <div className="anthems-header">
          <h1 className="anthems-title">🎵 National Anthems</h1>
          <p className="anthems-subtitle">Experience the passion and pride of rugby nations through their national anthems</p>
        </div>

        <div className="anthems-container">
          {/* Countries Grid with Smaller Buttons */}
          <div className="countries-section">
            <h2 className="section-title">Rugby Nations</h2>
            <div className="countries-grid">
              {countries.map((country, index) => (
                <button
                  key={index}
                  className={`country-btn ${selectedCountry?.name === country.name ? 'selected' : ''}`}
                  onClick={() => handleCountryClick(country)}
                >
                  <span className="country-initials">{country.initials}</span>
                  <span className="country-flag">{country.flag}</span>
                  <span className="country-name">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Player Section with Improved Layout */}
          {selectedCountry && (
            <div className="player-section">
              <div className="player-card">
                <div className="track-header">
                  <span className="flag-large">{selectedCountry.flag}</span>
                  <div className="track-info">
                    <div className="country-name-large">{selectedCountry.name}</div>
                    <div className="anthem-title">{selectedCountry.anthem}</div>
                  </div>
                </div>

                {/* Audio Controls - Moved to Top */}
                <div className="audio-controls">
                  <div className="player-buttons">
                    <button className="control-btn play-pause" onClick={handlePlayPause}>
                      {isPlaying ? '⏸️ Pause Anthem' : '▶️ Play Anthem'}
                    </button>
                    <button className="control-btn stop" onClick={handleStop}>
                      ⏹️ Stop
                    </button>
                  </div>
                  
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
                </div>

                {/* Full Lyrics Section */}
                <div className="lyrics-section">
                  <h3>Complete Anthem Lyrics</h3>
                  <div className="lyrics-text">
                    {selectedCountry.lyrics}
                  </div>
                </div>

                {/* Fun Facts - Moved Below Lyrics */}
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
            <p>• Click on any country button to view their complete national anthem</p>
            <p>• Read the full lyrics and learn the words</p>
            <p>• Use the player controls to simulate audio playback</p>
            <p>• Discover interesting historical facts about each anthem</p>
            <p>• Perfect for learning anthems before international matches!</p>
          </div>
        )}
      </div>

      {/* Bottom Ad Banner - Matching Other Pages */}
      <div className="bottom-ad-banner">
        🏉 Rugby World Cup 2025 - Know Every Anthem! 🎶
      </div>
    </div>
  );
};

export default NationalAnthems;