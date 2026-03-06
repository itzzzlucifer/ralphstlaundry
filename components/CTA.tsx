"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GREEN, BLUE, NAVY, WHITE, PHONE } from "@/lib/constants";

export default function CTA() {
    return (
        <section style={{ padding: "100px 60px", background: WHITE }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    background: NAVY,
                    padding: "100px 60px",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0 40px 80px rgba(10, 74, 117, 0.2)"
                }}
            >
                {/* Decorative background element */}
                <div style={{
                    position: "absolute", top: -100, left: -100,
                    width: 400, height: 400, borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(163, 207, 52, 0.1) 0%, transparent 70%)`,
                    pointerEvents: "none"
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 16, marginBottom: 32 }}
                    >
                        <div style={{ width: 32, height: 2, background: GREEN }} />
                        <span style={{ fontSize: 13, letterSpacing: "0.4em", textTransform: "uppercase", color: GREEN, fontWeight: 700 }}>Next Steps</span>
                        <div style={{ width: 32, height: 2, background: GREEN }} />
                    </motion.div>

                    <h2 style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "clamp(36px, 5vw, 64px)",
                        color: WHITE,
                        fontWeight: 600,
                        lineHeight: 1.1,
                        marginBottom: 40,
                        letterSpacing: "-0.02em"
                    }}>
                        Ready to elevate your<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>guest experience?</em>
                    </h2>

                    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 60px", lineHeight: 1.8, fontWeight: 400 }}>
                        Join Sydney&apos;s leading hotels. Speak with our team today about a tailored laundry partnership that never compromises on quality.
                    </p>

                    <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                        <Link href="/contact">
                            <button
                                style={{
                                    padding: "20px 48px",
                                    background: GREEN,
                                    color: NAVY,
                                    fontSize: 14,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    border: "none",
                                    fontFamily: "var(--font-dm-sans), sans-serif",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    borderRadius: "4px"
                                }}
                                onMouseEnter={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = WHITE;
                                    target.style.transform = "translateY(-3px)";
                                    target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                                }}
                                onMouseLeave={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = GREEN;
                                    target.style.transform = "translateY(0)";
                                    target.style.boxShadow = "none";
                                }}
                            >
                                Request a Proposal
                            </button>
                        </Link>
                        <div style={{ textAlign: "left" }}>
                            <p style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4, fontWeight: 600 }}>Talk to an Expert</p>
                            <a href={`tel:${PHONE}`} style={{ fontFamily: "var(--font-playfair), serif", fontSize: 28, color: BLUE, textDecoration: "none", fontWeight: 700 }}>{PHONE}</a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style>{`
        @media (max-width: 900px) {
          section { padding: 60px 24px !important; }
          div[style*="padding: 100px 60px"] { padding: 80px 32px !important; }
        }
      `}</style>
        </section>
    );
}
