import React from "react";
import Flex from "../Flex/Flex";
import { Center } from "./Center.Types";
import classname from "classnames";

const Center: React.ForwardRefExoticComponent<
  Center & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, Center>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <Flex
      className={classname(
        className,
        "justify-center",
        "items-center",
        "h-full",
        "w-full"
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  );
});
Center.displayName = "Center";
export default Center;
