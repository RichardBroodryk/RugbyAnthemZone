import React from 'react';
import TournamentOverview from './TournamentOverview';

function WomensWXV({ onNavigateBack, userStatus, onGameSelect }) {
  const womensWXVData = {
    name: "Women's WXV", 
    year: "2026",
    description: "Global women's rugby competition featuring teams from multiple continents across three tiers",
    teams: [
      { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
      { flag: "🇫🇷", name: "France" },
      { flag: "🇳🇿", name: "New Zealand" },
      { flag: "🇦🇺", name: "Australia" },
      { flag: "🇨🇦", name: "Canada" },
      { flag: "🇺🇸", name: "USA" },
      { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
      { flag: "🇿🇦", name: "South Africa" },
      { flag: "🇮🇪", name: "Ireland" },
      { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
      { flag: "🇯🇵", name: "Japan" },
      { flag: "🇪🇸", name: "Spain" }
    ],
    matches: [
      {
        id: 1,
        team1: { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England" },
        team2: { flag: "🇳🇿", name: "New Zealand" },
        venue: "Twickenham Stadium – London",
        date: "Oct 10, 2026",
        time: "17:30",
        status: "upcoming",
        tier: "WXV 1"
      },
      {
        id: 2,
        team1: { flag: "🇫🇷", name: "France" },
        team2: { flag: "🇦🇺", name: "Australia" },
        venue: "Stade Jean-Bouin – Paris",
        date: "Oct 11, 2026",
        time: "20:00",
        status: "upcoming",
        tier: "WXV 1"
      },
      {
        id: 3,
        team1: { flag: "🇨🇦", name: "Canada" },
        team2: { flag: "🇺🇸", name: "USA" },
        venue: "BC Place – Vancouver",
        date: "Oct 17, 2026",
        time: "19:00",
        status: "upcoming",
        tier: "WXV 1"
      },
      {
        id: 4,
        team1: { flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales" },
        team2: { flag: "🇿🇦", name: "South Africa" },
        venue: "Cardiff Arms Park – Cardiff",
        date: "Oct 18, 2026",
        time: "14:30",
        status: "upcoming",
        tier: "WXV 2"
      },
      {
        id: 5,
        team1: { flag: "🇮🇪", name: "Ireland" },
        team2: { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland" },
        venue: "Aviva Stadium – Dublin",
        date: "Oct 24, 2026",
        time: "15:00",
        status: "upcoming",
        tier: "WXV 2"
      },
      {
        id: 6,
        team1: { flag: "🇯🇵", name: "Japan" },
        team2: { flag: "🇪🇸", name: "Spain" },
        venue: "Chichibunomiya Stadium – Tokyo",
        date: "Oct 25, 2026",
        time: "14:00",
        status: "upcoming",
        tier: "WXV 3"
      }
    ]
  };

  return (
    <TournamentOverview 
      onNavigateBack={onNavigateBack}
      tournamentData={womensWXVData}
      onGameSelect={onGameSelect}
      userStatus={userStatus}
    />
  );
}

export default WomensWXV;