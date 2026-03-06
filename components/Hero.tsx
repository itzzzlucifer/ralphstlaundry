"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GOLD, CREAM, DARK, NAVY, MUTED } from "@/lib/constants";
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
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
                padding: "0 60px",
                overflow: "hidden",
            }}
        >
            {/* Background layers */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/hero.png')", backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${DARK} 30%, rgba(12,12,16,0.6) 100%)`, zIndex: 1 }} />
            <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 70% 30%, transparent 0%, ${DARK} 100%)`, zIndex: 1 }} />

            {/* Decorative right panel */}
            <div style={{ position: "absolute", right: 0, top: 0, width: "45%", height: "100%", zIndex: 1, overflow: "hidden" }}>
                <svg width="100%" height="100%" viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.07 }}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <line key={i} x1={i * 60 - 100} y1="0" x2={i * 60 + 400} y2="900" stroke={GOLD} strokeWidth="1" />
                    ))}
                </svg>
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "var(--font-playfair), serif", fontSize: "220px",
                    fontWeight: 600, color: "rgba(201,168,76,0.04)",
                    whiteSpace: "nowrap", pointerEvents: "none",
                    userSelect: "none", letterSpacing: "-0.02em",
                }}>
                    RSL
                </div>
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: 780 }}>
                <motion.div
                    custom={0.2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}
                >
                    <div style={{ width: 40, height: 1, background: GOLD }} />
                    <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>
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
                        lineHeight: 1.05, fontWeight: 500, color: CREAM,
                        marginBottom: 32,
                    }}
                >
                    Where <em style={{ fontStyle: "italic", color: GOLD }}>Five-Star</em><br />
                    Hotels Trust<br />
                    Their Linen
                </motion.h1>

                <motion.p
                    custom={0.6}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(245,240,232,0.55)", maxWidth: 520, marginBottom: 56, fontWeight: 300 }}
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
                                padding: "16px 44px", background: GOLD, color: DARK,
                                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                                fontWeight: 500, cursor: "pointer", border: "none",
                                fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                            }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = "#D4B35A";
                                target.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = GOLD;
                                target.style.transform = "translateY(0)";
                            }}
                        >
                            Request a Proposal
                        </button>
                    </Link>
                    <Link href="/services">
                        <button
                            style={{
                                padding: "16px 32px", background: "transparent",
                                color: "rgba(245,240,232,0.7)",
                                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                                cursor: "pointer", border: "1px solid rgba(245,240,232,0.2)",
                                fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                            }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.borderColor = CREAM;
                                target.style.color = CREAM;
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.borderColor = "rgba(245,240,232,0.2)";
                                target.style.color = "rgba(245,240,232,0.7)";
                            }}
                        >
                            View Our Services
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                style={{
                    position: "absolute", bottom: 60, left: 60, right: 60, zIndex: 2,
                    display: "flex", gap: 60, flexWrap: "wrap",
                    borderTop: "1px solid rgba(201,168,76,0.2)",
                    paddingTop: 40,
                }}
            >
                {stats.map((s) => (
                    <div key={s.label}>
                        <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 36, color: CREAM, fontWeight: 500 }}>
                            {s.value}<span style={{ color: GOLD }}>{s.suffix}</span>
                        </div>
                        <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginTop: 4 }}>
                            {s.label}
                        </div>
                    </div>
                ))}
            </motion.div>

            <style>{`
        @media (max-width: 900px) {
          section { padding: 0 24px !important; }
        }
      `}</style>
        </section>
    );
}
