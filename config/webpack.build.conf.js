const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');


const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '80-100',
        speed: 4
      },
      // plugins: [
      //   imageminMozjpeg({
      //     quality: 70,
      //     progressive: true
      //   })
      // ]
    }),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
