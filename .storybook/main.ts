module.exports = {
  stories: ["../src/**/**/*.stories.ts"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/angular",
    options: {}
  },

  staticDirs: ["../src/assets", "./assets"]
};
