#! /usr/bin/env node

'use strict'

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => { throw err });



const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { createCompiler, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

require('../config/env');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev.babel');
const createDevServerConfig = require('../config/webpackDevServer.config');

const { appName } = paths.appPackageJSON;

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8040
const HOST = process.env.HOST || '0.0.0.0';

const urls = prepareUrls('http', HOST, DEFAULT_PORT);

const compiler = createCompiler(webpack, config, appName, urls);

const serverConfig = createDevServerConfig(urls.lanUrlForConfig);

const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
        return console.log(err);
    }
    console.log("Запускаем сервер разработки")
    openBrowser
})

const errors = ['SIGINT', 'SIGTERM']
errors.forEach(sig => {
    process.on(sig, () => {
        devServer.close();
        process.exit();
    })
})