var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context:path.resolve(__dirname,'src/script'),
    entry:{
        main:'./main.js',
        home:'./home.js',
        about:'./about.js',
        contact:'./contact.js'
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name]-[chunkhash].bundle.js',
        publicPath:'http://cdn.com/'  //配置上线路径
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:false,
            title:'home page',
            date:new Date(),
            chunks:['home','main']
        }),
        new HtmlWebpackPlugin({
            filename:'about.html',
            template:'index.html',
            inject:false,
            title:'about page',
            date:new Date(),
            chunks:['about','main']
        }),
        new HtmlWebpackPlugin({
            filename:'contact.html',
            template:'index.html',
            inject:false,
            title:'contact page',
            date:new Date(),
            chunks:['contact','main'],
            minify:{
                collapseWhitespace:true
            }
        }),
    ]
}