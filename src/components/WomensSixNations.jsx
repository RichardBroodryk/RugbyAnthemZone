import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensSixNations({ onNavigateBack, userStatus, onGameSelect }) {
  const womensSixNationsData = {
    name: "Women's Six Nations", 
    year: "2026",
    description: "Premier European women's rugby union competition featuring six elite nations",
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
        venue: "Stade Jean-Bouin – Paris",
        date: "Mar 21, 2026",
        time: "15:00",
        status: "upcoming"
      },
      {
        id: 2,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        venue: "Cardiff Arms Park – Cardiff",
        date: "Mar 22, 2026",
        time: "14:15",
        status: "upcoming"
      },
      {
        id: 3,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇮🇹", name: "Italy" },
        venue: "Sandy Park – Exeter",
        date: "Mar 23, 2026",
        time: "12:45",
        status: "upcoming"
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        team2: { flag: "🇫🇷", name: "France" },
        venue: "Scotstoun Stadium – Glasgow",
        date: "Mar 28, 2026",
        time: "19:35",
        status: "upcoming"
      },
      {
        id: 5,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        venue: "Aviva Stadium – Dublin",
        date: "Mar 29, 2026",
        time: "14:15",
        status: "upcoming"
      },
      {
        id: 6,
        team1: { flag: "🇮🇹", name: "Italy" },
        team2: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        venue: "Stadio Sergio Lanfranchi – Parma",
        date: "Mar 30, 2026",
        time: "15:00",
        status: "upcoming"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensSixNationsData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensSixNations;