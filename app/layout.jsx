import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '@/app/styles/globals.css'
import Logo from '@/components/Logo'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="confident-docs-banner" color="#ffffff">If you're looking for DeepEval's documentation, click here.</Banner>
const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/confident-ai/deepeval"
    chatLink="https://discord.gg/confident-ai"
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
 
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Confident Docs: Documentation" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}