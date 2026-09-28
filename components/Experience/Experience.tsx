import { BriefcaseBusiness, Circle } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

/**
 * Seção de experiência profissional.
 *
 * Apresenta o histórico profissional em uma linha do tempo
 * visual, destacando responsabilidades e tecnologias utilizadas.
 */
export default function Experience() {
  return (
    <motion.section
      className={styles.experience}
      id="experience"
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
          <span className={styles.sectionNumber}>02 // EXPERIENCE</span>

          <h2>
            EXPERIÊNCIA
            <span>PROFISSIONAL</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          <motion.article
            className={styles.experienceItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <div className={styles.timelineMarker}>
              <BriefcaseBusiness size={16} />
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <div>
                  <span className={styles.period}>2024 — 2026</span>

                  <h3>Operador de Fulão</h3>

                  <span className={styles.company}>Durlicouros</span>
                </div>

                {/* <span className={styles.status}>
                  <Circle size={7} fill="currentColor" />
                  ACTIVE
                </span> */}
              </div>

              <p>
                ● Responsável pela calibração e manutenção de pHmetro crítico ao
                processo produtivo, reduzindo erros de medição de diários para
                zero durante o período sob minha responsabilidade, prevenindo
                perdas de até 1.500 peças de couro por dia fora do padrão.
                <br />● Operação de fulões industriais destinados ao
                processamento químico e físico de peles e couros, seguindo
                formulações e procedimentos estabelecidos.
                <br />● Identificação de anormalidades no processo e comunicação
                à liderança ou equipe responsável, contribuindo para a correção
                de desvios e manutenção da qualidade do produto. ● Monitoramento
                das etapas de processamento, realizando ajustes conforme as
                características da pele e os padrões de produção.
                <br />● Registro e acompanhamento das informações do processo,
                garantindo a rastreabilidade das operações realizadas.
              </p>

              <div className={styles.technologies}></div>
            </div>
          </motion.article>

          <motion.article
            className={styles.experienceItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className={styles.timelineMarker}>
              <BriefcaseBusiness size={16} />
            </div>

            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <div>
                  <span className={styles.period}>2014 — 2024</span>

                  <h3>Analista de PCP</h3>

                  <span className={styles.company}>Focus Tecnologia de Plásticos S.A.</span>
                </div>
              </div>

              <p>
                ● Planejamento e programação da produção, considerando demanda,
                capacidade produtiva e disponibilidade de materiais, garantindo
                o cumprimento dos prazos e maior eficiência operacional. <br />
                ●Controle das ordens de produção, acompanhando o planejado versus
                realizado e tratando desvios, contribuindo para a redução de
                atrasos e melhor aproveitamento dos recursos. <br /> 
                ● Análise de estoque e necessidades de materiais, utilizando dados de consumo
                e programação, evitando rupturas e excessos de estoque. <br />
                ● Acompanhamento de indicadores de PCP, analisando produtividade,
                eficiência, perdas e cumprimento de prazos, apoiando a tomada de
                decisões e a melhoria contínua. <br /> 
                ● Elaboração e atualização de
                planos de produção, alinhando demanda, capacidade e
                disponibilidade de recursos, otimizando a programação e o
                atendimento das metas produtivas.
              </p>

              <div className={styles.technologies}>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  );
}
