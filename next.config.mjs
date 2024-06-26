/** @type {import('next').NextConfig} */

import CopyPlugin from "copy-webpack-plugin";

const nextConfig = {
  webpack: (config) => {
    const customPlugins = [
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/flowbite/dist/flowbite.min.js',
            to: 'static/flowbite.js',
          },
        ],
      }),
    ];

    config.plugins.push(...customPlugins);

    return config;
  },
};

export default nextConfig;
