"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import classnames from "classnames";
import React from "react";
import { Button, Flex } from "@src/components";
import { AutocompleteProps } from "./Autocomplete.Types";

const Autocomplete = (props: AutocompleteProps) => {
  const { items, onSelect, className, chevronClassName } = props;
  const [filteredItems, setFilteredItems] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
    setFilteredItems(
      items.filter(
        (item) =>
          typeof item === "string" &&
          item.toLowerCase().includes(target.value.toLowerCase())
      )
    );

    setShowOptions(true);
  };

  const handleItemSelect = React.useCallback(
    (item: string) => {
      onSelect(item);
      setInputValue("");
      setFilteredItems([item, item]);
      setShowOptions(false);
    },
    [onSelect]
  );

  return (
    <Flex
      ref={wrapperRef}
      className={classnames(
        className,
        "relative",
        "min-w-[150px]",
        "rounded-md border",
        "border-gray-300",
        "bg-white",
        "px-4",
        "py-2",
        "focus:outline-none",
        "space-y-1"
      )}
    >
      <input
        className="bg-transparent text-black outline-none focus:outline-none"
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event)
        }
      />
      {showOptions && filteredItems && (
        <ul className="absolute top-full left-0 z-10 max-h-[300px] w-full overflow-scroll rounded-md border border-gray-300 bg-white shadow-lg ">
          {filteredItems.length > 0
            ? filteredItems.map((item) => (
                <li
                  key={item}
                  onClick={() => handleItemSelect(item)}
                  className="cursor-pointer px-4 py-2 text-black odd:bg-gray-200 hover:bg-gray-100 "
                >
                  {item}
                </li>
              ))
            : items.map((item) => (
                <li
                  key={item}
                  onClick={() => handleItemSelect(item)}
                  className="cursor-pointer px-4 py-2 text-black odd:bg-gray-200 hover:bg-gray-100 "
                >
                  {item}
                </li>
              ))}
        </ul>
      )}

      <Button
        aria-label={showOptions ? "Hide options" : "Show options"}
        type="button"
        className="h-fit bg-transparent p-0"
      >
        <ChevronDownIcon
          onClick={() =>
            setShowOptions((prev) => (prev === true ? false : true))
          }
          className={classnames(
            chevronClassName,
            "w-7 cursor-pointer fill-gray-900"
          )}
        />
      </Button>
    </Flex>
  );
};

export default Autocomplete;
