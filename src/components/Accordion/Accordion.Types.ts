import { GeneralInterface } from "../General.Types";
import { AccordionItem } from "./AccordionItem";

export interface AccordionContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}
export interface AccordionProviderProps extends GeneralInterface {}

export interface AccordionProps extends Omit<GeneralInterface, "children"> {
  defaultIndex?: number;
  children:
    | React.ReactElement<AccordionItemProps>[]
    | React.ReactElement<AccordionItemProps>;
  title?: string;
}

export interface AccordionItemProps extends GeneralInterface {
  index: number;
  label: string;
  labelClassName?: string;
  chevronClassName?: string;
  contentClassName?: string;
  labelContainerClassName?: string;
  chevronContainerClassName?: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}
