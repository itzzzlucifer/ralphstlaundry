import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────
const GOLD = "#C9A84C";
const CREAM = "#F5F0E8";
const DARK = "#0C0C10";
const NAVY = "#0F1624";
const MUTED = "#8A8A9A";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

interface Feature {
  title: string;
  desc: string;
}

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: ${DARK};
    color: ${CREAM};
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  .playfair { font-family: 'Playfair Display', serif; }

  /* Grain overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
  }

  /* NAV */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 24px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease;
  }
  nav.scrolled {
    background: rgba(12,12,16,0.95);
    backdrop-filter: blur(12px);
    padding: 16px 60px;
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    letter-spacing: 0.05em;
    color: ${CREAM};
  }
  .nav-logo span { color: ${GOLD}; }
  .nav-links { display: flex; gap: 40px; list-style: none; }
  .nav-links a {
    color: rgba(245,240,232,0.6);
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: ${GOLD}; }
  .nav-cta {
    padding: 10px 28px;
    border: 1px solid ${GOLD};
    color: ${GOLD};
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    transition: all 0.3s;
    font-family: 'DM Sans', sans-serif;
  }
  .nav-cta:hover { background: ${GOLD}; color: ${DARK}; }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 60px;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(15,22,36,0.9) 0%, ${DARK} 70%);
    z-index: 1;
  }
  .hero-img {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #0a0e18 0%, #1a2540 50%, #0f1624 100%);
    z-index: 0;
  }
  .hero-line {
    position: absolute; right: 0; top: 0;
    width: 45%; height: 100%;
    z-index: 1; overflow: hidden;
  }
  .hero-line::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.04) 60%);
  }
  .hero-content { position: relative; z-index: 2; max-width: 780px; }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 16px;
    margin-bottom: 32px;
    opacity: 0;
    animation: fadeUp 0.8s ease 0.2s forwards;
  }
  .hero-eyebrow-line { width: 40px; height: 1px; background: ${GOLD}; }
  .hero-eyebrow-text {
    font-size: 11px; letter-spacing: 0.3em;
    text-transform: uppercase; color: ${GOLD};
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(52px, 7vw, 88px);
    line-height: 1.05; font-weight: 500; color: ${CREAM};
    margin-bottom: 32px;
    opacity: 0; animation: fadeUp 0.9s ease 0.4s forwards;
  }
  .hero-title em { font-style: italic; color: ${GOLD}; }
  .hero-subtitle {
    font-size: 16px; line-height: 1.8;
    color: rgba(245,240,232,0.55);
    max-width: 520px; margin-bottom: 56px; font-weight: 300;
    opacity: 0; animation: fadeUp 0.9s ease 0.6s forwards;
  }
  .hero-actions {
    display: flex; gap: 20px; align-items: center;
    opacity: 0; animation: fadeUp 0.9s ease 0.8s forwards;
  }
  .btn-primary {
    padding: 16px 44px; background: ${GOLD}; color: ${DARK};
    font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    font-weight: 500; cursor: pointer; border: none;
    font-family: 'DM Sans', sans-serif; transition: all 0.3s;
  }
  .btn-primary:hover { background: #D4B35A; transform: translateY(-1px); }
  .btn-ghost {
    padding: 16px 32px; background: transparent;
    color: rgba(245,240,232,0.7);
    font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
    cursor: pointer; border: 1px solid rgba(245,240,232,0.2);
    font-family: 'DM Sans', sans-serif; transition: all 0.3s;
  }
  .btn-ghost:hover { border-color: ${CREAM}; color: ${CREAM}; }

  .hero-stats {
    position: absolute; bottom: 60px; left: 60px; right: 60px; z-index: 2;
    display: flex; gap: 60px;
    border-top: 1px solid rgba(201,168,76,0.2);
    padding-top: 40px;
    opacity: 0; animation: fadeUp 0.9s ease 1.0s forwards;
  }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px; color: ${CREAM}; font-weight: 500;
  }
  .stat-num span { color: ${GOLD}; }
  .stat-label {
    font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: ${MUTED}; margin-top: 4px;
  }

  /* MARQUEE */
  .marquee-section { padding: 24px 0; background: ${GOLD}; overflow: hidden; }
  .marquee-track {
    display: flex;
    animation: marquee 25s linear infinite;
    white-space: nowrap;
  }
  .marquee-item {
    display: flex; align-items: center; gap: 32px;
    padding: 0 40px;
    font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase;
    color: ${DARK}; font-weight: 500; flex-shrink: 0;
  }
  .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(12,12,16,0.4); }

  /* SECTIONS */
  .section { padding: 120px 60px; }
  .section-header { margin-bottom: 80px; }
  .section-eyebrow { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
  .section-eyebrow-line { width: 32px; height: 1px; background: ${GOLD}; }
  .section-eyebrow-text { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: ${GOLD}; }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4vw, 56px); font-weight: 500;
    line-height: 1.15; color: ${CREAM}; max-width: 600px;
  }
  .section-title em { font-style: italic; color: ${GOLD}; }

  /* SERVICES */
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .service-card {
    padding: 56px 48px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.06);
    position: relative; overflow: hidden;
    transition: all 0.4s ease; cursor: default;
  }
  .service-card::before {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 2px;
    background: ${GOLD};
    transform: scaleX(0); transition: transform 0.4s ease; transform-origin: left;
  }
  .service-card:hover { background: rgba(201,168,76,0.04); border-color: rgba(201,168,76,0.2); }
  .service-card:hover::before { transform: scaleX(1); }
  .service-num { font-family: 'Playfair Display', serif; font-size: 13px; color: rgba(201,168,76,0.4); letter-spacing: 0.2em; margin-bottom: 32px; }
  .service-icon { width: 48px; height: 48px; margin-bottom: 28px; opacity: 0.7; }
  .service-title { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 500; color: ${CREAM}; margin-bottom: 20px; line-height: 1.3; }
  .service-desc { font-size: 14px; line-height: 1.8; color: rgba(245,240,232,0.45); font-weight: 300; }
  .service-link {
    display: inline-flex; align-items: center; gap: 10px;
    margin-top: 36px; font-size: 11px; letter-spacing: 0.2em;
    text-transform: uppercase; color: ${GOLD}; cursor: pointer; transition: gap 0.3s;
  }
  .service-link:hover { gap: 16px; }

  /* WHY */
  .why-section {
    padding: 120px 60px; background: ${NAVY};
    position: relative; overflow: hidden;
  }
  .why-section::before {
    content: ''; position: absolute; top: -200px; right: -200px;
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
  }
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; }
  .why-features { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
  .why-feature { padding: 32px; border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
  .why-feature:hover { border-color: rgba(201,168,76,0.3); }
  .why-feature-icon { width: 32px; height: 32px; margin-bottom: 20px; color: ${GOLD}; }
  .why-feature-title { font-family: 'Playfair Display', serif; font-size: 18px; color: ${CREAM}; margin-bottom: 10px; }
  .why-feature-desc { font-size: 13px; line-height: 1.7; color: rgba(245,240,232,0.45); font-weight: 300; }
  .why-visual { position: relative; }
  .why-visual-main {
    background: linear-gradient(135deg, #1a2540, #0f1624);
    aspect-ratio: 4/5; position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .why-visual-accent {
    position: absolute; bottom: -30px; right: -30px;
    width: 180px; height: 180px;
    border: 2px solid ${GOLD}; z-index: 2;
  }
  .why-visual-badge {
    position: absolute; top: 32px; left: -32px;
    background: ${GOLD}; color: ${DARK};
    padding: 20px 24px; z-index: 3; text-align: center;
  }
  .why-badge-num { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 600; display: block; line-height: 1; }
  .why-badge-text { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 6px; display: block; }
  .capacity-display { text-align: center; padding: 40px; }
  .capacity-num { font-family: 'Playfair Display', serif; font-size: 72px; color: rgba(201,168,76,0.15); font-weight: 600; line-height: 1; display: block; }
  .capacity-label { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: ${MUTED}; margin-top: 12px; display: block; }

  /* CLIENTS */
  .clients-section { padding: 120px 60px; }
  .clients-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; margin-top: 60px; }
  .client-item {
    padding: 36px 24px; border: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 14px;
    color: rgba(245,240,232,0.3); letter-spacing: 0.05em;
    transition: all 0.3s; text-align: center; line-height: 1.5;
  }
  .client-item:hover { color: rgba(245,240,232,0.7); border-color: rgba(201,168,76,0.2); background: rgba(201,168,76,0.03); }

  /* PROCESS */
  .process-section { padding: 120px 60px; background: linear-gradient(180deg, ${DARK} 0%, ${NAVY} 100%); }
  .process-steps {
    display: grid; grid-template-columns: repeat(4, 1fr);
    margin-top: 80px; position: relative;
  }
  .process-steps::before {
    content: ''; position: absolute; top: 28px; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent);
  }
  .process-step { padding: 0 32px; text-align: center; }
  .process-num {
    width: 56px; height: 56px;
    border: 1px solid rgba(201,168,76,0.3); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif; font-size: 18px; color: ${GOLD};
    margin: 0 auto 32px; background: ${DARK}; position: relative; z-index: 1;
  }
  .process-title { font-family: 'Playfair Display', serif; font-size: 20px; color: ${CREAM}; margin-bottom: 16px; }
  .process-desc { font-size: 13px; line-height: 1.8; color: rgba(245,240,232,0.4); font-weight: 300; }

  /* CTA */
  .cta-section { padding: 140px 60px; text-align: center; position: relative; overflow: hidden; }
  .cta-section::before {
    content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 800px; height: 800px; border-radius: 50%;
    background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%);
  }
  .cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5vw, 68px); font-weight: 500; color: ${CREAM};
    max-width: 800px; margin: 0 auto 24px; line-height: 1.15;
    position: relative; z-index: 1;
  }
  .cta-title em { font-style: italic; color: ${GOLD}; }
  .cta-subtitle { font-size: 16px; color: rgba(245,240,232,0.5); margin-bottom: 56px; font-weight: 300; position: relative; z-index: 1; }
  .cta-actions { display: flex; gap: 20px; justify-content: center; position: relative; z-index: 1; }
  .cta-phone {
    display: flex; align-items: center; gap: 16px;
    margin-top: 48px; justify-content: center; position: relative; z-index: 1;
  }
  .cta-phone-line { width: 40px; height: 1px; background: rgba(201,168,76,0.3); }
  .cta-phone-num { font-family: 'Playfair Display', serif; font-size: 22px; color: rgba(245,240,232,0.6); letter-spacing: 0.05em; }

  /* FOOTER */
  footer {
    padding: 60px; border-top: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: space-between;
    background: ${DARK};
  }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 18px; color: ${CREAM}; }
  .footer-logo span { color: ${GOLD}; }
  .footer-links { display: flex; gap: 32px; list-style: none; }
  .footer-links a {
    font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
    color: rgba(245,240,232,0.35); text-decoration: none; transition: color 0.3s;
  }
  .footer-links a:hover { color: ${GOLD}; }
  .footer-copy { font-size: 12px; color: rgba(245,240,232,0.25); letter-spacing: 0.05em; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .fade-in {
    opacity: 0; transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 900px) {
    nav, nav.scrolled { padding: 20px 24px; }
    .nav-links { display: none; }
    .hero { padding: 0 24px; }
    .hero-title { font-size: 42px; }
    .hero-stats { left: 24px; right: 24px; gap: 32px; flex-wrap: wrap; }
    .section, .why-section, .clients-section, .process-section { padding: 80px 24px; }
    .services-grid { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: 1fr; gap: 60px; }
    .clients-grid { grid-template-columns: repeat(2, 1fr); }
    .process-steps { grid-template-columns: 1fr 1fr; }
    .process-steps::before { display: none; }
    .cta-section { padding: 100px 24px; }
    footer { padding: 40px 24px; flex-direction: column; gap: 32px; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; }
    .why-features { grid-template-columns: 1fr; }
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    num: "01",
    title: "Hotel Laundry Solutions",
    desc: "Purpose-built processes designed around the exacting standards of Sydney's finest hotels. We asked hoteliers exactly what they needed — then built our entire operation around those answers.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon">
        <rect x="8" y="14" width="32" height="24" rx="2" />
        <path d="M16 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M24 22v8M20 26h8" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Premium Linen Rental",
    desc: "The most client-friendly linen rental programs on the market. Designed specifically for hospitality — our programs meet the demanding requirements of five-star operations.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon">
        <path d="M8 36V16l16-8 16 8v20" />
        <path d="M8 16l16 8 16-8" />
        <path d="M24 24v12" />
        <rect x="18" y="30" width="12" height="10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "365-Day Production",
    desc: "Seven days a week, year-round reliability. With a washing capacity of 2,400 kg per hour and fully automated control at every stage, we deliver brilliantly clean linen with a superfast turnaround.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 12v12l8 4" />
        <path d="M8 24H4M44 24h-4M24 4v4M24 40v4" />
      </svg>
    ),
  },
];

