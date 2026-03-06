"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GREEN, CREAM, NAVY, DARK, WHITE } from "@/lib/constants";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section style={{ padding: "140px 60px", background: "#fcfcfd" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 80, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 2, background: GREEN }} />
                    <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>Our Capabilities</span>
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
                    Behind the<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>immaculate standard</em>
                </h2>
            </motion.div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridAutoRows: "320px",
                    gap: 16,
                    maxWidth: 1400,
                    margin: "0 auto"
                }}
                className="gallery-grid"
            >
                {galleryItems.map((item, i) => {
                    const ref = useRef<HTMLDivElement>(null);
                    const inView = useInView(ref, { once: true, margin: "-60px" });

                    return (
                        <motion.div
                            key={item.id}
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            style={{
                                background: "#e2e8f0",
                                position: "relative",
                                overflow: "hidden",
                                gridRow: item.aspect === "portrait" ? "span 2" : "span 1",
                                border: "1px solid #f1f5f9",
                                cursor: "default",
                                borderRadius: "4px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                            }}
                            whileHover={{
                                borderColor: GREEN,
                                boxShadow: "0 20px 40px rgba(10, 74, 117, 0.1)"
                            }}
                        >
                            <motion.img
                                src={item.dataSrc}
                                alt={item.caption}
                                style={{
                                    position: "absolute", inset: 0,
                                    width: "100%", height: "100%",
                                    objectFit: "cover",
                                    opacity: 0.9,
                                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                                whileHover={{ scale: 1.05 }}
                            />
                            {/* Overlay gradient - subtle for light mode */}
                            <div style={{
                                position: "absolute", inset: 0,
                                background: "linear-gradient(180deg, transparent 60%, rgba(10, 74, 117, 0.6) 100%)",
                                pointerEvents: "none",
                            }} />

                            {/* Caption overlay */}
                            <div
                                style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0,
                                    padding: "24px",
                                    zIndex: 1
                                }}
                            >
                                <span style={{
                                    fontSize: 14,
                                    letterSpacing: "0.05em",
                                    color: WHITE,
                                    fontFamily: "var(--font-playfair), serif",
                                    fontWeight: 500,
                                    textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                }}>
                                    {item.caption}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; padding: 0 0px; }
        }
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
