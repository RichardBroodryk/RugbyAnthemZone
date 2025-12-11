import React from 'react';
import './SignupPage.css';
import NavBar from './NavBar'; // Import consistent NavBar
import razNavIcon from '../Assets/images/raz-nav-icon.png';

function SignupPage({ 
  onNavigateToHome, 
  onNavigateToFreemium, 
  onNavigateToPremiumLogin, 
  onNavigateToSuperPremiumLogin, 
  onNavigateToTerms,
  onNavigateBack, 
  userStatus 
}) {

  const handleFreemiumSignup = () => {
    alert('🎉 Welcome to Rugby Union International!\n\nYou now have access to:\n• Basic match information\n• Live scores\n• Tournament schedules\n• Limited features');
    onNavigateToFreemium();
  };

  const handleTermsClick = (subscriptionType = 'freemium') => {
    onNavigateToTerms(subscriptionType);
  };

  const handlePrivacyClick = () => {
    alert('Privacy Policy page will be implemented soon');
  };

  return (
    <div className="signup-page">
      {/* CONSISTENT NAVBAR */}
      <NavBar 
        showBackButton={true}
        showHomeButton={true}
        showSearchButton={true}
        showProfileButton={true}
        showThemeToggle={true}
        onNavigateBack={onNavigateBack}
        onNavigateToHome={onNavigateToHome}
        onNavigateToSearch={() => console.log("Search Signup")}
        onNavigateToProfile={() => console.log("Profile clicked")}
      />

      {/* Top Ad Banner */}
      <div className="top-ad-banner">
        🎟️ Rugby World Cup 2025 Tickets - Book Now! ⚡
      </div>

      {/* Main Content */}
      <div className="signup-content">
        <div className="signup-container">
          <h1 className="signup-title">Join Rugby Union International</h1>
          
          {/* Free Forever Badge */}
          <div className="free-forever-badge">
            🆓 Free Forever - No Credit Card Required
          </div>

          {/* Feature Highlights */}
          <div className="feature-highlights">
            <h4>Start with Free Access Today:</h4>
            <ul className="feature-list">
              <li>Live match scores and updates</li>
              <li>Tournament schedules and results</li>
              <li>Team and player statistics</li>
              <li>National anthem lyrics & audio</li>
              <li>Basic fantasy league access</li>
              <li>Personalized team following</li>
            </ul>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email, Mobile, Country */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address:</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="Enter your email"
                  required
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
                <select className="country-select" required>
                  <option value="">🌍 Select Country</option>
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
                required
                minLength="6"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password:</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Confirm your password"
                required
                minLength="6"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="terms-group">
              <input 
                type="checkbox" 
                id="terms" 
                className="terms-checkbox"
                required
              />
              <label htmlFor="terms" className="terms-label">
                I agree to the <span className="terms-link" onClick={() => handleTermsClick('freemium')}>Terms & Conditions</span> and <span className="terms-link" onClick={handlePrivacyClick}>Privacy Policy</span>
              </label>
            </div>

            {/* Register Button */}
            <button 
              type="submit" 
              className="register-btn" 
              onClick={handleFreemiumSignup}
            >
              🏉 Create Free Account
            </button>

            {/* Upgrade Option */}
            <div className="upgrade-option">
              <p>Want premium features?</p>
              <div className="upgrade-buttons">
                <button 
                  type="button" 
                  className="upgrade-btn premium-upgrade"
                  onClick={() => handleTermsClick('premium')}
                >
                  ⭐ Upgrade to Premium - $9.99/month
                </button>
                <button 
                  type="button" 
                  className="upgrade-btn super-premium-upgrade"
                  onClick={() => handleTermsClick('super-premium')}
                >
                  👑 Go Super Premium - $19.99/month
                </button>
              </div>
            </div>

            {/* Login Link */}
            <div className="login-link">
              <p className="login-text">Already have an account?</p>
              <button type="button" className="login-btn" onClick={handleFreemiumSignup}>
                Sign In to Your Account
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