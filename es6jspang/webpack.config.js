/**
 * Created by Liqiaomiao on 2018/4/13.
 */
module.exports = {
    entry:__dirname + '/src/index.js',                     // 唯一打包入口文件
    output: {
        path: __dirname + '/dist',          // 打包后文件存放的地方
        filename: 'index.js'              // 打包后输出文件的文件名
    }

}