const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/ui/components/**/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
                controls: false,
            },
        }
    ],
    webpackFinal: async (config) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin({}));
        return config;
    },
};
