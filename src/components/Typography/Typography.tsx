import React from "react";
import { Elements, TypographyProps } from "./Typography.Types";
import { Code } from "@src/components";
import classnames from "classnames";

const Typography = React.forwardRef<
  React.HTMLAttributes<Elements> | React.LabelHTMLAttributes<HTMLLabelElement>,
  TypographyProps
>((props, ref) => {
  const { as = "p", className, children, ...rest } = props;

  return (
    <>
      {as === "code" ? (
        <Code className={className}>{children}</Code>
      ) : (
        React.createElement(
          as,
          {
            ref,
            className: classnames(
              className,
              "text-inherit",
              "dark:text-inherit"
            ),
            ...rest,
          },
          children
        )
      )}
    </>
  );
});
Typography.displayName = "Typography";
export default Typography;
