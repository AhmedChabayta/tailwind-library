import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import classnames from "classnames";
import { motion } from "framer-motion";
import { Flex, Typography, Button } from "@src/components";
import {
  AccordionContext,
  AccordionItemProps,
  DEFAULT_STYLES,
} from "@src/components/Accordion";

export const AccordionItem = function AccordionItem(props: AccordionItemProps) {
  const {
    index,
    children,
    label,
    className,
    labelClassName,
    chevronClassName,
    chevronContainerClassName,
    contentClassName,
    labelContainerClassName,
    icon,
  } = props;
  const { activeIndex, setActiveIndex } = React.useContext(AccordionContext)!;

  const handleClick = () => {
    if (activeIndex === index) {
      setActiveIndex(null!);
    } else {
      setActiveIndex(index);
    }
  };

  const isActive = activeIndex === index;

  const Icon = icon || ChevronUpIcon;

  return (
    <Flex col className={classnames(DEFAULT_STYLES.item.container, className)}>
      <Flex
        onClick={handleClick}
        className={classnames(
          DEFAULT_STYLES.item.labelContainer,
          labelContainerClassName
        )}
      >
        <Typography
          className={classnames(
            DEFAULT_STYLES.item.labelContainer,
            labelClassName
          )}
        >
          {label}
        </Typography>

        <motion.div
          className={classnames(
            DEFAULT_STYLES.item.chevronContainer,
            chevronContainerClassName
          )}
          animate={{ rotate: isActive ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <Button className="h-fit bg-transparent p-0">
            <Icon
              className={classnames(
                chevronClassName,
                DEFAULT_STYLES.item.chevron
              )}
            />
          </Button>
        </motion.div>
      </Flex>

      <motion.div
        className={classnames(
          DEFAULT_STYLES.item.contentContainer,
          contentClassName
        )}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "100%" : "0px",
          color: isActive ? "inherit" : "transparent",
        }}
        transition={{
          duration: 0.1,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </Flex>
  );
};
