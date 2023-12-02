const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    if (typeof config.resolve.modules === 'undefined') {
      config.resolve.modules = []
    }

    config.resolve.modules.push('./public')

    config.module.rules.push({
      test: /\.(mp3)$/,
      loader: 'file-loader'
    })

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    config.output = {
      ...config.output,
      globalObject: "typeof self !== 'undefined' ? self : this"
    }

    return config;
  },

  eslint: {
    // This will eventually be turned off, but right now we have over 15,000 ESlint warnings/errors. No thank you.
    ignoreDuringBuilds: true,
  },

  output: 'standalone',

  compiler: {
    styledComponents: true
  },
}

const withNextIntl = require('next-intl/plugin')(
  './src/i18n/config.ts'
);

module.exports = withNextIntl(nextConfig);
