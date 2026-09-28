"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";

import styles from "./Intro.module.css";

interface IntroProps {
  onEnter: () => void;
}

/**
 * Tela inicial do portfólio.
 *
 * A Intro funciona como uma "capa" para o site.
 * Ao interagir, inicia o despertar da máquina e,
 * após a animação, libera o acesso ao portfólio.
 */
export default function Intro({ onEnter }: IntroProps) {
  const [isAwakening, setIsAwakening] = useState(false);

  function handleAwakening() {
    if (isAwakening) {
      return;
    }

    setIsAwakening(true);
  }

  return (
    <motion.main
      className={styles.intro}
      onClick={handleAwakening}
      role="button"
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter" || event.key === " ") {
          handleAwakening();
        }
      }}
      aria-label="Despertar o espírito da máquina e entrar no portfólio"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isAwakening ? 0 : 1,
      }}
      transition={{
        duration: 1.4,
        delay: 1.1,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (isAwakening) {
          onEnter();
        }
      }}
    >
      <motion.div
        className={styles.coreRing}
        animate={{
          opacity: isAwakening ? [0.15, 0.7, 0.4, 0.9] : 0.15,
          scale: isAwakening ? [0.9, 1.05, 1.15, 1.3] : 1,
          rotate: isAwakening ? 720 : 0,
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={styles.core}
        animate={{
          opacity: isAwakening ? [0.25, 0.8, 0.3, 1] : 0.25,
          scale: isAwakening ? [0.85, 1.15, 0.95, 1.4] : 1,
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={styles.system}
        animate={{
          opacity: isAwakening ? 0 : 1,
          y: isAwakening ? -10 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>
          <span className={styles.systemIndicator} />
          SYSTEM
        </span>
      </motion.div>

      <motion.div
        className={styles.content}
        animate={{
          opacity: isAwakening ? 0 : 1,
          scale: isAwakening ? 1.04 : 1,
          y: isAwakening ? -8 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className={styles.separator} />

        <h1>
          DESPERTE O ESPÍRITO
          <span>DA MÁQUINA</span>
        </h1>

        <h2>Clique para iniciar</h2>

        <div className={styles.separator} />

        <p className={styles.initialize}>
          {isAwakening ? "INITIALIZING..." : "INITIALIZE"}
        </p>
      </motion.div>

      <motion.footer
        className={styles.footer}
        animate={{
          opacity: isAwakening ? 0 : 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>MECHANICUS ARCHIVE</span>
        <span>001 // 001</span>
      </motion.footer>
    </motion.main>
  );
}
