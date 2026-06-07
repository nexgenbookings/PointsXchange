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
  {
    title: "How Much Are Hotel Points Worth? A Practical Guide for Sellers",
    slug: "how-much-are-hotel-points-worth",
    excerpt: "Hotel points vary widely in cash value depending on the program, your balance size, and current market demand. Here's what sellers need to know before requesting a quote.",
    content: `Hotel loyalty points are not all created equal. A Marriott Bonvoy point, a Hilton Honors point, and a World of Hyatt point each carry a different cash value — and that value can shift depending on demand, program changes, and how much you're looking to sell.

Understanding roughly what your points are worth helps you evaluate any offer you receive and decide whether selling makes sense for your situation.

**Why Point Values Differ by Program**

Each hotel chain sets its own reward structure. Programs with higher redemption costs for rooms (like Hyatt) tend to produce higher cash value per point, because buyers can extract more value from each unit. Programs with lower redemption rates naturally yield lower cash payouts.

Marriott Bonvoy points typically trade at a lower per-point rate than Hyatt, but Marriott balances tend to be larger — so total payouts can still be significant. Hilton Honors points are abundant in the market, which affects demand.

**What Factors Affect Your Payout**

Beyond the program itself, several things influence what a broker will offer:

Balance size matters. Larger balances are generally more attractive to buyers and may yield a better rate. Small balances — typically under 25,000 to 50,000 points depending on the program — may fall below minimum thresholds for review.

Account condition matters. Points tied to accounts in good standing, without recent suspicious activity, are easier to transact and command better offers.

Timing matters. Buyer demand fluctuates. A program seeing strong travel demand at a given moment may yield a stronger offer than one with soft market interest.

**When Selling Makes Sense**

Selling hotel points is worth considering when you have a large balance you're unlikely to use, when you need liquidity, or when the cash value exceeds what you'd realistically get from redeeming for rooms.

Points can lose value over time through program devaluations — when a hotel chain quietly raises the points cost for redemptions. Selling before a devaluation locks in the current market rate.

**How Points Xchange Works**

Points Xchange reviews each request individually. Submit your program and balance through the instant quote tool to get an indicative range. From there, our desk provides a verified cash offer and walks you through the process. Payouts are made by ACH or Zelle after verification is complete.`,
  },
  {
    title: "How To Sell Airline Miles for Cash: What You Need to Know",
    slug: "how-to-sell-airline-miles-for-cash",
    excerpt: "Airline miles sitting unused in your account can be converted to cash through a private broker. Here's how the process works and what to expect.",
    content: `Most people earn airline miles without a clear plan to use them. Balances accumulate across programs — American AAdvantage, Delta SkyMiles, United MileagePlus, Southwest Rapid Rewards — and sit dormant while expiration deadlines approach or program devaluations quietly erode their value.

Selling airline miles for cash is a straightforward alternative. Here's what the process actually looks like.

**Is It Possible to Sell Airline Miles?**

Yes. A private points broker reviews your balance, evaluates current demand for that program, and makes a cash offer. The transaction is handled discreetly, and payment is made by ACH or Zelle.

Not every program or balance qualifies. Brokers typically have minimum thresholds — often 25,000 to 35,000 miles depending on the airline — and will assess your account before making a final offer.

**Which Airline Programs Have the Most Demand?**

Programs with broad route networks and strong partner redemption options tend to attract the most consistent buyer interest. American AAdvantage, United MileagePlus, and Alaska Mileage Plan are frequently in demand. Delta SkyMiles and Southwest Rapid Rewards also move regularly.

The per-mile cash rate varies by program. Alaska miles often yield among the highest rates due to their partner redemption value. Delta miles typically yield a lower per-mile rate but are widely held and transact in volume.

**What to Expect When You Sell**

The process with a reputable broker follows a clear sequence. You submit your program and balance, receive an indicative range, and then — after a brief verification process — receive a confirmed offer. If you accept, you follow simple transfer instructions at your own pace. Payment follows after verification is complete.

Reputable brokers will never ask you to share account passwords. The transfer process uses standard airline program mechanics and does not require handing over login credentials.

**Timing Your Sale**

Airline miles, like hotel points, are subject to devaluation. When a program changes its award chart or moves to dynamic pricing, the redemption value of miles can drop significantly overnight. Selling into a strong market — before such changes — preserves the value you've already earned.

If your balance is large, has been sitting unused for more than a year, or you simply have no travel plans that would justify the redemption, a cash sale is worth evaluating. Points Xchange provides a no-obligation instant quote so you can see where the market is before making a decision.`,
  },
  {
    title: "Selling Credit Card Points: Amex, Chase, Capital One, and More",
    slug: "selling-credit-card-points",
    excerpt: "Transferable credit card rewards from Amex, Chase, Capital One, Citi, and Bilt can be sold for cash. Here's how the market works and what your points may be worth.",
    content: `Transferable credit card rewards — American Express Membership Rewards, Chase Ultimate Rewards, Capital One Miles, Citi ThankYou Points, and Bilt Rewards — are among the most flexible currencies in the points market. They can be transferred to dozens of airline and hotel partners, which gives them strong underlying demand and makes them attractive to buyers.

If you're sitting on a large balance with no clear redemption plan, selling is a legitimate option worth understanding.

**Why Transferable Points Have Strong Cash Value**

Unlike co-branded airline or hotel cards, transferable rewards programs let buyers move points into whichever partner program has the most value at a given time. That flexibility supports stronger demand and, typically, better per-point cash rates compared to single-program currencies.

Chase Ultimate Rewards and American Express Membership Rewards consistently rank among the highest-value transferable currencies. Capital One Miles and Citi ThankYou Points follow closely. Bilt Rewards, while newer, commands strong interest due to its premium transfer partner list.

**How the Sale Process Works**

A private broker evaluates your program, balance size, and account condition before making an offer. Submit your details through an instant quote tool to receive an indicative cash range. After review, the broker issues a confirmed offer. If you proceed, the transfer is handled using standard program mechanics — no password sharing required.

Payment is made by ACH or Zelle after the transfer is verified. The timeline from quote request to payout is typically within a few business days.

**What Affects Your Offer**

Balance size is the primary factor. Minimum thresholds vary by program — most brokers start at 25,000 points, with some programs requiring 30,000 or more. Larger balances tend to yield better per-point rates.

Account condition matters as well. Accounts in good standing with no recent flags receive offers more readily. Unusual activity or recently opened accounts may be reviewed more carefully.

Market timing also plays a role. Demand for specific programs shifts based on what buyers can do with the points at a given moment.

**When Selling Is the Right Move**

If your credit card points are earning at a slower rate than you're spending, or you simply have no near-term travel plans, converting to cash now avoids the risk of future devaluations. All major transferable programs have reduced point values at various points — and those changes typically happen without advance notice.

Points Xchange reviews each request individually and provides a verified cash offer after a brief evaluation. Use the instant quote tool to get an indicative range for your balance, then reach out to our desk for a confirmed offer.`,
  },
];

