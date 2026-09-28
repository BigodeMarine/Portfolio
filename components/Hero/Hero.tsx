import { ArrowDown, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

import styles from "./Hero.module.css";

/**
 * Seção principal do portfólio.
 *
 * Apresenta a identidade profissional do desenvolvedor
 * e direciona o visitante para projetos e contato.
 */
export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} />

      <div className={styles.scanLine} />

      <div className={styles.content}>
        <motion.div
          className={styles.status}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={styles.statusIndicator} />
          SYSTEM ONLINE
        </motion.div>

        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Cpu size={16} strokeWidth={1.5} />
          <span>MECHANICUS ARCHIVE // DEVELOPER</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          EDSON
          <span>DESENVOLVEDOR FULLSTACK</span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          Construindo sistemas, aplicações e experiências digitais com código,
          arquitetura e propósito.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a className={styles.primaryAction} href="#projects">
            VER PROJETOS
          </a>

          <a className={styles.secondaryAction} href="#contact">
            ENTRAR EM CONTATO
          </a>
        </motion.div>
      </div>
      <motion.div
        className={styles.contactPanel}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      >
        <div className={`${styles.contactCard} ${styles.contactCardTop}`}>
          <div className={styles.contactIcon}>
            <a
              href="https://www.linkedin.com/in/edson-garcia-desenvolvedor-fullstack/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="64"
                height="64"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.373 4.27 5.461v6.281ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.554 20.452h3.565V8.999H3.554v11.453Z" />
              </svg>
            </a>
          </div>

          <div>
            <span>LINKEDIN</span>
            <small>PROFESSIONAL NETWORK</small>
          </div>
        </div>

        <div className={`${styles.contactCard} ${styles.contactCardMain}`}>
          <div className={styles.contactIcon}>
            <a
              href="https://github.com/BigodeMarine"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                width="64"
                height="64"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.003 10.003 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>
          </div>

          <div>
            <span>GITHUB</span>
            <small>CODE // PROJECTS</small>
          </div>
        </div>

        <div className={`${styles.contactCard} ${styles.contactCardBottom}`}>
          <div className={styles.contactIcon}>
            <a href="mailto:edson15a7x@hotmail.com">
              <Mail size={64} strokeWidth={1.5} />
            </a>
          </div>

          <div>
            <span>EMAIL</span>
            <small>COMMUNICATION CHANNEL</small>
          </div>
        </div>
      </motion.div>

      <div className={styles.archiveInfo}>
        <span>UNIT // 001</span>
        <span>STATUS // OPERATIONAL</span>
        <span>SECTOR // SOFTWARE ENGINEERING</span>
      </div>

      <a
        className={styles.scrollIndicator}
        href="#about"
        aria-label="Ir para a seção Sobre"
      >
        <span>SCROLL TO ACCESS</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
