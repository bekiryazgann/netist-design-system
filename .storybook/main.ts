import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import turbosnap from "vite-plugin-turbosnap"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-styling",
        "@chromatic-com/storybook"
    ],

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    docs: {},

    async viteFinal(config, { configType }) {
        return mergeConfig(config, {
            plugins:
                configType === "PRODUCTION"
                    ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
                    : [],
        })
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
}
export default config