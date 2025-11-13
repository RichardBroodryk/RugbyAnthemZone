import './PremiumLogin.css';

function PremiumLogin({ onNavigateToHomePage, onNavigateBack }) {
  const handleSubscribe = () => {
  alert('🎉 Premium subscription activated! Welcome to Premium features!\n\nYou now have access to:\n• Official merchandise stores\n• Ad-free experience\n• Exclusive content');
  // DON'T navigate away - stay on premium page or show success message
  // Remove this line: onNavigateToHomePage();
};

  return (
    <div className="premium-login-page">
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="premium-login-content">
        <div className="premium-login-container">
          <h1 className="premium-title">Premium Subscription</h1>
          
          <form>
            <div className="form-group">
              <label className="form-label">Email Address:</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Create Password:</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Create a password"
              />
            </div>

            {/* Banking Section */}
            <div className="banking-section">
              <h3 className="banking-title">💳 Payment Information</h3>
              
              <div className="form-group">
                <label className="form-label">Card Number:</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Expiry Date:</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="MM/YY"
                  />
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">CVV:</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Cardholder Name:</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Full name on card"
                />
              </div>
            </div>

            {/* Premium Features */}
            <div className="premium-features">
              <h4>🎯 Premium Features Included:</h4>
              <ul>
                <li>Full National Anthem audio experience</li>
                <li>Pre/Post match video content</li>
                <li>Ad-free experience</li>
                <li>Exclusive behind-the-scenes footage</li>
                <li>Priority ticket access</li>
              </ul>
            </div>

            {/* TEMPORARY TEST BUTTON - REMOVE LATER */}
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <button 
                type="button"
                onClick={onNavigateToHomePage}
                style={{
                  background: '#ff6b35',
                  color: 'white',
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  margin: '10px'
                }}
              >
                🚀 TEST: Skip to Premium Homepage
              </button>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Development only - bypasses payment process
              </p>
            </div>

            <button type="button" className="premium-subscribe-btn" onClick={handleSubscribe}>
              💎 Subscribe Now - $9.99/month
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🏆 Premium Members Get Exclusive Content! ⭐
      </div>
    </div>
  );
}

export default PremiumLogin;