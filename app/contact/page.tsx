"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GREEN, BLUE, CREAM, DARK, NAVY, MUTED, PHONE, WHITE } from "@/lib/constants";

interface FormState {
    hotelName: string;
    contactPerson: string;
    email: string;
    phone: string;
    linenVolume: string;
    message: string;
}

const volumes = [
    "Under 100 kg/week",
    "100–300 kg/week",
    "300–700 kg/week",
    "700–1,500 kg/week",
    "1,500–3,000 kg/week",
    "Over 3,000 kg/week",
];

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 20px",
    background: "#fdfdfd",
    border: "1px solid #e2e8f0",
    color: NAVY,
    fontSize: 15,
    letterSpacing: "0.01em",
    fontFamily: "var(--font-dm-sans), sans-serif",
    outline: "none",
    transition: "all 0.3s",
    borderRadius: "4px"
};

export default function ContactPage() {
    const [form, setForm] = useState<FormState>({
        hotelName: "",
        contactPerson: "",
        email: "",
        phone: "",
        linenVolume: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const getInputStyle = (field: string): React.CSSProperties => ({
        ...inputStyle,
        borderColor: focused === field ? BLUE : "#e2e8f0",
        boxShadow: focused === field ? "0 0 0 4px rgba(0, 121, 193, 0.05)" : "none",
        background: focused === field ? WHITE : "#fdfdfd"
    });

    return (
        <>
            <Nav />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "160px 60px 100px",
                    position: "relative",
                    overflow: "hidden",
                    background: WHITE,
                }}>
                    <div style={{
                        position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
                        fontFamily: "var(--font-playfair), serif", fontSize: "240px",
                        fontWeight: 600, color: "rgba(10, 74, 117, 0.02)",
                        pointerEvents: "none", userSelect: "none", letterSpacing: "-0.02em",
                    }}>
                        RSL
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1, maxWidth: 800 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 40, height: 2, background: GREEN }} />
                            <Link href="/" style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: NAVY, textDecoration: "none", fontWeight: 700 }}>
                                Ralph Street Laundry
                            </Link>
                        </div>
                        <h1 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(48px, 7vw, 88px)",
                            lineHeight: 1.05, fontWeight: 600, color: NAVY,
                            letterSpacing: "-0.02em"
                        }}>
                            Request a <em style={{ fontStyle: "italic", color: GREEN, fontWeight: 500 }}>Proposal</em>
                        </h1>
                        <p style={{ fontSize: 18, color: "rgba(10, 74, 117, 0.6)", marginTop: 24, fontWeight: 400, maxWidth: 540, lineHeight: 1.8 }}>
                            Tell us about your property and we&apos;ll respond with a tailored laundry and linen solution within 24 hours.
                        </p>
                    </motion.div>
                </section>

                {/* Form */}
                <section style={{ padding: "100px 60px 140px", background: "#fcfcfd" }}>
                    <div style={{ maxWidth: 900, margin: "0 auto" }}>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center", padding: "100px 48px",
                                    border: `1px solid rgba(163, 207, 52, 0.2)`,
                                    background: WHITE,
                                    borderRadius: "8px",
                                    boxShadow: "0 20px 40px rgba(10, 74, 117, 0.05)"
                                }}
                            >
                                <div style={{
                                    width: 80, height: 80, background: "rgba(163, 207, 52, 0.1)",
                                    borderRadius: "50%", display: "flex", alignItems: "center",
                                    justifyContent: "center", margin: "0 auto 32px"
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3">
                                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 40, color: NAVY, marginBottom: 20, fontWeight: 600 }}>
                                    Enquiry Received
                                </h2>
                                <p style={{ fontSize: 16, color: "rgba(10, 74, 117, 0.6)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 48px" }}>
                                    Thank you for reaching out. A member of our concierge team will contact you at <strong>{form.hotelName}</strong> within 24 hours.
                                </p>
                                <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                                    <Link href="/">
                                        <button style={{
                                            padding: "16px 32px", background: NAVY, color: WHITE,
                                            borderRadius: "4px", border: "none", fontWeight: 700,
                                            fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                                            cursor: "pointer"
                                        }}>Return Home</button>
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                onSubmit={handleSubmit}
                                noValidate
                                style={{
                                    background: WHITE,
                                    padding: "64px",
                                    borderRadius: "8px",
                                    border: "1px solid #f1f5f9",
                                    boxShadow: "0 20px 60px rgba(10, 74, 117, 0.04)"
                                }}
                                className="contact-form"
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 }} className="form-grid">
                                    {/* Hotel Name */}
                                    <div>
                                        <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                            Hotel Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="hotelName"
                                            value={form.hotelName}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("hotelName")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="e.g. Park Hyatt Sydney"
                                            required
                                            style={getInputStyle("hotelName")}
                                        />
                                    </div>

                                    {/* Contact Person */}
                                    <div>
                                        <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                            Contact Person *
                                        </label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={form.contactPerson}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("contactPerson")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Full name"
                                            required
                                            style={getInputStyle("contactPerson")}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("email")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="you@yourhotel.com"
                                            required
                                            style={getInputStyle("email")}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            onFocus={() => setFocused("phone")}
                                            onBlur={() => setFocused(null)}
                                            placeholder="02 XXXX XXXX"
                                            style={getInputStyle("phone")}
                                        />
                                    </div>
                                </div>

                                {/* Linen Volume */}
                                <div style={{ marginBottom: 32 }}>
                                    <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                        Estimated Weekly Linen Volume *
                                    </label>
                                    <select
                                        name="linenVolume"
                                        value={form.linenVolume}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("linenVolume")}
                                        onBlur={() => setFocused(null)}
                                        required
                                        style={{
                                            ...getInputStyle("linenVolume"),
                                            appearance: "none",
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230079C1' strokeWidth='2'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 24px center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <option value="" disabled>Select a range…</option>
                                        {volumes.map((v) => (
                                            <option key={v} value={v}>{v}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div style={{ marginBottom: 48 }}>
                                    <label style={{ display: "block", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 12, fontWeight: 700 }}>
                                        Message / Additional Notes
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        rows={6}
                                        placeholder="Tell us about your property's specific requirements, current laundry challenges, or anything else we should know…"
                                        style={{
                                            ...getInputStyle("message"),
                                            resize: "vertical",
                                            lineHeight: 1.8,
                                        }}
                                    />
                                </div>

                                {/* Submit */}
                                <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "20px 64px",
                                            background: BLUE, color: WHITE,
                                            fontSize: 14, letterSpacing: "0.15em", textTransform: "uppercase",
                                            fontWeight: 700, cursor: "pointer", border: "none",
                                            borderRadius: "4px",
                                            fontFamily: "var(--font-dm-sans), sans-serif", transition: "all 0.3s",
                                            boxShadow: "0 10px 20px rgba(0, 121, 193, 0.15)"
                                        }}
                                        onMouseEnter={(e: React.MouseEvent) => {
                                            const target = e.currentTarget as HTMLElement;
                                            target.style.background = "#0066a3";
                                            target.style.transform = "translateY(-3px)";
                                            target.style.boxShadow = "0 15px 30px rgba(0, 121, 193, 0.25)";
                                        }}
                                        onMouseLeave={(e: React.MouseEvent) => {
                                            const target = e.currentTarget as HTMLElement;
                                            target.style.background = BLUE;
                                            target.style.transform = "translateY(0)";
                                            target.style.boxShadow = "0 10px 20px rgba(0, 121, 193, 0.15)";
                                        }}
                                    >
                                        Send Enquiry
                                    </button>
                                    <div>
                                        <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(10, 74, 117, 0.4)", marginBottom: 4, fontWeight: 700 }}>Or Call Directly</p>
                                        <p style={{ fontSize: 18, color: BLUE, fontWeight: 700, fontFamily: "var(--font-playfair)" }}>{PHONE}</p>
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        @media (max-width: 900px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .contact-form { padding: 40px 24px !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
        </>
    );
}
