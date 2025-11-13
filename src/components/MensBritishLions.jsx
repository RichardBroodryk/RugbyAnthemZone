import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensBritishLions({ onNavigateBack, userStatus, onGameSelect }) {
  const britishLionsData = {
    name: "British & Irish Lions Tour", 
    year: "2025",
    description: "Legendary touring team featuring the best players from England, Ireland, Scotland, and Wales",
    teams: [
      { flag: "🦁", name: "British & Irish Lions" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇯🇵", name: "Japan" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Suncorp Stadium – Brisbane",
        date: "Jun 28, 2025",
        time: "20:05",
        status: "upcoming",
        series: "First Test"
      },
      {
        id: 2,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Melbourne Cricket Ground – Melbourne",
        date: "Jul 5, 2025",
        time: "20:05",
        status: "upcoming",
        series: "Second Test"
      },
      {
        id: 3,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Sydney Cricket Ground – Sydney",
        date: "Jul 12, 2025",
        time: "20:05",
        status: "upcoming",
        series: "Third Test"
      },
      {
        id: 4,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "ANZ National Stadium – Suva",
        date: "Jul 19, 2025",
        time: "15:00",
        status: "upcoming",
        series: "Warm-up Match"
      },
      {
        id: 5,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇯🇵", name: "Japan" },
        venue: "National Stadium – Tokyo",
        date: "Jun 21, 2025",
        time: "14:00",
        status: "upcoming",
        series: "Tour Opener"
      },
      {
        id: 6,
        team1: { flag: "🦁", name: "British & Irish Lions" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Estadio José Amalfitani – Buenos Aires",
        date: "Jun 14, 2025",
        time: "16:10",
        status: "upcoming",
        series: "Warm-up Match"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={britishLionsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensBritishLions;