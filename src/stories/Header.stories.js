import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  // このコンポーネントには自動生成された Autodocs エントリがあります: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // ストーリーを配置する方法の詳細については、https://storybook.js.org/docs/react/configure/story-layout を参照してください。
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
