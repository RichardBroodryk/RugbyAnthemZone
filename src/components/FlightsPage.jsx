import './FlightsPage.css';

function FlightsPage({ onNavigateBack }) {
  const airlineVendors = [
    { 
      nation: "Argentina", 
      flag: "🇦🇷", 
      airlines: [
        { name: "Aerolíneas Argentinas", url: "https://www.aerolineas.com.ar/" },
        { name: "LATAM Argentina", url: "https://www.latam.com/ar_es/" }
      ]
    },
    { 
      nation: "Australia", 
      flag: "🇦🇺", 
      airlines: [
        { name: "Qantas Airways", url: "https://www.qantas.com/au/en.html" },
        { name: "Virgin Australia", url: "https://www.virginaustralia.com/au/en/" }
      ]
    },
    { 
      nation: "England", 
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 
      airlines: [
        { name: "British Airways", url: "https://www.britishairways.com/" },
        { name: "Virgin Atlantic", url: "https://www.virginatlantic.com/" },
        { name: "easyJet", url: "https://www.easyjet.com/" }
      ]
    },
    { 
      nation: "Fiji", 
      flag: "🇫🇯", 
      airlines: [
        { name: "Fiji Airways", url: "https://www.fijiairways.com/" }
      ]
    },
    { 
      nation: "France", 
      flag: "🇫🇷", 
      airlines: [
        { name: "Air France", url: "https://www.airfrance.com/" },
        { name: "Air Corsica", url: "https://www.aircorsica.com/" }
      ]
    },
    { 
      nation: "Ireland", 
      flag: "🇮🇪", 
      airlines: [
        { name: "Aer Lingus", url: "https://www.aerlingus.com/" },
        { name: "Ryanair", url: "https://www.ryanair.com/" }
      ]
    },
    { 
      nation: "Italy", 
      flag: "🇮🇹", 
      airlines: [
        { name: "Alitalia", url: "https://www.alitalia.com/" },
        { name: "ITA Airways", url: "https://www.ita-airways.com/" }
      ]
    },
    { 
      nation: "Japan", 
      flag: "🇯🇵", 
      airlines: [
        { name: "Japan Airlines", url: "https://www.jal.co.jp/" },
        { name: "ANA All Nippon Airways", url: "https://www.ana.co.jp/" }
      ]
    },
    { 
      nation: "New Zealand", 
      flag: "🇳🇿", 
      airlines: [
        { name: "Air New Zealand", url: "https://www.airnewzealand.co.nz/" },
        { name: "Jetstar NZ", url: "https://www.jetstar.com/nz/en" }
      ]
    },
    { 
      nation: "Scotland", 
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", 
      airlines: [
        { name: "Loganair", url: "https://www.loganair.co.uk/" },
        { name: "easyJet Scotland", url: "https://www.easyjet.com/" }
      ]
    },
    { 
      nation: "South Africa", 
      flag: "🇿🇦", 
      airlines: [
        { name: "South African Airways", url: "https://www.flysaa.com/" },
        { name: "Kulula.com", url: "https://www.kulula.com/" }
      ]
    },
    { 
      nation: "Wales", 
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", 
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
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        ✈️ Rugby Travel Packages - Special Rates for Fans! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

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
                <div className="nation-flag">{country.flag}</div>
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