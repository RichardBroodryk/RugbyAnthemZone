import { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show for full 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Small delay before calling complete
      setTimeout(() => {
        onLoadingComplete();
      }, 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null; // Don't render during fade-out
  }

  return (
    <div className="splash-screen">
      <div className="rugby-ball">🏉</div>
      {/* Removed app title - ready for RAZ design */}
    </div>
  );
}

export default SplashScreen;