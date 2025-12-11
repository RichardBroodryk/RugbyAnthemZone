import { useEffect, useState, useRef } from 'react';
import './SplashScreen.css';
import razSplash from '../Assets/images/RAZ Splashscreen.png';

function SplashScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element - USE YOUR CORRECT PORT
    const audio = new Audio('http://localhost:3001/sounds/raz-voice.mp3');
    audio.volume = 0.7;
    audioRef.current = audio;

    // Function to play audio
    const playAudio = () => {
      if (!audioPlayed && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setAudioPlayed(true);
            console.log("✅ RAZ voice played");
          })
          .catch(error => {
            console.log("⚠️ Audio autoplay blocked:", error);
            // Don't worry - some browsers require interaction
          });
      }
    };

    // Try to play immediately (may be blocked)
    playAudio();

    // Also try playing after a short delay (some browsers allow this)
    const audioRetry = setTimeout(playAudio, 100);

    // Show for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 300);
    }, 3000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearTimeout(audioRetry);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [onLoadingComplete, audioPlayed]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="splash-screen">
      <img 
        src={razSplash} 
        alt="Rugby Anthem Zone" 
        className="splash-image"
      />
    </div>
  );
}

export default SplashScreen;