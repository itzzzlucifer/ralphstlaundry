"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GOLD, CREAM, DARK, NAVY, MUTED } from "@/lib/constants";

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
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: CREAM,
    fontSize: 14,
    letterSpacing: "0.02em",
    fontFamily: "var(--font-dm-sans), sans-serif",
    outline: "none",
    transition: "border-color 0.3s",
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
        borderColor: focused === field ? GOLD : "rgba(255,255,255,0.1)",
    });

    return (
        <>
            <Nav />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: "45vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "140px 60px 80px",
                    position: "relative",
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${DARK} 0%, ${NAVY} 100%)`,
                }}>
                    <div style={{
                        position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)",
                        fontFamily: "var(--font-playfair), serif", fontSize: "200px",
                        fontWeight: 600, color: "rgba(201,168,76,0.04)",
                        pointerEvents: "none", userSelect: "none", letterSpacing: "-0.02em",
                    }}>
                        RSL
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                            <div style={{ width: 32, height: 1, background: GOLD }} />
                            <Link href="/" style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: GOLD, textDecoration: "none" }}>
                                Ralph Street Laundry
                            </Link>
                        </div>
                        <h1 style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "clamp(42px, 6vw, 72px)",
                            lineHeight: 1.1, fontWeight: 500, color: CREAM,
                        }}>
                            Request a <em style={{ fontStyle: "italic", color: GOLD }}>Proposal</em>
                        </h1>
                        <p style={{ fontSize: 16, color: "rgba(245,240,232,0.5)", marginTop: 20, fontWeight: 300, maxWidth: 540 }}>
                            Tell us about your property and we&apos;ll respond with a tailored laundry and linen solution within 24 hours.
                        </p>
                    </motion.div>
                </section>

                {/* Form */}
                <section style={{ padding: "80px 60px 120px", background: DARK }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    textAlign: "center", padding: "80px 40px",
                                    border: `1px solid rgba(201,168,76,0.3)`,
                                    background: "rgba(201,168,76,0.04)",
                                }}
                            >
                                <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: 48, color: GOLD, marginBottom: 24 }}>✓</div>
                                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: 32, color: CREAM, marginBottom: 16 }}>
                                    Thank you, {form.hotelName || "there"}
                                </h2>
                                <p style={{ fontSize: 15, color: "rgba(245,240,232,0.5)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 40px" }}>
                                    Your enquiry has been received. A member of our team will be in touch within 24 hours with a tailored proposal.
                                </p>
                                <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: 20, color: "rgba(245,240,232,0.5)" }}>
                                    02 9317 3288
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="form-grid">
                                    {/* Hotel Name */}
                                    <div>
                                        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
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
                                        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
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
                                        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
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
                                        <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
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
                                <div style={{ marginBottom: 24 }}>
                                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
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
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' strokeWidth='1.5'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 20px center",
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
                                <div style={{ marginBottom: 40 }}>
                                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>
                                        Message / Additional Notes
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        rows={5}
                                        placeholder="Tell us about your property's specific requirements, current laundry challenges, or anything else we should know…"
                                        style={{
                                            ...getInputStyle("message"),
                                            resize: "vertical",
                                            lineHeight: 1.7,
                                        }}
                                    />
                                </div>

                                {/* Submit */}
                                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "18px 52px",
                                            background: GOLD, color: DARK,
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
                                        Send Enquiry
                                    </button>
                                    <p style={{ fontSize: 12, color: "rgba(245,240,232,0.3)", letterSpacing: "0.05em" }}>
                                        Or call us directly: <span style={{ color: "rgba(245,240,232,0.6)", fontFamily: "var(--font-playfair)", fontSize: 16 }}>02 9317 3288</span>
                                    </p>
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
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
        </>
    );
}
