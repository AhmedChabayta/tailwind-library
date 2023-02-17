"use client";

import { Box, Button, Flex, Typography } from "@src/components";
import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import classnames from "classnames";
import {
  AccordionContextType,
  AccordionItemProps,
  AccordionProps,
  AccordionProviderProps,
} from "./Accordion.Provider.Types";

export const AccordionContext =
  React.createContext<AccordionContextType | null>({
    activeIndex: 0,
    setActiveIndex: (index: number) => index,
  });

//Accordion Provider
const AccordionProvider = (props: AccordionProviderProps) => {
  const { children } = props;
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const contextValue: AccordionContextType = {
    activeIndex,
    setActiveIndex,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

//Accordion
const Accordion: AccordionProps = (props) => {
  const { children, className } = props;
  const DEFAULT_ACCORDION_CONTAINER_CLASSNAME =
    "DEFAULT_ACCORDION_CONTAINER_CLASSNAME";
  return (
    <AccordionProvider>
      <Box
        className={classnames(className, DEFAULT_ACCORDION_CONTAINER_CLASSNAME)}
      >
        {children}
      </Box>
    </AccordionProvider>
  );
};

//Accordion.Item
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
  const DEFAULT_ACCORDION_ITEM_CLASSNAME = "DEFAULT_ACCORDION_ITEM_CLASSNAME";
  const DEFAULT_ACCORDION_LABEL_CLASSNAME = "DEFAULT_ACCORDION_LABEL_CLASSNAME";
  const DEFAULT_ACCORDION_LABEL_CONTAINER_CLASSNAME =
    "DEFAULT_ACCORDION_LABEL_CONTAINER_CLASSNAME";
  const DEFAULT_ACCORDION_CHEVRON_CONTAINER_CLASSNAME =
    "DEFAULT_ACCORDION_CHEVRON_CONTAINER_CLASSNAME";
  const DEFAULT_ACCORDION_CHEVRON_CLASSNAME =
    "DEFAULT_ACCORDION_CHEVRON_CLASSNAME";
  const DEFAULT_ACCORDION_CONTENT_CONTAINER_CLASSNAME =
    "DEFAULT_ACCORDION_CONTENT_CONTAINER_CLASSNAME";

  const Icon = icon || ChevronUpIcon;

  return (
    <Flex
      col
      className={classnames(DEFAULT_ACCORDION_ITEM_CLASSNAME, className)}
    >
      <Flex
        onClick={handleClick}
        className={classnames(
          DEFAULT_ACCORDION_LABEL_CONTAINER_CLASSNAME,
          labelContainerClassName
        )}
      >
        <Typography
          className={classnames(
            DEFAULT_ACCORDION_LABEL_CLASSNAME,
            labelClassName
          )}
        >
          {label}
        </Typography>

        <motion.div
          className={classnames(
            DEFAULT_ACCORDION_CHEVRON_CONTAINER_CLASSNAME,
            chevronContainerClassName
          )}
          animate={{ rotate: isActive ? 0 : 180 }}
          transition={{ duration: 0.2 }}
        >
          <Button className="h-fit bg-transparent p-0">
            <Icon
              className={classnames(
                chevronClassName,
                DEFAULT_ACCORDION_CHEVRON_CLASSNAME
              )}
            />
          </Button>
        </motion.div>
      </Flex>

      <motion.div
        className={classnames(
          DEFAULT_ACCORDION_CONTENT_CONTAINER_CLASSNAME,
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
Accordion.Item = AccordionItem;
export default Accordion;
