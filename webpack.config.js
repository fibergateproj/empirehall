import paths from './gulp/paths';
import webpack from 'webpack';
import { env } from './options.json';

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const uglifyJS = new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      warnings: false,
      comparisons: false
    },
    mangle: {
      safari10: true
    },
    output: {
      comments: false,
      ascii_only: true
    },
    sourceMap: env == 'dev'
  }
});

export default {
  entry: {
    app: `${paths.src.scripts}/index.js`,
    map: `${paths.src.scripts}/map-index.js`,
    mobile: `${paths.src.scripts}/mobile.js`,
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      // "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      query: {
        presets: ['es2015', 'es2016', 'react']
      }
    }]
  },
  plugins: env !== 'dev' ? [uglifyJS, new webpack.ProvidePlugin({
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    jquery: 'jquery',
    'window.jquery': 'jquery',
    $: 'jquery',
    'window.$': 'jquery'
  })
  ] : [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
      $: 'jquery',
      'window.$': 'jquery'
    })
  ],
  performance: {
    hints: false
  }
}
