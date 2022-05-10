module.exports = {
    publicPath:"./",
    devServer:{
        proxy:{
            "/api":{
                target:"http://127.0.0.1:7711/",
                //target:"http://124.221.253.93:7711/",
                changeOrigin:true,
                secure: false,
                ws:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        },
        open:true,
        https:false
    },
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.splitChunks({
            chunks: "initial",
            minSize: 30000,
            //maxSize: 50000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js',
                },
                default: { //默认打包模块
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
            }
        });
    }
}