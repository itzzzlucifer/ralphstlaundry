"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GREEN, BLUE, CREAM, DARK, NAVY, MUTED, WHITE } from "@/lib/constants";
import { services } from "@/lib/data";
import type { Service } from "@/types";

function ServiceBlock({ s, index }: { s: Service; index: number }) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const isEven = index % 2 === 0;

    return (
        <section
            ref={ref}
            id={s.slug}
            style={{
                padding: "140px 60px",
                background: isEven ? WHITE : "#fcfcfd",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow - subtle on light */}
            <div style={{
                position: "absolute",
                top: isEven ? -100 : "auto",
                bottom: isEven ? "auto" : -100,
                right: -100,
                width: 500, height: 500, borderRadius: "50%",
                background: `radial-gradient(circle, rgba(163, 207, 52, 0.05) 0%, transparent 70%)`,
                pointerEvents: "none",
            }} />

            <div style={{
                maxWidth: 1200, margin: "0 auto",
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 80, alignItems: "start",
            }} className="service-block-grid">
                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{ order: isEven ? 0 : 1 }}
                    className={isEven ? "" : "service-block-right"}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                        <div style={{ width: 32, height: 2, background: GREEN }} />
                        <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 13, color: "rgba(10, 74, 117, 0.5)", letterSpacing: "0.2em", fontWeight: 700 }}>
                            {s.num}
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "clamp(32px, 3.5vw, 52px)",
                        fontWeight: 600, lineHeight: 1.2, color: NAVY, marginBottom: 24,
                    }}>
                        {s.title}
                    </h2>

                    <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(10, 74, 117, 0.7)", fontWeight: 400, marginBottom: 40 }}>
                        {s.detail}
                    </p>

                    <Link href="/contact">
                        <button
                            style={{
                                padding: "16px 44px", background: BLUE, color: WHITE,
                                fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase",
                                fontWeight: 700, cursor: "pointer", border: "none",
                                borderRadius: "4px",
                                fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                                boxShadow: "0 10px 20px rgba(0, 121, 193, 0.15)"
                            }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = "#0066a3";
                                target.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = BLUE;
                                target.style.transform = "translateY(0)";
                            }}
                        >
                            Request a Proposal
                        </button>
                    </Link>
                </motion.div>

                {/* Inclusions panel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ order: isEven ? 1 : 0 }}
                >
                    <div style={{
                        background: WHITE,
                        border: "1px solid #f1f5f9",
                        padding: "48px 56px",
                        boxShadow: "0 20px 40px rgba(10, 74, 117, 0.05)",
                        borderRadius: "4px"
                    }}>
                        <div style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 32, fontWeight: 700 }}>
                            What&apos;s Included
                        </div>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {s.inclusions.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 16 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                                    style={{
                                        display: "flex", alignItems: "flex-start", gap: 16,
                                        paddingBottom: 20, marginBottom: 20,
                                        borderBottom: i < s.inclusions.length - 1 ? "1px solid #f1f5f9" : "none",
                                    }}
                                >
                                    <div style={{
                                        width: 6, height: 6, borderRadius: "50%",
                                        background: GREEN, marginTop: 8, flexShrink: 0,
                                    }} />
                                    <span style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(10, 74, 117, 0.6)", fontWeight: 400 }}>
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    return (
        <>
            <Nav />
            <main>
                {/* Page hero */}
                <section style={{
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "160px 60px 100px",
                    position: "relative",
                    overflow: "hidden",
                    background: WHITE,
                }}>
                    <div style={{
                        position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
                        fontFamily: "var(--font-playfair), serif", fontSize: "240px",
                        fontWeight: 600, color: "rgba(10, 74, 117, 0.02)",
                        pointerEvents: "none", userSelect: "none", letterSpacing: "-0.02em",
                    }}>
                        RSL
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1, maxWidth: 800 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 40, height: 2, background: GREEN }} />
                            <Link href="/" style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, textDecoration: "none", fontWeight: 700 }}>
                                Ralph Street Laundry
                            </Link>
                        </div>
                        <h1 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(48px, 7vw, 88px)",
                            lineHeight: 1.05, fontWeight: 600, color: NAVY,
                            letterSpacing: "-0.02em"
                        }}>
                            Our <em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>Services</em>
                        </h1>
                        <p style={{ fontSize: 18, color: "rgba(10, 74, 117, 0.6)", marginTop: 24, fontWeight: 400, maxWidth: 560, lineHeight: 1.8 }}>
                            Three pillars of hospitality laundry excellence, purpose-built for Sydney&apos;s most prestigious hotels.
                        </p>
                    </motion.div>

                    {/* Anchor nav */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: "flex", gap: 32, marginTop: 56, flexWrap: "wrap", position: "relative", zIndex: 1 }}
                    >
                        {services.map((s) => (
                            <a
                                key={s.slug}
                                href={`#${s.slug}`}
                                style={{
                                    display: "flex", alignItems: "center", gap: 12,
                                    fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
                                    color: BLUE, textDecoration: "none", transition: "all 0.3s",
                                    fontWeight: 700,
                                }}
                                onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.transform = "translateX(5px)")}
                                onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.transform = "translateX(0)")}
                            >
                                {s.num}. {s.title}
                                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                                    <path d="M0 4h14M11 1l3 3-3 3" stroke={BLUE} strokeWidth="2" />
                                </svg>
                            </a>
                        ))}
                    </motion.div>
                </section>

                {/* Service blocks */}
                {services.map((s, i) => (
                    <ServiceBlock key={s.slug} s={s} index={i} />
                ))}

                {/* Bottom CTA */}
                <section style={{ padding: "140px 60px", textAlign: "center", background: WHITE, position: "relative", overflow: "hidden" }}>
                    <div style={{
                        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                        width: 800, height: 800, borderRadius: "50%",
                        background: `radial-gradient(circle, rgba(163, 207, 52, 0.04) 0%, transparent 65%)`,
                        pointerEvents: "none",
                    }} />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <h2 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(36px, 5vw, 64px)",
                            color: NAVY,
                            marginBottom: 24,
                            lineHeight: 1.15,
                            fontWeight: 600,
                            letterSpacing: "-0.01em"
                        }}>
                            Speak with our <em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>team today</em>
                        </h2>
                        <p style={{ fontSize: 17, color: "rgba(10, 74, 117, 0.6)", marginBottom: 48, maxWidth: 500, margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 400 }}>
                            Every property is different. Let us craft a solution around your specific needs.
                        </p>
                        <Link href="/contact">
                            <button
                                style={{
                                    padding: "20px 56px", background: GREEN, color: NAVY,
                                    fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase",
                                    fontWeight: 700, cursor: "pointer", border: "none",
                                    borderRadius: "4px",
                                    fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                                }}
                                onMouseEnter={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = BLUE;
                                    target.style.color = WHITE;
                                    target.style.transform = "translateY(-3px)";
                                    target.style.boxShadow = "0 10px 30px rgba(0, 121, 193, 0.15)";
                                }}
                                onMouseLeave={(e: React.MouseEvent) => {
                                    const target = e.currentTarget as HTMLElement;
                                    target.style.background = GREEN;
                                    target.style.color = NAVY;
                                    target.style.transform = "translateY(0)";
                                    target.style.boxShadow = "none";
                                }}
                            >
                                Get a Proposals
                            </button>
                        </Link>
                    </motion.div>
                </section>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 900px) {
          .service-block-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .service-block-right { order: 0 !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
        </>
    );
}
