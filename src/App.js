import './App.css';
import { useState } from 'react';

// Import all components
import SplashScreen from './components/SplashScreen';
import SecondarySplash from './components/SecondarySplash';
import HomeScreen from './components/HomeScreen';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import FreemiumPage from './components/FreemiumPage';
import PremiumLogin from './components/PremiumLogin';

// Tournament Components
import MensTournaments from './components/MensTournaments';
import WomensTournaments from './components/WomensTournaments';

// Men's Tournament Pages
import MensAutumnTours from './components/MensAutumnTours';
import MensSixNations from './components/MensSixNations';
import MensRugbyChampionship from './components/MensRugbyChampionship';
import MensWorldCup from './components/MensWorldCup';
import MensRivalTours from './components/MensRivalTours';
import MensSummerInternationals from './components/MensSummerInternationals';
import MensRugby7s from './components/MensRugby7s';
import MensBritishLions from './components/MensBritishLions';

// Women's Tournament Pages
import WomensSixNations from './components/WomensSixNations';
import WomensWXV from './components/WomensWXV';
import WomensWorldCup from './components/WomensWorldCup';
import WomensPacificFour from './components/WomensPacificFour';
import WomensRugby7s from './components/WomensRugby7s';
import WomensAutumnInternationals from './components/WomensAutumnInternationals';
import WomensSummerTests from './components/WomensSummerTests';

// Feature Pages
import GameOverview from './components/GameOverview';
import NationalAnthems from './components/NationalAnthems';
import TournamentMerchandise from './components/TournamentMerchandise';

