const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: phase === PHASE_DEVELOPMENT_SERVER,
    },
  },
});

module.exports = nextConfig;
