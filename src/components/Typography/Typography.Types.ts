import { GeneralInterface } from "../General.Types";

export interface TypographyProps
  extends GeneralInterface,
    Omit<React.HTMLAttributes<any>, "className"> {
  as?:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "a"
    | "strike"
    | "sub"
    | "sup"
    | "blockquote"
    | "pre"
    | "code"
    | "kbd"
    | "samp"
    | "var"
    | "cite"
    | "abbr"
    | "q"
    | "small"
    | "big"
    | "span";
  className?: string;
}
