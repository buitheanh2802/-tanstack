const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const glob = require('glob');
const inquirer = require('inquirer');

const declareBuilderOptions = {
    project_name: 'Tanstack-buitheanh',
    output_folder_name: 'build',
    default_port: 3000
}
/**
 * @type {() => {select: string}}
 */
const onInitPrompt = async () => {
    const entry = glob.sync('./**/src/index.tsx',{
        ignore: 'node_modules/**'
    });
    const prompt = inquirer.createPromptModule({
        clearPromptOnDone: true
    });
    const questions = await prompt({
        message: 'Select project name: ',
        name: 'select',
        type: 'list',
        choices: entry.map(data => ({
            name: data.split('/')[0],
            value: data
        })),
        theme: {}
    });
    return questions
}
const onInitPlugins = () => {

}
/** 
 * @type {(env: any, args: {
 *      mode: 'development' | 'production'
 *      env: Record<string,any> 
 * }) => webpack.Configuration}
 */
module.exports = async (env,args) => {
    const isDev = args.mode === 'development';
    const data = await onInitPrompt();
    console.log(data);
    return {
        name: 'BuiTheAnh',
        devtool: isDev,
        mode: args.mode,
        devServer: {
            port: declareBuilderOptions.default_port,
            hot: true,
            open: false,
            host: "0.0.0.0",
            allowedHosts: 'all',
            historyApiFallback: true
        },
        output: {
            path: path.resolve(__dirname,declareBuilderOptions.output_folder_name)
        }
    }
}