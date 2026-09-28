import { ArrowUp, Cpu } from "lucide-react";

import styles from "./Footer.module.css";

/**
 * Rodapé principal do portfólio.
 *
 * Reforça a identidade técnica do projeto e oferece
 * acesso rápido ao início e aos principais canais profissionais.
 */
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.brandMark}>
                            <Cpu size={20} />
                        </div>

                        <div>
                            <strong>MECHANICUS</strong>
                            <span>The code must flow. The machine must function. // The Machine Spirit must be pleased.</span>
                        </div>
                    </div>

                    <a
                        className={styles.backToTop}
                        href="#"
                        aria-label="Voltar ao início"
                    >
                        <span>BACK TO TOP</span>
                        <ArrowUp size={16} />
                    </a>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <span className={styles.copyright}>
                        © 2026 EDSON // ALL SYSTEMS RESERVED
                    </span>

                    <div className={styles.status}>
                        <span className={styles.statusIndicator} />
                        <span>SYSTEM ONLINE</span>
                    </div>

                    <div className={styles.socials}>
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
                </div>
            </div>
        </footer>
    );
}