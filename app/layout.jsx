import {  Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '@/app/styles/globals.css'
import Logo from '@/components/Logo/Logo'
import CustomFooter from '@/components/CustomFooter/CustomFooter'
import SignUpButton from '@/components/SignUpButton'
import GitHubButton from '@/components/GitHubButton/GitHubButton'

export const metadata = {
  title: {
    default: 'Confident AI Docs',
    template: '%s | Confident AI - The DeepEval Platform'
  },
  description: 'The Official Documentation for Confident AI'
}

const banner = <Banner storageKey="confident-docs-banner">Confident AI is <a target="_blank" href="https://app.confident-ai.com/auth/signup" style={{textDecoration: 'underline'}}>free to try <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline', verticalAlign: 'text-top'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>. No credit card required.</Banner>
const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/confident-ai/deepeval"
    projectIcon={<GitHubButton />}
    // chatLink="https://discord.gg/Up3gbNTF"
  >
    <SignUpButton />
  </Navbar>
)
const footer = <CustomFooter />
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        color={{
          hue: 265, // Violet hue
          saturation: 90, // Slightly reduced saturation
          lightness: {
            light: 45, // Slightly darker for light mode
            dark: 60  // Slightly lighter for dark mode
          }
        }}
      >
        <script
          defer
          data-domain="confident-ai.com"
          src="https://plausible.io/js/script.js"
        ></script>
        {/* Don't set title or description here as they're handled by Nextra via useNextSeoProps */}
      </Head>
      <body suppressHydrationWarning>
        <Layout
          darkMode={false}
          nextThemes={{
            defaultTheme: "light",
          }}
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/confident-ai/confident-docs/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}