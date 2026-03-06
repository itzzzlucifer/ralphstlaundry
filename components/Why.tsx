"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GOLD, CREAM, NAVY, MUTED, DARK } from "@/lib/constants";
import { features } from "@/lib/data";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default function Why() {
    return (
        <section
            id="about"
            style={{ padding: "120px 60px", background: NAVY, position: "relative", overflow: "hidden" }}
        >
            <div style={{
                position: "absolute", top: -200, right: -200,
                width: 600, height: 600, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
            }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }} className="why-grid">
                {/* Left column */}
                <div>
                    <FadeIn>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 32, height: 1, background: GOLD }} />
                            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>Why Ralph Street</span>
                        </div>
                        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.15, color: CREAM }}>
                            The standard that<br /><em style={{ fontStyle: "italic", color: GOLD }}>five-star</em> demands
                        </h2>
                        <p style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(245,240,232,0.45)", fontWeight: 300, marginTop: 24, maxWidth: 480 }}>
                            We built our entire operation by first asking Sydney&apos;s most demanding hoteliers
                            exactly what they required. The result is a laundry service that anticipates
                            your needs before you voice them.
                        </p>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 60 }} className="why-features">
                        {features.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.1}>
                                <motion.div
                                    style={{ padding: 32, border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.3s" }}
                                    whileHover={{ borderColor: "rgba(201,168,76,0.3)" }}
                                >
                                    <svg style={{ width: 32, height: 32, marginBottom: 20, color: GOLD }} viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.5">
                                        <circle cx="16" cy="16" r="12" />
                                        <path d="M11 16l3 3 7-7" />
                                    </svg>
                                    <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 18, color: CREAM, marginBottom: 10 }}>{f.title}</div>
                                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(245,240,232,0.45)", fontWeight: 300 }}>{f.desc}</p>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Right visual */}
                <FadeIn delay={0.2}>
                    <div style={{ position: "relative" }}>
                        <div style={{
                            background: "linear-gradient(135deg, #1a2540, #0f1624)",
                            aspectRatio: "4 / 5",
                            position: "relative", overflow: "hidden",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            {/* Badge */}
                            <div style={{
                                position: "absolute", top: 32, left: -32,
                                background: GOLD, color: DARK,
                                padding: "20px 24px", zIndex: 3, textAlign: "center",
                            }}>
                                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 32, fontWeight: 600, display: "block", lineHeight: 1 }}>30+</span>
                                <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 6, display: "block" }}>Years of<br />Excellence</span>
                            </div>
                            {/* Capacity display */}
                            <div style={{ textAlign: "center", padding: 40 }}>
                                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 72, color: "rgba(201,168,76,0.15)", fontWeight: 600, lineHeight: 1, display: "block" }}>2400</span>
                                <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: MUTED, marginTop: 12, display: "block" }}>Kilograms per hour</span>
                                <div style={{ marginTop: 24, padding: "16px 28px", border: "1px solid rgba(201,168,76,0.2)", display: "inline-block" }}>
                                    <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}>Fully Automated Processing</span>
                                </div>
                            </div>
                            {/* Grid lines */}
                            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }} viewBox="0 0 400 500">
                                {Array.from({ length: 8 }, (_, i) => <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="500" stroke={GOLD} strokeWidth="1" />)}
                                {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke={GOLD} strokeWidth="1" />)}
                            </svg>
                        </div>
                        <div style={{
                            position: "absolute", bottom: -30, right: -30,
                            width: 180, height: 180,
                            border: `2px solid ${GOLD}`, zIndex: 2,
                        }} />
                    </div>
                </FadeIn>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #about { padding: 80px 24px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
          .why-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
