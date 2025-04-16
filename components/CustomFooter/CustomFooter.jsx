import { Footer } from 'nextra-theme-docs'
import Link from 'next/link'
import styles from './CustomFooter.module.scss'

const CustomFooter = () => {
  return (
    <Footer>
      <div className={styles.customFooter}>
        <div className={styles.footerRow}>
          <div className={`${styles.footerColumn} ${styles.companyInfo}`}>
            <img className={styles.logo} src="/icons/confident-docs-logo.svg" alt="Confident AI Logo" />
            <div className={styles.copyright}>
              Copyright © {new Date().getFullYear()} Confident AI, Inc.
            </div>
            <div className={styles.madeWithLove}>
              Made with ❤️ and confidence
            </div>
            <iframe 
              className={styles.statusBadge}
              src="https://status.confident-ai.com/badge?theme=dark" 
              width="182" 
              height="30"
              style={{backgroundColor: 'black', borderRadius: '10px'}}
              title="Confident AI Status"
            />
            <div className={styles.legalLinks}>
              <Link href="https://confident-ai.com/privacy-policy" target="_blank" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="https://confident-ai.com/terms" target="_blank" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a href="https://deepeval.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  DeepEval Docs
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://trydeepteam.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  DeepTeam Docs
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://confident-ai.com/pricing" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Resources</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a href="https://www.confident-ai.com/blog/llm-evaluation-metrics-everything-you-need-for-llm-evaluation" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LLM Evaluation Metrics
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LLM as a Judge
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://www.confident-ai.com/blog/llm-testing-in-2024-top-methods-and-strategies" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Top LLM Testing Techniques in 2025
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LLM Agent Evaluation
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>LLM Evaluation Community</h3>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a href="https://discord.gg/Up3gbNTF" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Join Discord
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://github.com/confident-ai/deepeval" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="https://confident-ai.com/blog" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  LLM Evaluation Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default CustomFooter 