import { GeneralInterface } from "../General.Types";

export interface Chip
  extends GeneralInterface,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  value: number | string;
}
