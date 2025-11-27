import './ThemeToggle.css';

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('rugbyApp-theme', isDark ? 'dark' : 'light');
  };

  const isDarkMode = document.body.classList.contains('dark-theme');

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
      <span className="toggle-label">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}

export default ThemeToggle;