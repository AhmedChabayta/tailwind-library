import { GeneralInterface } from "../General.Types";

export interface Input
  extends GeneralInterface,
    Omit<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "className"
    > {}
