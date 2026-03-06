"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GOLD, CREAM, DARK } from "@/lib/constants";
import { processSteps } from "@/lib/data";

export default function Process() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section
            id="capabilities"
            style={{ padding: "120px 60px", background: "linear-gradient(180deg, #0C0C10 0%, #0F1624 100%)" }}
        >
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 80 }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 1, background: GOLD }} />
                    <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>How It Works</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.15, color: CREAM }}>
                    From collection to<br /><em style={{ fontStyle: "italic", color: GOLD }}>immaculate delivery</em>
                </h2>
            </motion.div>

            <div
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative" }}
                className="process-steps"
            >
                {/* Connector line */}
                <div style={{
                    position: "absolute", top: 28, left: "10%", right: "10%", height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent)",
                }} />

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
                            style={{ padding: "0 32px", textAlign: "center" }}
                        >
                            <div style={{
                                width: 56, height: 56,
                                border: "1px solid rgba(201,168,76,0.3)", borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-playfair), serif", fontSize: 18, color: GOLD,
                                margin: "0 auto 32px", background: DARK, position: "relative", zIndex: 1,
                            }}>
                                {s.num}
                            </div>
                            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 20, color: CREAM, marginBottom: 16 }}>{s.title}</div>
                            <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(245,240,232,0.4)", fontWeight: 300 }}>{s.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 900px) {
          #capabilities { padding: 80px 24px !important; }
          .process-steps { grid-template-columns: 1fr 1fr !important; }
          .process-steps > div:first-child { display: none; }
        }
      `}</style>
        </section>
    );
}
