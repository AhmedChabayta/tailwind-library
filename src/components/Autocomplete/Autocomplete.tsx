"use client";

import {
  ChevronDownIcon,
  XMarkIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";
import classnames from "classnames";
import React from "react";
import { Button, Flex, Typography } from "@src/components";
import { AutocompleteProps } from "./Autocomplete.Types";
import uuid from "react-uuid";
import { useCopyToClipboard } from "@src/hooks";

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
    labelClassName,
    inputClassName,
    actionsContainerClassName,
    clearIconClassName,
    ...rest
  } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [copyToClipboard, { isCopied, error }] = useCopyToClipboard();

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
          "items-center",
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
          className={classnames(
            labelClassName,
            "absolute",
            "left-1",
            "top-[-22px]",
            "text-xs",
            "capitalize"
          )}
          htmlFor={id}
          as="label"
        >
          {label}
        </Typography>

        <input
          id={id}
          placeholder={placeholder}
          className={classnames(
            inputClassName,
            "flex-1",
            "bg-transparent",
            "text-gray-900",
            "outline-none",
            "focus:outline-none",
            "dark:text-gray-300"
          )}
          ref={customRef ? ref : inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          {...rest}
        />

        <Flex
          style={{
            visibility: inputValue.length > 0 ? "visible" : "hidden",
          }}
          col
          className={classnames(
            actionsContainerClassName,
            "m-0",
            "h-full",
            "items-center",
            "justify-center",
            "space-y-2",
            "bg-transparent"
          )}
        >
          <Button
            aria-details="clear input button"
            type="button"
            className="group m-0 p-0"
            onClick={() => {
              atSelect("");
              setInputValue("");
            }}
          >
            <XMarkIcon
              className={classnames(
                "w-3",
                "group-hover:text-red-500",
                clearIconClassName
              )}
            />
          </Button>
          <Button
            type="button"
            aria-details="copy input button"
            onClick={() => {
              copyToClipboard(inputValue);
              alert(`coped ${inputValue}`);
            }}
            className="group m-0 p-0"
          >
            <ClipboardIcon
              className={classnames(
                "w-3",
                "group-hover:text-green-500",
                clearIconClassName
              )}
            />
          </Button>
        </Flex>

        <hr className="mx-3 h-8 w-[0.1px] self-center border border-gray-300" />

        {showOptions && filteredItems && (
          <ul className="absolute top-full left-0 z-10 max-h-[300px] w-full overflow-scroll rounded-md bg-gray-200 shadow-lg dark:border dark:border-gray-300 dark:bg-gray-800 ">
            {filteredItems?.length > 0 || inputValue.length
              ? filteredItems?.map((option) => (
                  <li
                    key={uuid()}
                    onClick={() => handleItemSelect(option)}
                    className="relative flex cursor-pointer items-center justify-start p-6"
                  >
                    <Typography>{option}</Typography>
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
