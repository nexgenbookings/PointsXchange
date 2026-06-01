import { getPrograms } from "@/lib/data";
import { Hero } from "@/components/home/hero";
import { MarketActivity } from "@/components/home/market-activity";
import { TrustMetrics } from "@/components/home/trust-metrics";
import { OfferExplainer } from "@/components/home/offer-explainer";
import { Comparison } from "@/components/home/comparison";
import { ProcessTimeline } from "@/components/home/timeline";
import { FAQSection } from "@/components/home/faq-section";
import { FinalCTA } from "@/components/home/final-cta";

export default async function HomePage() {
  const programs = await getPrograms();
  return (
    <div className="bg-[#0A0A0A]">
      <Hero programs={programs} />
      <MarketActivity programs={programs} />
      <TrustMetrics />
      <OfferExplainer />
      <Comparison />
      <ProcessTimeline />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
