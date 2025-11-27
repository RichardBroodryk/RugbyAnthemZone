import React, { useState } from 'react';
import './PodcastsPage.css';
import ThemeToggle from './ThemeToggle';

const PodcastsPage = ({ onNavigateBack, tournament }) => {
  const [selectedTournament, setSelectedTournament] = useState('all');
  const [playingEpisode, setPlayingEpisode] = useState(null);

  const tournaments = [
    {
      id: 'six-nations',
      name: 'Six Nations Championship',
      logo: '6N',
      description: 'Annual European rugby union competition',
      seasons: ['2024', '2023', '2022']
    },
    {
      id: 'rugby-world-cup',
      name: 'Rugby World Cup',
      logo: 'RWC',
      description: 'Premier international rugby union competition',
      seasons: ['2023', '2019', '2015']
    },
    {
      id: 'rugby-championship',
      name: 'The Rugby Championship',
      logo: 'TRC',
      description: 'Southern hemisphere elite competition',
      seasons: ['2024', '2023', '2022']
    },
    {
      id: 'premiership',
      name: 'English Premiership',
      logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
      description: 'Top-tier English club competition',
      seasons: ['2024', '2023', '2022']
    }
  ];

  const podcasts = [
    {
      id: 1,
      name: 'The Eggchasers Podcast',
      hosts: ['Phil, JB, Tim'],
      region: 'UK',
      language: 'English',
      focus: ['Six Nations', 'Premiership', 'International'],
      description: 'Weekly rugby discussion with expert analysis, humor, and in-depth breakdowns of major tournaments and matches.',
      logo: '🥚',
      social: {
        website: 'https://eggchasers.com',
        twitter: '@eggchasersrugby',
        spotify: 'eggchasers'
      },
      episodes: [
        {
          id: 101,
          title: 'Six Nations 2024 Preview - Who Takes The Crown?',
          type: 'pre-game',
          tournament: 'six-nations',
          date: '2024-01-28',
          duration: '78:32',
          guests: ['Will Greenwood'],
          summary: 'Comprehensive breakdown of all six teams, key players to watch, tactical analysis, and tournament predictions from former England international Will Greenwood.',
          audioUrl: '#',
          downloads: '45K'
        },
        {
          id: 102,
          title: 'England\'s Resurgence - Post-Match Analysis',
          type: 'post-game',
          tournament: 'six-nations',
          date: '2024-02-10',
          duration: '65:15',
          guests: ['Ugo Monye'],
          summary: 'Detailed analysis of England\'s impressive victory over Wales, key moments, and what this means for their championship aspirations.',
          audioUrl: '#',
          downloads: '38K'
        }
      ]
    },
    {
      id: 2,
      name: 'The Aotearoa Rugby Pod',
      hosts: ['Bryce, Ross'],
      region: 'New Zealand',
      language: 'English',
      focus: ['Rugby Championship', 'Super Rugby', 'All Blacks'],
      description: 'NZ-based analysis with former professional players providing unique insights into Southern Hemisphere rugby.',
      logo: '🇳🇿',
      social: {
        website: 'https://nzrugbypod.com',
        twitter: '@NZRugbyPod',
        spotify: 'aotearoa-rugby-pod'
      },
      episodes: [
        {
          id: 201,
          title: 'Rugby Championship Preview - ABs Road to Recovery',
          type: 'pre-game',
          tournament: 'rugby-championship',
          date: '2024-07-20',
          duration: '72:18',
          guests: ['Justin Marshall'],
          summary: 'Can the All Blacks bounce back from World Cup disappointment? In-depth analysis of all four teams with former All Black Justin Marshall.',
          audioUrl: '#',
          downloads: '38K'
        }
      ]
    },
    {
      id: 3,
      name: 'Le French Rugby Podcast',
      hosts: ['Pierre, Jean'],
      region: 'France',
      language: 'French/English',
      focus: ['Six Nations', 'Top 14', 'France National Team'],
      description: 'Bilingual podcast offering French perspective on international rugby with English summaries.',
      logo: '🇫🇷',
      social: {
        website: 'https://frenchrugbypod.com',
        twitter: '@FrenchRugbyPod',
        spotify: 'french-rugby-pod'
      },
      episodes: [
        {
          id: 301,
          title: 'France\'s Grand Slam Ambitions',
          type: 'pre-game',
          tournament: 'six-nations',
          date: '2024-01-30',
          duration: '68:45',
          guests: ['Serge Blanco'],
          summary: 'Analysis of France\'s squad depth, key players, and their chances of completing another Grand Slam campaign.',
          audioUrl: '#',
          downloads: '32K'
        }
      ]
    }
  ];

  const filteredPodcasts = selectedTournament === 'all' 
    ? podcasts 
    : podcasts.filter(podcast => 
        podcast.episodes.some(episode => episode.tournament === selectedTournament)
      );

  const handlePlayEpisode = (episode) => {
    setPlayingEpisode(episode);
    console.log(`Playing: ${episode.title}`);
  };

  const TournamentFilter = () => (
    <div className="tournament-filter">
      <h3>🎯 Filter by Tournament</h3>
      <div className="filter-options">
        <button 
          className={`filter-btn ${selectedTournament === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedTournament('all')}
        >
          All Tournaments
        </button>
        {tournaments.map(tournament => (
          <button
            key={tournament.id}
            className={`filter-btn ${selectedTournament === tournament.id ? 'active' : ''}`}
            onClick={() => setSelectedTournament(tournament.id)}
          >
            {tournament.name}
          </button>
        ))}
      </div>
    </div>
  );

  const PodcastCard = ({ podcast }) => (
    <div className="podcast-card">
      <div className="podcast-header">
        <div className="podcast-logo">{podcast.logo}</div>
        <div className="podcast-info">
          <h3 className="podcast-name">{podcast.name}</h3>
          <div className="podcast-meta">
            <span className="region">🌍 {podcast.region}</span>
            <span className="language">🗣️ {podcast.language}</span>
            <span className="focus">🎯 {podcast.focus.join(', ')}</span>
          </div>
        </div>
      </div>
      
      <p className="podcast-description">{podcast.description}</p>
      
      <div className="podcast-social">
        <strong>🎙️ Hosts:</strong> {podcast.hosts.join(', ')}
        <div className="social-links">
          {podcast.social.website && (
            <a href={podcast.social.website} className="social-link" target="_blank" rel="noopener noreferrer">🌐 Website</a>
          )}
          {podcast.social.twitter && (
            <a href={`https://twitter.com/${podcast.social.twitter}`} className="social-link" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
          )}
          {podcast.social.spotify && (
            <a href={`https://open.spotify.com/show/${podcast.social.spotify}`} className="social-link" target="_blank" rel="noopener noreferrer">🎵 Spotify</a>
          )}
        </div>
      </div>

      <div className="episodes-section">
        <h4>📻 Latest Episodes</h4>
        {podcast.episodes
          .filter(episode => selectedTournament === 'all' || episode.tournament === selectedTournament)
          .map(episode => (
            <div key={episode.id} className="episode-card">
              <div className="episode-header">
                <span className={`episode-type ${episode.type}`}>
                  {episode.type === 'pre-game' ? '🎯 Pre-Game Analysis' : '📊 Post-Game Breakdown'}
                </span>
                <span className="episode-date">{episode.date}</span>
              </div>
              
              <h5 className="episode-title">{episode.title}</h5>
              
              <div className="episode-meta">
                <span className="duration">⏱️ {episode.duration}</span>
                <span className="downloads">⬇️ {episode.downloads}</span>
                {episode.guests.length > 0 && (
                  <span className="guests">🎙️ {episode.guests.join(', ')}</span>
                )}
              </div>
              
              <p className="episode-summary">{episode.summary}</p>
              
              <div className="episode-actions">
                <button 
                  className="play-btn"
                  onClick={() => handlePlayEpisode(episode)}
                >
                  {playingEpisode?.id === episode.id ? '⏸ Pause' : '▶ Play'} Episode
                </button>
                <button className="share-btn">📤 Share</button>
                <button className="save-btn">💾 Save</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const FeaturedEpisode = () => {
    const featured = podcasts.flatMap(p => p.episodes)
      .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
    
    if (!featured) return null;

    const podcast = podcasts.find(p => p.episodes.some(e => e.id === featured.id));

    return (
      <div className="featured-episode">
        <h2>🎧 Featured Episode</h2>
        <div className="featured-content">
          <div className="featured-info">
            <h3>{featured.title}</h3>
            <div className="featured-meta">
              <span className="podcast-source">{podcast.name}</span>
              <span className="episode-date">{featured.date}</span>
              <span className="episode-duration">{featured.duration}</span>
            </div>
            <p className="featured-summary">{featured.summary}</p>
            <button 
              className="featured-play-btn"
              onClick={() => handlePlayEpisode(featured)}
            >
              {playingEpisode?.id === featured.id ? '⏸ Pause Episode' : '▶ Play Featured Episode'}
            </button>
          </div>
          <div className="featured-stats">
            <div className="stat">
              <div className="stat-value">{featured.downloads}</div>
              <div className="stat-label">Downloads</div>
            </div>
            <div className="stat">
              <div className="stat-value">{podcast.region}</div>
              <div className="stat-label">Region</div>
            </div>
            <div className="stat">
              <div className="stat-value">{featured.guests.length}</div>
              <div className="stat-label">Special Guests</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="podcasts-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎧 Rugby Podcasts Hub - Expert Analysis & Player Interviews! 🎙️
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
        <ThemeToggle />
      </nav>

      {/* Main Content */}
      <div className="podcasts-content">
        <div className="podcasts-header">
          <h1 className="podcasts-title">🎙️ Rugby Podcasts Hub</h1>
          <p className="podcasts-subtitle">
            Pre-game analysis, post-game breakdowns, and exclusive interviews from top rugby podcasts worldwide
          </p>
        </div>

        {/* Podcast Stats */}
        <div className="podcast-stats">
          <h3>📊 Podcast Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Podcasts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Languages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Monthly Downloads</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>

        {/* Featured Episode */}
        <FeaturedEpisode />

        {/* Tournament Filter */}
        <TournamentFilter />

        {/* Podcasts Grid */}
        <div className="podcasts-grid">
          <h2>🎯 Popular Rugby Podcasts</h2>
          {filteredPodcasts.length > 0 ? (
            filteredPodcasts.map(podcast => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))
          ) : (
            <div className="no-results">
              <p>No podcasts found for the selected tournament.</p>
              <p>Try selecting "All Tournaments" to see all available podcasts.</p>
            </div>
          )}
        </div>

        {/* Submission CTA */}
        <div className="submission-cta">
          <h3>🎙️ Have a Rugby Podcast?</h3>
          <p>
            Join our growing community of rugby podcasters! Get featured in our directory, 
            reach thousands of rugby fans, and connect with other creators in the rugby community.
          </p>
          <button className="cta-button">
            📨 Submit Your Podcast
          </button>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏉 Rugby World Cup 2025 - Official Podcast Partner! 🌍
      </div>

      {/* Now Playing Bar */}
      {playingEpisode && (
        <div className="now-playing-bar">
          <div className="now-playing-info">
            <strong>Now Playing:</strong> {playingEpisode.title}
          </div>
          <div className="playback-controls">
            <button>⏮</button>
            <button onClick={() => setPlayingEpisode(null)}>⏸</button>
            <button>⏭</button>
          </div>
          <button 
            className="close-player"
            onClick={() => setPlayingEpisode(null)}
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PodcastsPage;