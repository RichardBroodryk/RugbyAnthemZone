import React from 'react';
import './SolidLogo.css';

const SolidLogo = ({ team, size = 'medium' }) => {
  // Smart import for solid logos
  const getSolidLogo = (teamName) => {
    try {
      return require(`../Assets/images/solidlogos/${teamName}.png`);
    } catch {
      try {
        return require(`../Assets/images/solidlogos/${teamName}.jpg`);
      } catch {
        try {
          return require(`../Assets/images/solidlogos/${teamName}.jpeg`);
        } catch {
          return null;
        }
      }
    }
  };

  const logoImage = getSolidLogo(team);
  
  if (!logoImage) {
    return (
      <div className={`solid-fallback solid-${size}`}>
        {team.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img 
      src={logoImage} 
      alt={`${team} solid logo`}
      className={`solid-logo solid-logo-${size}`}
    />
  );
};

export default SolidLogo;