import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/dental/Navbar";
import { Hero } from "@/components/dental/Hero";
import { TrustStrip } from "@/components/dental/TrustStrip";
import { Stats } from "@/components/dental/Stats";
import { Services } from "@/components/dental/Services";
import { Doctors } from "@/components/dental/Doctors";
import { BeforeAfter } from "@/components/dental/BeforeAfter";
import { Testimonials } from "@/components/dental/Testimonials";
import { Footer } from "@/components/dental/Footer";
import { WhatsAppFab } from "@/components/dental/WhatsAppFab";
import AppointmentBooking from "@/components/dental/appoinement";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "El Hayat Dental — Premium Dental Clinic in Oran" },
      { name: "description", content: "Clinique Dentaire El Hayat — premium cosmetic, restorative, and family dentistry in Oran, Algeria. Implants, veneers, Invisalign, smile design." },
      { property: "og:title", content: "El Hayat Dental — Premium Dental Clinic in Oran" },
      { property: "og:description", content: "Cosmetic and restorative dentistry in Oran, designed for modern patients." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Stats />
        <Services />
        <Doctors />
        <BeforeAfter />
        <Testimonials />
        <AppointmentBooking />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
