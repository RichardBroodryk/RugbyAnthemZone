import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensPacificFour({ onNavigateBack, userStatus, onGameSelect }) {
  const pacificFourData = {
    name: "Women's Pacific Four Series", 
    year: "2026",
    description: "Annual women's rugby competition featuring Pacific rim nations",
    teams: [
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇫🇯", name: "Fiji" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Eden Park – Auckland",
        date: "May 16, 2026",
        time: "19:05",
        status: "upcoming",
        round: "Round 1"
      },
      {
        id: 2,
        team1: { flag: "🇨🇦", name: "Canada" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "BC Place – Vancouver",
        date: "May 17, 2026",
        time: "19:00",
        status: "upcoming",
        round: "Round 1"
      },
      {
        id: 3,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "Sydney Cricket Ground – Sydney",
        date: "May 23, 2026",
        time: "19:45",
        status: "upcoming",
        round: "Round 2"
      },
      {
        id: 4,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇨🇦", name: "Canada" },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "May 24, 2026",
        time: "17:05",
        status: "upcoming",
        round: "Round 2"
      },
      {
        id: 5,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "Chichibunomiya Stadium – Tokyo",
        date: "May 30, 2026",
        time: "14:00",
        status: "upcoming",
        round: "Pacific Series"
      },
      {
        id: 6,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇨🇦", name: "Canada" },
        venue: "Perth Stadium – Perth",
        date: "May 31, 2026",
        time: "18:15",
        status: "upcoming",
        round: "Round 3"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={pacificFourData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensPacificFour;