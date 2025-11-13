import React from 'react';
import TournamentOverview from './TournamentOverview';

function MensSixNations({ onNavigateBack, userStatus, onGameSelect }) {
  const sixNationsData = {
    name: "Men's Six Nations Championship", 
    year: "2026",
    description: "Europe's premier rugby union competition featuring six elite nations",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🇮🇹", name: "Italy" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇮🇪", name: "Ireland" },
        venue: "Stade de France – Paris",
        date: "Feb 2, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 2, 
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        venue: "Principality Stadium – Cardiff",
        date: "Feb 3, 2026",
        time: "16:45", 
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={sixNationsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default MensSixNations;