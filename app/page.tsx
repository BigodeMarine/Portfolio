"use client";

import { useState } from "react";
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

/**
 * Página principal do portfólio.
 *
 * Controla a tela de introdução e, após o despertar
 * da máquina, exibe a estrutura principal do portfólio.
 */
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  function handleEnter() {
    setShowIntro(false);
  }

  if (showIntro) {
    return <Intro onEnter={handleEnter} />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}