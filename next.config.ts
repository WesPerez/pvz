import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: [
    "127.0.0.1",
    "run-agent-6a2301d4a65de7b58b3ec391-mq16dhug-preview.agent-sandbox-bj-d1-gw.trae.cn",
  ],
};

export default nextConfig;
