const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 60,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['cdn.pixabay.com', 'media.istockphoto.com'],
  },
};

module.exports = withBundleAnalyzer(nextConfig)