export const seoPages = [
  { slug: "sell-marriott-points", title: "Sell Marriott Points", program: "Marriott Bonvoy", intro: "Turn Marriott Bonvoy points into cash with a discreet, professional brokerage process." },
  { slug: "sell-hilton-points", title: "Sell Hilton Points", program: "Hilton Honors", intro: "Sell Hilton Honors points for a competitive payout after a secure custom review." },
  { slug: "sell-hyatt-points", title: "Sell Hyatt Points", program: "World of Hyatt", intro: "World of Hyatt points are often in strong demand. Get a fast estimate and exact offer." },
  { slug: "sell-amex-points", title: "Sell Amex Points", program: "American Express Membership Rewards", intro: "Convert Membership Rewards into cash through a premium points brokerage experience." },
  { slug: "sell-chase-points", title: "Sell Chase Points", program: "Chase Ultimate Rewards", intro: "Sell Chase Ultimate Rewards points with fast support and competitive market-based payouts." },
  { slug: "sell-airline-miles", title: "Sell Airline Miles", program: "major airline miles", intro: "Sell airline miles from leading programs including American, Delta, United, Southwest, JetBlue, and Alaska." },
  { slug: "sell-credit-card-points", title: "Sell Credit Card Points", program: "credit card rewards", intro: "Sell transferable credit card rewards from Amex, Chase, Capital One, Citi, and Bilt." }
];
