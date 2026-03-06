"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GOLD, CREAM } from "@/lib/constants";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section style={{ padding: "120px 60px" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 60 }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 1, background: GOLD }} />
                    <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>The Operation</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.15, color: CREAM }}>
                    Behind the<br /><em style={{ fontStyle: "italic", color: GOLD }}>immaculate standard</em>
                </h2>
            </motion.div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridAutoRows: "280px",
                    gap: 8,
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
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            data-src={item.dataSrc}
                            style={{
                                background: "linear-gradient(135deg, #1a2540, #0f1624)",
                                position: "relative",
                                overflow: "hidden",
                                gridRow: item.aspect === "portrait" ? "span 2" : "span 1",
                                border: "1px solid rgba(255,255,255,0.06)",
                                cursor: "default",
                            }}
                            whileHover={{ borderColor: "rgba(201,168,76,0.3)" }}
                        >
                            <motion.img
                                src={item.dataSrc}
                                alt={item.caption}
                                style={{
                                    position: "absolute", inset: 0,
                                    width: "100%", height: "100%",
                                    objectFit: "cover",
                                    opacity: 0.6,
                                    transition: "opacity 0.4s",
                                }}
                                whileHover={{ scale: 1.05, opacity: 0.8 }}
                            />
                            {/* Overlay gradient */}
                            <div style={{
                                position: "absolute", inset: 0,
                                background: "linear-gradient(180deg, transparent 0%, rgba(12,12,16,0.5) 100%)",
                                pointerEvents: "none",
                            }} />

                            {/* Caption overlay on hover */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: "absolute", bottom: 0, left: 0, right: 0,
                                    padding: "20px 24px",
                                    background: "linear-gradient(0deg, rgba(12,12,16,0.9) 0%, transparent 100%)",
                                }}
                            >
                                <span style={{ fontSize: 12, letterSpacing: "0.1em", color: CREAM }}>{item.caption}</span>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; padding: 0 24px; }
        }
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