const features: Feature[] = [
  { title: "World-Class Equipment", desc: "Utilising the most advanced laundry technology available globally, with automated control at every stage." },
  { title: "Eco-Certified Process", desc: "Environmentally responsible operations with water recycling and energy-efficient systems throughout." },
  { title: "Guaranteed Turnaround", desc: "Committed delivery windows so your housekeeping team is never left waiting — ever." },
  { title: "Dedicated Account Team", desc: "A single point of contact who knows your property, your standards, and your expectations." },
];

const clients: string[] = [
  "Hilton Sydney", "InterContinental", "Sheraton Grand", "Park Hyatt", "Four Seasons",
  "Sofitel Sydney", "Novotel", "The Langham", "Radisson Blu", "Marriott Bonvoy",
];

const processSteps: ProcessStep[] = [
  { num: "I", title: "Collection", desc: "Scheduled pickup from your property on a timetable built around your housekeeping operations." },
  { num: "II", title: "Processing", desc: "Precision washing, drying, and ironing with automated quality control at every stage." },
  { num: "III", title: "Quality Check", desc: "Every item inspected before packaging — damaged linen is flagged and replaced immediately." },
  { num: "IV", title: "Delivery", desc: "Returned immaculately pressed and packaged, ready for your guests' arrival." },
];

