import React from "react";
import classnames from "classnames";
import { ButtonProps } from "./Button.Types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { children, disabled, className, shadow, ...rest } = props;

    const IF_DISABLED = disabled
      ? "bg-gray-800 cursor-not-allowed active:scale-1"
      : "";

    const DEFAULT_BUTTON_CLASSNAME = disabled
      ? "DEFAULT_BUTTON_DISABLED_CLASSNAME"
      : "DEFAULT_BUTTON_CLASSNAME";

    return (
      <button
        disabled={disabled}
        ref={ref}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={classnames(
          DEFAULT_BUTTON_CLASSNAME,
          className,
          shadow,
          IF_DISABLED,
          "text-gray-900",
          "dark:text-gray-300"
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
