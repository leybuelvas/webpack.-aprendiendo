const HtmlWebpackPlugin = require(`html-webpack-plugin`)


module.exports = {

    mode: `development`,

    module: {
    rules: [
        {
            test: /\.html$/,
            loader: `html-loader`,
            options: {
                sources: false
            }
        }
    ]
},

    optimization: {},

    Plugins: [
        new HtmlWebpackPlugin()
    ]
}

