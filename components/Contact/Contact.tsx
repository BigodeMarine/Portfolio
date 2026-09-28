import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

/**
 * Seção de contato do portfólio.
 *
 * Apresenta uma chamada para contato e os principais
 * canais disponíveis para comunicação profissional.
 */
export default function Contact() {
  return (
    <motion.section
      className={styles.contact}
      id="contact"
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
          <span className={styles.sectionNumber}>06 // CONTACT</span>

          <h2>
            VAMOS
            <span>CONSTRUIR ALGO</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.message}>
            <span className={styles.eyebrow}>
              COMMUNICATION CHANNEL // OPEN
            </span>

            <h3>
              Tem um projeto
              <span>em mente?</span>
            </h3>

            <p>
              Estou aberto a novas oportunidades, projetos e conversas
              sobre tecnologia, desenvolvimento de software e produtos
              digitais.
            </p>

            <a
              className={styles.primaryAction}
              href="mailto:edson15a7x@hotmail.com"
            >
              ENTRAR EM CONTATO
            </a>
          </div>

          <div className={styles.channels}>
            <div className={styles.channel}>
              <div className={styles.channelIcon}>
                <Mail size={19} />
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:edson15a7x@hotmail.com">
                  Me mande um email
                </a>
              </div>
            </div>

            <div className={styles.channel}>
              <div className={styles.channelIcon}>
                <MessageSquare size={19} />
              </div>

              <div>
                <span>LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/edson-garcia-desenvolvedor-fullstack/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vamos nos Conectar
                </a>
              </div>
            </div>

            <div className={styles.channel}>
              <div className={styles.channelIcon}>
                <MapPin size={19} />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>BRASIL</strong>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <span className={styles.statusIndicator} />
          <span>SYSTEM READY FOR NEW CONNECTIONS</span>
        </div>
      </div>
    </motion.section>
  );
}