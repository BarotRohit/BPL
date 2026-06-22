// Tournament Configuration
export const config = {
  tournamentName: "Barot Premier League",
  season: 2,
  shortName: "BPL",
  tagline: "The Biggest Cricket Festival of the Barot Family",

  // Set to null to show "Coming Soon" instead of countdown
  tournamentDate: null as string | null, // e.g., "2027-01-15T00:00:00"

  // Contact Information (update with real info)
  contact: {
    email: "contact@barotpremierleague.com",
  },

  // Board Members
  boardMembers: [
    { id: 1, name: "Nirav Barot", role: "Board Member", phone: "+91 99790 21694", location: "Hanspura" },
    { id: 2, name: "Dev Barot", role: "Board Member", phone: "+91 88668 51970", location: "Vastral" },
    { id: 3, name: "Chirag Barot", role: "Board Member", phone: "+91 90338 71231", location: "Vastral" },
    { id: 4, name: "Hemant Barot", role: "Board Member", phone: "+91 78780 40336", location: "Odhav" },
    { id: 5, name: "Akshay Barot", role: "Board Member", phone: "+91 70161 31219", location: "Naroda" },
    { id: 6, name: "Ketan Barot", role: "Board Member", phone: "+91 90160 34966", location: "Vejalpur" },
    { id: 7, name: "Rohit Barot", role: "Board Member", phone: "+91 93740 38422", location: "Nikol" },
    { id: 8, name: "Yug Barot", role: "Board Member", phone: "+91 97245 58523", location: "Nikol" },
  ],

  // Social Media (update with real links)
  social: {
    instagram: "https://www.instagram.com/barotpremierleague__s1?igsh=cWpka2diM3NoaWty",
    whatsapp: "https://chat.whatsapp.com/BRxvJ7UWtF57pfjyEGVDjO?s=sw&p=a&ilr=4",
    youtube: "https://www.youtube.com/live/67Wc2FsCsE0?si=8MZxx_p3V39mDkyw",
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
      bestBatsman: { name: "Chirag Barot", runs: "94", teamName: "Barot Titans" },
      bestBowler: { name: "Rohit Barot", wickets: "7", teamName: "Barot Titans" },
      playerOfTournament: { name: "Yug Barot", teamName: "Barot Titans" },
    },
    sponsors: [
      { name: "Royal Fashion", logo: "/sponsors/royal-fashion.jpeg" },
      { name: "Heena Enterprise", logo: "/sponsors/heena-enterprise.jpeg" },
      { name: "DS Computer", logo: "/sponsors/DS.jpeg" },
    ]
  },
  
  // Season 2 Data (Placeholders)
  season2: {
    champion: {
      teamName: "TBD",
      tagline: "Who will claim the throne?",
    },
    runnerUp: {
      teamName: "TBD",
      tagline: "Who will fall short?",
    },
    awards: {
      bestBatsman: { name: "TBD", runs: "-", teamName: "TBD" },
      bestBowler: { name: "TBD", wickets: "-", teamName: "TBD" },
      playerOfTournament: { name: "TBD", teamName: "TBD" },
    },
    sponsors: [
      { name: "TBD", logo: "/gallery/sponsor-placeholder.jpg" },
    ]
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
      name: "Deep Barot",
      role: "Player",
      quote: "તમે જે કમિટી દ્વારા આ એક નાનકડું આયોજન કરવામાં આવ્યું હતું જે આટલું મોટું થશે જેનું કોઈને અંદાજો નહોતું તે બદલ અમારી ટીમથી અને બારોટ સમાજથી તમને ખૂબ ખૂબ અભિનંદન કે જે તમે આટલું બધું મોટા પાયે આયોજન કર્યું અને એ વાતની અમને બહુ જ ખુશી છે કે અમે એ કાર્યક્રમના ભાગરૂપે ટીમ તરીકે રમવા આવ્યા આજે તમે આખા આયોજન દરમિયાન જે પણ સુખ સુવિધાઓ રાખી તે અત્યંતપણે બહુ જ સરસ હતી જેથી આખા બારોટ સમાજ તરફથી અને અમારી ટીમ તરફથી તમને ખૂબ ખૂબ અભિનંદન",
      rating: 5,
    },
    {
      id: 2,
      name: "Karan Barot",
      role: "Community Member",
      quote: "આપની ટીમ દ્વારા કરવામાં આવેલ ક્રિકેટ ટુર્નામેન્ટનું આયોજન કાબિલેદાદ છે. સામાજિક એકતા અને નવી દિશા પૂરી પાડવા બદલ આપ સર્વેનો હૃદયપૂર્વક આભાર માનું છું. આપનો આ ઉત્સાહ અવિરત જળવાઈ રહે તેવી શુભેચ્છા",
      rating: 5,
    },
    {
      id: 3,
      name: "Umang Barot",
      role: "Player",
      quote: "The excitement and commitment from all the teams has been great!! Each and every team tried best to bring their best game to the ground.. that is the biggest factor to the success of the season!! Congratulations and thanks to each and everyone for your participation. Let's keep the passion high and keep the momentum going.. We have together done it!!",
      rating: 5,
    },
    {
      id: 4,
      name: "Swastik Neja Dhari Group",
      role: "Team",
      quote: "Superb superb supetb.... ..didnt get word to explain or express.. Love you all team members and all teams. You all prove that impossible to make we possible together. Keep this momentam and bonding as always. Congratulations to All Team Barot.💖💖💖💖💖💖💖",
      rating: 5,
    },
    {
      id: 5,
      name: "Pratham Barot",
      role: "Player",
      quote: "Heartfelt thanks to the organizing committee and all volunteers for successfully arranging this cricket event. Your dedication, teamwork, and hard work made the event memorable and brought everyone together in the true spirit of unity and sportsmanship. Once again thank you from the depth of heart..✨🎇",
      rating: 5,
    },
    {
      id: 6,
      name: "Kalpesh Barot",
      role: "Community Member",
      quote: "તમારા ઉત્કૃષ્ટ આયોજન અને વ્યવસ્થાપન માટે ખૂબ ખૂબ અભિનંદન. કાર્યક્રમની દરેક વિગત ખૂબ જ સચોટ હતી. ખૂબ જ સરસ આયોજન! તમારી મહેનત કાર્યક્રમની સફળતામાં સ્પષ્ટ દેખાઈ રહી હતી.",
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
      description: "It all started with a simple conversation between friends who loved cricket. A dream to organize a professional-level tournament right here in our beloved Barot family. What seemed impossible at first, soon became a burning passion.",
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
      description: "The Barot family showed up in ways we never expected. Elders offered wisdom, youth brought energy, families volunteered, and the entire village rallied behind this dream. It was a reminder that together, we can achieve anything.",
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
      description: "But BPL was never just about cricket. It was about grandparents watching their grandchildren play, about children running around with excitement, about families creating memories together. BPL became the heartbeat of the Barot family.",
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
      description: "BPL is more than cricket — it's a festival that unites the entire Barot family in joy, pride, and togetherness.",
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
