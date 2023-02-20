"use client";

import { Button, Switch } from "@src/components";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React from "react";
import { applyThemePreference, useSchemeStore } from "@src/Store/schemeStore";

const ToggleTheme = ({
  as = "switch",
  className,
}: {
  as?: "switch" | "button";
  className?: string;
}) => {
  const toggleColorScheme = useSchemeStore((state) => state.setColorScheme);
  const colorScheme = useSchemeStore((state) => state.colorScheme);

  React.useEffect(() => {
    applyThemePreference(colorScheme);
  }, [colorScheme]);
  return (
    <>
      {as === "button" ? (
        <Button
          className={className}
          onClick={() =>
            toggleColorScheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          {colorScheme === "dark" ? (
            <SunIcon className="w-5" />
          ) : (
            <MoonIcon className="w-5" />
          )}
        </Button>
      ) : (
        <Switch
          OnIcon={MoonIcon}
          OffIcon={SunIcon}
          id="theme_switch"
          checked={colorScheme === "dark"}
          onChange={(e) => {
            e.preventDefault();
            toggleColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
          }}
        />
      )}
    </>
  );
};
export default ToggleTheme;
