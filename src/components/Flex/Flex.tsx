import React from "react";
import classnames from "classnames";
import { FlexProps } from "./Flex.Types";


const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    children,
    className,
    col,
    align,
    justify,
    wrap = "flex-nowrap",
    ...rest
  } = props;

  const direction = col ? "flex-col" : "";
  const DEFAULT_FLEX_CLASSNAME = "DEFAULT_FLEX_CLASSNAME";
  return (
    <div
      ref={ref}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={classnames(
        DEFAULT_FLEX_CLASSNAME,
        className,
        align,
        justify,
        direction,
        wrap
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
Flex.displayName = "Flex";
export default Flex;
