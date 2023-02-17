export interface AccordionContextType {
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
}

export interface AccordionProviderProps {
  children: React.ReactNode;
  className?: string;
}
export interface AccordionProps {
  ({ children }: AccordionProviderProps): JSX.Element;
  Item({ index, children }: AccordionItemProps): JSX.Element;
  className?: string;
}
export interface AccordionItemProps {
  index: number;
  children: React.ReactNode;
  label: string;
  labelClassName?: string;
  chevronClassName?: string;
  className?: string;
  contentClassName?: string;
  labelContainerClassName?: string;
  chevronContainerClassName?: string;
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}
