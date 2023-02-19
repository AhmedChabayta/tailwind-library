import React from "react";
import { Chip } from "./Chip.Types";
import classnames from "classnames";
import { Typography, Box, Flex } from "@src/components";

const Chip = React.forwardRef<HTMLDivElement, Chip>((props, ref) => {
  const { className, value, ...rest } = props;
  return (
    <Flex
      ref={ref}
      className={classnames(
        className,
        "absolute",
        "z-50",
        "h-14",
        "w-14",
        "items-center",
        "justify-center",
        "rounded-full",
        "bg-blue-500"
      )}
      {...rest}
    >
      <Box>
        <Typography>{value}</Typography>
      </Box>
    </Flex>
  );
});
Chip.displayName = "Chip";
export default Chip;
