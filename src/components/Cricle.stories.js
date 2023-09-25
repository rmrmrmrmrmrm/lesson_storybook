import Cricle from "./Cricle";

// カタログ設定
export default {
  component: Cricle,
  title: "Cricle",
};

// カタログ項目
export const Default = {
  args: {
    label: "Button",
    variant: "orange",
  },
};
export const Green = {
  args: {
    label: "ぼたん",
    variant: "green",
    size: "large",
  },
};
export const Yellow = {
  args: {
    label: "ボタン",
    variant: "yellow",
    size: "small",
  },
};
