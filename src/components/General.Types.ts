export type Children = React.ReactNode;

type tailwind = string;

type ShadowSize =
  | "shadow-xs"
  | "shadow-sm"
  | "shadow-md"
  | "shadow-lg"
  | "shadow-xl"
  | "shadow-2xl"
  | `shadow-[${string}]`;

type ShadowProps = {
  shadow?: Array<
    | `hover:${ShadowSize}`
    | ShadowSize
    | `sm:${ShadowSize}`
    | `md:${ShadowSize}`
    | `lg:${ShadowSize}`
    | `xl:${ShadowSize}`
    | `before:${ShadowSize}`
    | `after:${ShadowSize}`
  >;
};

export interface GeneralInterface {
  children?: Children;
  title?: string;
  className?: tailwind;
  shadow?: tailwind;
}
