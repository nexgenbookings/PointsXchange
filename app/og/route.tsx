import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080C18",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
          }}
        />
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(212,175,55,0.08)",
            filter: "blur(80px)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.3)",
            borderRadius: "999px",
            padding: "6px 16px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D4AF37" }} />
          <span style={{ color: "#D4AF37", fontSize: "14px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Private Points Brokerage
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: "64px", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
          Turn loyalty points<br />into{" "}
          <span style={{ color: "#D4AF37" }}>cash.</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.6)", marginBottom: "48px", maxWidth: "700px", lineHeight: 1.5 }}>
          Hotel points · Airline miles · Credit card rewards
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "18+", label: "Programs" },
            { value: "Same day", label: "Response" },
            { value: "ACH & Zelle", label: "Payment" },
          ].map(({ value, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff" }}>{value}</span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          pointsxchange.cc
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
