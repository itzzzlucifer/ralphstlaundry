"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GOLD, CREAM, DARK, NAVY, MUTED } from "@/lib/constants";
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
                padding: "100px 60px",
                background: isEven ? DARK : NAVY,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <div style={{
                position: "absolute",
                top: isEven ? -100 : "auto",
                bottom: isEven ? "auto" : -100,
                right: -100,
                width: 500, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
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
                        <div style={{ width: 32, height: 1, background: GOLD }} />
                        <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 13, color: "rgba(201,168,76,0.6)", letterSpacing: "0.2em" }}>
                            {s.num}
                        </span>
                    </div>

                    <h2 style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "clamp(32px, 3.5vw, 52px)",
                        fontWeight: 500, lineHeight: 1.2, color: CREAM, marginBottom: 24,
                    }}>
                        {s.title}
                    </h2>

                    <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(245,240,232,0.5)", fontWeight: 300, marginBottom: 40 }}>
                        {s.detail}
                    </p>

                    <Link href="/contact">
                        <button
                            style={{
                                padding: "14px 40px", background: GOLD, color: DARK,
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
                </motion.div>

                {/* Inclusions panel */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ order: isEven ? 1 : 0 }}
                >
                    <div style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "40px 48px",
                    }}>
                        <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: MUTED, marginBottom: 32 }}>
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
                                        borderBottom: i < s.inclusions.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                                    }}
                                >
                                    <div style={{
                                        width: 4, height: 4, borderRadius: "50%",
                                        background: GOLD, marginTop: 8, flexShrink: 0,
                                    }} />
                                    <span style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(245,240,232,0.6)", fontWeight: 300 }}>
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
                    minHeight: "45vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "140px 60px 80px",
                    position: "relative",
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${DARK} 0%, ${NAVY} 100%)`,
                }}>
                    <div style={{
                        position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
                        fontFamily: "var(--font-playfair), serif", fontSize: "200px",
                        fontWeight: 600, color: "rgba(201,168,76,0.04)",
                        pointerEvents: "none", userSelect: "none", letterSpacing: "-0.02em",
                    }}>
                        RSL
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 32, height: 1, background: GOLD }} />
                            <Link href="/" style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, textDecoration: "none" }}>
                                Ralph Street Laundry
                            </Link>
                        </div>
                        <h1 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(42px, 6vw, 72px)",
                            lineHeight: 1.1, fontWeight: 500, color: CREAM,
                        }}>
                            Our <em style={{ fontStyle: "italic", color: GOLD }}>Services</em>
                        </h1>
                        <p style={{ fontSize: 16, color: "rgba(245,240,232,0.5)", marginTop: 20, fontWeight: 300, maxWidth: 560 }}>
                            Three pillars of hospitality laundry excellence, purpose-built for Sydney&apos;s most prestigious hotels.
                        </p>
                    </motion.div>

                    {/* Anchor nav */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap", position: "relative", zIndex: 1 }}
                    >
                        {services.map((s) => (
                            <a
                                key={s.slug}
                                href={`#${s.slug}`}
                                style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                                    color: GOLD, textDecoration: "none", transition: "gap 0.3s",
                                }}
                                onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "16px")}
                                onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                            >
                                {s.num}. {s.title}
                                <svg width="12" height="6" viewBox="0 0 16 8" fill="none">
                                    <path d="M0 4h14M11 1l3 3-3 3" stroke={GOLD} strokeWidth="1.2" />
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
                <section style={{ padding: "100px 60px", textAlign: "center", background: DARK, position: "relative", overflow: "hidden" }}>
                    <div style={{
                        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                        width: 600, height: 600, borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
                        pointerEvents: "none",
                    }} />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(32px, 4vw, 56px)", color: CREAM, marginBottom: 20, lineHeight: 1.2 }}>
                            Speak with our <em style={{ fontStyle: "italic", color: GOLD }}>team today</em>
                        </h2>
                        <p style={{ fontSize: 15, color: "rgba(245,240,232,0.45)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 300 }}>
                            Every property is different. Let us craft a solution around your specific needs.
                        </p>
                        <Link href="/contact">
                            <button
                                style={{
                                    padding: "16px 48px", background: GOLD, color: DARK,
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
                    </motion.div>
                </section>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 900px) {
          .service-block-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .service-block-right { order: 0 !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
        </>
    );
}
