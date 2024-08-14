/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        
      ],
    },
    webpack: (config) => {
      // Add your webpack configuration here
      config.resolve.fallback = {
        'mongodb-client-encryption': false,
        'aws4': false,
      };
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  