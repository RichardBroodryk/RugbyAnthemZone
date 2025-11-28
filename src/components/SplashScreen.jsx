import { useEffect, useState } from 'react';
import './SplashScreen.css';
// Updated import path - Capital A, lowercase i
import razSplash from '../Assets/images/RAZ Splashscreen.png';

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
      {/* Your custom design image */}
      <img 
        src={razSplash} 
        alt="Rugby Anthem Zone" 
        className="splash-image"
      />
    </div>
  );
}

export default SplashScreen;