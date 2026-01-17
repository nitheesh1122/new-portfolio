"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodingProfile from "@/components/CodingProfile";
import Projects from "@/components/Projects";
import HallOfFame from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ResumeModal from "@/components/ResumeModal";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About />
      <Skills />
      <CodingProfile />
      <Projects />
      <HallOfFame />
      <Contact />
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}
