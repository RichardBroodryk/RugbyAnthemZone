import React, { useState } from 'react';
import './App.css';

// Core Components
import SplashScreen from './components/SplashScreen';
import SecondarySplash from './components/SecondarySplash';
import HomeScreen from './components/HomeScreen';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

// NEW: Anthem Pages Test Imports
import SouthAfricaAnthem from './components/SouthAfricaAnthem';
import NewZealandAnthem from './components/NewZealandAnthem';

// Tournament Selector
import TournamentSelector from './components/TournamentSelector';

// Authentication
import SignupPage from './components/SignupPage';
import FreemiumPage from './components/FreemiumPage';
import PremiumLogin from './components/PremiumLogin';
import SuperPremiumLogin from './components/SuperPremiumLogin';
import TermsAndConditions from './components/TermsAndConditions';

// Tournaments - Men's
import MensTournaments from './components/MensTournaments';
import MensAutumnTours from './components/MensAutumnTours';
import MensSixNations from './components/MensSixNations';
import MensRugbyChampionship from './components/MensRugbyChampionship';
import MensWorldCup from './components/MensWorldCup';
import MensRivalTours from './components/MensRivalTours';
import MensSummerInternationals from './components/MensSummerInternationals';
import MensRugby7s from './components/MensRugby7s';
import MensBritishLions from './components/MensBritishLions';

// Tournaments - Women's
import WomensTournaments from './components/WomensTournaments';
import WomensSixNations from './components/WomensSixNations';
import WomensWXV from './components/WomensWXV';
import WomensWorldCup from './components/WomensWorldCup';
import WomensPacificFour from './components/WomensPacificFour';
import WomensRugby7s from './components/WomensRugby7s';
import WomensAutumnInternationals from './components/WomensAutumnInternationals';
import WomensSummerTests from './components/WomensSummerTests';

// Features
import GameOverview from './components/GameOverview';
import StadiumPage from './components/StadiumPage';
import UserProfile from './components/UserProfile';
import MyTeams from './components/MyTeams';
import NewsAggregation from './components/NewsAggregation';
import GlobalCalendar from './components/GlobalCalendar';
import NationalAnthems from './components/NationalAnthems';
import TournamentMerchandise from './components/TournamentMerchandise';
import FantasyLeagues from './components/FantasyLeagues';
import FinalResultsPage from './components/FinalResultsPage';
import PodcastsPage from './components/PodcastsPage';
import PPVSystem from './components/PPVSystem';
import PPASystem from './components/PPASystem';
import GameStats from './components/GameStats';
import LiveScoresPage from './components/LiveScoresPage';
import TicketsPage from './components/TicketsPage';
import FlightsPage from './components/FlightsPage';
import HotelsPage from './components/HotelsPage';
import TransportPage from './components/TransportPage';
import NotificationsPage from './components/NotificationsPage';
import MatchVideosPage from './components/MatchVideosPage';
import LiveMatchCenter from './components/LiveMatchCenter';

