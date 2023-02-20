import classnames from "classnames";

export const containerStyles = {
  container: classnames(
    "items-center",
    "relative",
    "min-w-[150px]",
    "rounded-md border",
    "border-gray-300",
    "bg-gray-100 dark:bg-transparent",
    "px-4",
    "py-2",
    "focus:outline-none",
    "space-y-1",
    "shadow-lg"
  ),
  label: classnames(
    "absolute",
    "left-1",
    "top-[-22px]",
    "text-xs",
    "capitalize"
  ),
  actionsContainer: classnames(
    "m-0",
    "h-full",
    "items-center",
    "justify-center",
    "space-y-2",
    "bg-transparent"
  ),
  clearIcon: classnames("w-3", "group-hover:text-red-500"),
  copyIcon: classnames("w-3", "group-hover:text-green-500"),
  optionsContainer: classnames(
    "absolute top-full left-0 z-10 max-h-[300px] w-full overflow-scroll rounded-md bg-gray-200 shadow-lg dark:border dark:border-gray-300 dark:bg-gray-800"
  ),
  options: classnames(
    "relative",
    "flex",
    "cursor-pointer",
    "items-center",
    "justify-start",
    "p-6"
  ),
  optionAlt: classnames("cursor-pointer", "px-4", "py-2"),
  chevron: classnames(
    "w-7",
    "cursor-pointer",
    "text-gray-700",
    "transition-transform",
    "duration-300",
    "dark:text-gray-300"
  ),
};