// NEW FEATURE PAGES
import FantasyLeagues from './components/FantasyLeagues';
import FinalResultsPage from './components/FinalResultsPage';
import PodcastsPage from './components/PodcastsPage';
import PPVSystem from './components/PPVSystem';
import PPASystem from './components/PPASystem';
import GameStats from './components/GameStats';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userStatus, setUserStatus] = useState(null);
  const [screenHistory, setScreenHistory] = useState(['splash']);
  const [currentGame, setCurrentGame] = useState(null);
  const [currentTournament, setCurrentTournament] = useState(null);

  // ========== NAVIGATION METHODS ==========
  
  const navigateTo = (screen, data = null) => {
    if (screen === 'game-overview' && data) {
      setCurrentGame(data);
    }
    if (screen.includes('tournament') && data) {
      setCurrentTournament(data);
    }
    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
  };

  const navigateBack = () => {
    if (screenHistory.length > 1) {
      const previousScreen = screenHistory[screenHistory.length - 2];
      setScreenHistory(prev => prev.slice(0, -1));
      setCurrentScreen(previousScreen);
    }
  };

  // Core Navigation
  const goToHome = () => navigateTo('home');
  const goToSignup = () => navigateTo('signup');
  const goToFreemiumPage = () => navigateTo('freemium');
  const goToHomePage = () => navigateTo('homepage');

  // Tournament Navigation
  const goToMensTournaments = () => navigateTo('mens-tournaments');
  const goToWomensTournaments = () => navigateTo('womens-tournaments');

  // Feature Navigation
  const goToFantasyLeagues = (tournamentData = null) => navigateTo('fantasy-leagues', tournamentData);
  const goToFinalResults = (tournamentData = null) => navigateTo('final-results', tournamentData);
  const goToPodcasts = (tournamentData = null) => navigateTo('podcasts', tournamentData);
  const goToPPV = (gameData = null) => navigateTo('ppv', gameData);
  const goToPPA = (gameData = null) => navigateTo('ppa', gameData);
  const goToGameStats = (gameData = null) => navigateTo('game-stats', gameData);
  const goToNationalAnthems = () => navigateTo('national-anthems');
  const goToTournamentMerchandise = () => navigateTo('tournament-merchandise');

  // Authentication Navigation
  const goToFreemiumLogin = () => {
    setUserStatus('freemium');
    navigateTo('signup');
  };

  const goToPremiumSubscription = () => {
    setUserStatus('premium');
    navigateTo('premium-login');
  };

  const goToAppropriatePage = () => {
    if (userStatus === 'freemium') {
      navigateTo('freemium');
    } else if (userStatus === 'premium') {
      navigateTo('homepage');
    } else {
      alert('Please choose Freemium Sign In or Premium Subscribe first.');
    }
  };

  // ========== SCREEN CONFIGURATIONS ==========
  
  const screenConfigs = {
    // Initial Screens
    'splash': { component: SplashScreen, props: { onLoadingComplete: () => navigateTo('secondary') } },
    'secondary': { component: SecondarySplash, props: { onComplete: goToHome, onNavigateBack: navigateBack } },
    'home': { 
      component: HomeScreen, 
      props: { 
        onNavigateToFreemiumLogin: goToFreemiumLogin,
        onNavigateToPremiumLogin: goToPremiumSubscription,
        onNavigateToAppropriatePage: goToAppropriatePage,
        userStatus: userStatus,
        onNavigateBack: navigateBack
      }
    },

    // Authentication Screens
    'signup': { 
      component: SignupPage, 
      props: { 
        onNavigateToHome: goToHome,
        onNavigateToFreemium: goToFreemiumPage,
        onNavigateBack: navigateBack,
        userStatus: userStatus
      }
    },
    'premium-login': { 
      component: PremiumLogin, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToHomePage: goToHomePage
      }
    },

    // Main Home Pages
    'freemium': { 
      component: FreemiumPage, 
      props: { 
        onNavigateToPremium: () => navigateTo('premium-login'),
        onNavigateBack: navigateBack,
        onNavigateToMensTournaments: goToMensTournaments,
        onNavigateToWomensTournaments: goToWomensTournaments
      }
    },
    'homepage': { 
      component: HomePage, 
      props: { 
        onNavigateToSignup: goToSignup,
        onNavigateBack: navigateBack,
        onNavigateToMensTournaments: goToMensTournaments,
        onNavigateToWomensTournaments: goToWomensTournaments,
        onNavigateToFantasyLeagues: goToFantasyLeagues,
        onNavigateToFinalResults: goToFinalResults,
        onNavigateToPodcasts: goToPodcasts,
        onNavigateToPPV: goToPPV,
        onNavigateToAudio: goToPPA,
        onNavigateToNationalAnthems: goToNationalAnthems,
        onNavigateToTournamentMerchandise: goToTournamentMerchandise
      }
    },

    // Tournament Selection
    'mens-tournaments': { 
      component: MensTournaments, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToMensAutumnTours: () => navigateTo('mens-autumn-tours'),
        onNavigateToMensSixNations: () => navigateTo('mens-six-nations'),
        onNavigateToMensRugbyChampionship: () => navigateTo('mens-rugby-championship'),
        onNavigateToMensWorldCup: () => navigateTo('mens-world-cup'),
        onNavigateToMensRivalTours: () => navigateTo('mens-rival-tours'),
        onNavigateToMensSummerInternationals: () => navigateTo('mens-summer-internationals'),
        onNavigateToMensRugby7s: () => navigateTo('mens-rugby-7s'),
        onNavigateToMensBritishLions: () => navigateTo('mens-british-lions'),
        onNavigateToFantasyLeagues: goToFantasyLeagues,
        onNavigateToFinalResults: goToFinalResults,
        onNavigateToPodcasts: goToPodcasts
      }
    },
    'womens-tournaments': { 
      component: WomensTournaments, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToWomensSixNations: () => navigateTo('womens-six-nations'),
        onNavigateToWomensWXV: () => navigateTo('womens-wxv'),
        onNavigateToWomensWorldCup: () => navigateTo('womens-world-cup'),
        onNavigateToWomensPacificFour: () => navigateTo('womens-pacific-four'),
        onNavigateToWomensRugby7s: () => navigateTo('womens-rugby-7s'),
        onNavigateToWomensAutumnInternationals: () => navigateTo('womens-autumn-internationals'),
        onNavigateToWomensSummerTests: () => navigateTo('womens-summer-tests'),
        onNavigateToFantasyLeagues: goToFantasyLeagues,
        onNavigateToFinalResults: goToFinalResults,
        onNavigateToPodcasts: goToPodcasts
      }
    },

    // Feature Pages
    'fantasy-leagues': { component: FantasyLeagues, props: { onNavigateBack: navigateBack, tournament: currentTournament } },
    'final-results': { component: FinalResultsPage, props: { onNavigateBack: navigateBack, tournament: currentTournament } },
    'podcasts': { component: PodcastsPage, props: { onNavigateBack: navigateBack, tournament: currentTournament } },
    'ppv': { component: PPVSystem, props: { onNavigateBack: navigateBack, game: currentGame } },
    'ppa': { component: PPASystem, props: { onNavigateBack: navigateBack, game: currentGame } },
    'game-stats': { component: GameStats, props: { onNavigateBack: navigateBack, game: currentGame } },
    'national-anthems': { component: NationalAnthems, props: { onNavigateBack: navigateBack } },
    'tournament-merchandise': { component: TournamentMerchandise, props: { onNavigateBack: navigateBack, userStatus: userStatus, game: currentGame } },
    'game-overview': { 
      component: GameOverview, 
      props: { 
        game: currentGame,
        userStatus: userStatus,
        onNavigateBack: navigateBack,
        onNavigateToAnthem: () => navigateTo('national-anthems'),
        onNavigateToMerchandise: () => navigateTo('tournament-merchandise'),
        onNavigateToStats: () => goToGameStats(currentGame),
        onNavigateToPPV: () => goToPPV(currentGame),
        onNavigateToAudio: () => goToPPA(currentGame),
        onNavigateToFantasy: () => goToFantasyLeagues(currentGame?.tournament),
        onNavigateToPodcasts: () => goToPodcasts(currentGame?.tournament)
      }
    }
  };

  // ========== TOURNAMENT PAGE CONFIGURATION ==========
  
  const tournamentPageProps = {
    onNavigateBack: navigateBack,
    userStatus: userStatus,
    onGameSelect: (gameData) => navigateTo('game-overview', gameData),
    onNavigateToFantasy: goToFantasyLeagues,
    onNavigateToResults: goToFinalResults,
    onNavigateToPodcasts: goToPodcasts,
    onNavigateToPPV: goToPPV,
    onNavigateToAudio: goToPPA
  };

  const tournamentScreens = {
    // Men's Tournament Pages
    'mens-autumn-tours': MensAutumnTours,
    'mens-six-nations': MensSixNations,
    'mens-rugby-championship': MensRugbyChampionship,
    'mens-world-cup': MensWorldCup,
    'mens-rival-tours': MensRivalTours,
    'mens-summer-internationals': MensSummerInternationals,
    'mens-rugby-7s': MensRugby7s,
    'mens-british-lions': MensBritishLions,
    
    // Women's Tournament Pages
    'womens-six-nations': WomensSixNations,
    'womens-wxv': WomensWXV,
    'womens-world-cup': WomensWorldCup,
    'womens-pacific-four': WomensPacificFour,
    'womens-rugby-7s': WomensRugby7s,
    'womens-autumn-internationals': WomensAutumnInternationals,
    'womens-summer-tests': WomensSummerTests
  };

  // ========== RENDER LOGIC ==========

  // Check if current screen is configured
  const screenConfig = screenConfigs[currentScreen];
  if (screenConfig) {
    const Component = screenConfig.component;
    return <Component {...screenConfig.props} />;
  }

  // Check if current screen is a tournament page
  const TournamentComponent = tournamentScreens[currentScreen];
  if (TournamentComponent) {
    return <TournamentComponent {...tournamentPageProps} />;
  }

  // Fallback to HomeScreen
  return (
    <HomeScreen 
      onNavigateToFreemiumLogin={goToFreemiumLogin}
      onNavigateToPremiumLogin={goToPremiumSubscription}
      onNavigateToAppropriatePage={goToAppropriatePage}
      userStatus={userStatus}
      onNavigateBack={navigateBack}
    />
  );
}

export default App;