import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
    return {
        mode,
        entry: paths.entry,
        resolve: buildResolvers(options),
        output: {
            filename: '[name].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
