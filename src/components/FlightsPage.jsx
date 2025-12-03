import React from 'react';
import './FlightsPage.css';
import NavBar from './NavBar';

// Flag Component with correct file name mapping
const Flag = ({ country, size = 'small' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'argentina': 'argentina',
      'australia': 'australia',
      'england': 'england',
      'fiji': 'fiji',
      'france': 'france',
      'ireland': 'ireland',
      'italy': 'italy',
      'japan': 'japan',
      'new zealand': 'new-zealand',
      'newzealand': 'new-zealand',  // Added this variant
      'scotland': 'scotland',
      'south africa': 'south-africa',  // Fixed: hyphenated
      'southafrica': 'south-africa',   // Added this variant
      'wales': 'wales'
    };
    
    // Try exact match first, then try to find partial match
    const normalizedName = countryName.toLowerCase().trim();
    return nameMap[normalizedName] || normalizedName;
  };

  const fileName = getCountryFileName(country);
  
  try {
    // Try PNG first
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      // Try JPG as fallback
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      try {
        // Try SVG as another fallback
        const flagImage = require(`../Assets/images/flags/${fileName}.svg`);
        return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
      } catch (error3) {
        // Final fallback - show initials
        return <div className={`flag-fallback flag-${size}`}>
          {country.split(' ').map(word => word[0]).join('').toUpperCase()}
        </div>;
      }
    }
  }
};

function FlightsPage({ onNavigateBack }) {
  const airlineVendors = [
    { 
      nation: "Argentina", 
      airlines: [
        { name: "Aerolíneas Argentinas", url: "https://www.aerolineas.com.ar/" },
        { name: "LATAM Argentina", url: "https://www.latam.com/ar_es/" }
      ]
    },
    { 
      nation: "Australia", 
      airlines: [
        { name: "Qantas Airways", url: "https://www.qantas.com/au/en.html" },
        { name: "Virgin Australia", url: "https://www.virginaustralia.com/au/en/" }
      ]
    },
    { 
      nation: "England", 
      airlines: [
        { name: "British Airways", url: "https://www.britishairways.com/" },
        { name: "Virgin Atlantic", url: "https://www.virginatlantic.com/" },
        { name: "easyJet", url: "https://www.easyjet.com/" }
      ]
    },
    { 
      nation: "Fiji", 
      airlines: [
        { name: "Fiji Airways", url: "https://www.fijiairways.com/" }
      ]
    },
    { 
      nation: "France", 
      airlines: [
        { name: "Air France", url: "https://www.airfrance.com/" },
        { name: "Air Corsica", url: "https://www.aircorsica.com/" }
      ]
    },
    { 
      nation: "Ireland", 
      airlines: [
        { name: "Aer Lingus", url: "https://www.aerlingus.com/" },
        { name: "Ryanair", url: "https://www.ryanair.com/" }
      ]
    },
    { 
      nation: "Italy", 
      airlines: [
        { name: "Alitalia", url: "https://www.alitalia.com/" },
        { name: "ITA Airways", url: "https://www.ita-airways.com/" }
      ]
    },
    { 
      nation: "Japan", 
      airlines: [
        { name: "Japan Airlines", url: "https://www.jal.co.jp/" },
        { name: "ANA All Nippon Airways", url: "https://www.ana.co.jp/" }
      ]
    },
    { 
      nation: "New Zealand",  // This has a space
      airlines: [
        { name: "Air New Zealand", url: "https://www.airnewzealand.co.nz/" },
        { name: "Jetstar NZ", url: "https://www.jetstar.com/nz/en" }
      ]
    },
    { 
      nation: "Scotland", 
      airlines: [
        { name: "Loganair", url: "https://www.loganair.co.uk/" },
        { name: "easyJet Scotland", url: "https://www.easyjet.com/" }
      ]
    },
    { 
      nation: "South Africa",  // This has a space
      airlines: [
        { name: "South African Airways", url: "https://www.flysaa.com/" },
        { name: "Kulula.com", url: "https://www.kulula.com/" }
      ]
    },
    { 
      nation: "Wales", 
      airlines: [
        { name: "Air Wales", url: "https://www.airwales.co.uk/" }
      ]
    }
  ];

  const handleAirlineClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flights-page">
      {/* Professional NavBar at the top */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Flights")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner below the NavBar */}
      <div className="top-ad-banner">
        ✈️ Rugby Travel Packages - Special Rates for Fans! ⚡
      </div>

      {/* Main Content */}
      <div className="flights-content">
        <div className="flights-header">
          <h1 className="flights-title">✈️ Flight & Travel Bookings</h1>
          <p className="flights-subtitle">Official airlines and travel partners for rugby destinations</p>
        </div>

        {/* Flights Grid */}
        <div className="flights-grid">
          {airlineVendors.map((country, index) => (
            <div key={index} className="country-airlines-card">
              <div className="country-header">
                {/* Debug: Show what country name is being used */}
                {/* <small style={{color: 'red'}}>Looking for: {country.nation.toLowerCase().replace(' ', '-')}</small> */}
                
                <Flag country={country.nation} size="large" />
                <div className="country-info">
                  <h3 className="country-name">{country.nation}</h3>
                  <p className="airlines-count">{country.airlines.length} airline(s) available</p>
                </div>
              </div>
              
              <div className="airlines-list">
                {country.airlines.map((airline, airlineIndex) => (
                  <div 
                    key={airlineIndex}
                    className="airline-item"
                    onClick={() => handleAirlineClick(airline.url)}
                  >
                    <div className="airline-details">
                      <span className="airline-icon">✈️</span>
                      <span className="airline-name">{airline.name}</span>
                    </div>
                    <button className="book-flight-btn">
                      Book Flights
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips */}
        <div className="travel-tips">
          <h3>🎯 Smart Travel Tips</h3>
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">📅</span>
              <span className="tip-text">Book 3-6 months early for best rates</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🎫</span>
              <span className="tip-text">Consider flexible tickets for match days</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🏨</span>
              <span className="tip-text">Book accommodation near stadiums early</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🛡️</span>
              <span className="tip-text">Get travel insurance for international games</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏨 Rugby Accommodation Partners - Special Fan Rates! 🛎️
      </div>
    </div>
  );
}

export default FlightsPage;