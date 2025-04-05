import React from "react";
import "@/app/styles/globals.css";

const config = {
  logo: <span>Confident Docs</span>,
  project: {
    link: "https://github.com/yourusername/confident-docs",
  },
  docsRepositoryBase:
    "https://github.com/yourusername/confident-docs/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Confident Docs",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Confident Docs: Documentation" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/icons/light-confident-logo.svg"
      />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </>
  ),
  footer: {
    text: `MIT ${new Date().getFullYear()} © Confident Docs.`,
  },
};

export default config;
