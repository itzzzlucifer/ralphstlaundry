"use client";

import { GOLD, DARK } from "@/lib/constants";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
    return (
        <div style={{ padding: "24px 0", background: GOLD, overflow: "hidden" }}>
            <div className="marquee-track">
                {marqueeItems.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex", alignItems: "center", gap: 32,
                            padding: "0 40px",
                            fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
                            color: DARK, fontWeight: 500, flexShrink: 0,
                        }}
                    >
                        {item}
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(12,12,16,0.4)" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
