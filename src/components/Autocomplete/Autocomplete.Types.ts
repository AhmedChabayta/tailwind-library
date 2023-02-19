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
}
