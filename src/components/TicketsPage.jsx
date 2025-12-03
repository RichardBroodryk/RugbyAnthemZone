import React, { useState, useEffect } from 'react';
import './TicketsPage.css';
import NavBar from './NavBar';

const Flag = ({ country, size = 'medium' }) => {
  const getCountryFileName = (countryName) => {
    const nameMap = {
      'england': 'england',
      'newzealand': 'new-zealand',
      'southafrica': 'south-africa',
      'australia': 'australia',
      'france': 'france',
      'ireland': 'ireland',
      'wales': 'wales',
      'scotland': 'scotland',
      'italy': 'italy',
      'argentina': 'argentina',
      'japan': 'japan',
      'usa': 'united-states',
      'canada': 'canada',
      'fiji': 'fiji',
      'samoa': 'samoa',
      'tonga': 'tonga'
    };
    return nameMap[countryName] || countryName;
  };

  const fileName = getCountryFileName(country.toLowerCase());
  
  try {
    const flagImage = require(`../Assets/images/flags/${fileName}.png`);
    return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
  } catch (error) {
    try {
      const flagImage = require(`../Assets/images/flags/${fileName}.jpg`);
      return <img src={flagImage} alt={`${country} flag`} className={`flag-${size}`} />;
    } catch (error2) {
      return <div className={`flag-fallback flag-${size}`}>{country.slice(0, 3).toUpperCase()}</div>;
    }
  }
};

