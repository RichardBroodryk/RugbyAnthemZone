import React from 'react';
import './FeatherLogo.css';

const FeatherLogo = ({ team, size = 'medium' }) => {
  // Smart import for feather logos
  const getFeatherLogo = (teamName) => {
    try {
      return require(`../Assets/images/featherlogos/${teamName}.png`);
    } catch {
      try {
        return require(`../Assets/images/featherlogos/${teamName}.jpg`);
      } catch {
        try {
          return require(`../Assets/images/featherlogos/${teamName}.jpeg`);
        } catch {
          return null;
        }
      }
    }
  };

  const logoImage = getFeatherLogo(team);
  
  if (!logoImage) {
    return (
      <div className={`feather-fallback feather-${size}`}>
        {team.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img 
      src={logoImage} 
      alt={`${team} feather logo`}
      className={`feather-logo feather-logo-${size}`}
    />
  );
};

export default FeatherLogo;