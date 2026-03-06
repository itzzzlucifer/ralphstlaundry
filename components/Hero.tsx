"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GREEN, BLUE, CREAM, DARK, NAVY, MUTED, WHITE } from "@/lib/constants";
import { stats } from "@/lib/data";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

export default function Hero() {
    return (
        <section
            className="hero-section"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                background: WHITE,
            }}
        >
            {/* Background layers */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0, opacity: 0.5 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${WHITE} 0%, rgba(255,255,255,0.7) 100%)`, zIndex: 1 }} />
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 70% 50%, transparent 0%, ${WHITE} 100%)`, zIndex: 1, opacity: 0.4 }} />

            {/* Decorative right panel */}
            <div style={{ position: "absolute", right: 0, top: 0, width: "45%", height: "100%", zIndex: 1, overflow: "hidden" }} className="hidden-mobile">
                <svg width="100%" height="100%" viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <line key={i} x1={i * 60 - 100} y1="0" x2={i * 60 + 400} y2="900" stroke={NAVY} strokeWidth="1" />
                    ))}
                </svg>
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "var(--font-playfair), serif", fontSize: "220px",
                    fontWeight: 600, color: "rgba(10, 74, 117, 0.02)",
                    whiteSpace: "nowrap", pointerEvents: "none",
                    userSelect: "none", letterSpacing: "-0.02em",
                }}>
                    RSL
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 2, padding: "120px 60px 60px" }} className="hero-main-area">
                <div style={{ maxWidth: 780 }} className="hero-content">
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}
                    >
                        <div style={{ width: 40, height: 2, background: GREEN }} />
                        <span style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: NAVY, fontWeight: 600 }}>
                            Sydney&apos;s Premier Laundry Partner
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(52px, 7vw, 88px)",
                            lineHeight: 1.05, fontWeight: 600, color: NAVY,
                            marginBottom: 32,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Where <em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>Five-Star</em><br />
                        Hotels Trust<br />
                        Their Linen
                    </motion.h1>

                    <motion.p
                        custom={0.6}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(10, 74, 117, 0.7)", maxWidth: 520, marginBottom: 56, fontWeight: 400 }}
                    >
                        Delivering immaculate linen and laundry solutions to Sydney&apos;s most prestigious hotels — every day of the year, without compromise.
                    </motion.p>

                    <motion.div
                        custom={0.8}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}
                    >
                        <Link href="/contact">
                            <button
                                style={{
                                    padding: "18px 48px", background: BLUE, color: WHITE,
                                    fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase",
                                    fontWeight: 700, cursor: "pointer", border: "none",
                                    borderRadius: "4px",
                                    fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                                    boxShadow: "0 10px 20px rgba(0, 121, 193, 0.15)",
                                }}
                                onMouseEnter={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = "#0066a3";
                                    target.style.transform = "translateY(-2px)";
                                    target.style.boxShadow = "0 15px 30px rgba(0, 121, 193, 0.25)";
                                }}
                                onMouseLeave={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = BLUE;
                                    target.style.transform = "translateY(0)";
                                    target.style.boxShadow = "0 10px 20px rgba(0, 121, 193, 0.15)";
                                }}
                            >
                                Request a Proposal
                            </button>
                        </Link>
                        <Link href="/services">
                            <button
                                style={{
                                    padding: "18px 36px", background: "transparent",
                                    color: NAVY,
                                    fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
                                    cursor: "pointer", border: `2px solid rgba(10, 74, 117, 0.1)`,
                                    borderRadius: "4px",
                                    fontWeight: 600,
                                    fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                                }}
                                onMouseEnter={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.borderColor = NAVY;
                                    target.style.background = "rgba(10, 74, 117, 0.02)";
                                }}
                                onMouseLeave={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.borderColor = "rgba(10, 74, 117, 0.1)";
                                    target.style.background = "transparent";
                                }}
                            >
                                View Our Services
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                style={{
                    position: "relative", zIndex: 2,
                    display: "flex", gap: " clamp(40px, 5vw, 80px)", flexWrap: "wrap",
                    borderTop: `1px solid rgba(10, 74, 117, 0.1)`,
                    padding: "40px 60px 60px",
                }}
                className="stats-bar-container"
            >
                {stats.map((s) => (
                    <div key={s.label}>
                        <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(32px, 3vw, 42px)", color: NAVY, fontWeight: 600 }}>
                            {s.value}<span style={{ color: GREEN, fontSize: "0.8em" }}>{s.suffix}</span>
                        </div>
                        <div style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginTop: 4, fontWeight: 700 }}>
                            {s.label}
                        </div>
                    </div>
                ))}
            </motion.div>

            <style>{`
        .hero-section {
          padding: 0;
        }
        @media (max-width: 900px) {
          .hero-main-area {
            padding: 120px 24px 60px !important;
            flex: none !important;
          }
          .stats-bar-container {
            padding: 32px 24px 60px !important;
            gap: 40px !important;
            border-top: 1px solid rgba(10, 74, 117, 0.1);
          }
          h1 {
            font-size: 48px !important;
            line-height: 1.1 !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
