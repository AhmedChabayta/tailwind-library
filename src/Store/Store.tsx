// import { create, StateCreator } from "zustand";
// import { components } from "@src/Theme/Components/components";
// const { Button, Flex, Grid, Box, Typography, Sidebar } = components;

// type Theme = {
//   Button?: string;
//   Flex?: string;
//   Grid?: string;
//   Box?: string;
//   Typography?: string;
//   Sidebar?: string;
//   Accordion?: {
//     AccordionComponent: string;
//     AccordionItem: {
//       item: string;
//       labelContainerClassName: string;
//       labelClassName: string;
//       contentClassName: string;
//       chevronClassName: string;
//     };
//   };
//   shadows?: {
//     xs: string;
//     sm: string;
//     md: string;
//     lg: string;
//     xl: string;
//     "2xl": string;
//     "3xl": string;
//     "4xl": string;
//     "5xl": string;
//     "6xl": string;
//     "7xl": string;
//     "8xl": string;
//     "9xl": string;
//   };
// };
// const customTheme: Theme = {
//   shadows: {
//     xs: "shadow-xs",
//     sm: "shadow-sm",
//     md: "shadow-md",
//     lg: "shadow-lg",
//     xl: "shadow-xl",
//     "2xl": "shadow-2xl",
//     "3xl": "shadow-3xl",
//     "4xl": "shadow-4xl",
//     "5xl": "shadow-5xl",
//     "6xl": "shadow-6xl",
//     "7xl": "shadow-7xl",
//     "8xl": "shadow-8xl",
//     "9xl": "shadow-9xl",
//   },
// };

// type ThemeStore = {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// };

// const theme = {
//   Button,
//   Flex,
//   Grid,
//   Box,
//   Typography,
//   Sidebar,
//   customTheme,
// };

// export const useThemeStore = create<ThemeStore>((set) => ({
//   theme: theme,
//   setTheme: (theme: Theme) => set((state) => ({ ...state, theme })),
// }));
