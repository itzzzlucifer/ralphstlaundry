import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Request a Proposal",
    description:
        "Contact Ralph Street Laundry to receive a tailored hotel laundry and linen rental proposal for your Sydney property.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
