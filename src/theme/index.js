import { theme } from "@chakra-ui/core";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const customTheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    brand: {
      50: "#ffe2e7",
      100: "#ffb3bb",
      200: "#fc8393",
      300: "#f9526d",
      400: "#f6224b",
      500: "#dd0939",
      600: "#ad0320",
      700: "#7c000e",
      800: "#4d0002",
      900: "#200400",
    },
  },
};
