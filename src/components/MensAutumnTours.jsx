import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensAutumnTours({ onNavigateBack, userStatus, onGameSelect }) {
  const autumnToursData = {
    name: "Autumn Nations Series", 
    year: "2026",
    description: "November test matches featuring Northern vs Southern Hemisphere teams",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇯🇵", name: "Japan" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Twickenham Stadium – London",
        date: "Nov 7, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Murrayfield – Edinburgh",
        date: "Nov 8, 2026",
        time: "14:30",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Principality Stadium – Cardiff",
        date: "Nov 9, 2026",
        time: "17:15",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Aviva Stadium – Dublin",
        date: "Nov 14, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "Stade de France – Paris",
        date: "Nov 15, 2026",
        time: "21:00",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy" },
        team2: { flag: "🇯🇵", name: "Japan" },
        venue: "Stadio Olimpico – Rome",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={autumnToursData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensAutumnTours;