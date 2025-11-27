import './StadiumMap.css';

function VenueSelector({ venues, selectedVenue, onVenueChange }) {
  return (
    <div className="venue-selector">
      {venues.map((venue, index) => (
        <button
          key={index}
          className={`venue-btn ${selectedVenue === venue ? 'active' : ''}`}
          onClick={() => onVenueChange(venue)}
        >
          🏟️ {venue}
        </button>
      ))}
    </div>
  );
}

export default VenueSelector;