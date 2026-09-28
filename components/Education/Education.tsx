import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

const educationItems = [
  {
    icon: GraduationCap,
    period: "2024 — 2026",
    title: "Curso Livre Profissional, Desenvolvimento Full Stack Python",
    institution: "EBAC - Escola Britânica de Artes Criativas e Tecnologia",
    description:
      "Formação voltada ao desenvolvimento de software, fundamentos de programação, engenharia de software e banco de dados. Capacitado para atuar em todo o ciclo de criação de aplicações web, do design da interface à lógica de back-end em Python.",
  },
  {
    icon: BookOpen,
    period: "2013 - 2017",
    title: "Ensino Médio completo",
    institution: "Colégio Estadual Unidade Polo - SJP",
    description:
      "Ensino Médio voltado à formação geral de excelência, com foco no desenvolvimento de raciocínio lógico, resolução de problemas e competências analíticas. Base sólida que serve de suporte para o aprendizado acelerado em engenharia de software e tecnologia.",
  },
];

const certifications = [
  "PYTHON",
  "FASTAPI",
  "NEXT.JS",
  "DOCKER",
  "POSTGRESQL",
  "GIT & GITHUB",
  "AWS"
];

/**
 * Seção de formação e estudos.
 *
 * Apresenta a formação acadêmica e os principais
 * conhecimentos desenvolvidos através de estudos contínuos.
 */
export default function Education() {
  return (
    <motion.section
      className={styles.education}
      id="education"
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
          <span className={styles.sectionNumber}>05 // EDUCATION</span>

          <h2>
            FORMAÇÃO
            <span>CONHECIMENTO & EVOLUÇÃO</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.timeline}>
            {educationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className={styles.educationItem}
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div className={styles.marker}>
                    <Icon size={18} />
                  </div>

                  <div className={styles.itemContent}>
                    <span className={styles.period}>{item.period}</span>

                    <h3>{item.title}</h3>

                    <span className={styles.institution}>
                      {item.institution}
                    </span>

                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <aside className={styles.knowledge}>
            <div className={styles.knowledgeHeader}>
              <Award size={19} />
              <span>KNOWLEDGE BASE</span>
            </div>

            <p>
              Principais tecnologias e áreas estudadas ao longo da minha formação
              e dos projetos desenvolvidos.
            </p>

            <div className={styles.certifications}>
              {certifications.map((certification) => (
                <span key={certification}>{certification}</span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}