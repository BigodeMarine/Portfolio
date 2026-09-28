import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    icon: Code2,
    title: "FRONTEND",
    description: "Interfaces e experiências digitais",
    skills: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT", "NEXT.JS"],
  },
  {
    icon: Server,
    title: "BACKEND",
    description: "APIs e lógica de aplicações",
    skills: ["PYTHON", "FASTAPI", "REST API", "AUTHENTICATION"],
  },
  {
    icon: Database,
    title: "DATABASE",
    description: "Persistência e gerenciamento de dados",
    skills: ["POSTGRESQL", "SQL", "SQLALCHEMY", "ALEMBIC"],
  },
  {
    icon: Cloud,
    title: "INFRASTRUCTURE",
    description: "Ambientes e infraestrutura",
    skills: ["DOCKER", "LINUX", "CI/CD", "CLOUD"],
  },
  {
    icon: GitBranch,
    title: "VERSION CONTROL",
    description: "Fluxo e colaboração no desenvolvimento",
    skills: ["GIT", "GITHUB", "BRANCHING", "PULL REQUESTS"],
  },
  {
    icon: Wrench,
    title: "TOOLS",
    description: "Ferramentas utilizadas no desenvolvimento",
    skills: ["VS CODE", "POSTMAN", "POETRY", "NPM"],
  },
];

/**
 * Seção de habilidades técnicas.
 *
 * Organiza as principais tecnologias e ferramentas
 * utilizadas no desenvolvimento em categorias.
 */
export default function Skills() {
  return (
    <motion.section
      className={styles.skills}
      id="skills"
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
          <span className={styles.sectionNumber}>03 // SYSTEMS</span>

          <h2>
            HABILIDADES
            <span>TECNOLOGIAS & FERRAMENTAS</span>
          </h2>
        </div>

        <div className={styles.introduction}>
          <div className={styles.introductionIcon}>
            <Layers3 size={20} />
          </div>

          <div>
            <span className={styles.introductionLabel}>
              SYSTEM CAPABILITIES
            </span>

            <p>
              Tecnologias e ferramentas que utilizo na construção de
              aplicações web, APIs e sistemas completos.
            </p>
          </div>
        </div>

        <div className={styles.skillGrid}>
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className={styles.skillCard}
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>

                  <span className={styles.cardNumber}>
                    {"//"} {group.title}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      <Braces size={11} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}