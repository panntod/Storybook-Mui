// main.ts
import * as path from "path";
import { Configuration } from "webpack";
import type { StorybookConfig } from "@storybook/nextjs";

// Customization of Storybook's Webpack configuration
const config: StorybookConfig = {
  webpackFinal: async (config: Configuration) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },
  // Specifies where Storybook should look for stories within the project, targeting MDX files and story
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // Includes a list of Storybook addons to enhance its functionality
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
  ],
  // Specifies that the project uses the Next.js framework with Storybook.
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  // Configures how TypeScript types are generated and handled
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
          : true,
    },
  },
};

export default config;
