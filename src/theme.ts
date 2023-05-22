import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  config,
  color: {
    red: "#b21807",
    orange: "#c8a17e",
    yellow: "#efd079",
    blue: "#717c86",
    gray: "#2E130B",
    pink: "#FF0000",
  },
});

export default theme;
