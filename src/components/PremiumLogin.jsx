import './PremiumLogin.css';
import razNavIcon from '../Assets/images/raz-nav-icon.png';

function PremiumLogin({ onNavigateToHomePage, onNavigateBack }) {
  const handleSubscribe = () => {
    alert('🎉 Premium subscription activated! Welcome to Premium features!\n\nYou now have access to:\n• Official merchandise stores\n• Ad-free experience\n• Exclusive content');
    // DON'T navigate away - stay on premium page or show success message
    // Remove this line: onNavigateToHomePage();
  };

  return (
    <div className="premium-login-page">
      {/* NEW: Professional Navbar */}
      <nav className="raz-navbar">
        <div className="nav-logo-section">
          <img 
            src={razNavIcon} 
            alt="Rugby Anthem Zone" 
            className="nav-main-logo" 
          />
        </div>

        <div className="nav-icons-section">
          <button className="nav-icon back-icon" onClick={onNavigateBack}>
            ←
          </button>
          <button className="nav-icon home-icon">
            🏠
          </button>
          <button className="nav-icon search-icon">
            🔍
          </button>
          <button className="nav-icon profile-icon">
            👤
          </button>
          <button className="nav-icon menu-icon">
            ☰
          </button>
        </div>
      </nav>

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🏆 Premium Members Get Exclusive Content! ⭐
      </div>

      {/* Main Content */}
      <div className="premium-login-content">
        <div className="premium-login-container">
          <h1 className="premium-title">Premium Subscription</h1>
          
          {/* Price Display */}
          <div className="price-display">
            <div className="price-amount">$9.99</div>
            <div className="price-period">per month</div>
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

              <div className="security-badge">Secure SSL Encryption</div>
            </div>

            {/* PREMIUM FEATURES - NOW WITH GOLD BACKGROUND */}
            <div className="premium-features">
              <h4>🎯 Premium Features Included:</h4>
              <ul>
                <li>Full National Anthem audio experience</li>
                <li>Pre/Post match video content</li>
                <li>Ad-free experience</li>
                <li>Exclusive behind-the-scenes footage</li>
                <li>Priority ticket access</li>
                <li>Official merchandise store access</li>
                <li>Live match statistics</li>
                <li>Fantasy league premium features</li>
              </ul>
            </div>

            {/* TEMPORARY TEST BUTTON - REMOVE LATER */}
            <div className="test-button-container">
              <button 
                type="button"
                className="test-button"
                onClick={onNavigateToHomePage}
              >
                🚀 TEST: Skip to Premium Homepage
              </button>
              <p className="test-note">
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
        🛒 Official Rugby Merchandise - Premium Members Get 20% Off! 🎁
      </div>
    </div>
  );
}

export default PremiumLogin;