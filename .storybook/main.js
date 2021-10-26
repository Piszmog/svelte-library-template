const path = require('path');

module.exports = {
    features: {
        postcss: true
    },
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-svelte-csf",
        "@storybook/addon-postcss"
    ],
    "svelteOptions": {
        "preprocess": require("../svelte.config.js").preprocess
    },
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: [/\.stories\.js$/, /index\.ts$/],
            use: [require.resolve('@storybook/source-loader')],
            include: [path.resolve(__dirname, '../src')],
            enforce: 'pre',
        });
        return config;
    },
}
