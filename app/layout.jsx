import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '@/app/styles/globals.css'
import Logo from '@/components/Logo/Logo'
import CustomFooter from '@/components/CustomFooter/CustomFooter'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="confident-docs-banner">Confident AI is free to try. No credit card required.</Banner>
const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/confident-ai/deepeval"
    chatLink="https://discord.gg/Up3gbNTF"
  />
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
        {/* <title>Confident AI Docs | The DeepEval Platform</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Official Confident AI Documentation" />
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
          docsRepositoryBase="https://github.com/confident-ai/confident-docs/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}