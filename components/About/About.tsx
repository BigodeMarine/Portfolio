import { Code2, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import Image from "next/image";

/**
 * Seção de apresentação profissional.
 *
 * A estrutura reserva um espaço visual para a foto do desenvolvedor
 * e apresenta sua experiência e foco profissional ao lado.
 */
export default function About() {
  return (
    <motion.section
      className={styles.about}
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01 // IDENTITY</span>

          <h2>
            SOBRE
            <span>O DESENVOLVEDOR</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.photoArea}>
            <div className={styles.photoFrame}>
              <div className={styles.cornerTopLeft} />
              <div className={styles.cornerTopRight} />
              <div className={styles.cornerBottomLeft} />
              <div className={styles.cornerBottomRight} />

              <div className={styles.photoPlaceholder}>
                <Image
                  src="/foto.webp"
                  alt="Edson, desenvolvedor de software"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className={styles.photoInfo}>
              <span>IDENTIFICATION</span>
              <span>EDSON // DEVELOPER</span>
            </div>
          </div>

          <div className={styles.textContent}>
            <span className={styles.eyebrow}>SYSTEM PROFILE // ACTIVE</span>

            <h3>
              Código como ferramenta para
              <span>construir soluções.</span>
            </h3>

            <p>
              Sou Desenvolvedor Full Stack Python, atualmente em transição de carreira. Gosto de transformar problemas em soluções de software bem estruturadas, buscando escrever código organizado, modular e de fácil manutenção.
            </p>

            <p>
              Tenho especial interesse pelo ecossistema Python e por tecnologias que fazem parte do desenvolvimento de aplicações modernas, desde a construção de APIs até bancos de dados, estratégia de desenvolvimento Mobile First, containers, testes, CI/CD e infraestrutura.
            </p>

            <div className={styles.focus}>
              <div className={styles.focusItem}>
                <Code2 size={19} />
                <div>
                  <strong>FRONTEND</strong>
                  <span>Interfaces & Experiences</span>
                </div>
              </div>

              <div className={styles.focusItem}>
                <Server size={19} />
                <div>
                  <strong>BACKEND</strong>
                  <span>APIs & Architecture</span>
                </div>
              </div>

              <div className={styles.focusItem}>
                <Database size={19} />
                <div>
                  <strong>DATA</strong>
                  <span>Persistence & Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
