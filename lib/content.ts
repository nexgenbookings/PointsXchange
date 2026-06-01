import type { ProgramCategory } from "@prisma/client";

export type ProgramSeed = {
  name: string;
  slug: string;
  category: ProgramCategory;
  buyRate: number;
  sellRate: number;
  spread: number;
  minimumPoints: number;
  description: string;
};

export const whatsappNumber = "+17322375061";
export const displayWhatsappNumber = "+1 (732) 237-5061";
export const contactEmail = "Info@pointsxchange.cc";

export const starterPrograms: ProgramSeed[] = [
  { name: "Marriott Bonvoy", slug: "marriott-bonvoy", category: "HOTEL", buyRate: 0.0058, sellRate: 0.0072, spread: 0.0014, minimumPoints: 40000, description: "Premium hotel rewards with strong redemption demand." },
  { name: "Hilton Honors", slug: "hilton-honors", category: "HOTEL", buyRate: 0.0035, sellRate: 0.0046, spread: 0.0011, minimumPoints: 50000, description: "Flexible hotel points for global resort and business stays." },
  { name: "World of Hyatt", slug: "hyatt", category: "HOTEL", buyRate: 0.0105, sellRate: 0.013, spread: 0.0025, minimumPoints: 25000, description: "High-value hotel points with strong luxury redemption value." },
  { name: "IHG One Rewards", slug: "ihg", category: "HOTEL", buyRate: 0.004, sellRate: 0.0052, spread: 0.0012, minimumPoints: 45000, description: "Hotel points accepted across a broad international portfolio." },
  { name: "Wyndham Rewards", slug: "wyndham", category: "HOTEL", buyRate: 0.006, sellRate: 0.0075, spread: 0.0015, minimumPoints: 30000, description: "Straightforward hotel rewards with consistent buyer demand." },
  { name: "Choice Privileges", slug: "choice", category: "HOTEL", buyRate: 0.0048, sellRate: 0.006, spread: 0.0012, minimumPoints: 35000, description: "Useful hotel currency across domestic and international stays." },
  { name: "American Airlines AAdvantage", slug: "american-airlines", category: "AIRLINE", buyRate: 0.009, sellRate: 0.011, spread: 0.002, minimumPoints: 30000, description: "Airline miles for domestic and international premium cabin awards." },
  { name: "Delta SkyMiles", slug: "delta", category: "AIRLINE", buyRate: 0.007, sellRate: 0.0088, spread: 0.0018, minimumPoints: 35000, description: "Popular airline miles with broad route coverage." },
  { name: "United MileagePlus", slug: "united", category: "AIRLINE", buyRate: 0.0083, sellRate: 0.0102, spread: 0.0019, minimumPoints: 30000, description: "Global airline miles for Star Alliance award travel." },
  { name: "Southwest Rapid Rewards", slug: "southwest", category: "AIRLINE", buyRate: 0.008, sellRate: 0.0099, spread: 0.0019, minimumPoints: 30000, description: "Domestic flight rewards with reliable demand." },
  { name: "JetBlue TrueBlue", slug: "jetblue", category: "AIRLINE", buyRate: 0.0082, sellRate: 0.0101, spread: 0.0019, minimumPoints: 30000, description: "Flight points with useful leisure and business redemption paths." },
  { name: "Alaska Mileage Plan", slug: "alaska", category: "AIRLINE", buyRate: 0.010, sellRate: 0.0125, spread: 0.0025, minimumPoints: 25000, description: "Valuable airline miles with premium partner redemption demand." },
  { name: "American Express Membership Rewards", slug: "amex-membership-rewards", category: "CREDIT_CARD", buyRate: 0.010, sellRate: 0.0125, spread: 0.0025, minimumPoints: 25000, description: "Flexible bank rewards with strong transfer partner utility." },
  { name: "Amex Business Platinum", slug: "amex-business-platinum", category: "CREDIT_CARD", buyRate: 0.010, sellRate: 0.0125, spread: 0.0025, minimumPoints: 25000, description: "Premium American Express business rewards with strong transferable-points demand." },
  { name: "Chase Ultimate Rewards", slug: "chase-ultimate-rewards", category: "CREDIT_CARD", buyRate: 0.0105, sellRate: 0.013, spread: 0.0025, minimumPoints: 25000, description: "Premium transferable rewards with broad travel demand." },
  { name: "Capital One Miles", slug: "capital-one-miles", category: "CREDIT_CARD", buyRate: 0.0085, sellRate: 0.0107, spread: 0.0022, minimumPoints: 30000, description: "Flexible credit card miles with travel partner value." },
  { name: "Citi ThankYou Rewards", slug: "citi-thankyou-rewards", category: "CREDIT_CARD", buyRate: 0.008, sellRate: 0.0102, spread: 0.0022, minimumPoints: 30000, description: "Transferable credit card points with steady market demand." },
  { name: "Bilt Rewards", slug: "bilt-rewards", category: "CREDIT_CARD", buyRate: 0.0095, sellRate: 0.012, spread: 0.0025, minimumPoints: 25000, description: "Flexible rent-earned rewards with premium transfer partners." }
];

