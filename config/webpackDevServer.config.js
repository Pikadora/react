'use strict'

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware.js');


const config = require('./webpack.config.dev.babel');
const paths = require('./paths');

const createDevServerConfig = (host) => {
    return {
        disableHostCheck: true,
        compress: true,
        clientLogLevel: 'none',

        contentBase: paths.appPublic,

        watchContentBase: true,

        hot: true,

       // publicPath: paths.appPublic,

        quiet: true,


        host: host,

        overlay: false,

        historyApiFallback: true,
        public: "0.0.0.0",
        before(app) {
            app.use(errorOverlayMiddleware());
        }
    }
}

module.exports = createDevServerConfig