import "../src/index.css";

// msw アドオンを登録します
import { initialize, mswDecorator } from "msw-storybook-addon";

// MSWを初期化する
initialize();

// MSW アドオン デコレータをグローバルに提供します
export const decorators = [mswDecorator];

//👇 UI のアクション ( onArchiveTask および onPinTask ) を記録するように Storybook を構成します。
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
