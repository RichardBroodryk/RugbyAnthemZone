import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensAutumnInternationals({ onNavigateBack, userStatus, onGameSelect }) {
  const womensAutumnInternationalsData = {
    name: "Women's Autumn Internationals", 
    year: "2026",
    description: "End-of-year women's test matches featuring cross-hemisphere competitions",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇯🇵", name: "Japan" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Twickenham Stadium – London",
        date: "Nov 7, 2026",
        time: "17:30",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Cardiff Arms Park – Cardiff",
        date: "Nov 8, 2026",
        time: "14:15",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        team2: { flag: "🇨🇦", name: "Canada" },
        venue: "Scotstoun Stadium – Glasgow",
        date: "Nov 8, 2026",
        time: "19:35",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "Aviva Stadium – Dublin",
        date: "Nov 14, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Stade Jean-Bouin – Paris",
        date: "Nov 15, 2026",
        time: "20:00",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy" },
        team2: { flag: "🇯🇵", name: "Japan" },
        venue: "Stadio Sergio Lanfranchi – Parma",
        date: "Nov 16, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 7,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇨🇦", name: "Canada" },
        venue: "Sandy Park – Exeter",
        date: "Nov 21, 2026",
        time: "12:45",
        status: "upcoming"
      },
      {
        id: 8,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "Principality Stadium – Cardiff",
        date: "Nov 22, 2026",
        time: "14:30",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensAutumnInternationalsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensAutumnInternationals;