"use client";

import Link from "next/link";
import { GOLD, CREAM, DARK } from "@/lib/constants";

export default function Footer() {
    const links = ["About", "Services", "Linen Rental", "Capabilities", "Contact", "Privacy Policy"];

    return (
        <footer style={{
            padding: "60px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32,
            background: DARK,
        }}>
            <div style={{ width: "140px", height: "36px" }}>
                <img
                    src="/images/logo-premium.png"
                    alt="Ralph St Laundry"
                    style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
            </div>
            <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap", justifyContent: "center" }}>
                {links.map((link) => (
                    <li key={link}>
                        <Link
                            href={link === "Contact" ? "/contact" : link === "Services" ? "/services" : "#"}
                            style={{
                                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                                color: "rgba(245,240,232,0.35)", textDecoration: "none", transition: "color 0.3s",
                            }}
                            onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = GOLD)}
                            onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.35)")}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div style={{ fontSize: 12, color: "rgba(245,240,232,0.25)", letterSpacing: "0.05em" }}>
                © 2025 Ralph Street Laundry. Sydney, Australia.
            </div>

            <style>{`
        @media (max-width: 900px) {
          footer { padding: 40px 24px !important; flex-direction: column; text-align: center; }
        }
      `}</style>
        </footer>
    );
}
