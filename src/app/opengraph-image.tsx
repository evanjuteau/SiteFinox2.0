import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Finox — Services Financiers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080C14",
          color: "#F5F0E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 35%, rgba(212,168,67,.18), transparent 42%), radial-gradient(circle at 15% 85%, rgba(212,168,67,.08), transparent 32%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 90,
            right: 90,
            bottom: 90,
            border: "1px solid rgba(212,168,67,.28)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 132,
              letterSpacing: 18,
              color: "#D4A843",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            FINOX
          </div>
          <div
            style={{
              marginTop: 24,
              width: 160,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, #D4A843, transparent)",
            }}
          />
          <div
            style={{
              marginTop: 30,
              fontSize: 42,
              color: "#F5F0E8",
              letterSpacing: -1,
            }}
          >
            Plus qu'un cabinet, un véritable partenaire.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              color: "#D4A843",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Services financiers · Québec
          </div>
        </div>
      </div>
    ),
    size,
  );
}
