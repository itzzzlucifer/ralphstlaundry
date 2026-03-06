"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GREEN, BLUE, CREAM, NAVY, WHITE, DARK } from "@/lib/constants";
import { services } from "@/lib/data";

function ServiceCard({ s, i }: { s: (typeof services)[number]; i: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
                padding: "64px 48px",
                background: WHITE,
                border: "1px solid #f1f5f9",
                position: "relative", overflow: "hidden",
                cursor: "default",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
            }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(10, 74, 117, 0.08)",
                borderColor: "rgba(163, 207, 52, 0.2)"
            }}
        >
            {/* Top accent line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 4,
                    background: GREEN, transformOrigin: "left",
                }}
            />

            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 13, color: "rgba(10, 74, 117, 0.3)", letterSpacing: "0.2em", marginBottom: 32, fontWeight: 700 }}>
                {s.num}
            </div>

            <div style={{ marginBottom: 32 }}>
                {s.icon}
            </div>

            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 28, fontWeight: 600, color: NAVY, marginBottom: 20, lineHeight: 1.3 }}>
                {s.title}
            </div>

            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(10, 74, 117, 0.6)", fontWeight: 400 }}>
                {s.desc}
            </p>

            <Link href={`/services#${s.slug}`} style={{ textDecoration: "none" }}>
                <div
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        marginTop: 40, fontSize: 12, letterSpacing: "0.15em",
                        textTransform: "uppercase", color: BLUE, cursor: "pointer",
                        fontWeight: 700,
                        transition: "gap 0.3s",
                    }}
                    onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "16px")}
                    onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                >
                    Detailed Overview
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                        <path d="M0 5h18M13 1l5 4-5 4" stroke={BLUE} strokeWidth="1.5" />
                    </svg>
                </div>
            </Link>
        </motion.div>
    );
}

export default function Services() {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="services" style={{ padding: "140px 60px", background: "#fcfcfd" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 80, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 2, background: GREEN }} />
                    <span style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>Service Excellence</span>
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
                    Laundry solutions built for<br /><em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>luxury hospitality</em>
                </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1400, margin: "0 auto" }} className="services-grid">
                {services.map((s, i) => (
                    <ServiceCard key={s.num} s={s} i={i} />
                ))}
            </div>

            <style>{`
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 900px) {
          #services { padding: 80px 24px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
