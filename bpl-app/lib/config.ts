// Tournament Configuration
export const config = {
  tournamentName: "Barot Premier League",
  season: 2,
  shortName: "BPL",
  tagline: "The Biggest Cricket Festival of the Barot Community",

  // Set to null to show "Coming Soon" instead of countdown
  tournamentDate: null as string | null, // e.g., "2027-01-15T00:00:00"

  // Contact Information (update with real info)
  contact: {
    address: "Barot Village, Mandi District, Himachal Pradesh, India",
  },

  // Board Members
  boardMembers: [
    { id: 1, name: "Nirav Barot", role: "Board Member", phone: "+91 99790 21694", location: "Hanspura" },
    { id: 2, name: "Akshit Barot", role: "Board Member", phone: "+91 88668 51970", location: "Vastral" },
    { id: 3, name: "Chirag Barot", role: "Board Member", phone: "+91 90338 71231", location: "Vastral" },
    { id: 4, name: "Hemant Barot", role: "Board Member", phone: "+91 78780 40336", location: "Odhav" },
    { id: 5, name: "Akshay Barot", role: "Board Member", phone: "+91 70161 31219", location: "Naroda" },
    { id: 6, name: "Ketan Barot", role: "Board Member", phone: "+91 90160 34966", location: "Vejalpur" },
  ],

  // Social Media (update with real links)
  social: {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    youtube: "https://www.youtube.com",
  },

  // Google Sheets Apps Script Web App URL
  // Follow GOOGLE_SHEETS_SETUP.md to get this URL
  googleSheetsUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "",

  // Season 1 Data (update with real data)
  season1: {
    champion: {
      teamName: "Barot Titans",
      tagline: "Champions of BPL Season 1",
    },
    runnerUp: {
      teamName: "Barot Kings XI",
      tagline: "Runners-Up BPL Season 1",
    },
    awards: {
      bestBatsman: { name: "Coming Soon", runs: "TBD", teamName: "TBD" },
      bestBowler: { name: "Coming Soon", wickets: "TBD", teamName: "TBD" },
      playerOfTournament: { name: "Coming Soon", teamName: "TBD" },
    },
  },

  // Stats
  stats: [
    { value: 8, suffix: "", label: "Teams", description: "Competing for glory" },
    { value: 100, suffix: "+", label: "Players", description: "Ready to shine" },
    { value: 1, suffix: "", label: "Community", description: "United by cricket" },
    { value: "∞", suffix: "", label: "Memories", description: "That last forever" },
  ],

  // Teams
  teams: [
    {
      id: 1,
      name: "Barot Titans",
      shortName: "BT",
      captain: "TBD",
      motto: "Season 1 Champions!",
      primaryColor: "#00d4ff",
      secondaryColor: "#0891b2",
      gradient: "from-cyan-500 to-blue-700",
      glowColor: "rgba(0, 212, 255, 0.5)",
      emoji: "🏆",
      logo: "/teams/barot-titans.png",
    },
    {
      id: 2,
      name: "Barot Kings XI",
      shortName: "BKXI",
      captain: "TBD",
      motto: "Royalty on the Field!",
      primaryColor: "#f5c518",
      secondaryColor: "#ff6b35",
      gradient: "from-yellow-500 to-orange-600",
      glowColor: "rgba(245, 197, 24, 0.5)",
      emoji: "👑",
      logo: "/teams/barot-kings-xi.png",
    },
    {
      id: 3,
      name: "Barot Super Kings",
      shortName: "BSK",
      captain: "TBD",
      motto: "Fear the Roar!",
      primaryColor: "#f59e0b",
      secondaryColor: "#b45309",
      gradient: "from-amber-500 to-yellow-800",
      glowColor: "rgba(245, 158, 11, 0.5)",
      emoji: "🦁",
      logo: "/teams/barot-super-kings.png",
    },
    {
      id: 4,
      name: "Barot Warriors",
      shortName: "BW",
      captain: "TBD",
      motto: "Warriors Never Quit!",
      primaryColor: "#ff6b35",
      secondaryColor: "#f5c518",
      gradient: "from-orange-600 to-yellow-500",
      glowColor: "rgba(255, 107, 53, 0.5)",
      emoji: "⚔️",
      logo: "/teams/barot-warriors.png",
    },
    {
      id: 5,
      name: "Barot Sunrisers",
      shortName: "BSR",
      captain: "TBD",
      motto: "Rising to the Top!",
      primaryColor: "#ef4444",
      secondaryColor: "#ff6b35",
      gradient: "from-red-600 to-orange-500",
      glowColor: "rgba(239, 68, 68, 0.5)",
      emoji: "🌅",
      logo: "/teams/barot-sunrisers.png",
    },
    {
      id: 6,
      name: "Barot Strikers",
      shortName: "BS",
      captain: "TBD",
      motto: "Strike Hard, Strike Fast!",
      primaryColor: "#6c35de",
      secondaryColor: "#00d4ff",
      gradient: "from-purple-700 to-cyan-500",
      glowColor: "rgba(108, 53, 222, 0.5)",
      emoji: "⚡",
      logo: "/teams/barot-strikers.png",
    },
    {
      id: 7,
      name: "Barot Challengers",
      shortName: "BC",
      captain: "TBD",
      motto: "Challenge Accepted!",
      primaryColor: "#10b981",
      secondaryColor: "#00d4ff",
      gradient: "from-emerald-600 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.5)",
      emoji: "🎯",
      logo: "/teams/barot-challengers.png",
    },
    {
      id: 8,
      name: "Barot Fighters",
      shortName: "BF",
      captain: "TBD",
      motto: "Fight till the End!",
      primaryColor: "#8b5cf6",
      secondaryColor: "#6c35de",
      gradient: "from-violet-500 to-purple-800",
      glowColor: "rgba(139, 92, 246, 0.5)",
      emoji: "🥊",
      logo: "/teams/barot-fighters.png",
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Player - BPL Season 1",
      quote: "BPL Season 1 was an incredible experience! The energy, the competition, and the community spirit made it truly unforgettable. Can't wait for Season 2!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Community Member",
      quote: "It wasn't just a cricket tournament — it was a celebration of our entire Barot community. Families, elders, children, everyone was there cheering!",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Captain - Valley Strikers",
      quote: "The level of organization and professionalism was outstanding for a community tournament. BPL raised the bar for all of us!",
      rating: 5,
    },
    {
      id: 4,
      name: "Sunita Devi",
      role: "Spectator",
      quote: "The stadium atmosphere was electric! My whole family enjoyed every match. BPL brought so much joy to our village!",
      rating: 5,
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Player - Mountain Titans",
      quote: "From the opening ceremony to the final match — every moment was magical. BPL Season 2 is going to be even bigger!",
      rating: 5,
    },
  ],

  // Journey Timeline
  journey: [
    {
      id: 1,
      year: "2024",
      title: "The Idea Was Born",
      icon: "💡",
      description: "It all started with a simple conversation between friends who loved cricket. A dream to organize a professional-level tournament right here in our beloved Barot community. What seemed impossible at first, soon became a burning passion.",
      color: "#6c35de",
    },
    {
      id: 2,
      year: "2024",
      title: "The First Step",
      icon: "👣",
      description: "With courage and determination, the founding team took the first step. Planning sessions, late-night meetings, phone calls — the foundation of BPL was being laid one brick at a time. Nothing could stop the dream.",
      color: "#00d4ff",
    },
    {
      id: 3,
      year: "2024",
      title: "Community Stands Together",
      icon: "🤝",
      description: "The Barot community showed up in ways we never expected. Elders offered wisdom, youth brought energy, families volunteered, and the entire village rallied behind this dream. It was a reminder that together, we can achieve anything.",
      color: "#f5c518",
    },
    {
      id: 4,
      year: "2024-25",
      title: "The Challenges",
      icon: "⚡",
      description: "No great story is without its challenges. From logistics to funding, from bad weather to last-minute hurdles — the team faced every obstacle head-on. Every difficulty only made us stronger and more determined.",
      color: "#ff6b35",
    },
    {
      id: 5,
      year: "2025",
      title: "BPL Season 1 — A Triumph!",
      icon: "🏆",
      description: "The day finally arrived. Under the lights, with the whole community watching, BPL Season 1 was nothing short of a miracle. 8 teams, 100+ players, breathtaking matches, and a grand finale that left everyone speechless. We did it!",
      color: "#f5c518",
    },
    {
      id: 6,
      year: "2025",
      title: "Beyond Cricket",
      icon: "❤️",
      description: "But BPL was never just about cricket. It was about grandparents watching their grandchildren play, about children running around with excitement, about families creating memories together. BPL became the heartbeat of the Barot community.",
      color: "#ef4444",
    },
  ],

  // Why Join Features
  features: [
    {
      id: 1,
      icon: "🏏",
      title: "Exciting Matches",
      description: "Experience the thrill of competitive cricket with your community. Every match is a festival of skills, strategy, and passion.",
      color: "#ff6b35",
    },
    {
      id: 2,
      icon: "🎉",
      title: "Community Celebration",
      description: "BPL is more than cricket — it's a festival that unites the entire Barot community in joy, pride, and togetherness.",
      color: "#6c35de",
    },
    {
      id: 3,
      icon: "🌟",
      title: "Professional Experience",
      description: "Play in a professionally organized tournament with proper infrastructure, umpires, scorekeeping, and ceremonies.",
      color: "#00d4ff",
    },
    {
      id: 4,
      icon: "📸",
      title: "Amazing Memories",
      description: "Create memories that last a lifetime. Every match, every boundary, every wicket — captured forever in your heart.",
      color: "#f5c518",
    },
    {
      id: 5,
      icon: "👨‍👩‍👧‍👦",
      title: "Family Entertainment",
      description: "Bring your whole family! BPL is an event for everyone — players, supporters, elders, children, and everyone in between.",
      color: "#10b981",
    },
    {
      id: 6,
      icon: "🏆",
      title: "Trophies & Awards",
      description: "Compete for prestigious trophies and individual awards. Best Batsman, Best Bowler, Player of the Tournament, and more!",
      color: "#f5c518",
    },
  ],
};

export type Team = (typeof config.teams)[0];
export type Feature = (typeof config.features)[0];
export type Testimonial = (typeof config.testimonials)[0];
export type JourneyItem = (typeof config.journey)[0];
export type BoardMember = (typeof config.boardMembers)[0];
