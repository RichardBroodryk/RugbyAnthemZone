import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensSummerInternationals({ onNavigateBack, userStatus, onGameSelect }) {
  const summerInternationalsData = {
    name: "Summer Internationals", 
    year: "2026",
    description: "Mid-year test matches featuring Northern Hemisphere tours to Southern Hemisphere nations",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇫🇯", name: "Fiji" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        venue: "Eden Park – Auckland",
        date: "Jul 4, 2026",
        time: "19:35",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Jul 5, 2026",
        time: "20:05",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        venue: "Loftus Versfeld – Pretoria",
        date: "Jul 5, 2026",
        time: "17:05",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇦🇷", name: "Argentina" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Jul 11, 2026",
        time: "16:10",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇮🇪", name: "Ireland" },
        venue: "National Stadium – Tokyo",
        date: "Jul 12, 2026",
        time: "14:00",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇫🇯", name: "Fiji" },
        team2: { flag: "🇮🇹", name: "Italy" },
        venue: "ANZ National Stadium – Suva",
        date: "Jul 12, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 7,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Jul 18, 2026",
        time: "19:35",
        status: "upcoming"
      },
      {
        id: 8,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 19, 2026",
        time: "20:05",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={summerInternationalsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensSummerInternationals;