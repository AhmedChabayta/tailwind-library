import { GeneralInterface } from "../General.Types";

export interface BoxProps
  extends GeneralInterface,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {}
