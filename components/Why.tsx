"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GREEN, BLUE, NAVY, MUTED, DARK, WHITE } from "@/lib/constants";
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
            style={{ padding: "140px 60px", background: WHITE, position: "relative", overflow: "hidden" }}
        >
            {/* Very subtle background element */}
            <div style={{
                position: "absolute", top: -200, right: -200,
                width: 600, height: 600, borderRadius: "50%",
                background: `radial-gradient(circle, rgba(163, 207, 52, 0.05) 0%, transparent 70%)`,
            }} />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center", maxWidth: 1400, margin: "0 auto" }} className="why-grid">
                {/* Left column */}
                <div>
                    <FadeIn>
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 32, height: 2, background: GREEN }} />
                            <span style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>About Our Standards</span>
                        </div>
                        <h2 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(36px, 4vw, 56px)",
                            fontWeight: 600,
                            lineHeight: 1.15,
                            color: NAVY,
                            letterSpacing: "-0.01em"
                        }}>
                            The standard that<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>five-star</em> demands
                        </h2>
                        <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(10, 74, 117, 0.7)", fontWeight: 400, marginTop: 24, maxWidth: 520 }}>
                            We built our entire operation by first asking Sydney&apos;s most demanding hoteliers
                            exactly what they required. The result is a laundry service that anticipates
                            your needs before you voice them.
                        </p>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 60 }} className="why-features">
                        {features.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.1}>
                                <motion.div
                                    style={{
                                        padding: "32px",
                                        border: "1px solid #f1f5f9",
                                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                        background: "#fcfcfd",
                                        borderRadius: "4px"
                                    }}
                                    whileHover={{
                                        borderColor: GREEN,
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 10px 30px rgba(10, 74, 117, 0.05)"
                                    }}
                                >
                                    <div style={{
                                        width: 48, height: 48,
                                        background: "rgba(163, 207, 52, 0.1)",
                                        borderRadius: "50%",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        marginBottom: 24
                                    }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5">
                                            <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 20, color: NAVY, marginBottom: 12, fontWeight: 600 }}>{f.title}</div>
                                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(10, 74, 117, 0.6)", fontWeight: 400 }}>{f.desc}</p>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                {/* Right visual */}
                <FadeIn delay={0.2}>
                    <div style={{ position: "relative" }}>
                        <div style={{
                            background: "#071D2C",
                            aspectRatio: "4 / 5",
                            position: "relative", overflow: "hidden",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            borderRadius: "4px",
                            boxShadow: "0 40px 80px rgba(10, 74, 117, 0.15)"
                        }}>
                            {/* Badge */}
                            <div style={{
                                position: "absolute", top: 40, left: -40,
                                background: GREEN, color: NAVY,
                                padding: "24px 32px", zIndex: 3, textAlign: "center",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                            }}>
                                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 40, fontWeight: 700, display: "block", lineHeight: 1 }}>30+</span>
                                <span style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 8, display: "block", fontWeight: 700 }}>Years of<br />Excellence</span>
                            </div>
                            {/* Capacity display */}
                            <div style={{ textAlign: "center", padding: 40 }}>
                                <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 84, color: WHITE, fontWeight: 700, lineHeight: 1, display: "block", opacity: 0.9 }}>2400</span>
                                <span style={{ fontSize: 12, letterSpacing: "0.4em", textTransform: "uppercase", color: GREEN, marginTop: 16, display: "block", fontWeight: 700 }}>Kilograms per hour</span>
                                <div style={{ marginTop: 32, padding: "18px 32px", border: `1px solid rgba(163, 207, 52, 0.3)`, display: "inline-block", background: "rgba(163, 207, 52, 0.05)" }}>
                                    <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: WHITE, fontWeight: 600 }}>Fully Automated Processing</span>
                                </div>
                            </div>
                            {/* Grid lines */}
                            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }} viewBox="0 0 400 500">
                                {Array.from({ length: 8 }, (_, i) => <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="500" stroke={WHITE} strokeWidth="1" />)}
                                {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke={WHITE} strokeWidth="1" />)}
                            </svg>
                        </div>
                        {/* Decorative background frame */}
                        <div style={{
                            position: "absolute", bottom: -40, right: -40,
                            width: 300, height: 300,
                            border: `2px solid rgba(163, 207, 52, 0.1)`, zIndex: -1,
                            borderRadius: "4px"
                        }} />
                    </div>
                </FadeIn>
            </div>

            <style>{`
        @media (max-width: 900px) {
          #about { padding: 100px 24px !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 80px !important; }
          .why-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