const stats: Stat[] = [
  { value: "2,400", suffix: "kg", label: "Hourly Washing Capacity" },
  { value: "365", suffix: "/yr", label: "Days of Operation" },
  { value: "5", suffix: "★", label: "Hotel Clientele" },
  { value: "30", suffix: "+", label: "Years Serving Sydney" },
];

const marqueeItems: string[] = [
  "Hotel Laundry", "Linen Rental", "5-Star Service", "Sydney's Finest",
  "2,400 kg/hr Capacity", "365 Days a Year", "Trusted by Hotels",
  "Hotel Laundry", "Linen Rental", "5-Star Service", "Sydney's Finest",
  "2,400 kg/hr Capacity", "365 Days a Year", "Trusted by Hotels",
];

const navLinks: string[] = ["About", "Services", "Capabilities", "Clients"]

// ─── Component ────────────────────────────────────────────────────────────────
export default function RalphStreetLaundry() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll<HTMLElement>(".fade-in").forEach((el) =>
      observerRef.current?.observe(el)
    );
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">Ralph<span>·</span>Street</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
        <button className="nav-cta">Get a Quote</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img" />
        <div className="hero-bg" />
        <div className="hero-line">
          <svg
            width="100%" height="100%"
            viewBox="0 0 600 900"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0, opacity: 0.07 }}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <line key={i} x1={i * 60 - 100} y1="0" x2={i * 60 + 400} y2="900" stroke={GOLD} strokeWidth="1" />
            ))}
          </svg>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            fontFamily: "'Playfair Display',serif", fontSize: "220px",
            fontWeight: 600, color: "rgba(201,168,76,0.04)",
            whiteSpace: "nowrap", pointerEvents: "none",
            userSelect: "none", letterSpacing: "-0.02em",
          }}>
            RSL
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Sydney's Premier Laundry Partner</span>
          </div>
          <h1 className="hero-title">
            Where <em>Five-Star</em><br />
            Hotels Trust<br />
            Their Linen
          </h1>
          <p className="hero-subtitle">
            Delivering immaculate linen and laundry solutions to Sydney's most prestigious
            hotels — every day of the year, without compromise.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Request a Proposal</button>
            <button className="btn-ghost">View Our Services</button>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.value}<span>{s.suffix}</span></div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <div key={i} className="marquee-item">
              {item}<div className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="section-header fade-in">
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">What We Offer</span>
          </div>
          <h2 className="section-title">
            Laundry solutions built for<br /><em>luxury hospitality</em>
          </h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.num} className="service-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="service-num">{s.num}</div>
              {s.icon}
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-link">
                Learn more
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M0 4h14M11 1l3 3-3 3" stroke={GOLD} strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="why-section">
        <div className="why-grid">
          <div>
            <div className="fade-in">
              <div className="section-eyebrow">
                <div className="section-eyebrow-line" />
                <span className="section-eyebrow-text">Why Ralph Street</span>
              </div>
              <h2 className="section-title">
                The standard that<br /><em>five-star</em> demands
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.9, color: "rgba(245,240,232,0.45)", fontWeight: 300, marginTop: 24, maxWidth: 480 }}>
                We built our entire operation by first asking Sydney's most demanding hoteliers
                exactly what they required. The result is a laundry service that anticipates
                your needs before you voice them.
              </p>
            </div>
            <div className="why-features">
              {features.map((f, i) => (
                <div key={f.title} className="why-feature fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <svg className="why-feature-icon" viewBox="0 0 32 32" fill="none" stroke={GOLD} strokeWidth="1.5">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M11 16l3 3 7-7" />
                  </svg>
                  <div className="why-feature-title">{f.title}</div>
                  <p className="why-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="why-visual fade-in">
            <div className="why-visual-main">
              <div className="why-visual-badge">
                <span className="why-badge-num">30+</span>
                <span className="why-badge-text">Years of<br />Excellence</span>
              </div>
              <div className="capacity-display">
                <span className="capacity-num">2400</span>
                <span className="capacity-label">Kilograms per hour</span>
                <div style={{ marginTop: 24, padding: "16px 28px", border: "1px solid rgba(201,168,76,0.2)", display: "inline-block" }}>
                  <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: MUTED }}>
                    Fully Automated Processing
                  </span>
                </div>
              </div>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }} viewBox="0 0 400 500">
                {Array.from({ length: 8 }, (_, i) => <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="500" stroke={GOLD} strokeWidth="1" />)}
                {Array.from({ length: 10 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 60} x2="400" y2={i * 60} stroke={GOLD} strokeWidth="1" />)}
              </svg>
            </div>
            <div className="why-visual-accent" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-header fade-in">
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-text">How It Works</span>
          </div>
          <h2 className="section-title">From collection to<br /><em>immaculate delivery</em></h2>
        </div>
        <div className="process-steps">
          {processSteps.map((s, i) => (
            <div key={s.num} className="process-step fade-in" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="process-num">{s.num}</div>
              <div className="process-title">{s.title}</div>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <div className="section-header fade-in" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div className="section-eyebrow">
              <div className="section-eyebrow-line" />
              <span className="section-eyebrow-text">Our Clients</span>
            </div>
            <h2 className="section-title">Trusted by Sydney's<br /><em>finest hotels</em></h2>
          </div>
          <p style={{ fontSize: 14, color: "rgba(245,240,232,0.4)", maxWidth: 360, lineHeight: 1.8, fontWeight: 300 }}>
            From boutique luxury properties to international chains — Ralph Street Laundry is
            the quiet force behind perfectly presented guest rooms across Sydney.
          </p>
        </div>
        <div className="clients-grid">
          {clients.map((c, i) => (
            <div key={c} className="client-item fade-in" style={{ transitionDelay: `${i * 0.05}s` }}>{c}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title fade-in">
          Ready to elevate your<br /><em>linen standard?</em>
        </h2>
        <p className="cta-subtitle fade-in">
          Speak with our team and receive a tailored proposal for your property.
        </p>
        <div className="cta-actions fade-in">
          <button className="btn-primary">Request a Proposal</button>
          <button className="btn-ghost">Download Capabilities</button>
        </div>
        <div className="cta-phone fade-in">
          <div className="cta-phone-line" />
          <span className="cta-phone-num">02 9317 3288</span>
          <div className="cta-phone-line" />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Ralph<span>·</span>Street Laundry</div>
        <ul className="footer-links">
          {["About", "Services", "Linen Rental", "Capabilities", "Contact", "Privacy Policy"].map((link) => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
        <div className="footer-copy">© 2025 Ralph Street Laundry. Sydney, Australia.</div>
      </footer>
    </>
  );
}
