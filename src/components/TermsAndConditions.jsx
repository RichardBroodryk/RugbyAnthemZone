import React, { useState } from 'react';
import './TermsAndConditions.css';

function TermsAndConditions({ onNavigateBack, onAcceptTerms, subscriptionType }) {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (!accepted) {
      alert('Please accept the Terms and Conditions to continue.');
      return;
    }
    
    // Use the onAcceptTerms prop to handle the acceptance
    if (onAcceptTerms) {
      onAcceptTerms(subscriptionType || 'freemium');
    } else {
      // Fallback if prop not provided
      alert('Terms and Conditions accepted! Returning to signup...');
      onNavigateBack();
    }
  };

  const handleCheckboxChange = (e) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className="terms-page">
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
      <div className="terms-content">
        <div className="terms-container">
          <div className="terms-header">
            <h1 className="terms-title">Terms & Conditions</h1>
            <p className="terms-subtitle">Last updated: December 2024</p>
            <div className="rugby-badge">
              🏉 Rugby Union International - {subscriptionType ? `${subscriptionType.charAt(0).toUpperCase() + subscriptionType.slice(1)} Subscription` : 'Account Registration'}
            </div>
          </div>

          <div className="terms-scroll-container">
            {/* Agreement Section */}
            <section className="terms-section">
              <h2>1. Agreement to Terms</h2>
              <p>By accessing and using Rugby Union International ("the App"), you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            {/* User Accounts */}
            <section className="terms-section">
              <h2>2. User Accounts</h2>
              <p>When you create an account with us, you guarantee that:</p>
              <ul>
                <li>You are above the age of 13</li>
                <li>All registration information you submit is truthful and accurate</li>
                <li>You will maintain the accuracy of such information</li>
                <li>Your use of the App does not violate any applicable law or regulation</li>
              </ul>
            </section>

            {/* Subscription Services */}
            <section className="terms-section">
              <h2>3. Subscription Services</h2>
              <h3>3.1 Freemium Access</h3>
              <p>Our freemium service provides basic access to:</p>
              <ul>
                <li>Live match scores and updates</li>
                <li>Tournament schedules</li>
                <li>Basic team statistics</li>
                <li>National anthem content</li>
              </ul>

              <h3>3.2 Premium Services</h3>
              <p>Premium and Super Premium subscriptions include:</p>
              <ul>
                <li>Ad-free experience (Super Premium only)</li>
                <li>Enhanced statistics and analytics</li>
                <li>Priority access to ticket sales</li>
                <li>Exclusive content and features</li>
              </ul>

              <h3>3.3 Payment and Billing</h3>
              <p>Subscription fees are billed in advance on a monthly basis. You can cancel your subscription at any time through your account settings.</p>
            </section>

            {/* Intellectual Property */}
            <section className="terms-section">
              <h2>4. Intellectual Property</h2>
              <p>The App and its original content, features, and functionality are owned by Rugby Union International and are protected by international copyright, trademark, and other intellectual property laws.</p>
              <p>Rugby match data, team logos, and player statistics are used under license from respective rugby governing bodies.</p>
            </section>

            {/* User Content */}
            <section className="terms-section">
              <h2>5. User Content</h2>
              <p>Our App allows you to post, link, store, share and otherwise make available certain information, text, or other material. You are responsible for the content that you post to the App.</p>
            </section>

            {/* Prohibited Uses */}
            <section className="terms-section">
              <h2>6. Prohibited Uses</h2>
              <p>You may use the App only for lawful purposes and in accordance with these Terms. You agree not to use the App:</p>
              <ul>
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any advertising or promotional material without our consent</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use of the App</li>
                <li>To attempt to interfere with the proper working of the App</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="terms-section">
              <h2>7. Termination</h2>
              <p>We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.</p>
            </section>

            {/* Limitation of Liability */}
            <section className="terms-section">
              <h2>8. Limitation of Liability</h2>
              <p>In no event shall Rugby Union International, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
            </section>

            {/* Disclaimer */}
            <section className="terms-section">
              <h2>9. Disclaimer</h2>
              <p>Your use of the App is at your sole risk. The App is provided on an "AS IS" and "AS AVAILABLE" basis. The App is provided without warranties of any kind, whether express or implied.</p>
              <p>We do not guarantee the accuracy, completeness, or usefulness of any match predictions, statistics, or other information provided through the App.</p>
            </section>

            {/* Governing Law */}
            <section className="terms-section">
              <h2>10. Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.</p>
            </section>

            {/* Changes to Terms */}
            <section className="terms-section">
              <h2>11. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
            </section>

            {/* Contact Information */}
            <section className="terms-section">
              <h2>12. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="contact-info">
                <p>📧 support@rugbyunioninternational.com</p>
                <p>🌐 www.rugbyunioninternational.com/support</p>
                <p>📞 +44 (0) 20 7946 0958</p>
              </div>
            </section>

            {/* Acceptance Section */}
            <section className="acceptance-section">
              <div className="acceptance-checkbox">
                <input 
                  type="checkbox" 
                  id="accept-terms" 
                  className="terms-checkbox" 
                  checked={accepted}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="accept-terms" className="acceptance-label">
                  I have read, understood, and agree to be bound by these Terms and Conditions
                </label>
              </div>
              
              <div className="acceptance-buttons">
                <button 
                  className="accept-btn" 
                  onClick={handleAccept}
                  disabled={!accepted}
                  style={!accepted ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
                >
                  ✅ Accept & Continue
                </button>
                <button className="decline-btn" onClick={onNavigateBack}>
                  ❌ Decline & Return
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Ad Banner */}
      <div className="bottom-ad-banner">
        🛒 Official Rugby Merchandise - Free Shipping! 🚚
      </div>
    </div>
  );
}

export default TermsAndConditions;