import { GeneralInterface } from "../General.Types";

export interface SidebarProps
  extends GeneralInterface,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  show?: false | true;
}
