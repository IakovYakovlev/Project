const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    // Для обучения резолвить другие расширения.
    resolve:{
        extensions:['.js', '.jsx', '.ts', '.tsx', '.json']
    },

    // Значение mode принимает строку, в которой будет значение либо development либо production
    // Чтобы не хардкодить, а решать это динамически, воспользуемся env переменными.
    mode: NODE_ENV ? NODE_ENV : 'development',
     
    // Указываем откуда начинаем.
    // Указываем __dirname - что это такое? <<<<<<<<<-----------------------------------
    // И название файла с которого будет все начинаться. 
    entry: path.resolve(__dirname, 'src/index.jsx'),
    
    // Указываем куда складывать все файлы, которые он переработает (странспилирует.)
    // output - это объект, внутри которого может существовать множество настроек.
    // path - описываем абсолютный путь до папки dist
    // filename - называем наш бандел index.js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },

    // loader - это специальные пакеты, которые позволяют webpacku 
    // преобразовывать файлы одного типа в файлы другого типа.
    // По умолчанию webpack может работать с файлами JS and json, а другие расширение не понятны.
    // Это объект, внутри которого вызываем свойство rules - является массивом.
    // Внутри массива мы и будем настраивать все loaderi которые используем.
    // Для минимальной настрокий loadera необходимы 2 свойства test and .
    module: {
        rules: [{
            // Регулярное выражение, в котором описываем рассширения файлов, которые мы собираемся обрабатывать.
            test: /\.[tj]sx?$/,

            // Даем команду, что для обработки нужно использовать ts-loader.
            use: ['ts-loader']
        }]
    },

    plugins:[
        new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: IS_DEV
    }
};