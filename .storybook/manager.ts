import { addons } from "@storybook/manager-api";
import { sbThemes } from "./theme";
import "./storybook.css";

addons.setConfig({
  theme: sbThemes.manager,
});
