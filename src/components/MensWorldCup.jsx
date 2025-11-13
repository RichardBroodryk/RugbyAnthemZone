import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensWorldCup({ onNavigateBack, userStatus, onGameSelect }) {
  const worldCupData = {
    name: "Rugby World Cup", 
    year: "2027",
    description: "The premier international rugby union competition, held every four years",
    teams: [
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇦🇷", name: "Argentina" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇫🇯", name: "Fiji" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🇬🇪", name: "Georgia" },
      { flag: "🇼🇸", name: "Samoa" },
      { flag: "🇹🇴", name: "Tonga" },
      { flag: "🇺🇾", name: "Uruguay" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Stade de France – Paris",
        date: "Sep 8, 2027",
        time: "21:00",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇦🇷", name: "Argentina" },
        venue: "Stade Vélodrome – Marseille",
        date: "Sep 9, 2027",
        time: "21:00",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🇿🇦", name: "South Africa" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        venue: "Allianz Riviera – Nice",
        date: "Sep 10, 2027",
        time: "17:45",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Parc Olympique Lyonnais – Lyon",
        date: "Sep 11, 2027",
        time: "21:00",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇫🇯", name: "Fiji" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        venue: "Stade de Bordeaux – Bordeaux",
        date: "Sep 16, 2027",
        time: "17:45",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇬🇪", name: "Georgia" },
        venue: "Stade de la Beaujoire – Nantes",
        date: "Sep 17, 2027",
        time: "15:00",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={worldCupData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensWorldCup;