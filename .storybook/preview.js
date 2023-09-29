import "../src/index.css";

//👇 UI のアクション ( onArchiveTask および onPinTask ) を記録するように Storybook を構成します。
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
