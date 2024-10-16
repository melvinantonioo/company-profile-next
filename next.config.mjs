/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                port: "",
                pathname: "/**"
            }
        ],
    },
};

export default nextConfig;

