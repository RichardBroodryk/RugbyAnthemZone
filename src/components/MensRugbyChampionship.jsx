import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensRugbyChampionship({ onNavigateBack, userStatus, onGameSelect }) {
  const rugbyChampionshipData = {
    name: "Rugby Championship", 
    year: "2026",
    description: "Southern Hemisphere's premier rugby competition featuring the top four nations",
    teams: [
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇦🇷", name: "Argentina" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Aug 8, 2026",
        time: "20:05",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Ellis Park – Johannesburg",
        date: "Aug 9, 2026",
        time: "17:05",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Eden Park – Auckland",
        date: "Aug 15, 2026",
        time: "19:35",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇦🇷", name: "Argentina" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Aug 16, 2026",
        time: "16:10",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Perth Stadium – Perth",
        date: "Aug 29, 2026",
        time: "20:05",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Forsyth Barr Stadium – Dunedin",
        date: "Aug 30, 2026",
        time: "19:35",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={rugbyChampionshipData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensRugbyChampionship;