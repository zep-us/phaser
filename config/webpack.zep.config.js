'use strict';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
    {
        name: 'phaser-zep-umd',
        mode: 'production',

        context: `${__dirname}/../src/`,

        entry: {
            'phaser': './phaser-zep.js',
            'phaser.min': './phaser-zep.js',
            'phaser-arcade-physics': './phaser-arcade-physics.js',
            'phaser-arcade-physics.min': './phaser-arcade-physics.js',
        },

        output: {
            path: `${__dirname}/../dist/`,
            filename: '[name].js',
            globalObject: 'this',
            library: {
                name: 'Phaser',
                type: 'umd',
                umdNamedDefine: true,
            }
        },

        performance: { hints: false },

        optimization: {
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/,
                    parallel: true,
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false
                        },
                        compress: true,
                        ie8: false,
                        ecma: 5,
                        warnings: false
                    }
                })
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                "typeof CANVAS_RENDERER": JSON.stringify(true),
                "typeof WEBGL_RENDERER": JSON.stringify(true),
                "typeof WEBGL_DEBUG": JSON.stringify(false),
                "typeof EXPERIMENTAL": JSON.stringify(false),
                "typeof PLUGIN_3D": JSON.stringify(false),
                "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
                "typeof PLUGIN_FBINSTANT": JSON.stringify(false),
                "typeof FEATURE_SOUND": JSON.stringify(true)
            }),

            new CleanWebpackPlugin()
        ]
    },
];
