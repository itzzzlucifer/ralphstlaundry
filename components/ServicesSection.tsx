"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GOLD, CREAM } from "@/lib/constants";
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
                padding: "56px 48px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative", overflow: "hidden",
                cursor: "default",
                transition: "background 0.4s, border-color 0.4s",
            }}
            whileHover={{ background: "rgba(201,168,76,0.04)" }}
        >
            {/* Bottom gold line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: GOLD, transformOrigin: "left",
                }}
            />
            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 13, color: "rgba(201,168,76,0.4)", letterSpacing: "0.2em", marginBottom: 32 }}>
                {s.num}
            </div>
            {s.icon}
            <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 26, fontWeight: 500, color: CREAM, marginBottom: 20, lineHeight: 1.3 }}>
                {s.title}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(245,240,232,0.45)", fontWeight: 300 }}>
                {s.desc}
            </p>
            <Link href={`/services#${s.slug}`} style={{ textDecoration: "none" }}>
                <div
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        marginTop: 36, fontSize: 11, letterSpacing: "0.2em",
                        textTransform: "uppercase", color: GOLD, cursor: "pointer",
                        transition: "gap 0.3s",
                    }}
                    onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "16px")}
                    onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                >
                    Learn more
                    <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M0 4h14M11 1l3 3-3 3" stroke={GOLD} strokeWidth="1.2" />
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
        <section id="services" style={{ padding: "120px 60px" }}>
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 30 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                style={{ marginBottom: 80 }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 1, background: GOLD }} />
                    <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD }}>What We Offer</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.15, color: CREAM, maxWidth: 600 }}>
                    Laundry solutions built for<br /><em style={{ fontStyle: "italic", color: GOLD }}>luxury hospitality</em>
                </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="services-grid">
                {services.map((s, i) => (
                    <ServiceCard key={s.num} s={s} i={i} />
                ))}
            </div>

            <style>{`
        @media (max-width: 900px) {
          #services { padding: 80px 24px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
