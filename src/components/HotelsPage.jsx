import './HotelsPage.css';

function HotelsPage({ onNavigateBack }) {
  const rugbyHotels = [
    { 
      nation: "England", 
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", 
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
      flag: "🇮🇪", 
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
      flag: "🇫🇷", 
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
      flag: "🇳🇿", 
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
      flag: "🇿🇦", 
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
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", 
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
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", 
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
      flag: "🇦🇺", 
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
      // In production, this would use actual affiliate tracking
      const affiliateUrl = `${hotel.bookingUrl}?aid=rugbyunionapp`;
      window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(hotel.bookingUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="hotels-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏨 Rugby World Cup 2025 - Official Hotel Partners! ⭐
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

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
                <div className="nation-flag">{country.flag}</div>
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