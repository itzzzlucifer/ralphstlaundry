"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GOLD, CREAM } from "@/lib/constants";
import { clients } from "@/lib/data";

export default function Clients() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="clients" style={{ padding: "120px 60px" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 0 }}
            >
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 32, height: 1, background: GOLD }} />
                        <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>Our Clients</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.15, color: CREAM }}>
                        Trusted by Sydney&apos;s<br /><em style={{ fontStyle: "italic", color: GOLD }}>finest hotels</em>
                    </h2>
                </div>
                <p style={{ fontSize: 14, color: "rgba(245,240,232,0.4)", maxWidth: 360, lineHeight: 1.8, fontWeight: 300 }}>
                    From boutique luxury properties to international chains — Ralph Street Laundry is
                    the quiet force behind perfectly presented guest rooms across Sydney.
                </p>
            </motion.div>

            <div
                style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, marginTop: 60 }}
                className="clients-grid"
            >
                {clients.map((c, i) => {
                    const ref = useRef<HTMLDivElement>(null);
                    const inView = useInView(ref, { once: true, margin: "-60px" });
                    return (
                        <motion.div
                            key={c}
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            style={{
                                padding: "36px 24px",
                                border: "1px solid rgba(255,255,255,0.05)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-playfair), serif", fontSize: 14,
                                color: "rgba(245,240,232,0.3)", letterSpacing: "0.05em",
                                textAlign: "center", lineHeight: 1.5,
                                transition: "all 0.3s",
                                cursor: "default",
                            }}
                            whileHover={{
                                color: "rgba(245,240,232,0.7)",
                                borderColor: "rgba(201,168,76,0.2)",
                                background: "rgba(201,168,76,0.03)",
                            }}
                        >
                            {c}
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 900px) {
          #clients { padding: 80px 24px !important; }
          .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </section>
    );
}
