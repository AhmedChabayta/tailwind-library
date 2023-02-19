import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GeneralInterface } from "../General.Types";

interface Tooltip {
  text?: string;
  children: React.ReactNode;
}

export const Tooltip = ({ text, children }: Tooltip) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <div>{children}</div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md bg-white p-2 text-sm font-medium text-gray-800 shadow-lg">
          {text}
          <svg
            className="absolute left-0 top-full h-2 w-full text-white"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </Transition>
    </div>
  );
};
