import {  Layout } from 'nextra-theme-docs'
import {  Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '@/app/styles/globals.css'
import CustomFooter from '@/components/CustomFooter/CustomFooter'
import CustomBanner from '@/components/CustomBanner/CustomBanner'
import CustomNavbar from '@/components/CustomNavbar/CustomNavbar'

const banner = <CustomBanner />
const navbar = <CustomNavbar />
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