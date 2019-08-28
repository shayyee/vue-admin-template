/** @format */

const path = require('path')

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@$', resolveRealPath('src'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项,为了解决less的.bezierEasingMixin();的问题
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          /*
            'primary-color': '#F5222D',
            'link-color': '#F5222D',
            'border-radius-base': '4px',
            */
        },
        javascriptEnabled: true
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    disableHostCheck: true,
    port: 8080,
    // https: false,
    // hotOnly: false,
    // proxy: {
    //   // 设置代理
    //   // proxy all requests starting with /api to jsonplaceholder
    //   'http://localhost:8080/': {
    //     target: 'http://baidu.com:8080', //真实请求的目标地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^http://localhost:8080/': ''
    //     }
    //   }
    // },
    // eslint-disable-next-line no-unused-vars
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
}
