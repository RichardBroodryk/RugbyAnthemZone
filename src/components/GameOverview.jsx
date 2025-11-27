import React, { useState, useEffect } from 'react';
import './GameOverview.css';

const GameOverview = ({ 
  game, 
  userStatus, 
  onNavigateBack, 
  onNavigateToAnthem, 
  onNavigateToMerchandise,
  onNavigateToStats,
  onNavigateToPPV,
  onNavigateToAudio,
  onNavigateToFantasy,
  onNavigateToPodcasts,
  onNavigateToStadium // ✅ ADDED THIS PROP
}) => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock team squads data - EXPANDED to include more teams
  const teamSquads = {
    "New Zealand": {
      startingXV: [
        { number: 1, name: "Joe Moody", position: "Prop" },
        { number: 2, name: "Codie Taylor", position: "Hooker" },
        { number: 3, name: "Nepo Laulala", position: "Prop" },
        { number: 4, name: "Brodie Retallick", position: "Lock" },
        { number: 5, name: "Samuel Whitelock", position: "Lock" },
        { number: 6, name: "Akira Ioane", position: "Flanker" },
        { number: 7, name: "Sam Cane (c)", position: "Flanker" },
        { number: 8, name: "Ardie Savea", position: "Number 8" },
        { number: 9, name: "Aaron Smith", position: "Scrum-half" },
        { number: 10, name: "Beauden Barrett", position: "Fly-half" },
        { number: 11, name: "Rieko Ioane", position: "Wing" },
        { number: 12, name: "Jordie Barrett", position: "Centre" },
        { number: 13, name: "Anton Lienert-Brown", position: "Centre" },
        { number: 14, name: "Will Jordan", position: "Wing" },
        { number: 15, name: "Damian McKenzie", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Samisoni Taukei'aho", position: "Hooker" },
        { number: 17, name: "George Bower", position: "Prop" },
        { number: 18, name: "Tyrel Lomax", position: "Prop" },
        { number: 19, name: "Tupou Vaa'i", position: "Lock" },
        { number: 20, name: "Hoskins Sotutu", position: "Back-row" },
        { number: 21, name: "TJ Perenara", position: "Scrum-half" },
        { number: 22, name: "Richie Mo'unga", position: "Fly-half" },
        { number: 23, name: "David Havili", position: "Utility Back" }
      ]
    },
    "South Africa": {
      startingXV: [
        { number: 1, name: "Ox Nché", position: "Prop" },
        { number: 2, name: "Bongi Mbonambi", position: "Hooker" },
        { number: 3, name: "Frans Malherbe", position: "Prop" },
        { number: 4, name: "Eben Etzebeth", position: "Lock" },
        { number: 5, name: "Lood de Jager", position: "Lock" },
        { number: 6, name: "Siya Kolisi (c)", position: "Flanker" },
        { number: 7, name: "Pieter-Steph du Toit", position: "Flanker" },
        { number: 8, name: "Duane Vermeulen", position: "Number 8" },
        { number: 9, name: "Faf de Klerk", position: "Scrum-half" },
        { number: 10, name: "Handré Pollard", position: "Fly-half" },
        { number: 11, name: "Makazole Mapimpi", position: "Wing" },
        { number: 12, name: "Damian de Allende", position: "Centre" },
        { number: 13, name: "Lukhanyo Am", position: "Centre" },
        { number: 14, name: "Cheslin Kolbe", position: "Wing" },
        { number: 15, name: "Willie le Roux", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Malcolm Marx", position: "Hooker" },
        { number: 17, name: "Steven Kitshoff", position: "Prop" },
        { number: 18, name: "Vincent Koch", position: "Prop" },
        { number: 19, name: "Franco Mostert", position: "Lock" },
        { number: 20, name: "Kwagga Smith", position: "Back-row" },
        { number: 21, name: "Jaden Hendrikse", position: "Scrum-half" },
        { number: 22, name: "Elton Jantjies", position: "Fly-half" },
        { number: 23, name: "Jesse Kriel", position: "Utility Back" }
      ]
    },
    "England": {
      startingXV: [
        { number: 1, name: "Ellis Genge", position: "Prop" },
        { number: 2, name: "Jamie George", position: "Hooker" },
        { number: 3, name: "Kyle Sinckler", position: "Prop" },
        { number: 4, name: "Maro Itoje", position: "Lock" },
        { number: 5, name: "Jonny Hill", position: "Lock" },
        { number: 6, name: "Courtney Lawes", position: "Flanker" },
        { number: 7, name: "Tom Curry", position: "Flanker" },
        { number: 8, name: "Billy Vunipola", position: "Number 8" },
        { number: 9, name: "Ben Youngs", position: "Scrum-half" },
        { number: 10, name: "Owen Farrell (c)", position: "Fly-half" },
        { number: 11, name: "Jonny May", position: "Wing" },
        { number: 12, name: "Manu Tuilagi", position: "Centre" },
        { number: 13, name: "Henry Slade", position: "Centre" },
        { number: 14, name: "Anthony Watson", position: "Wing" },
        { number: 15, name: "Freddie Steward", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Luke Cowan-Dickie", position: "Hooker" },
        { number: 17, name: "Mako Vunipola", position: "Prop" },
        { number: 18, name: "Will Stuart", position: "Prop" },
        { number: 19, name: "Charlie Ewels", position: "Lock" },
        { number: 20, name: "Sam Underhill", position: "Flanker" },
        { number: 21, name: "Harry Randall", position: "Scrum-half" },
        { number: 22, name: "George Ford", position: "Fly-half" },
        { number: 23, name: "Max Malins", position: "Utility Back" }
      ]
    },
    "Ireland": {
      startingXV: [
        { number: 1, name: "Andrew Porter", position: "Prop" },
        { number: 2, name: "Rónan Kelleher", position: "Hooker" },
        { number: 3, name: "Tadhg Furlong", position: "Prop" },
        { number: 4, name: "Tadhg Beirne", position: "Lock" },
        { number: 5, name: "James Ryan", position: "Lock" },
        { number: 6, name: "Peter O'Mahony", position: "Flanker" },
        { number: 7, name: "Josh van der Flier", position: "Flanker" },
        { number: 8, name: "Caelan Doris", position: "Number 8" },
        { number: 9, name: "Jamison Gibson-Park", position: "Scrum-half" },
        { number: 10, name: "Johnny Sexton (c)", position: "Fly-half" },
        { number: 11, name: "James Lowe", position: "Wing" },
        { number: 12, name: "Bundee Aki", position: "Centre" },
        { number: 13, name: "Garry Ringrose", position: "Centre" },
        { number: 14, name: "Mack Hansen", position: "Wing" },
        { number: 15, name: "Hugo Keenan", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Dan Sheehan", position: "Hooker" },
        { number: 17, name: "Cian Healy", position: "Prop" },
        { number: 18, name: "Finlay Bealham", position: "Prop" },
        { number: 19, name: "Kieran Treadwell", position: "Lock" },
        { number: 20, name: "Jack Conan", position: "Back-row" },
        { number: 21, name: "Conor Murray", position: "Scrum-half" },
        { number: 22, name: "Joey Carbery", position: "Fly-half" },
        { number: 23, name: "Robbie Henshaw", position: "Centre" }
      ]
    },
    // Add more teams as needed
    "Australia": {
      startingXV: [
        { number: 1, name: "James Slipper", position: "Prop" },
        { number: 2, name: "Folau Fainga'a", position: "Hooker" },
        { number: 3, name: "Allan Alaalatoa", position: "Prop" },
        { number: 4, name: "Izack Rodda", position: "Lock" },
        { number: 5, name: "Matt Philip", position: "Lock" },
        { number: 6, name: "Rob Leota", position: "Flanker" },
        { number: 7, name: "Michael Hooper (c)", position: "Flanker" },
        { number: 8, name: "Rob Valetini", position: "Number 8" },
        { number: 9, name: "Nic White", position: "Scrum-half" },
        { number: 10, name: "Quade Cooper", position: "Fly-half" },
        { number: 11, name: "Marika Koroibete", position: "Wing" },
        { number: 12, name: "Samu Kerevi", position: "Centre" },
        { number: 13, name: "Len Ikitau", position: "Centre" },
        { number: 14, name: "Andrew Kellaway", position: "Wing" },
        { number: 15, name: "Tom Banks", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Dave Porecki", position: "Hooker" },
        { number: 17, name: "Angus Bell", position: "Prop" },
        { number: 18, name: "Taniela Tupou", position: "Prop" },
        { number: 19, name: "Darcy Swain", position: "Lock" },
        { number: 20, name: "Pete Samu", position: "Back-row" },
        { number: 21, name: "Tate McDermott", position: "Scrum-half" },
        { number: 22, name: "Reece Hodge", position: "Utility Back" },
        { number: 23, name: "Jordan Petaia", position: "Utility Back" }
      ]
    },
    "France": {
      startingXV: [
        { number: 1, name: "Cyril Baille", position: "Prop" },
        { number: 2, name: "Julien Marchand", position: "Hooker" },
        { number: 3, name: "Uini Atonio", position: "Prop" },
        { number: 4, name: "Cameron Woki", position: "Lock" },
        { number: 5, name: "Paul Willemse", position: "Lock" },
        { number: 6, name: "Anthony Jelonch", position: "Flanker" },
        { number: 7, name: "Charles Ollivon", position: "Flanker" },
        { number: 8, name: "Grégory Alldritt", position: "Number 8" },
        { number: 9, name: "Antoine Dupont (c)", position: "Scrum-half" },
        { number: 10, name: "Romain Ntamack", position: "Fly-half" },
        { number: 11, name: "Gabriel Villière", position: "Wing" },
        { number: 12, name: "Jonathan Danty", position: "Centre" },
        { number: 13, name: "Gael Fickou", position: "Centre" },
        { number: 14, name: "Damian Penaud", position: "Wing" },
        { number: 15, name: "Melvyn Jaminet", position: "Fullback" }
      ],
      reserves: [
        { number: 16, name: "Peato Mauvaka", position: "Hooker" },
        { number: 17, name: "Jean-Baptiste Gros", position: "Prop" },
        { number: 18, name: "Demba Bamba", position: "Prop" },
        { number: 19, name: "Romain Taofifenua", position: "Lock" },
        { number: 20, name: "Dylan Cretin", position: "Flanker" },
        { number: 21, name: "Maxime Lucu", position: "Scrum-half" },
        { number: 22, name: "Thomas Ramos", position: "Utility Back" },
        { number: 23, name: "Yoram Moefana", position: "Centre" }
      ]
    }
  };

  useEffect(() => {
    // Use the passed game prop or fallback data
    if (game) {
      console.log("Game prop received:", game); // Debug log
      setGameData(game);
      setLoading(false);
    } else {
      // Enhanced fallback data with proper team names
      setTimeout(() => {
        const fallbackGame = {
          tournament: "Rugby Championship",
          round: "Round 3",
          home: { 
            name: "New Zealand", 
            flag: "🇳🇿", 
            score: 28 
          },
          away: { 
            name: "South Africa", 
            flag: "🇿🇦", 
            score: 24 
          },
          venue: "Eden Park, Auckland",
          date: "2024-08-15", 
          time: "19:35", 
          status: "Completed"
        };
        console.log("Using fallback game:", fallbackGame); // Debug log
        setGameData(fallbackGame);
        setLoading(false);
      }, 500);
    }
  }, [game]);

  const handleAnthemClick = (teamName) => {
    if (onNavigateToAnthem) {
      onNavigateToAnthem(teamName);
    }
  };

  const handleMerchandiseClick = () => {
    if (onNavigateToMerchandise) {
      onNavigateToMerchandise();
    }
  };

  const handleUpgradeClick = () => {
    alert('⭐ Upgrade to Premium to access official team merchandise stores!\n\nPremium features include:\n• Official merchandise store access\n• Exclusive content\n• Ad-free experience\n• And much more!');
  };

  const renderSquad = (teamName) => {
    console.log("Looking for squad for:", teamName); // Debug log
    const squad = teamSquads[teamName];
    console.log("Found squad:", squad); // Debug log
    
    if (!squad) {
      return (
        <div className="team-squads">
          <div className="squad-section">
            <h4 className="squad-title">Team Squad</h4>
            <div className="squad-grid">
              <div className="player-card">
                <div className="player-name">Squad data not available</div>
                <div className="player-position">Check back later</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="team-squads">
        <div className="squad-section">
          <h4 className="squad-title">Starting XV</h4>
          <div className="squad-grid">
            {squad.startingXV.map((player, index) => (
              <div key={index} className="player-card">
                <div className="player-number">#{player.number}</div>
                <div className="player-name">{player.name}</div>
                <div className="player-position">{player.position}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="squad-section">
          <h4 className="squad-title">Reserves</h4>
          <div className="squad-grid">
            {squad.reserves.map((player, index) => (
              <div key={index} className="player-card">
                <div className="player-number">#{player.number}</div>
                <div className="player-name">{player.name}</div>
                <div className="player-position">{player.position}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="game-overview">
        <div className="loading">Loading game details...</div>
      </div>
    );
  }

  if (!gameData) {
    return (
      <div className="game-overview">
        <div className="error">Game not found</div>
      </div>
    );
  }

  // FIXED: Proper team name extraction with fallbacks
  const homeTeamName = gameData.home?.name || gameData.homeTeam?.name || "Home Team";
  const awayTeamName = gameData.away?.name || gameData.awayTeam?.name || "Away Team";
  
  console.log("Rendering with teams:", { homeTeamName, awayTeamName }); // Debug log

  return (
    <div className="game-overview">
      {/* Top Ad Banner - Matching FlightsPage */}
      <div className="top-ad-banner">
        🏉 RUGBY CHAMPIONSHIP 2024 - WATCH LIVE ON PPV! 📺
      </div>

      {/* FIXED: Navigation with Stadium Button Added */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        {/* ✅ ADDED STADIUM BUTTON */}
        <button className="nav-btn" onClick={onNavigateToStadium}>🏟️ Stadium</button>
      </nav>

      <div className="game-content">
        {/* Game Header */}
        <div className="game-header">
          <h1 className="game-title">Game Overview</h1>
          <div className="game-meta">
            <span className="game-meta-item">📅 {gameData.date} at {gameData.time}</span>
            <span className="game-meta-item">🏟️ {gameData.venue}</span>
            <span className={`game-meta-item status ${(gameData.status || 'completed').toLowerCase()}`}>
              {gameData.status || 'Completed'}
            </span>
          </div>
        </div>

        {/* Teams Container - NOW WITH VISIBLE TEAM NAMES AND SQUADS */}
        <div className="teams-container">
          {/* Home Team */}
          <div className="team-section home-team">
            <div className="team-header">
              <div className="team-flag">{gameData.home?.flag || gameData.homeTeam?.flag || "🏴"}</div>
              <h2 className="team-name">{homeTeamName}</h2>
              <div className="team-score">{gameData.home?.score || gameData.homeTeam?.score || 0}</div>
            </div>
            
            <div className="team-features">
              <button 
                className="anthem-btn" 
                onClick={() => handleAnthemClick(homeTeamName)}
              >
                🎵 National Anthem
              </button>
            </div>

            {/* Team Squad - NOW VISIBLE */}
            {renderSquad(homeTeamName)}
          </div>

          {/* VS Section */}
          <div className="vs-section">
            <div className="vs-circle">VS</div>
          </div>

          {/* Away Team */}
          <div className="team-section away-team">
            <div className="team-header">
              <div className="team-flag">{gameData.away?.flag || gameData.awayTeam?.flag || "🏴"}</div>
              <h2 className="team-name">{awayTeamName}</h2>
              <div className="team-score">{gameData.away?.score || gameData.awayTeam?.score || 0}</div>
            </div>
            
            <div className="team-features">
              <button 
                className="anthem-btn" 
                onClick={() => handleAnthemClick(awayTeamName)}
              >
                🎵 National Anthem
              </button>
            </div>

            {/* Team Squad - NOW VISIBLE */}
            {renderSquad(awayTeamName)}
          </div>
        </div>

        {/* Game Features - Including Merchandise */}
        <div className="game-features">
          <h3>Game Features & Services</h3>
          <div className="features-grid">
            <button className="feature-card" onClick={() => onNavigateToStats && onNavigateToStats()}>
              <span className="icon">📊</span>
              <span className="label">Game Statistics</span>
              <span className="description">Live stats & analysis</span>
            </button>
            
            <button className="feature-card" onClick={() => onNavigateToPPV && onNavigateToPPV()}>
              <span className="icon">📺</span>
              <span className="label">Watch Live</span>
              <span className="description">PPV streaming</span>
            </button>
            
            <button className="feature-card" onClick={() => onNavigateToAudio && onNavigateToAudio()}>
              <span className="icon">🔊</span>
              <span className="label">Live Audio</span>
              <span className="description">Radio commentary</span>
            </button>
            
            <button className="feature-card" onClick={() => onNavigateToFantasy && onNavigateToFantasy()}>
              <span className="icon">🏅</span>
              <span className="label">Fantasy League</span>
              <span className="description">Build your team</span>
            </button>
            
            <button className="feature-card" onClick={() => onNavigateToPodcasts && onNavigateToPodcasts()}>
              <span className="icon">🎧</span>
              <span className="label">Podcasts</span>
              <span className="description">Expert analysis</span>
            </button>
            
            {/* Merchandise Feature Card */}
            {userStatus === 'premium' ? (
              <button className="feature-card" onClick={handleMerchandiseClick}>
                <span className="icon">🛍️</span>
                <span className="label">Team Merchandise</span>
                <span className="description">Official stores</span>
              </button>
            ) : (
              <button className="feature-card upgrade-btn" onClick={handleUpgradeClick}>
                <span className="icon">⭐</span>
                <span className="label">Premium Merchandise</span>
                <span className="description">Upgrade to access</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner - Matching FlightsPage */}
      <div className="bottom-ad-banner">
        🎟️ GET TICKETS FOR UPCOMING MATCHES - LIMITED AVAILABILITY! ⚡
      </div>
    </div>
  );
};

export default GameOverview;