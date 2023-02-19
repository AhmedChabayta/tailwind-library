"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import classnames from "classnames";
import React from "react";
import { Button, Flex, Typography } from "@src/components";
import { AutocompleteProps } from "./Autocomplete.Types";
import uuid from "react-uuid";

const Autocomplete: React.FC<AutocompleteProps> = React.forwardRef<
  HTMLInputElement,
  AutocompleteProps
>((props, ref) => {
  const {
    options,
    atSelect,
    className,
    chevronClassName,
    placeholder,
    label,
    customRef,
    id,
    ...rest
  } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const filteredItems = React.useMemo(() => {
    try {
      const OPTIONS = options?.filter(
        (item) =>
          typeof item === "string" &&
          item.toLowerCase().includes(inputValue.toLowerCase())
      );
      return OPTIONS;
    } catch (error) {}
  }, [options, inputValue]);

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

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = event;
      setInputValue(target.value);
      setShowOptions(true);
    },
    []
  );

  const handleItemSelect = React.useCallback(
    (item: string) => {
      atSelect(item);
      setInputValue(item);
      setShowOptions(false);
    },
    [atSelect]
  );

  return (
    <>
      <Flex
        ref={wrapperRef}
        className={classnames(
          className,
          "relative",
          "min-w-[150px]",
          "rounded-md border",
          "border-gray-300",
          "bg-gray-100 dark:bg-transparent",
          "px-4",
          "py-2",
          "focus:outline-none",
          "space-y-1"
        )}
      >
        <Typography
          className="absolute left-1 top-[-22px] text-xs capitalize"
          htmlFor={id}
          as="label"
        >
          {label}
        </Typography>

        <input
          id={id}
          placeholder={placeholder}
          className="bg-transparent text-gray-900 outline-none focus:outline-none dark:text-gray-300"
          ref={customRef ? ref : inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          {...rest}
        />
        {inputValue.length > 0 && (
          <Button
            onClick={() => {
              atSelect("");
              setInputValue("");
            }}
            className="absolute top-1 right-[17%] m-0 bg-transparent p-0"
          >
            <XMarkIcon className="w-4" />
          </Button>
        )}

        {showOptions && filteredItems && (
          <ul className="absolute top-full left-0 z-10 max-h-[300px] w-full overflow-scroll rounded-md bg-gray-200 shadow-lg dark:border dark:border-gray-300 dark:bg-gray-800 ">
            {filteredItems?.length > 0 || inputValue.length
              ? filteredItems?.map((item) => (
                  <li
                    key={uuid()}
                    onClick={() => handleItemSelect(item)}
                    className="cursor-pointer px-4 py-2 "
                  >
                    <Typography>{item}</Typography>
                  </li>
                ))
              : options?.map((option) => (
                  <li
                    key={uuid()}
                    onClick={() => handleItemSelect(option)}
                    className="cursor-pointer px-4 py-2 "
                  >
                    <Typography>{option}</Typography>
                  </li>
                ))}
          </ul>
        )}

        <Button
          aria-label={showOptions ? "Hide options" : "Show options"}
          type="button"
          className="h-fit bg-transparent p-0 "
        >
          <ChevronDownIcon
            onClick={() =>
              setShowOptions((prev) => (prev === true ? false : true))
            }
            className={classnames(
              chevronClassName,
              "w-7 cursor-pointer text-gray-700 transition-transform duration-300 dark:text-gray-300",
              showOptions ? "rotate-180" : "rotate-0"
            )}
          />
        </Button>
      </Flex>
    </>
  );
});
Autocomplete.displayName = "Autocomplee";

export default Autocomplete;