// Loyalty System
import LoyaltyPage from './components/LoyaltyPage';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userStatus, setUserStatus] = useState(null);
  const [screenHistory, setScreenHistory] = useState(['splash']);
  const [currentGame, setCurrentGame] = useState(null);
  const [currentTournament, setCurrentTournament] = useState(null);
  const [selectedStadium, setSelectedStadium] = useState('Twickenham Stadium');
  const [currentSubscription, setCurrentSubscription] = useState('freemium');

  const [userPreferences, setUserPreferences] = useState({
    favoriteTeams: ['New Zealand', 'South Africa'],
    favoritePlayers: [],
    followedTournaments: ['Six Nations', 'Rugby Championship'],
    featuredTournament: null,
    profileSettings: {
      rugbyFocus: 'both',
      notificationsEnabled: true
    },
    notificationPreferences: {
      matchAlerts: true,
      scoreUpdates: true,
      newsAlerts: false,
      fantasyReminders: true,
      ticketAlerts: true,
      calendarSync: true
    }
  });

  // ========== NAVIGATION METHODS ==========
  
  const navigateTo = (screen, data = null) => {
    if (screen === 'game-overview' && data) {
      setCurrentGame(data);
    }
    if (screen.includes('tournament') && data) {
      setCurrentTournament(data);
    }
    if (screen === 'stadium-map' && data) {
      setSelectedStadium(data.stadium || 'Twickenham Stadium');
    }
    if (screen === 'terms-and-conditions' && data) {
      setCurrentSubscription(data.subscriptionType || 'freemium');
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

  // NEW: Tournament Selection Handler
  const handleTournamentSelected = (tournamentData) => {
    const updatedPreferences = {
      ...userPreferences,
      featuredTournament: tournamentData,
      followedTournaments: [...new Set([...userPreferences.followedTournaments, tournamentData.name])]
    };
    saveUserPreferences(updatedPreferences);
    navigateTo('homepage');
  };

  // Save user preferences
  const saveUserPreferences = (newPreferences) => {
    setUserPreferences(newPreferences);
    localStorage.setItem('rugbyApp_preferences', JSON.stringify(newPreferences));
  };

  // Core Navigation
  const goToHome = () => navigateTo('home');
  const goToSignup = () => navigateTo('signup');
  const goToFreemiumPage = () => navigateTo('freemium');
  const goToHomePage = () => navigateTo('homepage');
  const goToPremiumLogin = () => navigateTo('premium-login');
  const goToSuperPremiumLogin = () => navigateTo('super-premium-login');
  const goToSearch = () => navigateTo('search');
  const goToUserProfile = () => navigateTo('user-profile');
  const goToMyTeams = () => navigateTo('my-teams');
  const goToNews = () => navigateTo('news');
  const goToCalendar = () => navigateTo('calendar');
  const goToLoyalty = () => navigateTo('loyalty');
  const goToTermsAndConditions = (subscriptionType = 'freemium') => {
    navigateTo('terms-and-conditions', { subscriptionType });
  };

  // NEW: Tournament Selector Navigation
  const goToTournamentSelector = () => navigateTo('tournament-selector');

  // Tournament Navigation
  const goToMensTournaments = () => navigateTo('mens-tournaments');
  const goToWomensTournaments = () => navigateTo('womens-tournaments');

  // Direct Tournament Navigation
  const goToMensSixNations = () => navigateTo('mens-six-nations');
  const goToWomensSixNations = () => navigateTo('womens-six-nations');
  const goToWomensWXV = () => navigateTo('womens-wxv');
  const goToWomensWorldCup = () => navigateTo('womens-world-cup');
  const goToWomensSummerTests = () => navigateTo('womens-summer-tests');
  const goToMensWorldCup = () => navigateTo('mens-world-cup');
  const goToMensRugbyChampionship = () => navigateTo('mens-rugby-championship');
  const goToMensAutumnTours = () => navigateTo('mens-autumn-tours');
  const goToMensSummerInternationals = () => navigateTo('mens-summer-internationals');
  const goToWomensPacificFour = () => navigateTo('womens-pacific-four');
  const goToWomensAutumnInternationals = () => navigateTo('womens-autumn-internationals');
  const goToMensRugby7s = () => navigateTo('mens-rugby-7s');
  const goToWomensRugby7s = () => navigateTo('womens-rugby-7s');
  const goToMensBritishLions = () => navigateTo('mens-british-lions');
  const goToMensRivalTours = () => navigateTo('mens-rival-tours');

  // Feature Navigation
  const goToFantasyLeagues = (tournamentData = null) => navigateTo('fantasy-leagues', tournamentData);
  const goToFinalResults = (tournamentData = null) => navigateTo('final-results', tournamentData);
  const goToPodcasts = (tournamentData = null) => navigateTo('podcasts', tournamentData);
  const goToPPV = (gameData = null) => navigateTo('ppv', gameData);
  const goToPPA = (gameData = null) => navigateTo('ppa', gameData);
  const goToGameStats = (gameData = null) => navigateTo('game-stats', gameData);
  const goToNationalAnthems = () => navigateTo('national-anthems');
  const goToTournamentMerchandise = () => navigateTo('tournament-merchandise');
  const goToLiveScores = () => navigateTo('live-scores');
  const goToTickets = () => navigateTo('tickets');
  const goToFlights = () => navigateTo('flights');
  const goToHotels = () => navigateTo('hotels');
  const goToUber = () => navigateTo('transport');
  const goToNotifications = () => navigateTo('notifications');
  const goToMatchVideos = () => navigateTo('match-videos');
  const goToLiveMatchCenter = () => navigateTo('live-match-center');

  // Stadium Navigation
  const goToStadiumMap = (stadiumData = null) => {
    navigateTo('stadium-map', stadiumData);
  };

  // Game Navigation
  const goToGameOverview = (gameData) => navigateTo('game-overview', gameData);

  // Authentication Navigation
  const goToFreemiumLogin = () => {
    setUserStatus('freemium');
    navigateTo('signup');
  };

  const goToPremiumSubscription = () => {
    setUserStatus('premium');
    navigateTo('premium-login');
  };

  const goToSuperPremiumSubscription = () => {
    setUserStatus('super-premium');
    navigateTo('super-premium-login');
  };

  const goToAppropriatePage = () => {
    if (userStatus === 'freemium') {
      navigateTo('freemium');
    } else if (userStatus === 'premium') {
      navigateTo('homepage');
    } else if (userStatus === 'super-premium') {
      navigateTo('homepage');
    } else {
      alert('Please choose Freemium Sign In or Premium Subscribe first.');
    }
  };

  // Terms Acceptance Handler
  const handleAcceptTerms = (subscriptionType) => {
    console.log(`Terms accepted for ${subscriptionType} subscription`);
    
    setUserStatus(subscriptionType === 'freemium' ? 'freemium' : 
                 subscriptionType === 'premium' ? 'premium' : 'super-premium');
    
    if (subscriptionType === 'premium') {
      navigateTo('premium-login');
    } else if (subscriptionType === 'super-premium') {
      navigateTo('super-premium-login');
    } else {
      alert('🎉 Welcome to Rugby Union International!\n\nYou now have access to:\n• Basic match information\n• Live scores\n• Tournament schedules\n• Limited features');
      navigateTo('freemium');
    }
  };

  // Stadium Handler
  const handleSeatSelect = (seatInfo) => {
    console.log('Seat selected:', seatInfo);
    alert(`Selected ${seatInfo.section} at ${seatInfo.stadium}`);
  };

  // Search Navigation Handler
  const handleSearchNavigation = (tournamentName) => {
    const tournamentMap = {
      "Men's Six Nations": goToMensSixNations,
      "Women's Six Nations": goToWomensSixNations,
      "Women's World Cup": goToWomensWorldCup,
      "WXV": goToWomensWXV,
      "Women's Summer Tests": goToWomensSummerTests
    };
    tournamentMap[tournamentName]?.();
  };

  // ========== SCREEN CONFIGURATIONS ==========
  
  const screenConfigs = {
    // Initial Screens
    'splash': { 
      component: SplashScreen, 
      props: { 
        onLoadingComplete: () => navigateTo('secondary') 
      } 
    },
    'secondary': { 
      component: SecondarySplash, 
      props: { 
        onComplete: goToHome, 
        onNavigateBack: navigateBack 
      } 
    },
    'home': { 
      component: HomeScreen, 
      props: { 
        onNavigateToFreemiumLogin: goToFreemiumLogin,
        onNavigateToPremiumLogin: goToPremiumSubscription,
        onNavigateToSuperPremiumLogin: goToSuperPremiumSubscription,
        onNavigateToAppropriatePage: goToAppropriatePage,
        userStatus: userStatus,
        onNavigateBack: navigateBack
      }
    },

    // NEW: Tournament Selector Screen
    'tournament-selector': {
      component: TournamentSelector,
      props: {
        onNavigateBack: navigateBack,
        onTournamentSelected: handleTournamentSelected,
        userPreferences: userPreferences,
        onNavigateToMensSixNations: goToMensSixNations,
        onNavigateToWomensSixNations: goToWomensSixNations,
        onNavigateToMensWorldCup: goToMensWorldCup,
        onNavigateToWomensWorldCup: goToWomensWorldCup,
        onNavigateToMensRugbyChampionship: goToMensRugbyChampionship,
        onNavigateToMensAutumnTours: goToMensAutumnTours,
        onNavigateToMensSummerInternationals: goToMensSummerInternationals,
        onNavigateToWomensWXV: goToWomensWXV,
        onNavigateToWomensPacificFour: goToWomensPacificFour,
        onNavigateToWomensAutumnInternationals: goToWomensAutumnInternationals,
        onNavigateToWomensSummerTests: goToWomensSummerTests,
        onNavigateToMensRugby7s: goToMensRugby7s,
        onNavigateToWomensRugby7s: goToWomensRugby7s,
        onNavigateToMensBritishLions: goToMensBritishLions,
        onNavigateToMensRivalTours: goToMensRivalTours
      }
    },

    // NEW: Anthem Test Pages
    'south-africa-test': {
      component: SouthAfricaAnthem,
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToHome: goToHomePage
      }
    },
    
    'new-zealand-test': {
      component: NewZealandAnthem,
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToHome: goToHomePage
      }
    },

    // Authentication Screens
    'signup': { 
      component: SignupPage, 
      props: { 
        onNavigateToHome: goToHome,
        onNavigateToFreemium: goToFreemiumPage,
        onNavigateToPremiumLogin: goToPremiumLogin,
        onNavigateToSuperPremiumLogin: goToSuperPremiumLogin,
        onNavigateToTerms: goToTermsAndConditions,
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
    'super-premium-login': { 
      component: SuperPremiumLogin, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToHomePage: goToHomePage
      }
    },
    'terms-and-conditions': {
      component: TermsAndConditions,
      props: {
        onNavigateBack: navigateBack,
        onAcceptTerms: handleAcceptTerms,
        subscriptionType: currentSubscription
      }
    },

    // Main Home Pages
    'freemium': { 
      component: FreemiumPage, 
      props: { 
        onNavigateToPremium: goToPremiumLogin,
        onNavigateToSuperPremium: goToSuperPremiumLogin,
        onNavigateBack: navigateBack,
        onNavigateToMensTournaments: goToMensTournaments,
        onNavigateToWomensTournaments: goToWomensTournaments,
        onNavigateToLiveScores: goToLiveScores,
        onNavigateToTickets: goToTickets,
        onNavigateToNationalAnthems: goToNationalAnthems,
        onNavigateToNotifications: goToNotifications,
        onNavigateToGlobalCalendar: goToCalendar
      }
    },
    'homepage': { 
      component: HomePage, 
      props: { 
        onNavigateToSignup: goToSignup,
        onNavigateBack: navigateBack,
        onNavigateToSearch: goToSearch,
        onNavigateToUserProfile: goToUserProfile,
        onNavigateToMyTeams: goToMyTeams,
        onNavigateToNews: goToNews,
        onNavigateToCalendar: goToCalendar,
        onNavigateToMensTournaments: goToMensTournaments,
        onNavigateToWomensTournaments: goToWomensTournaments,
        onNavigateToFantasyLeagues: goToFantasyLeagues,
        onNavigateToFinalResults: goToFinalResults,
        onNavigateToPodcasts: goToPodcasts,
        onNavigateToPPV: goToPPV,
        onNavigateToAudio: goToPPA,
        onNavigateToGameStats: goToGameStats,
        onNavigateToNationalAnthems: goToNationalAnthems,
        onNavigateToTournamentMerchandise: goToTournamentMerchandise,
        onNavigateToLiveScores: goToLiveScores,
        onNavigateToTickets: goToTickets,
        onNavigateToFlights: goToFlights,
        onNavigateToHotels: goToHotels,
        onNavigateToUber: goToUber,
        onNavigateToNotifications: goToNotifications,
        onNavigateToMatchVideos: goToMatchVideos,
        onNavigateToLiveMatchCenter: goToLiveMatchCenter,
        onNavigateToMensSixNations: goToMensSixNations,
        onNavigateToWomensSixNations: goToWomensSixNations,
        onNavigateToLoyalty: goToLoyalty,
        // NEW: Anthem test navigation
        onNavigateToAnthemTest: (screen) => navigateTo(screen),
        // Tournament navigation for FeaturedTournament
        onNavigateToTournamentSelector: goToTournamentSelector,
        onNavigateToMensWorldCup: goToMensWorldCup,
        onNavigateToWomensWorldCup: goToWomensWorldCup,
        onNavigateToMensRugbyChampionship: goToMensRugbyChampionship,
        onNavigateToMensAutumnTours: goToMensAutumnTours,
        onNavigateToMensSummerInternationals: goToMensSummerInternationals,
        onNavigateToWomensWXV: goToWomensWXV,
        onNavigateToWomensPacificFour: goToWomensPacificFour,
        onNavigateToWomensAutumnInternationals: goToWomensAutumnInternationals,
        onNavigateToWomensSummerTests: goToWomensSummerTests,
        onNavigateToMensRugby7s: goToMensRugby7s,
        onNavigateToWomensRugby7s: goToWomensRugby7s,
        onNavigateToMensBritishLions: goToMensBritishLions,
        onNavigateToMensRivalTours: goToMensRivalTours,
        userPreferences: userPreferences
      }
    },

    // Loyalty System
    'loyalty': { 
      component: LoyaltyPage, 
      props: { 
        onNavigateBack: navigateBack,
        userPreferences: userPreferences,
        onNavigateToTickets: goToTickets,
        onNavigateToMerchandise: goToTournamentMerchandise
      }
    },

    // Search
    'search': { 
      component: SearchPage, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToTournament: handleSearchNavigation,
        userPreferences: userPreferences
      }
    },

    // Stadium
    'stadium-map': {
      component: StadiumPage,
      props: {
        onNavigateBack: navigateBack,
        stadium: selectedStadium,
        onSeatSelect: handleSeatSelect,
        interactive: true,
        showInfo: true
      }
    },

    // News & Calendar Screens
    'news': { 
      component: NewsAggregation, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToUserProfile: goToUserProfile
      }
    },
    'calendar': { 
      component: GlobalCalendar, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToUserProfile: goToUserProfile,
        onNavigateToTickets: goToTickets
      }
    },

    // Personalization Screens
    'user-profile': { 
      component: UserProfile, 
      props: { 
        onNavigateBack: navigateBack,
        userPreferences: userPreferences,
        onSavePreferences: saveUserPreferences
      }
    },
    'my-teams': { 
      component: MyTeams, 
      props: { 
        onNavigateBack: navigateBack,
        userPreferences: userPreferences,
        onNavigateToMensTournaments: goToMensTournaments,
        onNavigateToWomensTournaments: goToWomensTournaments,
        onNavigateToMensSixNations: goToMensSixNations,
        onNavigateToWomensSixNations: goToWomensSixNations
      }
    },

    // Tournament Selection Screens
    'mens-tournaments': { 
      component: MensTournaments, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToMensAutumnTours: goToMensAutumnTours,
        onNavigateToMensSixNations: goToMensSixNations,
        onNavigateToMensRugbyChampionship: goToMensRugbyChampionship,
        onNavigateToMensWorldCup: goToMensWorldCup,
        onNavigateToMensRivalTours: goToMensRivalTours,
        onNavigateToMensSummerInternationals: goToMensSummerInternationals,
        onNavigateToMensRugby7s: goToMensRugby7s,
        onNavigateToMensBritishLions: goToMensBritishLions
      }
    },
    'womens-tournaments': { 
      component: WomensTournaments, 
      props: { 
        onNavigateBack: navigateBack,
        onNavigateToWomensSixNations: goToWomensSixNations,
        onNavigateToWomensWXV: goToWomensWXV,
        onNavigateToWomensWorldCup: goToWomensWorldCup,
        onNavigateToWomensPacificFour: goToWomensPacificFour,
        onNavigateToWomensRugby7s: goToWomensRugby7s,
        onNavigateToWomensAutumnInternationals: goToWomensAutumnInternationals,
        onNavigateToWomensSummerTests: goToWomensSummerTests
      }
    },

    // Feature Pages
    'fantasy-leagues': { 
      component: FantasyLeagues, 
      props: { 
        onNavigateBack: navigateBack, 
        tournament: currentTournament 
      }
    },
    'final-results': { 
      component: FinalResultsPage, 
      props: { 
        onNavigateBack: navigateBack, 
        tournament: currentTournament 
      }
    },
    'podcasts': { 
      component: PodcastsPage, 
      props: { 
        onNavigateBack: navigateBack, 
        tournament: currentTournament 
      }
    },
    'ppv': { 
      component: PPVSystem, 
      props: { 
        onNavigateBack: navigateBack, 
        game: currentGame 
      }
    },
    'ppa': { 
      component: PPASystem, 
      props: { 
        onNavigateBack: navigateBack, 
        game: currentGame 
      }
    },
    'game-stats': { 
      component: GameStats, 
      props: { 
        onNavigateBack: navigateBack, 
        game: currentGame 
      }
    },
    'national-anthems': { 
      component: NationalAnthems, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'tournament-merchandise': { 
      component: TournamentMerchandise, 
      props: { 
        onNavigateBack: navigateBack, 
        userStatus: userStatus, 
        game: currentGame 
      }
    },
    'live-scores': { 
      component: LiveScoresPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'tickets': { 
      component: TicketsPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'flights': { 
      component: FlightsPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'hotels': { 
      component: HotelsPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'transport': { 
      component: TransportPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'notifications': { 
      component: NotificationsPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'match-videos': { 
      component: MatchVideosPage, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'live-match-center': { 
      component: LiveMatchCenter, 
      props: { 
        onNavigateBack: navigateBack 
      }
    },
    'game-overview': { 
      component: GameOverview, 
      props: { 
        game: currentGame,
        userStatus: userStatus,
        onNavigateBack: navigateBack,
        onNavigateToStadium: () => goToStadiumMap({ stadium: currentGame?.stadium }),
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

  // Enhanced Tournament Page Configuration with Personalization
  const tournamentPageProps = {
    onNavigateBack: navigateBack,
    userStatus: userStatus,
    userPreferences: userPreferences,
    onGameSelect: goToGameOverview,
    onNavigateToStadium: goToStadiumMap,
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

  // Render Logic
  const screenConfig = screenConfigs[currentScreen];
  if (screenConfig) {
    const Component = screenConfig.component;
    return <Component {...screenConfig.props} />;
  }

  const TournamentComponent = tournamentScreens[currentScreen];
  if (TournamentComponent) {
    return <TournamentComponent {...tournamentPageProps} />;
  }

  return (
    <HomeScreen 
      onNavigateToFreemiumLogin={goToFreemiumLogin}
      onNavigateToPremiumLogin={goToPremiumSubscription}
      onNavigateToSuperPremiumLogin={goToSuperPremiumSubscription}
      onNavigateToAppropriatePage={goToAppropriatePage}
      userStatus={userStatus}
      onNavigateBack={navigateBack}
    />
  );
}

export default App;