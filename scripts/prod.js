'use strict'



process.on('unhandledRejection', err => { throw err });

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
require('../config/env');

const chalk = require('chalk');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const config = require('../config/webpack.config.prod.babel');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');
const printBuildError = require('react-dev-utils/printBuildError');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const webpack = require('webpack');
const { appName } = paths.appPackageJSON;

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;



const copyPublicFolder = () => {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== path.appHTML
    })
}

if (!checkRequiredFiles([paths.appHTML, paths.appIndex])) {
    console.log(chalk.red('Essential files are missing!'));
    process.exit(1);
}

const build = (prevFileSizes) => {
    console.log(chalk.green("Starting frontend build.."));

    let compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) { return reject(err); }

            if (
                process.env.CI &&
                (typeof process.env.CI !== 'string' || process.env.ci.toLowerCase() !== 'false') &&
                messages.warnings.length
            ) {
                console.log(chalk.yellow(
                    'Treating warnings as errors! Environment variable CI is TRUE'
                ));
                return reject(new Error(messages.warnings.join('\n\n')));
            }
            return resolve({
                stats, prevFileSizes,
                warnings: null
            })
        })
    })
}

measureFileSizesBeforeBuild(paths.appBuild)
    .then(prevFileSizes => {
        fs.emptyDirSync(paths.appBuild);
        copyPublicFolder();

        return build(prevFileSizes)
    })
    .then(({ stats, prevFileSizes, warnings }) => {
        if (false) {
            console.log(chalk.yellow('Build endend with warnings: \n'));
            console.log(warnings.join('\n\n'));
        } else { console.log(chalk.green("Build success")) }

        console.log("File sizes after compression: \n");
        //printFileSizesAfterBuild(stats, prevFileSizes, paths.appBuild, WARN_AFTER_BUNDLE_GZIP_SIZE, WARN_AFTER_CHUNK_GZIP_SIZE);
        console.log('\n');

        const appPackage = require(paths.appPackageJSON);

        const publicURL = paths.publicURL;

        const publicPath = config.output.publicPath;

        const buildFolder = path.relative(process.cwd(), paths.appBuild);
        printHostingInstructions(
            appPackage,
            publicURL,
            publicPath,
            buildFolder,
            false
        );
    }, err => {
        console.log(chalk.red('Build ended with errors:'));
        printBuildError(err);
        process.exit(1)
    })


