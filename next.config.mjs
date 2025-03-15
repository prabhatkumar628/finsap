/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    env: {
        MAIL_USER: process.env.MAIL_USER,
        MAIL_PASS: process.env.MAIL_PASS
      }
    
};

export default nextConfig;
