import './SuperPremiumLogin.css';

function SuperPremiumLogin({ onNavigateToHomePage, onNavigateBack }) {
  const handleSubscribe = () => {
    alert('🎉 SUPER PREMIUM subscription activated! Welcome to VIP features!\n\nYou now have access to:\n• Complete ad-free experience\n• 4K Ultra HD streaming\n• VIP customer support\n• Early access to new features\n• Exclusive super premium content');
    // DON'T navigate away - stay on super premium page or show success message
  };

  return (
    <div className="super-premium-login-page">
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="super-premium-login-content">
        <div className="super-premium-login-container">
          <h1 className="super-premium-title">Super Premium VIP</h1>
          
          {/* VIP Badge */}
          <div className="vip-badge">
            <div className="vip-icon">👑</div>
            <div className="vip-text">VIP EXCLUSIVE ACCESS</div>
          </div>

          {/* Price Display */}
          <div className="price-display">
            <div className="price-amount">$19.99</div>
            <div className="price-period">per month</div>
          </div>

          {/* Premium Comparison */}
          <div className="premium-comparison">
            <div className="comparison-title">Choose Your Experience</div>
            <div className="comparison-grid">
              <div className="comparison-item">
                <div className="comparison-label">Premium</div>
                <div className="premium-price">$9.99/month</div>
              </div>
              <div className="comparison-item">
                <div className="comparison-label">Super Premium</div>
                <div className="super-premium-price">$19.99/month</div>
              </div>
            </div>
          </div>

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

            {/* Payment Methods */}
            <div className="payment-methods">
              <div className="payment-method selected">
                <div className="payment-icon">💳</div>
                <div className="payment-name">Card</div>
              </div>
              <div className="payment-method">
                <div className="payment-icon">🔵</div>
                <div className="payment-name">PayPal</div>
              </div>
              <div className="payment-method">
                <div className="payment-icon">📱</div>
                <div className="payment-name">Mobile</div>
              </div>
            </div>

            {/* Banking Section */}
            <div className="banking-section">
              <h3 className="banking-title">💳 VIP Payment Information</h3>
              
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

              <div className="security-badge">Secure SSL Encryption</div>
            </div>

            {/* SUPER PREMIUM FEATURES - ORANGE/RED GRADIENT */}
            <div className="super-premium-features">
              <h4>👑 Super Premium VIP Features:</h4>
              <ul>
                <li>Complete ad-free experience</li>
                <li>4K Ultra HD streaming quality</li>
                <li>VIP priority customer support</li>
                <li>Early access to new features</li>
                <li>Exclusive behind-the-scenes content</li>
                <li>Personalized content recommendations</li>
                <li>Multi-device simultaneous streaming</li>
                <li>Offline download capability</li>
                <li>All Premium features included</li>
              </ul>
            </div>

            {/* TEMPORARY TEST BUTTON - REMOVE LATER */}
            <div className="test-button-container">
              <button 
                type="button"
                className="test-button"
                onClick={onNavigateToHomePage}
              >
                🚀 TEST: Skip to Super Premium Homepage
              </button>
              <p className="test-note">
                Development only - bypasses payment process
              </p>
            </div>

            <button type="button" className="super-premium-subscribe-btn" onClick={handleSubscribe}>
              👑 Subscribe Now - $19.99/month
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        👑 SUPER PREMIUM VIP - The Ultimate Rugby Experience! 🏆
      </div>
    </div>
  );
}

export default SuperPremiumLogin;