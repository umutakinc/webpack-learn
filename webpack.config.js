const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: '[name].js',
      // [chunkhash]: her build işleminde benzersiz bir çıktı üretmek için kullanılır.
      path: __dirname + '/dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
          {
            test: [/.js$/], // test => Hangi dosya tiplerinin işlemden geçeceğini belirttiğimiz property
            exclude: /(node_modules)/, // exclude => Hangi klasörlerin işlemden geçmeyeceğini belirttiğimiz property
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: [/.css$/],
            use: ['style-loader', 'css-loader']
          },
          {
            test: [/.css$|.scss$|.sass$/],
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
    }
}