import classNames from "classnames";
import { Input } from "./Input.Types";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, Input>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      className={classNames(
        className,
        "flex-1",
        "bg-transparent",
        "text-gray-900",
        "dark:text-gray-300",
        "outline-none",
        "focus:outline-none"
      )}
      ref={ref}
      {...rest}
    />
  );
});
Input.displayName = "Input";
export default Input;
