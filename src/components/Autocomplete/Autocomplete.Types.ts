export type AutocompleteProps = {
  items: any[];
  onSelect: (selectedItem: string) => void;
  className?: string;
  chevronClassName?: string;
};
