import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "@/styles/index.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
