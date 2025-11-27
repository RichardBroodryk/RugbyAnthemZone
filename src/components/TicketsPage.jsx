import React, { useState, useEffect } from 'react';
import './TicketsPage.css';

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
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      ticketSellers: [
        { name: "Ticketmaster", url: "https://www.ticketmaster.co.uk/rugby-tickets", icon: "🎫" },
        { name: "RFU Official", url: "https://www.englandrugby.com/tickets", icon: "🏉" },
        { name: "StubHub", url: "https://www.stubhub.co.uk/rugby-tickets", icon: "🔄" },
        { name: "SeatGeek", url: "https://seatgeek.com/rugby-tickets", icon: "💺" }
      ]
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      ticketSellers: [
        { name: "Ticketek NZ", url: "https://www.ticketek.co.nz/rugby", icon: "🎫" },
        { name: "All Blacks", url: "https://www.allblacks.com/tickets/", icon: "⚫" },
        { name: "iTICKET", url: "https://www.iticket.co.nz/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "South Africa",
      flag: "🇿🇦",
      ticketSellers: [
        { name: "Ticketpro", url: "https://www.ticketpros.co.za/rugby", icon: "🎫" },
        { name: "Springboks", url: "https://www.springboks.rugby/tickets", icon: "💚" },
        { name: "Computicket", url: "https://www.computicket.com/rugby", icon: "💻" }
      ]
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      ticketSellers: [
        { name: "Ticketek AU", url: "https://www.ticketek.com.au/rugby", icon: "🎫" },
        { name: "Wallabies", url: "https://www.rugby.com.au/tickets", icon: "🟡" },
        { name: "Ticketmaster AU", url: "https://www.ticketmaster.com.au/rugby", icon: "🎫" }
      ]
    },
    {
      name: "France",
      flag: "🇫🇷",
      ticketSellers: [
        { name: "France Billet", url: "https://www.francebillet.com/rugby", icon: "🎫" },
        { name: "FFR Official", url: "https://www.ffr.fr/billetterie", icon: "🐓" },
        { name: "Ticketnet", url: "https://www.ticketnet.fr/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      ticketSellers: [
        { name: "Ticketmaster IE", url: "https://www.ticketmaster.ie/rugby", icon: "🎫" },
        { name: "IRFU", url: "https://www.irishrugby.ie/tickets/", icon: "☘️" },
        { name: "Aviva Stadium", url: "https://www.avivastadium.ie/tickets", icon: "🏟️" }
      ]
    },
    {
      name: "Wales",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      ticketSellers: [
        { name: "WRU Official", url: "https://www.wru.wales/tickets/", icon: "🐉" },
        { name: "Principality", url: "https://www.principalitystadium.wales/tickets", icon: "🏟️" },
        { name: "Ticketmaster UK", url: "https://www.ticketmaster.co.uk/welsh-rugby", icon: "🎫" }
      ]
    },
    {
      name: "Scotland",
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      ticketSellers: [
        { name: "Scottish Rugby", url: "https://www.scottishrugby.org/tickets", icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
        { name: "Murrayfield", url: "https://www.eticketing.co.uk/scottishrugby", icon: "🏟️" },
        { name: "Scottish Rugby Tickets", url: "https://tickets.scottishrugby.org", icon: "🎟️" }
      ]
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      ticketSellers: [
        { name: "FIR Official", url: "https://www.federugby.it/biglietteria/", icon: "🔵" },
        { name: "Ticketone", url: "https://www.ticketone.it/categoria/rugby/", icon: "🎫" },
        { name: "Vivaticket", url: "https://www.vivaticket.com/en/category/rugby", icon: "🎟️" }
      ]
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
      ticketSellers: [
        { name: "UAR Official", url: "https://www.uar.com.ar/entradas", icon: "💙" },
        { name: "Ticketek AR", url: "https://www.ticketek.com.ar/rugby", icon: "🎫" },
        { name: "All Access", url: "https://www.allaccess.com.ar/rugby", icon: "🎯" }
      ]
    },
    {
      name: "Japan",
      flag: "🇯🇵",
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

  return (
    <div className="tickets-page">
      {/* Top Ad Banner - Matching FlightsPage */}
      <div className="top-ad-banner">
        🎟️ Rugby World Cup 2025 Tickets - Register for Early Access! ⚡
      </div>

      {/* Standardized Navigation - Matching HomePage */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

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
          <p style={{textAlign: 'center', marginBottom: '2rem', color: '#e3f2fd'}}>
            Direct links to official ticket sellers for each rugby nation
          </p>
          <div className="nations-grid">
            {rugbyNations.map((nation, index) => (
              <div key={index} className="nation-card">
                <div className="nation-header">
                  <span className="nation-flag">{nation.flag}</span>
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

        {/* Updated Feature Preview with Smaller Cards */}
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
            <button className="quick-btn">🏆 World Cup 2025</button>
            <button className="quick-btn">🌍 Six Nations</button>
            <button className="quick-btn">⭐ Rugby Championship</button>
            <button className="quick-btn">👑 British & Irish Lions</button>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner - Matching FlightsPage */}
      <div className="bottom-ad-banner">
        🏨 Complete Your Rugby Experience - Book Hotels & Flights! ✈️
      </div>
    </div>
  );
};

export default TicketsPage;