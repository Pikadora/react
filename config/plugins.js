const webpack = require('webpack');
const { CheckerPlugin } = require( 'awesome-typescript-loader');
const ExtractTextPlugin = require( 'extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer');
const CompressionPlugin = require( 'compression-webpack-plugin');

//генерирует html точки входа , добавляет статику
const HTMLWebpackPlugin = require( 'html-webpack-plugin');
const CaseSensitivePathsPlugin = require( 'case-sensitive-paths-webpack-plugin');

// мы хотим иметь возможность использовать переменные среды в шаблоне точки входа
const InterpolateHTMLPlugin = require( 'react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require( 'react-dev-utils/WatchMissingNodeModulesPlugin');

const paths = require( './paths.js');
const getClientEnvironment = require( './env');
const publicURL = '';
const env = getClientEnvironment(publicURL);

// сбор общих частей кода для асинхронно загружаемых модулей
const AsyncChunks = new webpack.optimize.CommonsChunkPlugin({
    async: true,
    children: true,
    deepChildren: true,
    minChunks: 3
})

// Анализ бандла статики
const BundleAnalyzer = new BundleAnalyzerPlugin();

// Type-check
const Checker = CheckerPlugin;

// Импортируем только русскую локаль Momentjs
const ContextReplacement = new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/);

// Сбор общих частей кода
const CommonChunks = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: '[name].js?v=[hash]',
    minChunks: 3
});

// Сжимаем статику 
const Compression = new CompressionPlugin({
    test: /\.js$/,
    cache: true,
    threshold: 10240
});

// Удаляем комменты
const ExtractText = new ExtractTextPlugin('bundle.css');

// Внедрение переменных среды в клиент
const InterpolateHtml = new InterpolateHTMLPlugin(env.raw);

// HMR
const HotModuleReplacement = new webpack.HotModuleReplacementPlugin();

// Генерация шаблона точки входа
const HTMLWebpack = new HTMLWebpackPlugin({
    inject: true,
    template: paths.appHTML
})


// Сжимаем код за счет сокращения именования функций, переменных и т.д.
const Uglify = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    output: {
        comments: false,
    },
    
});

module.exports = { 
    AsyncChunks, 
    BundleAnalyzer,  
    Checker,  
    ContextReplacement,  
    CommonChunks, 
    Compression, 
    ExtractText, 
    HotModuleReplacement,
    HTMLWebpack, 
    InterpolateHtml, 
    Uglify 
}