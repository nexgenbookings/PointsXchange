import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.pointsxchange.cc"),
  title: {
    default: "Points Xchange | Sell Points, Miles, and Rewards for Cash",
    template: "%s | Points Xchange"
  },
  description: "Premium points brokerage for selling hotel points, airline miles, and credit card rewards for competitive cash payouts.",
  openGraph: {
    title: "Points Xchange",
    description: "Turn your points into cash with fast service, secure transactions, and competitive rates.",
    url: "/",
    siteName: "Points Xchange",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] font-sans text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
