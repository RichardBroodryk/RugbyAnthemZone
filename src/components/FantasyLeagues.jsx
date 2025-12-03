import React from 'react';
import './FantasyLeagues.css';
import NavBar from './NavBar';

const FantasyLeagues = ({ onNavigateBack, tournament }) => {
  const mensTournaments = [
    {
      id: 1,
      code: 'RWC',
      name: 'Rugby World Cup',
      description: 'The pinnacle of international rugby. Pick your dream team and compete for glory in the ultimate fantasy competition.',
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
      description: 'Europe\'s premier rugby tournament. Build your squad from six elite nations and compete for the championship.',
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
      description: 'Southern hemisphere\'s elite competition featuring NZ, AUS, SA, and ARG. Test your rugby knowledge.',
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
      description: 'The premier event in women\'s rugby. Build your championship-winning team and compete globally.',
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
      description: 'Europe\'s top women\'s rugby competition. Select your star players and join the fantasy action.',
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
              target="_blank"
              rel="noopener noreferrer"
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
      {/* Professional NavBar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Fantasy Leagues")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Fantasy Rugby - Compete for Prizes & Glory! Join Now! 🎮
      </div>

      {/* Main Content */}
      <div className="fantasy-content">
        <div className="fantasy-header">
          <h1 className="fantasy-title">🎮 Fantasy Rugby Leagues</h1>
          <p className="fantasy-subtitle">Build your dream team, compete with fans worldwide, and win amazing prizes!</p>
        </div>

        {/* Fantasy Features */}
        <div className="fantasy-features">
          <h3>🌟 Why Play Fantasy Rugby?</h3>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">🏅</span>
              <span className="feature-text">Compete for exclusive prizes and rugby merchandise</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌍</span>
              <span className="feature-text">Challenge fans from around the world in global leagues</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span className="feature-text">Use real player statistics and performance data</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">Live scoring and real-time leaderboard updates</span>
            </div>
          </div>
        </div>

        {/* Men's Tournaments Section - FIERY RED */}
        <div className="tournament-section mens-section">
          <div className="section-header">
            <h2 className="section-title">🏉 Men's International Tournaments</h2>
            <p className="section-description">
              Test your rugby knowledge and compete with fans from around the world in these premier men's international rugby fantasy competitions.
            </p>
          </div>
          
          <div className="tournament-grid">
            {mensTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </div>
        
        {/* Women's Tournaments Section - FIERY RED */}
        <div className="tournament-section womens-section">
          <div className="section-header">
            <h2 className="section-title">♀ Women's International Tournaments</h2>
            <p className="section-description">
              Join the growing community of women's rugby fans and showcase your knowledge in these exciting fantasy competitions.
            </p>
          </div>
          
          <div className="tournament-grid">
            {womensTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="quick-start">
          <h3>🚀 Ready to Get Started?</h3>
          <p>Choose your favorite tournament above and join the fantasy rugby community today!</p>
          <button className="quick-start-btn">
            🎯 Beginner's Guide to Fantasy Rugby
          </button>
          <button className="quick-start-btn">
            📱 Download Fantasy Apps
          </button>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏅 Exclusive Rugby Merchandise - Fantasy Winner Prizes! 🛍️
      </div>
    </div>
  );
};

export default FantasyLeagues;