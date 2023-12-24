/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "semper-server.herokuapp.com",
                port: "",
                pathname: "**",
            }
        ]
    }
}

module.exports = nextConfig
