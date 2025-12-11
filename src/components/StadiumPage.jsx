import React, { useState } from 'react';
import './StadiumMap.css';
import NavBar from './NavBar'; // Import the NavBar component

function StadiumPage({ 
  stadium, 
  onSeatSelect, 
  onNavigateBack,
  interactive = true, 
  showInfo = true,
  showNavBar = false // This prop might be unused now since we'll always show the NavBar
}) {
  const [selectedSection, setSelectedSection] = useState(null);

  // PROPER STADIUM MAPS WITH SVG LAYOUTS
  const stadiumMaps = {
    'Twickenham Stadium': {
      svg: (
        <svg className="stadium-map-svg" viewBox="0 0 800 400">
          {/* Pitch */}
          <rect x="100" y="50" width="600" height="300" fill="#2e8b57" stroke="#1c6b47" strokeWidth="3"/>
          
          {/* Stands */}
          <rect x="50" y="30" width="700" height="20" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('North Stand')}/>
          <rect x="50" y="350" width="700" height="20" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('South Stand')}/>
          <rect x="30" y="50" width="20" height="300" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('East Stand')}/>
          <rect x="750" y="50" width="20" height="300" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('West Stand')}/>
          
          {/* Premium Areas */}
          <rect x="350" y="30" width="100" height="15" fill="#ffd700" className="stadium-section" onClick={() => handleSectionClick('The Rose Room')}/>
          <rect x="375" y="355" width="50" height="15" fill="#ffd700" className="stadium-section" onClick={() => handleSectionClick('1865 Club')}/>
          
          {/* Labels */}
          <text x="400" y="45" className="section-label">North Stand</text>
          <text x="400" y="370" className="section-label">South Stand</text>
          <text x="45" y="200" className="section-label" transform="rotate(-90 45 200)">East Stand</text>
          <text x="755" y="200" className="section-label" transform="rotate(90 755 200)">West Stand</text>
        </svg>
      ),
      sections: ['North Stand', 'South Stand', 'East Stand', 'West Stand', 'The Rose Room', '1865 Club', 'Family Area'],
      capacity: '82,000',
      location: 'London, England',
      homeTeam: 'England',
      premiumAreas: ['The Rose Room', '1865 Club', 'The Guardroom'],
      facts: [
        { icon: '🏆', title: 'Largest Rugby Stadium', desc: 'World\'s largest dedicated rugby union venue' },
        { icon: '🎵', title: 'Iconic Anthems', desc: 'Swing Low Sweet Chariot tradition' },
        { icon: '⚡', title: 'Modern Facilities', desc: 'Recently renovated with premium amenities' }
      ]
    },
    'Murrayfield': {
      svg: (
        <svg className="stadium-map-svg" viewBox="0 0 800 400">
          <rect x="100" y="50" width="600" height="300" fill="#2e8b57" stroke="#1c6b47" strokeWidth="3"/>
          <rect x="80" y="40" width="640" height="15" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('Main Stand')}/>
          <rect x="80" y="345" width="640" height="15" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('West Stand')}/>
          <rect x="65" y="55" width="15" height="290" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('East Stand')}/>
          <rect x="720" y="55" width="15" height="290" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('North Stand')}/>
          <rect x="300" y="40" width="200" height="12" fill="#ffd700" className="stadium-section" onClick={() => handleSectionClick('The Murrayfield Suite')}/>
          <text x="400" y="52" className="section-label">Main Stand</text>
          <text x="400" y="358" className="section-label">West Stand</text>
        </svg>
      ),
      sections: ['Main Stand', 'West Stand', 'East Stand', 'North Stand', 'Gold Stand', 'The Murrayfield Suite'],
      capacity: '67,144',
      location: 'Edinburgh, Scotland',
      homeTeam: 'Scotland',
      premiumAreas: ['The Murrayfield Suite', 'Doddie Weir Suite'],
      facts: [
        { icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', title: 'Scottish Home', desc: 'Home of Scottish rugby since 1925' },
        { icon: '🎪', title: 'Multi-Purpose', desc: 'Hosts concerts and other major events' },
        { icon: '🌄', title: 'City Views', desc: 'Beautiful views of Edinburgh skyline' }
      ]
    },
    'Principality Stadium': {
      svg: (
        <svg className="stadium-map-svg" viewBox="0 0 800 400">
          <rect x="100" y="50" width="600" height="300" fill="#2e8b57" stroke="#1c6b47" strokeWidth="3"/>
          <rect x="70" y="35" width="660" height="20" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('North Stand')}/>
          <rect x="70" y="345" width="660" height="20" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('South Stand')}/>
          <rect x="50" y="55" width="20" height="290" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('East Stand')}/>
          <rect x="730" y="55" width="20" height="290" fill="#4fc3f7" className="stadium-section" onClick={() => handleSectionClick('West Stand')}/>
          <rect x="320" y="35" width="160" height="15" fill="#ffd700" className="stadium-section" onClick={() => handleSectionClick('The Dragon Lounge')}/>
          <text x="400" y="50" className="section-label">North Stand</text>
          <text x="400" y="360" className="section-label">South Stand</text>
        </svg>
      ),
      sections: ['North Stand', 'South Stand', 'East Stand', 'West Stand', 'Dragon Zone', 'The Dragon Lounge'],
      capacity: '74,500',
      location: 'Cardiff, Wales',
      homeTeam: 'Wales',
      premiumAreas: ['The Dragon Lounge', 'The 1977 Club'],
      facts: [
        { icon: '🏗️', title: 'Retractable Roof', desc: 'First UK stadium with fully retractable roof' },
        { icon: '🎵', title: 'Welsh Anthems', desc: 'Iconic Land of My Fathers performances' },
        { icon: '📍', title: 'City Center', desc: 'Located in the heart of Cardiff' }
      ]
    }
  };

  const currentStadium = stadiumMaps[stadium] || stadiumMaps['Twickenham Stadium'];

  const handleSectionClick = (section) => {
    if (interactive) {
      setSelectedSection(section);
      if (onSeatSelect) {
        onSeatSelect({
          stadium: stadium,
          section: section,
          capacity: currentStadium.capacity,
          homeTeam: currentStadium.homeTeam
        });
      }
    }
  };

  const handleBookTickets = () => {
    alert(`🎟️ Redirecting to ticket booking for ${selectedSection} at ${stadium}`);
  };

  const handleViewSeats = () => {
    alert(`🪑 Showing detailed seat map for ${selectedSection}`);
  };

  return (
    <div className="stadium-page">
      {/* Professional NavBar Component */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Stadiums")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎟️ OFFICIAL STADIUM TICKETS - BOOK YOUR SEATS NOW! ⚡
      </div>

      <div className="stadium-content">
        {/* Stadium Header */}
        <div className="stadium-header">
          <h1 className="stadium-title">🏟️ {stadium}</h1>
          <p className="stadium-subtitle">Explore the stadium layout and select your seats</p>
        </div>

        {/* Stadium Information */}
        {showInfo && (
          <div className="stadium-info">
            <h3 style={{color: '#333', textAlign: 'center', marginBottom: '20px'}}>Stadium Information</h3>
            <div className="stadium-details-grid">
              <div className="stadium-detail">
                <span className="detail-icon">👥</span>
                <div className="detail-content">
                  <h4>Capacity</h4>
                  <p>{currentStadium.capacity} seats</p>
                </div>
              </div>
              <div className="stadium-detail">
                <span className="detail-icon">📍</span>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>{currentStadium.location}</p>
                </div>
              </div>
              <div className="stadium-detail">
                <span className="detail-icon">🏆</span>
                <div className="detail-content">
                  <h4>Home Team</h4>
                  <p>{currentStadium.homeTeam}</p>
                </div>
              </div>
              <div className="stadium-detail">
                <span className="detail-icon">⭐</span>
                <div className="detail-content">
                  <h4>Premium Areas</h4>
                  <p>{currentStadium.premiumAreas?.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stadium Map */}
        <div className="stadium-map-container">
          <h3 className="map-title">Stadium Layout</h3>
          <div className="stadium-map-wrapper">
            {currentStadium.svg}
            
            {/* Interactive Legend */}
            <div className="stadium-legend">
              <h4 className="legend-title">🏃‍♂️ Stadium Sections</h4>
              <div className="section-list">
                {currentStadium.sections.map((section, index) => (
                  <button
                    key={index}
                    className={`section-btn ${selectedSection === section ? 'selected' : ''}`}
                    onClick={() => handleSectionClick(section)}
                  >
                    {section.includes('Premium') || section.includes('Suite') || section.includes('Club') ? '⭐ ' : '🎯 '}
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Seat Selection */}
            {selectedSection && (
              <div className="seat-selection">
                <h4>Selected: {selectedSection}</h4>
                <div className="seat-info">
                  <div className="seat-detail">
                    <strong>Stadium</strong>
                    <span>{stadium}</span>
                  </div>
                  <div className="seat-detail">
                    <strong>Section</strong>
                    <span>{selectedSection}</span>
                  </div>
                  <div className="seat-detail">
                    <strong>Capacity</strong>
                    <span>{currentStadium.capacity}</span>
                  </div>
                  <div className="seat-detail">
                    <strong>Home Team</strong>
                    <span>{currentStadium.homeTeam}</span>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="action-btn primary" onClick={handleBookTickets}>
                    🎟️ Book Tickets
                  </button>
                  <button className="action-btn secondary" onClick={handleViewSeats}>
                    🪑 View Seats
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stadium Facts */}
        <div className="stadium-facts">
          <h3 className="facts-title">🏟️ Stadium Facts & Features</h3>
          <div className="facts-grid">
            {currentStadium.facts?.map((fact, index) => (
              <div key={index} className="fact-card">
                <div className="fact-icon">{fact.icon}</div>
                <div className="fact-title">{fact.title}</div>
                <div className="fact-desc">{fact.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏨 STAY NEAR THE STADIUM - BOOK HOTELS & TRANSPORT! 🚗
      </div>
    </div>
  );
}

export default StadiumPage;