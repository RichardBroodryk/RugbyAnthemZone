import React from 'react';
import './TransportPage.css';
import NavBar from './NavBar';

// Flag Component with real images
const Flag = ({ country, size = 'large' }) => {
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
      'newzealand': 'new-zealand',
      'scotland': 'scotland',
      'south africa': 'south-africa',
      'southafrica': 'south-africa',
      'wales': 'wales'
    };
    
    const normalizedName = countryName.toLowerCase().trim();
    return nameMap[normalizedName] || normalizedName;
  };

  const fileName = getCountryFileName(country);
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      try {
        const flagImage = require(`../Assets/images/flags/${fileName}.svg`);
        return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
      } catch (error3) {
        return <div className={`flag-fallback flag-${size}`}>
          {country.split(' ').map(word => word[0]).join('').toUpperCase()}
        </div>;
      }
    }
  }
};

function TransportPage({ onNavigateBack }) {
  const transportServices = [
    { 
      nation: "Argentina", 
      services: [
        { name: "Uber", url: "https://www.uber.com/ar/en/", available: true },
        { name: "Cabify", url: "https://cabify.com/ar", available: true },
        { name: "Radio Taxi", url: "tel:+541141434343", available: true, phone: true }
      ]
    },
    { 
      nation: "Australia", 
      services: [
        { name: "Uber", url: "https://www.uber.com/au/en/", available: true },
        { name: "Didi", url: "https://www.didiglobal.com/au", available: true },
        { name: "13CABS", url: "https://www.13cabs.com.au/", available: true }
      ]
    },
    { 
      nation: "England", 
      services: [
        { name: "Uber", url: "https://www.uber.com/gb/en/", available: true },
        { name: "Bolt", url: "https://bolt.eu/en-gb/", available: true },
        { name: "Free Now", url: "https://free-now.com/uk/", available: true },
        { name: "Black Cabs", url: "tel:+442072467001", available: true, phone: true }
      ]
    },
    { 
      nation: "Fiji", 
      services: [
        { name: "Uber", url: "https://www.uber.com/", available: false },
        { name: "Taxi Fiji", url: "tel:+6793303000", available: true, phone: true },
        { name: "Hotel Shuttles", url: "#", available: true, note: "Ask your hotel" }
      ]
    },
    { 
      nation: "France", 
      services: [
        { name: "Uber", url: "https://www.uber.com/fr/fr/", available: true },
        { name: "Bolt", url: "https://bolt.eu/fr-fr/", available: true },
        { name: "Heetch", url: "https://www.heetch.com/fr", available: true }
      ]
    },
    { 
      nation: "Ireland", 
      services: [
        { name: "Uber", url: "https://www.uber.com/ie/en/", available: true },
        { name: "Free Now", url: "https://free-now.com/ie/", available: true },
        { name: "Lynk", url: "https://www.lynk.ie/", available: true }
      ]
    },
    { 
      nation: "Italy", 
      services: [
        { name: "Uber", url: "https://www.uber.com/it/it/", available: true },
        { name: "Free Now", url: "https://free-now.com/it/", available: true },
        { name: "IT Taxi", url: "https://www.ittaxi.it/", available: true }
      ]
    },
    { 
      nation: "Japan", 
      services: [
        { name: "Uber", url: "https://www.uber.com/jp/ja/", available: true },
        { name: "DiDi", url: "https://didimobility.co.jp/", available: true },
        { name: "Japan Taxi", url: "https://japantaxi.jp/", available: true }
      ]
    },
    { 
      nation: "New Zealand", 
      services: [
        { name: "Uber", url: "https://www.uber.com/nz/en/", available: true },
        { name: "Ola", url: "https://www.olacabs.com/nz", available: true },
        { name: "Zoomy", url: "https://www.zoomy.co.nz/", available: true }
      ]
    },
    { 
      nation: "Scotland", 
      services: [
        { name: "Uber", url: "https://www.uber.com/gb/en/", available: true },
        { name: "Glasgow Taxis", url: "tel:+441414293888", available: true, phone: true },
        { name: "Edinburgh City Cabs", url: "tel:+441312281211", available: true, phone: true }
      ]
    },
    { 
      nation: "South Africa", 
      services: [
        { name: "Uber", url: "https://www.uber.com/za/en/", available: true },
        { name: "Bolt", url: "https://bolt.eu/za/", available: true },
        { name: "SATS Taxi", url: "tel:+27117951000", available: true, phone: true }
      ]
    },
    { 
      nation: "Wales", 
      services: [
        { name: "Uber", url: "https://www.uber.com/gb/en/", available: true },
        { name: "Dragon Taxis", url: "tel:+442920333333", available: true, phone: true },
        { name: "Capital Cabs", url: "tel:+442920474747", available: true, phone: true }
      ]
    }
  ];

  const handleServiceClick = (service) => {
    if (service.phone) {
      alert(`📞 Call ${service.name}: ${service.url.replace('tel:', '')}`);
    } else if (service.note) {
      alert(service.note);
    } else if (service.available) {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`❌ ${service.name} not available in this country`);
    }
  };

  const getServiceIcon = (service) => {
    if (service.phone) return '📞';
    if (service.note) return '🏨';
    if (!service.available) return '❌';
    return '🚗';
  };

  return (
    <div className="transport-page">
      {/* Professional NavBar at the top */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Transport")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner below the NavBar */}
      <div className="top-ad-banner">
        🚗 Rugby Transport Partners - Easy Stadium Access! ⚡
      </div>

      {/* Main Content */}
      <div className="transport-content">
        <div className="transport-header">
          <h1 className="transport-title">🚗 Transport & Ride Services</h1>
          <p className="transport-subtitle">Get to stadiums, airports, and hotels with trusted transport services</p>
        </div>

        {/* Transport Grid */}
        <div className="transport-grid">
          {transportServices.map((country, index) => (
            <div key={index} className="country-transport-card">
              <div className="country-header">
                {/* Replaced emoji flag with real flag image */}
                <Flag country={country.nation} size="large" />
                <div className="country-info">
                  <h3 className="country-name">{country.nation}</h3>
                  <p className="services-count">{country.services.length} transport option(s)</p>
                </div>
              </div>
              
              <div className="services-list">
                {country.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className={`service-item ${!service.available ? 'unavailable' : ''}`}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div className="service-details">
                      <span className="service-icon">{getServiceIcon(service)}</span>
                      <div className="service-info">
                        <span className="service-name">{service.name}</span>
                        {!service.available && (
                          <span className="availability-badge">Not Available</span>
                        )}
                        {service.phone && (
                          <span className="service-type">Phone Service</span>
                        )}
                        {service.note && (
                          <span className="service-note">{service.note}</span>
                        )}
                      </div>
                    </div>
                    <button className={`service-btn ${!service.available ? 'disabled' : ''}`}>
                      {service.phone ? 'Call Now' : service.note ? 'Info' : 'Book Ride'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Travel Tips */}
        <div className="transport-tips">
          <h3>🎯 Stadium Transport Tips</h3>
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">⏰</span>
              <span className="tip-text">Book transport 2-3 hours before match time</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">💰</span>
              <span className="tip-text">Surge pricing common on match days - book early</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">📍</span>
              <span className="tip-text">Use designated pickup points near stadiums</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🚆</span>
              <span className="tip-text">Consider public transport for major events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏟️ Official Stadium Parking - Pre-book Your Spot! 🅿️
      </div>
    </div>
  );
}

export default TransportPage;