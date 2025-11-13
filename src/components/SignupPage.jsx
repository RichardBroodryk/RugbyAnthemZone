import './SignupPage.css';

function SignupPage({ onNavigateToHome, onNavigateToFreemium, onNavigateBack, userStatus }) {

  return (
    <div className="signup-page">
      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎟️ Rugby World Cup 2025 Tickets - Book Now! ⚡
      </div>

      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="nav-btn" onClick={onNavigateBack}>← Back</button>
        <button className="nav-btn">🏠 Home</button>
        <button className="nav-btn">🔍 Search</button>
        <button className="nav-btn">👤 Profile</button>
      </nav>

      {/* Main Content */}
      <div className="signup-content">
        <div className="signup-container">
          <h1 className="signup-title">Freemium Sign Up</h1>
          
          <form>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your full name"
              />
            </div>

            {/* Email, Mobile, Country - Stacked vertically */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address:</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number:</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Country:</label>
                <select className="country-select">
                  <option>🌍 Select Country</option>
                  <option>🇿🇦 South Africa</option>
                  <option>🇳🇿 New Zealand</option>
                  <option>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</option>
                  <option>🇦🇺 Australia</option>
                  <option>🇫🇷 France</option>
                  <option>🇮🇪 Ireland</option>
                  <option>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</option>
                  <option>🇦🇷 Argentina</option>
                  <option>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</option>
                  <option>🇯🇵 Japan</option>
                  <option>🇮🇹 Italy</option>
                  <option>🇫🇯 Fiji</option>
                  <option>🇼🇸 Samoa</option>
                  <option>🇹🇴 Tonga</option>
                  <option>🇺🇸 USA</option>
                  <option>🇬🇪 Georgia</option>
                  <option>🇷🇴 Romania</option>
                </select>
              </div>
            </div>

            {/* Passwords */}
            <div className="form-group">
              <label className="form-label">Create Password:</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password:</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Confirm your password"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="terms-group">
              <input 
                type="checkbox" 
                id="terms" 
                className="terms-checkbox"
              />
              <label htmlFor="terms" className="terms-label">
                I agree to Terms & Conditions
              </label>
            </div>

            {/* Register Button - Always go to Freemium for now */}
            <button 
              type="button" 
              className="register-btn" 
              onClick={onNavigateToFreemium}
            >
              📝 Continue to Freemium
            </button>

            {/* Login Link - Also go to Freemium */}
            <div className="login-link">
              <p className="login-text">Already have an account?</p>
              <button type="button" className="login-btn" onClick={onNavigateToFreemium}>
                Continue to Freemium
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🛒 Official Rugby Merchandise - Free Shipping! 🚚
      </div>
    </div>
  );
}

export default SignupPage;
