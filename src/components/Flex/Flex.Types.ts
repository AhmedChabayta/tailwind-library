import { GeneralInterface } from "../General.Types";

export interface FlexProps
  extends GeneralInterface,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  col?: boolean;
  align?: string;
  justify?: string;
  wrap?: string;
}
