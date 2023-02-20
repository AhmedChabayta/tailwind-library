import Box from "@src/components/Box/Box";
import { AccordionProvider } from "./AccordionProvider";
import classnames from "classnames";
import { DEFAULT_STYLES } from "./Accordion.Styles";
import { AccordionItemProps, AccordionProps } from "./Accordion.Types";
import { AccordionItem } from "./AccordionItem";
import React, { FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type AccordionType = FC<AccordionProps> & { Item: FC<AccordionItemProps> };

export const Accordion: AccordionType = (props: AccordionProps) => {
  const { children, className } = props;

  return (
    <AccordionProvider>
      <Box className={classnames(className, DEFAULT_STYLES.accordion)}>
        {children}
      </Box>
    </AccordionProvider>
  );
};

export default Accordion;
Accordion.Item = AccordionItem;
