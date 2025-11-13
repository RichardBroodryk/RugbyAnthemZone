import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensRivalTours({ onNavigateBack, userStatus, onGameSelect }) {
  const rivalToursData = {
    name: "Rival Tours & Series", 
    year: "2026",
    description: "Historic rivalry matches and special touring series between rugby nations",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🇹🇴", name: "Tonga" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Twickenham Stadium – London",
        date: "Jun 13, 2026",
        time: "15:00",
        status: "upcoming",
        series: "Springbok Tour"
      },
      {
        id: 2,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Eden Park – Auckland",
        date: "Jun 20, 2026",
        time: "19:35",
        status: "upcoming",
        series: "Bledisloe Cup"
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "Principality Stadium – Cardiff",
        date: "Jun 27, 2026",
        time: "15:00",
        status: "upcoming",
        series: "Pacific Nations Tour"
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Aviva Stadium – Dublin",
        date: "Jul 4, 2026",
        time: "17:15",
        status: "upcoming",
        series: "Pumas Tour"
      },
      {
        id: 5,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        team2: { flag: "🇹🇴", name: "Tonga" },
        venue: "Murrayfield – Edinburgh",
        date: "Jul 11, 2026",
        time: "15:00",
        status: "upcoming",
        series: "Pacific Nations Tour"
      },
      {
        id: 6,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jul 18, 2026",
        time: "20:05",
        status: "upcoming",
        series: "Rugby Championship Warm-up"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={rivalToursData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensRivalTours;