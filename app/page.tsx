import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesSection from "@/components/ServicesSection";
import Why from "@/components/Why";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <ServicesSection />
                <Why />
                <Process />
                <Gallery />
                <Clients />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
