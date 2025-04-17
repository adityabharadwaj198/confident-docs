import React from "react";
import "@/app/styles/globals.css";

const config = {
  logo: <span>Confident AI Documentation</span>,
  project: {
    link: "https://github.com/confident-ai/confident-docs",
  },
  docsRepositoryBase:
    "https://github.com/confident-ai/confident-docs/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Confident AI Documentation",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="The Official Documentation for Confident AI "
      />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/icons/light-confident-logo.svg"
      />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </>
  ),
};

export default config;
