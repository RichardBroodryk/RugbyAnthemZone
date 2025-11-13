import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensRugby7s({ onNavigateBack, userStatus, onGameSelect }) {
  const womensRugby7sData = {
    name: "Women's World Rugby Sevens Series", 
    year: "2026",
    description: "Fast-paced international women's rugby sevens competition featuring global tournaments",
    teams: [
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇧🇷", name: "Brazil" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇨🇳", name: "China" },
      { flag: "🇬🇧", name: "Great Britain" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇵🇹", name: "Portugal" },
      { flag: "🇵🇱", name: "Poland" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Dubai Sevens Stadium – Dubai",
        date: "Nov 27, 2026",
        time: "18:00",
        status: "upcoming",
        round: "Dubai Cup Final"
      },
      {
        id: 2,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "Cape Town Stadium – Cape Town",
        date: "Dec 4, 2026",
        time: "16:30",
        status: "upcoming",
        round: "Cape Town Semi-Final"
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada" },
        team2: { flag: "🇫🇯", name: "Fiji" },
        venue: "Allianz Stadium – Sydney",
        date: "Jan 23, 2027",
        time: "15:15",
        status: "upcoming",
        round: "Sydney Quarter-Final"
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇮🇪", name: "Ireland" },
        venue: "BC Place – Vancouver",
        date: "Feb 27, 2027",
        time: "14:45",
        status: "upcoming",
        round: "Vancouver Pool Match"
      },
      {
        id: 5,
        team1: { flag: "🇪🇸", name: "Spain" },
        team2: { flag: "🇧🇷", name: "Brazil" },
        venue: "Hong Kong Stadium – Hong Kong",
        date: "Apr 3, 2027",
        time: "13:00",
        status: "upcoming",
        round: "Hong Kong Plate Final"
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇨🇳", name: "China" },
        venue: "Twickenham Stadium – London",
        date: "May 22, 2027",
        time: "12:30",
        status: "upcoming",
        round: "London Semi-Final"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensRugby7sData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensRugby7s;