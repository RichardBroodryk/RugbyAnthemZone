import React from 'react';
import './Flag.css';

const Flag = ({ country, size = 'medium' }) => {
  // Smart import that tries .png then .jpg
  const getFlagImage = (countryName) => {
    try {
      // Try .png first
      return require(`../Assets/images/flags/${countryName}.png`);
    } catch (pngError) {
      try {
        // Try .jpg if .png doesn't exist
        return require(`../Assets/images/flags/${countryName}.jpg`);
      } catch (jpgError) {
        // Try .jpeg as last resort
        try {
          return require(`../Assets/images/flags/${countryName}.jpeg`);
        } catch {
          return null; // No image found
        }
      }
    }
  };

  const flagImage = getFlagImage(country);
  
  if (!flagImage) {
    // Fallback to country code display
    return (
      <div className={`flag-fallback flag-${size}`}>
        {country.toUpperCase().slice(0, 3)}
      </div>
    );
  }

  return (
    <img 
      src={flagImage} 
      alt={`${country} flag`}
      className={`flag flag-${size}`}
    />
  );
};

export default Flag;