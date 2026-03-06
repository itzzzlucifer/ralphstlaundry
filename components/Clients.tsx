"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GREEN, CREAM, BLUE, NAVY, WHITE } from "@/lib/constants";
import { clients } from "@/lib/data";

export default function Clients() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="clients" style={{ padding: "140px 60px", background: WHITE }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginBottom: 0, maxWidth: 1400, margin: "0 auto" }}
            >
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                        <div style={{ width: 32, height: 2, background: GREEN }} />
                        <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>Our Clients</span>
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 600,
                        lineHeight: 1.15,
                        color: NAVY,
                        letterSpacing: "-0.01em"
                    }}>
                        Trusted by Sydney&apos;s<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>finest hotels</em>
                    </h2>
                </div>
                <p style={{ fontSize: 16, color: "rgba(10, 74, 117, 0.6)", maxWidth: 360, lineHeight: 1.8, fontWeight: 400 }}>
                    From boutique luxury properties to international chains — Ralph Street Laundry is
                    the quiet force behind perfectly presented guest rooms across Sydney.
                </p>
            </motion.div>

            <div
                style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 80, maxWidth: 1400, margin: "80px auto 0" }}
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
                                padding: "48px 32px",
                                border: "1px solid #f1f5f9",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-playfair), serif", fontSize: 15,
                                color: "rgba(10, 74, 117, 0.4)", letterSpacing: "0.05em",
                                textAlign: "center", lineHeight: 1.5,
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                cursor: "default",
                                background: "#fcfcfd",
                                borderRadius: "4px",
                                fontWeight: 600
                            }}
                            whileHover={{
                                color: BLUE,
                                borderColor: "rgba(0, 121, 193, 0.2)",
                                background: WHITE,
                                boxShadow: "0 10px 30px rgba(10, 74, 117, 0.08)",
                                transform: "translateY(-5px)"
                            }}
                        >
                            {c}
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 1100px) {
          .clients-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          #clients { padding: 100px 24px !important; }
          .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .clients-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
