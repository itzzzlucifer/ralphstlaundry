"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GREEN, BLUE, CREAM, DARK, NAVY, WHITE } from "@/lib/constants";
import { processSteps } from "@/lib/data";

export default function Process() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section
            id="capabilities"
            style={{ padding: "140px 60px", background: "#fcfcfd" }}
        >
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 100, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 2, background: GREEN }} />
                    <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>Our Process</span>
                    <div style={{ width: 32, height: 2, background: GREEN }} />
                </div>
                <h2 style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                    color: NAVY,
                    maxWidth: 700,
                    letterSpacing: "-0.01em"
                }}>
                    From collection to<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>immaculate delivery</em>
                </h2>
            </motion.div>

            <div
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative", maxWidth: 1400, margin: "0 auto" }}
                className="process-steps"
            >
                {/* Connector line */}
                <div style={{
                    position: "absolute", top: 40, left: "10%", right: "10%", height: 1,
                    background: `linear-gradient(90deg, transparent, rgba(163, 207, 52, 0.4), rgba(163, 207, 52, 0.4), transparent)`,
                    zIndex: 0
                }} className="hidden-mobile" />

                {processSteps.map((s, i) => {
                    const ref = useRef<HTMLDivElement>(null);
                    const inView = useInView(ref, { once: true, margin: "-80px" });
                    return (
                        <motion.div
                            key={s.num}
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.12 }}
                            style={{ padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}
                        >
                            <div style={{
                                width: 80, height: 80,
                                border: `1px solid rgba(163, 207, 52, 0.2)`, borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-playfair), serif", fontSize: 24, color: NAVY,
                                margin: "0 auto 32px", background: WHITE, position: "relative",
                                fontWeight: 700,
                                boxShadow: "0 10px 20px rgba(10, 74, 117, 0.04)"
                            }}>
                                <span style={{ color: GREEN, fontSize: 18, position: "absolute", top: 10, left: 10, fontWeight: 600, opacity: 0.5 }}>{s.num}</span>
                                {i + 1}
                            </div>
                            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 22, color: NAVY, marginBottom: 16, fontWeight: 600 }}>{s.title}</div>
                            <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(10, 74, 117, 0.6)", fontWeight: 400 }}>{s.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 900px) {
          #capabilities { padding: 100px 24px !important; }
          .process-steps { grid-template-columns: 1fr 1fr !important; gap: 48px 0 !important; }
          .hidden-mobile { display: none !important; }
        }
        @media (max-width: 600px) {
          .process-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
