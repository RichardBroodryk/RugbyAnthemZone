import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensSummerTests({ onNavigateBack, userStatus, onGameSelect }) {
  const womensSummerTestsData = {
    name: "Women's Summer Tests", 
    year: "2026",
    description: "Mid-year women's test matches featuring Southern Hemisphere tours and competitions",
    teams: [
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇪🇸", name: "Spain" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        venue: "Eden Park – Auckland",
        date: "Jul 4, 2026",
        time: "17:05",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Jul 5, 2026",
        time: "19:45",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        venue: "BC Place – Vancouver",
        date: "Jul 5, 2026",
        time: "19:00",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇺🇸", name: "USA" },
        team2: { flag: "🇮🇪", name: "Ireland" },
        venue: "Dignity Health Sports Park – Los Angeles",
        date: "Jul 11, 2026",
        time: "17:00",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🇪🇸", name: "Spain" },
        venue: "Ellis Park – Johannesburg",
        date: "Jul 12, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "Chichibunomiya Stadium – Tokyo",
        date: "Jul 12, 2026",
        time: "14:00",
        status: "upcoming"
      },
      {
        id: 7,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Jul 18, 2026",
        time: "17:05",
        status: "upcoming"
      },
      {
        id: 8,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 19, 2026",
        time: "19:45",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensSummerTestsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensSummerTests;
