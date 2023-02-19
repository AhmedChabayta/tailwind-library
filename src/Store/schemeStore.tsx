import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface THEME_TYPES {
  THEME_DARK: "dark";
  THEME_LIGHT: "light";
}

const THEME_TYPES: THEME_TYPES = {
  THEME_DARK: "dark",
  THEME_LIGHT: "light",
};

type ColorScheme = "dark" | "light";

export interface ColorSchemeState {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: React.SetStateAction<ColorScheme>) => void;
}
export const applyThemePreference = (theme: ColorScheme) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

export const useSchemeStore = create<ColorSchemeState>()(
  persist(
    (set) => ({
      colorScheme: THEME_LIGHT,
      setColorScheme: () =>
        set((state) => ({
          colorScheme:
            state.colorScheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "color-scheme-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
