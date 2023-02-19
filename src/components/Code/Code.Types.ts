import { GeneralInterface } from "@src/components/General.Types";

export interface Code
  extends GeneralInterface,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}
