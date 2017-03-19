var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/script/App.js',
    output:{
        path:'./dist/',
        filename:'js/bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            template:'src/index.html',
            // inject:false,
            title:'this is a.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['latest']
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.jade$/,
                use:'jade-loader'
            }

        ]
    }
}