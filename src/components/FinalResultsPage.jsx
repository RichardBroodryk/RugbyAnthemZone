import React, { useState } from 'react';
import './FinalResultsPage.css';

const FinalResultsPage = ({ onNavigateBack, tournament }) => {
  const [selectedTournament, setSelectedTournament] = useState('all');
  const [selectedSeason, setSelectedSeason] = useState('2024');
  const [expandedTournaments, setExpandedTournaments] = useState([]);

  const tournamentsData = [
    {
      id: 'six-nations',
      name: 'Six Nations Championship',
      logo: '6N',
      currentChampion: 'Ireland',
      seasons: {
        '2024': {
          winner: 'Ireland',
          runnerUp: 'France',
          points: {
            'Ireland': 20,
            'France': 15,
            'England': 14,
            'Scotland': 12,
            'Wales': 6,
            'Italy': 4
          },
          games: [
            {
              id: 1,
              round: 'Round 1',
              date: '2024-02-02',
              homeTeam: { name: 'France', flag: '🇫🇷', score: 17 },
              awayTeam: { name: 'Ireland', flag: '🇮🇪', score: 38 },
              venue: 'Stade de France, Paris',
              status: 'Completed'
            },
            {
              id: 2,
              round: 'Round 2',
              date: '2024-02-10',
              homeTeam: { name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', score: 16 },
              awayTeam: { name: 'France', flag: '🇫🇷', score: 20 },
              venue: 'Murrayfield, Edinburgh',
              status: 'Completed'
            }
          ]
        }
      }
    },
    {
      id: 'rugby-championship',
      name: 'The Rugby Championship',
      logo: 'TRC',
      currentChampion: 'New Zealand',
      seasons: {
        '2024': {
          winner: 'New Zealand',
          runnerUp: 'South Africa',
          points: {
            'New Zealand': 18,
            'South Africa': 15,
            'Australia': 9,
            'Argentina': 6
          },
          games: [
            {
              id: 1,
              round: 'Round 1',
              date: '2024-08-10',
              homeTeam: { name: 'Australia', flag: '🇦🇺', score: 25 },
              awayTeam: { name: 'New Zealand', flag: '🇳🇿', score: 32 },
              venue: 'Melbourne Cricket Ground',
              status: 'Completed'
            }
          ]
        }
      }
    }
  ];

  const toggleTournament = (tournamentId) => {
    setExpandedTournaments(prev => 
      prev.includes(tournamentId) 
        ? prev.filter(id => id !== tournamentId)
        : [...prev, tournamentId]
    );
  };

  const filteredTournaments = selectedTournament === 'all' 
    ? tournamentsData 
    : tournamentsData.filter(t => t.id === selectedTournament);

  const TournamentCard = ({ tournament }) => {
    const isExpanded = expandedTournaments.includes(tournament.id);
    const seasonData = tournament.seasons[selectedSeason];
    
    if (!seasonData) return null;

    return (
      <div className="tournament-card">
        <div 
          className="tournament-header"
          onClick={() => toggleTournament(tournament.id)}
        >
          <div className="tournament-info">
            <div className="tournament-logo">{tournament.logo}</div>
            <div className="tournament-details">
              <h3>{tournament.name}</h3>
              <div className="season-champion">
                <span className="season">{selectedSeason} Season</span>
                <span className="champion">🏆 {seasonData.winner}</span>
              </div>
            </div>
          </div>
          <div className="tournament-actions">
            <button className="expand-btn">
              {isExpanded ? '▼' : '►'}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="tournament-content">
            {seasonData.points && Object.keys(seasonData.points).length > 0 && (
              <div className="standings-section">
                <h4>Final Standings</h4>
                <div className="standings-table">
                  <div className="table-header">
                    <span>Position</span>
                    <span>Team</span>
                    <span>Points</span>
                  </div>
                  {Object.entries(seasonData.points)
                    .sort(([,a], [,b]) => b - a)
                    .map(([team, points], index) => (
                      <div 
                        key={team} 
                        className={`standing-row ${index === 0 ? 'champion-row' : ''}`}
                      >
                        <span className="position">#{index + 1}</span>
                        <span className="team">{team}</span>
                        <span className="points">{points}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {seasonData.runnerUp && (
              <div className="final-results">
                <div className="result-item champion">
                  <span className="label">Champions:</span>
                  <span className="value">{seasonData.winner} 🏆</span>
                </div>
                <div className="result-item">
                  <span className="label">Runner-up:</span>
                  <span className="value">{seasonData.runnerUp}</span>
                </div>
              </div>
            )}

            <div className="games-section">
              <h4>All Matches</h4>
              <div className="games-list">
                {seasonData.games.map(game => (
                  <div key={game.id} className="game-result">
                    <div className="game-header">
                      <span className="round">{game.round}</span>
                      <span className="date">{game.date}</span>
                    </div>
                    
                    <div className="teams-result">
                      <div className="team-result">
                        <span className="team-flag">{game.homeTeam.flag}</span>
                        <span className="team-name">{game.homeTeam.name}</span>
                        <span className="team-score">{game.homeTeam.score}</span>
                      </div>
                      
                      <div className="vs">vs</div>
                      
                      <div className="team-result">
                        <span className="team-score">{game.awayTeam.score}</span>
                        <span className="team-name">{game.awayTeam.name}</span>
                        <span className="team-flag">{game.awayTeam.flag}</span>
                      </div>
                    </div>
                    
                    <div className="game-details">
                      <span className="venue">{game.venue}</span>
                      <span className="status completed">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const TournamentFilter = () => (
    <div className="tournament-filter">
      <div className="filter-group">
        <label>Tournament:</label>
        <select 
          value={selectedTournament} 
          onChange={(e) => setSelectedTournament(e.target.value)}
        >
          <option value="all">All Tournaments</option>
          {tournamentsData.map(tournament => (
            <option key={tournament.id} value={tournament.id}>
              {tournament.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Season:</label>
        <select 
          value={selectedSeason} 
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );

  const QuickStats = () => {
    const currentChampions = tournamentsData.map(t => ({
      tournament: t.name,
      champion: t.currentChampion
    }));

    return (
      <div className="quick-stats">
        <h3>🏆 Current Season Champions</h3>
        <div className="champions-grid">
          {currentChampions.map((item, index) => (
            <div key={index} className="champion-item">
              <div className="tournament-name">{item.tournament}</div>
              <div className="champion-name">{item.champion}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="final-results-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Rugby Results Archive - Complete Tournament History & Statistics! 📊
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="results-content">
        <div className="results-header">
          <h1 className="results-title">📊 Rugby Results Archive</h1>
          <p className="results-subtitle">Complete results, standings, and match details from all major international rugby tournaments</p>
        </div>

        {/* Quick Stats */}
        <QuickStats />

        {/* Filters */}
        <TournamentFilter />

        {/* Results Container */}
        <div className="results-container">
          <h2>Tournament Results & Standings</h2>
          {filteredTournaments.length > 0 ? (
            filteredTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))
          ) : (
            <div className="no-results">
              <p>No results found for the selected filters.</p>
              <p>Try selecting different tournament or season options.</p>
            </div>
          )}
        </div>

        {/* Historical CTA */}
        <div className="historical-cta">
          <h3>📚 Explore Historical Data</h3>
          <p>Access complete tournament archives, historical statistics, and championship records dating back to the first international rugby matches.</p>
          <button className="cta-button">
            📖 View Historical Archives
          </button>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎥 Match Highlights & Full Replays Available - Relive the Action! 🎬
      </div>
    </div>
  );
};

export default FinalResultsPage;