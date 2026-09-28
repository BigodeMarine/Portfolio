import { ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { a } from "framer-motion/client";

const projects = [
  {
    featured: true,
    category: "FULL STACK APPLICATION",
    title: "Crônicas",
    description:
      "Plataforma para gerenciamento de Campanhas, acontecimentos e membros, desenvolvida com uma arquitetura full stack.",
    technologies: ["PYTHON", "FASTAPI", "NEXT.JS", "POSTGRESQL", "DOCKER"],
    github: "https://github.com/BigodeMarine/Cronicas.git",
    demo: "#",
  },
  {
    featured: false,
    category: "FRONTEND APPLICATION",
    title: "LACREI SAÚDE",
    description:
      "Desenvolvida como desafio técnico, com foco em acessibilidade, responsividade e experiência do usuário. O projeto simula uma plataforma para busca de profissionais de saúde preparados para oferecer um atendimento acolhedor e respeitoso.",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "STYLED COMPONENTS"],
    github:"https://github.com/BigodeMarine/projeto-frontend-lacrei-saude",
    demo: "https://projeto-frontend-lacrei-saude.vercel.app",
  },
  {
    featured: false,
    category: "BACKEND API",
    title: "POKÉMON API",
    description:
      "API REST desenvolvida para gerenciamento de dados, utilizando persistência relacional, cache e infraestrutura containerizada. A aplicação permite criar,consultar e gerenciar Pokémon através de uma API REST.",
    technologies: ["PYTHON", "FASTAPI", "POSTGRESQL", "REDIS", "DOCKER"],
    github: "https://github.com/BigodeMarine/Pokemon-API",
    demo: "https://pokemon-1ce5u1km6-bigodemarines-projects.vercel.app/docs",
  },
];

/**
 * Seção de projetos do portfólio.
 *
 * Apresenta os principais projetos desenvolvidos,
 * destacando tecnologias, contexto e links relevantes.
 */
export default function Projects() {
  return (
    <motion.section
      className={styles.projects}
      id="projects"
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
          <span className={styles.sectionNumber}>04 // PROJECTS</span>

          <h2>
            PROJETOS
            <span>SISTEMAS CONSTRUÍDOS</span>
          </h2>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={project.featured ? styles.featuredWrapper : ""}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <article className={styles.projectCard}>
                <div className={styles.projectVisual}>
                  <div className={styles.visualGrid} />

                  <div className={styles.visualCore}>
                    <Layers3 size={42} strokeWidth={1} />
                  </div>

                  <span className={styles.projectIndex}>
                    PROJECT //{" "}
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.projectContent}>
                  <span className={styles.category}>{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <a
                      href={project.github}
                      aria-label={`Código do projeto ${project.title}`}
                    >
                      <GitBranch size={16} />
                      CODE
                    </a>

                    <a
                      href={project.demo}
                      aria-label={`Abrir projeto ${project.title}`}
                    >
                      <ExternalLink size={16} />
                      LIVE
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
