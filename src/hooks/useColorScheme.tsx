import { useEffect } from "react";

import { applyThemePreference, useSchemeStore } from "@src/Store/schemeStore";

const selector = (state: any) => state.colorScheme;

export const useTheme = () => {
  const theme = useSchemeStore(selector);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};
