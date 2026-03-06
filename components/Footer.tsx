"use client";

import Link from "next/link";
import { GREEN, BLUE, CREAM, DARK, NAVY, MUTED, PHONE, WHITE } from "@/lib/constants";

export default function Footer() {
    return (
        <footer style={{ padding: "100px 60px 60px", background: DARK, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.5fr", gap: 80, marginBottom: 100 }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 24, letterSpacing: "-0.01em", color: WHITE, fontWeight: 600, marginBottom: 32 }}>
                            Ralph<span style={{ color: GREEN }}>·</span>Street<br />
                            <span style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>Commercial Laundry</span>
                        </div>
                        <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", fontWeight: 400, maxWidth: 320 }}>
                            Providing impeccably clean linen and laundry solutions for Sydney&apos;s most prestigious properties since 1994.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                        <div>
                            <h4 style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 24, fontWeight: 700 }}>Menu</h4>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                {["Home", "Services", "Capabilities", "About", "Contact"].map((link) => (
                                    <li key={link} style={{ marginBottom: 16 }}>
                                        <Link
                                            href={link === "Services" ? "/services" : link === "Contact" ? "/contact" : `/#${link.toLowerCase()}`}
                                            style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, transition: "color 0.3s", fontWeight: 400 }}
                                            onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                                            onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div style={{ textAlign: "right" }} className="footer-contact">
                        <h4 style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 24, fontWeight: 700 }}>Connect</h4>
                        <a href={`tel:${PHONE}`} style={{ fontFamily: "var(--font-playfair), serif", fontSize: 32, color: BLUE, textDecoration: "none", display: "block", marginBottom: 12, fontWeight: 600 }}>{PHONE}</a>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 400 }}>64 Ralph St, Alexandria NSW 2015</p>
                    </div>
                </div>

                <div style={{
                    paddingTop: 40,
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }} className="footer-bottom">
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
                        © {new Date().getFullYear()} Ralph Street Laundry Pty Ltd.
                    </p>
                    <div style={{ display: "flex", gap: 32 }}>
                        <Link href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontWeight: 400 }}>Privacy Policy</Link>
                        <Link href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontWeight: 400 }}>Terms of Service</Link>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          footer { padding: 80px 24px 40px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: left !important; }
          .footer-contact { text-align: left !important; }
          .footer-bottom { flex-direction: column; gap: 24px; align-items: flex-start; }
        }
      `}</style>
        </footer>
    );
}
