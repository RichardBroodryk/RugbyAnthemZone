import './TicketsPage.css';

function TicketsPage({ onNavigateBack }) {
  const ticketVendors = [
    { nation: "Argentina", flag: "🇦🇷", vendor: "Ticketek Argentina", url: "https://www.ticketek.com.ar/" },
    { nation: "Australia", flag: "🇦🇺", vendor: "Ticketek Australia", url: "https://www.ticketek.com.au/" },
    { nation: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", vendor: "Ticketmaster UK", url: "https://www.ticketmaster.co.uk/" },
    { nation: "Fiji", flag: "🇫🇯", vendor: "Fiji Rugby Union", url: "https://www.fijirugby.com/tickets" },
    { nation: "France", flag: "🇫🇷", vendor: "France Billet", url: "https://www.francebillet.com/" },
    { nation: "Ireland", flag: "🇮🇪", vendor: "Ticketmaster Ireland", url: "https://www.ticketmaster.ie/" },
    { nation: "Italy", flag: "🇮🇹", vendor: "TicketOne", url: "https://www.ticketone.it/" },
    { nation: "Japan", flag: "🇯🇵", vendor: "ePlus", url: "https://eplus.jp/" },
    { nation: "New Zealand", flag: "🇳🇿", vendor: "Ticketek NZ", url: "https://www.ticketek.co.nz/" },
    { nation: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", vendor: "Scottish Rugby Tickets", url: "https://www.scottishrugby.org/tickets" },
    { nation: "South Africa", flag: "🇿🇦", vendor: "Ticketpro", url: "https://www.ticketpros.co.za/" },
    { nation: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", vendor: "Welsh Rugby Union Tickets", url: "https://www.wru.wales/tickets" }
  ];

  const handleVendorClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="tickets-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Rugby World Cup 2025 Tickets - Limited Availability! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="tickets-content">
        <div className="tickets-header">
          <h1 className="tickets-title">🎟️ Official Match Tickets</h1>
          <p className="tickets-subtitle">Purchase tickets directly from official rugby union vendors</p>
        </div>

        {/* Tickets Grid */}
        <div className="tickets-grid">
          {ticketVendors.map((vendor, index) => (
            <div 
              key={index}
              className="ticket-vendor-card"
              onClick={() => handleVendorClick(vendor.url)}
            >
              <div className="vendor-header">
                <div className="nation-flag">{vendor.flag}</div>
                <div className="nation-info">
                  <h3 className="nation-name">{vendor.nation}</h3>
                  <p className="vendor-name">{vendor.vendor}</p>
                </div>
              </div>
              
              <div className="vendor-action">
                <button className="purchase-btn">
                  🎫 Purchase Tickets
                </button>
                <div className="official-badge">✅ Official Vendor</div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="tickets-notice">
          <h3>📋 Important Information</h3>
          <p>• All links direct to official rugby union ticket vendors</p>
          <p>• Purchase from authorized sellers to avoid scams</p>
          <p>• Check venue COVID-19 policies before purchasing</p>
          <p>• Prices and availability subject to change</p>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🎽 Official Tournament Merchandise - Shop Now! 🛒
      </div>
    </div>
  );
}

export default TicketsPage;