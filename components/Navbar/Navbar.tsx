"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import styles from "./Navbar.module.css";

const navigationItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

/**
 * Barra de navegação principal do portfólio.
 *
 * Possui navegação horizontal em telas maiores e
 * menu expansível em dispositivos menores.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleNavigation() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <a className={styles.logo} href="#" aria-label="Voltar ao início">
        <span className={styles.logoSymbol}>◉</span>
        <span>MECHANICUS</span>
      </a>

      <nav
        className={`${styles.navigation} ${
          isMenuOpen ? styles.navigationOpen : ""
        }`}
        aria-label="Navegação principal"
      >
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleNavigation}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
