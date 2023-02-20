export interface AutocompleteProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "className"> {
  options: any[];
  atSelect: (selectedItem: string) => void;
  className?: string;
  chevronClassName?: string;
  placeholder?: string;
  label: string;
  customRef?: boolean;
  id: string;
  labelClassName?: string;
  inputClassName?: string;
  actionsContainerClassName?: string;
  iconClassName?: string;
  optionsContainerClassName?: string;
  optionsClassName?: string;
}
