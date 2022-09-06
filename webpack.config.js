const path=require('path');
const PATHS={
  src: path.join(__dirname,'./src'),
  dist: path.join(__dirname,'./dist'),
}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
 module.exports = {
    entry: {main:'./src/index.js'},
    output: {
        path: path.resolve(__dirname,'.'),
        filename:'[name].js'
      },
      devServer: {
      overlay:true
    },
    module:{
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:["babel-loader"]
                },
                {
                  test: /\.css$/,
                  exclude: /node_modules/,
                  use:[
                      MiniCssExtractPlugin.loader,
                      "css-loader"
                  ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                     // 'style-loader',
                      MiniCssExtractPlugin.loader,
                      // Translates CSS into CommonJS
                      'css-loader',
                      {
                        loader: "postcss-loader",
                        options: {config:{ path:'postcss.config.js'}}
                      },
                      // Compiles Sass to CSS
                      'sass-loader',
                    ],
                  },
                  {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name:'[name].[ext]',
                        outputPath: './css/font',
                        publicPath:'./font'
                    }
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name:'[name].[ext]',
                         outputPath: './css/img',
                         publicPath:'./img'
                        // outputPath: (url, resourcePath, context) => {
                        //   // `resourcePath` is original absolute path to asset
                        //   // `context` is directory where stored asset (`rootContext`) or `context` option
                        //   // To get relative path you can use
                        //  //  const relativePath = path.relative(context, resourcePath);
                        //   // if (/src\\images/.test(resourcePath)) {
                        //   //   console.log('Images******************');
                        //   //   return `images/${url}`;
                        //   // }

                        //   // if (/scss\\img/.test(resourcePath)) {
                        //   //   return `css/img/${url}`;
                        //   // }
                        //   return `./css/img/${url}`;
                        // },
                    }
                }

            ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html' // если несколько точек, создать новый объект со свойствами
        }),
      // new CopyPlugin([
      //   { from: `${PATHS.src}/images`, to: `${PATHS.dist}/images` },
      // ]),
    ]

  };
