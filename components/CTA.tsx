"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GOLD, CREAM, DARK } from "@/lib/constants";

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section style={{ padding: "140px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: 800, height: 800, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
                pointerEvents: "none",
            }} />

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{ position: "relative", zIndex: 1 }}
            >
                <h2 style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 500, color: CREAM,
                    maxWidth: 800, margin: "0 auto 24px", lineHeight: 1.15,
                }}>
                    Ready to elevate your<br /><em style={{ fontStyle: "italic", color: GOLD }}>linen standard?</em>
                </h2>
                <p style={{ fontSize: 16, color: "rgba(245,240,232,0.5)", marginBottom: 56, fontWeight: 300 }}>
                    Speak with our team and receive a tailored proposal for your property.
                </p>
                <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/contact">
                        <button
                            style={{
                                padding: "16px 44px", background: GOLD, color: DARK,
                                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                                fontWeight: 500, cursor: "pointer", border: "none",
                                fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                            }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = "#D4B35A";
                                target.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = GOLD;
                                target.style.transform = "translateY(0)";
                            }}
                        >
                            Request a Proposal
                        </button>
                    </Link>
                    <button
                        style={{
                            padding: "16px 32px", background: "transparent",
                            color: "rgba(245,240,232,0.7)",
                            fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                            cursor: "pointer", border: "1px solid rgba(245,240,232,0.2)",
                            fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                        }}
                        onMouseEnter={(e: React.MouseEvent) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.borderColor = CREAM;
                            target.style.color = CREAM;
                        }}
                        onMouseLeave={(e: React.MouseEvent) => {
                            const target = e.currentTarget as HTMLElement;
                            target.style.borderColor = "rgba(245,240,232,0.2)";
                            target.style.color = "rgba(245,240,232,0.7)";
                        }}
                    >
                        Download Capabilities
                    </button>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48, justifyContent: "center" }}>
                    <div style={{ width: 40, height: 1, background: "rgba(201,168,76,0.3)" }} />
                    <span style={{ fontFamily: "var(--font-playfair), serif", fontSize: 22, color: "rgba(245,240,232,0.6)", letterSpacing: "0.05em" }}>
                        02 9317 3288
                    </span>
                    <div style={{ width: 40, height: 1, background: "rgba(201,168,76,0.3)" }} />
                </div>
            </motion.div>

            <style>{`
        @media (max-width: 900px) {
          section { padding: 100px 24px !important; }
        }
      `}</style>
        </section>
    );
}
