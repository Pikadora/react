'use strict'
//мы не хотим сами писать префиксы вендоров
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const getClientEnvironment = require('./env');
const paths = require('./paths.js');

// Плагины и лоадеры описываем отдельно
const plugin = require('./plugins');
const loader = require('./loaders');

// Определяем адрес приложения, в сборке разработчика это всегда /
const publicPath = '/';

// Необходио для корректного внедрения статических файлов в шаблон точки входа 
const publicURL = '';

// Собираем переменные среды для внедрения
const env = getClientEnvironment(publicURL);

module.exports = {
    // Мы хотим сорсмапы, чтобы видеть исходный код в стектрейсах после транспиляции
    devtool: 'cheap-module-source-map',

    entry: [
        // Полифилы должны идти первыми
        require.resolve('./polyfills'),
        //require.resolve('babel-polyfill'),
        // Хотим подгружать изменения без перезагрузки, должно идти перед приложением, чтобы исключения прилоежния не вешали девклиент
        require.resolve('react-dev-utils/webpackHotDevClient'),
        // Наше приложение
        paths.appIndex
    ],

    output: {
        // добавим /* filename */ к сгенерированным импортам
        pathinfo: true,

        // Виртуальный путь для WebpackDevServer к бандлу с собранным клиентом
        filename: 'static/js/bundle.js?v=[hash]',

        // Дополнительные чанки в случае разделения кода
        chunkFilename: 'static/js/[name].chunk.js?v=[hash]',

        // Путь по которому доступно приложение
        publicPath: publicPath,

        //Привяжем пути в сорсмапах к расположению настоящих файлов на диске, пути по стилю Windows
        //devtoolModuleFileNameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/') 
    },

    resolve: {

        // Указываем папку для поиска модулей, node_modules должна идти первой как дефолтная
        /*modules: ['node_modules', paths.appNodeModules].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),  */
        
        // Расширения файлов, обрабатываемых сборщиком, пока не добавляем js, jsx, css
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts',
            '.less',
            '.json',
            '.css',
            /*'.eot',
            '.svg',
            '.ttf',
            '.woff2',
            '.woff'*/
        ],
    },

    module: {
        // Обязываем модули что-то экспортировать
        strictExportPresence: true,
        rules: [
            //loader.SourceMap,
            {
                oneOf: [
                    loader.URL,
                    loader.TypeScript,
                    loader.LESS,
                    loader.CSS
                ]
            },
            // FileLoader должен идти последним
            loader.File
        ]
    },

    plugins: [
        // Комментарии к плагинам в ./plugins.js
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        plugin.Checker,
        plugin.ContextReplacement,
        plugin.HotModuleReplacement,
        plugin.HTMLWebpack,
        plugin.InterpolateHtml,
        //plugin.BundleAnalyzer
    ],

        // для работы с joi на стороне клиента
        // node:{
        //     net: 'empty',
        //     dns: 'empty',
        //     tls: 'empty',
    
        // }

}