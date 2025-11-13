import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensRugby7s({ onNavigateBack, userStatus, onGameSelect }) {
  const rugby7sData = {
    name: "World Rugby Sevens Series", 
    year: "2026",
    description: "Fast-paced international rugby sevens competition featuring multiple global tournaments",
    teams: [
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🇸🇲", name: "Samoa" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇰🇪", name: "Kenya" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇪🇸", name: "Spain" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇬🇧", name: "Great Britain" },
      { flag: "🇺🇾", name: "Uruguay" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇯", name: "Fiji" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Dubai Sevens Stadium – Dubai",
        date: "Dec 5, 2026",
        time: "19:30",
        status: "upcoming",
        round: "Dubai Final"
      },
      {
        id: 2,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Cape Town Stadium – Cape Town",
        date: "Dec 13, 2026",
        time: "18:00",
        status: "upcoming",
        round: "Cape Town Semi-Final"
      },
      {
        id: 3,
        team1: { flag: "🇦🇺", name: "Australia" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Allianz Stadium – Sydney",
        date: "Jan 24, 2027",
        time: "16:30",
        status: "upcoming",
        round: "Sydney Quarter-Final"
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "BC Place – Vancouver",
        date: "Feb 28, 2027",
        time: "15:45",
        status: "upcoming",
        round: "Vancouver Pool Match"
      },
      {
        id: 5,
        team1: { flag: "🇸🇲", name: "Samoa" },
        team2: { flag: "🇰🇪", name: "Kenya" },
        venue: "Hong Kong Stadium – Hong Kong",
        date: "Apr 4, 2027",
        time: "14:00",
        status: "upcoming",
        round: "Hong Kong Cup Final"
      },
      {
        id: 6,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🇨🇦", name: "Canada" },
        venue: "Twickenham Stadium – London",
        date: "May 23, 2027",
        time: "13:15",
        status: "upcoming",
        round: "London Semi-Final"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={rugby7sData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensRugby7s;