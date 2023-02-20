import React, { forwardRef, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Input from "../Input/Input";
import Box from "../Box/Box";
import classnames from "classnames";

type Props = {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const Search = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    placeholder = "Search",
    defaultValue = "",
    onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (inputRef.current && onChange) {
      onChange(inputRef.current.value);
    }
  };

  return (
    <Box
      className={classnames(
        `relative`,
        "bg-gray-400 p-2  dark:bg-transparent ",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon
          className="h-6 w-6 text-gray-900 dark:text-gray-300"
          aria-hidden="true"
        />
      </span>
      <Input
        ref={ref}
        className="block w-full text-gray-900 dark:text-gray-300"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        aria-label="Search"
      />
    </Box>
  );
});
Search.displayName = "Search";
export default Search;
