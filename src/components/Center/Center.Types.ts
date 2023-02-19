import React from "react";
import { GeneralInterface } from "../General.Types";

export interface Center
  extends GeneralInterface,
    Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {}
