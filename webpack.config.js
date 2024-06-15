// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

// module.exports = (env, argv) => {
//   const isProduction = argv.mode === 'production'
  
//   return {
//     entry: './src/index.tsx',
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
//       clean: true,
//     },
//     resolve: {
//       extensions: ['.ts', '.tsx', '.js', '.json']
//     },
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: 'ts-loader',
//           exclude: /node_modules/
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             'style-loader',
//             'css-loader',
//             'sass-loader'
//           ]
//         },
//         {
//           test: /\.(png|jpe?g|gif)$/i,
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: '[name].[contenthash].[ext]',
//                 outputPath: 'assets/images',
//               },
//             },
//           ],
//         }
//       ]
//     },
//     plugins: [
//       new HtmlWebpackPlugin({
//         template: './public/index.html',
//         favicon: './public/favicon.png'
//       }),
//       new webpack.DefinePlugin({
//         'process.env.REACT_APP_WEATHER_API': JSON.stringify(process.env.REACT_APP_WEATHER_API),
//         'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
//       })
//     ],
//     optimization: {
//       splitChunks: {
//         chunks: 'all',
//       },
//       runtimeChunk: 'single',
//     },
//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'build')
//       },
//       compress: true,
//       port: 3000,
//       hot: true,
//     }
//   }
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true, // очищает выходную папку перед сборкой
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash].[ext]', // использование хэша для лучшего кэширования
                outputPath: 'assets/images',
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.png'
      }),
      new Dotenv({
        // Параметры по умолчанию загружают .env файл
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 3000,
      hot: true, // включение Hot Module Replacement при разработке
    }
  };
};
