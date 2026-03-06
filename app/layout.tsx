import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    weight: ["300", "400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Ralph Street Laundry — Sydney's Premier Hotel Laundry Partner",
        template: "%s | Ralph Street Laundry",
    },
    description:
        "Delivering immaculate linen and laundry solutions to Sydney's most prestigious hotels — every day of the year, without compromise. 2,400 kg/hr capacity, 30+ years experience.",
    keywords: ["hotel laundry sydney", "commercial laundry", "linen rental", "five star laundry", "ralph street laundry"],
    openGraph: {
        siteName: "Ralph Street Laundry",
        locale: "en_AU",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
            <body>{children}</body>
        </html>
    );
}
