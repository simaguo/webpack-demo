/**
 * Created by Administrator on 2018-3-9.
 */
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
var webpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');

var config = {
    entry: {
        app: './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        //publicPath: 'http://vagranthost/webpack/dist/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'loader demo !',
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['last 2 versions','> 5%']
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                        'style-loader',
                        'css-loader',
                        {
                            loader:'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')({
                                        browsers:"last 5 versions"
                                    }),
                                ]
                            }
                        }
                    ]
            },
            {
                test:/\.html$/,
                use:['html-loader'],
                exclude:/index.html$/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                        }

                    },
                    {
                        loader: 'image-webpack-loader',
                        options:{
                            bypassOnDebug: true,
                        }

                    }
                ]
            }
        ]


    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        inline:true,
        hot:true,
        port:7000,
    }
}

module.exports = config;