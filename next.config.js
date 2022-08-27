module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false
    }

    config.resolve.modules.push('./public')

    config.module.rules.push({
      test: /\.(mp3|png)$/,
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
  future: {
    webpack5: true,
  }
}
