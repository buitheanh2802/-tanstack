const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const glob = require('glob');
const inquirer = require('inquirer');

/** 
 * @type {(env: any, args: {
 *      mode: 'development' | 'production'
 *      env: Record<string,any> 
 * }) => webpack.Configuration}
 */
module.exports = (env,args) => {
    console.log(env);
    console.log(args);
    console.log(inquirer);
    return {
        name: 'BuiTheAnh'
    }
}