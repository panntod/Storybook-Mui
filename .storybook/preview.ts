import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Preview } from "@storybook/react";
import { themes } from "../src/themes";

// Load Roboto fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

// Preview is an object of type Preview that configures Storybook's behavior.
const preview: Preview = {
  // parameters within preview define global parameters for all stories
  parameters: {
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // implementation of the plugin so that each component will be automatically documented
  tags: ["autodocs"],
};

export default preview;

// An array of decorators is exported, which are functions that wrap stories to add context providers.
export const decorators = [
  withThemeFromJSXProvider({
    themes,
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
