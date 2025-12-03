import React from 'react';
import './HotelsPage.css';
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

function HotelsPage({ onNavigateBack }) {
  const rugbyHotels = [
    { 
      nation: "England", 
      stadium: "Twickenham Stadium",
      hotels: [
        { 
          name: "The Richmond Gate Hotel", 
          distance: "1.2km from stadium", 
          rating: "4.5/5", 
          price: "£180+", 
          features: ["Rooftop Bar", "Free WiFi", "Rugby Packages"],
          bookingUrl: "https://www.booking.com/hotel/gb/richmond-gate",
          affiliate: true,
          fanRating: "🎉 Electric match day atmosphere"
        },
        { 
          name: "Travelodge London Twickenham", 
          distance: "0.8km from stadium", 
          rating: "4.2/5", 
          price: "£120+", 
          features: ["Budget Friendly", "Family Rooms", "Walking Distance"],
          bookingUrl: "https://www.booking.com/hotel/gb/travelodge-london-twickenham",
          affiliate: true,
          fanRating: "🏟️ Closest hotel to Twickenham"
        },
        { 
          name: "The Petersham Hotel", 
          distance: "1.5km from stadium", 
          rating: "4.7/5", 
          price: "£220+", 
          features: ["River Views", "Fine Dining", "Luxury"],
          bookingUrl: "https://www.booking.com/hotel/gb/petersham",
          affiliate: true,
          fanRating: "⭐ Premium rugby experience"
        }
      ]
    },
    { 
      nation: "Ireland", 
      stadium: "Aviva Stadium",
      hotels: [
        { 
          name: "The Gibson Hotel", 
          distance: "500m from stadium", 
          rating: "4.6/5", 
          price: "€190+", 
          features: ["Modern Design", "Rooftop Bar", "Stadium Views"],
          bookingUrl: "https://www.booking.com/hotel/ie/the-gibson",
          affiliate: true,
          fanRating: "🍀 Ultimate Irish rugby location"
        },
        { 
          name: "Clayton Hotel Burlington Road", 
          distance: "1.1km from stadium", 
          rating: "4.4/5", 
          price: "€160+", 
          features: ["Swimming Pool", "Spa", "Family Rooms"],
          bookingUrl: "https://www.booking.com/hotel/ie/clayton-burlington-road",
          affiliate: true,
          fanRating: "🏊 Pool for post-match recovery"
        }
      ]
    },
    { 
      nation: "France", 
      stadium: "Stade de France",
      hotels: [
        { 
          name: "Novotel Paris Saint-Denis", 
          distance: "800m from stadium", 
          rating: "4.3/5", 
          price: "€170+", 
          features: ["Modern Rooms", "Restaurant", "Walking Distance"],
          bookingUrl: "https://www.booking.com/hotel/fr/novotel-paris-saint-denis",
          affiliate: true,
          fanRating: "🥖 Perfect for Six Nations weekends"
        },
        { 
          name: "Ibis Paris Saint-Denis", 
          distance: "1.0km from stadium", 
          rating: "4.1/5", 
          price: "€110+", 
          features: ["Budget Option", "Free WiFi", "Metro Access"],
          bookingUrl: "https://www.booking.com/hotel/fr/ibis-paris-saint-denis",
          affiliate: true,
          fanRating: "💰 Great value for rugby trips"
        }
      ]
    },
    { 
      nation: "New Zealand", 
      stadium: "Eden Park",
      hotels: [
        { 
          name: "Sofitel Auckland Viaduct Harbour", 
          distance: "4.5km from stadium", 
          rating: "4.7/5", 
          price: "NZ$280+", 
          features: ["Luxury", "Harbour Views", "Fine Dining"],
          bookingUrl: "https://www.booking.com/hotel/nz/sofitel-auckland-viaduct-harbour",
          affiliate: true,
          fanRating: "⚡ All Blacks team sometimes stays here"
        },
        { 
          name: "Quest Auckland Serviced Apartments", 
          distance: "3.2km from stadium", 
          rating: "4.5/5", 
          price: "NZ$180+", 
          features: ["Kitchen Facilities", "Family Friendly", "Self-Catering"],
          bookingUrl: "https://www.booking.com/hotel/nz/quest-auckland",
          affiliate: true,
          fanRating: "🍳 Perfect for extended rugby tours"
        }
      ]
    },
    { 
      nation: "South Africa", 
      stadium: "Ellis Park",
      hotels: [
        { 
          name: "The Michelangelo Hotel", 
          distance: "2.1km from stadium", 
          rating: "4.8/5", 
          price: "R2200+", 
          features: ["Luxury", "Shopping Mall", "Multiple Restaurants"],
          bookingUrl: "https://www.booking.com/hotel/za/michelangelo",
          affiliate: true,
          fanRating: "🦁 Springboks team hotel"
        },
        { 
          name: "Southern Sun Katherine Street", 
          distance: "3.5km from stadium", 
          rating: "4.3/5", 
          price: "R1200+", 
          features: ["Swimming Pool", "Bar", "Conference Facilities"],
          bookingUrl: "https://www.booking.com/hotel/za/southern-sun-katherine-street",
          affiliate: true,
          fanRating: "🍻 Popular with traveling supporters"
        }
      ]
    },
    { 
      nation: "Wales", 
      stadium: "Principality Stadium",
      hotels: [
        { 
          name: "Hilton Cardiff", 
          distance: "300m from stadium", 
          rating: "4.6/5", 
          price: "£200+", 
          features: ["City Center", "Stadium Views", "Luxury"],
          bookingUrl: "https://www.booking.com/hotel/gb/hilton-cardiff",
          affiliate: true,
          fanRating: "🐉 Unbeatable stadium location"
        },
        { 
          name: "Premier Inn Cardiff Central", 
          distance: "0.8km from stadium", 
          rating: "4.2/5", 
          price: "£90+", 
          features: ["Budget Friendly", "Reliable", "City Center"],
          bookingUrl: "https://www.booking.com/hotel/gb/premier-inn-cardiff-central",
          affiliate: true,
          fanRating: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Great for Six Nations weekends"
        }
      ]
    },
    { 
      nation: "Scotland", 
      stadium: "Murrayfield Stadium",
      hotels: [
        { 
          name: "Murrayfield Hotel & House", 
          distance: "500m from stadium", 
          rating: "4.4/5", 
          price: "£170+", 
          features: ["Walking Distance", "Traditional", "Bar"],
          bookingUrl: "https://www.booking.com/hotel/gb/murrayfield",
          affiliate: true,
          fanRating: "🏉 Literally next to the stadium"
        },
        { 
          name: "Holiday Inn Edinburgh", 
          distance: "1.2km from stadium", 
          rating: "4.3/5", 
          price: "£140+", 
          features: ["Swimming Pool", "Family Rooms", "Restaurant"],
          bookingUrl: "https://www.booking.com/hotel/gb/holiday-inn-edinburgh",
          affiliate: true,
          fanRating: "🎪 Perfect for family rugby trips"
        }
      ]
    },
    { 
      nation: "Australia", 
      stadium: "Sydney Football Stadium",
      hotels: [
        { 
          name: "Swissotel Sydney", 
          distance: "2.3km from stadium", 
          rating: "4.7/5", 
          price: "AU$250+", 
          features: ["Luxury", "City Views", "Multiple Restaurants"],
          bookingUrl: "https://www.booking.com/hotel/au/swissotel-sydney",
          affiliate: true,
          fanRating: "🦘 Wallabies team sometimes stays here"
        },
        { 
          name: "Meriton Suites Campbell Street", 
          distance: "1.8km from stadium", 
          rating: "4.5/5", 
          price: "AU$190+", 
          features: ["Apartment Style", "Kitchen", "Family Friendly"],
          bookingUrl: "https://www.booking.com/hotel/au/meriton-suites-campbell-street",
          affiliate: true,
          fanRating: "🏠 Perfect for rugby tour groups"
        }
      ]
    }
  ];

  const handleBookingClick = (hotel) => {
    if (hotel.affiliate) {
      const affiliateUrl = `${hotel.bookingUrl}?aid=rugbyunionapp`;
      window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(hotel.bookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="hotels-page">
      {/* Professional NavBar at the top */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Hotels")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner below the NavBar */}
      <div className="top-ad-banner">
        🏨 Rugby World Cup 2025 - Official Hotel Partners! ⭐
      </div>

      {/* Main Content */}
      <div className="hotels-content">
        <div className="hotels-header">
          <h1 className="hotels-title">🏨 Rugby Fan Hotels & Accommodation</h1>
          <p className="hotels-subtitle">Official partner hotels near major rugby stadiums worldwide</p>
          <div className="affiliate-notice">
            💰 <strong>Commission Partners:</strong> Booking.com • Hotels.com • Expedia
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="hotels-grid">
          {rugbyHotels.map((country, index) => (
            <div key={index} className="country-hotels-card">
              <div className="country-header">
                {/* Replaced emoji flag with real flag image */}
                <Flag country={country.nation} size="large" />
                <div className="country-info">
                  <h3 className="country-name">{country.nation}</h3>
                  <p className="stadium-name">{country.stadium}</p>
                  <p className="hotels-count">{country.hotels.length} recommended hotel(s)</p>
                </div>
              </div>
              
              <div className="hotels-list">
                {country.hotels.map((hotel, hotelIndex) => (
                  <div key={hotelIndex} className="hotel-item">
                    <div className="hotel-main">
                      <div className="hotel-info">
                        <h4 className="hotel-name">{hotel.name}</h4>
                        <p className="hotel-distance">{hotel.distance}</p>
                        <div className="hotel-features">
                          {hotel.features.map((feature, featureIndex) => (
                            <span key={featureIndex} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                        <div className="hotel-ratings">
                          <span className="official-rating">⭐ {hotel.rating}</span>
                          <span className="fan-rating">{hotel.fanRating}</span>
                        </div>
                      </div>
                      
                      <div className="hotel-pricing">
                        <div className="price-section">
                          <span className="price-from">From</span>
                          <span className="price-amount">{hotel.price}</span>
                          <span className="price-note">per night</span>
                        </div>
                        <button 
                          className={`book-now-btn ${hotel.affiliate ? 'affiliate' : ''}`}
                          onClick={() => handleBookingClick(hotel)}
                        >
                          {hotel.affiliate ? '💰 Book & Earn Commission' : 'Book Now'}
                        </button>
                        {hotel.affiliate && (
                          <div className="affiliate-badge">Partner Hotel</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="booking-tips">
          <h3>🎯 Smart Hotel Booking Tips for Rugby Fans</h3>
          <div className="tips-grid">
            <div className="tip-item">
              <span className="tip-icon">📅</span>
              <span className="tip-text">Book 6-12 months early for major tournaments</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">💰</span>
              <span className="tip-text">Prices triple on match days - book early</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">🚶</span>
              <span className="tip-text">Walking distance hotels sell out first</span>
            </div>
            <div className="tip-item">
              <span className="tip-icon">👥</span>
              <span className="tip-text">Group bookings often get better rates</span>
            </div>
          </div>
        </div>

        {/* Commission Notice */}
        <div className="commission-notice">
          <h4>💼 Affiliate Commission Program</h4>
          <p>We partner with major booking platforms. When you book through our links, we earn a small commission at no extra cost to you. This supports our platform and helps us provide more rugby content!</p>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎟️ Book Hotel + Flight + Ticket Packages - Save 15%! ✈️
      </div>
    </div>
  );
}

export default HotelsPage;