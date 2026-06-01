export type QuoteProgram = {
  id?: string;
  name: string;
  category?: "HOTEL" | "AIRLINE" | "CREDIT_CARD" | string;
  buyRate: number | string;
  sellRate: number | string;
  spread: number | string;
  minimumPoints: number;
  active: boolean;
};

export function calculateQuote(program: QuoteProgram, pointsAmount: number) {
  const buyRate = Number(program.buyRate);
  const sellRate = Number(program.sellRate);
  const spread = Number(program.spread);
  const effectiveSellRate = sellRate || buyRate + spread;
  const profit = pointsAmount * (effectiveSellRate - buyRate);
  const belowMinimum = pointsAmount < program.minimumPoints || profit < 50;
  const midpoint = pointsAmount * buyRate;
  const low = Math.max(0, midpoint * 0.94);
  const high = midpoint * 1.04;

  return {
    low,
    high,
    profit,
    belowMinimum,
    message: belowMinimum
      ? "This transaction may not meet our minimum requirements. Contact us for a custom review."
      : "Your estimate is ready. Submit your details for an exact offer."
  };
}
