import React from "react";
import classnames from "classnames";
import { BoxProps } from "./Box.Types";

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} ref={ref} className={classnames(className)}>
      {children}
    </div>
  );
});
Box.displayName = "Box";
export default Box;
