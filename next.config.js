module.exports = {
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

  output: 'standalone',

  i18n: {
    locales: ['en', 'es', 'pt', 'ru', 'ja', 'de', 'fr'],
    defaultLocale: 'en',
  },
}
