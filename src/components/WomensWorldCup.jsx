import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensWorldCup({ onNavigateBack, userStatus, onGameSelect }) {
  const womensWorldCupData = {
    name: "Women's Rugby World Cup", 
    year: "2025",
    description: "The premier international women's rugby union competition, showcasing the best teams globally",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇧🇷", name: "Brazil" },
      { flag: "🇰🇿", name: "Kazakhstan" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Twickenham Stadium – London",
        date: "Sep 12, 2025",
        time: "20:00",
        status: "upcoming",
        round: "Pool A"
      },
      {
        id: 2,
        team1: { flag: "🇳🇿", name: "New Zealand" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Eden Park – Auckland",
        date: "Sep 13, 2025",
        time: "19:35",
        status: "upcoming",
        round: "Pool B"
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "BC Place – Vancouver",
        date: "Sep 14, 2025",
        time: "17:00",
        status: "upcoming",
        round: "Pool C"
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇮🇪", name: "Ireland" },
        venue: "Principality Stadium – Cardiff",
        date: "Sep 19, 2025",
        time: "14:30",
        status: "upcoming",
        round: "Pool D"
      },
      {
        id: 5,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🇯🇵", name: "Japan" },
        venue: "Ellis Park – Johannesburg",
        date: "Sep 20, 2025",
        time: "15:00",
        status: "upcoming",
        round: "Pool A"
      },
      {
        id: 6,
        team1: { flag: "🇫🇯", name: "Fiji" },
        team2: { flag: "🇧🇷", name: "Brazil" },
        venue: "ANZ National Stadium – Suva",
        date: "Sep 21, 2025",
        time: "13:00",
        status: "upcoming",
        round: "Pool B"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensWorldCupData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensWorldCup;