'use strict'

const fs = require( 'fs');
const path = require( 'path');
const paths = require('./paths');
const dotenvExpand = require( 'dotenv-expand');
const dotenv = require( 'dotenv');

//delete require.cache(require.resolve('./paths'));

const NODE_ENV = process.env.NODE_ENV;

if(!NODE_ENV) { throw new Error("Установите значение переменной среды NODE_ENV "); }

const dotenvFiles = [
    `${paths.dotenv}.${NODE_ENV}.local`,
    `${paths.dotenv}.${NODE_ENV}`,
    // не включаем локальный набор переменных среды в случае запуска в режиме 'test'
    NODE_ENV != 'test' && `${paths.dotenv}.local`,
    paths.dotenv
].filter(Boolean);

dotenvFiles.forEach( dotenvFile => {
    if(fs.existsSync(dotenvFile)) {
        dotenvExpand(dotenv.config({
            path: dotenvFile
        }))
    }
})

// Поддержка модулей из NODE_PATH
const appDirectory = fs.realpathSync(process.cwd());

process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

// Собираем NODE_ENV и REACT_APP_* переменные среды и подготавливаем к передаче в приложение через DefinePlugin 
const REACT_APP = /^REACT_APP_/i;

const getClientEnvironment = ( publicUrl ) => {
    const raw = Object.keys(process.env)
        .filter( key => REACT_APP.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key]
                return env
            },
            {
                // Определяем факт запуска на сборку в боевом режиме,  указываем React собираться в бой
                NODE_ENV:  process.env.NODE_ENV || 'development',
                PUBLIC_URL: publicUrl
            }
        )

    const stringified = {
        'process.env': Object.keys(raw).reduce(
            (env, key) => {
                env[key] = JSON.stringify(raw[key]);
                return env;
            },
            {}
        )
    } 
    return {raw, stringified} 
}

module.exports = getClientEnvironment;

