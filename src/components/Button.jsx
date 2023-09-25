import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * ユーザー対話のための主要な UI コンポーネント
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * これはこのページの主要な行動喚起ですか?
   */
  primary: PropTypes.bool,
  /**
   * 使用する背景色
   */
  backgroundColor: PropTypes.string,
  /**
   * ボタンの大きさはどのくらいにすればよいですか?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   ※ボタン内容
   */
  label: PropTypes.string.isRequired,
  /**
   * オプションのクリック ハンドラー
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
