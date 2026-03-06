"use client";

import { GREEN, NAVY, WHITE } from "@/lib/constants";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
    return (
        <div style={{ padding: "20px 0", background: GREEN, overflow: "hidden" }}>
            <div className="marquee-track">
                {marqueeItems.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex", alignItems: "center", gap: 32,
                            padding: "0 40px",
                            fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
                            color: NAVY, fontWeight: 700, flexShrink: 0,
                        }}
                    >
                        {item}
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(10, 74, 117, 0.2)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
