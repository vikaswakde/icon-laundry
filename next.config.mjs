/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tumbledry.in',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/intl/en_us/badges/images/**',
      },
      {
        protocol: 'https',
        hostname: 'iconlaundry.in',
        port: '',
        pathname: '/assets/img/**',
      },
    ],
  },
};

export default nextConfig;
