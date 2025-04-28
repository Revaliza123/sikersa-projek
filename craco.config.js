const path = require('path');
const proxyConfig = require('./proxy.config.json');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      "@store": path.resolve(__dirname, 'src/app/store'),
      "@services": path.resolve(__dirname, 'src/app/services'),
      "@modules": path.resolve(__dirname, 'src/app/modules'),
      "@pages": path.resolve(__dirname, 'src/app/pages'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      "@assets": path.resolve(__dirname, 'src/assets')
    },
  },
  devServer: {
    proxy: proxyConfig.reduce((config, rule) => {
      config[rule.context] = {
        target: rule.target,
        secure: rule.secure,
        changeOrigin: rule.changeOrigin,
        pathRewrite: rule.pathRewrite,
        logLevel: rule.logLevel
      };
      return config;
    }, {})
  },
  style: {
    sass: {
      loaderOptions: {
        implementation: require('sass'),
        additionalData: ``,
      },
    },
    css: {
      loaderOptions: {
        url: {
          filter: (url) => !url.includes('node_modules'),
        },
      },
    },
  },
};