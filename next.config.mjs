/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    },
};

export default nextConfig;