const TicketsPage = ({ onNavigateBack }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown timer - 30 days from now
  const calculateCountdown = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    return targetDate;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = calculateCountdown();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      console.log('Email submitted for notification:', email);
    }
  };

  const features = [
    { icon: '🎫', title: 'Instant Booking', desc: 'Secure seats in seconds' },
    { icon: '💰', title: 'Best Prices', desc: 'Guaranteed lowest prices' },
    { icon: '📱', title: 'Mobile Tickets', desc: 'Easy phone access' },
    { icon: '⭐', title: 'VIP Packages', desc: 'Exclusive experiences' },
    { icon: '🔄', title: 'Easy Refunds', desc: 'Flexible cancellation' },
    { icon: '🎯', title: 'Best Seats', desc: 'Premium selection' }
  ];

  // Rugby nations with their official ticket sellers
  const rugbyNations = [
    {
      name: "England",
      country: "england",
      ticketSellers: [
        { name: "Ticketmaster", url: "https://www.ticketmaster.co.uk/rugby-tickets", icon: "🎫" },
        { name: "RFU Official", url: "https://www.englandrugby.com/tickets", icon: "🏉" },
        { name: "StubHub", url: "https://www.stubhub.co.uk/rugby-tickets", icon: "🔄" },
        { name: "SeatGeek", url: "https://seatgeek.com/rugby-tickets", icon: "💺" }
      ]
    },
    {
      name: "New Zealand",
      country: "new-zealand",
      ticketSellers: [
        { name: "Ticketek NZ", url: "https://www.ticketek.co.nz/rugby", icon: "🎫" },
        { name: "All Blacks", url: "https://www.allblacks.com/tickets/", icon: "⚫" },
        { name: "iTICKET", url: "https://www.iticket.co.nz/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "South Africa",
      country: "south-africa",
      ticketSellers: [
        { name: "Ticketpro", url: "https://www.ticketpros.co.za/rugby", icon: "🎫" },
        { name: "Springboks", url: "https://www.springboks.rugby/tickets", icon: "💚" },
        { name: "Computicket", url: "https://www.computicket.com/rugby", icon: "💻" }
      ]
    },
    {
      name: "Australia",
      country: "australia",
      ticketSellers: [
        { name: "Ticketek AU", url: "https://www.ticketek.com.au/rugby", icon: "🎫" },
        { name: "Wallabies", url: "https://www.rugby.com.au/tickets", icon: "🟡" },
        { name: "Ticketmaster AU", url: "https://www.ticketmaster.com.au/rugby", icon: "🎫" }
      ]
    },
    {
      name: "France",
      country: "france",
      ticketSellers: [
        { name: "France Billet", url: "https://www.francebillet.com/rugby", icon: "🎫" },
        { name: "FFR Official", url: "https://www.ffr.fr/billetterie", icon: "🐓" },
        { name: "Ticketnet", url: "https://www.ticketnet.fr/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "Ireland",
      country: "ireland",
      ticketSellers: [
        { name: "Ticketmaster IE", url: "https://www.ticketmaster.ie/rugby", icon: "🎫" },
        { name: "IRFU", url: "https://www.irishrugby.ie/tickets/", icon: "☘️" },
        { name: "Aviva Stadium", url: "https://www.avivastadium.ie/tickets", icon: "🏟️" }
      ]
    },
    {
      name: "Wales",
      country: "wales",
      ticketSellers: [
        { name: "WRU Official", url: "https://www.wru.wales/tickets/", icon: "🐉" },
        { name: "Principality", url: "https://www.principalitystadium.wales/tickets", icon: "🏟️" },
        { name: "Ticketmaster UK", url: "https://www.ticketmaster.co.uk/welsh-rugby", icon: "🎫" }
      ]
    },
    {
      name: "Scotland",
      country: "scotland",
      ticketSellers: [
        { name: "Scottish Rugby", url: "https://www.scottishrugby.org/tickets", icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
        { name: "Murrayfield", url: "https://www.eticketing.co.uk/scottishrugby", icon: "🏟️" },
        { name: "Scottish Rugby Tickets", url: "https://tickets.scottishrugby.org", icon: "🎟️" }
      ]
    },
    {
      name: "Italy",
      country: "italy",
      ticketSellers: [
        { name: "FIR Official", url: "https://www.federugby.it/biglietteria/", icon: "🔵" },
        { name: "Ticketone", url: "https://www.ticketone.it/categoria/rugby/", icon: "🎫" },
        { name: "Vivaticket", url: "https://www.vivaticket.com/en/category/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "Argentina",
      country: "argentina",
      ticketSellers: [
        { name: "UAR Official", url: "https://www.uar.com.ar/entradas", icon: "💙" },
        { name: "Ticketek AR", url: "https://www.ticketek.com.ar/rugby", icon: "🎫" },
        { name: "All Access", url: "https://www.allaccess.com.ar/rugby", icon: "🎯" }
      ]
    },
    {
      name: "Japan",
      country: "japan",
      ticketSellers: [
        { name: "JRFU Official", url: "https://www.rugby-japan.jp/tickets/", icon: "🎌" },
        { name: "Lawson Ticket", url: "https://l-tike.com/rugby", icon: "🏪" },
        { name: "E-Plus", url: "https://eplus.jp/rugby", icon: "📱" }
      ]
    }
  ];

  const handleTicketSellerClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickAccess = (tournament) => {
    alert(`Directing to ${tournament} ticket information...`);
  };

  return (
    <div className="tickets-page">
      {/* Navigation Bar */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToSearch={() => console.log("Search Tickets")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎟️ Rugby World Cup 2025 Tickets - Register for Early Access! ⚡
      </div>

      <div className="tickets-content">
        <div className="tickets-hero">
          <h1 className="tickets-title">🎟️ Rugby Ticket Center</h1>
          <p className="tickets-subtitle">Your gateway to the world's best rugby matches and tournaments</p>
        </div>

        <div className="coming-soon-container">
          <div className="countdown">
            {timeLeft.days !== undefined ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : 'Loading...'}
          </div>
          
          <div className="coming-soon-text">⚡ PREMIUM TICKET PLATFORM LAUNCHING SOON ⚡</div>

          {!isSubmitted ? (
            <form className="notify-form" onSubmit={handleNotifySubmit}>
              <input
                type="email"
                className="notify-input"
                placeholder="Enter your email for exclusive early access!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="notify-btn">
                Get Early Access!
              </button>
            </form>
          ) : (
            <div className="success-message">
              ✅ You're on the list! We'll notify you 48 hours before public launch!
            </div>
          )}
        </div>

        {/* Rugby Nations Ticket Sellers Section */}
        <div className="rugby-nations">
          <h2 className="section-title">Official Rugby Ticket Sellers</h2>
          <p className="nations-subtitle">
            Direct links to official ticket sellers for each rugby nation
          </p>
          <div className="nations-grid">
            {rugbyNations.map((nation, index) => (
              <div key={index} className="nation-card">
                <div className="nation-header">
                  <div className="nation-flag">
                    <Flag country={nation.country} size="large" />
                  </div>
                  <h3 className="nation-name">{nation.name}</h3>
                </div>
                <div className="ticket-sellers">
                  {nation.ticketSellers.map((seller, sellerIndex) => (
                    <button
                      key={sellerIndex}
                      className="ticket-seller-btn"
                      onClick={() => handleTicketSellerClick(seller.url)}
                    >
                      <span className="ticket-seller-icon">{seller.icon}</span>
                      {seller.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Preview */}
        <div className="feature-preview">
          <h2 className="section-title">Why Choose Our Ticket Platform?</h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="quick-access">
          <h2 className="section-title">Quick Tournament Access</h2>
          <div className="quick-buttons">
            <button className="quick-btn" onClick={() => handleQuickAccess('World Cup 2025')}>
              🏆 World Cup 2025
            </button>
            <button className="quick-btn" onClick={() => handleQuickAccess('Six Nations')}>
              🌍 Six Nations
            </button>
            <button className="quick-btn" onClick={() => handleQuickAccess('Rugby Championship')}>
              ⭐ Rugby Championship
            </button>
            <button className="quick-btn" onClick={() => handleQuickAccess('British & Irish Lions')}>
              👑 British & Irish Lions
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏨 Complete Your Rugby Experience - Book Hotels & Flights! ✈️
      </div>
    </div>
  );
};

export default TicketsPage;