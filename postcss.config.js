module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 4,
      propWhiteList: [],
      selectorBlackList: ['am-picker'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    },
    'postcss-assets': {
      loadPaths: ['src/assets/images', 'src/pages', 'src/components'],
      relative: true
    }
  }
}
