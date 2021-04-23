'use strict'

const path = require( 'path')
const fs = require('fs')
const theme = require( './theme.json')
const SourceMapLoader = require( 'source-map-loader');


const paths = require( './paths.js');
const LESS = {
    test: /\.(less)$/,
    use: [
        {
            loader: "style-loader"
        },{
            loader: "css-loader"
        },{
            loader: "less-loader",
            options: {
                javascriptEnabled: true,
                sourceMap: true,
                modifyVars: theme
            }
        },
    ]
}
const CSS = {
    test: /\.(css)$/,
    use: [
        {
            loader: "style-loader"
        },{
            loader: "css-loader"
        }
    ]
}
const SourceMap = {
    test: /\.(ts|tsx)$/,
    loader: SourceMapLoader,
    enforce: 'pre',
    include: paths.appSrc
}

const TypeScript = {
    test: /\.(tsx|ts)?$/,
    loader: 'awesome-typescript-loader',
    options: {
        "useBabel": true,
        "babelOptions": {
            "babelrc": false,
            "presets": [
                ["es2015", { "targets": "last 2 versions, ie 11", "modules": false }], "stage-0", "react"
            ],
            "plugins": [[
                "import",
                {
                    "libraryName": "antd",
                    "style": true
                }
            ]]
        }
    }
}

const URL = {
    test: /\.(woff2|woff).*$/,
    loader: 'url-loader',
    options: {
        limit: 10000,
        name: 'static/[name].[ext]'
    },
}

const File = {
    test: /\.(eot|svg|ttf|bmp|gif|jpe?g|png).*$/,
    loader: 'file-loader',
    options: {
        name: 'static/[name].[ext]'
    }
} 
module.exports = { 
    LESS,
    CSS, 
    SourceMap, 
    TypeScript, 
    URL, 
    File
}