export const faqs = [
  ["Can I sell my points?", "In many cases, yes. Points Xchange reviews your program, balance, account condition, and current demand before making a final offer."],
  ["How long does payment take?", "Most approved transactions are paid quickly after verification. ACH and Zelle are available depending on the transaction details."],
  ["What payment methods do you offer?", "We currently offer ACH and Zelle payouts."],
  ["Do you beat competitor offers?", "We invite customers to send a valid offer for review. When market conditions allow, we aim to beat any offer."],
  ["Are my transactions secure?", "Yes. We use a verification process, limited internal access, and clear communication throughout the transaction."],
  ["Can I sell airline miles?", "Yes. We review major airline programs including American, Delta, United, Southwest, JetBlue, and Alaska."],
  ["Can I sell credit card rewards?", "Yes. We review major transferable rewards programs including American Express, Chase, Capital One, Citi, and Bilt."]
];

export const testimonials = [
  { name: "Daniel R.", role: "Marriott Bonvoy seller", quote: "The quote was clear, the payout was fast, and the team handled the process professionally.", rating: 5 },
  { name: "Maya S.", role: "Credit card rewards seller", quote: "I had a competing offer and Points Xchange improved it after review. Smooth experience.", rating: 5 },
  { name: "Andrew K.", role: "Airline miles seller", quote: "Responsive service, fair pricing, and ACH arrived exactly when promised.", rating: 5 }
];

export const blogPosts = [
  "How Much Are Marriott Points Worth?",
  "Best Way To Sell Hotel Points",
  "How To Sell Airline Miles For Cash",
  "Are Hyatt Points Worth More Than Marriott?",
  "Chase Ultimate Rewards Value Guide",
  "American Express Membership Rewards Explained",
  "How To Turn Travel Rewards Into Cash",
  "Hotel Points vs Airline Miles",
  "Common Mistakes When Selling Points",
  "When Should You Sell Points?",
  "How Much Are Hilton Points Worth?",
  "Can You Sell Credit Card Points?",
  "What Affects Airline Mile Value?",
  "ACH vs Zelle For Rewards Payouts",
  "How To Compare Points Buyer Offers"
].map((title) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
  excerpt: `${title.replace("?", "")} with practical guidance for sellers who want clear offers, secure handling, and competitive cash payouts.`,
  content: `Selling rewards is about timing, program demand, and choosing a broker that communicates clearly. ${title.replace("?", "")} depends on the program, balance size, and current buyer demand. Points Xchange reviews each quote individually, protects transaction details, and provides payout options by ACH or Zelle.\n\nBefore you sell, compare the cash value against your realistic travel plans. Points that sit unused can lose value through devaluations, expiration risk, or changing program rules. A professional quote helps you understand the current market without exposing public pricing formulas.\n\nPoints Xchange is built for customers who want a premium, financial-services style process: fast responses, secure verification, competitive offers, and dedicated support. Start with an instant quote, then contact our team for an exact offer.`
}));

export const seoPages = [
  { slug: "sell-marriott-points", title: "Sell Marriott Points", program: "Marriott Bonvoy", intro: "Turn Marriott Bonvoy points into cash with a discreet, professional brokerage process." },
  { slug: "sell-hilton-points", title: "Sell Hilton Points", program: "Hilton Honors", intro: "Sell Hilton Honors points for a competitive payout after a secure custom review." },
  { slug: "sell-hyatt-points", title: "Sell Hyatt Points", program: "World of Hyatt", intro: "World of Hyatt points are often in strong demand. Get a fast estimate and exact offer." },
  { slug: "sell-amex-points", title: "Sell Amex Points", program: "American Express Membership Rewards", intro: "Convert Membership Rewards into cash through a premium points brokerage experience." },
  { slug: "sell-chase-points", title: "Sell Chase Points", program: "Chase Ultimate Rewards", intro: "Sell Chase Ultimate Rewards points with fast support and competitive market-based payouts." },
  { slug: "sell-airline-miles", title: "Sell Airline Miles", program: "major airline miles", intro: "Sell airline miles from leading programs including American, Delta, United, Southwest, JetBlue, and Alaska." },
  { slug: "sell-credit-card-points", title: "Sell Credit Card Points", program: "credit card rewards", intro: "Sell transferable credit card rewards from Amex, Chase, Capital One, Citi, and Bilt." }
];
