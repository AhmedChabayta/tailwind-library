import { GeneralInterface } from "../General.Types";

export interface ButtonProps
  extends GeneralInterface,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  disabled?: boolean;
}
