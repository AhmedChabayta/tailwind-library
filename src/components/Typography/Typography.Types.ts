import { GeneralInterface } from "../General.Types";
export type Elements =
  | HTMLParagraphElement
  | HTMLHeadingElement
  | HTMLAnchorElement
  | HTMLElement
  | HTMLPreElement
  | HTMLQuoteElement
  | HTMLSpanElement
  | HTMLLabelElement;

export interface TypographyProps
  extends GeneralInterface,
    Omit<React.HTMLAttributes<Elements>, "className"> {
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
    | "span"
    | "label";
  className?: string;
  htmlFor?: string;
}
