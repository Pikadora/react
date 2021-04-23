'use strict'

const fs = require( 'fs');
const path = require( 'path');
const url = require( 'url');



const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicURL = process.env.PUBLIC_URL

const ensureSlash = ( input, needsSlash ) => {
    const hasSlash = input.endsWith('/');
    if(hasSlash && !needsSlash) {
        return path.substr( input.length - 1);
    } else if(!hasSlash && needsSlash) {
        return `${input}/`;
    } else {
        return input;
    }
} 
/*
const ensureSlash = ( input, needsSlash ) => {
    const hasSlashAndNeedsSlash = [input.endsWith('/'), needsSlash] ;
    switch(hasSlashAndNeedsSlash){
        case [true, false]: return path.substr( input.length - 1); 
        case [false, true]: return path.substr( input.length - 1); 
        default: return `${input}/`;
    }
        
}*/

const getPublicURL = appPackageJSON => envPublicURL || require(appPackageJSON).homepage;

// Мы использоуем PUBLIC_URL или поле homepage объекта package.json для определения, по какому адресу будет доступно приложение
// Webpack должен знать этот адрес для внедрения  ссылок тега <script> в страницу для того, чтобы наш SPA корректно отдавал статические ресурсы 
// на вложенных путях вида /docs/42. 
const getServedPath = (appPackageJSON) => {
        const publicURL = getPublicURL(appPackageJSON);
        return ensureSlash(envPublicURL || (publicURL ? url.parse(publicURL).pathname: '/'), true);  
}

module.exports = {
    dotenv: resolveApp('.env'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('./assets'),
    appHTML: resolveApp('./assets/index.html'),
    appIndex: resolveApp('app/index.tsx'),
    appPackageJSON: resolveApp('package.json'),
    appSrc: resolveApp('./app'),
    testSetup: resolveApp('src/setupTests.ts'),
    appNodeModules: resolveApp('node_modules'),
    appTSConfig: resolveApp('tsconfig.json'),
    appTSLint: resolveApp('tslint.json'),
    publicURL: getPublicURL(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json'))
}  