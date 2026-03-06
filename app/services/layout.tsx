import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Explore Ralph Street Laundry's hotel laundry solutions, premium linen rental programs, and 365-day production capability for Sydney's finest hotels.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
