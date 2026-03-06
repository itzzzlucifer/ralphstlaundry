"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GREEN, BLUE, NAVY, CREAM, DARK, PHONE, WHITE } from "@/lib/constants";
import { navLinks } from "@/lib/data";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 100,
                    padding: scrolled ? "16px 60px" : "24px 60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    background: scrolled ? WHITE : "transparent",
                    boxShadow: scrolled ? "0 4px 20px rgba(10, 74, 117, 0.08)" : "none",
                    borderBottom: scrolled ? `1px solid rgba(10, 74, 117, 0.05)` : "none",
                }}
            >
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div style={{
                        fontFamily: "var(--font-playfair), serif",
                        fontSize: 22,
                        letterSpacing: "-0.01em",
                        color: NAVY,
                        fontWeight: 600
                    }}>
                        Ralph<span style={{ color: GREEN }}>·</span>Street
                    </div>
                </Link>

                {/* Desktop links */}
                <ul style={{ display: "flex", gap: 40, listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <Link
                                href={link === "Services" ? "/services" : `/#${link.toLowerCase()}`}
                                style={{
                                    color: scrolled ? "rgba(10, 74, 117, 0.7)" : "rgba(10, 74, 117, 0.8)",
                                    textDecoration: "none",
                                    fontSize: 13,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = BLUE)}
                                onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = scrolled ? "rgba(10, 74, 117, 0.7)" : "rgba(10, 74, 117, 0.8)")}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <Link href="/contact" className="nav-cta-desktop">
                        <button
                            style={{
                                padding: "10px 28px",
                                border: `1px solid ${BLUE}`,
                                color: BLUE,
                                fontSize: 12,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                background: "transparent",
                                transition: "all 0.3s",
                                fontWeight: 600,
                                borderRadius: "4px",
                                fontFamily: "var(--font-dm-sans), sans-serif",
                            }}
                            onMouseEnter={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = BLUE;
                                target.style.color = WHITE;
                            }}
                            onMouseLeave={(e: React.MouseEvent) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.background = "transparent";
                                target.style.color = BLUE;
                            }}
                        >
                            Get a Quote
                        </button>
                    </Link>

                    {/* Hamburger — visible on mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            display: "none",
                            flexDirection: "column",
                            gap: 5,
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 4,
                        }}
                        className="show-mobile"
                    >
                        <span style={{ display: "block", width: 24, height: 2, background: NAVY, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                        <span style={{ display: "block", width: 24, height: 2, background: NAVY, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ display: "block", width: 24, height: 2, background: NAVY, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                    </button>
                </div>
            </nav>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 99,
                            background: WHITE,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            padding: "0 40px",
                        }}
                    >
                        <nav>
                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                {[...navLinks, "Contact"].map((link, i) => (
                                    <motion.li
                                        key={link}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.07 }}
                                        style={{ marginBottom: 32 }}
                                    >
                                        <Link
                                            href={
                                                link === "Contact"
                                                    ? "/contact"
                                                    : link === "Services"
                                                        ? "/services"
                                                        : `/#${link.toLowerCase()}`
                                            }
                                            onClick={() => setMenuOpen(false)}
                                            style={{
                                                fontFamily: "var(--font-playfair), serif",
                                                fontSize: 36,
                                                color: NAVY,
                                                textDecoration: "none",
                                                letterSpacing: "-0.01em",
                                                fontWeight: 600,
                                                transition: "color 0.3s",
                                            }}
                                            onMouseEnter={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = BLUE)}
                                            onMouseLeave={(e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = NAVY)}
                                        >
                                            {link}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                marginTop: 48,
                                paddingTop: 48,
                                borderTop: `1px solid rgba(10, 74, 117, 0.1)`,
                                width: "100%"
                            }}
                        >
                            <p style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 8 }}>Call Us</p>
                            <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 22, color: BLUE, fontWeight: 600 }}>{PHONE}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nav-cta-desktop { display: none !important; }
          nav { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
        </>
    );
}
