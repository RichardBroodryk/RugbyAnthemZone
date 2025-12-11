import React from 'react';
import './NavBar.css';
import ThemeToggle from './ThemeToggle';

// Import your logo
import razNavIcon from '../Assets/images/raz-nav-icon.png';

const NavBar = ({ 
  showBackButton = true,
  showHomeButton = true,
  showSearchButton = true,
  showProfileButton = true,
  showThemeToggle = true,
  onNavigateBack,
  onNavigateToHome,
  onNavigateToSearch,
  onNavigateToProfile
}) => {
  return (
    <nav className="professional-navbar">
      {/* Left: Large App Logo */}
      <div className="nav-logo-section">
        <img 
          src={razNavIcon} 
          alt="Rugby Anthem Zone" 
          className="nav-main-logo" 
        />
      </div>

      {/* Center: Navigation Icons */}
      <div className="nav-icons-section">
        {showBackButton && (
          <button 
            className="nav-icon back-icon" 
            onClick={onNavigateBack}
            aria-label="Go back"
            title="Back"
          >
            ◀
          </button>
        )}
        
        {showHomeButton && (
          <button 
            className="nav-icon home-icon" 
            onClick={onNavigateToHome}
            aria-label="Home"
            title="Home"
          >
            🏠
          </button>
        )}
        
        {showSearchButton && (
          <button 
            className="nav-icon search-icon" 
            onClick={onNavigateToSearch}
            aria-label="Search"
            title="Search"
          >
            🔍
          </button>
        )}
        
        {showProfileButton && (
          <button 
            className="nav-icon profile-icon" 
            onClick={onNavigateToProfile}
            aria-label="Profile"
            title="Profile"
          >
            👤
          </button>
        )}
      </div>

      {/* Right: Theme Toggle */}
      <div className="nav-theme-section">
        {showThemeToggle && <ThemeToggle />}
      </div>
    </nav>
  );
};

export default NavBar;