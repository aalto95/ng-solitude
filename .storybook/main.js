module.exports = {
  stories: ["../src/**/**/*.stories.ts"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "storybook-addon-designs",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  staticDirs: ["../src/assets", "./assets"],
  docs: {
    autodocs: true
  }
};
