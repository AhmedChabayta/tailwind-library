import React from "react";
import {
  AccordionContextType,
  AccordionProviderProps,
} from "./Accordion.Types";

export const AccordionContext =
  React.createContext<AccordionContextType | null>({
    activeIndex: 0,
    setActiveIndex: (index: number) => index,
  });

//Accordion Provider
export const AccordionProvider = (props: AccordionProviderProps) => {
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
