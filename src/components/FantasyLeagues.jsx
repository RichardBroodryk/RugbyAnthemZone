import React from 'react';
import './FantasyLeagues.css';

const FantasyLeagues = ({ onNavigateBack, tournament }) => {
  const mensTournaments = [
    {
      id: 1,
      code: 'RWC',
      name: 'Rugby World Cup',
      description: 'The pinnacle of international rugby. Pick your dream team and compete for glory.',
      links: [
        { name: 'Official Rugby World Cup Fantasy', url: '#' },
        { name: 'ESPN Rugby Fantasy', url: '#' },
        { name: 'Superbru Prediction Game', url: '#', isSuperbru: true }
      ]
    },
    {
      id: 2,
      code: '6N',
      name: 'Six Nations Championship',
      description: 'Europe\'s premier rugby tournament. Build your squad from six elite nations.',
      links: [
        { name: 'Official Six Nations Fantasy', url: '#' },
        { name: 'Fantasy Rugby Draft', url: '#' },
        { name: 'Superbru Prediction Game', url: '#', isSuperbru: true }
      ]
    },
    {
      id: 3,
      code: 'TRC',
      name: 'The Rugby Championship',
      description: 'Southern hemisphere\'s elite competition featuring NZ, AUS, SA, and ARG.',
      links: [
        { name: 'Official Rugby Championship Fantasy', url: '#' },
        { name: 'The Rugby Net Fantasy', url: '#' },
        { name: 'Superbru Prediction Game', url: '#', isSuperbru: true }
      ]
    }
  ];

  const womensTournaments = [
    {
      id: 1,
      code: 'WRWC',
      name: 'Women\'s Rugby World Cup',
      description: 'The premier event in women\'s rugby. Build your championship-winning team.',
      links: [
        { name: 'Official Women\'s RWC Fantasy', url: '#' },
        { name: 'Women\'s Rugby Fantasy', url: '#' },
        { name: 'Superbru Prediction Game', url: '#', isSuperbru: true }
      ]
    },
    {
      id: 2,
      code: 'W6N',
      name: 'Women\'s Six Nations',
      description: 'Europe\'s top women\'s rugby competition. Select your star players.',
      links: [
        { name: 'Official Women\'s Six Nations Fantasy', url: '#' },
        { name: 'Scrumqueens Fantasy', url: '#' },
        { name: 'Superbru Prediction Game', url: '#', isSuperbru: true }
      ]
    }
  ];

  const TournamentCard = ({ tournament }) => (
    <div className="tournament-card">
      <div className="tournament-header">
        <div className="tournament-logo">{tournament.code}</div>
      </div>
      <div className="tournament-body">
        <h3 className="tournament-name">{tournament.name}</h3>
        <p className="tournament-desc">{tournament.description}</p>
        <div className="affiliate-links">
          {tournament.links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className={`affiliate-link ${link.isSuperbru ? 'superbru-link' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fantasy-leagues-page">
      {/* Navigation Bar */}
      <nav className="fantasy-nav">
        <button className="nav-back-btn" onClick={onNavigateBack}>
          ← Back
        </button>
        <h1 className="nav-title">Fantasy Rugby Leagues</h1>
        <div className="nav-actions">
          <button className="nav-action-btn">🏠</button>
          <button className="nav-action-btn">🔍</button>
        </div>
      </nav>

      {/* Top Ad Banner */}
      <div className="ad-banner top-ad">
        <p>ADVERTISEMENT</p>
        <div className="ad-placeholder">
          Ad Banner (728x90)
        </div>
      </div>

      <div className="container">
        {/* Men's International Tournaments Section */}
        <section className="fantasy-section">
          <h2 className="section-title">Men's International Tournaments</h2>
          <p>Test your rugby knowledge and compete with fans from around the world in these premier men's international rugby fantasy competitions.</p>
          
          <div className="tournament-grid">
            {mensTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </section>
        
        {/* Women's International Tournaments Section */}
        <section className="fantasy-section">
          <h2 className="section-title">Women's International Tournaments</h2>
          <p>Join the growing community of women's rugby fans and showcase your knowledge in these exciting fantasy competitions.</p>
          
          <div className="tournament-grid">
            {womensTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </section>
        
        {/* Bottom Ad Banner */}
        <div className="ad-banner bottom-ad">
          <p>ADVERTISEMENT</p>
          <div className="ad-placeholder">
            Ad Banner (728x90)
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyLeagues;