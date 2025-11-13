import React, { useState, useEffect } from 'react';
import './LiveScoresPage.css';

const LiveScoresPage = ({ onNavigateBack }) => {
  const [liveGames, setLiveGames] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState('all');

  const mockLiveGames = [
    {
      id: 1,
      tournament: "Six Nations",
      status: "LIVE",
      minute: "63'",
      homeTeam: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 17 },
      awayTeam: { name: "Ireland", flag: "🇮🇪", score: 22 },
      venue: "Twickenham Stadium",
      events: [
        { minute: "12'", type: "try", team: "home", player: "M. Smith" },
        { minute: "45'", type: "penalty", team: "away", player: "J. Sexton" }
      ]
    },
    {
      id: 2,
      tournament: "Rugby Championship", 
      status: "LIVE",
      minute: "35'",
      homeTeam: { name: "New Zealand", flag: "🇳🇿", score: 14 },
      awayTeam: { name: "South Africa", flag: "🇿🇦", score: 10 },
      venue: "Eden Park",
      events: [
        { minute: "8'", type: "try", team: "home", player: "W. Jordan" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveGames(prev => prev.map(game => ({
        ...game,
        minute: `${Math.min(parseInt(game.minute) + 1, 80)}'`
      })));
    }, 30000);

    setLiveGames(mockLiveGames);
    return () => clearInterval(interval);
  }, []);

  const LiveGameCard = ({ game }) => (
    <div className="live-game-card">
      <div className="game-header">
        <span className="tournament">{game.tournament}</span>
        <div className="live-indicator">
          <span className="pulse"></span>
          LIVE {game.minute}
        </div>
      </div>
      
      <div className="teams-score">
        <div className="team">
          <span className="flag">{game.homeTeam.flag}</span>
          <span className="name">{game.homeTeam.name}</span>
          <span className="score">{game.homeTeam.score}</span>
        </div>
        
        <div className="vs">VS</div>
        
        <div className="team">
          <span className="score">{game.awayTeam.score}</span>
          <span className="name">{game.awayTeam.name}</span>
          <span className="flag">{game.awayTeam.flag}</span>
        </div>
      </div>
      
      <div className="game-venue">{game.venue}</div>
      
      <div className="live-events">
        <h4>Live Commentary</h4>
        {game.events.map((event, index) => (
          <div key={index} className="event">
            <span className="minute">{event.minute}</span>
            <span className={`event-type ${event.type}`}>
              {event.type === 'try' ? '🎯 Try' : '⛳ Penalty'} 
            </span>
            <span className="player">{event.player}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="live-scores-page">
      <nav className="scores-nav">
        <button className="nav-back-btn" onClick={onNavigateBack}>← Back</button>
        <h1 className="nav-title">Live Scores</h1>
        <div className="nav-actions">
          <button className="nav-action-btn">🔄</button>
          <button className="nav-action-btn">🔔</button>
        </div>
      </nav>

      <div className="container">
        <div className="scores-header">
          <h2>Live Rugby Scores</h2>
          <p>Real-time updates from international tournaments</p>
        </div>

        <div className="tournament-filter">
          <button className={`filter-btn ${selectedTournament === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedTournament('all')}>
            All Tournaments
          </button>
          <button className={`filter-btn ${selectedTournament === 'six-nations' ? 'active' : ''}`}
                  onClick={() => setSelectedTournament('six-nations')}>
            Six Nations
          </button>
          <button className={`filter-btn ${selectedTournament === 'rugby-championship' ? 'active' : ''}`}
                  onClick={() => setSelectedTournament('rugby-championship')}>
            Rugby Championship
          </button>
        </div>

        <div className="live-games-container">
          {liveGames.length > 0 ? (
            liveGames.map(game => (
              <LiveGameCard key={game.id} game={game} />
            ))
          ) : (
            <div className="no-live-games">
              <p>No live games at the moment</p>
              <p>Check back during tournament weekends</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveScoresPage;