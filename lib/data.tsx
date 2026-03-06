import type { Service, Feature, ProcessStep, Stat, GalleryItem } from "@/types";
import { GOLD } from "@/lib/constants";

export const services: Service[] = [
    {
        num: "01",
        slug: "hotel-laundry",
        title: "Hotel Laundry Solutions",
        desc: "Purpose-built processes designed around the exacting standards of Sydney's finest hotels. We asked hoteliers exactly what they needed — then built our entire operation around those answers.",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon" style={{ width: 48, height: 48, marginBottom: 28, opacity: 0.7 }}>
                <rect x="8" y="14" width="32" height="24" rx="2" />
                <path d="M16 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                <path d="M24 22v8M20 26h8" />
            </svg>
        ),
        detail: "Our hotel laundry solutions are engineered from the ground up based on direct input from Sydney's most demanding hotel operators. Every process, every timeline, every folding standard has been defined in partnership with executive housekeepers at five-star properties.",
        inclusions: [
            "Dedicated account manager assigned to your property",
            "Guaranteed same-day turnaround on standard volumes",
            "Custom wash programs for your specific linen specifications",
            "Real-time order tracking and delivery notifications",
            "On-site consultation and process optimisation",
            "Emergency overnight processing available",
            "Damage reporting and replacement coordination",
            "Monthly usage reports and cost analysis",
        ],
    },
    {
        num: "02",
        slug: "linen-rental",
        title: "Premium Linen Rental",
        desc: "The most client-friendly linen rental programs on the market. Designed specifically for hospitality — our programs meet the demanding requirements of five-star operations.",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon" style={{ width: 48, height: 48, marginBottom: 28, opacity: 0.7 }}>
                <path d="M8 36V16l16-8 16 8v20" />
                <path d="M8 16l16 8 16-8" />
                <path d="M24 24v12" />
                <rect x="18" y="30" width="12" height="10" />
            </svg>
        ),
        detail: "Eliminate capital expenditure on linen entirely. Our premium rental programs provide access to five-star quality sheets, towels, and table linen — maintained to the highest standard — for a simple, predictable per-unit fee. No more par stock headaches.",
        inclusions: [
            "Fully stocked par levels managed by Ralph Street",
            "Hotel Collection Egyptian cotton sheets and towels",
            "Restaurant and banquet linen in a range of styles",
            "Spa and wellness towelling in luxury weights",
            "Flexible contract terms with no lock-in penalties",
            "Unlimited replacements for damaged or worn items",
            "Seasonal restocking at no additional charge",
            "Inventory audits conducted quarterly",
        ],
    },
    {
        num: "03",
        slug: "365-day-production",
        title: "365-Day Production",
        desc: "Seven days a week, year-round reliability. With a washing capacity of 2,400 kg per hour and fully automated control at every stage, we deliver brilliantly clean linen with a superfast turnaround.",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke={GOLD} strokeWidth="1.5" className="service-icon" style={{ width: 48, height: 48, marginBottom: 28, opacity: 0.7 }}>
                <circle cx="24" cy="24" r="16" />
                <path d="M24 12v12l8 4" />
                <path d="M8 24H4M44 24h-4M24 4v4M24 40v4" />
            </svg>
        ),
        detail: "Hotels don't close on Christmas — and neither do we. Our 2,400 kg per hour processing plant operates every day of the year, including public holidays. Fully automated tunnel washers, continuous batch dryers, and robotic flatwork ironers ensure consistent quality regardless of volume.",
        inclusions: [
            "Continuous production 365 days per year including public holidays",
            "2,400 kg per hour washing throughput",
            "Automated tunnel washers with programmable chemistry",
            "Robotic flatwork ironing and folding",
            "Real-time capacity monitoring and load balancing",
            "Early morning and late-night collection windows",
            "Peak-period surge capacity management",
            "Environmental compliance: water recycling and solar-assisted heating",
        ],
    },
];

export const features: Feature[] = [
    { title: "World-Class Equipment", desc: "Utilising the most advanced laundry technology available globally, with automated control at every stage." },
    { title: "Eco-Certified Process", desc: "Environmentally responsible operations with water recycling and energy-efficient systems throughout." },
    { title: "Guaranteed Turnaround", desc: "Committed delivery windows so your housekeeping team is never left waiting — ever." },
    { title: "Dedicated Account Team", desc: "A single point of contact who knows your property, your standards, and your expectations." },
];

export const clients: string[] = [
    "Hilton Sydney", "InterContinental", "Sheraton Grand", "Park Hyatt", "Four Seasons",
    "Sofitel Sydney", "Novotel", "The Langham", "Radisson Blu", "Marriott Bonvoy",
];

export const processSteps: ProcessStep[] = [
    { num: "I", title: "Collection", desc: "Scheduled pickup from your property on a timetable built around your housekeeping operations." },
    { num: "II", title: "Processing", desc: "Precision washing, drying, and ironing with automated quality control at every stage." },
    { num: "III", title: "Quality Check", desc: "Every item inspected before packaging — damaged linen is flagged and replaced immediately." },
    { num: "IV", title: "Delivery", desc: "Returned immaculately pressed and packaged, ready for your guests' arrival." },
];

export const stats: Stat[] = [
    { value: "2,400", suffix: "kg", label: "Hourly Washing Capacity" },
    { value: "365", suffix: "/yr", label: "Days of Operation" },
    { value: "5", suffix: "★", label: "Hotel Clientele" },
    { value: "30", suffix: "+", label: "Years Serving Sydney" },
];

export const marqueeItems: string[] = [
    "Hotel Laundry", "Linen Rental", "5-Star Service", "Sydney's Finest",
    "2,400 kg/hr Capacity", "365 Days a Year", "Trusted by Hotels",
    "Hotel Laundry", "Linen Rental", "5-Star Service", "Sydney's Finest",
    "2,400 kg/hr Capacity", "365 Days a Year", "Trusted by Hotels",
];

export const galleryItems: GalleryItem[] = [
    { id: 1, aspect: "landscape", caption: "Processing Plant Floor", dataSrc: "/images/facility.png" },
    { id: 2, aspect: "portrait", caption: "Premium Linen Stack", dataSrc: "/images/towels.png" },
    { id: 3, aspect: "portrait", caption: "Five-Star Presentation", dataSrc: "/images/hero.png" },
    { id: 4, aspect: "landscape", caption: "Luxury Hotel Linen", dataSrc: "/images/hero.png" },
    { id: 5, aspect: "landscape", caption: "Automated Systems", dataSrc: "/images/facility.png" },
    { id: 6, aspect: "portrait", caption: "Quality Inspection", dataSrc: "/images/towels.png" },
];

export const navLinks: string[] = ["About", "Services", "Capabilities", "Clients"];
